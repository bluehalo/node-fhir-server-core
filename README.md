Asymmetrik FHIR API Server
==========================
> A Secure Rest implementation for the [HL7 FHIR Specification](https://www.hl7.org/fhir/). For API documentation, please see [https://github.com/Asymmetrik/node-fhir-server-core/wiki](https://github.com/Asymmetrik/node-fhir-server-core/wiki).

[![Build Status](https://travis-ci.org/Asymmetrik/node-fhir-server-core.svg?branch=develop)](https://travis-ci.org/Asymmetrik/node-fhir-server-core) [![Known Vulnerabilities](https://snyk.io/test/github/asymmetrik/node-fhir-server-core/badge.svg?targetFile=package.json)](https://snyk.io/test/github/asymmetrik/node-fhir-server-core?targetFile=package.json)




The Asymmetrik Extensible Server Framework for Healthcare allows organizations to build secure, interoperable solutions that can aggregate healthcare resources via a common HL7® FHIR®-compatible REST API.

The framework defines a core server, `node-fhir-server-core`, a secure Node.js module built according to the FHIR specification with the [US Core](http://www.hl7.org/fhir/us/core/) implementation.



<img src="https://www.asymmetrik.com/wp-content/uploads/2018/01/FHIR-Server-Architecture_Update.png" width="800">


## Prerequisites

1. Install [Node.js](https://nodejs.org/en/) latest version (7.7+, **but** not 8.5, see [Attention](#attention))
2. Windows users: Install [NPM](https://www.npmjs.com).

Understanding of JavaScript [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) and familiarity of the FHIR specification would be helpful.

## Getting Started

1. Install `node-fhir-server-core` initial modules with NPM:

```shell
npm install --save git+https://github.com/Asymmetrik/node-fhir-server-core.git
```


2. The server portion can be required as followed: 
 
```javascript
const FHIRServer = require('@asymmetrik/node-fhir-server-core');
const { VERSIONS } = FHIRServer.constants;

/**
* The server will not run unless you have at least one valid profile configuration
*/
const config = {
	profiles: {
		patient: {
			service: path.resolve('./profiles/patient/patient.service'),
			versions: [ VERSIONS['3_0_1'] ]
		}
	}
};

let main = function () {
	let server = FHIRServer.initialize(config);
	server.logger.info('FHIR Server successfully validated.');
	// Start our server
	server.listen(3000, () =>
		server.logger.info('FHIR Server listening on localhost:' + 3000)
	);
};

main();
```


3. Start server with NPM:
```
npm run start
```
   
Confirm successful start with the following:
```
info: FHIR Server started successfully
```


## Usage
For a complete list of all configuration options, supported profiles, their setups, best practices, authentication, etc. please consult our [Wiki](https://github.com/Asymmetrik/node-fhir-server-core/wiki). More documentation and examples will be added over time.

For a working Mongo example, implementing this core server, refer to [Asymmetrik/node-fhir-server-mongo](https://github.com/Asymmetrik/node-fhir-server-mongo).


## Philosophy
This project's aim is to build a secure FHIR server that supports resource profiles defined in the [US Core implementation guide](http://www.hl7.org/fhir/us/core/). Plugin style architecture was used to enable easy implementation of resource and data queries.  Future development includes support for extensions, versions, write capabilities, etc.  

We believe in establishing a robust security, especially when it comes to health information.  Part of the ONC Secure API Server Challenge was to stand up a server and let penetration testers have a go at it (you can see their results [here](https://github.com/Asymmetrik/node-fhir-server-core/issues?utf8=%E2%9C%93&q=label%3A%22ONC+FHIR+Challenge+Vulnerability%22+)).  We are committed to continuing this practice and we will continue fixing any vulnerabilities discovered so we can do our best to make this server as secure as possible.  For authentication, we are actively working on methods for simplifying integration with [SMART on FHIR](http://docs.smarthealthit.org/).

## Contributing
Please see [CONTRIBUTING.md](./.github/CONTRIBUTING.md) for more details regarding contributing issues or code.

## Attention
This library makes use of node's path module, exploitable in node version 8.5 [(See Nodejs vulnerability)](https://nodejs.org/en/blog/vulnerability/september-2017-path-validation/), so it's recommended to deploy with a node version 7.7+ **BUT** not 8.5.

## License
`@asymmetrik/node-fhir-server-core` is [MIT licensed](./LICENSE).
