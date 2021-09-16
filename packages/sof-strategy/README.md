# SOF-Strategy

> Strategy for Smart on FHIR authentication that works with Passport like any other passport strategy.

## Install

```shell
yarn add @asymmetrik/sof-strategy
```

## Usage

```javascript
// Returns a helper function to setup your strategy
const smartBearerStrategy = require('@asymmetrik/sof-strategy');
const passport = require('passport');

// Create our strategy by giving it some config options, all are required
let strategy = smartBearerStrategy({
  introspectionUrl: 'https://www.foo.com/introspection',
  clientSecret: 'secret',
  clientId: 'client',
});

// Configure passport to use this new strategy
passport.use(strategy);

// Integrate it into your routes via middleware or some other mechanism
// Our strategy is a bearer strategy so use bearer for the name
let name = 'bearer';
let options = { session: false };

// Use as middleware use case
// app is a express instance
app.use('/some/protected/route/', passport.authenticate(name, options), someRouteController);
```

See [sof-strategy tests](https://github.com/Asymmetrik/node-fhir-server-core/tree/master/packages/sof-strategy/index.test.js) for more usage examples.

## Arguments

`@asymmetrik/sof-strategy` exports a single function which takes a single options argument with the following properties.

#### `introspectionUrl`

Introspection endpoint. The strategy will attempt to make a request to this endpoint with a token(provided by passport.js), clientId, clientSecret to validate the token has not been modified or resigned.

Type: `String`  
 Required: `true`

#### `clientSecret`

Necessary to validate the bearer token. Do not store these in client side code no matter what. This module should only be used server-side.

Type: `String`  
 Required: `true`

#### `clientId`

Necessary to validate the bearer token. Do not store these in client side code no matter what. This module should only be used server-side.

Type: `String`  
 Required: `true`
