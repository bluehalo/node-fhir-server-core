const sqlQB = require('./index');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

describe('SQL Query Builder Tests', () => {
	describe('buildEqualToQuery Tests', () => {
		test('Should return SQL equals query given a key and a value', () => {
			const expectedResult = { name: 'foo', value: 'bar' };
			let observedResult = sqlQB.buildEqualToQuery({
				field: 'foo',
				value: 'bar',
			});
			expect(observedResult).toEqual(expectedResult);
		});
		test('Should return sequelize Not Equal query given a key, value, and invert = true', () => {
			const expectedResult = { name: 'foo', value: { [Op.ne]: 'bar' } };
			let observedResult = sqlQB.buildEqualToQuery({
				field: 'foo',
				value: 'bar',
				invert: true,
			});
			expect(observedResult).toEqual(expectedResult);
		});
		test('Should return sequelize Not Equal date query', () => {
			const expectedResult = {
				[Op.and]: [
					{ name: 'foo' },
					{
						attribute: { args: [{ col: 'value' }], fn: 'date' },
						comparator: '=',
						logic: 'bar',
					},
				],
			};
			let observedResult = sqlQB.buildEqualToQuery({
				field: 'foo',
				value: 'bar',
				isDate: true,
			});
			expect(observedResult).toEqual(expectedResult);
		});
		test('Should return sequelize Not Equal date query with invert = true', () => {
			const expectedResult = {
				[Op.and]: [
					{ name: 'foo' },
					{
						attribute: { args: [{ col: 'value' }], fn: 'date' },
						comparator: '!=',
						logic: 'bar',
					},
				],
			};
			let observedResult = sqlQB.buildEqualToQuery({
				field: 'foo',
				value: 'bar',
				isDate: true,
				invert: true,
			});
			expect(observedResult).toEqual(expectedResult);
		});
	});
	describe('buildComparatorQuery Tests', () => {
		test('Should return sequelize Greater Than query given a key, value, and gt', () => {
			const expectedResult = { name: 'foo', value: { [Op.gt]: 'bar' } };
			let observedResult = sqlQB.buildComparatorQuery({
				field: 'foo',
				value: 'bar',
				comparator: 'gt',
			});
			expect(observedResult).toEqual(expectedResult);
		});
		test('Should return SQL Greater Than query given a key, value, and ge', () => {
			const expectedResult = { name: 'foo', value: { [Op.gte]: 'bar' } };
			let observedResult = sqlQB.buildComparatorQuery({
				field: 'foo',
				value: 'bar',
				comparator: 'ge',
			});
			expect(observedResult).toEqual(expectedResult);
		});
		test('Should return SQL Less Than query given a key, value, and lt', () => {
			const expectedResult = { name: 'foo', value: { [Op.lt]: 'bar' } };
			let observedResult = sqlQB.buildComparatorQuery({
				field: 'foo',
				value: 'bar',
				comparator: 'lt',
			});
			expect(observedResult).toEqual(expectedResult);
		});
		test('Should return SQL Less Than or Equal query given a key, value, and le', () => {
			const expectedResult = { name: 'foo', value: { [Op.lte]: 'bar' } };
			let observedResult = sqlQB.buildComparatorQuery({
				field: 'foo',
				value: 'bar',
				comparator: 'le',
			});
			expect(observedResult).toEqual(expectedResult);
		});
		test('Should return SQL Greater Than query given a key, value, and sa', () => {
			const expectedResult = { name: 'foo', value: { [Op.gt]: 'bar' } };
			let observedResult = sqlQB.buildComparatorQuery({
				field: 'foo',
				value: 'bar',
				comparator: 'sa',
			});
			expect(observedResult).toEqual(expectedResult);
		});
		test('Should return SQL Less Than query given a key, value, and eb', () => {
			const expectedResult = { name: 'foo', value: { [Op.lt]: 'bar' } };
			let observedResult = sqlQB.buildComparatorQuery({
				field: 'foo',
				value: 'bar',
				comparator: 'eb',
			});
			expect(observedResult).toEqual(expectedResult);
		});
		test('Should return SQL Not Equal query given a key, value, and ne', () => {
			const expectedResult = { name: 'foo', value: { [Op.ne]: 'bar' } };
			let observedResult = sqlQB.buildComparatorQuery({
				field: 'foo',
				value: 'bar',
				comparator: 'ne',
			});
			expect(observedResult).toEqual(expectedResult);
		});
	});
	describe('buildOrQuery Tests', () => {
		test('Should return an OR of given queries', () => {
			const expectedResult = { [Op.or]: [{ foo: 'bar' }, { bar: 'foo' }] };
			let observedResult = sqlQB.buildOrQuery({
				queries: [{ foo: 'bar' }, { bar: 'foo' }],
			});
			expect(observedResult).toEqual(expectedResult);
		});
		test('Should return a NOR of given queries if invert option is true', () => {
			const expectedResult = {
				[Op.not]: { [Op.or]: [{ foo: 'bar' }, { bar: 'foo' }] },
			};
			let observedResult = sqlQB.buildOrQuery({
				queries: [{ foo: 'bar' }, { bar: 'foo' }],
				invert: true,
			});
			expect(observedResult).toEqual(expectedResult);
		});
	});
	describe('buildContainsQuery Tests', () => {
		test('Should return case sensitive match regex query', () => {
			const expectedResult = { name: 'foo', value: { [Op.like]: 'bar' } };
			let observedResult = sqlQB.buildContainsQuery({
				field: 'foo',
				value: 'bar',
				caseSensitive: true,
			});
			expect(observedResult).toEqual(expectedResult);
		});
		test('Should return case insensitive match regex query', () => {
			const expectedResult = { name: 'foo', value: { [Op.iLike]: 'bar' } };
			let observedResult = sqlQB.buildContainsQuery({
				field: 'foo',
				value: 'bar',
			});
			expect(observedResult).toEqual(expectedResult);
		});
	});
	describe('buildStartsWithQuery Tests', () => {
		test('Should return case sensitive front of word match regex query', () => {
			const expectedResult = { name: 'foo', value: { [Op.startsWith]: 'bar' } };
			let observedResult = sqlQB.buildStartsWithQuery({
				field: 'foo',
				value: 'bar',
				caseSensitive: true,
			});
			expect(observedResult).toEqual(expectedResult);
		});
		test('Should return case insensitive front of word match regex query', () => {
			const expectedResult = { name: 'foo', value: { [Op.iRegexp]: '^bar' } };
			let observedResult = sqlQB.buildStartsWithQuery({
				field: 'foo',
				value: 'bar',
			});
			expect(observedResult).toEqual(expectedResult);
		});
	});
	describe('buildEndsWithQuery Tests', () => {
		test('Should return case sensitive front of word match regex query', () => {
			const expectedResult = { name: 'foo', value: { [Op.endsWith]: 'bar' } };
			let observedResult = sqlQB.buildEndsWithQuery({
				field: 'foo',
				value: 'bar',
				caseSensitive: true,
			});
			expect(observedResult).toEqual(expectedResult);
		});
		test('Should return case insensitive front of word match regex query', () => {
			const expectedResult = { name: 'foo', value: { [Op.iRegexp]: 'bar$' } };
			let observedResult = sqlQB.buildEndsWithQuery({
				field: 'foo',
				value: 'bar',
			});
			expect(observedResult).toEqual(expectedResult);
		});
	});
	describe('buildExistsQuery Tests', () => {
		test('Should return a range query', () => {
			const expectedResult = 'NOT IMPLEMENTED';
			let observedResult = sqlQB.buildExistsQuery({
				field: 'foo',
				exists: true,
			});
			expect(observedResult).toEqual(expectedResult);
		});
	});
	describe('buildInRangeQuery Tests', () => {
		test('Should return a range query', () => {
			const expectedResult = { name: 'foo', value: { [Op.between]: [1, 10] } };
			let observedResult = sqlQB.buildInRangeQuery({
				field: 'foo',
				lowerBound: 1,
				upperBound: 10,
			});
			expect(observedResult).toEqual(expectedResult);
		});
		test('Should return an exclusive range query if given an invert flag', () => {
			const expectedResult = {
				name: 'foo',
				value: { [Op.notBetween]: [1, 10] },
			};
			let observedResult = sqlQB.buildInRangeQuery({
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
			const expectedResult = {};
			let observedResult = sqlQB.assembleSearchQuery({
				joinsToPerform: [],
				matchesToPerform: [],
				tokenMatches: [],
				searchResultTransformations: {},
				implementationParameters: { archivedParamPath: 'meta._isArchived' },
				includeArchived: false,
				pageNumber: 1,
				resultsPerPage: 10,
			});
			expect(observedResult).toEqual(expectedResult);
		});
		test('Should push lookups to front of pipeline if they are there', () => {
			const expectedResult = {};
			let observedResult = sqlQB.assembleSearchQuery({
				joinsToPerform: [{ from: 'foo', localKey: 'bar', foreignKey: 'baz' }],
				matchesToPerform: [],
				tokenMatches: [],
				searchResultTransformations: {},
				implementationParameters: { archivedParamPath: 'meta._isArchived' },
				includeArchived: false,
				pageNumber: 1,
				resultsPerPage: 10,
			});
			expect(observedResult).toEqual(expectedResult);
		});
		test('Should fill in empty matches with empty objects to keep queries valid', () => {
			const expectedResult = {};
			let observedResult = sqlQB.assembleSearchQuery({
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
			const expectedResult = {
				where: {
					[Op.and]: [{ [Op.or]: [{ foo: { [Op.gte]: 1, [Op.lte]: 10 } }] }],
				},
			};
			let observedResult = sqlQB.assembleSearchQuery({
				joinsToPerform: [],
				matchesToPerform: [[{ foo: { [Op.gte]: 1, [Op.lte]: 10 } }]],
				tokenMatches: [],
				searchResultTransformations: {},
				implementationParameters: { archivedParamPath: 'meta._isArchived' },
				includeArchived: false,
				pageNumber: 1,
				resultsPerPage: 10,
			});
			expect(observedResult).toEqual(expectedResult);
		});
		test("Should throw error about missing parameter 'archivedParameterPath'", () => {
			expect(() =>
				sqlQB.assembleSearchQuery({ implementationParameters: {} }),
			).toThrow(Error);
		});
	});
	describe('Should form date comparisons', () => {
		test('It should form date comparisons properly with default column name', () => {
			const comparator = '<=';
			const date = new Date('12-12-1990');
			const expectedResult = {
				attribute: { args: [{ col: 'value' }], fn: 'date' },
				comparator: '<=',
				logic: new Date('12-12-1990'),
			};
			let observedResult = sqlQB.formDateComparison(comparator, date);
			expect(observedResult).toEqual(expectedResult);
		});
		test('It should form date comparisons properly with supplied column', () => {
			const comparator = '<=';
			const date = new Date('12-12-1990');
			const colName = 'attribute';
			const expectedResult = {
				attribute: { args: [{ col: 'attribute' }], fn: 'date' },
				comparator: '<=',
				logic: new Date('12-12-1990'),
			};
			let observedResult = sqlQB.formDateComparison(comparator, date, colName);
			expect(observedResult).toEqual(expectedResult);
		});
	});
	describe('Should apply search result transformations to a query', () => {
		test('Should assign the appropriate search result transformations to a query', () => {
			const query = {};
			const searchResultTransformations = {
				_sort: 'birthdate',
				_count: 1,
			};
			const expectedResult = {
				order: [['birthdate', 'ASC']],
				limit: 1,
			};
			const observedResult = sqlQB.applySearchResultTransformations({
				query,
				searchResultTransformations,
			});
			expect(observedResult).toEqual(expectedResult);
		});
	});
	describe('Should handle sorting functions appropriately', () => {
		test('Should sort ascending for normal parameter', () => {
			const sortableParam = 'birthdate';
			const expectedResult = ['birthdate', 'ASC'];
			const observedResult = sqlQB.getSortOrder(sortableParam);
			expect(observedResult).toEqual(expectedResult);
		});
		test('Should sort descending for negative parameter', () => {
			const sortableParam = '-birthdate';
			const expectedResult = ['birthdate', 'DESC'];
			const observedResult = sqlQB.getSortOrder(sortableParam);
			expect(observedResult).toEqual(expectedResult);
		});
		test('Should parse a comma seperated list of strings properly', () => {
			const sortableParams = '-birthdate,_lastUpdated';
			const expectedResult = [['birthdate', 'DESC'], ['_lastUpdated', 'ASC']];
			const observedResult = sqlQB.parseSortQuery(sortableParams);
			expect(observedResult).toEqual(expectedResult);
		});
		test('Should transform a comma seperated list of strings properly', () => {
			const sortableParams = '-birthdate,_lastUpdated';
			const expectedResult = [['birthdate', 'DESC'], ['_lastUpdated', 'ASC']];
			const observedResult = sqlQB.supportedSearchTransformations._sort.transform(
				sortableParams,
			);
			expect(observedResult).toEqual(expectedResult);
		});
	});
	describe('Should handle limit queries appropriately', () => {
		test('Should transform a given value for limit queries appropriately', () => {
			const _countParam = '5';
			const expectedResult = '5';
			const observedResult = sqlQB.supportedSearchTransformations._count.transform(
				_countParam,
			);
			expect(observedResult).toEqual(expectedResult);
		});
	});
});
