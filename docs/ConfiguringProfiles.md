## Overview

We are currently focused on being fully compliant with the the latest major stable releases. In this section, we will discuss the options you have for enabling capabilities for each resource and version.

## Profile Configuration

### Supported Profiles

Go to [src/constants.js](https://github.com/Asymmetrik/node-fhir-server-core/blob/master/src/constants.js#L1) to find a list of all supported profiles with their associated keys.

Profiles have the following configuration options:

#### `service`

- **Type:** `string|object`
- **Description:** Path to a service module or the actual module itself (e.g. `require('path/to/service')`).
- **Required:** `Yes`
- **Default:** `none`

#### `versions`

- **Type:** `Array<string>`
- **Description:** An array of strings containing the versions you intend to support. You cannot add anything you want here, only valid versions supported in core will be used. See [`exports.VERSIONS`](https://github.com/Asymmetrik/node-fhir-server-core/blob/master/src/constants.js) in the constants file.
- **Required:** `Yes`
- **Default:** `none`

#### `corsOptions`

- **Type:** `object`
- **Description:** Set profile specific cors options. These will override the default `corsOptions` set in the server config.  Please see [https://github.com/expressjs/cors#configuration-options](https://github.com/expressjs/cors#configuration-options) for details. The `methods` configuration will not be honored if specified here. This is controlled by `@asymmetrik/node-fhir-server-core` and cannot be overridden.
- **Required:** `No`
- **Default:** `none`

## Profile(s) Interface

Each profile has a predefined set of methods it can implement. If you do not want to support a particular interaction, for example, delete, then just don't implement the remove method. Each method you implement must return a promise and will receive the following three arguments (see sample code below):

- `args` - An object containing all the sanitized arguments passed into the request. The arguments these contain will change based on the endpoint, e.g. create and delete have different args and search has different args between a patient and an observation. See below for more information.
- `contexts` - Additional contextual information from the EHR or authentication system if available
- `logger` - A Winston logger instance used by [`node-fhir-server-core`](https://github.com/Asymmetrik/node-fhir-server-core/). This is going to be marked as deprecated in future versions, we will expose the logger via a `require('@asymmetrik/node-fhir-server-core').logger` starting with 2.0.0. It will eventually be removed  completely.

### Available Methods

#### `search`

- **Required:** No
- **Description:** Get the resource given one of several valid argument(s) and/or  combination(s) of arguments in the req.query.
- **Return:** `Promise.<object, Error>`
- **Routes:** Enables `/:base/[profile_name]` via GET and `/:base/[profile_name]/_search` via POST
- **Example:**
```javascript
module.exports.search = (args, contexts, logger) => new Promise((resolve, reject) => {
        // You will need to build your query based on the sanitized args
	let query = myCustomQueryBuilder(args);
	db.patients.find(query, (err, patients) => {
		if (err) {
			logger.error('Error with Patient.search');
			return reject(err);
		}
		return resolve(patients);
	});
});
```

#### `searchById`

- **Required:** No
- **Description:** Get the patient given an id in the req.params.
- **Return:** `Promise.<object, Error>`
- **Routes:** Enables `:base/[profile_name]/:id` via GET
- **Example:**
```javascript
// In patient service
module.exports.searchById = (args, contexts, logger) => new Promise((resolve, reject) => {
	db.patients.find({ _id: args.id }, (err, patient) => {
		if (err) {
			logger.error('Error with Patient.searchById');
			return reject(err);
		}
		return resolve(patient);
	});
});
```

#### `create`

- **Required:** No
- **Description:** Create a FHIR resource.
- **Return:** `Promise.<{ id: string, resource_version: string }, Error>`
- **Routes:** Enables `/:base/[profile_name]` via POST 
- **Example:**
```javascript
module.exports.create = (args, contexts, logger) => new Promise((resolve, reject) => {
	let { id, resource } = args;
	// This is a mongo specific thing
	resource._id = id;
	
	db.patients.insert(resource, (err, response) => {
		if (err) {
			logger.error('Error with Patient.create');
			return reject(err);
		}
		return resolve({
			id: response._id,
			// This is optional if you support versions
			resource_version: 1
		});
	});
});
```

#### `update`

- **Required:** No
- **Description:** Create or update a FHIR resource.
- **Return:** `Promise.<{ id: string, resource_version: string }, Error>`
- **Routes:** Enables `/:base/[profile_name]/:id` via PUT
- **Example:**
```javascript
module.exports.update = (args, contexts, logger) => new Promise((resolve, reject) => {
	let { id, resource } = args;
	// This is a mongo specific thing
	resource._id = id;
	
	db.patients.update(resource, (err, response) => {
		if (err) {
			logger.error('Error with Patient.update');
			return reject(err);
		}
		return resolve({
			id: response._id,
			// This is optional if you support versions
                        // The version is the version of the resource and not the FHIR version
			resource_version: 1
		});
	});
});
```

#### `remove`

- **Required:** No
- **Description:** Delete a FHIR resource.
- **Return:** `Promise.<object, { code: string, message: string}>`
- **Routes:** Enables `/:base/[profile_name]/:id` via DELETE
- **Example:**
```javascript
module.exports.remove = (args, contexts, logger) => new Promise((resolve, reject) => {
	let { id } = args;
	
	db.patients.remove({ _id: id }, (err, response) => {
		if (err) {
			logger.error('Error with Patient.delete');
			return reject({
				// Must be 405 (Method Not Allowed) or 409 (Conflict)
				// 405 if you do not want to allow the delete
				// 409 if you can't delete because of referential
				// integrity or some other reason
				code: 409,
				message: 'Patient referenced in Observations and cannot be deleted. Please delete observations first.'
			});
		}
		return resolve();
	});
});
```

## Profile(s) Arguments

All profiles support this set of [common arguments](https://github.com/Asymmetrik/node-fhir-server-core/blob/master/src/server/profiles/common.arguments.js) as well as the arguments for each individual profile defined in the directories below. These come through to your service via the `args` argument.

| Specification |  Directory |
|---------------|------------|
| [3.0.1](http://hl7.org/fhir/stu3/resourcelist.html)   | [src/server/standards/3_0_1/arguments](https://github.com/Asymmetrik/node-fhir-server-core/tree/master/src/server/standards/3_0_1/arguments)  |
| [1.0.2](http://hl7.org/fhir/dstu2/resourcelist.html) | [src/server/standards/1_0_2/arguments](https://github.com/Asymmetrik/node-fhir-server-core/tree/master/src/server/standards/1_0_2/arguments)  |

You can download the structure definitions we are using for [STU3](https://www.hl7.org/fhir/stu3/downloads.html) and [DSTU2](https://www.hl7.org/fhir/dstu2/downloads.html) from the official FHIR website.
