```js
"/**\n" +
  " * Rate limiter for API requests.\n" +
  " *\n" +
  " * @typedef {Object} ApiLimiter\n" +
  " * @property {number} windowMs - The time window in milliseconds for rate limiting.\n" +
  " * @property {number} max - The maximum number of requests allowed within the time window.\n" +
  " * @property {string} message - The error message to be displayed when the rate limit is exceeded.\n" +
  " * @property {boolean} standardHeaders - Whether to use standard headers for rate limiting.\n" +
  " * @property {boolean} legacyHeaders - Whether to use legacy headers for rate limiting.\n" +
  " */\n" +
  "\n" +
  "/**\n" +
  " * Represents a rate limiter for API requests.\n" +
  " *\n" +
  " * @function apiLimiter\n" +
  " * @returns {ApiLimiter} Rate limiter configuration object.\n" +
  " */\n" +
  "export const apiLimiter = rateLimit({\n" +
  "  windowMs: 15 * 60 * 1000, \n" +
  "  max: 100, \n" +
  "  message:\n" +
  '    "You have surpassed the 100 requests per 15 minutes rate limit, please try again later",\n' +
  "  standardHeaders: true,\n" +
  "  legacyHeaders: false, \n" +
  "});\n";
```
