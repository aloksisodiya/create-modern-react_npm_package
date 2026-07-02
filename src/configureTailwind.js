import fs from "fs-extra";
import path from "path";

export const configureTailwind = async (projectName, language) => {
  try {
    const configFile =
  language === "ts"
    ? "vite.config.ts"
    : "vite.config.js";

    const viteConfigPath = path.join(projectName, configFile);
    const cssPath = path.join(projectName, "src", "index.css");
    const appCssPath = path.join(projectName, "src", "App.css");

    const viteConfig = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
`;

    const cssContent = `@import "tailwindcss";
`;

    // Write configuration files
    await fs.writeFile(viteConfigPath, viteConfig);
    await fs.writeFile(cssPath, cssContent);

    // Remove App.css if it exists
    if (await fs.pathExists(appCssPath)) {
      await fs.remove(appCssPath);
    }

    console.log("✔ Tailwind configured successfully.");
  } catch (error) {
    throw new Error(`Failed to configure Tailwind: ${error.message}`);
  }
};