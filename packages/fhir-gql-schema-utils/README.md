# FHIR GraphQL Schema Utilities
> Suite of FHIR related utilities for GraphQL schemas.


## Install

```shell
yarn add @asymmetrik/fhir-gql-schema-utils
```

## Usage

### extendSchema

extendSchema is a simple utility that allows you to merge multiple objects or
GraphQLObjectType's into a single set of fields. Essentially allowing you to
extend other schemas more easily.

```javascript
const {
  extendSchema,
} = require(' @asymmetrik/fhir-gql-schema-utils');

// Create a schema and merge in other schemas or JSON objects
// to include fields in a schema
let FooSchema = new GraphQLObjectType({
  name: 'FooSchema',
  fields: () => extendSchema(BaseSchema, AnotherSchema, {
    fooThings: {
      type: GraphQLString,
      description: 'Things about Foo'
    }
  }) 
});

// At this point, FooSchema will now have all the fields that BaseSchema
// and AnotherSchema have.
```

See [fhir-gql-schema-utils tests](https://github.com/Asymmetrik/phx-tools/blob/master/packages/fhir-gql-schema-utils/index.test.js) for more usage examples.

## Arguments

`@asymmetrik/fhir-gql-schema-utils` currently only contains the one utility. We will be adding more over time but for now you can only use `extendSchema`.

### extendSchema

`extendSchema` accepts a comma separated list of Objects and/or GraphQLSchemas. You can add as many or as few as you like. The default is to return an empty object. The only fields copied over right now are `type`, `description`, and `resolve`.

Type: `Object|GraphQLSchema`  
Required: `false`  
