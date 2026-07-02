import fs from "fs-extra";
import path from "path";

export const replaceTemplate = async (projectName, language) => {
  try {
const extension =
  language === "ts"
    ? "tsx"
    : "jsx";

    const appPath = path.join(
      projectName,
      "src",
      `App.${extension}`
    );

    const appCssPath = path.join(
      projectName,
      "src",
      "App.css"
    );

    const template = `export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-5xl font-bold text-blue-600">
        🚀 React + Tailwind is Ready!
      </h1>
    </div>
  );
}
`;

    // Remove App.css if it exists
    if (await fs.pathExists(appCssPath)) {
      await fs.remove(appCssPath);
    }

    // Replace App component
    await fs.writeFile(appPath, template);

    console.log("✔ Template replaced successfully.");
  } catch (error) {
    throw new Error(`Failed to replace template: ${error.message}`);
  }
};