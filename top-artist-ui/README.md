## Environment Requirement

node v8.2~

run `npm install` in top-artist

## Folder Structure

After creation, my project should look like this:

```
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── actions
    ├── components
    ├── constants
    │   └── actionTypes.js
    ├── index.js
    ├── index.scss
    ├── reducers
    ├── registerServiceWorker.js
    ├── stores
    │   └── configureStore.js
    └── style
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.
