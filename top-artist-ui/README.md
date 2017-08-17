

## Environment Requirement

node v8.2~

## Tech

React, Redux, rxjs, redux-observable, react-router, react-router-redux, jest, bootstrap(use bcuz lack of time)

## Folder Structure

After creation, my project should look like this:

```
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── actions
    │   └── index.js
    ├── components
    │   ├── __snapshots__
    │   │   ├── app.spec.js.snap
    │   │   └── four0Four.spec.js.snap
    │   ├── app.js
    │   ├── app.spec.js
    │   ├── four0Four.js
    │   ├── four0Four.spec.js
    │   ├── paginator
    │   │   └── index.js
    │   ├── topAlbums
    │   │   ├── index.js
    │   │   ├── topAlbumItem
    │   │   │   └── index.js
    │   │   └── topAlbums.component.js
    │   └── topArtists
    │       ├── __snapshots__
    │       │   └── topArtists.component.spec.js.snap
    │       ├── index.js
    │       ├── topArtistItem
    │       │   └── index.js
    │       ├── topArtists.component.js
    │       └── topArtists.component.spec.js
    ├── constants
    │   ├── actionTypes.js
    │   └── config.js
    ├── epics
    │   ├── clearSearchResults.js
    │   ├── fetchTopAlbumsByArtist.js
    │   ├── index.js
    │   └── searchTopArtists.js
    ├── index.css
    ├── index.js
    ├── index.scss
    ├── reducers
    │   ├── index.js
    │   ├── searchInFlight.js
    │   ├── topAlbums.js
    │   ├── topAlbums.spec.js
    │   └── topArtists.js
    ├── registerServiceWorker.js
    ├── stores
    │   └── configureStore.js
    ├── style
    │   ├── color.css
    │   ├── color.scss
    │   ├── variable.css
    │   └── variable.scss
    └── utils
        └── testHelper.js
```

## Available Scripts

In the project directory, you can run:
### `npm i`

install node dependencies

### `npm build`

build scripts in /build for deployment

### `npm serve-build`

serve /build on port:8080 and proxy api request to 3002

### `npm test`

run unit test

### `npm start`

Runs the dev mode app ui on port 3000 and proxy api request to 3002

The page will reload if you make edits.
You will also see any lint errors in the console.
