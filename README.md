Asymmetrik FHIR API Server
==========================
> A Rest implementation for the [ONC FHIR Challenge](https://www.cccinnovationcenter.com/challenges/secure-api-server-showdown-challenge/).

## Install

```shell
# npm
npm install @asymmetrik/fhir-server-core --save

# yarn
yarn add @asymmetrik/fhir-server-core
```

## Usage
`@asymmetrik/fhir-server-core` exposes a single function which takes a config and returns a promise. You can give it server, auth, logging, and profile configurations. The full list of possible configurations is listed below under [Config](#config). At minimum, you must give it a `server.port` and some `profiles` in the config. `@asymmetrik/fhir-server-core` will take care of the rest. Your profiles must contain a service and each service must implement that profiles requirements. You can view the requirements for each profile under [Profiles](#profiles).

For example:

```javascript
// require the server core
const fhirServer = require('@asymmetrik/fhir-server-core');

// setup a basic config
const config = {
	server: {
		port: 3000
	},
	logging: {
		level: 'debug'
	},
	profiles: {
		patient: {
			// Path to a service or the actual module
			service: require('./patient/patient.controller')
		}
	}
};

// Using promises
fhirServer(config)
	// Do something with the express app if you want to
	.then(app => { ... })
	// This may include details about why the server could not start,
	// such as an invalid config, or incorrect path to a service, etc.
	.catch(console.error);

// Using async/await
let main = async function () {
	let app = await fhirServer(config).catch(console.error);
};

main();

```

### Config
Here is an example config with all the currently supported options. See descriptions below.

```javascript
{
	auth: {
		clientId: '',
		secret: '',
		issuer: {
			discoveryUrl: ''
		}
	},
	server: {
		port: 3000,
		sessionStore: null,
		ssl: {
			key: '',
			cert: ''
		}
	},
	logging: {
		// Currently this is the only logging configuration supported. We use Winston
		// for logging and will eventually add support for more options. Logging level
		// can be anything supported by winston.
		// See https://github.com/winstonjs/winston#using-logging-levels
		level: 'debug'
	},
	profiles: {
		patient: {
			// Service can be the service path, a string, or the actual module
			service: './patient/patient.controller'
		},
		observation: {
			service: require('./observation/observation.controller')
		}
	}
}
```

#### `auth.clientId`

- **Type:**
- **Description:**
- **Required:** 
- **Default:**

#### `auth.secret`

- **Type:**
- **Description:**
- **Required:** 
- **Default:**

#### `auth.issuer.discoveryUrl`

- **Type:**
- **Description:**
- **Required:** 
- **Default:**

#### `server.port`

- **Type:** `number`
- **Description:** Port the express app will listen to.
- **Required:** Yes
- **Default:** `none`

#### `server.sessionStore`

- **Type:** `object`
- **Description:** Instance of an `express-session`. Depending on your back end, you can create and configure your own session store and pass it. For example, something like this:

```javascript
const session = require('express-session');
const expressSessionStore = session({
	resave: true,
	saveUninitialized: true,
	secret: appConfig.auth.sessionSecret,
	cookie: appConfig.auth.sessionCookie,
	store: new MongoStore({
		mongooseConnection: connection,
		collection: appConfig.auth.collection
	})
});

const fhirConfig = {
	server: {
		sessionStore: expressSessionStore
	}
}
```
- **Required:** No
- **Default:** `none`

#### `server.ssl.key`

- **Type:** `string`
- **Description:** Path to your private key.
- **Required:** No. If you want to setup express to use ssl, you need both a key and cert.
- **Default:** `none`

#### `server.ssl.cert`

- **Type:** `string`
- **Description:** Path to your certificate.
- **Required:** No. If you want to setup express to use ssl, you need both a key and cert.
- **Default:** `none`

#### `logging.level`
> Currently this is the only logging configuration supported. We use Winston for logging and will eventually add support for more options.

- **Type:** `string`
- **Description:** Logging level to use for Winston. Logging level can be anything supported by Winston. See https://github.com/winstonjs/winston#using-logging-levels.
- **Required:** No
- **Default:** `error`

#### `profiles.[key].service`
> Profiles currently only have a service property. More properties may be added in the future.

- **Type:** `string` | `object`
- **Description:** Path to a service or the actual module itself. Each service must conform to the profiles requirement.
- **Required:** Yes. You must provide a service on a profile object. There must be atleast one valid profile configuration for the server to run, otherwise it will throw an error stating the profiles configuration is invalid.
- **Default:** `none`



### Profiles
Currently we are only supporting profiles listed in the table below. As we add support for more profiles, we will update the documentation below with the necessary methods to support those profiles.

| Profile      | Key            | Interface                   |
|--------------|----------------|-----------------------------|
| Patient      | `patient`      | [patient](#patient)         |
| Observation  | `observation`  | [observation](#observation) |

#### Patient

#### Observation

## Examples

## Contributing
Please see [CONTRIBUTING.md](./.github/CONTRIBUTING.md) if interested in contributing.

## Attention

This library makes use of node's path module. This is potentially exploitable in node version 8.5, see [here](https://nodejs.org/en/blog/vulnerability/september-2017-path-validation/). When deploying this, you need to deploy with a node version later than 7.6 BUT not 8.5.

## License
