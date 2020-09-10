# FHIR Response Utility
> Utility for handling the headers, content, and status types for a response

## Install

```shell
yarn add @asymmetrik/fhir-response-util
```

## Usage
The response utility exposes the following methods which can be used to for different scenarios and different types of responses. They all make certain assumptions about the arguments they receive which are documented below in the [arguments](#arguments) section.

This is designed to be used in [node-fhir-server-core](https://github.com/Asymmetrik/node-fhir-server-core) and similar FHIR servers. There is some pseudocode with each method's description to give an idea of how this might work. If you read the source code for resource controllers in node-fhir-server-core, you can see how we are using this internally. 

### read
> Used when you are returning a Bundle of resources

This will set the correct Content-Type and status code while sending the json back to the client.

```javascript
const handler = require('@asymmetrik/fhir-response-util');

// Some controller
function getPatientsController (req, res, next) {
  // The user may have some service to fetch results
  service.getPatients(req).then(bundle => {
    // Assuming bundle contains a bunch of patients
    handler.read(req, res, bundle);
  }).catch(err => {
    next(err);
  });
}
```

### readOne
> Used when you are returning a single resource of any type.

This will set the correct Content-Type and status code while sending the json back to the client.

```javascript
const handler = require('@asymmetrik/fhir-response-util');

// Some controller
function getPatientController (req, res, next) {
  // The user may have some service to fetch results
  service.getPatient(req).then(patient => {
    handler.readOne(req, res, patient);
  }).catch(err => {
    next(err);
  });
}
```

### create
> Used when you are creating a single resource of any type.

This will set the correct Content-Location, Location, and ETag headers. As well as set the correct status code.

```javascript
const handler = require('@asymmetrik/fhir-response-util');

// Some controller
function createPatientController (req, res, next) {
  // The user may have some service to fetch results
  service.create(req).then(patient => {
    let json = { id: patient.id, resource_version: patient.meta.versionId };
    let options = { type: 'Patient' };
    
    handler.create(req, res, json, options);
  }).catch(err => {
    next(err);
  });
}
```

### update
> Used when you are updating a single resource of any type

This will set the correct Content-Location, Last-Modified, Location, and ETag headers. As well as set the correct Content-Type and status code.

```javascript
const handler = require('@asymmetrik/fhir-response-util');

// Some controller
function updatePatientController (req, res, next) {
  // The user may have some service to fetch results
  service.update(req).then(patient => {
    let json = { id: patient.id, resource_version: patient.meta.versionId, created: false };
    let options = { type: 'Patient' };
    
    handler.update(req, res, json, options);
  }).catch(err => {
    next(err);
  });
}
```

### remove
> Used when you are deleting a single resource of any type

This will set the correct ETag header and status code.

```javascript
const handler = require('@asymmetrik/fhir-response-util');

// Some controller
function removePatientController (req, res, next) {
  // The user may have some service to fetch results
  service.remove(req).then(id => {
    let json = { deleted: id };
    
    handler.remove(req, res, json);
  }).catch(err => {
    next(err);
  });
}
```

### history
> Used when you are querying the history of a resource of any type

This will set the correct Content-Type and status code while sending the json back to the client.

```javascript
const handler = require('@asymmetrik/fhir-response-util');

// Some controller
function getPatientHistoryController (req, res, next) {
  // The user may have some service to fetch results
  service.history(req).then(bundle => {
    handler.history(req, res, bundle);
  }).catch(err => {
    next(err);
  });
}
```

## Arguments
[`req`](https://expressjs.com/en/api.html#req) and [`res`](https://expressjs.com/en/api.html#res) that you see in each method are from express. `res` is just a normal response, but request must have a base_version parameter(`req.params.base_version`). Specifically, it should be one of the valid versions we support in our server, which are '1_0_2', '3_0_1', and '4_0_0'. If you would like us to add more versions for this, just let us know, we use this to determine the correct content-type as well as the url of the resource for the response type and response headers.

### read
> handler.read(req, res, json);

#### `req`
Express request.

Type: `Express.req`  
Required: `true` 

#### `res`
Express response.

Type: `Express.req`  
Required: `true` 

#### `json`
Bundle FHIR resource.

Type: `Object`  
Required: `true` 

### readOne
> handler.readOne(req, res, json);

#### `req`
Express request.

Type: `Express.req`  
Required: `true`

#### `res`
Express response.

Type: `Express.req`  
Required: `true`

#### `json`
Individual FHIR resource.

Type: `Object`  
Required: `true`

### create
> handler.create(req, res, json, options);

#### `req`
Express request.

Type: `Express.req`  
Required: `true`

#### `res`
Express response.

Type: `Express.req`  
Required: `true`

#### `json`
Properties from the results. Must have an `id`

Type: `Object`  
Required: `true`

#### `json.id`
ID of the FHIR resource that was created.

Type: `String`  
Required: `true`

#### `json.resource_version`
If we are using history, which version of the resource did we create.

Type: `String`  
Required: `false`

#### `options`
Additional options needed to set the correct headers in the response.

Type: `Object`  
Required: `true`

#### `options.type`
This helps us set the content-location and location headers. For example, `handler.create(req, res, json, { type: 'Patient' })` would allow us to set a header like this, `res.set('Location', '4_0_0/Patient/patient-identifier')`.

Type: 'String'  
Required: 'true'

### update
> handler.update(req, res, json, options);

#### `req`
Express request.

Type: `Express.req`  
Required: `true`

#### `res`
Express response.

Type: `Express.req`  
Required: `true`

#### `json`
Properties from the results. Must have an `id`

Type: `Object`  
Required: `true`

#### `json.id`
ID of the FHIR resource that was created.

Type: `String`  
Required: `true`

#### `json.resource_version`
If we are using history, which version of the resource did we create.

Type: `String`  
Required: `false`

#### `json.created`
Did we create a resource or not. If we created a resource, we need to know so that we can set a `res.status` of 201, otherwise, we will default to a status of 200.

Type: `Boolean`  
Required: `false`

#### `options`
Additional options needed to set the correct headers in the response.

Type: `Object`  
Required: `true`

#### `options.type`
This helps us set the content-location and location headers. For example, `handler.create(req, res, json, { type: 'Patient' })` would allow us to set a header like this, `res.set('Location', '4_0_0/Patient/patient-identifier')`.

Type: 'String'  
Required: 'true'

### remove
> handler.remove(req, res, json);

#### `req`
Express request.

Type: `Express.req`  
Required: `true`

#### `res`
Express response.

Type: `Express.req`  
Required: `true`

#### `json`
JSON for the response. Not required but contains the optional deleted property.

Type: `Object`  
Required: `false`

#### `json.deleted`
The deleted property should be the id of the element deleted. For example, `handler.remove(req, res, { deleted: 'qwerty-123' })`. This allows us to add the identifier as a ETag in the response header.

Type: `Object`  
Required: `false`

### history
> handler.history(req, res, json);

#### `req`
Express request.

Type: `Express.req`  
Required: `true`

#### `res`
Express response.

Type: `Express.req`  
Required: `true`

#### `json`
Bundle FHIR resource.

Type: `Object`  
Required: `true`
