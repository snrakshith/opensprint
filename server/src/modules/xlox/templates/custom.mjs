export const ct1 = `
{{summary}}: summary of the function
{{#params}}
{{name}}: name of the parameter - {{type}}: type of the parameter - {{defaultValue}}: default parameter value - {{paramExplained}}: summary of the parameter
{{/params}}
{{returnExplained}}: description of the return value
`;
/**
 * apiLimiter: limits the number of requests per time window for an API
 *
 * @param {object} options - options for rate limit
 *     - windowMs: number -  time duration in milliseconds for the window
 *     - max: number - maximum number of requests allowed in the window
 *     - message: string - error message when the limit is exceeded
 *     - standardHeaders: boolean - whether to include standard headers
 *     - legacyHeaders: boolean - whether to include legacy headers
 *
 * @return {function} - middleware function that enforces rate limit
 */
