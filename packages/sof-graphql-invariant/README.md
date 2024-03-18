# `SOF-GraphQL-Invariant`

> Utility for validating patient and user level scopes for the SMART on FHIR
> specification in a GraphQL based server.

# Install

```shell
yarn add @bluehalo/sof-graphql-invariant
```

## Usage

In this example, we will implement this on a single schema, PatientSchema. It
can work on queries and mutations. It does have some required arguments so
please see [Arguments](#arguments) below for more information. This will reject
requests on a resource level instead of across the entire request and will
reject them in a manner that meets conformance standards for FHIR and GraphQL.

```javascript
const scopeInvariant = require('@bluehalo/sof-graphql-invariant');

// NOTE: All the paths for the following modules are fictional, you will need
// to provide your own path to these resources, these are for example only

// This needs to be of GraphQLInputObjectType type
const OperationOutcome = require('./inputs/operationoutcome.input.js');
// Patient Schema that will be used for returning the patient data
const PatientSchema = require('./schemas/patient.schema.js');
// Patient arguments
const PatientArgs = require('./args/patient.parameters.js');
// Resolver you wish to use for this particular query
const patientQueryResolver = require('./patient/resolver.js');

// When defining a query to be used in a Root Schema, use this module
// as your resolver, it will invoke yours if everything meets the requirements
const PatientQuery = {
  description: 'Patient specific graphql query',
  type: PatientSchema,
  args: PatientArgs.
  resolver: scopeInvariant({
    schema: OperationOutcome,
    action: 'read',
    name: 'Patient',
  }, patientQueryResolver)
};

// Now use this in your root graphql schema somewhere
let root = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query for all resources',
  fields: { Patient: PatientQuery }
});
```

See [sof-graphql-invariant tests](https://github.com/BlueHalo/node-fhir-server-core/tree/master/packages/sof-graphql-invariant/index.test.js) for more usage examples.

### Environment variables

#### `SOF_AUTHENTICATION`

Disable authentication, it is enabled by default. See [disabling](#disabling).

Type: `String`  
Value: `false`

#### `HAS_GRAPHIQL`

Disable authentication for graphiql only while keeping it on other endpoints. See [Disabling for Graphiql only](#disabling-for-graphiql-only).

Type: `String`  
Value: `true`

### Disabling

If you use this invariant, it will check scopes on all incoming requests. If you want to disable this or provide a toggle mechanism, you can do so by setting an environment variable. To disable authentication, set `SOF_AUTHENTICATION` to false. It will only disable authentication if this is explicitly set to false.

```javascript
const scopeInvariant = require('@bluehalo/sof-graphql-invariant');

// Set the ENV
process.env.SOF_AUTHENTICATION = 'false';

/**
* NOTE: You *MUST* still provide a valid config if you are using
* sof-graphql-invariant, even if it is disabled. This is just a mock config and
* will not work unless you define all variables, see above for a more real world
* example.
*/
const ExamplePatientQuery = {
  description: 'PatientQuery'
  type: PatientSchema,
  args: PatientArgs,
  resolver: scopeInvariant({
    name: 'Patient',
    action: 'read',
    schema: OperationOutcomeInputSchema
  }, patientResolver)
};
```

### Disabling for Graphiql only

Sometimes it is useful to enable authentication in development but disable it when you are using the graphiql explorer. This requires two things. First is an environment variable stating you are using it, `HAS_GRAPHIQL`. Second, that the endpoint ends with `$graphiql`. If you do this, you can have authentication enabled on your graphql schemas but not if the request is coming from GraphiQL.

```javascript
const scopeInvariant = require('@bluehalo/sof-graphql-invariant');
// Set the ENV
process.env.HAS_GRAPHIQL = 'true';

/**
* NOTE: You *MUST* still provide a valid config if you are using
* sof-graphql-invariant, even if it is disabled. This is just a mock config and
* will not work unless you define all variables, see above for a more real world
* example.
*/
const ExamplePatientMutation = {
  description: 'PatientMutation'
  type: PatientSchema,
  args: PatientArgs,
  resolver: scopeInvariant({
    name: 'Patient',
    action: 'write',
    schema: OperationOutcomeInputSchema
  }, patientResolver)
};
```

## Arguments

`@bluehalo/sof-graphql-invariant` exports a single function which takes two arguments. One is a set of options and the other is a resolver function.

### Options

The first argument we have is an options object, it contains all of the following:

#### `name`

Name of the resource as it would appear in SMART on FHIR scopes.

Type: `String`  
Required: `true`

#### `action`

The action the user wants to take. Can be `read`, `write`, or `*`.

Type: `String`  
Required: `true`

#### `schema`

The GraphQLInputObjectType that represents an OperationOutcome error.

Type: `GraphQLInputObjectType`  
Required: `true`

### Resolver

The second argument is the resolver function you want to be invoked after this invariant checker checks the
user scopes against the allowed scopes for the action being performed.

Type: `Function`  
Required: `true`
