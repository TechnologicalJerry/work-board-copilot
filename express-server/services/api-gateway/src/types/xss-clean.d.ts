// `xss-clean` ships no type declarations and `@types/xss-clean` does not
// exist on npm. Minimal ambient typing for the default export used in
// src/middleware/security.ts (`xssClean()` returns an Express middleware).
declare module 'xss-clean' {
  import { RequestHandler } from 'express';

  function xssClean(): RequestHandler;

  export default xssClean;
}
