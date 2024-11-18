const scopeInvariant = require('./index.js');
const {
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = require('graphql');

// Mock contexts for the invariant function
let context = {
  DEVELOPMENT: {
    req: {
      baseUrl: '/3_0_1/$graphiql',
    },
  },
  SCOPES: {
    req: {
      user: {
        scope: 'user/Patient.read',
      },
    },
  },
  NO_SCOPES: {
    req: {
      user: {
        scope: '',
      },
    },
  },
};

// Mock schemas for the invariant functions options
let Issue = new GraphQLInputObjectType({
  name: 'Issue',
  fields: () => ({
    code: {
      type: GraphQLString,
    },
    severity: {
      type: GraphQLString,
    },
    diagnostics: {
      type: GraphQLString,
    },
  }),
});

let OperationOutcome = new GraphQLInputObjectType({
  name: 'OperationOutcome',
  fields: () => ({
    resourceType: {
      type: GraphQLString,
    },
    issue: {
      type: new GraphQLList(Issue),
    },
  }),
});

let BadSchema = new GraphQLObjectType({
  name: 'NonInputOperationOutcome',
  fields: () => ({
    resourceType: {
      type: GraphQLString,
    },
  }),
});

let originalEnv;
describe('GraphQL Scope Checker Test', () => {
  beforeAll(() => {
    originalEnv = process.env;
  });

  beforeEach(() => {
    process.env = Object.assign({}, originalEnv);
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  test('should return an error if the configuration is invalid', () => {
    let noConfig = scopeInvariant();

    let incorrectSchemaConfig = scopeInvariant(
      {
        action: 'read',
        name: 'Patient',
        schema: BadSchema,
      },
      function ResolverNoOp() {},
    );

    let noResolverConfig = scopeInvariant({
      action: 'read',
      name: 'Patient',
      schema: OperationOutcome,
    });

    let noScopeResolver = scopeInvariant(
      {
        action: 'MadeUpAction',
        name: 'Patient',
        schema: OperationOutcome,
      },
      function ResolverNoOp() {},
    );

    let expected = 'Invalid schema, schema must be an input type schema.';
    expect(noConfig.message).toEqual(expected);
    expect(noConfig.path[0]).toEqual('sof-graphql-invariant');

    expect(incorrectSchemaConfig.message).toEqual(expected);
    expect(incorrectSchemaConfig.path[0]).toEqual('sof-graphql-invariant');

    expected = 'Invalid resolver, resolver argument must be a function.';
    let resource = noResolverConfig.extensions.resource;
    expect(noResolverConfig.message).toEqual(expected);
    expect(noResolverConfig.path[0]).toEqual('sof-graphql-invariant');
    expect(resource.resourceType).toEqual('OperationOutcome');
    expect(resource.issue[0].code).toEqual('exception');
    expect(resource.issue[0].severity).toEqual('error');
    expect(resource.issue[0].diagnostics).toEqual(expected);

    // This function will return a resolver with successgul setup
    // let's run it and then make sure sof-scope-checker errors are propogating
    let results = noScopeResolver();
    expected = 'Invalid action. This parameter should be (read | write | *).';
    resource = results.extensions.resource;
    expect(results.message).toEqual(expected);
    expect(results.path[0]).toEqual('sof-graphql-invariant');
    expect(resource.resourceType).toEqual('OperationOutcome');
    expect(resource.issue[0].code).toEqual('exception');
    expect(resource.issue[0].severity).toEqual('error');
    expect(resource.issue[0].diagnostics).toEqual(expected);
  });

  test('should not check scopes if auth is not enabled', () => {
    let expected = 'Data';
    let resolver = scopeInvariant(
      {
        action: 'invalid',
        name: 'Patient',
        schema: OperationOutcome,
      },
      () => expected,
    );

    expect(typeof resolver).toEqual('function');
    // Define our environment variable
    process.env.SOF_AUTHENTICATION = 'false';
    // If we invoke the result with bad scopes, instead of an error, we should
    // get results because we are disabling auth
    let results = resolver(null, null, null, null);
    expect(results).toBe(expected);
  });

  test('should not check scopes if disabled for Graphiql', () => {
    let expected = 'Data';
    let resolver = scopeInvariant(
      {
        action: 'invalid',
        name: 'Patient',
        schema: OperationOutcome,
      },
      () => expected,
    );

    expect(typeof resolver).toEqual('function');
    // Define our environment variable
    process.env.HAS_GRAPHIQL = 'true';

    // If we invoke the result with bad scopes, instead of an error, we should
    // get results because we are disabling auth
    let results = resolver(null, null, context.DEVELOPMENT, null);
    expect(results).toBe(expected);
  });

  test('should return an error if the user does not have valid scopes', () => {
    let resolver = scopeInvariant(
      {
        action: 'read',
        name: 'Patient',
        schema: OperationOutcome,
      },
      () => {},
    );

    expect(typeof resolver).toEqual('function');

    // If we invoke the result with bad scopes, instead of an error, we should
    // get results because we are disabling auth
    let results = resolver(null, null, context.NO_SCOPES, null);
    let expected = 'None of the provided scopes matched an allowed scope';
    expect(results.message).toContain(expected);
    expect(results.message).toContain('UserScopes: .');
    expect(results.message).toContain('Attempted read on Patient.');
  });

  test('should invoke the original resolver if permissions are valid', () => {
    let expected = 'Data';
    let resolver = scopeInvariant(
      {
        action: 'read',
        name: 'Patient',
        schema: OperationOutcome,
      },
      () => expected,
    );

    expect(typeof resolver).toEqual('function');

    // If we invoke the result with bad scopes, instead of an error, we should
    // get results because we are disabling auth
    let results = resolver(null, null, context.SCOPES, null);
    expect(results).toBe(expected);
  });
});
