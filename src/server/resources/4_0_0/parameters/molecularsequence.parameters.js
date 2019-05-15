/**
 * @name exports
 * @static
 * @summary Arguments for the molecularsequence query
 */
module.exports = {
	chromosome: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MolecularSequence.referenceSeq.chromosome',
		definition: 'http://hl7.org/fhir/SearchParameter/MolecularSequence-chromosome',
		description: 'Chromosome number of the reference sequence',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MolecularSequence.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/MolecularSequence-identifier',
		description: 'The unique identity for a particular sequence',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MolecularSequence.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/MolecularSequence-patient',
		description: 'The subject that the observation is about',
	},
	referenceseqid: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MolecularSequence.referenceSeq.referenceSeqId',
		definition: 'http://hl7.org/fhir/SearchParameter/MolecularSequence-referenceseqid',
		description: 'Reference Sequence of the sequence',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MolecularSequence.type',
		definition: 'http://hl7.org/fhir/SearchParameter/MolecularSequence-type',
		description: 'Amino Acid Sequence/ DNA Sequence / RNA Sequence',
	},
	'variant-end': {
		type: 'number',
		fhirtype: 'number',
		xpath: 'MolecularSequence.variant.end',
		definition: 'http://hl7.org/fhir/SearchParameter/MolecularSequence-variant-end',
		description:
			'End position (0-based exclusive, which menas the acid at this position will not be included, 1-based inclusive, which means the acid at this position will be included) of the variant.',
	},
	'variant-start': {
		type: 'number',
		fhirtype: 'number',
		xpath: 'MolecularSequence.variant.start',
		definition: 'http://hl7.org/fhir/SearchParameter/MolecularSequence-variant-start',
		description:
			'Start position (0-based inclusive, 1-based inclusive, that means the nucleic acid or amino acid at this position will be included) of the variant.',
	},
	'window-end': {
		type: 'number',
		fhirtype: 'number',
		xpath: 'MolecularSequence.referenceSeq.windowEnd',
		definition: 'http://hl7.org/fhir/SearchParameter/MolecularSequence-window-end',
		description:
			'End position (0-based exclusive, which menas the acid at this position will not be included, 1-based inclusive, which means the acid at this position will be included) of the reference sequence.',
	},
	'window-start': {
		type: 'number',
		fhirtype: 'number',
		xpath: 'MolecularSequence.referenceSeq.windowStart',
		definition: 'http://hl7.org/fhir/SearchParameter/MolecularSequence-window-start',
		description:
			'Start position (0-based inclusive, 1-based inclusive, that means the nucleic acid or amino acid at this position will be included) of the reference sequence.',
	},
	'chromosome-variant-coordinate': {
		type: 'composite',
		fhirtype: 'composite',
		xpath: '',
		definition: 'http://hl7.org/fhir/SearchParameter/MolecularSequence-chromosome-variant-coordinate',
		description:
			'Search parameter by chromosome and variant coordinate. This will refer to part of a locus or part of a gene where search region will be represented in 1-based system. Since the coordinateSystem can either be 0-based or 1-based, this search query will include the result of both coordinateSystem that contains the equivalent segment of the gene or whole genome sequence. For example, a search for sequence can be represented as `chromosome-variant-coordinate=1$lt345$gt123`, this means it will search for the MolecularSequence resource with variants on chromosome 1 and with position >123 and <345, where in 1-based system resource, all strings within region 1:124-344 will be revealed, while in 0-based system resource, all strings within region 1:123-344 will be revealed. You may want to check detail about 0-based v.s. 1-based above.',
	},
	'chromosome-window-coordinate': {
		type: 'composite',
		fhirtype: 'composite',
		xpath: '',
		definition: 'http://hl7.org/fhir/SearchParameter/MolecularSequence-chromosome-window-coordinate',
		description:
			'Search parameter by chromosome and window. This will refer to part of a locus or part of a gene where search region will be represented in 1-based system. Since the coordinateSystem can either be 0-based or 1-based, this search query will include the result of both coordinateSystem that contains the equivalent segment of the gene or whole genome sequence. For example, a search for sequence can be represented as `chromosome-window-coordinate=1$lt345$gt123`, this means it will search for the MolecularSequence resource with a window on chromosome 1 and with position >123 and <345, where in 1-based system resource, all strings within region 1:124-344 will be revealed, while in 0-based system resource, all strings within region 1:123-344 will be revealed. You may want to check detail about 0-based v.s. 1-based above.',
	},
	'referenceseqid-variant-coordinate': {
		type: 'composite',
		fhirtype: 'composite',
		xpath: '',
		definition: 'http://hl7.org/fhir/SearchParameter/MolecularSequence-referenceseqid-variant-coordinate',
		description:
			'Search parameter by reference sequence and variant coordinate. This will refer to part of a locus or part of a gene where search region will be represented in 1-based system. Since the coordinateSystem can either be 0-based or 1-based, this search query will include the result of both coordinateSystem that contains the equivalent segment of the gene or whole genome sequence. For example, a search for sequence can be represented as `referenceSeqId-variant-coordinate=NC_000001.11$lt345$gt123`, this means it will search for the MolecularSequence resource with variants on NC_000001.11 and with position >123 and <345, where in 1-based system resource, all strings within region NC_000001.11:124-344 will be revealed, while in 0-based system resource, all strings within region NC_000001.11:123-344 will be revealed. You may want to check detail about 0-based v.s. 1-based above.',
	},
	'referenceseqid-window-coordinate': {
		type: 'composite',
		fhirtype: 'composite',
		xpath: '',
		definition: 'http://hl7.org/fhir/SearchParameter/MolecularSequence-referenceseqid-window-coordinate',
		description:
			'Search parameter by reference sequence and window. This will refer to part of a locus or part of a gene where search region will be represented in 1-based system. Since the coordinateSystem can either be 0-based or 1-based, this search query will include the result of both coordinateSystem that contains the equivalent segment of the gene or whole genome sequence. For example, a search for sequence can be represented as `referenceSeqId-window-coordinate=NC_000001.11$lt345$gt123`, this means it will search for the MolecularSequence resource with a window on NC_000001.11 and with position >123 and <345, where in 1-based system resource, all strings within region NC_000001.11:124-344 will be revealed, while in 0-based system resource, all strings within region NC_000001.11:123-344 will be revealed. You may want to check detail about 0-based v.s. 1-based above.',
	},
};
