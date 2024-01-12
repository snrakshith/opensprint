export const sechma = {
  project: {
    name: "Recanteur",
    plateforms: ["WEB", "MOBILE"],
    roles: ["SUBSCRIBER", "ADMIN", "MANAGER", "STORYTELLER"],
  },
  sprint: {
    number: 2,
    duration: "2 WEEKS", //timeline: "WEEKS",
    goals: [{}],
    describe: "",
  },
  epics: [
    {
      title: "Onboarding/Signup",
    },
  ],
  messages: [
    {
      id: 1,
      question: "How many user stories to generate ?",
      ans: 3,
    },
    {
      id: 2,
      question: "Split each user story into x(5) tasks ?",
      ans: 5,
    },
    {
      id: 3,
      question:
        "Generate UT's for each task, and would need x(80)% of UT coverage ?",
      ans: "80%",
    },
  ],
};

export const epicSummary = "Onboarding/Signup";
const generateUserStoryByEpic = (epicSummary) => {
  let include = "Summary, Acceptence Criteria, Defination of Done";
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
