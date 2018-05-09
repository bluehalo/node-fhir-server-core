[![Known Vulnerabilities](https://snyk.io/test/github/asymmetrik/node-fhir-server-core/badge.svg?targetFile=package.json)](https://snyk.io/test/github/asymmetrik/node-fhir-server-core?targetFile=package.json)

Asymmetrik FHIR API Server
==========================
> A Rest implementation for the [ONC FHIR Challenge](https://www.cccinnovationcenter.com/challenges/secure-api-server-showdown-challenge/).

## Install

```shell
# yarn
yarn add @asymmetrik/node-fhir-server-core

# npm
npm install @asymmetrik/node-fhir-server-core --save
```

## Usage
`@asymmetrik/node-fhir-server-core` exposes a setup function which takes a config and returns a promise. The full list of possible configurations is listed below under [Config](#config). At minimum, your config must include a `server.port` and one profile. Profiles must contain a service and each service must contain certain functions. You can view the available profiles and their requirements under [Profiles](#profiles). We are currently aiming to be fully compliant with [USCore](http://www.hl7.org/fhir/us/core/).

You can see an example implementation that utilizes MongoDB for the backend at [https://github.com/Asymmetrik/node-fhir-server-mongo](https://github.com/Asymmetrik/node-fhir-server-mongo). Also see [Examples](#Examples) below.

### Config
Here is an example config with all the currently supported options. See descriptions below.

```javascript
{
	auth: {
		clientId: 'my-client-id',
		secret: 'access token secret',
		discoveryUrl: 'https://sb-auth.smarthealthit.org/.well-known/openid-configuration',
		protectedResourceClientId: 'protected-resource-id',
		protectedResourceClientSecret: 'protected-resource-secret',
		authorization_endpoint: 'https://sb-auth.smarthealthit.org/authorize',
		token_endpoint: 'https://sb-auth.smarthealthit.org/token',
		registration_endpoint: 'https://sb-auth.smarthealthit.org/register',
		introspection_endpoint: 'https://sb-auth.smarthealthit.org/introspect',
		issuer: 'https://sb-auth.smarthealthit.org/',
		jwkSet: {
			keys: [{
				kty: 'RSA',
				e: 'AQAB',
				kid: 'rsa1',
				alg: 'RS256',
				n: 'big_string'
			}]
		}
	},
	server: {
		port: 3000,
		corsOptions: {
			maxAge: 86400
		},
		sessionStore: null,
		ssl: {
			key: 'path/to/key.pem',
			cert: 'path/to.cert.pem'
		},
		publicDirectory: '/path/to/public'
	},
	logging: {
		level: 'debug'
	},
	profiles: {
		patient: {
			service: './patient/patient.controller',
			versions: [ VERSIONS.STU3 ],
			corsOptions: {
				// Have a different max age for all the routes in the patient profile
				maxAge: 3600
			}
		},
		observation: {
			service: require('./observation/observation.controller'),
			versions: [ VERSIONS.STU3 ],
			corsOptions: {
				// Disable cors on this profile, maybe this is for internal use only
				origin: false
			}
		}
	}
}
```

#### `auth.clientId`

- **Type:** `string`
- **Description:** The name of the resource server. All access tokens should have an `aud` value set to this value, otherwise they will not pass validation.
- **Required:** true
- **Default:** undefined

#### `auth.secret`

- **Type:** `string`
- **Description:** The secret key used to verify an access token's signature. If you are using a public key to verify the signature, use `jwkSet`.
- **Required:** false
- **Default:** undefined

#### `auth.discoveryUrl`

- **Type:** `string`
- **Description:** If the authorization server follows the OpenId Connect specification, this can be used to call the authentication server's discovery endpoint and set the following properties (unless they are explicitly overridden here): `authorization_endpoint`, `token_endpoint`, `registration_endpoint`, `introspection_endpoint`, `issuer`, and `jwkSet`.
- **Required:** false
- **Default:** undefined

#### `auth.protectedResourceClientId`

- **Type:** `string`
- **Description:** The Client ID given to this resource server to authorize the resource server to make calls to the introspection endpoint of the authentication server. This is only required if this resource server is using introspection when verifying a token.
- **Required:** false
- **Default:** undefined

#### `auth.protectedResourceClientSecret`

- **Type:** `string`
- **Description:** The Client Secret given to this resource server to authorize the resource server to make calls to the introspection endpoint of the authentication server. This is only required if this resource server is using introspection when verifying a token.
- **Required:** false
- **Default:** undefined

#### `auth.authorization_endpoint`

- **Type:** `string`
- **Description:** The endpoint a client application must use to receive an access code as described by the OAuth2 standard.
- **Required:** true
- **Default:** undefined

#### `auth.registration_endpoint`

- **Type:** `string`
- **Description:** The endpoint a client application must use to register their application with the authentication server.
- **Required:** false
- **Default:** undefined

#### `auth.token_endpoint`

- **Type:** `string`
- **Description:** The endpoint a client application must use to receive an access token as described by the OAuth2 standard.
- **Required:** true
- **Default:** undefined

#### `auth.introspection_endpoint`

- **Type:** `string`
- **Description:** The endpoint the resource server calls to introspect the token as described by RFC 662 OAuth 2.0 Token Introspection. If the authentication server does not support introspection, this is not required.
- **Required:** false
- **Default:** undefined

#### `auth.issuer`

- **Type:** `string`
- **Description:** The name of the authentication server. All access tokens should have an `iss` value set to this value, otherwise they will not pass validation.
- **Required:** true
- **Default:** undefined

#### `auth.jwkSet`

- **Type:** `object`
- **Description:** A JSON Web Key (JWK) as described by RFC 7517. If there is more than one key, they each must have a key identifier `kid` so that the resource server knows which key to use when verifying a given access token. If you are using a private key to verify the signature, use `secret`.
- **Required:** false
- **Default:** undefined

#### `server.port`

- **Type:** `number`
- **Description:** Port the express app will listen to.
- **Required:** Yes
- **Default:** `none`

#### `server.corsOptions`

- **Type:** `object`
- **Description:** Any default cors options you would like applied to all routes. Please see [https://github.com/expressjs/cors#configuration-options](https://github.com/expressjs/cors#configuration-options) for details. The `methods` configuration will not be honored if specified here. That is the only option controlled by `@asymmetrik/node-fhir-server-core` and cannot be overridden.
- **Required:** No
- **Default:** `none`

#### `server.sessionStore`

- **Type:** `object`
- **Description:** Instance of an `express-session`. Depending on your back end, you can create and configure your own session store and pass it in. For example:

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
- **Description:** Path to your private key. See [Contributor's guide](./.github/CONTRIBUTING.md#generate-self-signed-certs) for how to generate a self-signed cert for local development.
- **Required:** No. If you want to setup express to use ssl, you need both a key and cert.
- **Default:** `none`

#### `server.ssl.cert`

- **Type:** `string`
- **Description:** Path to your certificate. See [Contributor's guide](./.github/CONTRIBUTING.md#generate-self-signed-certs) for how to generate a self-signed cert for local development.
- **Required:** No. If you want to setup express to use ssl, you need both a key and cert.
- **Default:** `none`

#### `server.publicDirectory`

- **Type:** `string`
- **Description:** Path to your public directory. Some certificate authorities need to validate your server, for example, Let's Encrypt. You can use this to enable a public directory to serve the challenge file from `/.well-known/acme-challenge`.
- **Required:** No.
- **Default:** `none`

#### `logging.level`
> Currently this is the only logging configuration supported. We use Winston for logging and will eventually add support for more options.

- **Type:** `string`
- **Description:** Logging level to use for Winston. Logging level can be anything supported by Winston. See https://github.com/winstonjs/winston#using-logging-levels.
- **Required:** No
- **Default:** `error`

#### `profiles[key]service`
> Supported `key` values are the config keys in the [Profiles](./#profiles) section below.

- **Type:** `string` | `object`
- **Description:** Path to a service or the actual module itself. Each service must conform to the profiles requirement. This will enable the API for this particular service.
- **Required:** Yes. You must provide a service on a profile object if a profile object is configured. Otherwise, this profile configuration will be ignored.
- **Default:** `none`

#### `profiles[key]corsOptions`
> Supported `key` values are the config keys in the [Profiles](./#profiles) section below.

- **Type:** `object`
- **Description:** Set profile specific cors options. These will override the default `corsOptions` set in the server config.  Please see [https://github.com/expressjs/cors#configuration-options](https://github.com/expressjs/cors#configuration-options) for details. The `methods` configuration will not be honored if specified here. This is controlled by `@asymmetrik/node-fhir-server-core` and cannot be overridden.
- **Required:** No
- **Default:** `none`

#### `profiles[key]versions`
> Supported `key` values are the config keys in the [Profiles](./#profiles) section below.

- **Type:** `Array<string>`
- **Description:** Which versions this API endpoint should be available on. When we support more versions, you can specify different versions for each profile so you can slowly upgrade/deprecate profiles one at a time if needed.
- **Required:** Yes
- **Default:** `none`

### Profiles
Currently we are only supporting profiles listed in the table below. As we add support for more profiles, we will update the documentation below with the necessary methods to support those profiles. You will also see which routes each method will enable in your implementation.

| Profile              | Profile Key            | Interface                                   |
|----------------------|------------------------|---------------------------------------------|
| AllergyIntolerance   | `allergyintolerance`   | [allergyintolerance](#allergyintolerance)   |
| CarePlan             | `careplan`             | [careplan](#careplan)                       |
| CareTeam             | `careteam`             | [careteam](#careteam)                       |
| Condition            | `condition`            | [condition](#condition)                     |
| Device               | `device`               | [device](#device)                           |
| DiagnosticReport     | `diagnosticreport`     | [diagnosticreport](#diagnosticreport)       |
| Goal                 | `goal`                 | [goal](#goal)                               |
| Immunization         | `immunization`         | [immunization](#immunization)               |
| Location             | `location`             | [location](#location)                       |
| Medication           | `medication`           | [medication](#medication)                   |
| MedicationRequest    | `medicationrequest`    | [medicationrequest](#medicationrequest)     |
| MedicationStatement  | `medicationstatement`  | [medicationstatement](#medicationstatement) |
| Observation          | `observation`          | [observation](#observation)                 |
| Organization         | `organization`         | [organization](#organization)               |
| Patient              | `patient`              | [patient](#patient)                         |
| Practitioner         | `practitioner`         | [practitioner](#practitioner)               |
| Procedure            | `procedure`            | [procedure](#procedure)                     |

Each method in your profile service will receive the following arguments:
- `req` - The request object from Express
- `logger` - A Winston logger instance
- `context` - An object containing some additional contextual information. This currently only contains a version, which can be useful if you use the same service for multiple specs.

#### Common Methods
These following three methods are similar on every profile. If a profile has a one off method that is not shared across them all you will find it's explanation under the individual profile configuration.

##### `getCount`

- **Description:** Return the number of resources of this type in your data store.
- **Required:** Yes
- **Return:** `Promise.<number, Error>`
- **Routes:** Required for metadata. Count will show up in the capability statement under `[version]/metadata`.
**Example Implementation:**
```javascript
// In patient service
module.exports.getCount = (req, logger, context) => new Promise((resolve, reject) => {
	logger.info('Patient >>> getCount');
	logger.info(`Version >>> ${context.version}`);
	// Logs 'Version >>> stu3' if this is from a stu3 route
	// Do some async query to your data source here
	db.patients.count((err, count) => {
		if (err) {
			logger.error('Error with Patient.getCount');
			return reject(err);
		}
		return resolve(count);
	});
});
```

##### `get<profile>ById`

- **Description:** Get the patient given an id in the req.params.
- **Required:** Yes
- **Return:** `Promise.<object, Error>`
- **Routes:** Enables `[version]/<profile>/:id` via GET
- **Example Route:** `stu3/patient/2`
- **Example Implementation:**
```javascript
// In patient service
module.exports.getPatientById = (req, logger, context) => new Promise((resolve, reject) => {
	logger.info('Patient >>> getPatientById');
	logger.info(`Version >>> ${context.version}`);
	// Logs 'Version >>> stu3' if this is from a stu3 route
	// Do some async query to your data source here
	db.patients.find({ _id: req.params.id }, (err, patient) => {
		if (err) {
			logger.error('Error with Patient.getPatientById');
			return reject(err);
		}
		return resolve(patient);
	});
});
```

##### `get<profile>`

- **Description:** Get the patient given an one of several valid argument combinations in the req.query. Valid argument combinations include:
	- identifier
	- name + birthdate
	- name + gender
	- family + gender
	- given + gender
- **Required:** Yes
- **Return:** `Promise.<object, Error>`
- **Routes:** Enables `/[version]/<profile>` via GET and `/[version]/<profile>/_search` via POST
- **Example Route:** `stu3/observation/?foo=bar` or `stu3/observation/_search?foo=bar`
- **Example Implementation:**
```javascript
// In observation service
module.exports.getObservation = (req, logger, context) => new Promise((resolve, reject) => {
	logger.info('Observation >>> getObservation');
	logger.info(`Version >>> ${context.version}`);
	// Logs 'Version >>> stu3' if this is from a stu3 route
	// Do some async query to your data source here
	let query = buildQuery(req.query);
	db.observations.find(query, (err, observations) => {
		if (err) {
			logger.error('Error with Observation.getObservation');
			return reject(err);
		}
		return resolve(observations);
	});
});
```

#### AllergyIntolerance
AllergyIntolerance profile's should support all the above common methods and can receive any of the arguments defined in [src/server/profiles/allergyintolerance/allergyintolerance.arguments.js](./src/server/profiles/allergyintolerance/aallergyintolerance.arguments.js).

#### CarePlan
CarePlan profile's should support all the above common methods and can receive any of the arguments defined in [src/server/profiles/careplan/careplan.arguments.js](./src/server/profiles/careplan/careplan.arguments.js).

#### CareTeam
CareTeam profile's should support all the above common methods and can receive any of the arguments defined in [src/server/profiles/careteam/careteam.arguments.js](./src/server/profiles/careteam/careteam.arguments.js).

#### Condition
Condition profile's should support all the above common methods and can receive any of the arguments defined in [src/server/profiles/condition/condition.arguments.js](./src/server/profiles/condition/condition.arguments.js).

#### Device
Device profile's should support all the above common methods and can receive any of the arguments defined in [src/server/profiles/device/device.arguments.js](./src/server/profiles/device/device.arguments.js).

#### DiagnosticReport
DiagnosticReport profile's should support all the above common methods and can receive any of the arguments defined in [src/server/profiles/diagnosticreport/diagnosticreport.arguments.js](./src/server/profiles/diagnosticreport/diagnosticreport.arguments.js).

#### Goal
Goal profile's should support all the above common methods and can receive any of the arguments defined in [src/server/profiles/goal/goal.arguments.js](./src/server/profiles/goal/goal.arguments.js).

#### Immunization
Immunization profile's should support all the above common methods and can receive any of the arguments defined in [src/server/profiles/immunization/immunization.arguments.js](./src/server/profiles/immunization/immunization.arguments.js).

#### Location
Location profile's should support all the above common methods and can receive any of the arguments defined in [src/server/profiles/location/location.arguments.js](./src/server/profiles/location/location.arguments.js).

#### Medication
Medication profile's should support all the above common methods and can receive any of the arguments defined in [src/server/profiles/medication/medication.arguments.js](./src/server/profiles/medication/medication.arguments.js).

#### MedicationRequest
MedicationRequest profile's should support all the above common methods and can receive any of the arguments defined in [src/server/profiles/medicationrequest/medicationrequest.arguments.js](./src/server/profiles/medicationrequest/medicationrequest.arguments.js).

#### MedicationStatement
MedicationStatement profile's should support all the above common methods and can receive any of the arguments defined in [src/server/profiles/medicationstatement/medicationstatement.arguments.js](./src/server/profiles/medicationstatement/medicationstatement.arguments.js).

#### Observation
Observation profile's should support all the above common methods and can receive any of the arguments defined in [src/server/profiles/observation/observation.arguments.js](./src/server/profiles/observation/observation.arguments.js).

#### Organization
Organization profile's should support all the above common methods and can receive any of the arguments defined in [src/server/profiles/organization/organization.arguments.js](./src/server/profiles/organization/organization.arguments.js).

#### Patient
Patient profile's should support all the above common methods and can receive any of the arguments defined in [src/server/profiles/patient/patient.arguments.js](./src/server/profiles/patient/patient.arguments.js).

#### Practitioner
Practitioner profile's should support all the above common methods and can receive any of the arguments defined in [src/server/profiles/practitioner/practitioner.arguments.js](./src/server/profiles/practitioner/practitioner.arguments.js).

#### Procedure
Procedure profile's should support all the above common methods and can receive any of the arguments defined in [src/server/profiles/procedure/procedure.arguments.js](./src/server/profiles/procedure/procedure.arguments.js).

### Examples

#### Setting up a https server with my own patient service

```javascript
const { VERSIONS } = require('@asymmetrik/node-fhir-server-core/constants');
const fhirServerCore = require('@asymmetrik/node-fhir-server-core');

const config = {
	server: {
		port: 3000,
		ssl: {
			key: path.resolve('./key.pem'),
			cert: path.resolve('./cert.pem')
		}
	},
	logging: {
		level: 'debug'
	},
	profiles: {
		patient: {
			// Path to a service or the actual module
			service: require(path.resolve('./profiles/patient/patient.service')),
			// set the supported version to stu3 only
			versions: [ VERSIONS.STU3 ]
		}
	}
};

let main = async function () {
	// If the app fails to start, log the error
	let server = await fhirServerCore(config).catch(console.error);
	
	if (server) {
		server.logger.verbose('My FHIR Server is up and running!');
		server.logger.info(`See it at https://localhost:${config.port}`);
	}
};

main();
```

#### Setting up a minimal dev server with my own patient service

```javascript
const { VERSIONS } = require('@asymmetrik/node-fhir-server-core/constants');
const fhirServerCore = require('@asymmetrik/node-fhir-server-core');

const config = {
	server: {
		port: 3000
	},
	profiles: {
		patient: {
			// Path to a service or the actual module
			service: require(path.resolve('./profiles/patient/patient.service')),
			versions: [ VERSIONS.STU3 ]
		}
	}
};

let main = async function () {
	// If the app fails to start, log the error
	let server = await fhirServerCore(config).catch(console.error);
	
	if (server) {
		server.logger.verbose('My FHIR Server is up and running!');
		server.logger.info(`See it at http://localhost:${config.port}`);
	}
};

main();
```

## Contributing
Please see [CONTRIBUTING.md](./.github/CONTRIBUTING.md) if interested in contributing.

## Attention

This library makes use of node's path module. This is potentially exploitable in node version 8.5, see [here](https://nodejs.org/en/blog/vulnerability/september-2017-path-validation/). When deploying this, you need to deploy with a node version later than 7.6 BUT not 8.5.

## License
`@asymmetrik/node-fhir-server-core` is [MIT licensed](./LICENSE).
