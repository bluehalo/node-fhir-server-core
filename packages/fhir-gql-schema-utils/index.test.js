const { extendSchema } = require('./index.js');

const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

describe('GraphQL Schema Utils', () => {
	describe('extendSchema', () => {
		test('should return an empty object by default', () => {
			let schema = extendSchema();
			expect(Object.keys(schema)).toHaveLength(0);
		});

		test('should merge fields from two objects', () => {
			let SchemaA = { city: { type: GraphQLString, description: 'City' } };
			let SchemaB = { state: { type: GraphQLString, description: 'State' } };
			let schema = extendSchema(SchemaA, SchemaB);

			expect(schema.city).toBeDefined();
			expect(schema.state).toBeDefined();
			expect(schema.city.description).toEqual('City');
			expect(schema.state.description).toEqual('State');
		});

		test('should merge fields from a GraphQLObject and JSON', () => {
			// Schema that will extend the Location Schema
			let ApartmentSchema = {
				unit: {
					type: GraphQLString,
					description: 'Apartment unit number',
					badProperty: 'muah ha ha ha',
				},
			};
			// Sample GraphQL Object Type
			let LocationSchema = new GraphQLObjectType({
				name: 'Location',
				description: 'Basic Location Information',
				fields: {
					city: {
						type: GraphQLString,
						description: 'City',
						resolve: function() {
							return 'Crystal Cove';
						},
					},
					state: {
						type: GraphQLString,
						description: 'State',
					},
				},
			});

			let schema = extendSchema(LocationSchema, ApartmentSchema);

			expect(schema.city).toBeDefined();
			expect(schema.unit).toBeDefined();
			expect(schema.state).toBeDefined();

			// Invalid GraphQL Arguments should be dropped, so badProperty should be undefined
			expect(schema.unit.badProperty).toBeUndefined();

			// Check the resolver was left in tact
			expect(schema.city.resolve()).toEqual('Crystal Cove');
		});

		test('should handle merging of multiple arguments', () => {
			let SchemaA = { zipcode: { type: GraphQLString, description: 'Zip' } };
			let SchemaB = { city: { type: GraphQLString, description: 'City' } };
			let SchemaC = { state: { type: GraphQLString, description: 'State' } };
			let schema = extendSchema(SchemaA, SchemaB, SchemaC);

			expect(schema.zipcode).toBeDefined();
			expect(schema.city).toBeDefined();
			expect(schema.state).toBeDefined();
			expect(schema.city.description).toEqual('City');
			expect(schema.state.description).toEqual('State');
			expect(schema.zipcode.description).toEqual('Zip');
		});

		test('should override props in the order of args given', () => {
			let SchemaA = { city: { type: GraphQLString, description: 'City' } };
			let SchemaB = {
				city: { type: GraphQLInt, description: 'Int representation of a city' },
				state: { type: GraphQLString, description: 'State' },
			};
			let schema = extendSchema(SchemaA, SchemaB);

			expect(schema.city).toBeDefined();
			expect(schema.state).toBeDefined();
			expect(schema.state.description).toEqual('State');
			// Check for the overridden properties
			expect(schema.city.type).toEqual(GraphQLInt);
			expect(schema.city.description).toEqual('Int representation of a city');
		});
	});
});
