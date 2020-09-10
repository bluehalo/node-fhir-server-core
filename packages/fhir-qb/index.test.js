const QueryBuilder = require('./index');
const moment = require('moment');

describe('Mongo Tests', () => {
	beforeAll(() => {
		// Do this for tests only
		moment.suppressDeprecationWarnings = true;
	});
	const globalParameterDefinitions = {
		_content: {
			type: 'string',
			fhirtype: 'string',
			xpath: '',
			definition: 'http://hl7.org/fhir/SearchParameter/Resource-content',
			description: 'Search on the entire content of the resource',
			modifier: 'missing,exact,contains',
		},
		_id: {
			type: 'token',
			fhirtype: 'token',
			xpath: 'Resource.id',
			definition: 'http://hl7.org/fhir/SearchParameter/Resource-id',
			description: 'Logical id of this artifact',
			modifier: 'missing,text,not,in,not-in,below,above,ofType',
		},
		_lastUpdated: {
			type: 'date',
			fhirtype: 'date',
			xpath: 'Resource.meta.lastUpdated',
			definition: 'http://hl7.org/fhir/SearchParameter/Resource-lastUpdated',
			description: 'When the resource version last changed',
			modifier: 'missing',
		},
		_profile: {
			type: 'reference',
			fhirtype: 'reference',
			xpath: 'Resource.meta.profile',
			definition: 'http://hl7.org/fhir/SearchParameter/Resource-profile',
			description: 'Profiles this resource claims to conform to',
			modifier: 'missing,type,identifier',
		},
		_query: {
			type: 'token',
			fhirtype: 'token',
			xpath: '',
			definition: 'http://hl7.org/fhir/SearchParameter/Resource-query',
			description:
				'A custom search profile that describes a specific defined query operation',
			modifier: 'missing,text,not,in,not-in,below,above,ofType',
		},
		_security: {
			type: 'token',
			fhirtype: 'token',
			xpath: 'Resource.meta.security',
			definition: 'http://hl7.org/fhir/SearchParameter/Resource-security',
			description: 'Security Labels applied to this resource',
			modifier: 'missing,text,not,in,not-in,below,above,ofType',
		},
		_source: {
			type: 'uri',
			fhirtype: 'uri',
			xpath: 'Resource.meta.source',
			definition: 'http://hl7.org/fhir/SearchParameter/Resource-source',
			description: 'Identifies where the resource comes from',
			modifier: 'missing,below,above',
		},
		_tag: {
			type: 'token',
			fhirtype: 'token',
			xpath: 'Resource.meta.tag',
			definition: 'http://hl7.org/fhir/SearchParameter/Resource-tag',
			description: 'Tags applied to this resource',
			modifier: 'missing,text,not,in,not-in,below,above,ofType',
		},
	};
	const qb = new QueryBuilder({
		globalParameterDefinitions,
		packageName: '../fhir-qb-mongo/index.js',
		implementationParameters: { archivedParamPath: 'meta._isArchived' },
	});
	describe('Build Date Query Tests', () => {
		describe('eq Modifier Tests', () => {
			// TODO - Should I throw an error in this situation? Providing ms is not allowed according to the spec.
			test("Should return  the ISO String if the given a full ISO String 'yyyy-mm-ddThh:mm:ss.###Z'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eq2018-10-31T17:49:29.000Z',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: { $and: [{ $or: [{ foo: '2018-10-31T17:49:29.000Z' }] }] },
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return the ISO String if given a partial ISO string of format 'yyyy-mm-ddThh:mm:ss'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eq2018-10-31T17:49:29',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [
								{
									$or: [
										{
											foo: {
												$gte: '2018-10-31T17:49:29.000Z',
												$lte: '2018-10-31T17:49:29.999Z',
											},
										},
									],
								},
							],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return a 1 minute range if given a partial ISO string of format 'yyyy-mm-ddThh:mm'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eq2018-10-31T17:49',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [
								{
									$or: [
										{
											foo: {
												$gte: '2018-10-31T17:49:00.000Z',
												$lte: '2018-10-31T17:49:59.999Z',
											},
										},
									],
								},
							],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			// TODO - Should I throw an error in this situation? Hours without minutes is not allowed.
			test("Should return a 1 hour range if given a partial ISO string of format 'yyyy-mm-ddThh'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eq2018-10-31T17',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [
								{
									$or: [
										{
											foo: {
												$gte: '2018-10-31T17:00:00.000Z',
												$lte: '2018-10-31T17:59:59.999Z',
											},
										},
									],
								},
							],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return a 1 day range if given a partial ISO string of format 'yyyy-mm-dd'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eq2018-10-31',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [
								{
									$or: [
										{
											foo: {
												$gte: '2018-10-31T00:00:00.000Z',
												$lte: '2018-10-31T23:59:59.999Z',
											},
										},
									],
								},
							],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return a 1 month range if given a partial ISO string of format 'yyyy-mm'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eq2018-10',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [
								{
									$or: [
										{
											foo: {
												$gte: '2018-10-01T00:00:00.000Z',
												$lte: '2018-10-31T23:59:59.999Z',
											},
										},
									],
								},
							],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return a 1 year range if given a partial ISO string of format 'yyyy'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eq2018',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [
								{
									$or: [
										{
											foo: {
												$gte: '2018-01-01T00:00:00.000Z',
												$lte: '2018-12-31T23:59:59.999Z',
											},
										},
									],
								},
							],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should implicityly use 'eq' prefix if one is not supplied in the request", () => {
				const req = {
					method: 'GET',
					query: {
						foo: '2018',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [
								{
									$or: [
										{
											foo: {
												$gte: '2018-01-01T00:00:00.000Z',
												$lte: '2018-12-31T23:59:59.999Z',
											},
										},
									],
								},
							],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('ne Modifier Tests', () => {
			// TODO - Should I throw an error in this situation? Providing ms is not allowed.
			test("Should return a $ne of the given full ISO String 'yyyy-mm-ddThh:mm:ss.###Z'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ne2018-10-31T17:49:29.000Z',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $ne: '2018-10-31T17:49:29.000Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return a $ne of the given partial ISO String of format 'yyyy-mm-ddThh:mm:ss'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ne2018-10-31T17:49:29',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [
								{
									$or: [
										{
											$or: [
												{ foo: { $lt: '2018-10-31T17:49:29.000Z' } },
												{ foo: { $gt: '2018-10-31T17:49:29.999Z' } },
											],
										},
									],
								},
							],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return an $or that fully excludes the specified minute in given partial ISO String of format 'yyyy-mm-ddThh:mm'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ne2018-10-31T17:49',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};

				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [
								{
									$or: [
										{
											$or: [
												{ foo: { $lt: '2018-10-31T17:49:00.000Z' } },
												{ foo: { $gt: '2018-10-31T17:49:59.999Z' } },
											],
										},
									],
								},
							],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			// TODO - Should I throw an error in this situation? Hours without minutes is not allowed.
			test("Should return an $or that fully excludes the specified hour in given partial ISO String of format 'yyyy-mm-ddThh'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ne2018-10-31T17',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [
								{
									$or: [
										{
											$or: [
												{ foo: { $lt: '2018-10-31T17:00:00.000Z' } },
												{ foo: { $gt: '2018-10-31T17:59:59.999Z' } },
											],
										},
									],
								},
							],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return an $or that fully excludes the specified day in given partial ISO String of format 'yyyy-mm-dd'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ne2018-10-31',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [
								{
									$or: [
										{
											$or: [
												{ foo: { $lt: '2018-10-31T00:00:00.000Z' } },
												{ foo: { $gt: '2018-10-31T23:59:59.999Z' } },
											],
										},
									],
								},
							],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return an $or that fully excludes the specified month in given partial ISO String of format 'yyyy-mm'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ne2018-10',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [
								{
									$or: [
										{
											$or: [
												{ foo: { $lt: '2018-10-01T00:00:00.000Z' } },
												{ foo: { $gt: '2018-10-31T23:59:59.999Z' } },
											],
										},
									],
								},
							],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return an $or that fully excludes the specified year in given partial ISO String of format 'yyyy'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ne2018',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [
								{
									$or: [
										{
											$or: [
												{ foo: { $lt: '2018-01-01T00:00:00.000Z' } },
												{ foo: { $gt: '2018-12-31T23:59:59.999Z' } },
											],
										},
									],
								},
							],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});

		describe('gt Modifier Tests', () => {
			// TODO - Should I throw an error in this situation? Providing ms is not allowed.
			test("Should return $gt ISO String if given a full ISO String 'yyyy-mm-ddThh:mm:ss.###Z'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'gt2018-10-31T17:49:29.000Z',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $gt: '2018-10-31T17:49:29.000Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $gt ISO String if given a partial ISO String of format 'yyyy-mm-ddThh:mm:ss'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'gt2018-10-31T17:49:29',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $gt: '2018-10-31T17:49:29.999Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $gt end of minute if given a partial ISO String 'yyyy-mm-ddThh:mm'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'gt2018-10-31T17:49',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $gt: '2018-10-31T17:49:59.999Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			// TODO - Should I throw an error in this situation? Hours without minutes is not allowed.
			test("Should return $gt end of hour if given a partial ISO String 'yyyy-mm-ddThh'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'gt2018-10-31T17',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $gt: '2018-10-31T17:59:59.999Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $gt end of day if given a partial ISO String 'yyyy-mm-dd'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'gt2018-10-31',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $gt: '2018-10-31T23:59:59.999Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $gt end of month if given a partial ISO String 'yyyy-mm'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'gt2018-10',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $gt: '2018-10-31T23:59:59.999Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $gt end of year if given a partial ISO String 'yyyy'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'gt2018',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $gt: '2018-12-31T23:59:59.999Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('ge Modifier Tests', () => {
			// TODO - Should I throw an error in this situation? Providing ms is not allowed.
			test("Should return $gte ISO String if given a full ISO String 'yyyy-mm-ddThh:mm:ss.###Z'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ge2018-10-31T17:49:29.000Z',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $gte: '2018-10-31T17:49:29.000Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $gte ISO String if given a partial ISO String of format 'yyyy-mm-ddThh:mm:ss'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ge2018-10-31T17:49:29',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $gte: '2018-10-31T17:49:29.000Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $gte start of minute if given a partial ISO String 'yyyy-mm-ddThh:mm'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ge2018-10-31T17:49',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $gte: '2018-10-31T17:49:00.000Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			// TODO - Should I throw an error in this situation? Hours without minutes is not allowed.
			test("Should return $gte start of hour if given a partial ISO String 'yyyy-mm-ddThh'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ge2018-10-31T17',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $gte: '2018-10-31T17:00:00.000Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $gte start of day if given a partial ISO String 'yyyy-mm-dd'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ge2018-10-31',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $gte: '2018-10-31T00:00:00.000Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $gte start of month if given a partial ISO String 'yyyy-mm'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ge2018-10',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $gte: '2018-10-01T00:00:00.000Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $gte start of year if given a partial ISO String 'yyyy'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ge2018',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $gte: '2018-01-01T00:00:00.000Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('lt Modifier Tests', () => {
			// TODO - Note that the sanitizer should stop this situation from ever occurring, as providing milliseconds is not allowed.
			test("Should return $lt ISO String if given a full ISO String 'yyyy-mm-ddThh:mm:ss.###Z'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'lt2018-10-31T17:49:29.000Z',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $lt: '2018-10-31T17:49:29.000Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $lt ISO String if given a partial ISO String of format 'yyyy-mm-ddThh:mm:ss'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'lt2018-10-31T17:49:29',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $lt: '2018-10-31T17:49:29.000Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $lt start of minute if given a partial ISO String 'yyyy-mm-ddThh:mm'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'lt2018-10-31T17:49',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $lt: '2018-10-31T17:49:00.000Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			// TODO - Should I throw an error in this situation? Hours without minutes is not allowed.
			test("Should return $lt start of hour if given a partial ISO String 'yyyy-mm-ddThh'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'lt2018-10-31T17',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $lt: '2018-10-31T17:00:00.000Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $lt start of day if given a partial ISO String 'yyyy-mm-dd'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'lt2018-10-31',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $lt: '2018-10-31T00:00:00.000Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $lt start of month if given a partial ISO String 'yyyy-mm'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'lt2018-10',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $lt: '2018-10-01T00:00:00.000Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $lt start of year if given a partial ISO String 'yyyy'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'lt2018',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $lt: '2018-01-01T00:00:00.000Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('le Modifier Tests', () => {
			// TODO - Should I throw an error in this situation? Providing ms is not allowed.
			test("Should return $lte ISO String if given a full ISO String 'yyyy-mm-ddThh:mm:ss.###Z'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'le2018-10-31T17:49:29.000Z',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $lte: '2018-10-31T17:49:29.000Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $lte ISO String if given a partial ISO String of format 'yyyy-mm-ddThh:mm:ss'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'le2018-10-31T17:49:29',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $lte: '2018-10-31T17:49:29.000Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $lte start of minute if given a partial ISO String 'yyyy-mm-ddThh:mm'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'le2018-10-31T17:49',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $lte: '2018-10-31T17:49:00.000Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			// TODO - Should I throw an error in this situation? Hours without minutes is not allowed.
			test("Should return $lte start of hour if given a partial ISO String 'yyyy-mm-ddThh'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'le2018-10-31T17',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $lte: '2018-10-31T17:00:00.000Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $lte start of day if given a partial ISO String 'yyyy-mm-dd'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'le2018-10-31',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $lte: '2018-10-31T00:00:00.000Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $lte start of month if given a partial ISO String 'yyyy-mm'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'le2018-10',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $lte: '2018-10-01T00:00:00.000Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $lte start of year if given a partial ISO String 'yyyy'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'le2018',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $lte: '2018-01-01T00:00:00.000Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('sa Modifier Tests', () => {
			// TODO - Should I throw an error in this situation? Providing ms is not allowed.
			test("Should return $gt ISO String if given a full ISO String 'yyyy-mm-ddThh:mm:ss.###Z'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'sa2018-10-31T17:49:29.000Z',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $gt: '2018-10-31T17:49:29.000Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $gt ISO String if given a partial ISO String of format 'yyyy-mm-ddThh:mm:ss'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'sa2018-10-31T17:49:29',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $gt: '2018-10-31T17:49:29.999Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $gt end of minute if given a partial ISO String 'yyyy-mm-ddThh:mm'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'sa2018-10-31T17:49',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $gt: '2018-10-31T17:49:59.999Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			// TODO - Should I throw an error in this situation? Hours without minutes is not allowed.
			test("Should return $gt end of hour if given a partial ISO String 'yyyy-mm-ddThh'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'sa2018-10-31T17',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $gt: '2018-10-31T17:59:59.999Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $gt end of day if given a partial ISO String 'yyyy-mm-dd'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'sa2018-10-31',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $gt: '2018-10-31T23:59:59.999Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $gt end of month if given a partial ISO String 'yyyy-mm'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'sa2018-10',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $gt: '2018-10-31T23:59:59.999Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $gt end of year if given a partial ISO String 'yyyy'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'sa2018',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $gt: '2018-12-31T23:59:59.999Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('eb Modifier Tests', () => {
			// TODO - Should I throw an error in this situation? Providing ms is not allowed.
			test("Should return $lt ISO String if given a full ISO String 'yyyy-mm-ddThh:mm:ss.###Z'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eb2018-10-31T17:49:29.000Z',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $lt: '2018-10-31T17:49:29.000Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $lt ISO String if given a partial ISO String of format 'yyyy-mm-ddThh:mm:ss'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eb2018-10-31T17:49:29',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $lt: '2018-10-31T17:49:29.000Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $lt start of minute if given a partial ISO String 'yyyy-mm-ddThh:mm'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eb2018-10-31T17:49',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $lt: '2018-10-31T17:49:00.000Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			// TODO - Should I throw an error in this situation? Hours without minutes is not allowed.
			test("Should return $lt start of hour if given a partial ISO String 'yyyy-mm-ddThh'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eb2018-10-31T17',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $lt: '2018-10-31T17:00:00.000Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $lt start of day if given a partial ISO String 'yyyy-mm-dd'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eb2018-10-31',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $lt: '2018-10-31T00:00:00.000Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $lt start of month if given a partial ISO String 'yyyy-mm'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eb2018-10',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $lt: '2018-10-01T00:00:00.000Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $lt start of year if given a partial ISO String 'yyyy'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eb2018',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $lt: '2018-01-01T00:00:00.000Z' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('ap Modifier Tests', () => {
			// TODO - Should I throw an error in this situation? Providing ms is not allowed.
			test(
				'Should return range with upper lower bounds equal to the target date +/- 0.1 * the amount of time ' +
					"between now and the target date if given a full ISO String 'yyyy-mm-ddThh:mm:ss.###Z'",
				() => {
					const testDate = '2018-10-31T17:49:29.000Z';
					const req = {
						method: 'GET',
						query: {
							foo: 'ap' + testDate,
						},
					};
					const parameterDefinitions = {
						foo: { type: 'date', xpath: 'Resource.foo' },
					};
					const targetDate = moment.utc(testDate);
					const rangePadding = 0.1;
					const currentDateTime = moment.utc();
					let difference =
						moment.duration(currentDateTime.diff(targetDate)).asSeconds() *
						rangePadding;
					let expectedLowerBound = moment(targetDate).subtract(
						difference,
						'seconds',
					);
					let expectedUpperBound = moment(targetDate).add(
						difference,
						'seconds',
					);

					const includeArchived = false;
					let { query, errors } = qb.buildSearchQuery({
						req,
						parameterDefinitions,
						includeArchived,
					});
					let observedLowerBound = moment(
						query[0].$match.$and[0].$or[0].foo.$gte,
					);
					let observedUpperBound = moment(
						query[0].$match.$and[0].$or[0].foo.$lte,
					);

					let lowerBoundDifference = moment
						.duration(observedLowerBound.diff(expectedLowerBound))
						.asSeconds();
					let upperBoundDifference = moment
						.duration(observedUpperBound.diff(expectedUpperBound))
						.asSeconds();

					// Fail if the observed upper or lower bounds are more than a hundredth of a second off the expected
					let correctLowerBound = Math.abs(lowerBoundDifference) <= 0.01;
					let correctUpperBound = Math.abs(upperBoundDifference) <= 0.01;
					expect(correctLowerBound).toBe(true);
					expect(correctUpperBound).toBe(true);
					expect(errors).toHaveLength(0);
				},
			);
			test(
				'Should return range with upper lower bounds equal to the target date +/- 0.1 * the amount of time ' +
					"between now and the target date if given a partial ISO String of format 'yyyy-mm-ddThh:mm:ss'",
				() => {
					const testDate = '2018-10-31T17:49:29';
					const req = {
						method: 'GET',
						query: {
							foo: 'ap' + testDate,
						},
					};
					const parameterDefinitions = {
						foo: { type: 'date', xpath: 'Resource.foo' },
					};
					const targetDate = moment.utc(testDate);
					const rangePadding = 0.1;
					const currentDateTime = moment.utc();
					let difference =
						moment.duration(currentDateTime.diff(targetDate)).asSeconds() *
						rangePadding;
					let expectedLowerBound = moment(targetDate).subtract(
						difference,
						'seconds',
					);
					let expectedUpperBound = moment(targetDate).add(
						difference,
						'seconds',
					);

					const includeArchived = false;
					let { query, errors } = qb.buildSearchQuery({
						req,
						parameterDefinitions,
						includeArchived,
					});
					let observedLowerBound = moment(
						query[0].$match.$and[0].$or[0].foo.$gte,
					);
					let observedUpperBound = moment(
						query[0].$match.$and[0].$or[0].foo.$lte,
					);

					let lowerBoundDifference = moment
						.duration(observedLowerBound.diff(expectedLowerBound))
						.asSeconds();
					let upperBoundDifference = moment
						.duration(observedUpperBound.diff(expectedUpperBound))
						.asSeconds();

					// Fail if the observed upper or lower bounds are more than a hundredth of a second off the expected
					let correctLowerBound = Math.abs(lowerBoundDifference) <= 0.01;
					let correctUpperBound = Math.abs(upperBoundDifference) <= 0.01;
					expect(correctLowerBound).toBe(true);
					expect(correctUpperBound).toBe(true);
					expect(errors).toHaveLength(0);
				},
			);
			test(
				'Should return range with upper lower bounds equal to the target date +/- 0.1 * the amount of time ' +
					"between now and the start of the specified minute if given a partial ISO String of format 'yyyy-mm-ddThh:mm'",
				() => {
					const testDate = '2018-10-31T17:49';
					const req = {
						method: 'GET',
						query: {
							foo: 'ap' + testDate,
						},
					};
					const parameterDefinitions = {
						foo: { type: 'date', xpath: 'Resource.foo' },
					};
					const targetDate = moment.utc(testDate);
					const rangePadding = 0.1;
					const currentDateTime = moment.utc();
					let difference =
						moment.duration(currentDateTime.diff(targetDate)).asSeconds() *
						rangePadding;
					let expectedLowerBound = moment(targetDate).subtract(
						difference,
						'seconds',
					);
					let expectedUpperBound = moment(targetDate).add(
						difference,
						'seconds',
					);

					const includeArchived = false;
					let { query, errors } = qb.buildSearchQuery({
						req,
						parameterDefinitions,
						includeArchived,
					});
					let observedLowerBound = moment(
						query[0].$match.$and[0].$or[0].foo.$gte,
					);
					let observedUpperBound = moment(
						query[0].$match.$and[0].$or[0].foo.$lte,
					);

					let lowerBoundDifference = moment
						.duration(observedLowerBound.diff(expectedLowerBound))
						.asSeconds();
					let upperBoundDifference = moment
						.duration(observedUpperBound.diff(expectedUpperBound))
						.asSeconds();

					// Fail if the observed upper or lower bounds are more than a hundredth of a second off the expected
					let correctLowerBound = Math.abs(lowerBoundDifference) <= 0.01;
					let correctUpperBound = Math.abs(upperBoundDifference) <= 0.01;
					expect(correctLowerBound).toBe(true);
					expect(correctUpperBound).toBe(true);
					expect(errors).toHaveLength(0);
				},
			);
			// TODO - Should I throw an error in this situation? Hours without minutes is not allowed.
			test(
				'Should return range with upper lower bounds equal to the target date +/- 0.1 * the amount of time ' +
					"between currentDateTimeOverride and the start of the specified hour if given a partial ISO String of format 'yyyy-mm-ddThh'",
				() => {
					const testDate = '2018-10-31T17';
					const req = {
						method: 'GET',
						query: {
							foo: 'ap' + testDate,
						},
					};
					const parameterDefinitions = {
						foo: { type: 'date', xpath: 'Resource.foo' },
					};
					const targetDate = moment.utc(testDate);
					const rangePadding = 0.1;
					const currentDateTime = moment.utc();
					let difference =
						moment.duration(currentDateTime.diff(targetDate)).asSeconds() *
						rangePadding;
					let expectedLowerBound = moment(targetDate).subtract(
						difference,
						'seconds',
					);
					let expectedUpperBound = moment(targetDate).add(
						difference,
						'seconds',
					);

					const includeArchived = false;
					let { query, errors } = qb.buildSearchQuery({
						req,
						parameterDefinitions,
						includeArchived,
					});
					let observedLowerBound = moment(
						query[0].$match.$and[0].$or[0].foo.$gte,
					);
					let observedUpperBound = moment(
						query[0].$match.$and[0].$or[0].foo.$lte,
					);

					let lowerBoundDifference = moment
						.duration(observedLowerBound.diff(expectedLowerBound))
						.asSeconds();
					let upperBoundDifference = moment
						.duration(observedUpperBound.diff(expectedUpperBound))
						.asSeconds();

					// Fail if the observed upper or lower bounds are more than a hundredth of a second off the expected
					let correctLowerBound = Math.abs(lowerBoundDifference) <= 0.01;
					let correctUpperBound = Math.abs(upperBoundDifference) <= 0.01;
					expect(correctLowerBound).toBe(true);
					expect(correctUpperBound).toBe(true);
					expect(errors).toHaveLength(0);
				},
			);
			test(
				'Should return range with upper lower bounds equal to the target date +/- 0.1 * the amount of time ' +
					"between currentDateTimeOverride and the start of the specified day if given a partial ISO String of format 'yyyy-mm-dd'",
				() => {
					const testDate = '2018-10-31';
					const req = {
						method: 'GET',
						query: {
							foo: 'ap' + testDate,
						},
					};
					const parameterDefinitions = {
						foo: { type: 'date', xpath: 'Resource.foo' },
					};
					const targetDate = moment.utc(testDate);
					const rangePadding = 0.1;
					const currentDateTime = moment.utc();
					let difference =
						moment.duration(currentDateTime.diff(targetDate)).asSeconds() *
						rangePadding;
					let expectedLowerBound = moment(targetDate).subtract(
						difference,
						'seconds',
					);
					let expectedUpperBound = moment(targetDate).add(
						difference,
						'seconds',
					);

					const includeArchived = false;
					let { query, errors } = qb.buildSearchQuery({
						req,
						parameterDefinitions,
						includeArchived,
					});
					let observedLowerBound = moment(
						query[0].$match.$and[0].$or[0].foo.$gte,
					);
					let observedUpperBound = moment(
						query[0].$match.$and[0].$or[0].foo.$lte,
					);

					let lowerBoundDifference = moment
						.duration(observedLowerBound.diff(expectedLowerBound))
						.asSeconds();
					let upperBoundDifference = moment
						.duration(observedUpperBound.diff(expectedUpperBound))
						.asSeconds();

					// Fail if the observed upper or lower bounds are more than a hundredth of a second off the expected
					let correctLowerBound = Math.abs(lowerBoundDifference) <= 0.01;
					let correctUpperBound = Math.abs(upperBoundDifference) <= 0.01;
					expect(correctLowerBound).toBe(true);
					expect(correctUpperBound).toBe(true);
					expect(errors).toHaveLength(0);
				},
			);
			test(
				'Should return range with upper lower bounds equal to the target date +/- 0.1 * the amount of time ' +
					"between currentDateTimeOverride and the start of the specified month if given a partial ISO String of format 'yyyy-mm'",
				() => {
					const testDate = '2018-10';
					const req = {
						method: 'GET',
						query: {
							foo: 'ap' + testDate,
						},
					};
					const parameterDefinitions = {
						foo: { type: 'date', xpath: 'Resource.foo' },
					};
					const targetDate = moment.utc(testDate);
					const rangePadding = 0.1;
					const currentDateTime = moment.utc();
					let difference =
						moment.duration(currentDateTime.diff(targetDate)).asSeconds() *
						rangePadding;
					let expectedLowerBound = moment(targetDate).subtract(
						difference,
						'seconds',
					);
					let expectedUpperBound = moment(targetDate).add(
						difference,
						'seconds',
					);

					const includeArchived = false;
					let { query, errors } = qb.buildSearchQuery({
						req,
						parameterDefinitions,
						includeArchived,
					});
					let observedLowerBound = moment(
						query[0].$match.$and[0].$or[0].foo.$gte,
					);
					let observedUpperBound = moment(
						query[0].$match.$and[0].$or[0].foo.$lte,
					);

					let lowerBoundDifference = moment
						.duration(observedLowerBound.diff(expectedLowerBound))
						.asSeconds();
					let upperBoundDifference = moment
						.duration(observedUpperBound.diff(expectedUpperBound))
						.asSeconds();

					// Fail if the observed upper or lower bounds are more than a hundredth of a second off the expected
					let correctLowerBound = Math.abs(lowerBoundDifference) <= 0.01;
					let correctUpperBound = Math.abs(upperBoundDifference) <= 0.01;
					expect(correctLowerBound).toBe(true);
					expect(correctUpperBound).toBe(true);
					expect(errors).toHaveLength(0);
				},
			);
			test(
				'Should return range with upper lower bounds equal to the target date +/- 0.1 * the amount of time ' +
					"between currentDateTime and the start of the specified year if given a partial ISO String of format 'yyyy'",
				() => {
					const testDate = '2018';
					const req = {
						method: 'GET',
						query: {
							foo: 'ap' + testDate,
						},
					};
					const parameterDefinitions = {
						foo: { type: 'date', xpath: 'Resource.foo' },
					};
					const targetDate = moment.utc(testDate);
					const rangePadding = 0.1;
					const currentDateTime = moment.utc();
					let difference =
						moment.duration(currentDateTime.diff(targetDate)).asSeconds() *
						rangePadding;
					let expectedLowerBound = moment(targetDate).subtract(
						difference,
						'seconds',
					);
					let expectedUpperBound = moment(targetDate).add(
						difference,
						'seconds',
					);

					const includeArchived = false;
					let { query, errors } = qb.buildSearchQuery({
						req,
						parameterDefinitions,
						includeArchived,
					});
					let observedLowerBound = moment(
						query[0].$match.$and[0].$or[0].foo.$gte,
					);
					let observedUpperBound = moment(
						query[0].$match.$and[0].$or[0].foo.$lte,
					);

					let lowerBoundDifference = moment
						.duration(observedLowerBound.diff(expectedLowerBound))
						.asSeconds();
					let upperBoundDifference = moment
						.duration(observedUpperBound.diff(expectedUpperBound))
						.asSeconds();

					// Fail if the observed upper or lower bounds are more than a hundredth of a second off the expected
					let correctLowerBound = Math.abs(lowerBoundDifference) <= 0.01;
					let correctUpperBound = Math.abs(upperBoundDifference) <= 0.01;
					expect(correctLowerBound).toBe(true);
					expect(correctUpperBound).toBe(true);
					expect(errors).toHaveLength(0);
				},
			);
		});
	});

	describe('Build Number Query Tests', () => {
		describe('eq Modifier Tests', () => {
			test('Should return range with upper lower bounds equal to +/- 0.5 given an integer', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eq100',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'number', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: { $and: [{ $or: [{ foo: { $gte: 99.5, $lte: 100.5 } }] }] },
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test(
				'Should return range with upper lower bounds equal to +/- 0.5 * the most significant digit given a number with' +
					'significant decimal places.',
				() => {
					const req = {
						method: 'GET',
						query: {
							foo: 'eq100.000',
						},
					};
					const parameterDefinitions = {
						foo: { type: 'number', xpath: 'Resource.foo' },
					};
					const includeArchived = false;
					let { errors, query } = qb.buildSearchQuery({
						req,
						parameterDefinitions,
						includeArchived,
					});
					const expectedResult = [
						{
							$match: {
								$and: [{ $or: [{ foo: { $gte: 99.9995, $lte: 100.0005 } }] }],
							},
						},
						{ $match: { 'meta._isArchived': false } },
						{
							$facet: {
								data: [{ $skip: 0 }, { $limit: 10 }],
								metadata: [
									{ $count: 'total' },
									{
										$addFields: {
											numberOfPages: { $ceil: { $divide: ['$total', 10] } },
										},
									},
									{ $addFields: { page: 1 } },
								],
							},
						},
					];
					expect(errors).toHaveLength(0);
					expect(query).toEqual(expectedResult);
				},
			);
			test("Should default to 'eq' prefix.", () => {
				const req = {
					method: 'GET',
					query: {
						foo: '100',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'number', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: { $and: [{ $or: [{ foo: { $gte: 99.5, $lte: 100.5 } }] }] },
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(query).toEqual(expectedResult);
			});
		});
		describe('ne Modifier Tests', () => {
			test('Should return $or that fully excludes range with upper lower bounds equal to +/- 0.5 given an integer', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ne100',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'number', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [
								{
									$or: [
										{ $or: [{ foo: { $lt: 99.5 } }, { foo: { $gt: 100.5 } }] },
									],
								},
							],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test(
				'Should return $or that fully excludes range with upper lower bounds equal to +/- 0.5 * the most significant ' +
					'digit given a number with significant decimal places.',
				() => {
					const req = {
						method: 'GET',
						query: {
							foo: 'ne100.000',
						},
					};
					const parameterDefinitions = {
						foo: { type: 'number', xpath: 'Resource.foo' },
					};
					const includeArchived = false;
					let { errors, query } = qb.buildSearchQuery({
						req,
						parameterDefinitions,
						includeArchived,
					});
					const expectedResult = [
						{
							$match: {
								$and: [
									{
										$or: [
											{
												$or: [
													{ foo: { $lt: 99.9995 } },
													{ foo: { $gt: 100.0005 } },
												],
											},
										],
									},
								],
							},
						},
						{ $match: { 'meta._isArchived': false } },
						{
							$facet: {
								data: [{ $skip: 0 }, { $limit: 10 }],
								metadata: [
									{ $count: 'total' },
									{
										$addFields: {
											numberOfPages: { $ceil: { $divide: ['$total', 10] } },
										},
									},
									{ $addFields: { page: 1 } },
								],
							},
						},
					];
					expect(errors).toHaveLength(0);
					expect(query).toEqual(expectedResult);
				},
			);
		});
		describe('lt, le, gt, ge Modifier Tests', () => {
			test('Should return $lt a given target value', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'lt100.0000001',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'number', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{ $match: { $and: [{ $or: [{ foo: { $lt: 100.0000001 } }] }] } },
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return $lte a given target value', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'le100.0000001',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'number', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{ $match: { $and: [{ $or: [{ foo: { $lte: 100.0000001 } }] }] } },
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return $gt a given target value', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'gt100.0000001',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'number', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{ $match: { $and: [{ $or: [{ foo: { $gt: 100.0000001 } }] }] } },
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return $gte a given target value', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ge100.0000001',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'number', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{ $match: { $and: [{ $or: [{ foo: { $gte: 100.0000001 } }] }] } },
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('ap Prefix Tests', () => {
			test('Should return range with upper lower bounds equal to +/- 0.1 * a given input', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ap-10',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'number', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{ $match: { $and: [{ $or: [{ foo: { $gte: -11, $lte: -9 } }] }] } },
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('Signed Number Tests', () => {
			test('Should return range with upper lower bounds equal to +/- 0.5 given a negative number', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eq-10',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'number', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: { $and: [{ $or: [{ foo: { $gte: -10.5, $lte: -9.5 } }] }] },
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return range with upper lower bounds equal to +/- 0.5 given a signed positive number', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eq+10',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'number', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{ $match: { $and: [{ $or: [{ foo: { $gte: 9.5, $lte: 10.5 } }] }] } },
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
	});

	describe('Build String Query Tests', () => {
		describe('No Modifier Tests', () => {
			test('Should return case and accent insensitive regex matching start of string for input target value', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'Evé',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'string', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $regex: '^Eve', $options: 'i' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('contains Modifier Tests', () => {
			test('Should return case and accent insensitive regex matching any part of string for input target value', () => {
				const req = {
					method: 'GET',
					query: {
						'foo:contains': 'Evê',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'string', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ foo: { $regex: 'Eve', $options: 'i' } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('exact Modifier Tests', () => {
			test('Should return case and accent sensitive regex exactly matching input target value', () => {
				const req = {
					method: 'GET',
					query: {
						'foo:exact': 'Evë',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'string', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{ $match: { $and: [{ $or: [{ foo: 'Evë' }] }] } },
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
	});

	describe('Build Quantity Query Tests', () => {
		describe('eq Modifier Tests', () => {
			test('Should return range with upper lower bounds equal to +/- 0.5 given an integer quantity of SI unit', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eq1||kg',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'quantity', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ 'foo.value': { $gte: 0.5, $lte: 1.5 } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return range with upper lower bounds equal to +/- 0.5 * the most significant digit of a given SI quantity', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eq1.00||kg',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'quantity', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ 'foo.value': { $gte: 0.995, $lte: 1.005 } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test(
				'Should return range with upper lower bounds equal to +/- 0.5 * the most significant digit of a given number ' +
					'converted to SI units',
				() => {
					const req = {
						method: 'GET',
						query: {
							foo: 'eq20.00||mg',
						},
					};
					const parameterDefinitions = {
						foo: { type: 'quantity', xpath: 'Resource.foo' },
					};
					const includeArchived = false;
					let { errors, query } = qb.buildSearchQuery({
						req,
						parameterDefinitions,
						includeArchived,
					});
					const expectedResult = [
						{
							$match: {
								$and: [
									{
										$or: [
											{ 'foo.value': { $gte: 0.000019995, $lte: 0.000020005 } },
										],
									},
								],
							},
						},
						{ $match: { 'meta._isArchived': false } },
						{
							$facet: {
								data: [{ $skip: 0 }, { $limit: 10 }],
								metadata: [
									{ $count: 'total' },
									{
										$addFields: {
											numberOfPages: { $ceil: { $divide: ['$total', 10] } },
										},
									},
									{ $addFields: { page: 1 } },
								],
							},
						},
					];
					expect(errors).toHaveLength(0);
					expect(query).toEqual(expectedResult);
				},
			);
		});
		describe('ne Modifier Tests', () => {
			test('Should return $or that fully excludes range with upper lower bounds equal to +/- 0.5 given an integer quantity of SI unit', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ne1||kg',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'quantity', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [
								{
									$or: [
										{
											$or: [
												{ 'foo.value': { $lt: 0.5 } },
												{ 'foo.value': { $gt: 1.5 } },
											],
										},
									],
								},
							],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test(
				'Should return $or that fully excludes range with upper lower bounds equal to +/- 0.5 * the most significant ' +
					'digit given a SI quantity with significant decimal places.',
				() => {
					const req = {
						method: 'GET',
						query: {
							foo: 'ne1.00||kg',
						},
					};
					const parameterDefinitions = {
						foo: { type: 'quantity', xpath: 'Resource.foo' },
					};
					const includeArchived = false;
					let { errors, query } = qb.buildSearchQuery({
						req,
						parameterDefinitions,
						includeArchived,
					});
					const expectedResult = [
						{
							$match: {
								$and: [
									{
										$or: [
											{
												$or: [
													{ 'foo.value': { $lt: 0.995 } },
													{ 'foo.value': { $gt: 1.005 } },
												],
											},
										],
									},
								],
							},
						},
						{ $match: { 'meta._isArchived': false } },
						{
							$facet: {
								data: [{ $skip: 0 }, { $limit: 10 }],
								metadata: [
									{ $count: 'total' },
									{
										$addFields: {
											numberOfPages: { $ceil: { $divide: ['$total', 10] } },
										},
									},
									{ $addFields: { page: 1 } },
								],
							},
						},
					];
					expect(errors).toHaveLength(0);
					expect(query).toEqual(expectedResult);
				},
			);
			test(
				'Should return $or that fully excludes range with upper lower bounds equal to +/- 0.5 * the most significant ' +
					'digit given a quantity converted to SI units.',
				() => {
					const req = {
						method: 'GET',
						query: {
							foo: 'ne20.00||mg',
						},
					};
					const parameterDefinitions = {
						foo: { type: 'quantity', xpath: 'Resource.foo' },
					};
					const includeArchived = false;
					let { errors, query } = qb.buildSearchQuery({
						req,
						parameterDefinitions,
						includeArchived,
					});
					const expectedResult = [
						{
							$match: {
								$and: [
									{
										$or: [
											{
												$or: [
													{ 'foo.value': { $lt: 0.000019995 } },
													{ 'foo.value': { $gt: 0.000020005 } },
												],
											},
										],
									},
								],
							},
						},
						{ $match: { 'meta._isArchived': false } },
						{
							$facet: {
								data: [{ $skip: 0 }, { $limit: 10 }],
								metadata: [
									{ $count: 'total' },
									{
										$addFields: {
											numberOfPages: { $ceil: { $divide: ['$total', 10] } },
										},
									},
									{ $addFields: { page: 1 } },
								],
							},
						},
					];
					expect(errors).toHaveLength(0);
					expect(query).toEqual(expectedResult);
				},
			);
		});
		describe('lt, le, gt, ge Modifier Tests', () => {
			test('Should return $lt a given target value in SI units', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'lt2.4||kg',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'quantity', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{ $match: { $and: [{ $or: [{ 'foo.value': { $lt: 2.4 } }] }] } },
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return $lt a given target value converted to SI units', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'lt2.4||mg',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'quantity', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: { $and: [{ $or: [{ 'foo.value': { $lt: 0.0000024 } }] }] },
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return $lte a given target value in SI units', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'le2.4||kg',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'quantity', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{ $match: { $and: [{ $or: [{ 'foo.value': { $lte: 2.4 } }] }] } },
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return $lte a given target value converted to SI units', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'le2.4||mg',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'quantity', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: { $and: [{ $or: [{ 'foo.value': { $lte: 0.0000024 } }] }] },
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return $gt a given target value in SI units', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'gt2.4||kg',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'quantity', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{ $match: { $and: [{ $or: [{ 'foo.value': { $gt: 2.4 } }] }] } },
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return $gt a given target value converted to SI units', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'gt2.4||mg',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'quantity', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: { $and: [{ $or: [{ 'foo.value': { $gt: 0.0000024 } }] }] },
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return $gte a given target value in SI units', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ge2.4||kg',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'quantity', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{ $match: { $and: [{ $or: [{ 'foo.value': { $gte: 2.4 } }] }] } },
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return $gte a given target value converted to SI units', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ge2.4||mg',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'quantity', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: { $and: [{ $or: [{ 'foo.value': { $gte: 0.0000024 } }] }] },
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('ap Prefix Tests', () => {
			test('Should return range with upper lower bounds equal to +/- 10% given an integer quantity of SI unit', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ap1||kg',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'quantity', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ 'foo.value': { $gte: 0.9, $lte: 1.1 } }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test(
				'Should return range with upper lower bounds equal to +/- 10% given a SI quantity with significant decimal ' +
					'places.',
				() => {
					const req = {
						method: 'GET',
						query: {
							foo: 'ap1.00||kg',
						},
					};
					const parameterDefinitions = {
						foo: { type: 'quantity', xpath: 'Resource.foo' },
					};
					const includeArchived = false;
					let { errors, query } = qb.buildSearchQuery({
						req,
						parameterDefinitions,
						includeArchived,
					});
					const expectedResult = [
						{
							$match: {
								$and: [{ $or: [{ 'foo.value': { $gte: 0.9, $lte: 1.1 } }] }],
							},
						},
						{ $match: { 'meta._isArchived': false } },
						{
							$facet: {
								data: [{ $skip: 0 }, { $limit: 10 }],
								metadata: [
									{ $count: 'total' },
									{
										$addFields: {
											numberOfPages: { $ceil: { $divide: ['$total', 10] } },
										},
									},
									{ $addFields: { page: 1 } },
								],
							},
						},
					];
					expect(errors).toHaveLength(0);
					expect(query).toEqual(expectedResult);
				},
			);
			test(
				'Should return range with upper lower bounds equal to +/- 10% * the most significant given a quantity' +
					' converted to SI units.',
				() => {
					const req = {
						method: 'GET',
						query: {
							foo: 'ap20.00||mg',
						},
					};
					const parameterDefinitions = {
						foo: { type: 'quantity', xpath: 'Resource.foo' },
					};
					const includeArchived = false;
					let { errors, query } = qb.buildSearchQuery({
						req,
						parameterDefinitions,
						includeArchived,
					});
					const expectedResult = [
						{
							$match: {
								$and: [
									{
										$or: [{ 'foo.value': { $gte: 0.000018, $lte: 0.000022 } }],
									},
								],
							},
						},
						{ $match: { 'meta._isArchived': false } },
						{
							$facet: {
								data: [{ $skip: 0 }, { $limit: 10 }],
								metadata: [
									{ $count: 'total' },
									{
										$addFields: {
											numberOfPages: { $ceil: { $divide: ['$total', 10] } },
										},
									},
									{ $addFields: { page: 1 } },
								],
							},
						},
					];
					expect(errors).toHaveLength(0);
					expect(query).toEqual(expectedResult);
				},
			);
		});
		describe('System Parameter Tests', () => {
			test(
				'Should return $and with range with upper lower bounds equal to +/- 0.5 given an integer quantity of SI unit AND ' +
					'the provided system',
				() => {
					const req = {
						method: 'GET',
						query: {
							foo: 'eq1|http://unitsofmeasure.org|kg',
						},
					};
					const parameterDefinitions = {
						foo: { type: 'quantity', xpath: 'Resource.foo' },
					};
					const includeArchived = false;
					let { errors, query } = qb.buildSearchQuery({
						req,
						parameterDefinitions,
						includeArchived,
					});
					const expectedResult = [
						{
							$match: {
								$and: [
									{
										$or: [
											{
												$and: [
													{ 'foo.value': { $gte: 0.5, $lte: 1.5 } },
													{ 'foo.system': 'http://unitsofmeasure.org' },
												],
											},
										],
									},
								],
							},
						},
						{ $match: { 'meta._isArchived': false } },
						{
							$facet: {
								data: [{ $skip: 0 }, { $limit: 10 }],
								metadata: [
									{ $count: 'total' },
									{
										$addFields: {
											numberOfPages: { $ceil: { $divide: ['$total', 10] } },
										},
									},
									{ $addFields: { page: 1 } },
								],
							},
						},
					];
					expect(errors).toHaveLength(0);
					expect(query).toEqual(expectedResult);
				},
			);
		});
	});

	describe('Build URI Query Tests', () => {
		describe('above Prefix Tests', () => {
			test('Should return regex query matching anything ending with the given input string', () => {
				const req = {
					method: 'GET',
					query: {
						'foo:above': 'endWithMe',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'uri', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [
								{ $or: [{ foo: { $regex: 'endWithMe$', $options: '' } }] },
							],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('below Prefix Tests', () => {
			test('Should return regex query matching anything starting with the given input string', () => {
				const req = {
					method: 'GET',
					query: {
						'foo:below': 'startWithMe',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'uri', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [
								{ $or: [{ foo: { $regex: '^startWithMe', $options: '' } }] },
							],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should implicitly use below suffix if value ends with trailing slash.', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'startWithMe/',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'uri', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [
								{ $or: [{ foo: { $regex: '^startWithMe/', $options: '' } }] },
							],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should throw an error if given a urn with a suffix', () => {
				const req = {
					method: 'GET',
					query: {
						'foo:above': 'urn:oid:1.2.3.4.5',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'uri', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				expect(errors).toHaveLength(1);
				expect(errors[0].message).toContain(
					"Search modifiers are not supported for parameter 'foo' as a URN of type uri",
				);
			});
		});
		describe('no Prefix Tests', () => {
			test('Should return regex query matching anything exactly matching given input string', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'equalMe',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'uri', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{ $match: { $and: [{ $or: [{ foo: 'equalMe' }] }] } },
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
	});

	describe('Build Missing Query Tests', () => {
		test('Should return $exists query for all records where the given field exists given a value of true', () => {
			const req = {
				method: 'GET',
				query: {
					'foo:missing': 'true',
				},
			};
			const parameterDefinitions = {
				foo: { type: 'string', xpath: 'Resource.foo' },
			};
			const includeArchived = false;
			let { errors, query } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			const expectedResult = [
				{ $match: { $and: [{ $or: [{ foo: { $exists: false } }] }] } },
				{ $match: { 'meta._isArchived': false } },
				{
					$facet: {
						data: [{ $skip: 0 }, { $limit: 10 }],
						metadata: [
							{ $count: 'total' },
							{
								$addFields: {
									numberOfPages: { $ceil: { $divide: ['$total', 10] } },
								},
							},
							{ $addFields: { page: 1 } },
						],
					},
				},
			];
			expect(errors).toHaveLength(0);
			expect(query).toEqual(expectedResult);
		});
		test('Should return $exists query for all records where the given field does not exist given a value of false', () => {
			const req = {
				method: 'GET',
				query: {
					'foo:missing': 'false',
				},
			};
			const parameterDefinitions = {
				foo: { type: 'string', xpath: 'Resource.foo' },
			};
			const includeArchived = false;
			let { errors, query } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			const expectedResult = [
				{ $match: { $and: [{ $or: [{ foo: { $exists: true } }] }] } },
				{ $match: { 'meta._isArchived': false } },
				{
					$facet: {
						data: [{ $skip: 0 }, { $limit: 10 }],
						metadata: [
							{ $count: 'total' },
							{
								$addFields: {
									numberOfPages: { $ceil: { $divide: ['$total', 10] } },
								},
							},
							{ $addFields: { page: 1 } },
						],
					},
				},
			];
			expect(errors).toHaveLength(0);
			expect(query).toEqual(expectedResult);
		});
	});

	describe('Build Reference Query Tests', () => {
		test('Should return a query with the [parameter].reference equal to the supplied value of format [type]/[id]', () => {
			const req = {
				method: 'GET',
				query: {
					foo: 'Patient/123',
				},
			};
			const parameterDefinitions = {
				foo: { type: 'reference', xpath: 'Resource.foo' },
			};
			const includeArchived = false;
			let { errors, query } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			const expectedResult = [
				{ $match: { $and: [{ $or: [{ 'foo.reference': 'Patient/123' }] }] } },
				{ $match: { 'meta._isArchived': false } },
				{
					$facet: {
						data: [{ $skip: 0 }, { $limit: 10 }],
						metadata: [
							{ $count: 'total' },
							{
								$addFields: {
									numberOfPages: { $ceil: { $divide: ['$total', 10] } },
								},
							},
							{ $addFields: { page: 1 } },
						],
					},
				},
			];
			expect(errors).toHaveLength(0);
			expect(query).toEqual(expectedResult);
		});
		test('Should return a query with the [parameter].reference equal to the supplied value of format http.*/[type]/[id]', () => {
			const req = {
				method: 'GET',
				query: {
					foo: 'http://example.fhir.org/foo/bar/Patient/123',
				},
			};
			const parameterDefinitions = {
				foo: { type: 'reference', xpath: 'Resource.foo' },
			};
			const includeArchived = false;
			let { errors, query } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			const expectedResult = [
				{ $match: { $and: [{ $or: [{ 'foo.reference': 'Patient/123' }] }] } },
				{ $match: { 'meta._isArchived': false } },
				{
					$facet: {
						data: [{ $skip: 0 }, { $limit: 10 }],
						metadata: [
							{ $count: 'total' },
							{
								$addFields: {
									numberOfPages: { $ceil: { $divide: ['$total', 10] } },
								},
							},
							{ $addFields: { page: 1 } },
						],
					},
				},
			];
			expect(errors).toHaveLength(0);
			expect(query).toEqual(expectedResult);
		});
	});

	describe('Build And/Or Query Tests', () => {
		test('Should return a query that matches foo AND bar', () => {
			const req = {
				method: 'GET',
				query: {
					foo: ['foo', 'bar'],
				},
			};
			const parameterDefinitions = {
				foo: { type: 'string', xpath: 'Resource.foo' },
			};
			const includeArchived = false;
			let { errors, query } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			const expectedResult = [
				{
					$match: {
						$and: [
							{ $or: [{ foo: { $options: 'i', $regex: '^foo' } }] },
							{ $or: [{ foo: { $options: 'i', $regex: '^bar' } }] },
						],
					},
				},
				{ $match: { 'meta._isArchived': false } },
				{
					$facet: {
						data: [{ $skip: 0 }, { $limit: 10 }],
						metadata: [
							{ $count: 'total' },
							{
								$addFields: {
									numberOfPages: { $ceil: { $divide: ['$total', 10] } },
								},
							},
							{ $addFields: { page: 1 } },
						],
					},
				},
			];
			expect(errors).toHaveLength(0);
			expect(query).toEqual(expectedResult);
		});
		test('Should return a query that matches foo AND (bar OR baz)', () => {
			const req = {
				method: 'GET',
				query: {
					foo: ['foo', 'bar,baz'],
				},
			};
			const parameterDefinitions = {
				foo: { type: 'string', xpath: 'Resource.foo' },
			};
			const includeArchived = false;
			let { errors, query } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			const expectedResult = [
				{
					$match: {
						$and: [
							{ $or: [{ foo: { $options: 'i', $regex: '^foo' } }] },
							{
								$or: [
									{ foo: { $options: 'i', $regex: '^bar' } },
									{ foo: { $options: 'i', $regex: '^baz' } },
								],
							},
						],
					},
				},
				{ $match: { 'meta._isArchived': false } },
				{
					$facet: {
						data: [{ $skip: 0 }, { $limit: 10 }],
						metadata: [
							{ $count: 'total' },
							{
								$addFields: {
									numberOfPages: { $ceil: { $divide: ['$total', 10] } },
								},
							},
							{ $addFields: { page: 1 } },
						],
					},
				},
			];
			expect(errors).toHaveLength(0);
			expect(query).toEqual(expectedResult);
		});
	});

	describe('Build Token Query Tests', () => {
		describe('Coding Token Tests', () => {
			test('Should return an and query with 1 equal to condition when given just a system', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar|',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'Coding', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: { $and: [{ $or: [{ $and: [{ 'foo.system': 'bar' }] }] }] },
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an and query with 1 equal to condition when given just a code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'Coding', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{ $match: { $and: [{ $or: [{ $and: [{ 'foo.code': 'bar' }] }] }] } },
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an and query with 1 equal to condition when given just a code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: '|bar',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'Coding', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{ $match: { $and: [{ $or: [{ $and: [{ 'foo.code': 'bar' }] }] }] } },
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an and query with 2 equal to conditions when given a system and code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar|baz',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'Coding', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [
								{
									$or: [
										{ $and: [{ 'foo.system': 'bar' }, { 'foo.code': 'baz' }] },
									],
								},
							],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('CodeableConcept Token Tests', () => {
			test('Should return an and query with 1 equal to condition when given just a system', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar|',
					},
				};
				const parameterDefinitions = {
					foo: {
						type: 'token',
						fhirtype: 'CodeableConcept',
						xpath: 'Resource.foo',
					},
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ $and: [{ 'foo.coding.system': 'bar' }] }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an and query with 1 equal to condition when given just a code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar',
					},
				};
				const parameterDefinitions = {
					foo: {
						type: 'token',
						fhirtype: 'CodeableConcept',
						xpath: 'Resource.foo',
					},
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ $and: [{ 'foo.coding.code': 'bar' }] }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an and query with 1 equal to condition when given just a code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: '|bar',
					},
				};
				const parameterDefinitions = {
					foo: {
						type: 'token',
						fhirtype: 'CodeableConcept',
						xpath: 'Resource.foo',
					},
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [{ $or: [{ $and: [{ 'foo.coding.code': 'bar' }] }] }],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an and query with 2 equal to conditions when given a system and code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar|baz',
					},
				};
				const parameterDefinitions = {
					foo: {
						type: 'token',
						fhirtype: 'CodeableConcept',
						xpath: 'Resource.foo',
					},
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [
								{
									$or: [
										{
											$and: [
												{ 'foo.coding.system': 'bar' },
												{ 'foo.coding.code': 'baz' },
											],
										},
									],
								},
							],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('Identifier Token Tests', () => {
			test('Should return an and query with 1 equal to condition when given just a system', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar|',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'Identifier', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: { $and: [{ $or: [{ $and: [{ 'foo.system': 'bar' }] }] }] },
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an and query with 1 equal to condition when given just a code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'Identifier', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{ $match: { $and: [{ $or: [{ $and: [{ 'foo.value': 'bar' }] }] }] } },
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an and query with 1 equal to condition when given just a code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: '|bar',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'Identifier', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{ $match: { $and: [{ $or: [{ $and: [{ 'foo.value': 'bar' }] }] }] } },
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an and query with 2 equal to conditions when given a system and code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar|baz',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'Identifier', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [
								{
									$or: [
										{ $and: [{ 'foo.system': 'bar' }, { 'foo.value': 'baz' }] },
									],
								},
							],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('ContactPoint Token Tests', () => {
			test('Should return an or query with an equal to condition for each of the ContactPoint fields given a code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar',
					},
				};
				const parameterDefinitions = {
					foo: {
						type: 'token',
						fhirtype: 'ContactPoint',
						xpath: 'Resource.foo',
					},
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [
								{
									$or: [
										{
											$and: [{ 'foo.value': 'bar' }],
										},
									],
								},
							],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an or query with an equal to condition for each of the ContactPoint fields given a code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: '|bar',
					},
				};
				const parameterDefinitions = {
					foo: {
						type: 'token',
						fhirtype: 'ContactPoint',
						xpath: 'Resource.foo',
					},
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [
								{
									$or: [
										{
											$and: [{ 'foo.value': 'bar' }],
										},
									],
								},
							],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an or query with an equal to condition for each of the ContactPoint fields given a code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar|baz',
					},
				};
				const parameterDefinitions = {
					foo: {
						type: 'token',
						fhirtype: 'ContactPoint',
						xpath: 'Resource.foo',
					},
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{
						$match: {
							$and: [
								{
									$or: [
										{
											$and: [{ 'foo.system': 'bar' }, { 'foo.value': 'baz' }],
										},
									],
								},
							],
						},
					},
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('code Token Tests', () => {
			test('Should return an equal to query given a code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'code', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{ $match: { $and: [{ $or: [{ foo: 'bar' }] }] } },
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an equal to query given a code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: '|bar',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'code', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{ $match: { $and: [{ $or: [{ foo: 'bar' }] }] } },
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an equal to query given a system and code (ignore the system)', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar|baz',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'code', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{ $match: { $and: [{ $or: [{ foo: 'baz' }] }] } },
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('boolean Token Tests', () => {
			test('Should throw an error if given just a system and no code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar|',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'boolean', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				expect(errors).toHaveLength(1);
				expect(errors[0].message).toContain(
					'Type mismatch, expected boolean for parameter foo',
				);
			});
			test('Should throw an error if given just a non boolean code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'boolean', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				expect(errors).toHaveLength(1);
				expect(errors[0].message).toContain(
					'Type mismatch, expected boolean for parameter foo',
				);
			});
			test('Should return an equal to query given a code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'true',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'boolean', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{ $match: { $and: [{ $or: [{ foo: 'true' }] }] } },
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an equal to query given a code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: '|false',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'boolean', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{ $match: { $and: [{ $or: [{ foo: 'false' }] }] } },
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an equal to query given a system and code (ignore the system)', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar|false',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'boolean', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{ $match: { $and: [{ $or: [{ foo: 'false' }] }] } },
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('uri Token Tests', () => {
			test('Should return an equal to query given a code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'uri', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{ $match: { $and: [{ $or: [{ foo: 'bar' }] }] } },
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an equal to query given a code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: '|bar',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'uri', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{ $match: { $and: [{ $or: [{ foo: 'bar' }] }] } },
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an equal to query given a system and code (ignore the system)', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar|baz',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'uri', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{ $match: { $and: [{ $or: [{ foo: 'baz' }] }] } },
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('string Token Tests', () => {
			test('Should return an equal to query given a code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'string', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{ $match: { $and: [{ $or: [{ foo: 'bar' }] }] } },
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an equal to query given a code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: '|bar',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'string', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{ $match: { $and: [{ $or: [{ foo: 'bar' }] }] } },
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an equal to query given a system and code (ignore the system)', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar|baz',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'string', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = [
					{ $match: { $and: [{ $or: [{ foo: 'baz' }] }] } },
					{ $match: { 'meta._isArchived': false } },
					{
						$facet: {
							data: [{ $skip: 0 }, { $limit: 10 }],
							metadata: [
								{ $count: 'total' },
								{
									$addFields: {
										numberOfPages: { $ceil: { $divide: ['$total', 10] } },
									},
								},
								{ $addFields: { page: 1 } },
							],
						},
					},
				];
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('invalid fhirtype Token Tests', () => {
			test('Should throw an error if given an unsupported fhirtype', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar',
					},
				};
				const parameterDefinitions = {
					foo: {
						type: 'token',
						fhirtype: 'unsupported',
						xpath: 'Resource.foo',
					},
				};
				const includeArchived = false;
				let { errors } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				expect(errors).toHaveLength(1);
				expect(errors[0].message).toContain(
					"Unsupported fhirtype 'unsupported' supplied for token parameter 'foo'",
				);
			});
		});
	});

	describe('Error Handling Tests', () => {
		test('Should throw and catch an error and add it to the errors array if a parameter is invalid.', () => {
			const req = {
				method: 'GET',
				query: {
					foo: 'foo',
				},
			};
			const parameterDefinitions = {
				foo: { type: 'number', xpath: 'Resource.foo' },
			};
			const includeArchived = false;
			let { errors } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			expect(errors).toHaveLength(1);
			expect(errors[0].message).toContain('expected number for parameter foo');
		});
		test('Should throw and catch an error and add it to the errors array if a parameter is not defined in the config.', () => {
			const req = {
				method: 'GET',
				query: {
					foo: 'foo',
				},
			};
			const parameterDefinitions = {
				bar: { type: 'number', xpath: 'Resource.foo' },
			};
			const includeArchived = false;
			let { errors } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			expect(errors).toHaveLength(1);
			expect(errors[0].message).toContain("Unknown parameter 'foo'");
		});
		test('Should throw and catch an error and add it to the errors array if a parameter has an invalid type.', () => {
			const req = {
				method: 'GET',
				query: {
					foo: 'foo',
				},
			};
			const parameterDefinitions = {
				foo: { type: 'unsupported', xpath: 'Resource.foo' },
			};
			const includeArchived = false;
			let { errors } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			expect(errors).toHaveLength(1);
			expect(errors[0].message).toContain(
				"Unsupported type 'unsupported' supplied for parameter 'foo'",
			);
		});
	});

	describe('Request Type Tests', () => {
		test('Should use the request query for parameters', () => {
			const req = {
				method: 'GET',
				query: {
					foo: 'eq2018-10-31T17:49:29.000Z',
				},
				body: {
					foo: 'eq2017-10-31T17:49:29.000Z',
				},
			};
			const parameterDefinitions = {
				foo: { type: 'date', xpath: 'Resource.foo' },
			};
			const includeArchived = false;
			let { errors, query } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			const expectedResult = [
				{ $match: { $and: [{ $or: [{ foo: '2018-10-31T17:49:29.000Z' }] }] } },
				{ $match: { 'meta._isArchived': false } },
				{
					$facet: {
						data: [{ $skip: 0 }, { $limit: 10 }],
						metadata: [
							{ $count: 'total' },
							{
								$addFields: {
									numberOfPages: { $ceil: { $divide: ['$total', 10] } },
								},
							},
							{ $addFields: { page: 1 } },
						],
					},
				},
			];
			expect(errors).toHaveLength(0);
			expect(query).toEqual(expectedResult);
		});
		test('Should use the request body for parameters', () => {
			const req = {
				method: 'POST',
				query: {
					foo: 'eq2018-10-31T17:49:29.000Z',
				},
				body: {
					foo: 'eq2017-10-31T17:49:29.000Z',
				},
			};
			const parameterDefinitions = {
				foo: { type: 'date', xpath: 'Resource.foo' },
			};
			const includeArchived = false;
			let { errors, query } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			const expectedResult = [
				{ $match: { $and: [{ $or: [{ foo: '2017-10-31T17:49:29.000Z' }] }] } },
				{ $match: { 'meta._isArchived': false } },
				{
					$facet: {
						data: [{ $skip: 0 }, { $limit: 10 }],
						metadata: [
							{ $count: 'total' },
							{
								$addFields: {
									numberOfPages: { $ceil: { $divide: ['$total', 10] } },
								},
							},
							{ $addFields: { page: 1 } },
						],
					},
				},
			];
			expect(errors).toHaveLength(0);
			expect(query).toEqual(expectedResult);
		});
		test('Should merge the request body with request.params for parameters', () => {
			const req = {
				method: 'POST',
				body: {
					foo: 'eq2017-10-31T17:49:29.000Z',
				},
				params: {
					bar: 'eq2018-10-31T17:49:29.000Z',
				},
			};
			const parameterDefinitions = {
				foo: { type: 'date', xpath: 'Resource.foo' },
				bar: { type: 'date', xpath: 'Resource.bar' },
			};
			const includeArchived = false;
			let { errors, query } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			const expectedResult = [
				{
					$match: {
						$and: [
							{ $or: [{ foo: '2017-10-31T17:49:29.000Z' }] },
							{ $or: [{ bar: '2018-10-31T17:49:29.000Z' }] },
						],
					},
				},
				{ $match: { 'meta._isArchived': false } },
				{
					$facet: {
						data: [{ $skip: 0 }, { $limit: 10 }],
						metadata: [
							{ $count: 'total' },
							{
								$addFields: {
									numberOfPages: { $ceil: { $divide: ['$total', 10] } },
								},
							},
							{ $addFields: { page: 1 } },
						],
					},
				},
			];
			expect(errors).toHaveLength(0);
			expect(query).toEqual(expectedResult);
		});
		test('Should throw an error for unsupported request types', () => {
			const req = {
				method: 'PUT',
				query: {
					foo: 'eq2018-10-31T17:49:29.000Z',
				},
			};
			const parameterDefinitions = {
				foo: { type: 'date', xpath: 'Resource.foo' },
			};
			const includeArchived = false;
			let { errors } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			expect(errors).toHaveLength(1);
			expect(errors[0].message).toContain("Unsupported request method 'PUT'");
		});
		test('Should throw an error for unsupported modifiers', () => {
			const req = {
				method: 'GET',
				query: {
					'foo:unsupportedModifier': 'bar',
				},
			};
			const parameterDefinitions = {
				foo: { type: 'string', xpath: 'Resource.foo' },
			};
			const includeArchived = false;
			let { errors } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			expect(errors).toHaveLength(1);
			expect(errors[0].message).toContain(
				"Search modifier 'unsupportedModifier' is not currently supported",
			);
		});
	});

	describe('Global Parameter Query Tests', () => {
		test('Test for global param _id', () => {
			const req = {
				method: 'GET',
				query: {
					_id: 'foo',
				},
			};
			const parameterDefinitions = undefined;
			const includeArchived = false;
			let { query, errors } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			const expectedResult = [
				{ $match: { $and: [{ $or: [{ id: 'foo' }] }] } },
				{ $match: { 'meta._isArchived': false } },
				{
					$facet: {
						data: [{ $skip: 0 }, { $limit: 10 }],
						metadata: [
							{ $count: 'total' },
							{
								$addFields: {
									numberOfPages: { $ceil: { $divide: ['$total', 10] } },
								},
							},
							{ $addFields: { page: 1 } },
						],
					},
				},
			];

			expect(errors).toHaveLength(0);
			expect(query).toEqual(expectedResult);
		});
		test('Test for global param _lastUpdated', () => {
			const req = {
				method: 'GET',
				query: {
					_lastUpdated: '2018-10-31T17:49:29.000Z',
				},
			};
			const parameterDefinitions = undefined;
			const includeArchived = false;
			let { query, errors } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			const expectedResult = [
				{
					$match: {
						$and: [
							{ $or: [{ 'meta.lastUpdated': '2018-10-31T17:49:29.000Z' }] },
						],
					},
				},
				{ $match: { 'meta._isArchived': false } },
				{
					$facet: {
						data: [{ $skip: 0 }, { $limit: 10 }],
						metadata: [
							{ $count: 'total' },
							{
								$addFields: {
									numberOfPages: { $ceil: { $divide: ['$total', 10] } },
								},
							},
							{ $addFields: { page: 1 } },
						],
					},
				},
			];
			expect(errors).toHaveLength(0);
			expect(query).toEqual(expectedResult);
		});
		test('Should be able to initialize a new qb without supplying global parameters', () => {
			const noGlobalQB = new QueryBuilder({
				packageName: '../fhir-qb-mongo',
			});
			expect(noGlobalQB).toBeDefined();
		});
	});

	describe('Search Result Parameter Query Tests', () => {
		test('Test for search param _count', () => {
			const req = {
				method: 'GET',
				query: {
					_count: '5',
				},
			};
			const parameterDefinitions = undefined;
			const includeArchived = false;
			let { query, errors } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			const expectedResult = [
				{ $match: { 'meta._isArchived': false } },
				{ $limit: 5 },
				{
					$facet: {
						data: [{ $skip: 0 }, { $limit: 10 }],
						metadata: [
							{ $count: 'total' },
							{
								$addFields: {
									numberOfPages: { $ceil: { $divide: ['$total', 10] } },
								},
							},
							{ $addFields: { page: 1 } },
						],
					},
				},
			];

			expect(errors).toHaveLength(0);
			expect(query).toEqual(expectedResult);
		});
	});

	describe('Paging Parameter Query Tests', () => {
		test('Should accept valid page parameter', () => {
			const req = {
				method: 'GET',
				query: {
					page: '1',
				},
			};
			const parameterDefinitions = undefined;
			const includeArchived = false;
			let { query, errors } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			const expectedResult = [
				{ $match: { 'meta._isArchived': false } },
				{
					$facet: {
						data: [{ $skip: 0 }, { $limit: 10 }],
						metadata: [
							{ $count: 'total' },
							{
								$addFields: {
									numberOfPages: { $ceil: { $divide: ['$total', 10] } },
								},
							},
							{ $addFields: { page: 1 } },
						],
					},
				},
			];
			expect(errors).toHaveLength(0);
			expect(query).toEqual(expectedResult);
		});

		test('Should skip correct number of entries based on page parameter', () => {
			const req = {
				method: 'GET',
				query: {
					page: '2',
				},
			};
			const parameterDefinitions = undefined;
			const includeArchived = false;
			let { query, errors } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			const expectedResult = [
				{ $match: { 'meta._isArchived': false } },
				{
					$facet: {
						data: [{ $skip: 10 }, { $limit: 10 }],
						metadata: [
							{ $count: 'total' },
							{
								$addFields: {
									numberOfPages: { $ceil: { $divide: ['$total', 10] } },
								},
							},
							{ $addFields: { page: 2 } },
						],
					},
				},
			];
			expect(errors).toHaveLength(0);
			expect(query).toEqual(expectedResult);
		});
		test('Should reject invalid page parameter', () => {
			const req = {
				method: 'GET',
				query: {
					page: '-1',
				},
			};
			const parameterDefinitions = undefined;
			const includeArchived = false;
			let { errors } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});

			expect(errors).toHaveLength(1);
			expect(errors[0].message).toContain(
				"Value for page parameter 'page' must be a positive integer. Received -1",
			);
		});
	});

	describe('Parameter Definition Tests', () => {
		test('TODO - test multiple xpaths', () => {
			const req = {
				method: 'GET',
				query: {
					foo: 'Evé',
				},
			};
			const parameterDefinitions = {
				foo: { type: 'string', xpath: ['Resource.foo', 'Resource.bar'] },
			};
			const includeArchived = false;
			let { errors, query } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			const expectedResult = [
				{
					$match: {
						$and: [
							{
								$or: [
									{ foo: { $regex: '^Eve', $options: 'i' } },
									{ bar: { $regex: '^Eve', $options: 'i' } },
								],
							},
						],
					},
				},
				{ $match: { 'meta._isArchived': false } },
				{
					$facet: {
						data: [{ $skip: 0 }, { $limit: 10 }],
						metadata: [
							{ $count: 'total' },
							{
								$addFields: {
									numberOfPages: { $ceil: { $divide: ['$total', 10] } },
								},
							},
							{ $addFields: { page: 1 } },
						],
					},
				},
			];
			expect(errors).toHaveLength(0);
			expect(query).toEqual(expectedResult);
		});
		test('Should return a query that matches foo AND (bar OR baz) in field foo or qux', () => {
			const req = {
				method: 'GET',
				query: {
					foo: ['foo', 'bar,baz'],
				},
			};
			const parameterDefinitions = {
				foo: { type: 'string', xpath: ['Resource.foo', 'Resource.qux'] },
			};
			const includeArchived = false;
			let { errors, query } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			const expectedResult = [
				{
					$match: {
						$and: [
							{
								$or: [
									{ foo: { $options: 'i', $regex: '^foo' } },
									{ qux: { $options: 'i', $regex: '^foo' } },
								],
							},
							{
								$or: [
									{ foo: { $options: 'i', $regex: '^bar' } },
									{ foo: { $options: 'i', $regex: '^baz' } },
									{ qux: { $options: 'i', $regex: '^bar' } },
									{ qux: { $options: 'i', $regex: '^baz' } },
								],
							},
						],
					},
				},
				{ $match: { 'meta._isArchived': false } },
				{
					$facet: {
						data: [{ $skip: 0 }, { $limit: 10 }],
						metadata: [
							{ $count: 'total' },
							{
								$addFields: {
									numberOfPages: { $ceil: { $divide: ['$total', 10] } },
								},
							},
							{ $addFields: { page: 1 } },
						],
					},
				},
			];
			expect(errors).toHaveLength(0);
			expect(query).toEqual(expectedResult);
		});
	});
});

describe('SQL Tests', () => {
	beforeAll(() => {
		// Do this for tests only
		moment.suppressDeprecationWarnings = true;
	});
	const Sequelize = require('sequelize');
	const { formDateComparison } = require('../fhir-qb-sql/index');
	const Op = Sequelize.Op;
	const globalParameterDefinitions = {
		_content: {
			type: 'string',
			fhirtype: 'string',
			xpath: '',
			definition: 'http://hl7.org/fhir/SearchParameter/Resource-content',
			description: 'Search on the entire content of the resource',
			modifier: 'missing,exact,contains',
		},
		_id: {
			type: 'token',
			fhirtype: 'token',
			xpath: 'Resource.id',
			definition: 'http://hl7.org/fhir/SearchParameter/Resource-id',
			description: 'Logical id of this artifact',
			modifier: 'missing,text,not,in,not-in,below,above,ofType',
		},
		_lastUpdated: {
			type: 'date',
			fhirtype: 'date',
			xpath: 'Resource.meta.lastUpdated',
			definition: 'http://hl7.org/fhir/SearchParameter/Resource-lastUpdated',
			description: 'When the resource version last changed',
			modifier: 'missing',
		},
		_profile: {
			type: 'reference',
			fhirtype: 'reference',
			xpath: 'Resource.meta.profile',
			definition: 'http://hl7.org/fhir/SearchParameter/Resource-profile',
			description: 'Profiles this resource claims to conform to',
			modifier: 'missing,type,identifier',
		},
		_query: {
			type: 'token',
			fhirtype: 'token',
			xpath: '',
			definition: 'http://hl7.org/fhir/SearchParameter/Resource-query',
			description:
				'A custom search profile that describes a specific defined query operation',
			modifier: 'missing,text,not,in,not-in,below,above,ofType',
		},
		_security: {
			type: 'token',
			fhirtype: 'token',
			xpath: 'Resource.meta.security',
			definition: 'http://hl7.org/fhir/SearchParameter/Resource-security',
			description: 'Security Labels applied to this resource',
			modifier: 'missing,text,not,in,not-in,below,above,ofType',
		},
		_source: {
			type: 'uri',
			fhirtype: 'uri',
			xpath: 'Resource.meta.source',
			definition: 'http://hl7.org/fhir/SearchParameter/Resource-source',
			description: 'Identifies where the resource comes from',
			modifier: 'missing,below,above',
		},
		_tag: {
			type: 'token',
			fhirtype: 'token',
			xpath: 'Resource.meta.tag',
			definition: 'http://hl7.org/fhir/SearchParameter/Resource-tag',
			description: 'Tags applied to this resource',
			modifier: 'missing,text,not,in,not-in,below,above,ofType',
		},
	};
	const qb = new QueryBuilder({
		packageName: '../fhir-qb-sql/index.js',
		globalParameterDefinitions,
		implementationParameters: { archivedParamPath: 'meta._isArchived' },
	});
	describe('Build Date Query Tests', () => {
		describe('eq Modifier Tests', () => {
			test("Should return the ISO String if the given a full ISO String 'yyyy-mm-ddThh:mm:ss.###Z'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eq2018-10-31T17:49:29.000Z',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison('=', '2018-10-31T17:49:29.000Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return the ISO String if given a partial ISO string of format 'yyyy-mm-ddThh:mm:ss'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eq2018-10-31T17:49:29',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison('>=', '2018-10-31T17:49:29.000Z'),
											formDateComparison('<=', '2018-10-31T17:49:29.999Z'),
										],
									},
								],
							},
						],
					},
				};

				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return a 1 minute range if given a partial ISO string of format 'yyyy-mm-ddThh:mm'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eq2018-10-31T17:49',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison('>=', '2018-10-31T17:49:00.000Z'),
											formDateComparison('<=', '2018-10-31T17:49:59.999Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return a 1 hour range if given a partial ISO string of format 'yyyy-mm-ddThh'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eq2018-10-31T17',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison('>=', '2018-10-31T17:00:00.000Z'),
											formDateComparison('<=', '2018-10-31T17:59:59.999Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return a 1 day range if given a partial ISO string of format 'yyyy-mm-dd'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eq2018-10-31',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison('>=', '2018-10-31T00:00:00.000Z'),
											formDateComparison('<=', '2018-10-31T23:59:59.999Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return a 1 month range if given a partial ISO string of format 'yyyy-mm'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eq2018-10',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison('>=', '2018-10-01T00:00:00.000Z'),
											formDateComparison('<=', '2018-10-31T23:59:59.999Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return a 1 year range if given a partial ISO string of format 'yyyy'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eq2018',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison('>=', '2018-01-01T00:00:00.000Z'),
											formDateComparison('<=', '2018-12-31T23:59:59.999Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should implicitly use 'eq' prefix if one is not supplied in the request", () => {
				const req = {
					method: 'GET',
					query: {
						foo: '2018',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison('>=', '2018-01-01T00:00:00.000Z'),
											formDateComparison('<=', '2018-12-31T23:59:59.999Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('ne Modifier Tests', () => {
			// TODO - Should I throw an error in this situation? Providing ms is not allowed.
			test("Should return a $ne of the given full ISO String 'yyyy-mm-ddThh:mm:ss.###Z'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ne2018-10-31T17:49:29.000Z',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison('!=', '2018-10-31T17:49:29.000Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return a $ne of the given partial ISO String of format 'yyyy-mm-ddThh:mm:ss'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ne2018-10-31T17:49:29',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison('<=', '2018-10-31T17:49:29.000Z'),
											formDateComparison('>=', '2018-10-31T17:49:29.999Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return an $or that fully excludes the specified minute in given partial ISO String of format 'yyyy-mm-ddThh:mm'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ne2018-10-31T17:49',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};

				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison('<=', '2018-10-31T17:49:00.000Z'),
											formDateComparison('>=', '2018-10-31T17:49:59.999Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			// TODO - Should I throw an error in this situation? Hours without minutes is not allowed.
			test("Should return an $or that fully excludes the specified hour in given partial ISO String of format 'yyyy-mm-ddThh'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ne2018-10-31T17',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison('<=', '2018-10-31T17:00:00.000Z'),
											formDateComparison('>=', '2018-10-31T17:59:59.999Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return an $or that fully excludes the specified day in given partial ISO String of format 'yyyy-mm-dd'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ne2018-10-31',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison('<=', '2018-10-31T00:00:00.000Z'),
											formDateComparison('>=', '2018-10-31T23:59:59.999Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return an $or that fully excludes the specified month in given partial ISO String of format 'yyyy-mm'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ne2018-10',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison('<=', '2018-10-01T00:00:00.000Z'),
											formDateComparison('>=', '2018-10-31T23:59:59.999Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return an $or that fully excludes the specified year in given partial ISO String of format 'yyyy'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ne2018',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison('<=', '2018-01-01T00:00:00.000Z'),
											formDateComparison('>=', '2018-12-31T23:59:59.999Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('gt Modifier Tests', () => {
			// TODO - Should I throw an error in this situation? Providing ms is not allowed.
			test("Should return $gt ISO String if given a full ISO String 'yyyy-mm-ddThh:mm:ss.###Z'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'gt2018-10-31T17:49:29.000Z',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.gt, '2018-10-31T17:49:29.000Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $gt ISO String if given a partial ISO String of format 'yyyy-mm-ddThh:mm:ss'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'gt2018-10-31T17:49:29',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.gt, '2018-10-31T17:49:29.999Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $gt end of minute if given a partial ISO String 'yyyy-mm-ddThh:mm'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'gt2018-10-31T17:49',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.gt, '2018-10-31T17:49:59.999Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			// TODO - Should I throw an error in this situation? Hours without minutes is not allowed.
			test("Should return $gt end of hour if given a partial ISO String 'yyyy-mm-ddThh'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'gt2018-10-31T17',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.gt, '2018-10-31T17:59:59.999Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $gt end of day if given a partial ISO String 'yyyy-mm-dd'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'gt2018-10-31',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.gt, '2018-10-31T23:59:59.999Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $gt end of month if given a partial ISO String 'yyyy-mm'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'gt2018-10',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.gt, '2018-10-31T23:59:59.999Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $gt end of year if given a partial ISO String 'yyyy'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'gt2018',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.gt, '2018-12-31T23:59:59.999Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('gte Modifier Tests', () => {
			// TODO - Should I throw an error in this situation? Providing ms is not allowed.
			test("Should return $gte ISO String if given a full ISO String 'yyyy-mm-ddThh:mm:ss.###Z'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ge2018-10-31T17:49:29.000Z',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.gte, '2018-10-31T17:49:29.000Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $gte ISO String if given a partial ISO String of format 'yyyy-mm-ddThh:mm:ss'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ge2018-10-31T17:49:29',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.gte, '2018-10-31T17:49:29.000Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $gte start of minute if given a partial ISO String 'yyyy-mm-ddThh:mm'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ge2018-10-31T17:49',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.gte, '2018-10-31T17:49:00.000Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			// TODO - Should I throw an error in this situation? Hours without minutes is not allowed.
			test("Should return $gte start of hour if given a partial ISO String 'yyyy-mm-ddThh'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ge2018-10-31T17',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.gte, '2018-10-31T17:00:00.000Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $gte start of day if given a partial ISO String 'yyyy-mm-dd'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ge2018-10-31',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.gte, '2018-10-31T00:00:00.000Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $gte start of month if given a partial ISO String 'yyyy-mm'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ge2018-10',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.gte, '2018-10-01T00:00:00.000Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $gte start of year if given a partial ISO String 'yyyy'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ge2018',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.gte, '2018-01-01T00:00:00.000Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('lt Modifier Tests', () => {
			// TODO - Note that the sanitizer should stop this situation from ever occurring, as providing milliseconds is not allowed.
			test("Should return $lt ISO String if given a full ISO String 'yyyy-mm-ddThh:mm:ss.###Z'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'lt2018-10-31T17:49:29.000Z',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.lt, '2018-10-31T17:49:29.000Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $lt ISO String if given a partial ISO String of format 'yyyy-mm-ddThh:mm:ss'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'lt2018-10-31T17:49:29',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.lt, '2018-10-31T17:49:29.000Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $lt start of minute if given a partial ISO String 'yyyy-mm-ddThh:mm'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'lt2018-10-31T17:49',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.lt, '2018-10-31T17:49:00.000Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			// TODO - Should I throw an error in this situation? Hours without minutes is not allowed.
			test("Should return $lt start of hour if given a partial ISO String 'yyyy-mm-ddThh'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'lt2018-10-31T17',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.lt, '2018-10-31T17:00:00.000Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $lt start of day if given a partial ISO String 'yyyy-mm-dd'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'lt2018-10-31',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.lt, '2018-10-31T00:00:00.000Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $lt start of month if given a partial ISO String 'yyyy-mm'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'lt2018-10',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.lt, '2018-10-01T00:00:00.000Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $lt start of year if given a partial ISO String 'yyyy'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'lt2018',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.lt, '2018-01-01T00:00:00.000Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('lte Modifier Tests', () => {
			// TODO - Should I throw an error in this situation? Providing ms is not allowed.
			test("Should return $lte ISO String if given a full ISO String 'yyyy-mm-ddThh:mm:ss.###Z'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'le2018-10-31T17:49:29.000Z',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.lte, '2018-10-31T17:49:29.000Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $lte ISO String if given a partial ISO String of format 'yyyy-mm-ddThh:mm:ss'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'le2018-10-31T17:49:29',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.lte, '2018-10-31T17:49:29.000Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $lte start of minute if given a partial ISO String 'yyyy-mm-ddThh:mm'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'le2018-10-31T17:49',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.lte, '2018-10-31T17:49:00.000Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			// TODO - Should I throw an error in this situation? Hours without minutes is not allowed.
			test("Should return $lte start of hour if given a partial ISO String 'yyyy-mm-ddThh'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'le2018-10-31T17',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.lte, '2018-10-31T17:00:00.000Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $lte start of day if given a partial ISO String 'yyyy-mm-dd'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'le2018-10-31',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.lte, '2018-10-31T00:00:00.000Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $lte start of month if given a partial ISO String 'yyyy-mm'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'le2018-10',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.lte, '2018-10-01T00:00:00.000Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $lte start of year if given a partial ISO String 'yyyy'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'le2018',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.lte, '2018-01-01T00:00:00.000Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('sa Modifier Tests', () => {
			// TODO - Should I throw an error in this situation? Providing ms is not allowed.
			test("Should return $gt ISO String if given a full ISO String 'yyyy-mm-ddThh:mm:ss.###Z'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'sa2018-10-31T17:49:29.000Z',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.gt, '2018-10-31T17:49:29.000Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $gt ISO String if given a partial ISO String of format 'yyyy-mm-ddThh:mm:ss'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'sa2018-10-31T17:49:29',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.gt, '2018-10-31T17:49:29.999Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $gt end of minute if given a partial ISO String 'yyyy-mm-ddThh:mm'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'sa2018-10-31T17:49',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.gt, '2018-10-31T17:49:59.999Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			// TODO - Should I throw an error in this situation? Hours without minutes is not allowed.
			test("Should return $gt end of hour if given a partial ISO String 'yyyy-mm-ddThh'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'sa2018-10-31T17',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.gt, '2018-10-31T17:59:59.999Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $gt end of day if given a partial ISO String 'yyyy-mm-dd'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'sa2018-10-31',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.gt, '2018-10-31T23:59:59.999Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $gt end of month if given a partial ISO String 'yyyy-mm'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'sa2018-10',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.gt, '2018-10-31T23:59:59.999Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $gt end of year if given a partial ISO String 'yyyy'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'sa2018',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.gt, '2018-12-31T23:59:59.999Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('eb Modifier Tests', () => {
			// TODO - Should I throw an error in this situation? Providing ms is not allowed.
			test("Should return $lt ISO String if given a full ISO String 'yyyy-mm-ddThh:mm:ss.###Z'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eb2018-10-31T17:49:29.000Z',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.lt, '2018-10-31T17:49:29.000Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $lt ISO String if given a partial ISO String of format 'yyyy-mm-ddThh:mm:ss'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eb2018-10-31T17:49:29',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.lt, '2018-10-31T17:49:29.000Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $lt start of minute if given a partial ISO String 'yyyy-mm-ddThh:mm'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eb2018-10-31T17:49',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.lt, '2018-10-31T17:49:00.000Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			// TODO - Should I throw an error in this situation? Hours without minutes is not allowed.
			test("Should return $lt start of hour if given a partial ISO String 'yyyy-mm-ddThh'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eb2018-10-31T17',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.lt, '2018-10-31T17:00:00.000Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $lt start of day if given a partial ISO String 'yyyy-mm-dd'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eb2018-10-31',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.lt, '2018-10-31T00:00:00.000Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $lt start of month if given a partial ISO String 'yyyy-mm'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eb2018-10',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.lt, '2018-10-01T00:00:00.000Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test("Should return $lt start of year if given a partial ISO String 'yyyy'", () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eb2018',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'date', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											formDateComparison(Op.lt, '2018-01-01T00:00:00.000Z'),
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('ap Modifier Tests', () => {
			// TODO - Should I throw an error in this situation? Providing ms is not allowed.
			test(
				'Should return range with upper lower bounds equal to the target date +/- 0.1 * the amount of time ' +
					"between now and the target date if given a full ISO String 'yyyy-mm-ddThh:mm:ss.###Z'",
				() => {
					const testDate = '2018-10-31T17:49:29.000Z';
					const req = {
						method: 'GET',
						query: {
							foo: 'ap' + testDate,
						},
					};
					const parameterDefinitions = {
						foo: { type: 'date', xpath: 'Resource.foo' },
					};
					const targetDate = moment.utc(testDate);
					const rangePadding = 0.1;
					const currentDateTime = moment.utc();
					let difference =
						moment.duration(currentDateTime.diff(targetDate)).asSeconds() *
						rangePadding;
					let expectedLowerBound = moment(targetDate).subtract(
						difference,
						'seconds',
					);
					let expectedUpperBound = moment(targetDate).add(
						difference,
						'seconds',
					);

					const includeArchived = false;
					let { query, errors } = qb.buildSearchQuery({
						req,
						parameterDefinitions,
						includeArchived,
					});

					let observedLowerBound = moment(
						query.where[Op.and][0][Op.or][0][Op.and][1].logic,
					);
					let observedUpperBound = moment(
						query.where[Op.and][0][Op.or][0][Op.and][2].logic,
					);

					let lowerBoundDifference = moment
						.duration(observedLowerBound.diff(expectedLowerBound))
						.asSeconds();
					let upperBoundDifference = moment
						.duration(observedUpperBound.diff(expectedUpperBound))
						.asSeconds();

					// Fail if the observed upper or lower bounds are more than a hundredth of a second off the expected
					let correctLowerBound = Math.abs(lowerBoundDifference) <= 0.01;
					let correctUpperBound = Math.abs(upperBoundDifference) <= 0.01;
					expect(correctLowerBound).toBe(true);
					expect(correctUpperBound).toBe(true);
					expect(errors).toHaveLength(0);
				},
			);
			test(
				'Should return range with upper lower bounds equal to the target date +/- 0.1 * the amount of time ' +
					"between now and the target date if given a partial ISO String of format 'yyyy-mm-ddThh:mm:ss'",
				() => {
					const testDate = '2018-10-31T17:49:29';
					const req = {
						method: 'GET',
						query: {
							foo: 'ap' + testDate,
						},
					};
					const parameterDefinitions = {
						foo: { type: 'date', xpath: 'Resource.foo' },
					};
					const targetDate = moment.utc(testDate);
					const rangePadding = 0.1;
					const currentDateTime = moment.utc();
					let difference =
						moment.duration(currentDateTime.diff(targetDate)).asSeconds() *
						rangePadding;
					let expectedLowerBound = moment(targetDate).subtract(
						difference,
						'seconds',
					);
					let expectedUpperBound = moment(targetDate).add(
						difference,
						'seconds',
					);

					const includeArchived = false;
					let { query, errors } = qb.buildSearchQuery({
						req,
						parameterDefinitions,
						includeArchived,
					});
					let observedLowerBound = moment(
						query.where[Op.and][0][Op.or][0][Op.and][1].logic,
					);
					let observedUpperBound = moment(
						query.where[Op.and][0][Op.or][0][Op.and][2].logic,
					);

					let lowerBoundDifference = moment
						.duration(observedLowerBound.diff(expectedLowerBound))
						.asSeconds();
					let upperBoundDifference = moment
						.duration(observedUpperBound.diff(expectedUpperBound))
						.asSeconds();

					// Fail if the observed upper or lower bounds are more than a hundredth of a second off the expected
					let correctLowerBound = Math.abs(lowerBoundDifference) <= 0.01;
					let correctUpperBound = Math.abs(upperBoundDifference) <= 0.01;
					expect(correctLowerBound).toBe(true);
					expect(correctUpperBound).toBe(true);
					expect(errors).toHaveLength(0);
				},
			);
			test(
				'Should return range with upper lower bounds equal to the target date +/- 0.1 * the amount of time ' +
					"between now and the start of the specified minute if given a partial ISO String of format 'yyyy-mm-ddThh:mm'",
				() => {
					const testDate = '2018-10-31T17:49';
					const req = {
						method: 'GET',
						query: {
							foo: 'ap' + testDate,
						},
					};
					const parameterDefinitions = {
						foo: { type: 'date', xpath: 'Resource.foo' },
					};
					const targetDate = moment.utc(testDate);
					const rangePadding = 0.1;
					const currentDateTime = moment.utc();
					let difference =
						moment.duration(currentDateTime.diff(targetDate)).asSeconds() *
						rangePadding;
					let expectedLowerBound = moment(targetDate).subtract(
						difference,
						'seconds',
					);
					let expectedUpperBound = moment(targetDate).add(
						difference,
						'seconds',
					);

					const includeArchived = false;
					let { query, errors } = qb.buildSearchQuery({
						req,
						parameterDefinitions,
						includeArchived,
					});

					let observedLowerBound = moment(
						query.where[Op.and][0][Op.or][0][Op.and][1].logic,
					);
					let observedUpperBound = moment(
						query.where[Op.and][0][Op.or][0][Op.and][2].logic,
					);

					let lowerBoundDifference = moment
						.duration(observedLowerBound.diff(expectedLowerBound))
						.asSeconds();
					let upperBoundDifference = moment
						.duration(observedUpperBound.diff(expectedUpperBound))
						.asSeconds();

					// Fail if the observed upper or lower bounds are more than a hundredth of a second off the expected
					let correctLowerBound = Math.abs(lowerBoundDifference) <= 0.01;
					let correctUpperBound = Math.abs(upperBoundDifference) <= 0.01;
					expect(correctLowerBound).toBe(true);
					expect(correctUpperBound).toBe(true);
					expect(errors).toHaveLength(0);
				},
			);
			// TODO - Should I throw an error in this situation? Hours without minutes is not allowed.
			test(
				'Should return range with upper lower bounds equal to the target date +/- 0.1 * the amount of time ' +
					"between currentDateTimeOverride and the start of the specified hour if given a partial ISO String of format 'yyyy-mm-ddThh'",
				() => {
					const testDate = '2018-10-31T17';
					const req = {
						method: 'GET',
						query: {
							foo: 'ap' + testDate,
						},
					};
					const parameterDefinitions = {
						foo: { type: 'date', xpath: 'Resource.foo' },
					};
					const targetDate = moment.utc(testDate);
					const rangePadding = 0.1;
					const currentDateTime = moment.utc();
					let difference =
						moment.duration(currentDateTime.diff(targetDate)).asSeconds() *
						rangePadding;
					let expectedLowerBound = moment(targetDate).subtract(
						difference,
						'seconds',
					);
					let expectedUpperBound = moment(targetDate).add(
						difference,
						'seconds',
					);

					const includeArchived = false;
					let { query, errors } = qb.buildSearchQuery({
						req,
						parameterDefinitions,
						includeArchived,
					});

					let observedLowerBound = moment(
						query.where[Op.and][0][Op.or][0][Op.and][1].logic,
					);
					let observedUpperBound = moment(
						query.where[Op.and][0][Op.or][0][Op.and][2].logic,
					);

					let lowerBoundDifference = moment
						.duration(observedLowerBound.diff(expectedLowerBound))
						.asSeconds();
					let upperBoundDifference = moment
						.duration(observedUpperBound.diff(expectedUpperBound))
						.asSeconds();

					// Fail if the observed upper or lower bounds are more than a hundredth of a second off the expected
					let correctLowerBound = Math.abs(lowerBoundDifference) <= 0.01;
					let correctUpperBound = Math.abs(upperBoundDifference) <= 0.01;
					expect(correctLowerBound).toBe(true);
					expect(correctUpperBound).toBe(true);
					expect(errors).toHaveLength(0);
				},
			);
			test(
				'Should return range with upper lower bounds equal to the target date +/- 0.1 * the amount of time ' +
					"between currentDateTimeOverride and the start of the specified day if given a partial ISO String of format 'yyyy-mm-dd'",
				() => {
					const testDate = '2018-10-31';
					const req = {
						method: 'GET',
						query: {
							foo: 'ap' + testDate,
						},
					};
					const parameterDefinitions = {
						foo: { type: 'date', xpath: 'Resource.foo' },
					};
					const targetDate = moment.utc(testDate);
					const rangePadding = 0.1;
					const currentDateTime = moment.utc();
					let difference =
						moment.duration(currentDateTime.diff(targetDate)).asSeconds() *
						rangePadding;
					let expectedLowerBound = moment(targetDate).subtract(
						difference,
						'seconds',
					);
					let expectedUpperBound = moment(targetDate).add(
						difference,
						'seconds',
					);

					const includeArchived = false;
					let { query, errors } = qb.buildSearchQuery({
						req,
						parameterDefinitions,
						includeArchived,
					});

					let observedLowerBound = moment(
						query.where[Op.and][0][Op.or][0][Op.and][1].logic,
					);
					let observedUpperBound = moment(
						query.where[Op.and][0][Op.or][0][Op.and][2].logic,
					);

					let lowerBoundDifference = moment
						.duration(observedLowerBound.diff(expectedLowerBound))
						.asSeconds();
					let upperBoundDifference = moment
						.duration(observedUpperBound.diff(expectedUpperBound))
						.asSeconds();

					// Fail if the observed upper or lower bounds are more than a hundredth of a second off the expected
					let correctLowerBound = Math.abs(lowerBoundDifference) <= 0.01;
					let correctUpperBound = Math.abs(upperBoundDifference) <= 0.01;
					expect(correctLowerBound).toBe(true);
					expect(correctUpperBound).toBe(true);
					expect(errors).toHaveLength(0);
				},
			);
			test(
				'Should return range with upper lower bounds equal to the target date +/- 0.1 * the amount of time ' +
					"between currentDateTimeOverride and the start of the specified month if given a partial ISO String of format 'yyyy-mm'",
				() => {
					const testDate = '2018-10';
					const req = {
						method: 'GET',
						query: {
							foo: 'ap' + testDate,
						},
					};
					const parameterDefinitions = {
						foo: { type: 'date', xpath: 'Resource.foo' },
					};
					const targetDate = moment.utc(testDate);
					const rangePadding = 0.1;
					const currentDateTime = moment.utc();
					let difference =
						moment.duration(currentDateTime.diff(targetDate)).asSeconds() *
						rangePadding;
					let expectedLowerBound = moment(targetDate).subtract(
						difference,
						'seconds',
					);
					let expectedUpperBound = moment(targetDate).add(
						difference,
						'seconds',
					);

					const includeArchived = false;
					let { query, errors } = qb.buildSearchQuery({
						req,
						parameterDefinitions,
						includeArchived,
					});

					let observedLowerBound = moment(
						query.where[Op.and][0][Op.or][0][Op.and][1].logic,
					);
					let observedUpperBound = moment(
						query.where[Op.and][0][Op.or][0][Op.and][2].logic,
					);

					let lowerBoundDifference = moment
						.duration(observedLowerBound.diff(expectedLowerBound))
						.asSeconds();
					let upperBoundDifference = moment
						.duration(observedUpperBound.diff(expectedUpperBound))
						.asSeconds();

					// Fail if the observed upper or lower bounds are more than a hundredth of a second off the expected
					let correctLowerBound = Math.abs(lowerBoundDifference) <= 0.01;
					let correctUpperBound = Math.abs(upperBoundDifference) <= 0.01;
					expect(correctLowerBound).toBe(true);
					expect(correctUpperBound).toBe(true);
					expect(errors).toHaveLength(0);
				},
			);
			test(
				'Should return range with upper lower bounds equal to the target date +/- 0.1 * the amount of time ' +
					"between currentDateTime and the start of the specified year if given a partial ISO String of format 'yyyy'",
				() => {
					const testDate = '2018';
					const req = {
						method: 'GET',
						query: {
							foo: 'ap' + testDate,
						},
					};
					const parameterDefinitions = {
						foo: { type: 'date', xpath: 'Resource.foo' },
					};
					const targetDate = moment.utc(testDate);
					const rangePadding = 0.1;
					const currentDateTime = moment.utc();
					let difference =
						moment.duration(currentDateTime.diff(targetDate)).asSeconds() *
						rangePadding;
					let expectedLowerBound = moment(targetDate).subtract(
						difference,
						'seconds',
					);
					let expectedUpperBound = moment(targetDate).add(
						difference,
						'seconds',
					);

					const includeArchived = false;
					let { query, errors } = qb.buildSearchQuery({
						req,
						parameterDefinitions,
						includeArchived,
					});

					let observedLowerBound = moment(
						query.where[Op.and][0][Op.or][0][Op.and][1].logic,
					);
					let observedUpperBound = moment(
						query.where[Op.and][0][Op.or][0][Op.and][2].logic,
					);

					let lowerBoundDifference = moment
						.duration(observedLowerBound.diff(expectedLowerBound))
						.asSeconds();
					let upperBoundDifference = moment
						.duration(observedUpperBound.diff(expectedUpperBound))
						.asSeconds();

					// Fail if the observed upper or lower bounds are more than a hundredth of a second off the expected
					let correctLowerBound = Math.abs(lowerBoundDifference) <= 0.01;
					let correctUpperBound = Math.abs(upperBoundDifference) <= 0.01;
					expect(correctLowerBound).toBe(true);
					expect(correctUpperBound).toBe(true);
					expect(errors).toHaveLength(0);
				},
			);
		});
	});

	describe('Build Number Query Tests', () => {
		describe('eq Modifier Tests', () => {
			test('Should return range with upper lower bounds equal to +/- 0.5 given an integer', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eq100',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'number', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										name: 'foo',
										value: { [Op.between]: [99.5, 100.5] },
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test(
				'Should return range with upper lower bounds equal to +/- 0.5 * the most significant digit given a number with' +
					'significant decimal places.',
				() => {
					const req = {
						method: 'GET',
						query: {
							foo: 'eq100.000',
						},
					};
					const parameterDefinitions = {
						foo: { type: 'number', xpath: 'Resource.foo' },
					};
					const includeArchived = false;
					let { errors, query } = qb.buildSearchQuery({
						req,
						parameterDefinitions,
						includeArchived,
					});
					const expectedResult = {
						where: {
							[Op.and]: [
								{
									[Op.or]: [
										{
											name: 'foo',
											value: { [Op.between]: [99.9995, 100.0005] },
										},
									],
								},
							],
						},
					};
					expect(errors).toHaveLength(0);
					expect(query).toEqual(expectedResult);
				},
			);
			test("Should default to 'eq' prefix.", () => {
				const req = {
					method: 'GET',
					query: {
						foo: '100',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'number', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										name: 'foo',
										value: { [Op.between]: [99.5, 100.5] },
									},
								],
							},
						],
					},
				};
				expect(query).toEqual(expectedResult);
			});
		});
		describe('ne Modifier Tests', () => {
			test('Should return $or that fully excludes range with upper lower bounds equal to +/- 0.5 given an integer', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ne100',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'number', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										name: 'foo',
										value: { [Op.notBetween]: [99.5, 100.5] },
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test(
				'Should return $or that fully excludes range with upper lower bounds equal to +/- 0.5 * the most significant ' +
					'digit given a number with significant decimal places.',
				() => {
					const req = {
						method: 'GET',
						query: {
							foo: 'ne100.000',
						},
					};
					const parameterDefinitions = {
						foo: { type: 'number', xpath: 'Resource.foo' },
					};
					const includeArchived = false;
					let { errors, query } = qb.buildSearchQuery({
						req,
						parameterDefinitions,
						includeArchived,
					});
					const expectedResult = {
						where: {
							[Op.and]: [
								{
									[Op.or]: [
										{
											name: 'foo',
											value: { [Op.notBetween]: [99.9995, 100.0005] },
										},
									],
								},
							],
						},
					};
					expect(errors).toHaveLength(0);
					expect(query).toEqual(expectedResult);
				},
			);
		});
		describe('lt, le, gt, ge Modifier Tests', () => {
			test('Should return $lt a given target value', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'lt100.0000001',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'number', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										name: 'foo',
										value: { [Op.lt]: 100.0000001 },
									},
								],
							},
						],
					},
				};

				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return $lte a given target value', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'le100.0000001',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'number', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										name: 'foo',
										value: { [Op.lte]: 100.0000001 },
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return $gt a given target value', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'gt100.0000001',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'number', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										name: 'foo',
										value: { [Op.gt]: 100.0000001 },
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return $gte a given target value', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ge100.0000001',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'number', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										name: 'foo',
										value: { [Op.gte]: 100.0000001 },
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('ap Prefix Tests', () => {
			test('Should return range with upper lower bounds equal to +/- 0.1 * a given input', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ap-10',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'number', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										name: 'foo',
										value: { [Op.between]: [-11, -9] },
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('Signed Number Tests', () => {
			test('Should return range with upper lower bounds equal to +/- 0.5 given a negative number', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eq-10',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'number', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										name: 'foo',
										value: { [Op.between]: [-10.5, -9.5] },
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return range with upper lower bounds equal to +/- 0.5 given a signed positive number', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eq+10',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'number', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										name: 'foo',
										value: { [Op.between]: [9.5, 10.5] },
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
	});

	describe('Build String Query Tests', () => {
		describe('No Modifier Tests', () => {
			test('Should return case and accent insensitive regex matching start of string for input target value', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'Evé',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'string', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										name: 'foo',
										value: { [Op.iRegexp]: '^Eve' },
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('contains Modifier Tests', () => {
			test('Should return case and accent insensitive regex matching any part of string for input target value', () => {
				const req = {
					method: 'GET',
					query: {
						'foo:contains': 'Evê',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'string', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										name: 'foo',
										value: { [Op.iLike]: 'Eve' },
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('exact Modifier Tests', () => {
			test('Should return case and accent sensitive regex exactly matching input target value', () => {
				const req = {
					method: 'GET',
					query: {
						'foo:exact': 'Evë',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'string', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										name: 'foo',
										value: 'Evë',
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
	});

	describe('Build Quantity Query Tests', () => {
		describe('eq Modifier Tests', () => {
			test('Should return range with upper lower bounds equal to +/- 0.5 given an integer quantity of SI unit', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eq1||kg',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'quantity', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										name: 'foo.value',
										value: {
											[Op.between]: [0.5, 1.5],
										},
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return range with upper lower bounds equal to +/- 0.5 * the most significant digit of a given SI quantity', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'eq1.00||kg',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'quantity', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										name: 'foo.value',
										value: {
											[Op.between]: [0.995, 1.005],
										},
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test(
				'Should return range with upper lower bounds equal to +/- 0.5 * the most significant digit of a given number ' +
					'converted to SI units',
				() => {
					const req = {
						method: 'GET',
						query: {
							foo: 'eq20.00||mg',
						},
					};
					const parameterDefinitions = {
						foo: { type: 'quantity', xpath: 'Resource.foo' },
					};
					const includeArchived = false;
					let { errors, query } = qb.buildSearchQuery({
						req,
						parameterDefinitions,
						includeArchived,
					});
					const expectedResult = {
						where: {
							[Op.and]: [
								{
									[Op.or]: [
										{
											name: 'foo.value',
											value: {
												[Op.between]: [0.000019995, 0.000020005],
											},
										},
									],
								},
							],
						},
					};
					expect(errors).toHaveLength(0);
					expect(query).toEqual(expectedResult);
				},
			);
		});
		describe('ne Modifier Tests', () => {
			test('Should return $or that fully excludes range with upper lower bounds equal to +/- 0.5 given an integer quantity of SI unit', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ne1||kg',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'quantity', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										name: 'foo.value',
										value: {
											[Op.notBetween]: [0.5, 1.5],
										},
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test(
				'Should return $or that fully excludes range with upper lower bounds equal to +/- 0.5 * the most significant ' +
					'digit given a SI quantity with significant decimal places.',
				() => {
					const req = {
						method: 'GET',
						query: {
							foo: 'ne1.00||kg',
						},
					};
					const parameterDefinitions = {
						foo: { type: 'quantity', xpath: 'Resource.foo' },
					};
					const includeArchived = false;
					let { errors, query } = qb.buildSearchQuery({
						req,
						parameterDefinitions,
						includeArchived,
					});
					const expectedResult = {
						where: {
							[Op.and]: [
								{
									[Op.or]: [
										{
											name: 'foo.value',
											value: {
												[Op.notBetween]: [0.995, 1.005],
											},
										},
									],
								},
							],
						},
					};
					expect(errors).toHaveLength(0);
					expect(query).toEqual(expectedResult);
				},
			);
			test(
				'Should return $or that fully excludes range with upper lower bounds equal to +/- 0.5 * the most significant ' +
					'digit given a quantity converted to SI units.',
				() => {
					const req = {
						method: 'GET',
						query: {
							foo: 'ne20.00||mg',
						},
					};
					const parameterDefinitions = {
						foo: { type: 'quantity', xpath: 'Resource.foo' },
					};
					const includeArchived = false;
					let { errors, query } = qb.buildSearchQuery({
						req,
						parameterDefinitions,
						includeArchived,
					});
					const expectedResult = {
						where: {
							[Op.and]: [
								{
									[Op.or]: [
										{
											name: 'foo.value',
											value: {
												[Op.notBetween]: [0.000019995, 0.000020005],
											},
										},
									],
								},
							],
						},
					};
					expect(errors).toHaveLength(0);
					expect(query).toEqual(expectedResult);
				},
			);
		});
		describe('lt, le, gt, ge Modifier Tests', () => {
			test('Should return $lt a given target value in SI units', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'lt2.4||kg',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'quantity', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										name: 'foo.value',
										value: {
											[Op.lt]: 2.4,
										},
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return $lt a given target value converted to SI units', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'lt2.4||mg',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'quantity', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										name: 'foo.value',
										value: {
											[Op.lt]: 0.0000024,
										},
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return $lte a given target value in SI units', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'le2.4||kg',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'quantity', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										name: 'foo.value',
										value: {
											[Op.lte]: 2.4,
										},
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return $lte a given target value converted to SI units', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'le2.4||mg',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'quantity', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										name: 'foo.value',
										value: {
											[Op.lte]: 0.0000024,
										},
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return $gt a given target value in SI units', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'gt2.4||kg',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'quantity', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										name: 'foo.value',
										value: {
											[Op.gt]: 2.4,
										},
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return $gt a given target value converted to SI units', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'gt2.4||mg',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'quantity', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										name: 'foo.value',
										value: {
											[Op.gt]: 0.0000024,
										},
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return $gte a given target value in SI units', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ge2.4||kg',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'quantity', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										name: 'foo.value',
										value: {
											[Op.gte]: 2.4,
										},
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return $gte a given target value converted to SI units', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ge2.4||mg',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'quantity', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										name: 'foo.value',
										value: {
											[Op.gte]: 0.0000024,
										},
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('ap Prefix Tests', () => {
			test('Should return range with upper lower bounds equal to +/- 10% given an integer quantity of SI unit', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'ap1||kg',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'quantity', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										name: 'foo.value',
										value: {
											[Op.between]: [0.9, 1.1],
										},
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test(
				'Should return range with upper lower bounds equal to +/- 10% given a SI quantity with significant decimal ' +
					'places.',
				() => {
					const req = {
						method: 'GET',
						query: {
							foo: 'ap1.00||kg',
						},
					};
					const parameterDefinitions = {
						foo: { type: 'quantity', xpath: 'Resource.foo' },
					};
					const includeArchived = false;
					let { errors, query } = qb.buildSearchQuery({
						req,
						parameterDefinitions,
						includeArchived,
					});
					const expectedResult = {
						where: {
							[Op.and]: [
								{
									[Op.or]: [
										{
											name: 'foo.value',
											value: {
												[Op.between]: [0.9, 1.1],
											},
										},
									],
								},
							],
						},
					};
					expect(errors).toHaveLength(0);
					expect(query).toEqual(expectedResult);
				},
			);
			//TODO: This seems a bit off - come back and verify calculation.
			test(
				'Should return range with upper lower bounds equal to +/- 10% * the most significant given a quantity' +
					' converted to SI units.',
				() => {
					const req = {
						method: 'GET',
						query: {
							foo: 'ap20.00||mg',
						},
					};
					const parameterDefinitions = {
						foo: { type: 'quantity', xpath: 'Resource.foo' },
					};
					const includeArchived = false;
					let { errors, query } = qb.buildSearchQuery({
						req,
						parameterDefinitions,
						includeArchived,
					});
					const expectedResult = {
						where: {
							[Op.and]: [
								{
									[Op.or]: [
										{
											name: 'foo.value',
											value: {
												[Op.between]: [0.000018, 0.000022],
											},
										},
									],
								},
							],
						},
					};
					expect(errors).toHaveLength(0);
					expect(query).toEqual(expectedResult);
				},
			);
		});
		describe('System Parameter Tests', () => {
			test(
				'Should return $and with range with upper lower bounds equal to +/- 0.5 given an integer quantity of SI unit AND ' +
					'the provided system',
				() => {
					const req = {
						method: 'GET',
						query: {
							foo: 'eq1|http://unitsofmeasure.org|kg',
						},
					};
					const parameterDefinitions = {
						foo: { type: 'quantity', xpath: 'Resource.foo' },
					};
					const includeArchived = false;
					let { errors, query } = qb.buildSearchQuery({
						req,
						parameterDefinitions,
						includeArchived,
					});
					const expectedResult = {
						where: {
							[Op.and]: [
								{
									[Op.or]: [
										{
											[Op.and]: [
												{
													name: 'foo.value',
													value: {
														[Op.between]: [0.5, 1.5],
													},
												},
												{
													name: 'foo.system',
													value: 'http://unitsofmeasure.org',
												},
											],
										},
									],
								},
							],
						},
					};
					expect(errors).toHaveLength(0);
					expect(query).toEqual(expectedResult);
				},
			);
		});
	});

	describe('Build URI Query Tests', () => {
		describe('above Prefix Tests', () => {
			test('Should return regex query matching anything ending with the given input string', () => {
				const req = {
					method: 'GET',
					query: {
						'foo:above': 'endWithMe',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'uri', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										name: 'foo',
										value: {
											[Op.endsWith]: 'endWithMe',
										},
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('below Prefix Tests', () => {
			test('Should return regex query matching anything starting with the given input string', () => {
				const req = {
					method: 'GET',
					query: {
						'foo:below': 'startWithMe',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'uri', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										name: 'foo',
										value: {
											[Op.startsWith]: 'startWithMe',
										},
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should implicitly use below suffix if value ends with trailing slash.', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'startWithMe/',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'uri', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										name: 'foo',
										value: {
											[Op.startsWith]: 'startWithMe/',
										},
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should throw an error if given a urn with a suffix', () => {
				const req = {
					method: 'GET',
					query: {
						'foo:above': 'urn:oid:1.2.3.4.5',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'uri', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				expect(errors).toHaveLength(1);
				expect(errors[0].message).toContain(
					"Search modifiers are not supported for parameter 'foo' as a URN of type uri",
				);
			});
		});
		describe('no Prefix Tests', () => {
			test('Should return regex query matching anything exactly matching given input string', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'equalMe',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'uri', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					where: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										name: 'foo',
										value: 'equalMe',
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
	});

	/** TODO: Exists does not work yet.*/

	describe('Build Reference Query Tests', () => {
		test('Should return a query with the [parameter].reference equal to the supplied value of format [type]/[id]', () => {
			const req = {
				method: 'GET',
				query: {
					foo: 'Patient/123',
				},
			};
			const parameterDefinitions = {
				foo: { type: 'reference', xpath: 'Resource.foo' },
			};
			const includeArchived = false;
			let { errors, query } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			const expectedResult = {
				where: {
					[Op.and]: [
						{
							[Op.or]: [
								{
									name: 'foo.reference',
									value: 'Patient/123',
								},
							],
						},
					],
				},
			};
			expect(errors).toHaveLength(0);
			expect(query).toEqual(expectedResult);
		});
		test('Should return a query with the [parameter].reference equal to the supplied value of format http.*/[type]/[id]', () => {
			const req = {
				method: 'GET',
				query: {
					foo: 'http://example.fhir.org/foo/bar/Patient/123',
				},
			};
			const parameterDefinitions = {
				foo: { type: 'reference', xpath: 'Resource.foo' },
			};
			const includeArchived = false;
			let { errors, query } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			const expectedResult = {
				where: {
					[Op.and]: [
						{
							[Op.or]: [
								{
									name: 'foo.reference',
									value: 'Patient/123',
								},
							],
						},
					],
				},
			};
			expect(errors).toHaveLength(0);
			expect(query).toEqual(expectedResult);
		});
	});

	describe('Build And/Or Query Tests', () => {
		test('Should return a query that matches foo AND bar', () => {
			const req = {
				method: 'GET',
				query: {
					foo: ['foo', 'bar'],
				},
			};
			const parameterDefinitions = {
				foo: { type: 'string', xpath: 'Resource.foo' },
			};
			const includeArchived = false;
			let { errors, query } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			const expectedResult = {
				where: {
					[Op.and]: [
						{
							[Op.or]: [
								{
									name: 'foo',
									value: {
										[Op.iRegexp]: '^foo',
									},
								},
							],
						},
						{
							[Op.or]: [
								{
									name: 'foo',
									value: {
										[Op.iRegexp]: '^bar',
									},
								},
							],
						},
					],
				},
			};
			expect(errors).toHaveLength(0);
			expect(query).toEqual(expectedResult);
		});
		test('Should return a query that matches foo AND (bar OR baz)', () => {
			const req = {
				method: 'GET',
				query: {
					foo: ['foo', 'bar,baz'],
				},
			};
			const parameterDefinitions = {
				foo: { type: 'string', xpath: 'Resource.foo' },
			};
			const includeArchived = false;
			let { errors, query } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			const expectedResult = {
				where: {
					[Op.and]: [
						{
							[Op.or]: [
								{
									name: 'foo',
									value: {
										[Op.iRegexp]: '^foo',
									},
								},
							],
						},
						{
							[Op.or]: [
								{
									name: 'foo',
									value: {
										[Op.iRegexp]: '^bar',
									},
								},
								{
									name: 'foo',
									value: {
										[Op.iRegexp]: '^baz',
									},
								},
							],
						},
					],
				},
			};
			expect(errors).toHaveLength(0);
			expect(query).toEqual(expectedResult);
		});
	});

	describe('Build Token Query Tests', () => {
		describe('Coding Token Tests', () => {
			test('Should return an and query with 1 equal to condition when given just a system', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar|',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'Coding', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					tokens: {
						[Op.and]: [
							{ [Op.or]: [{ [Op.and]: [{ name: 'foo' }, { system: 'bar' }] }] },
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an and query with 1 equal to condition when given just a code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'Coding', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					tokens: {
						[Op.and]: [
							{ [Op.or]: [{ [Op.and]: [{ name: 'foo' }, { code: 'bar' }] }] },
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an and query with 1 equal to condition when given just a code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: '|bar',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'Coding', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					tokens: {
						[Op.and]: [
							{ [Op.or]: [{ [Op.and]: [{ name: 'foo' }, { code: 'bar' }] }] },
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an and query with 2 equal to conditions when given a system and code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar|baz',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'Coding', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					tokens: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											{ system: 'bar' },
											{ code: 'baz' },
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('CodeableConcept Token Tests', () => {
			test('Should return an and query with 1 equal to condition when given just a system', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar|',
					},
				};
				const parameterDefinitions = {
					foo: {
						type: 'token',
						fhirtype: 'CodeableConcept',
						xpath: 'Resource.foo',
					},
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					tokens: {
						[Op.and]: [
							{ [Op.or]: [{ [Op.and]: [{ name: 'foo' }, { system: 'bar' }] }] },
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an and query with 1 equal to condition when given just a code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar',
					},
				};
				const parameterDefinitions = {
					foo: {
						type: 'token',
						fhirtype: 'CodeableConcept',
						xpath: 'Resource.foo',
					},
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					tokens: {
						[Op.and]: [
							{ [Op.or]: [{ [Op.and]: [{ name: 'foo' }, { code: 'bar' }] }] },
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an and query with 2 equal to conditions when given a system and code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar|baz',
					},
				};
				const parameterDefinitions = {
					foo: {
						type: 'token',
						fhirtype: 'CodeableConcept',
						xpath: 'Resource.foo',
					},
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					tokens: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											{ system: 'bar' },
											{ code: 'baz' },
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('Identifier Token Tests', () => {
			test('Should return an and query with 1 equal to condition when given just a system', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar|',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'Identifier', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					tokens: {
						[Op.and]: [
							{ [Op.or]: [{ [Op.and]: [{ name: 'foo' }, { system: 'bar' }] }] },
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an and query with 1 equal to condition when given just a code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'Identifier', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					tokens: {
						[Op.and]: [
							{ [Op.or]: [{ [Op.and]: [{ name: 'foo' }, { code: 'bar' }] }] },
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an and query with 2 equal to conditions when given a system and code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar|baz',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'Identifier', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					tokens: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											{ system: 'bar' },
											{ code: 'baz' },
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('ContactPoint Token Tests', () => {
			test('Should return an or query with an equal to condition for each of the ContactPoint fields given a code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar',
					},
				};
				const parameterDefinitions = {
					foo: {
						type: 'token',
						fhirtype: 'ContactPoint',
						xpath: 'Resource.foo',
					},
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					tokens: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [{ name: 'foo' }, { code: 'bar' }],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an or query with an equal to condition for each of the ContactPoint fields given a code |', () => {
				const req = {
					method: 'GET',
					query: {
						foo: '|bar',
					},
				};
				const parameterDefinitions = {
					foo: {
						type: 'token',
						fhirtype: 'ContactPoint',
						xpath: 'Resource.foo',
					},
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					tokens: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [{ name: 'foo' }, { code: 'bar' }],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an or query with an equal to condition for each of the ContactPoint fields given two | codes', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar|baz',
					},
				};
				const parameterDefinitions = {
					foo: {
						type: 'token',
						fhirtype: 'ContactPoint',
						xpath: 'Resource.foo',
					},
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					tokens: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											{ system: 'bar' },
											{ code: 'baz' },
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('code Token Tests', () => {
			test('Should return an equal to query given a code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'code', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					tokens: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [{ name: 'foo' }, { code: 'bar' }],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an equal to query given a code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: '|bar',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'code', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					tokens: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [{ name: 'foo' }, { code: 'bar' }],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an equal to query given a system and code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar|baz',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'code', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					tokens: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											{ system: 'bar' },
											{ code: 'baz' },
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('boolean Token Tests', () => {
			test('Should throw an error if given just a system and no code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar|',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'boolean', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				expect(errors).toHaveLength(1);
				expect(errors[0].message).toContain(
					'Type mismatch, expected boolean for parameter foo',
				);
			});
			test('Should throw an error if given just a non boolean code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'boolean', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				expect(errors).toHaveLength(1);
				expect(errors[0].message).toContain(
					'Type mismatch, expected boolean for parameter foo',
				);
			});
			test('Should return an equal to query given a code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'true',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'boolean', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					tokens: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [{ name: 'foo' }, { code: 'true' }],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an equal to query given a code |', () => {
				const req = {
					method: 'GET',
					query: {
						foo: '|false',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'boolean', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					tokens: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [{ name: 'foo' }, { code: 'false' }],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an equal to query given a system and code (ignore the system)', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar|false',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'boolean', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					tokens: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											{ system: 'bar' },
											{ code: 'false' },
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('uri Token Tests', () => {
			test('Should return an equal to query given a code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'uri', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					tokens: {
						[Op.and]: [
							{ [Op.or]: [{ [Op.and]: [{ name: 'foo' }, { code: 'bar' }] }] },
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an equal to query given a code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: '|bar',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'uri', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					tokens: {
						[Op.and]: [
							{ [Op.or]: [{ [Op.and]: [{ name: 'foo' }, { code: 'bar' }] }] },
						],
					},
				};

				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an equal to query given a system and code (ignore the system)', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar|baz',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'uri', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					tokens: {
						[Op.and]: [
							{ [Op.or]: [{ [Op.and]: [{ name: 'foo' }, { code: 'baz' }] }] },
						],
					},
				};

				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('string Token Tests', () => {
			test('Should return an equal to query given a code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'string', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					tokens: {
						[Op.and]: [
							{ [Op.or]: [{ [Op.and]: [{ name: 'foo' }, { code: 'bar' }] }] },
						],
					},
				};

				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an equal to query given a code |', () => {
				const req = {
					method: 'GET',
					query: {
						foo: '|bar',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'string', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					tokens: {
						[Op.and]: [
							{ [Op.or]: [{ [Op.and]: [{ name: 'foo' }, { code: 'bar' }] }] },
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
			test('Should return an equal to query given a system and code', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar|baz',
					},
				};
				const parameterDefinitions = {
					foo: { type: 'token', fhirtype: 'string', xpath: 'Resource.foo' },
				};
				const includeArchived = false;
				let { errors, query } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				const expectedResult = {
					tokens: {
						[Op.and]: [
							{
								[Op.or]: [
									{
										[Op.and]: [
											{ name: 'foo' },
											{ system: 'bar' },
											{ code: 'baz' },
										],
									},
								],
							},
						],
					},
				};
				expect(errors).toHaveLength(0);
				expect(query).toEqual(expectedResult);
			});
		});
		describe('invalid fhirtype Token Tests', () => {
			test('Should throw an error if given an unsupported fhirtype', () => {
				const req = {
					method: 'GET',
					query: {
						foo: 'bar',
					},
				};
				const parameterDefinitions = {
					foo: {
						type: 'token',
						fhirtype: 'unsupported',
						xpath: 'Resource.foo',
					},
				};
				const includeArchived = false;
				let { errors } = qb.buildSearchQuery({
					req,
					parameterDefinitions,
					includeArchived,
				});
				expect(errors).toHaveLength(1);
				expect(errors[0].message).toContain(
					"Unsupported fhirtype 'unsupported' supplied for token parameter 'foo'",
				);
			});
		});
	});

	describe('Error Handling Tests', () => {
		test('Should throw and catch an error and add it to the errors array if a parameter is invalid.', () => {
			const req = {
				method: 'GET',
				query: {
					foo: 'foo',
				},
			};
			const parameterDefinitions = {
				foo: { type: 'number', xpath: 'Resource.foo' },
			};
			const includeArchived = false;
			let { errors } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			expect(errors).toHaveLength(1);
			expect(errors[0].message).toContain('expected number for parameter foo');
		});
		test('Should throw and catch an error and add it to the errors array if a parameter is not defined in the config.', () => {
			const req = {
				method: 'GET',
				query: {
					foo: 'foo',
				},
			};
			const parameterDefinitions = {
				bar: { type: 'number', xpath: 'Resource.foo' },
			};
			const includeArchived = false;
			let { errors } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			expect(errors).toHaveLength(1);
			expect(errors[0].message).toContain("Unknown parameter 'foo'");
		});
		test('Should throw and catch an error and add it to the errors array if a parameter has an invalid type.', () => {
			const req = {
				method: 'GET',
				query: {
					foo: 'foo',
				},
			};
			const parameterDefinitions = {
				foo: { type: 'unsupported', xpath: 'Resource.foo' },
			};
			const includeArchived = false;
			let { errors } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			expect(errors).toHaveLength(1);
			expect(errors[0].message).toContain(
				"Unsupported type 'unsupported' supplied for parameter 'foo'",
			);
		});
	});

	describe('Request Type Tests', () => {
		test('Should use the request query for parameters', () => {
			const req = {
				method: 'GET',
				query: {
					foo: 'eq2018-10-31T17:49:29.000Z',
				},
				body: {
					foo: 'eq2017-10-31T17:49:29.000Z',
				},
			};
			const parameterDefinitions = {
				foo: { type: 'date', xpath: 'Resource.foo' },
			};
			const includeArchived = false;
			let { errors, query } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			const expectedResult = {
				where: {
					[Op.and]: [
						{
							[Op.or]: [
								{
									[Op.and]: [
										{ name: 'foo' },
										formDateComparison('=', '2018-10-31T17:49:29.000Z'),
									],
								},
							],
						},
					],
				},
			};
			expect(errors).toHaveLength(0);
			expect(query).toEqual(expectedResult);
		});
		test('Should use the request body for parameters', () => {
			const req = {
				method: 'POST',
				query: {
					foo: 'eq2018-10-31T17:49:29.000Z',
				},
				body: {
					foo: 'eq2017-10-31T17:49:29.000Z',
				},
			};
			const parameterDefinitions = {
				foo: { type: 'date', xpath: 'Resource.foo' },
			};
			const includeArchived = false;
			let { errors, query } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			const expectedResult = {
				where: {
					[Op.and]: [
						{
							[Op.or]: [
								{
									[Op.and]: [
										{ name: 'foo' },
										formDateComparison('=', '2017-10-31T17:49:29.000Z'),
									],
								},
							],
						},
					],
				},
			};
			expect(errors).toHaveLength(0);
			expect(query).toEqual(expectedResult);
		});
		test('Should merge the request body with request.params for parameters', () => {
			const req = {
				method: 'POST',
				body: {
					foo: 'eq2017-10-31T17:49:29.000Z',
				},
				params: {
					bar: 'eq2018-10-31T17:49:29.000Z',
				},
			};
			const parameterDefinitions = {
				foo: { type: 'date', xpath: 'Resource.foo' },
				bar: { type: 'date', xpath: 'Resource.bar' },
			};
			const includeArchived = false;
			let { errors, query } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			const expectedResult = {
				where: {
					[Op.and]: [
						{
							[Op.or]: [
								{
									[Op.and]: [
										{ name: 'foo' },
										formDateComparison('=', '2017-10-31T17:49:29.000Z'),
									],
								},
							],
						},
						{
							[Op.or]: [
								{
									[Op.and]: [
										{ name: 'bar' },
										formDateComparison('=', '2018-10-31T17:49:29.000Z'),
									],
								},
							],
						},
					],
				},
			};
			expect(errors).toHaveLength(0);
			expect(query).toEqual(expectedResult);
		});
		test('Should throw an error for unsupported request types', () => {
			const req = {
				method: 'PUT',
				query: {
					foo: 'eq2018-10-31T17:49:29.000Z',
				},
			};
			const parameterDefinitions = {
				foo: { type: 'date', xpath: 'Resource.foo' },
			};
			const includeArchived = false;
			let { errors } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			expect(errors).toHaveLength(1);
			expect(errors[0].message).toContain("Unsupported request method 'PUT'");
		});
		test('Should throw an error for unsupported modifiers', () => {
			const req = {
				method: 'GET',
				query: {
					'foo:unsupportedModifier': 'bar',
				},
			};
			const parameterDefinitions = {
				foo: { type: 'string', xpath: 'Resource.foo' },
			};
			const includeArchived = false;
			let { errors } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			expect(errors).toHaveLength(1);
			expect(errors[0].message).toContain(
				"Search modifier 'unsupportedModifier' is not currently supported",
			);
		});
	});

	describe('Global Parameter Query Tests', () => {
		test('Test for global param _id', () => {
			const req = {
				method: 'GET',
				query: {
					_id: 'foo',
				},
			};
			const parameterDefinitions = undefined;
			const includeArchived = false;
			let { query, errors } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			// [Op.and]: [{ name: 'id' }, { code: 'foo' }],

			const expectedResult = {
				tokens: {
					[Op.and]: [
						{ [Op.or]: [{ [Op.and]: [{ name: 'id' }, { code: 'foo' }] }] },
					],
				},
			};
			expect(errors).toHaveLength(0);
			expect(query).toEqual(expectedResult);
		});
		test('Test for global param _lastUpdated', () => {
			const req = {
				method: 'GET',
				query: {
					_lastUpdated: '2018-10-31T17:49:29.000Z',
				},
			};
			const parameterDefinitions = undefined;
			const includeArchived = false;
			let { query, errors } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			const expectedResult = {
				where: {
					[Op.and]: [
						{
							[Op.or]: [
								{
									[Op.and]: [
										{ name: 'meta.lastUpdated' },
										formDateComparison('=', '2018-10-31T17:49:29.000Z'),
									],
								},
							],
						},
					],
				},
			};
			expect(errors).toHaveLength(0);
			expect(query).toEqual(expectedResult);
		});
		test('Should be able to initialize a new qb without supplying global parameters', () => {
			const noGlobalQB = new QueryBuilder({
				packageName: '../fhir-qb-mongo/index.js',
			});
			expect(noGlobalQB).toBeDefined();
		});
	});

	/** TODO: Look into _count param. Currently not handling it. Search transformations not implemented. */

	/** TODO: Paging is currently handled in the server - think about migrating this?
	/**  We would just need to calculate the offset + limit. */

	describe('Parameter Definition Tests', () => {
		test('TODO - test multiple xpaths', () => {
			const req = {
				method: 'GET',
				query: {
					foo: 'Evé',
				},
			};
			const parameterDefinitions = {
				foo: { type: 'string', xpath: ['Resource.foo', 'Resource.bar'] },
			};
			const includeArchived = false;
			let { errors, query } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			const expectedResult = {
				where: {
					[Op.and]: [
						{
							[Op.or]: [
								{
									name: 'foo',
									value: {
										[Op.iRegexp]: '^Eve',
									},
								},
								{
									name: 'bar',
									value: {
										[Op.iRegexp]: '^Eve',
									},
								},
							],
						},
					],
				},
			};
			expect(errors).toHaveLength(0);
			expect(query).toEqual(expectedResult);
		});
		test('Should return a query that matches foo AND (bar OR baz) in field foo or qux', () => {
			const req = {
				method: 'GET',
				query: {
					foo: ['foo', 'bar,baz'],
				},
			};
			const parameterDefinitions = {
				foo: { type: 'string', xpath: ['Resource.foo', 'Resource.qux'] },
			};
			const includeArchived = false;
			let { errors, query } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			const expectedResult = {
				where: {
					[Op.and]: [
						{
							[Op.or]: [
								{
									name: 'foo',
									value: {
										[Op.iRegexp]: '^foo',
									},
								},
								{
									name: 'qux',
									value: {
										[Op.iRegexp]: '^foo',
									},
								},
							],
						},
						{
							[Op.or]: [
								{
									name: 'foo',
									value: {
										[Op.iRegexp]: '^bar',
									},
								},
								{
									name: 'foo',
									value: {
										[Op.iRegexp]: '^baz',
									},
								},
								{
									name: 'qux',
									value: {
										[Op.iRegexp]: '^bar',
									},
								},
								{
									name: 'qux',
									value: {
										[Op.iRegexp]: '^baz',
									},
								},
							],
						},
					],
				},
			};
			expect(errors).toHaveLength(0);
			expect(query).toEqual(expectedResult);
		});
	});
});

describe('Constructor Tests', () => {
	beforeAll(() => {
		// Do this for tests only
		moment.suppressDeprecationWarnings = true;
	});
	const Sequelize = require('sequelize');
	const Op = Sequelize.Op;
	const globalParameterDefinitions = {
		_content: {
			type: 'string',
			fhirtype: 'string',
			xpath: '',
			definition: 'http://hl7.org/fhir/SearchParameter/Resource-content',
			description: 'Search on the entire content of the resource',
			modifier: 'missing,exact,contains',
		},
		_id: {
			type: 'token',
			fhirtype: 'token',
			xpath: 'Resource.id',
			definition: 'http://hl7.org/fhir/SearchParameter/Resource-id',
			description: 'Logical id of this artifact',
			modifier: 'missing,text,not,in,not-in,below,above,ofType',
		},
		_lastUpdated: {
			type: 'date',
			fhirtype: 'date',
			xpath: 'Resource.meta.lastUpdated',
			definition: 'http://hl7.org/fhir/SearchParameter/Resource-lastUpdated',
			description: 'When the resource version last changed',
			modifier: 'missing',
		},
		_profile: {
			type: 'reference',
			fhirtype: 'reference',
			xpath: 'Resource.meta.profile',
			definition: 'http://hl7.org/fhir/SearchParameter/Resource-profile',
			description: 'Profiles this resource claims to conform to',
			modifier: 'missing,type,identifier',
		},
		_query: {
			type: 'token',
			fhirtype: 'token',
			xpath: '',
			definition: 'http://hl7.org/fhir/SearchParameter/Resource-query',
			description:
				'A custom search profile that describes a specific defined query operation',
			modifier: 'missing,text,not,in,not-in,below,above,ofType',
		},
		_security: {
			type: 'token',
			fhirtype: 'token',
			xpath: 'Resource.meta.security',
			definition: 'http://hl7.org/fhir/SearchParameter/Resource-security',
			description: 'Security Labels applied to this resource',
			modifier: 'missing,text,not,in,not-in,below,above,ofType',
		},
		_source: {
			type: 'uri',
			fhirtype: 'uri',
			xpath: 'Resource.meta.source',
			definition: 'http://hl7.org/fhir/SearchParameter/Resource-source',
			description: 'Identifies where the resource comes from',
			modifier: 'missing,below,above',
		},
		_tag: {
			type: 'token',
			fhirtype: 'token',
			xpath: 'Resource.meta.tag',
			definition: 'http://hl7.org/fhir/SearchParameter/Resource-tag',
			description: 'Tags applied to this resource',
			modifier: 'missing,text,not,in,not-in,below,above,ofType',
		},
	};
	describe('columnIdentifierStrategy Tests', () => {
		test('Should throw error when given unsupported columnIdentifierStrategy', () => {
			let expectedError = new Error(
				"Supplied columnIdentifierStrategy value 'foo' not one of currently " +
					'supported columnIdentifierStrategy values: xpath, parameter',
			);
			let qb;
			let observedError;
			try {
				qb = new QueryBuilder({
					packageName: '../fhir-qb-sql/index.js',
					globalParameterDefinitions,
					implementationParameters: { archivedParamPath: 'meta._isArchived' },
					columnIdentifierStrategy: 'foo',
				});
			} catch (err) {
				observedError = err;
			}
			expect(observedError).toEqual(expectedError);
			expect(qb).toBe(undefined);
		});
		test('Should use parameter instead of xpath when given columnIdentifierStrategy: parameter', () => {
			let qb = new QueryBuilder({
				packageName: '../fhir-qb-sql/index.js',
				globalParameterDefinitions,
				implementationParameters: { archivedParamPath: 'meta._isArchived' },
				columnIdentifierStrategy: 'parameter',
			});
			const req = {
				method: 'GET',
				query: {
					foobar: 'eq100',
				},
			};
			const parameterDefinitions = {
				foobar: { type: 'number', xpath: 'Resource.foo' },
			};
			const includeArchived = false;
			let { errors, query } = qb.buildSearchQuery({
				req,
				parameterDefinitions,
				includeArchived,
			});
			const expectedResult = {
				where: {
					[Op.and]: [
						{
							[Op.or]: [
								{
									name: 'foobar',
									value: { [Op.between]: [99.5, 100.5] },
								},
							],
						},
					],
				},
			};
			expect(errors).toHaveLength(0);
			expect(query).toEqual(expectedResult);
		});
		test('packageName should default to fhir-qb-mongo if left out', () => {
			const qb = new QueryBuilder({
				globalParameterDefinitions,
				implementationParameters: { archivedParamPath: 'meta._isArchived' },
			});
			expect(qb).toBeTruthy();
		});
	});
});
