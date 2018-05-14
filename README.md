Asymmetrik FHIR API Server
==========================
> A Secure Rest implementation for the [HL7 FHIR Specification](https://www.hl7.org/fhir/). For API documentation, please see [https://github.com/Asymmetrik/node-fhir-server-core/wiki](https://github.com/Asymmetrik/node-fhir-server-core/wiki).

[![Build Status](https://travis-ci.org/Asymmetrik/node-fhir-server-core.svg?branch=develop)](https://travis-ci.org/Asymmetrik/node-fhir-server-core) [![Known Vulnerabilities](https://snyk.io/test/github/asymmetrik/node-fhir-server-core/badge.svg?targetFile=package.json)](https://snyk.io/test/github/asymmetrik/node-fhir-server-core?targetFile=package.json)

The Asymmetrik Extensible Server Framework for Healthcare allows organizations to build secure, interoperable solutions that can aggregate and expose healthcare resources via a common HL7® FHIR®-compatible REST API.

The framework defines a core server, `node-fhir-server-core`, a simple, secure Node.js module built according to the FHIR specification and compliant with the [US Core](http://www.hl7.org/fhir/us/core/) implementation.


<img src="https://www.asymmetrik.com/wp-content/uploads/2018/01/FHIR-Server-Architecture_Update.png" width="800">


## Prerequisites
[Node.js](https://nodejs.org/en/) version 7.6, but no later than 8.5, and an understanding of [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) usage are required. 

Familiarity of the FHIR specification and whatever database containing the resources will assist in querying data and returning them in a format conforming to specification.

## Getting Started
Install `node-fhir-server-core` as followed:

```shell
# For yarn users
yarn add git+https://github.com/Asymmetrik/node-fhir-server-core.git

# For npm users
npm install --save git+https://github.com/Asymmetrik/node-fhir-server-core.git
```

Once installed, the server can be required in the application.

```javascript
const { VERSIONS } = require('@asymmetrik/node-fhir-server-core/src/constants');
const fhirServerCore = require('@asymmetrik/node-fhir-server-core');

/**
* The configurations below are required and the server
* will not run unless you have specified a server.port
* and at least one valid profile configuration
*/
const config = {
	server: { port: 3000 },
	profiles: {
		patient: {
			service: path.resolve('./profiles/patient/patient.service'),
			versions: [ VERSIONS.STU3 ]
		}
	}
};

/**
* fhirServerCore returns a promise so you can use async/await
* if you like, or just use a normal promise like so:
*
* fhirServerCore(config)
* 	.then(server => server.logger.info('success'))
* 	.catch(err => console.error(err));
*/
let main = async function () {
	// If the app fails to start, log the error
	let server = await fhirServerCore(config).catch(console.error);
	
	if (server) {
		server.logger.info(`FHIR Server it at http://localhost:${config.port}`);
	}
};

main();
```

## Usage
As you saw with the previous example, setting up a simple dev server is trivial. There are however, many more configuration options available to use. For a complete list on what all the configuration options are, what profiles we support and their possible configurations, best practices, authentication, and more, please consult our [Wiki](https://github.com/Asymmetrik/node-fhir-server-core/wiki). We will be adding more documentation and examples over time to the Wiki.

If you would like to see an already developed implementation that utilizes MongoDB, please see our example Github repository we used for the ONC FHIR Secure API Server Showdown Challenge, [https://github.com/Asymmetrik/node-fhir-server-mongo](https://github.com/Asymmetrik/node-fhir-server-mongo).

## Philosophy
Our vision for this project is to build an easy to use FHIR server that supports all of the resource profiles defined in the [US Core implementation guide](http://www.hl7.org/fhir/us/core/) and is built with security in mind from the ground up. We decided to use a plugin style architecture so implementors could focus on writing queries and not worry about all the other technical difficulties of securing the server.  As this project matures, we plan to support more resources, more custom extensions, more versions, write capabilities, and much more.  

We also believe very much in security, especially when it comes to health information.  Part of the ONC Secure API Server Challenge was to stand up a server and let penetration testers have a go at it (you can see their results [here](https://github.com/Asymmetrik/node-fhir-server-core/issues?utf8=%E2%9C%93&q=label%3A%22ONC+FHIR+Challenge+Vulnerability%22+)).  We are committed to continuing this practice and we will continue fixing any vulnerabilities discovered so we can do our best to make this server as secure as possible.  For authentication, we are actively working on methods for simplifying integration with [SMART on FHIR](http://docs.smarthealthit.org/).

## Contributing
Please see [CONTRIBUTING.md](./.github/CONTRIBUTING.md) for more details regarding contributing issues or code.

## Attention
This library makes use of node's path module. This is potentially exploitable in node version 8.5, see [here](https://nodejs.org/en/blog/vulnerability/september-2017-path-validation/). When deploying this, you need to deploy with a node version later than 7.6 **BUT** not 8.5.

## License
`@asymmetrik/node-fhir-server-core` is [MIT licensed](./LICENSE).
