RESTful API starter project for Express, ES6 and Mongoose
=========================================================

This starter kit for rest api development is a fork of  [developit/express-es6-rest-api](https://github.com/developit/express-es6-rest-api)

- ES6 support via [babel](https://babeljs.io)
- REST resources as middleware via [resource-router-middleware](https://github.com/developit/resource-router-middleware)
- CORS support via [cors](https://github.com/troygoode/node-cors)
- Body Parsing via [body-parser](https://github.com/expressjs/body-parser)

> Tip: If you are using [Mongoose](https://github.com/Automattic/mongoose), you can automatically expose your Models as REST resources using [restful-mongoose](https://git.io/restful-mongoose).

Getting Started
---------------

```sh
# clone it
git clone git@github.com:developit/express-es6-rest-api.git
cd express-es6-rest-api

# Make it your own
rm -rf .git && git init && npm init

# Install dependencies
npm install

# Run it
PORT=8080 npm start

# With nodemon:
PORT=8080 nodemon
```


License
-------

MIT
