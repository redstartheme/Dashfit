const fs = require("fs");
const { execSync } = require("child_process");
const path = require("path");

// Define different build configurations
const builds = [
  {
    baseHref: "/templates/admin/dashfit/source/light/",
    settings: {
      theme: "light",
      dir: "ltr",
      navPos: "side",
    },
  },
  {
    baseHref: "/templates/admin/dashfit/source/dark/",
    settings: {
      theme: "dark",
      dir: "ltr",
      navPos: "side",
    },
  },
  {
    baseHref: "/templates/admin/dashfit/source/rtl/",
    settings: {
      theme: "light",
      dir: "rtl",
      navPos: "side",
    },
  },
  {
    baseHref: "/templates/admin/dashfit/source/top/",
    settings: {
      theme: "light",
      dir: "ltr",
      navPos: "top",
    },
  },
];

// Path to settings.ts file
const SETTINGS_FILE_PATH = "src/app/core/models/settings.ts";
const DIST_PATH = "dist"; // Main output directory

// Function to delete all files and folders in dist folder
function clearDistFolder() {
  if (fs.existsSync(DIST_PATH)) {
    console.log(`🗑️ Clearing contents of the 'dist' folder...`);

    // Get all files and subdirectories inside the dist folder
    fs.readdirSync(DIST_PATH).forEach((file) => {
      const filePath = path.join(DIST_PATH, file);
      if (fs.lstatSync(filePath).isDirectory()) {
        // If it's a directory, delete it recursively
        fs.rmdirSync(filePath, { recursive: true });
        console.log(`✅ Deleted folder: ${filePath}`);
      } else {
        // If it's a file, delete it
        fs.unlinkSync(filePath);
        console.log(`✅ Deleted file: ${filePath}`);
      }
    });
  } else {
    console.log(`⚠️ 'dist' folder does not exist. Skipping...`);
  }
}

// Function to update settings.ts
function updateSettings(settings) {
  const settingsTemplate = `export interface AppSettings {
  navPos: 'side' | 'top';
  dir: 'ltr' | 'rtl';
  theme: 'light' | 'dark';
  color: 'purple' | 'red' | 'teal' | 'orange' | 'amber' | 'green' | 'default';
  showHeader: boolean;
  headerPos: 'fixed' | 'static' | 'above';
  showFooter: boolean;
  footerPos: 'fixed' | 'static';
  showUserPanel: boolean;
  sidenavOpened: boolean;
  sidenavCollapsed: boolean;
  language: string;
}

export const defaults: AppSettings = {
  navPos: '${settings.navPos}',
  dir: '${settings.dir}',
  theme: '${settings.theme}',
  color: 'default',
  showHeader: true,
  headerPos: 'fixed',
  showFooter: true,
  footerPos: 'static',
  showUserPanel: true,
  sidenavOpened: true,
  sidenavCollapsed: false,
  language: 'en-US',
};
`;

  fs.writeFileSync(SETTINGS_FILE_PATH, settingsTemplate, "utf8");
}

// Function to move files from "browser" to build folder and delete "browser"
function moveFilesAndDeleteBrowser(buildName) {
  const browserPath = path.join(DIST_PATH, buildName, "browser");
  const targetPath = path.join(DIST_PATH, buildName);

  if (fs.existsSync(browserPath)) {
    console.log(`📂 Moving files from ${browserPath} to ${targetPath}...`);

    // Move all files from browser/ to dist/{buildName}/
    fs.readdirSync(browserPath).forEach((file) => {
      const oldPath = path.join(browserPath, file);
      const newPath = path.join(targetPath, file);
      fs.renameSync(oldPath, newPath);
    });

    // Remove the empty browser folder
    fs.rmdirSync(browserPath, { recursive: true });
    console.log(`✅ Removed empty folder: ${browserPath}`);
  }
}

// Function to zip the 'dist' folder into one zip file using the system's zip command
function zipDist() {
  const zipCommand = `
      powershell -Command "Compress-Archive -Path '${DIST_PATH}/light/*', '${DIST_PATH}/dark/*', '${DIST_PATH}/rtl/*', '${DIST_PATH}/top/*' -DestinationPath '${DIST_PATH}/dist-new.zip'"
    `;

  console.log(`📦 Creating zip file using Compress-Archive...`);
  execSync(zipCommand, { stdio: "inherit" });

  console.log(`✅ Zip file created: dist-new.zip`);
}

// Function to reset settings.ts to default values
function resetSettings() {
  const defaultSettings = {
    theme: "light",
    dir: "ltr",
    navPos: "side",
  };

  console.log(`🔄 Resetting settings.ts to default values...`);
  updateSettings(defaultSettings); // Call the updateSettings function to reset it
}

// Clear dist folder before starting the builds
clearDistFolder();

// Run build commands for each configuration
builds.forEach((build) => {
  const baseHref = build.baseHref;
  const buildName = baseHref.split("/").filter(Boolean).pop(); // Extract last word (e.g., light, dark, rtl, top)
  const outputPath = path.join(DIST_PATH, buildName); // Unique output folder for each build

  console.log(`\n🔧 Updating settings.ts for ${buildName}...`);
  updateSettings(build.settings);

  console.log(`🚀 Running Angular build for ${buildName}...`);
  execSync(
    `ng build --base-href ${baseHref} --aot --output-path ${outputPath}`,
    {
      stdio: "inherit",
    }
  );

  // Move files from browser to target folder and delete browser
  moveFilesAndDeleteBrowser(buildName);
});

// Zip the dist folder into dist-new.zip after all builds
zipDist();

// Reset settings.ts to default values after all builds
resetSettings();

console.log("\n✅ All builds completed, zipped, and settings.ts reset!");
