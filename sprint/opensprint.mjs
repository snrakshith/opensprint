/* eslint-disable no-undef */
import { epicSummary, generateUserStoryByEpic } from "./messages.mjs";
import { openai } from "./provider.mjs";

async function main() {
  const completion = await openai.chat.completions.create({
    messages: generateUserStoryByEpic(epicSummary),
    model: "gpt-3.5-turbo",
    // response_format: { type: "json_object" },
  });

  console.log(completion.choices[0]);
}

main();
