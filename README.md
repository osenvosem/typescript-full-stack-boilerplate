A full-stack typescript boilerplate that was created for learning purposes and to bootstraping my projects.

## What's inside (will be complemented as the boilerplate evolves)

* Webpack 4 and Babel 7 with typescript, env and stage-2 presets;
* Express;
* React, React Router, React Loadable, Redux, Redux Saga;
* Server side rendering and state hydration;
* Client side hot module reloading;
* Friendly errors;

## Scripts

```sh
# start in development mode (on port 3000 by default)
npm start | yarn start

# build client and server production bundles
npm run build | yarn build

# clean generated bundles
npm run clean | yarn clean

# start in production mode (on port 8080 by default)
npm run start:prod | yarn start:prod
```

## The project structure

```sh
.
├── README.md
├── build # default server bundle output folder
├── config # configuration files (webpack, node-config, etc...)
│   ├── default.json
│   ├── development.json
│   ├── production.json
│   └── webpack
│       ├── client.js
│       ├── common.js
│       └── server.js
├── package.json
├── public # default client bundles output folder
├── scripts # development scripts
│   ├── build.js
│   ├── clean.js
│   └── start.js
├── src # code source folder with a demo app
│   ├── app # shared code between server and client
│   │   ├── Main
│   │   │   ├── components
│   │   │   │   └── MainMenu
│   │   │   │       ├── index.tsx
│   │   │   │       ├── interfaces.ts
│   │   │   │       └── mainMenuItems.json
│   │   │   ├── index.tsx
│   │   │   └── screens
│   │   │       ├── About
│   │   │       │   └── index.tsx
│   │   │       ├── Animals
│   │   │       │   ├── index.tsx
│   │   │       │   └── screens
│   │   │       │       ├── Cats
│   │   │       │       │   └── index.tsx
│   │   │       │       ├── Dogs
│   │   │       │       │   └── index.tsx
│   │   │       │       └── Hamsters
│   │   │       │           └── index.tsx
│   │   │       └── Home
│   │   │           └── index.tsx
│   │   └── shared # shared folder from which you can import something as a global module: `import NotFound from "components/NotFound"`
│   │       └── components
│   │           ├── NotFound
│   │           │   └── index.tsx
│   │           └── RedirectWithStatus
│   │               ├── index.tsx
│   │               └── interfaces.ts
│   ├── client.tsx # client only file
│   └── server # server only code
│       ├── index.ts
│       ├── routes
│       │   └── SSR # express middleware for server side rendering
│       │       ├── index.tsx
│       │       └── interfaces.ts
│       └── server.ts
├── tsconfig.json
├── types.d.ts # global ambient types
└── yarn.lock
```
