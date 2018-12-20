module.exports = {
	AUTHOR: {
		name: 'author',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Linkage-author',
		documentation: 'Author of the Linkage.',
	},
	ITEM: {
		name: 'item',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Linkage-item',
		documentation: 'Matches on any item in the Linkage.',
	},
	SOURCE: {
		name: 'source',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Linkage-source',
		documentation: "Matches on any item in the Linkage with a type of 'source'.",
	},
};
