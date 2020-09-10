# FHIR-Query-Builder-Mongo
> Utility for building Mongo DB queries based on incoming requests.

## Install
```shell
yarn add @asymmetrik/fhir-qb-mongo
```

## Usage
This module is meant to be imported and used by the fhir-qb. Included are implementations of the following methods:
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
These are used by the fhir-qb to build a query that will work in the mongo aggregation pipeline.
