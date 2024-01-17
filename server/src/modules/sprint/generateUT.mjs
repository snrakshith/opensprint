import { epicSechma } from "./schema.mjs";

// const data = typeof epicSechma;
export const generateUTByStory = () => {
  const formatedMsg = `Generate 5 Unit Test cases for the user story: ${epicSechma[0].userStories[0].name}`;
  const block = [
    {
      role: "system",
      content: "You are a helpful assistant designed to output JSON.",
    },
    {
      role: "user",
      content: formatedMsg,
    },
  ];
  return block;
};
