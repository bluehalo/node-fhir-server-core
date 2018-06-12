/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	AUTHOR: {
		name: 'author',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#linkage',
		documentation: 'Author of the Linkage',
	},
	ITEM: {
		name: 'item',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#linkage',
		documentation: 'Matches on any item in the Linkage',
	},
	SOURCE: {
		name: 'source',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#linkage',
		documentation: 'Matches on any item in the Linkage with a type of source',
	},
};
