export const epicSummary = "Onboarding/Signup";
const generateUserStoryByEpic = (epicSummary) => {
  const include = "Summary, Acceptence Criteria, Defination of Done";
  const block = [
    {
      role: "system",
      content: "You are a helpful assistant designed to output JSON.",
    },
    {
      role: "user",
      content: epicSummary + ", " + include,
    },
  ];
  return block;
};

export { generateUserStoryByEpic };
