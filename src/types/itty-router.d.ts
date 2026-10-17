declare module 'itty-router' {
  // Minimal type declarations to satisfy TypeScript when types are not installed.
  // The real package exposes a Router factory that returns a router object with
  // methods like get, post, put, delete, all, and a catch-all handler.

  export function Router(): any;

  // Some helper exports sometimes used by examples
  export function json(body: any, init?: ResponseInit): Response;

  const _default: typeof Router;
  export default _default;
}
