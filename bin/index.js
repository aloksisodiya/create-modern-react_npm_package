#!/usr/bin/env node

import { askQuestions } from "../src/questions.js";
import { createReactProject } from "../src/createProject.js";
import { installTailwind } from "../src/installTailwind.js";
import { configureTailwind } from "../src/configureTailwind.js";
import { replaceTemplate } from "../src/replaceTemplate.js";

const main = async () => {
  try {
    const answers = await askQuestions();

    await createReactProject(
      answers.project_name,
      answers.language
    );

    await installTailwind(
      answers.project_name
    );

    await configureTailwind(
      answers.project_name,
      answers.language
    );

    await replaceTemplate(
      answers.project_name,
      answers.language
    );

    console.log("\n🎉 Project created successfully!\n");
    console.log(`📂 cd ${answers.project_name}`);
    console.log("🚀 npm run dev");
  } catch (err) {
    console.error("\n❌ Error:", err.message);
    process.exit(1);
  }
};

main();