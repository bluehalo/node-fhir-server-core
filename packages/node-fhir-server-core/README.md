Asymmetrik FHIR API Server
==========================
> A Secure Rest implementation for the [HL7 FHIR Specification](https://www.hl7.org/fhir/). For API documentation, please see [our documents](https://github.com/Asymmetrik/node-fhir-server-core/tree/master/docs).

[![Build Status](https://travis-ci.org/Asymmetrik/node-fhir-server-core.svg?branch=develop)](https://travis-ci.org/Asymmetrik/node-fhir-server-core) [![Known Vulnerabilities](https://snyk.io/test/github/asymmetrik/node-fhir-server-core/badge.svg?targetFile=package.json)](https://snyk.io/test/github/asymmetrik/node-fhir-server-core?targetFile=package.json)

The Asymmetrik Extensible Server Framework for Healthcare allows organizations to build secure, interoperable solutions that can aggregate and expose healthcare resources via a common HL7® FHIR®-compatible REST API.  This server framework currently supports **DSTU2** (1.0.2), **STU3** (3.0.1), and **R4** (4.0.0) simultaneously.  You can decide to support all three or just one by editing the configuration.

The framework defines a core server, `node-fhir-server-core`, a simple, secure Node.js module built according to the FHIR specification and compliant with the [US Core](http://www.hl7.org/fhir/us/core/) implementation.

For an example implementation using MongoDB, please refer to our Github repository that we used for the ONC FHIR Secure API Server Showdown Challenge: [https://github.com/Asymmetrik/node-fhir-server-mongo](https://github.com/Asymmetrik/node-fhir-server-mongo).

<img src="https://www.asymmetrik.com/wp-content/uploads/2018/01/FHIR-Server-Architecture_Update.png" width="800">

## node-fhir-server-core@2.0.0
Please view the [Migration Guide](https://github.com/Asymmetrik/node-fhir-server-core/blob/master/docs/MIGRATION_2.0.0.md) for version `2.0.0`. We **will absolutely** continue supporting previous versions but **will prioritize** new features going to `2.0.0` unless we receive requests to retrofit them to older versions.

## Prerequisites
[Node.js](https://nodejs.org/en/) version later than `>7.6` is required, **but** you should **NOT** use `8.5` (see [Attention](#attention)).  A basic understanding of [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) and a familiarity of the FHIR specification is not required, but will be very helpful.

## Getting Started
Please see our [Getting Started](./docs/GettingStarted.md) guide for a walkthrough of how to set up our FHIR server. 

## Frequently Asked Questions
- [What configurations does `FHIRServer.initialize()` accept?](./docs/ServerConfiguration.md)
- [How do I configure a "profile"?](./docs/ConfiguringProfiles.md)
- [Can I add more loggers or customize how the logger works?](./docs/CustomizeLogging.md)
- [How do I customize the capability statement?](./docs/CustomCapability.md)
- [How do I add custom operations?](./docs/CustomOperations.md)
- [How do I enable/disable/customize access control (authentication)?](./docs/AccessControl.md)

## Philosophy
Our project vision is to build an easy to use FHIR server that supports all resource profiles defined in the [US Core implementation guide](http://www.hl7.org/fhir/us/core/) and is built with security in mind from the ground up. We decided to use a plugin style architecture so implementors could focus on writing queries and not worry about all the other technical difficulties of securing the server.  As this project matures, we plan to support more resources, custom extensions, versions, write capabilities, etc.  

We believe in establishing a robust security, especially when it comes to health information.  Part of the ONC Secure API Server Challenge was to stand up a server and let penetration testers have a go at it (you can see their results [here](https://github.com/Asymmetrik/node-fhir-server-core/issues?utf8=%E2%9C%93&q=label%3A%22ONC+FHIR+Challenge+Vulnerability%22+)).  We are committed to continuing this practice and we will continue fixing any vulnerabilities discovered so we can do our best to make this server as secure as possible.  For authentication, we are actively working on methods for simplifying integration with [SMART on FHIR](http://docs.smarthealthit.org/).

## Contributing
Please see [CONTRIBUTING.md](https://github.com/Asymmetrik/node-fhir-server-core/blob/master/CONTRIBUTING.md) for more details regarding contributing issues or code.

## Questions
If you are experiencing a bug, please feel free to file an [issue](https://github.com/Asymmetrik/node-fhir-server-core/issues). For general questions, please post them to [StackOverflow](https://stackoverflow.com/) with the tag `node-fhir-server-core` or `javascript-fhir`.

## Attention
This library makes use of node's path module. This is potentially exploitable in node version `8.5`, see [here](https://nodejs.org/en/blog/vulnerability/september-2017-path-validation/). When deploying this, you need to deploy with a node version later than `>7.6` but **NOT** `8.5`.

## License
`@asymmetrik/node-fhir-server-core` is [MIT licensed](https://github.com/Asymmetrik/node-fhir-server-core/blob/master/LICENSE).
