# FHIR-QB

> Utility for standard rest API's to build search queries from incoming requests.

## Install

```shell
yarn add @bluehalo/fhir-qb
```

## Arguments

`@bluehalo/fhir-qb` exports a single class called QueryBuilder. The QueryBuilder constructor takes 4 arguments:

#### `packageName`

Query builder implementation package to be required. Default: `@bluehalo/fhir-qb-mongo`

#### `globalParameterDefinitions`

Parameter definitions for global parameters that apply to all resources. Defined by the fhir 'resource' resource
parameters. Default: `{}`

#### `pageParam`

Query parameter used to indicate which page of results is being requested. Default: `page`

#### `resultsPerPage`

How many results should be returned per page. Default: `10`

#### `implementationParameters`

Object to be passed through to the DB-specific implementation with whatever information from the server the implementation
may need. Default: `{}`

See [DB Specific Implementations](#db-specific-implementations) below.

#### `columnIdentifierStrategy`

Defaults to determining the column/path to the variable through it's xpath within its parameter definition. The string "parameter" can be passed to make it so that the
raw parameter name is used as the lookup column.

## Usage

The QueryBuilder class has a method called `buildSearchQuery` which takes two arguments. It takes an Express request object and an object containing argument definitions.
The allowed arguments are generated per resource and have the following properties:

#### `type`

Data type we expect the parameter to be in. We will try to coerce the value into these types to an extent. See [Valid Types](#valid-types) below.

#### `fhirtype`

Data type we expect the parameter to be in of the types listed in the FHIR specification. Currently being used to specify what type of token token parameters are.

#### `xpath`

Path to the parameter within the resource

#### `definition`

Link to the full parameter structure definition on the hl7 website

#### `description`

Description of the parameter/argument

The `buildSearchQuery` method returns a search query for the configured db implementation that can be
passed of to the database service and executed.

### DB Specific Implementations

The FHIR-QB relies on a database specific implementation to enable it to properly construct queries for the chosen database.
An implementation must include the following methods:

```
	assembleSearchQuery,
	buildAndQuery,
	buildComparatorQuery,
	buildContainsQuery,
	buildEndsWithQuery,
	buildEqualToQuery,
	buildExistsQuery,
	buildOrQuery,
	buildInRangeQuery,
	buildStartsWithQuery,
```

### Valid Types

Allowed types are currently `number`, `date`, `uri` `reference`, `string`, `token`, `quantity` and `boolean`.
