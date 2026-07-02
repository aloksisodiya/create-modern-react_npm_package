import { execSync } from "child_process";

export const installTailwind = async (projectName) => {
  try {
    console.log("🎨 Installing Tailwind CSS...");

    execSync(
      "npm install tailwindcss @tailwindcss/vite",
      {
        cwd: projectName,
        stdio: "inherit",
      }
    );

    console.log("✔ Tailwind CSS installed successfully.");
  } catch (error) {
    throw new Error(
      `Failed to install Tailwind CSS: ${error.message}`
    );
  }
};