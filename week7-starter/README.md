# Virtual Taco Stand — Weeks 7–9 Starter

Virtual Taco Stand is the shared starter application for Weeks 7, 8, and 9 of
the course. It gives students a consistent Angular codebase and business domain
for the exercises completed across those weeks.

The application is a responsive, dark-themed virtual restaurant where users
can browse a taco menu, build an order, review an order summary, leave feedback,
and sign in. It also includes routing, authentication support, route guards,
cookie-based state, unit tests, course styling, and optimized image assets.

The folder is named `week7-starter` because this is the starting codebase for
the multi-week sequence. The internal Angular project name remains
`virtual-taco-stand`, which is also the name used for its production build
directory.

## Course use

- Use this project as the starting point for the Week 7 coursework.
- Continue using the assigned starter state for the related Week 8 and Week 9
  coursework.
- Follow the instructions for each week without changing the dependency
  versions or replacing the lockfile.

## Technology versions

- Angular, Angular CLI, and Angular build tools: 22.0.7
- Node.js: 24.18.0 through `.nvmrc` (`>=24.15.0 <25` supported)
- npm: 11.16.0 used for the lockfile (npm 11 or newer required)
- TypeScript: 6.0.3
- RxJS: 7.8.2
- ngx-cookie-service: 22.0.0
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
cd week7-starter
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

The generated files are written to `dist/virtual-taco-stand/`.

To continuously rebuild with the development configuration, run:

```bash
npm run watch
```

## Run the tests

Run the complete test suite once in headless Firefox:

```bash
npm test -- --watch=false --browsers=FirefoxHeadless
```

For interactive watch mode, run `npm test`. Karma opens Firefox and reruns the
tests when source or specification files change.

## Application structure

- `src/app/app.routes.ts` defines the application routes.
- `src/app/auth.service.ts` and `src/app/auth.guard.ts` provide authentication
  and protected-route behavior.
- `src/app/menu/` displays the available menu.
- `src/app/order/` and `src/app/order-summary/` implement the ordering flow.
- `src/app/feedback/` contains the feedback experience.
- `src/styles/w4.css` contains the reusable course visual system.
- `public/assets/` contains the optimized application artwork.
- `angular.json` contains the build, development-server, and test targets.
