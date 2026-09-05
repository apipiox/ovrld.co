import { test, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
import React from 'react';
const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost',
});
Object.defineProperty(globalThis, 'window', {
  value: dom.window,
  configurable: true,
});
Object.defineProperty(globalThis, 'document', {
  value: dom.window.document,
  configurable: true,
});
Object.defineProperty(globalThis, 'navigator', {
  value: dom.window.navigator,
  configurable: true,
});
for (const key of [
  'HTMLElement',
  'HTMLInputElement',
  'Element',
  'Node',
  'Event',
  'MouseEvent',
  'MutationObserver',
])
  Object.defineProperty(globalThis, key, {
    value: dom.window[key as keyof Window],
    configurable: true,
  });
Object.defineProperty(globalThis, 'getComputedStyle', {
  value: dom.window.getComputedStyle,
  configurable: true,
});
Object.defineProperty(globalThis, 'IS_REACT_ACT_ENVIRONMENT', {
  value: true,
  writable: true,
});
const { render, fireEvent, cleanup, waitFor } =
  await import('@testing-library/react');
const { NotifyForm } = await import('../components/forms/notify-form');
const { subscribeEmail, validateEmail } = await import('../lib/subscribe');
afterEach(cleanup);
void test('rejects invalid input before invoking adapter and associates the inline error', async () => {
  let calls = 0;
  const ui = render(
    <NotifyForm
      adapter={async () => {
        calls++;
        return { mode: 'mock' };
      }}
    />,
  );
  const input = ui.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'invalid' } });
  fireEvent.submit(ui.getByRole('form'));
  assert.equal(calls, 0);
  assert.equal(input.getAttribute('aria-invalid'), 'true');
  assert.match(ui.getByRole('alert').textContent || '', /valid email/);
  assert.equal(document.activeElement, input);
});
void test('protects against duplicate submission, disables controls, and tells the truth about mock success', async () => {
  let calls = 0;
  let complete!: (v: { mode: 'mock' }) => void;
  const ui = render(
    <NotifyForm
      adapter={() => {
        calls++;
        return new Promise((resolve) => {
          complete = resolve;
        });
      }}
    />,
  );
  const input = ui.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'preview@example.com' } });
  const form = ui.getByRole('form');
  fireEvent.submit(form);
  fireEvent.submit(form);
  assert.equal(calls, 1);
  assert.equal(ui.getByRole('button').hasAttribute('disabled'), true);
  assert.equal(input.hasAttribute('disabled'), true);
  complete({ mode: 'mock' });
  await waitFor(() =>
    assert.match(
      ui.getByRole('status').textContent || '',
      /email has not been saved/,
    ),
  );
  assert.equal(ui.queryByRole('form'), null);
});
void test('failure is accessible, preserves email, and allows a successful retry', async () => {
  let calls = 0;
  const ui = render(
    <NotifyForm
      adapter={async () => {
        calls++;
        if (calls === 1) throw new Error('Provider unavailable');
        return { mode: 'live' };
      }}
    />,
  );
  const input = ui.getByRole('textbox') as HTMLInputElement;
  fireEvent.change(input, { target: { value: 'preview@example.com' } });
  fireEvent.submit(ui.getByRole('form'));
  await waitFor(() =>
    assert.match(ui.getByRole('alert').textContent || '', /try again/),
  );
  assert.equal(input.value, 'preview@example.com');
  assert.equal(ui.getByRole('button').hasAttribute('disabled'), false);
  fireEvent.submit(ui.getByRole('form'));
  await waitFor(() =>
    assert.match(
      ui.getByRole('status').textContent || '',
      /YOU’RE ON THE LIST/,
    ),
  );
  assert.equal(calls, 2);
});
void test('subscription boundary validates and normalizes, and aborted mock requests reject', async () => {
  assert.ok(validateEmail(''));
  assert.ok(validateEmail('missing@domain'));
  assert.equal(validateEmail('valid+tag@example.co'), null);
  let received = '';
  await subscribeEmail('  HELLO@EXAMPLE.COM  ', undefined, async (email) => {
    received = email;
    return { mode: 'mock' };
  });
  assert.equal(received, 'hello@example.com');
  const controller = new AbortController();
  controller.abort();
  await assert.rejects(subscribeEmail('test@example.com', controller.signal), {
    name: 'AbortError',
  });
});
