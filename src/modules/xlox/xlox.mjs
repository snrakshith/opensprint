/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import { openai } from "../core/provider.mjs";
import { generateDocs } from "./generateDocs.mjs";

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message:
    "You have surpassed the 100 requests per 15 minutes rate limit, please try again later",
  standardHeaders: true,
  legacyHeaders: false,
});
const sample = `
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message:
    "You have surpassed the 100 requests per 15 minutes rate limit, please try again later",
  standardHeaders: true,
  legacyHeaders: false,
});
`;
// const sample = `
// export const getSummaryFromMultipleResponses = (...responses: string[]): string => {
//   for (const response of responses) {
//     const sanifiedResponse = sanityCheck(response);
//     if (sanifiedResponse) {
//       return sanifiedResponse;
//     }
//   }
//   // Use marker to indicate that no summary was found and identify location for cursor placement
//   return CURSOR_MARKER;
// };
// `;
// console.log(generateDocs(JSON.stringify(sample)));
async function main() {
  const completion = await openai.chat.completions.create({
    messages: generateDocs(JSON.stringify(sample)),
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0].message.content);
}

main();
