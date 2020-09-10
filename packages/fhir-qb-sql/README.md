# FHIR-Query-Builder-SQL
> Utility for building SQL queries based on incoming requests.

## Install
```shell
yarn add @asymmetrik/fhir-qb-sql
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
These are used by the fhir-qb to build a query that will work in the sql aggregation pipeline.
