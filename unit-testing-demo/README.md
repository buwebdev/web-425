# Unit Testing Demo

Unit Testing Demo is a small standalone Angular application for practicing
Jasmine assertions and Angular component tests. The page renders a title and a
welcome message, while its specification demonstrates:

- Creating a component with Angular `TestBed`.
- Inspecting component properties and rendered HTML.
- Testing real component methods with Jasmine matchers.
- Verifying collaboration between component methods with a Jasmine spy.
- Clicking a rendered button and testing the resulting component and DOM state.

The visible page exercises the same component behavior as the test suite, so
students can connect each Arrange-Act-Assert example to something concrete.
The suite contains seven focused examples and runs through Karma in Firefox.
The interface uses the course `w4.css` framework.

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
cd unit-testing-demo
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

The generated files are written to `dist/unit-testing-demo/`.

To continuously rebuild with the development configuration, run:

```bash
npm run watch
```

## Run the tests

Run all seven tests once in headless Firefox:

```bash
npm test -- --watch=false --browsers=FirefoxHeadless
```

For interactive watch mode, run `npm test`. Karma opens Firefox and reruns the
tests when source or specification files change.

## Useful project files

- `src/app/app.component.ts` defines the standalone demonstration component.
- `src/app/app.component.spec.ts` contains the seven Jasmine examples.
- `src/styles/w4.css` contains the course UI framework.
- `karma.conf.js` configures the Karma test runner and browser launchers.
- `angular.json` contains the build, development-server, and test targets.
