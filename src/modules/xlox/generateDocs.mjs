import { ct1 } from "./templates/custom.mjs";

const dontInclude = ["Examples"];
export const generateDocs = (codeBlock) => {
  // const formatedMsg1 = `Generate documentation for this ${codeBlock} code block in JSDoc format for Javascript language`;

  // const formatedMsg = `For the given code block, generate documentation in JSDoc format for Javascript language. REMOVE THE CODEBLOCK ${codeBlock}`;

  // const formatedMsg = `For the given code block, generate documentation in JSDoc format for Javascript language ${codeBlock}`;

  const formatedMsg = `Generate documentation in JSDoc format for the given code block, as per this template ${ct1} ${codeBlock}`;

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
