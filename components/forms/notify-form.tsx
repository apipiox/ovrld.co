'use client';
import { useEffect, useId, useRef, useState, type SubmitEvent } from 'react';
import { ArrowUpRight, Check, LoaderCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  subscribeEmail,
  validateEmail,
  type SubscribeAdapter,
} from '@/lib/subscribe';
type State = 'default' | 'validation' | 'submitting' | 'success' | 'failure';
export function NotifyForm({
  compact = false,
  adapter,
}: {
  compact?: boolean;
  adapter?: SubscribeAdapter;
}) {
  const id = useId();
  const [email, setEmail] = useState('');
  const [state, setState] = useState<State>('default');
  const [error, setError] = useState('');
  const [isMock, setIsMock] = useState(true);
  const inFlight = useRef(false);
  const input = useRef<HTMLInputElement>(null);
  const request = useRef<AbortController | null>(null);
  useEffect(() => () => request.current?.abort(), []);
  async function submit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current || state === 'success') return;
    const issue = validateEmail(email);
    if (issue) {
      setError(issue);
      setState('validation');
      input.current?.focus();
      return;
    }
    inFlight.current = true;
    setState('submitting');
    setError('');
    request.current = new AbortController();
    try {
      const result = await subscribeEmail(
        email,
        request.current.signal,
        adapter,
      );
      if (request.current.signal.aborted) return;
      setIsMock(result.mode === 'mock');
      setEmail('');
      setState('success');
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') return;
      setError('Something went wrong. Please try again.');
      setState('failure');
    } finally {
      inFlight.current = false;
    }
  }
  return (
    <div className={`notify-form ${compact ? 'compact' : ''}`}>
      <output aria-live="polite" aria-atomic="true">
        {state === 'success' && (
          <div className="form-success">
            <Check aria-hidden="true" />
            <div>
              <p className="eyebrow lime">
                {isMock ? 'DEMO CONFIRMED' : 'YOU’RE ON THE LIST.'}
              </p>
              <p>
                {isMock
                  ? 'This is a preview. Your email has not been saved.'
                  : 'We’ll let you know when OVRLD 001 goes live.'}
              </p>
            </div>
          </div>
        )}
      </output>
      {state !== 'success' && (
        <form
          noValidate
          onSubmit={submit}
          aria-label="OVRLD 001 launch notification"
          aria-busy={state === 'submitting'}
        >
          <label htmlFor={id}>Email address</label>
          <div className="form-row">
            <Input
              ref={input}
              className="notify-input"
              id={id}
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              maxLength={254}
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (state === 'validation' || state === 'failure') {
                  setState('default');
                  setError('');
                }
              }}
              placeholder="you@example.com"
              disabled={state === 'submitting'}
              aria-invalid={state === 'validation'}
              aria-describedby={`${id}-note${error ? ` ${id}-error` : ''}`}
            />
            <Button
              type="submit"
              className="action notify-submit"
              disabled={state === 'submitting'}
            >
              {state === 'submitting' ? (
                <>
                  SUBMITTING{' '}
                  <LoaderCircle className="loading-icon" aria-hidden="true" />
                </>
              ) : (
                <>
                  NOTIFY ME <ArrowUpRight aria-hidden="true" />
                </>
              )}
            </Button>
          </div>
          <p id={`${id}-error`} className="form-error" role="alert">
            {error}
          </p>
          <p id={`${id}-note`} className="form-note">
            Preview form — emails are not stored yet.
          </p>
        </form>
      )}
    </div>
  );
}
