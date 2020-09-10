const mongoQB = require('./index');

describe('Mongo Query Builder Tests', () => {
	describe('buildEqualToQuery Tests', () => {
		test('Should return mongo equals query given a key and a value', () => {
			const expectedResult = { foo: 'bar' };
			let observedResult = mongoQB.buildEqualToQuery({
				field: 'foo',
				value: 'bar',
			});
			expect(observedResult).toEqual(expectedResult);
		});
		test('Should return mongo $ne query given a key, value, and invert = true', () => {
			const expectedResult = { foo: { $ne: 'bar' } };
			let observedResult = mongoQB.buildEqualToQuery({
				field: 'foo',
				value: 'bar',
				invert: true,
			});
			expect(observedResult).toEqual(expectedResult);
		});
	});
	describe('buildComparatorQuery Tests', () => {
		test('Should return mongo $gt query given a key, value, and gt', () => {
			const expectedResult = { foo: { $gt: 'bar' } };
			let observedResult = mongoQB.buildComparatorQuery({
				field: 'foo',
				value: 'bar',
				comparator: 'gt',
			});
			expect(observedResult).toEqual(expectedResult);
		});
		test('Should return mongo $gte query given a key, value, and ge', () => {
			const expectedResult = { foo: { $gte: 'bar' } };
			let observedResult = mongoQB.buildComparatorQuery({
				field: 'foo',
				value: 'bar',
				comparator: 'ge',
			});
			expect(observedResult).toEqual(expectedResult);
		});
		test('Should return mongo $lt query given a key, value, and lt', () => {
			const expectedResult = { foo: { $lt: 'bar' } };
			let observedResult = mongoQB.buildComparatorQuery({
				field: 'foo',
				value: 'bar',
				comparator: 'lt',
			});
			expect(observedResult).toEqual(expectedResult);
		});
		test('Should return mongo $lte query given a key, value, and le', () => {
			const expectedResult = { foo: { $lte: 'bar' } };
			let observedResult = mongoQB.buildComparatorQuery({
				field: 'foo',
				value: 'bar',
				comparator: 'le',
			});
			expect(observedResult).toEqual(expectedResult);
		});
		test('Should return mongo $gt query given a key, value, and sa', () => {
			const expectedResult = { foo: { $gt: 'bar' } };
			let observedResult = mongoQB.buildComparatorQuery({
				field: 'foo',
				value: 'bar',
				comparator: 'sa',
			});
			expect(observedResult).toEqual(expectedResult);
		});
		test('Should return mongo $lt query given a key, value, and eb', () => {
			const expectedResult = { foo: { $lt: 'bar' } };
			let observedResult = mongoQB.buildComparatorQuery({
				field: 'foo',
				value: 'bar',
				comparator: 'eb',
			});
			expect(observedResult).toEqual(expectedResult);
		});
		test('Should return mongo $ne query given a key, value, and ne', () => {
			const expectedResult = { foo: { $ne: 'bar' } };
			let observedResult = mongoQB.buildComparatorQuery({
				field: 'foo',
				value: 'bar',
				comparator: 'ne',
			});
			expect(observedResult).toEqual(expectedResult);
		});
	});
	describe('buildOrQuery Tests', () => {
		test('Should return $or of given queries', () => {
			const expectedResult = { $or: [{ foo: 'bar' }, { bar: 'foo' }] };
			let observedResult = mongoQB.buildOrQuery({
				queries: [{ foo: 'bar' }, { bar: 'foo' }],
			});
			expect(observedResult).toEqual(expectedResult);
		});
		test('Should return $nor of given queries if invert option is true', () => {
			const expectedResult = { $nor: [{ foo: 'bar' }, { bar: 'foo' }] };
			let observedResult = mongoQB.buildOrQuery({
				queries: [{ foo: 'bar' }, { bar: 'foo' }],
				invert: true,
			});
			expect(observedResult).toEqual(expectedResult);
		});
	});
	describe('buildContainsQuery Tests', () => {
		test('Should return case sensitive match regex query', () => {
			const expectedResult = { foo: { $options: '', $regex: 'bar' } };
			let observedResult = mongoQB.buildContainsQuery({
				field: 'foo',
				value: 'bar',
				caseSensitive: true,
			});
			expect(observedResult).toEqual(expectedResult);
		});
		test('Should return case insensitive match regex query', () => {
			const expectedResult = { foo: { $options: 'i', $regex: 'bar' } };
			let observedResult = mongoQB.buildContainsQuery({
				field: 'foo',
				value: 'bar',
			});
			expect(observedResult).toEqual(expectedResult);
		});
	});
	describe('buildStartsWithQuery Tests', () => {
		test('Should return case sensitive front of word match regex query', () => {
			const expectedResult = { foo: { $options: '', $regex: '^bar' } };
			let observedResult = mongoQB.buildStartsWithQuery({
				field: 'foo',
				value: 'bar',
				caseSensitive: true,
			});
			expect(observedResult).toEqual(expectedResult);
		});
		test('Should return case insensitive front of word match regex query', () => {
			const expectedResult = { foo: { $options: 'i', $regex: '^bar' } };
			let observedResult = mongoQB.buildStartsWithQuery({
				field: 'foo',
				value: 'bar',
			});
			expect(observedResult).toEqual(expectedResult);
		});
	});
	describe('buildEndsWithQuery Tests', () => {
		test('Should return case sensitive front of word match regex query', () => {
			const expectedResult = { foo: { $options: '', $regex: 'bar$' } };
			let observedResult = mongoQB.buildEndsWithQuery({
				field: 'foo',
				value: 'bar',
				caseSensitive: true,
			});
			expect(observedResult).toEqual(expectedResult);
		});
		test('Should return case insensitive front of word match regex query', () => {
			const expectedResult = { foo: { $options: 'i', $regex: 'bar$' } };
			let observedResult = mongoQB.buildEndsWithQuery({
				field: 'foo',
				value: 'bar',
			});
			expect(observedResult).toEqual(expectedResult);
		});
	});
	describe('buildExistsQuery Tests', () => {
		test('Should return a range query', () => {
			const expectedResult = { foo: { $exists: true } };
			let observedResult = mongoQB.buildExistsQuery({
				field: 'foo',
				exists: true,
			});
			expect(observedResult).toEqual(expectedResult);
		});
	});
	describe('buildInRangeQuery Tests', () => {
		test('Should return a range query', () => {
			const expectedResult = { foo: { $gte: 1, $lte: 10 } };
			let observedResult = mongoQB.buildInRangeQuery({
				field: 'foo',
				lowerBound: 1,
				upperBound: 10,
			});
			expect(observedResult).toEqual(expectedResult);
		});
		test('Should return an exclusive range query if given an invert flag', () => {
			const expectedResult = {
				$or: [{ foo: { $lt: 1 } }, { foo: { $gt: 10 } }],
			};
			let observedResult = mongoQB.buildInRangeQuery({
				field: 'foo',
				lowerBound: 1,
				upperBound: 10,
				invert: true,
			});
			expect(observedResult).toEqual(expectedResult);
		});
	});
	describe('assembleSearchQuery Tests', () => {
		test('Should return empty pipeline (except for archival and paging) if no matches or joins to perform', () => {
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
			let observedResult = mongoQB.assembleSearchQuery({
				joinsToPerform: [],
				matchesToPerform: [],
				searchResultTransformations: {},
				implementationParameters: { archivedParamPath: 'meta._isArchived' },
				includeArchived: false,
				pageNumber: 1,
				resultsPerPage: 10,
			});
			expect(observedResult).toEqual(expectedResult);
		});
		test('Should push lookups to front of pipeline if they are there', () => {
			const expectedResult = [
				{
					$lookup: {
						as: 'foo',
						foreignField: 'baz',
						from: 'foo',
						localField: 'bar',
					},
				},
				{ $unwind: '$foo' },
				{ $project: { foo: 0 } },
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
			let observedResult = mongoQB.assembleSearchQuery({
				joinsToPerform: [{ from: 'foo', localKey: 'bar', foreignKey: 'baz' }],
				matchesToPerform: [],
				searchResultTransformations: {},
				implementationParameters: { archivedParamPath: 'meta._isArchived' },
				includeArchived: false,
				pageNumber: 1,
				resultsPerPage: 10,
			});
			expect(observedResult).toEqual(expectedResult);
		});
		test('Should fill in empty matches with empty objects to keep queries valid', () => {
			const expectedResult = [
				{ $match: { $and: [] } },
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
			let observedResult = mongoQB.assembleSearchQuery({
				joinsToPerform: [],
				matchesToPerform: [[]],
				tokenMatches: [],
				searchResultTransformations: {},
				implementationParameters: { archivedParamPath: 'meta._isArchived' },
				includeArchived: false,
				pageNumber: 1,
				resultsPerPage: 10,
			});
			expect(observedResult).toEqual(expectedResult);
		});
		test('Should handle matches appropriately', () => {
			const expectedResult = [
				{ $match: { $and: [{ $or: [{ foo: { $gte: 1, $lte: 10 } }] }] } },
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
			let observedResult = mongoQB.assembleSearchQuery({
				joinsToPerform: [],
				matchesToPerform: [[{ foo: { $gte: 1, $lte: 10 } }]],
				searchResultTransformations: {},
				implementationParameters: { archivedParamPath: 'meta._isArchived' },
				includeArchived: false,
				pageNumber: 1,
				resultsPerPage: 10,
			});
			expect(observedResult).toEqual(expectedResult);
		});
	});
	describe('Search Result Transformation Tests', () => {
		test('Should add $limit to the end of the pipeline when given _count parameter', () => {
			const expectedResult = [
				{ $match: { 'meta._isArchived': false } },
				{ $limit: 3 },
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
			let observedResult = mongoQB.assembleSearchQuery({
				joinsToPerform: [],
				matchesToPerform: [],
				searchResultTransformations: { _count: 3 },
				implementationParameters: { archivedParamPath: 'meta._isArchived' },
				includeArchived: false,
				pageNumber: 1,
				resultsPerPage: 10,
			});
			expect(observedResult).toEqual(expectedResult);
		});
	});
	describe('Paging Tests', () => {
		test('Should default to page 1 with no limits if resultsPerPage is undefined', () => {
			const expectedResult = [
				{
					$match: {
						'meta._isArchived': false,
					},
				},
				{
					$facet: {
						data: [{ $skip: 0 }],
						metadata: [
							{
								$count: 'total',
							},
							{
								$addFields: {
									numberOfPages: 1,
								},
							},
							{
								$addFields: {
									page: 1,
								},
							},
						],
					},
				},
			];
			let observedResult = mongoQB.assembleSearchQuery({
				joinsToPerform: [],
				matchesToPerform: [],
				searchResultTransformations: {},
				implementationParameters: { archivedParamPath: 'meta._isArchived' },
				includeArchived: false,
				pageNumber: 1,
			});
			expect(observedResult).toEqual(expectedResult);
		});
	});
	describe('Apply Archived Filter Tests', () => {
		test('Should throw an error if missing the required archivedParamPath from the implementation parameters', () => {
			let error;
			try {
				mongoQB.assembleSearchQuery({
					joinsToPerform: [],
					matchesToPerform: [],
					searchResultTransformations: {},
					implementationParameters: {},
					includeArchived: false,
					pageNumber: 1,
				});
			} catch (err) {
				error = err;
			}
			expect(error.message).toContain(
				"Missing required implementation parameter 'archivedParamPath'",
			);
		});
		test('Should return input query as is if we are not filtering out archived results', () => {
			const expectedResult = [
				{
					$facet: {
						data: [{ $skip: 0 }, { $limit: 10 }],
						metadata: [
							{
								$count: 'total',
							},
							{
								$addFields: {
									numberOfPages: { $ceil: { $divide: ['$total', 10] } },
								},
							},
							{
								$addFields: {
									page: 1,
								},
							},
						],
					},
				},
			];
			let observedResult = mongoQB.assembleSearchQuery({
				joinsToPerform: [],
				matchesToPerform: [],
				searchResultTransformations: {},
				implementationParameters: { archivedParamPath: 'meta._isArchived' },
				includeArchived: true,
				pageNumber: 1,
				resultsPerPage: 10,
			});
			expect(observedResult).toEqual(expectedResult);
		});
	});
});
