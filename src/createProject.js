import { execSync } from "child_process";

export const createReactProject = async (projectName, language) => {
  try {
    const template = language === "ts" ? "react-ts" : "react";

    console.log("📦 Creating React project...");

    execSync(`npm create vite@7.1.0 ${projectName} -- --template ${template}`, {
      stdio: "inherit",
    });

    console.log("📥 Installing dependencies...");

    execSync("npm install", {
      cwd: projectName,
      stdio: "inherit",
    });

    console.log("✔ React project created successfully.");
  } catch (error) {
    throw new Error(`Failed to create React project: ${error.message}`);
  }
};
