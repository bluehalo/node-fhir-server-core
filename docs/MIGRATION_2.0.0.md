## Return Types

### Custom Errors

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

## Logging

### Old way
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

### New Way
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
