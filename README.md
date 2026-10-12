# Erudite Angular Web Application — Chapter 1

**This ZIP is the single Angular project workspace. Open it directly in VS Code. Do not run `ng new` again.**

## 1. Prerequisites

This starter uses Angular 22.2.x. Angular 22 requires Node.js in one of these supported ranges: `^22.22.3`, `^24.15.0`, or `^26.0.0`. For example, use Node 22.22.3+ within the 22.x line, Node 24.15.0+ within the 24.x line, or Node 26.x at the supported minimum. You also need VS Code and internet access while npm downloads packages. Check the compatibility table for the latest exact requirements before installing.

- Installation guide: https://angular.dev/installation
- Version compatibility: https://angular.dev/reference/versions
- Angular CLI: https://angular.dev/tools/cli

## 2. Extract and open the project

1. Download `Erudite_Angular_Chapter_01_Full_Project.zip`.
2. In Windows Explorer, right-click it and choose **Extract All**.
3. Open VS Code.
4. Choose **File → Open Folder**.
5. Select the extracted `Erudite_Angular_Chapter_01_Project` folder — the folder that directly contains `package.json`, `angular.json`, and `src/`.
6. In VS Code choose **Terminal → New Terminal**.

Do not open only the `src` folder. Do not create another project. The project root is the directory containing `package.json` and `angular.json`.

## 3. Install dependencies and run Chapter 1

Run these commands in the VS Code terminal, one at a time:

```powershell
node --version
npm --version
npm install
npm start
```

The first two commands verify the toolchain. `npm install` downloads the dependencies. `npm start` starts Angular's development server.

Open the address shown in the terminal, typically `http://localhost:4200/`. The root route redirects to:

`http://localhost:4200/learning/chapter-01`

Keep the terminal running while using the app. Press `Ctrl+C` in that terminal to stop the development server.

## 4. What this project already contains

- `package.json` — dependencies and npm scripts.
- `angular.json` — build and serve configuration.
- `tsconfig.json`, `tsconfig.app.json` — TypeScript configuration.
- `src/main.ts` — starts Angular.
- `src/app/app.config.ts` — application-wide providers.
- `src/app/app.routes.ts` — route table.
- `src/app/app.ts`, `app.html`, `app.scss` — root application shell.
- `src/app/modules/module-01-foundations/chapter-01-setup/` — complete Chapter 1 component.
- `src/styles.scss` — global styles.
- `public/favicon.svg` — project icon.
- `docs/CHAPTER-01-Visual-Guide.pdf` — visual learning guide.

`node_modules/` is intentionally not bundled. `npm install` creates it on your machine.

## 5. The chapter folder convention

```text
src/app/modules/
└── module-01-foundations/
    └── chapter-01-setup/
        ├── chapter-01-setup.component.ts
        ├── chapter-01-setup.component.html
        └── chapter-01-setup.component.scss
```

For each later `NEXT` chapter, the delivery will add the next complete chapter folder using this convention and any route updates required to integrate it into this same workspace. You will not need another Angular project.

## 6. Three examples in Chapter 1

1. **Welcome panel:** edit a draft name, apply it, and reject blank names.
2. **Setup checklist:** toggle list items and calculate a progress percentage from the current data.
3. **Task status board:** change a typed status and observe the label, message, and CSS class update.

The checklist is a teaching example; it does not scan your computer or check whether software is truly installed.

## 7. Troubleshooting

- `node` or `npm` is not recognized: install a supported Node.js version, reopen VS Code and retry.
- `ng` is not recognized: running this project uses `npm start`, so a global `ng` command is not required for the normal start workflow.
- `npm install` fails: inspect the actual npm error, Node compatibility, and network/proxy settings.
- Port 4200 is busy: use `npm start -- --port 4300`.
- Build error: inspect the first relevant TypeScript/template error and its file path before changing unrelated files.

## 8. One-project rule

**Do not run `ng new erudite-angular` again.** This archive already contains the workspace and Chapter 1. Future chapters will be added to it.
