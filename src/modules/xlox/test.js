/**
 * API rate limiter configuration.
 *
 * @typedef {Object} ApiLimiterConfig
 * @property {number} windowMs - The time window in milliseconds for rate limiting.
 * @property {number} max - The maximum number of requests allowed within the time window.
 * @property {string} message - The error message to display when the rate limit is exceeded.
 * @property {boolean} standardHeaders - Whether to include standard headers in the rate limit response.
 * @property {boolean} legacyHeaders - Whether to include legacy headers in the rate limit response.
 */

/**
 * Function to create an API rate limiter.
 *
 * @function apiLimiter
 * @returns {ApiLimiterConfig} - The API rate limiter configuration.
 */

// Example usage:
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message:
    "You have surpassed the 100 requests per 15 minutes rate limit, please try again later",
  standardHeaders: true,
  legacyHeaders: false,
});

/**
 * Generates a summary from multiple responses.
 *
 * @param {string[]} responses - The array of responses from which to generate a summary.
 * @returns {string} The generated summary.
 */
export const getSummaryFromMultipleResponses = (...responses) => {
  for (const response of responses) {
    const sanifiedResponse = sanityCheck(response);
    if (sanifiedResponse) {
      return sanifiedResponse;
    }
  }
  // Use marker to indicate that no summary was found and identify location for cursor placement
  return CURSOR_MARKER;
};

/**
 * API request limiter
 *
 * @function apiLimiter
 * @param {Object} options - Limiter options
 * @param {number} options.windowMs - Time window in milliseconds
 * @param {number} options.max - Maximum number of requests allowed within the window
 * @param {string} options.message - Message to be sent when the limit is reached
 * @param {boolean} options.standardHeaders - Flag indicating whether to include standard headers * @param {boolean} options.legacyHeaders - Flag indicating whether to include legacy headers
 * @returns {Function} - Express middleware function
 */
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message:
    "You have surpassed the 100 requests per 15 minutes rate limit, please try again later",
  standardHeaders: true,
  legacyHeaders: false,
});
