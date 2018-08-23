module.exports = {
	AUTHOR: {
		name: 'Author',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Linkage-author',
		description: 'Author of the Linkage.',
	},
	ITEM: {
		name: 'Item',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Linkage-item',
		description: 'Matches on any item in the Linkage.',
	},
	SOURCE: {
		name: 'Source',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Linkage-source',
		description: 'Matches on any item in the Linkage with a type of \'source\'.',
	},
};
