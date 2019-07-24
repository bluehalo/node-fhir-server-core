## Overview

We now support custom $operations in `node-fhir-server-core`.

## Adding Custom Operations

Let's walk through an example of adding `/$everything` operation to our Patient resource.  

First, we will need to define an operation in our config.

```javascript
const config = {
	profiles: {
		patient: {
			service: path.resolve('./src/patient.js'),
			versions: [VERSIONS['3_0_1']],
			operation: [{
				name: 'everything',
				route: '/$everything',
				method: 'GET',
				reference: 'https://www.hl7.org/fhir/patient-operation-everything.html'
			}]
		}
	}
}
```

If we FHIR up our server (GET IT? *FHIR* UP!?), we should get an error that tells us we have to make a function called `everything` in our `patient.js` file. Here is my error:

`019-03-08T14:23:43.220Z - error:  message=Must include a function for patient with name everything that you specified in your configuration file.`

In our `patient.js` file, just like our other routes, we will add a method for `everything`.

```javascript
module.exports.everything = (args, context, logger) => {
  logger.info('Running Patient $everything operation');
  return new Promise((resolve, reject) => {
    try { 
      // execute whatever custom operation you want.
      resolve([])
    } catch(err) {
      reject(err)
    }
	});
};
```

Restarting your server and navigating your browser to `/3_0_1/Patient/$everything`, your logger should generate the message above, and your function should return an empty array.

### Custom Operation by ID

Now let's say you want to have a custom operation by ID.  Fear not, let's light a *FHIR* under your keyboard and get to work.

Let's add `everything-by-id` in `Patient` by going back to our config:

```javascript
const config = {
	profiles: {
		patient: {
			service: path.resolve('./src/patient.js'),
			versions: [VERSIONS['3_0_1']],
			operation: [{
				name: 'everything',
				route: '/$everything',
				method: 'GET',
				reference: 'https://www.hl7.org/fhir/patient-operation-everything.html'
			}, {
				name: 'everything-by-id',
				route: '/:id/$everything',
				method: 'GET',
        reference: 'https://www.hl7.org/fhir/patient-operation-everything.html'
			}]
		}
	}
}
```

If we restart the server we should see an error telling us to make a function called `everythingById` (notice the camelCase of the name property).

Back in our `patient.js`:

```javascript
module.exports.everythingById = (args, context, logger) => {
  logger.info(`Running Patient /:id/$everything`)
  return new Promise((resolve, reject) => {
    try { 
      // execute whatever custom operation you want to get patient by id.
      resolve({resourceType: 'Patient', id: 1})
    } catch(err) {
      reject(err)
    }
}
```

Navigating in your browser to `/3_0_1/Patient/1/$everything` should trigger the logger info above and return your patient with ID of `1`.

This should give you a start for making custom operations of any kind.  
