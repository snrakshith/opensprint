export const global = {
  project: {
    name: "Recanteur",
    platforms: ["WEB", "MOBILE"],
    roles: ["SUBSCRIBER", "ADMIN", "MANAGER", "STORYTELLER"],
    description: "",
    rbac: [
      {
        SUBSCRIBER: {
          platforms_access: ["WEB", "MOBILE"],
          can: ["Create Videos", "Upload Videos", "Delete Videos"],
          cannot: ["Onboard other Subcriber"],
        },
      },
    ],
  },
  sprint: {
    number: 2,
    duration: "2 WEEKS", //timeline: "WEEKS",
    goals: [{}],
    describe: "",
  },
};

export const epicSechma = [
  {
    title: "Onboarding/Signup",
    scope: "WEB",
    present: "", // summary or detailed
    userStories: [
      {
        name: "As a Manager, I can self onboard to recanteur plateform",
        present_as: "summary",
        acceptence_criteria: "",
        dod: [{ name: "", status: false }], // Defination of Done
        dor: [{ name: "", status: false }], // Defination of Ready
        tasks: [
          {
            name: "",
            uts: "",
            meta: {
              estimate: "",
              owner: "",
              status: "",
            },
          },
        ],
      },
    ],
  },
];

export const UIMessages = (
  scope,
  epicName,
  user_stories,
  tasks_per_us,
  ut_percentage
) => [
  {
    id: 1,
    question: `Generate ${user_stories} user stories for the epic ${epicName}`,
  },
  {
    id: 2,
    question: `Split each user story into ${tasks_per_us} ${scope} tasks ?`,
  },
  {
    id: 3,
    question: `Generate UT's for each task, and would need ${ut_percentage} of UT coverage ?`,
  },
];

UIMessages(epicSechma.at(0).title, epicSechma.at(0).scope, 3, 5, "80%");
