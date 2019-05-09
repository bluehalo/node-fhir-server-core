# Migrating to Version 2.0.0
This guide represents all the known changes that will need your attention when migrating to version 2.0.0. If we are missing anything, please open an issue so we can update this guide for the benefit of everyone. Before we continue, I would like to talk about why we are making these changes. We think opinions are good, but too many can be bad. We had a lot of logic in the code that made customizing things difficult or impossible, and also made the source code a pain to work with. We recently started moving things to separate packages, [phx-tools](https://github.com/Asymmetrik/phx-tools), and have been making the code that we generate leaner and leaner.

We think this will simplify things a lot for developers on both sides, contributors and users alike. We also plan to maintain the older versions and even do bug fixes. However, newer features are going to be prioritized on version 2.0.0 and only retrofit to older branches when requested.

* [Breaking changes]
	* [Return types]
		* [Custom errors]
	* [Logging]
		* [Old way]
		* [New way]
* [New features]
	* [New methods]
		* [resolveSchema]
	* [Logging container]
	* [Tools migration]
	* [Favicon]
* [Bugs]
	* [Missing profiles]
	* [Bundle return types]
	* [All files lowercased]
* [Missing]
	* [Sanitize params]

## Breaking changes

### Return types

One major change for version 2.0.0 is how your services returned resources. Everything before 2.0.0 returned JSON and only JSON. Bundles would attempt to set correct properties based on a variety of things, but ultimately, would not cast resources because it did not want to assume all resources were the same type. Doing the casting and crafting these responses made the response utils very ugly and do more than they really needed to do. Response utils have since moved to an external package, which you can find at https://github.com/Asymmetrik/phx-tools/tree/master/packages/fhir-response-util. They are now very simple to work with and easier to modify in the future.

What this means for developers is that they will now need to be explicit when returning data from a service and use the schemas we are providing. Here is two examples, one that searches by id and one that searches for multiple resources.

```javascript
const { resolveSchema } = require('@asymmetrik/node-fhir-server-core');
// In patient service, this returns a bundle
module.exports.search = async (args, context) => {
	let BundleEntry = require(resolveSchema(args.base_version, 'bundleentry'));
	let Bundle = require(resolveSchema(args.base_version, 'bundle'));
	let Patient = require(resolveSchema(args.base_version, 'patient'));
	let Observation = require(resolveSchema(args.base_version, 'observation'));
	// You will need to build your query based on the sanitized args
	let query = myCustomQueryBuilder(args);
	let results = await db.patients.find(query).toArray();
	let patients = results.filter(result => result.resourceType === 'Patient').map(result => new Patient(result));
	let observations = results.filter(result => result.resourceType === 'Observation').map(result => new Observation(result));
	let entries = Array.prototype.concat(
		patients.map(patient => new BundleEntry({ resource: patient })),
		observations.map(observation => new BundleEntry({ resource: observation }))
	);
	let bundle = new Bundle({ entry: entries });
	return bundle;
};
```


```javascript
const { resolveSchema } = require('@asymmetrik/node-fhir-server-core');
// In patient service, this returns a bundle
module.exports.searchById = async (args, context) => {
	let Patient = require(resolveSchema(args.base_version, 'patient'));
	let result = await db.patients.findOne({ _id: args.id });
	return new Patient(result);
};
```

#### Custom errors

Previously, when you threw an error in your service, we just took the error message and a status code and passed in to some utility that wrapped it in a minimal operation outcome. But what if you want to customize the operation outcome or use a different code than we had available. There was no way to do that. In version 2.0.0, since we changed how you return data in your services, you can create your own and just return it. We also allow you to add additional properties to it so you can control other things, such as the HTTP response code. For example, let's throw an error for attempting to delete a resource that other resources depend on. The spec says the HTTP status code must be a 409 in this case, for conflict. You could implement that like so:

```javascript
const { resolveSchema } = require('@asymmetrik/node-fhir-server-core');
// In patient service
module.exports.remove = async (args, context) => {
	let OperationOutcome = require(resolveSchema(args.base_version, 'operationoutcome'));
	try {
		await db.patients.remove({ _id: args.id });
	} catch (err) {
		// For argument sake, assume we failed because an Observation references this patient
		let outcome = new OperationOutcome({
			// Set this to make the HTTP status code 409
			statusCode: 409,
			// Add any normal operation outcome stuff here
			issue: [{
				severity: 'error',
				code: 'internal',
				details: {
					text: 'Failed to delete patient because Resource XYZ depends on it.'
				}
			}]
		});
	}
};
```

### Logging

#### Old way
The logger was passed around as a parameter traditionally. So you are probably used to receiving it in your services like so:

```javascript
// In a patient service for example
module.exports.search = (args, contexts, logger) => new Promise((resolve, reject) => {
	logger.info('We are performing a search');
});
```

Or seeing it attached to the server object, like this:

```javascript
const FHIRServer = require('@asymmetrik/node-fhir-server-core');

let config = { ... };
let server = FHIRServer.initialize(config);

server.listen(3000, () => {
	server.logger.info('Starting the FHIR Server at localhost:3000');
});
```

You can still use the logger attached to the server object, but it is marked as deprecated so we highly discourage it. You **cannot** use it in your services as it is no longer passed in.

#### New way
The new way to use the logger is to require it and invoke get on the loggers container. We expose a winston container object so you can also add your own custom loggers with their own transports, as well as modify the default one if you would like.

To get the logger anywhere in your code, just add the following:

```javascript
const { loggers } = require('@asymmetrik/node-fhir-server-core');
const logger = loggers.get('default');
```

If you want to access the winston container, you can do the following:

```javascript
const { container } = require('@asymmetrik/node-fhir-server-core').loggers;
const logger = container.get('default');
```

You can read more on the Container API here, https://github.com/winstonjs/winston#working-with-multiple-loggers-in-winston, and https://github.com/winstonjs/winston/blob/master/lib/winston/container.js.

A common change will be to update your service to look like this now:

```javascript
const { loggers } = require('@asymmetrik/node-fhir-server-core');
const logger = loggers.get('default');
// In a patient service for example, with async
module.exports.search = async (args, context) => {
	logger.info('We are performing a search');
};
// with promises
module.exports.update = (args, context) => new Promise((resolve, reject) => {
	logger.info('We are performing a search');
});
```

and for your server startup:

```javascript
const { initialize, loggers } = require('@asymmetrik/node-fhir-server-core');
const logger = loggers.get('default');

let config = { ... };
let server = initialize(config);

server.listen(3000, () => {
	logger.info('Starting the FHIR Server at localhost:3000');
});
```

## New features

### New methods

#### `resolveSchema`
- **Description:** Load a resource by their lowercased names and version.
- **Arguments:** (version: String, resourceName: string)
- **Return:** `Class`
- **Example:**
```javascript
const { resolveSchema } = require('@asymmetrik/node-fhir-server-core');
// Load R4 Operation Outcome
let OperationOutcome = require(resolveSchema('4_0_0', 'operationoutcome'));
// Load STU3 Patient class
let Patient = require(resolveSchema('3_0_1', 'patient'));
```

Allowed values can be found in the [resources](../src/server/resources) directory. Each top level folder represents a version and inside each version folder is a schemas directory which contains all the available schemas you can load.

### Logging container
As mentioned above under breaking changes, we changed how logging works entirely. With winston, you can use containers to get, add, and even update loggers. It also makes it really easy to add your own transports or other loggers. For example, if you are happy with the default logger only logging to console, and want a custom logger for only your things, you can add your own transport and have it write logs to anywhere you desire. Rotating logs, AWS, Mongo, and many more.

Please check out the following links for more info:
* https://github.com/winstonjs/winston#working-with-multiple-loggers-in-winston
* https://github.com/winstonjs/winston/blob/master/lib/winston/container.js
* https://github.com/winstonjs/winston/blob/master/docs/transports.md

Again, you can access these like so:

```javascript
const { loggers } = require('@asymmetrik/node-fhir-server-core');
const logger = loggers.get('default');

// Or with the container, this will still get the same default logger
const { container } = require('@asymmetrik/node-fhir-server-core').loggers;
const logger = container.get('default');
```

### Tools migration
More and more logic is being removed and developed in separate tools. They are all inside a monorepo that is managed by Lerna. This makes it easier to have better unit testing and upgrades. We can just apply patches there and publish versions independently of the core library. You can see all the packages we have available here: https://github.com/Asymmetrik/phx-tools. Some are GraphQL specific but the majority are not. We have response utils, Smart on FHIR scope utils and passport strategies, query builders, and parameter sanitization logic. 

### Favicon
You can now provide a favicon by supplying it in your config under the server object. See [ServerConfiguration.md](./ServerConfiguration.md) for an example.

## Bugs

### Missing profiles
Prior to 2.0, profiles were manually added and used across all versions. So we had a folder structure that looked like this:

```shell
- src
	- server
		- profiles
			- [resource]
				- [resource].controller.js
		- standards
			- 1_0_2
			- 3_0_1
			- 4_0_0
```

Generated code was separate from the profiles so there was always a temporary disconnect when new resources where generated. Newly generated code looks like this:

```shell
- src
	- server
		- resources
			- controllers
			- parameters
			- schemas
```

This means when we generate new resources, we immediately support all new features/resources of that version because we generate the whole package.

### Bundle return types
Bundle's prior to 2.0, never casted their entries, it was up to you. This was kind of wonky. A request comes in, you query your database, then you have to cast all the resources yourselves but then don't place them in the bundle, hand them back to us, we attempt to put them in a bundle and don't do anything with the entries. If you want to be conformant, this made it more difficult than it should be. Now, the response utils don't create resources for you anymore, this was mentioned in the breaking change but this fixes the issue of not knowing how or why bundles behaved the way they did. Now, you must be explicit in your return types.

### All files lowercased
All generated code is now lowercased and using a simple naming convention. We had a lot of logic to try to know when to lowercase certain things and when not to which caused bugs to re-appear after being fixed. This was because most development is done on macs, which are case insensitive at times. We added CI testing on a linux machine and lowercased all files so we do not need to worry about this ever again.

## Missing
Some features did not quite make it in because we think the change would be too much all at once. We are testing them on other internal tools and may migrate them in the future if it's something the community wants. Below you will find all major features that may be incorporated at some point. We will keep the current status of each one listed up to date per any discussions.

### Sanitize params
**Status:** Currently not in any milestones

We have a parameter sanitization util which goes much further that the one currently implemented here. The one currently is missing support for many features and has to ignore certain parameters because of prefixes, pipes, and modifiers. The new version would change the way it returns objects. So if the field type is quantity, currently a request like this wouldn't work, `foo=10|bar|baz`, you would recieve foo = 10 and lose the code and system it applies to. The new sanitizer, would return something like this: 

```javascript
{
	prefix: 'eq',
	value: 10,
	code: 'baz',
	system: 'bar'
}
```

In the meantime, we now pass the request as part of the context object you receive in your services, so you can always access the raw parameters and work with those.
