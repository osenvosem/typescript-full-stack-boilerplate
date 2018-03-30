A full-stack typescript boilerplate that primarily was created for the purpose of training.

## What's inside (will be complemented as the boilerplate evolves)

* Webpack 4 and Babel 7 with typescript, env and stage-2 presets;
* React, React Router, React Loadable, Redux, Redux Saga, Styled Components;
* Express;
* Server side rendering;
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

# build and start the app in production mode
npm run build:start:prod | yarn build:start:prod
```

## The project structure

```sh
.
├── README.md
├── build # server builds
├── config # global and webpack configuration
│   ├── default.json
│   ├── development.json
│   ├── production.json
│   └── webpack
│       ├── client.js
│       ├── common.js
│       └── server.js
├── package.json
├── public # production build folder for the client code
├── scripts # development scripts
│   ├── build.js
│   ├── clean.js
│   └── start.js
├── src
│   ├── client.tsx # client entry point
│   ├── common # universal code
│   │   ├── Root
│   │   │   ├── components
│   │   │   │   └── MainMenu
│   │   │   │       ├── index.tsx
│   │   │   │       └── types.ts
│   │   │   ├── index.tsx
│   │   │   ├── mainMenuItems.ts
│   │   │   └── screens
│   │   │       ├── Home
│   │   │       │   ├── components
│   │   │       │   │   ├── CatImage.tsx
│   │   │       │   │   └── cat.png
│   │   │       │   └── index.tsx
│   │   │       └── TodoApp
│   │   │           ├── actionCreators.ts
│   │   │           ├── apiService.ts
│   │   │           ├── components
│   │   │           │   ├── ActiveItemsCount
│   │   │           │   │   ├── index.tsx
│   │   │           │   │   └── types.ts
│   │   │           │   ├── Filters
│   │   │           │   │   ├── index.tsx
│   │   │           │   │   └── types.ts
│   │   │           │   ├── TodoInput
│   │   │           │   │   ├── index.tsx
│   │   │           │   │   └── types.ts
│   │   │           │   ├── TodoItem
│   │   │           │   │   ├── components
│   │   │           │   │   │   ├── CompletedIcon.tsx
│   │   │           │   │   │   └── RemoveButton.tsx
│   │   │           │   │   ├── index.tsx
│   │   │           │   │   └── types.ts
│   │   │           │   └── TodoList
│   │   │           │       ├── index.tsx
│   │   │           │       └── types.ts
│   │   │           ├── index.tsx
│   │   │           ├── reducer.ts
│   │   │           ├── sagas.ts
│   │   │           ├── todos.ts
│   │   │           ├── types.ts
│   │   │           └── utils.ts
│   │   ├── assets
│   │   │   └── fonts
│   │   │       ├── Inter-UI-Bold.woff
│   │   │       ├── Inter-UI-Bold.woff2
│   │   │       ├── Inter-UI-Italic.woff
│   │   │       ├── Inter-UI-Italic.woff2
│   │   │       ├── Inter-UI-Regular.woff
│   │   │       └── Inter-UI-Regular.woff2
│   │   ├── configureStore.ts
│   │   ├── globalStyles.ts
│   │   ├── shared
│   │   │   ├── components
│   │   │   │   ├── NotFound
│   │   │   │   │   └── index.tsx
│   │   │   │   └── RedirectWithStatus
│   │   │   │       ├── index.tsx
│   │   │   │       └── interfaces.ts
│   │   │   ├── services
│   │   │   └── utils
│   │   ├── theme.ts
│   │   └── types.ts
│   └── server
│       ├── index.ts
│       ├── routes
│       │   ├── SSR
│       │   │   ├── index.tsx
│       │   │   ├── react-loadable.json
│       │   │   └── types.ts
│       │   ├── index.ts
│       │   └── todoApp
│       │       ├── index.ts
│       │       └── types.ts
│       └── server.ts
├── tsconfig.json
├── types.d.ts
└── yarn.lock
```
