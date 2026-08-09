# Basic Routing

Basic Routing is a focused standalone Angular application for learning how URL
paths, components, links, and `RouterOutlet` work together. It includes a
default page, active navigation links, a redirect, and a wildcard Not Found
page.

The `/course` page demonstrates how TypeScript passes static data to a routed
component. The route defines values in its `data` property, and
`CourseComponent` reads them through `ActivatedRoute.snapshot.data` before
binding them in the template.

The interface uses the course `w4.css` framework so students can concentrate
on routing rather than rebuilding application-level styling.

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
cd basic-routing
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

The generated files are written to `dist/basic-routing/`.

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

- `src/app/app.component.ts` defines the standalone root component.
- `src/app/app.routes.ts` contains the application route configuration.
- `src/app/course/course.component.ts` reads and displays TypeScript route data.
- `src/app/not-found/not-found.component.ts` demonstrates the wildcard route.
- `src/app/app.config.ts` registers Angular application providers.
- `src/app/course/course.component.spec.ts` verifies the route-data flow.
- `src/styles/w4.css` contains the course UI framework.
- `angular.json` contains the build, development-server, and test targets.
