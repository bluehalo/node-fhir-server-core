## Overview

This FHIR server library is intended to simplify the process of standing up your own FHIR server. We abstract a lot of the complicated pieces away, so all that you need to do is provide some configurations and write queries. In this getting started guide, we will walk you through using this library to start building your own FHIR server. 

**NOTE**: These instructions are for `Unix` based systems. If you are using Windows, you may need to swap some commands for their Windows equivalent.

## Creating a Server

Let's get started by installing some prerequisites.

### Prerequisites

1. Install the latest LTS for [Node.js](https://nodejs.org/en/). **You must have Node `>= 7.7` installed**.
2. Install [yarn](https://yarnpkg.com/en/docs/install).

### Project Setup

In terminal, run the following:

```shell
mkdir fhir-server
cd fhir-server
yarn init
```

You will now have a folder structure that looks like this:

```shell
fhir-server
- package.json
```

### Install `node-fhir-server-core`

Next, run:
 ```shell
yarn add @asymmetrik/node-fhir-server-core
```

### Create an entry file and a start script

Let's start by creating an `index.js` file in the root of the project and add the following code to it:

```javascript
const { initialize, loggers, constants } = require('@asymmetrik/node-fhir-server-core');

let config = {};
let server = initialize(config);
let logger = loggers.get('default');

server.listen(3000, () => {
	logger.info('Starting the FHIR Server at localhost:3000');
});
```

What we are doing here is loading the core library and then calling initialize on it. Internally, this will setup middleware, various security features, public directory routes, error routes, and routes for FHIR resources. Then finally, we tell the server to listen on port 3000 which makes the server available at `http://www.localhost:3000`.

You will now have a folder structure that looks like this:

```shell
fhir-server
- node_modules
- index.js
- package.json
- yarn.lock
```

The next thing we want to do is run this file in node. Let's add a script to our `package.json`. It should look something like this:

**NOTE:** You may have different values for some fields which is fine, the "scripts" block is the important part
```json
{
  "name": "fhir-server",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "@asymmetrik/node-fhir-server-core": "^1.3.0"
  }
}
```

Finally, start the server:
```shell
yarn start
```

If you have done everything correctly so far, you will receive the following error.

> Error: No profiles configured. We do not enable any profiles by default so please review the profile wiki for how to enable profiles and capabilities. See https://github.com/Asymmetrik/node-fhir-server-core/blob/master/docs/ConfiguringProfiles.md.

By default, our library does not configure any profiles. Without a profile, what is the point of having a server? Next, let's walk you through setting up a simple patient profile. A profile corresponds to a queryable FHIR resource, and we support all the standard searchable resources.

### Creating a patient profile

We will need to do a few things to add support for `Patient` resources in our server. Let's start by adding a patient service. Create a `patient.service.js` file in the root.

You will now have a folder structure that looks like this:

```shell
fhir-server
- node_modules
- index.js
- package.json
- patient.service.js
- yarn.lock
```

Add the following code to the patient service.

```javascript
module.exports.search = async (args, context) => {
	throw new Error('Unable to locate patients');
};
```

We are going to add support for the search interaction. Each profile can support many interactions. We have some documentation on profiles and how they work in the [Profile documentation](./ConfiguringProfiles.md) with more updates coming soon to cover everything. For now, let's start with a simple search.

The next thing we need to do is update our config in `index.js` to tell it we want to support the patient profile.

In `index.js`, add the following to the top of the file:

```javascript
const { initialize, loggers, constants } = require('@asymmetrik/node-fhir-server-core');
const { VERSIONS } = constants;
```

and then change `let config = {};` to the following:

```javascript
let config = {
	profiles: {
		patient: {
			service: './patient.service.js',
			versions: [
				VERSIONS['4_0_0']
			]
		}
	}
};
```

Here we are telling the FHIR server where to locate the patient service and that we intend to support it on R4 (`4.0.0` specifically). See the [server configuration docs](./ServerConfiguration.md) for more configuration options.

Now run `yarn start` one more time. You should see something very similar to the following:

```shell
2019-01-08T20:56:50.563Z - info: Starting the FHIR Server at localhost:3000
```

Open [http://localhost:3000/4_0_0/metadata](http://localhost:3000/4_0_0/metadata) in your browser and you should see a capability statement resource indicating you support the Patient resource. You can also open [http://localhost:3000/4_0_0/Patient](http://localhost:3000/4_0_0/Patient) to attempt a patient query. You should see an operation outcome that looks something like this:

```json
{
    "resourceType": "OperationOutcome",
    "text": {
        "status": "generated",
        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\"><table border=\"0\"><tr><td style=\"font-weight: bold;\">error</td><td><pre>Unable to locate patients</pre></td></tr></table></div>"
    },
    "issue": [{
        "severity": "error",
        "code": "exception",
        "diagnostics": "Unable to locate patients"
    }]
}
```

This is good as this is the error we created in the `patient.service.js`. `patient.service.js` is where you want to execute your queries and return your patient JSON. So you may need to connect to a database, query your data, and possibly even map your data back to a FHIR format if it is not already in a FHIR format.

If you made it this far, thanks for sticking it out and completing the Getting Started guide. Please browse the other [documentation pages](../docs) for more information and feel free to file issues/questions on our [issues](https://github.com/Asymmetrik/node-fhir-server-core/issues) page.
