# Error Handling Demo

Error Handling Demo is a standalone Angular application that illustrates three
ways to report and handle errors:

- `/logger` uses an injectable logger service to write informational, warning,
  and error messages to the browser console.
- `/component-error` catches an expected asynchronous failure inside a
  component and displays a user-facing message without breaking the page.
- `/global-error` throws an intentional unexpected error that is captured by a
  custom application-wide Angular `ErrorHandler`.

Use the navigation links in the application to open each example. Keep the
browser developer console open while using the logger and global-error pages.
Each example waits for a button click, so visiting a route never triggers a
surprise side effect. The errors produced by this project are deliberate.

The interface uses the course `w4.css` framework and includes an overview page
that explains when each strategy is appropriate.

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
cd error-handling-demo
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

Open `http://localhost:4200/` in a browser, then select one of the example
links. The development server watches the source files and reloads the
application after changes.

Stop the server with `Ctrl+C`.

## Build the application

Create an optimized production build with:

```bash
npm run build
```

The generated files are written to `dist/error-handling-demo/`.

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

- `src/app/app.routes.ts` defines the overview and three demonstration routes.
- `src/app/error-handling-overview/` introduces the strategies.
- `src/app/logger.service.ts` provides console logging methods.
- `src/app/global-error-handler.service.ts` implements Angular's global error
  handler contract.
- `src/app/component-level-error-handling/` contains the locally handled error
  example.
- `src/app/component-to-test-global-error-handler/` contains the global error
  example.
- `src/styles/w4.css` contains the course UI framework.
- `angular.json` contains the build, development-server, and test targets.
