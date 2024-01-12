import { DocFormat } from "@shared/constants/enums";

export const getPosts = async (_, res) => {
  const formats = [
    {
      defaultLanguages: [
        DocFormat.Google,
        "javascript",
        "typescript",
        "javascriptreact",
        "typescriptreact",
      ],
    },
    {
      defaultLanguages: ["python"],
    },
  ];
  return res.status(200).send({ formats });
};
