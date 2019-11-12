## Overview
Access control is an important component of any application, especially ones involving patient or medical information. In `node-fhir-server-core` we make it easier to implement by offering several solutions. We have some built in options that allow you to adopt SMART on FHIR with scope checking, but you can also just give us your own passport strategy. If none of these fit what your looking for, we export the server class that we use to build the app which exposes express and you can completely roll your own solution with your own middleware and strategies. For more information, please read through the examples below.

## Available Built-in Options

### SMART on FHIR
We have built-in support if you are using [SMART on FHIR](http://docs.smarthealthit.org/). However, this requires you to have an operational OAuth2 server. While we try to make this as simple as possible, you will need to enable it in the config and give it a service that uses a SMART on FHIR strategy. Below is a walkthrough of how to set this up.

#### Step One: Enable it in your config
When setting up your FHIR server, add the following config entries to your current configuration:

```javascript
const FHIRServer = require('@asymmetrik/node-fhir-server-core');

let server = FHIRServer.initialize({
	auth: {
		// This is so we know you want scope validation, without this, we would only
		// use the strategy
		type: 'smart',
		// Define our strategy here, for smart to work, we need the name to be bearer
		// and to point to a service that exports a Smart on FHIR compatible strategy
		strategy: {
			name: 'bearer',
			service: 'path/to/my/authentication.service.js'
		}
	}
});
```

And that is all that is needed as far as config goes, but let's take a look at how to define this authentication service we just configured next.

#### Step Two: Define a service
If you are not familiar with writing passport strategies, you can use [`@asymmetrik/sof-strategy`](https://github.com/Asymmetrik/phx-tools/tree/master/packages/sof-strategy). To use this, create a file that looks like this:

```javascript
const smartBearerStrategy = require('@asymmetrik/sof-strategy');

module.exports.strategy = smartBearerStrategy({
	introspectionUrl: process.env.INTROSPECTION_URL,
	clientSecret: process.env.CLIENT_SECRET,
	clientId: process.env.CLIENT_ID
});
```

You will also need to add `@asymmetrik/sof-strategy` as a dependency by running:

```shell
yarn add @asymmetrik/sof-strategy
```

And define these environment variables: `INTROSPECTION_URL`, `CLIENT_ID`, and `CLIENT_SECRET`. 

That's it! You've enabled SMART on FHIR authentication and scope validation. This strategy will make a request to the `INTROSPECTION_URL` with a bearer token, `CLIENT_ID`, and `CLIENT_SECRET`. This will attempt to authenticate the user and store the token on `req.user`, so that our scope middleware can validate the scopes for access to a requested resource.

### PassportJS
If you want to provide your own passport strategy without using SMART on FHIR, you can also do so very easily. In this example, we'll use a **Basic Strategy**, but the setup can be used for any strategy.

To start, let's install `passport-http`:

```shell
yarn add passport-http
```

In your config, add the following:

```javascript
let server = FHIRServer.initialize({
	auth: {
		strategy: {
			name: 'basic',
			service: 'path/to/my/basic.service.js'
		}
	}
});
```

Then create the following `basic.service.js`:

```javascript
const { BasicStrategy } = require('passport-http');

module.exports.strategy = new BasicStrategy((username, password, done) => {
	if (username === 'user' && password === 'pass') {
		return done(null, {});
	} else {
		return done(new Error('Invalid Username/Password'));
	}
});
```

And that's it! Now you have basic authentication setup. This is more of an example than something you should use in the real world. Please don't hardcode your username and password **EVER**.

## How to Customize
There are also more advanced ways to set up the server. By default, if you do not provide any auth config, noop middleware will be used in its place. So, if you need to do more than what is provided through the config, you can.

In our [Getting Started](GettingStarted.md) section, we showed you how to create a FHIR server by calling `initialize` and giving it some config, like so:

```javascript
const FHIRServer = require('@asymmetrik/node-fhir-server-core');

let server = FHIRServer.initialize({ ...someConfig });
```

What initialize is actually doing is just calling several internal methods. You can replicate the initialize method by doing the following:

```javascript
const { Server } = require('@asymmetrik/node-fhir-server-core');

let server = new Server(config)
	.configureMiddleware()
	.configureSession()
	.configureHelmet()
	.configurePassport()
	.setPublicDirectory()
	.setProfileRoutes()
	.setErrorRoutes();
```

## Using your own express instance

You can `initialize` a server with your own express app if you need further customization.

```javascript
const { initialize, loggers, constants } = require('@asymmetrik/node-fhir-server-core');
const express = require('express');

let config = {};
let app = express();
let router = express.Router();

// Example: create express router for graphql operations
router.use('/', (req, res, next) => {
  // ... Code to handle graphql ...
  next();
});

// Add router to express app
app.use('/graphql', router);

// Initialize FHIR server with custom app
let server = initialize(config, app);
let logger = loggers.get('default');

server.listen(3000, () => {
	logger.info('Starting the FHIR Server at localhost:3000');
});
```
