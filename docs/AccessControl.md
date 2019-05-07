## Overview
Access control is an important part to any application, especially one involving patient or medical information. In `node-fhir-server-core` we make it easier to implement by offering several solutions. We have some built in options that allow you to adopt Smart on FHIR with scope checking, but you can also just give us your own passport strategy. If none of these fit what your looking for, we export the server class that we use to build the app which exposes express and you can completely roll your own solution with your own middleware and strategies. For more information, please read through the examples below.

## Available built-in options

### Smart on FHIR
We have built in support if you are using [Smart on FHIR](http://docs.smarthealthit.org/) however this requires you to have an operational OAuth2 server. While we try to make this as simple as possible, you will need a few things. You will need to enable it in the config and give it service that uses a Smart on FHIR strategy. Below is a walkthrough of how to set this up.

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
If you are not familiar with writing passport strategies that is fine, you can use [`@asymmetrik/sof-strategy`](https://github.com/Asymmetrik/phx-tools/tree/master/packages/sof-strategy). To use this, create a file that looks like this:

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

And define some environment variables, `INTROSPECTION_URL`, `CLIENT_ID`, and `CLIENT_SECRET`. 

That's it, this will enable Smart on FHIR authentication and scope validation. This strategy will make a request to the introspection url with a bearer token, CLIENT_ID and CLIENT_SECRET. This will attempt to authenticate the user and store the token on `req.user` so our scope middleware can validate the scopes for access to a requested resource.

### PassportJS
If you just need to provide your own passport strategy and don't want to use Smart on FHIR, you can do so very easily. In this example, we'll use a Basic Strategy, but the setup can be used for any strategy.

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

And that's it, you now have basic auth setup. You would need to install `passport-http` via `yarn add passport-http` to make this work, but this is more of an example than something you should use in the real world. Please don't hardcode your username and password EVER.

## How to customize
There are some more advanced ways to setup the server. By default, if you do not provide any auth config, noop middleware will be used in it's place. So if you need to do more than what is provided through the config, you can.

In our [Getting Started](https://github.com/Asymmetrik/node-fhir-server-core/wiki/Getting-Started) section, we showed you how to create a FHIR server by calling `initialize` and giving it some config, like so.

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

This server instance exposes the express app instance via an `app` property. So you can do the following:

```javascript
const { Server } = require('@asymmetrik/node-fhir-server-core');

let server = new Server(config);

// Write your own custom middleware here for validating roles or using passport
server.app.use(function (req, res, next) {
	
});

// Call whichever of these functions you would like
server.configureMiddleware()
	.configureSession()
	.configureHelmet()
	.setPublicDirectory()
	.setProfileRoutes()
	.setErrorRoutes();

// Finally start the server
server.listen(3000);	
```
