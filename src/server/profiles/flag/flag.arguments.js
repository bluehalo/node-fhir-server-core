/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	AUTHOR	: {	name: 'author',	type: 'reference',	definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#flag',	documentation: 'Flag creator',},
	DATE	: {	name: 'date',	type: 'date',	definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#flag',	documentation: 'Time period when flag is active',},
	ENCOUNTER	: {	name: 'encounter',	type: 'reference',	definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#flag',	documentation: 'Alert relevant during encounter',},
	IDENTIFIER	: {	name: 'identifier',	type: 'token',	definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#flag',	documentation: 'Business identifier',},
	PATIENT	: {	name: 'patient',	type: 'reference',	definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#flag',	documentation: 'The identity of a subject to list flags for',},
	SUBJECT	: {	name: 'subject',	type: 'reference',	definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#flag',	documentation: 'The identity of a subject to list flags for',},	};
