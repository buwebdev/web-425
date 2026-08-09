# Portfolio

Portfolio is a standalone Angular starter application intended as the
foundation for a personal portfolio site. It provides a semantic, responsive
shell with replaceable introduction, about, skills, projects, and contact
content.

The project deliberately does not use the course `w4.css` framework. Its small
local stylesheet supplies only a neutral starting layout, leaving students
responsible for developing their own portfolio content, visual identity, and
design decisions.

## Technology versions

- Angular, Angular CLI, and Angular build tools: 22.0.7
- Node.js: 24.18.0 through `.nvmrc` (`>=24.15.0 <25` supported)
- npm: 11.16.0 used for the lockfile (npm 11 or newer required)
- TypeScript: 6.0.3
- RxJS: 7.8.2
- Karma: 6.4.4 with Jasmine and Firefox

## Prerequisites

Install the following software before setting up the application:

1. [Git](https://git-scm.com/downloads) to clone the repository.
2. [NVM](https://github.com/nvm-sh/nvm#installing-and-updating) to install and
   select the required Node.js version.
3. [Firefox](https://www.mozilla.org/firefox/) to run the Karma test suite.

You do not need to install Angular CLI globally. The project installs and uses
its own CLI through the npm scripts.

## Dependency policy

Always use `npm ci` to install this project's dependencies. Do not run
`npm install`, `npm update`, or `npm audit fix`. Do not add, remove, upgrade, or
otherwise modify dependencies in `package.json` or `package-lock.json`. The
course project depends on the exact, tested versions recorded in the lockfile.

## Install the application

From the repository root, run:

```bash
cd portfolio
nvm install
nvm use
npm ci
```

`nvm install` reads `.nvmrc` and installs Node.js 24.18.0 when necessary.
`npm ci` installs the exact dependency versions recorded in
`package-lock.json`.

## Start the development server

```bash
npm start
```

Open `http://localhost:4200/` in a browser. The development server watches the
source files and reloads the application after changes.

Stop the server with `Ctrl+C`.

## Build the application

Create an optimized production build with:

```bash
npm run build
```

The generated files are written to `dist/portfolio/`.

To continuously rebuild with the development configuration, run:

```bash
npm run watch
```

## Run the tests

Run the tests once in headless Firefox:

```bash
npm test -- --watch=false --browsers=FirefoxHeadless
```

For interactive watch mode, run `npm test`. Karma opens Firefox and reruns the
tests when source or specification files change.

## Useful project files

- `src/app/app.component.ts` contains replaceable skills and project data.
- `src/app/app.component.html` provides the semantic portfolio shell.
- `src/app/app.component.css` contains the minimal component layout.
- `src/styles.css` contains the small global reset and base styles.
- `src/app/app.component.spec.ts` verifies the data-driven starter content.
- `angular.json` contains the build, development-server, and test targets.
