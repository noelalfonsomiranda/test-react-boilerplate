# React Boilerplate
###### This is an existing boilerplate from this [url](https://github.com/react-boilerplate/react-boilerplate), that modified Redux process.
---

### Instructions to access the application

Requirements are `nvm`, node `v8 and up`, and `yarn` that should be installed first.

1.  Clone project - `git clone git@github.com:noelalfonsomiranda/test-react-boilerplate.git`
2.  Run `yarn` to install dependencies.
3.  Run `yarn start` to access `http://localhost:3000`

#### Boilerplate structure

```
├── app/
|   ├── components/
|   |   └── Button/
|   |       ├── index.js
|   |       └── tests
|   |           └── index.test.js
|   ├── containers/
|   |   ├── App/
|   |   |   ├── tests
|   |   |   |   ├── index.test.js
|   |   |   ├── actions.js
|   |   |   ├── constants.js
|   |   |   ├── index.js
|   |   |   ├── saga.js
|   |   |   └── reducer.js
|   |   ├── Home/
|   |   |   ├── tests
|   |   |   |   ├── index.test.js
|   |   |   ├── actions.js
|   |   |   ├── constants.js
|   |   |   ├── index.js
|   |   |   ├── saga.js
|   |   |   └── reducer.js
|   ├── utils
|   └── index.js
└── package.json
```

#### React structure
- `app` folder is the main application directory.
- for pages of the app will be the `containers` with the pages sub directory
  - containers will be the one who will handle `components` and strictly will be the one to have the functionalities
- the `components` directory will be the one that will have elements such as Button, List, Img, which will be the reusable elements of the app and minimal functionality

#### Redux
`containers > sub-directories` files list :
- `constants`, it helps keep the naming consistent for processing through Redux.
- `actions`, which will be the payloads of information that send data from your application to your store.
- `reducer`, is a function that determines changes to an application's state.
- `selectors`, is a function that accepts Redux state as an argument and returns data that is derived from that state.
- `saga`, is a redux middleware library, that is designed to make handling side effects in your redux app nice and simple.
- `index`, will be the one who will handle the UI or components and will be responsible for connecting to Redux.

#### Redux Explained
by [Bucky Roberts](https://github.com/buckyroberts)

![](http://i.imgur.com/DUiL9yn.png)