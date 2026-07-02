import prompts from "prompts";

export const askQuestions = async () => {
  const response = await prompts(
    [
      {
        type: "text",
        name: "project_name",
        message: "Project name:",
        validate: (value) => {
          if (!value.trim()) {
            return "Project name cannot be empty.";
          }

          return true;
        },
      },
      {
        type: "select",
        name: "language",
        message: "Choose language",
        choices: [
          {
            title: "JavaScript",
            value: "js",
          },
          {
            title: "TypeScript",
            value: "ts",
          },
        ],
      },
    ],
    {
      onCancel: () => {
        console.log("\n❌ Operation cancelled.");
        process.exit(0);
      },
    }
  );

  return response;
};