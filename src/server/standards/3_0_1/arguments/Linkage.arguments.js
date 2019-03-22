/**
 * @name exports
 * @static
 * @summary Arguments for the linkage query
 */
module.exports = {
	author: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Linkage.author',
		definition: 'http://hl7.org/fhir/SearchParameter/Linkage-author',
		description: 'Author of the Linkage',
	},
	item: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Linkage.item.resource',
		definition: 'http://hl7.org/fhir/SearchParameter/Linkage-item',
		description: 'Matches on any item in the Linkage',
	},
	source: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Linkage.item.resource',
		definition: 'http://hl7.org/fhir/SearchParameter/Linkage-source',
		description: "Matches on any item in the Linkage with a type of 'source'",
	},
};
