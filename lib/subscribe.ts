export type SubscribeResult = { mode: 'mock' } | { mode: 'live' };
export type SubscribeAdapter = (
  email: string,
  signal?: AbortSignal,
) => Promise<SubscribeResult>;
export function validateEmail(value: string): string | null {
  const email = value.trim();
  if (!email) return 'Enter your email address.';
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    return 'Enter a valid email address, such as you@example.com.';
  return null;
}
// PREVIEW ADAPTER: no network request, logging, or storage. Intentionally returns mock mode.
export const mockSubscribeAdapter: SubscribeAdapter = async (
  _email,
  signal,
) => {
  await new Promise<void>((resolve, reject) => {
    if (signal?.aborted)
      return reject(new DOMException('Aborted', 'AbortError'));
    const abort = () => {
      clearTimeout(timer);
      reject(new DOMException('Aborted', 'AbortError'));
    };
    const timer = setTimeout(() => {
      signal?.removeEventListener('abort', abort);
      resolve();
    }, 800);
    signal?.addEventListener('abort', abort, { once: true });
  });
  return { mode: 'mock' };
};
// Replace this single adapter with a real provider integration. Return live only after durable storage.
export async function subscribeEmail(
  email: string,
  signal?: AbortSignal,
  adapter: SubscribeAdapter = mockSubscribeAdapter,
): Promise<SubscribeResult> {
  const error = validateEmail(email);
  if (error) throw new Error(error);
  return adapter(email.trim().toLowerCase(), signal);
}
