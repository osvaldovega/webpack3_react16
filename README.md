# Webpack 3 and React 16 Base project

This project is a base where any developer can see how to use webpack 3, React 16 with React Router v4


## Getting Started

You can follow these instructions to install the project after downloaded.

### Prerequisities

What things you need to install the software and how to install them

```
node version >= 6 and <= 9
```

### Installing

After downlad the project, you can run this command on terminal into the prokect folder

```
npm run setup
```

And to start the project in DEV mode

```
npm run open:src
```



## Package.json scripts Commands

```
"analyze-bundle": "babel-node ./tools/analyzeBundle.js",
"prebuild": "npm run clean-dist && npm run lint && npm run test",
"build": "babel-node tools/build.js && npm run open:dist",
"clean-dist": "npm run remove-dist && mkdir dist",
"preinstall": "node tools/nodeVersionCheck.js",
"lint": "esw webpack.config.* src tools --color",
"lint:watch": "npm run lint -- --watch",
"open:cover": "npm run test:cover && opn ./coverage/lcov-report/index.html",
"open:dist": "babel-node tools/distServer.js",
"open:src": "babel-node tools/srcServer.js",
"remove-dist": "rimraf ./dist",
"setup": "node tools/initialMessage.js && npm install && node tools/endMessage.js",
"prestart": "npm run start-message",
"start": "concurrently -k -r -s first \"npm run test:watch\" \"npm run open:src\" \"npm run lint:watch\"",
"start-message": "babel-node tools/startMessage.js",
"test": "jest",
"test:CI": "babel-node tools/testCi.js",
"test:cover": "npm run test -- --coverage ",
"test:cover:CI": "npm run test:CI -- --coverage && cat ./coverage/lcov.info | node_modules/coveralls/bin/coveralls.js",
"test:watch": "jest --watch"
```

## Authors

* **Osvaldo Vega A** - *Initial work* - [osvaldovega](https://github.com/osvaldovega)



## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.
