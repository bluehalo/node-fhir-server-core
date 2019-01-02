Contributing
============

The `@asymmetrik/fhir-server-core` is designed to be a core component of the FHIR server. It will setup all the routes for you, perform argument validation, authentication, authorization, sanitization on arguments to en extent, setup your conformance statement, and validate the response format, all while allowing you to plugin your own backend.

It won't query a database or transform the data into the correct format for you. It is meant to be pluggable so you can provide your own server configuration and services for various profiles.  This allows you to focus on getting data out of your backend and in to the desired format while `@asymmetrik/fhir-server-core` handles all the rest for you. Consult the [README.md](../README.md) for information on how to develop a complete FHIR server using this module.

General guidelines for contributing to `@asymmetrik/fhir-server-core` are listed below as well as some basic steps to getting the project up and running locally. Towards the bottom of the documentation you will see some descriptions of how various pieces work to help you better understand the architecture.

## Getting Started
Getting setup is really easy, just follow the installation steps below. For more instructions for each environment, dev, prod, testing, see their respective sections below.

### Installation
1. Install the latest LTS for [Node.js](https://nodejs.org/en/).
2. [Fork](https://help.github.com/articles/fork-a-repo/) this repo to your GitHub account and clone it.
3. Run `yarn install`.

### Development
There is a development script setup with Nodemon to watch for changes. Once you start this script, it will watch files in the src directory and restart the server anytime you make a change.

To start local development, run `yarn nodemon` and open your browser to [localhost:3000](http://localhost:3000).

### Production
You can test production locally. Before you can, you will need to generate a self-signed certificate. You can do this with `openssl` as long as you have it installed on your system. Once complete, make sure you set the `HTTPS_KEY_PATH` and `HTTPS_CERT_PATH` environment variables or you set the path in the config passed into this module (`config.server.ssl`). When you pull up the app in the browser, you will have to allow self-signed certs in order to continue. This is fine for local development but you should get real certs for an actual production deploy. See [Generate self signed certs](#Generate-self-signed-certs)

To test production locally, run `yarn start` and open your browser to [https://localhost:3000](https://localhost:3000).

Before deploying to production, obtain valid certs and change the port in the config to `443`.

### Testing
We use jest for testing and collect coverage from just about everything in the src directory. You can run tests by simple running `yarn test`. Please try to add more tests if you are introducing new features.

#### Generate self signed certs
Make sure you have openssl installed and run the following commands.

```shell
openssl genrsa -out key.pem 2048
openssl req -new -sha256 -key key.pem -out client-csr.pem
openssl x509 -req -in client-csr.pem -signkey key.pem -out cert.pem
```

## Filing Issues
Please file your issues [here](https://github.com/Asymmetrik/node-fhir-server-core/issues) and try to provide as much information in the template as possible/relevant.

## Branching
While we do not enforce this with an iron fist, we do encourage you use the following branching strategy.

* For features or documentation updates. use `feat/<feature-name>`.
* For bugs, use `fix/<bug-or-issue-number>`.

## Submitting pull requests
Before submitting a pull request, try to make sure you have done the following.

1. Run `yarn prettier`. This formats code so we won't need any debates on style.
2. Run all the tests with `yarn test`.
3. If documentation should be added, please add it to the correct location. If the [Wiki](https://github.com/Asymmetrik/node-fhir-server-core/wiki) should be updated, make note of that in your PR and try to prepare a snippet we can add once your PR is merged.

Once everything is ready to go, submit a PR to the `master` branch.

## Architecture

### Server
The general workflow for this is fairly simple. The `@asymmetrik/fhir-server-core` module exports a single function that takes a config. It will create a Server instance, validate the config, and then start building the application. This will generate routes, add documentation, enable conformance statements for whichever profiles the user has opted into, and use middleware to validate arguments, authentication tokens, scopes, and more. It also will return a promise which resolves to an express instance.

Each profile will be located in it's own folder under the `src/server` directory. And has the following components (here is a patient profile example):

```shell
patient
|- # This is used to help generate the conformance statement for the
|- # metadata endpoint. Your metadata endpoint must list all the profiles
|- # you support.  This information will join the main conformance
|- # statement in the metadata profile. 
|- conformance.js
|- # This is where you configure your routes and other things specific to
|- # the patient profile
|- patient.config.js
|- # This is the root api definition for the Swagger Docs, it gets pulled into
|- # openapi.yml file and helps generate one big API document.
|- patient.swagger.json
|- # This directory contains any helper definitions needed in patient.swagger.json
|- definitions
|- # This contains controllers which will validate params, responses, and invoke the
|- # provided services.
|- controllers
	|- patient.controller.js
|- # This will generate routes if a valid profile configuration is received.
|- routes
	|- patient.routes.js
```

When a proper profile configuration is provided (essentially a valid service is provided, see the [README.md](../README.md) for detailed instructions), the routes will be created and this profile will be active. If we do not have a valid config, the routes will not be activated, the documentation will not be generated, and the conformance information will not be included.

#### Route Configuration
Route configuration's are in the config file for each profile. They have several arguments you can provide to customize the behavior of the route.

```javascript
{
	// Request method type, currently put and delete are not supported
	type: 'get',
	// Path to the endpoint
	// Pay attention to your params /:id syntax exposes them as req.params
	// not doing that and using ?foo=bar exposes them as req.query
	// and post puts params in req.body
	path: '/dstu2/patient/:id',
	// args must have a name and a type, if you specify required
	// and the arg is missing, it will throw a 400 error
	args: [{
		name: 'id',
		type: 'string',
		required: true
	}],
	// These are the necessary scopes for this endpoint
	scopes: [],
	// This is the controller to invoke when the route is accessed.
	// See `src/server/patients/controller/patient.controller.js`
	controller: controller.getPatientById
}
```
