/* eslint-disable no-undef */
// import { epicSummary, generateUserStoryByEpic } from "./messages.mjs";
import { openai } from "./provider.mjs";
import { generateUTByStory } from "./generateUT.mjs";

// console.log(generateUTByStory());
async function main() {
  const completion = await openai.chat.completions.create({
    // messages: generateUserStoryByEpic(epicSummary),
    messages: generateUTByStory(),
    model: "gpt-3.5-turbo",
    // response_format: { type: "json_object" },
  });

  console.log(completion.choices[0]);
}

main();
