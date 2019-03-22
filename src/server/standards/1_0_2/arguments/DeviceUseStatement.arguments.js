/**
 * @name exports
 * @static
 * @summary Arguments for the deviceusestatement query
 */
module.exports = {
	device: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DeviceUseStatement.device',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceUseStatement-device',
		description: 'Search by device',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DeviceUseStatement.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceUseStatement-patient',
		description: 'Search by subject - a patient',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DeviceUseStatement.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/DeviceUseStatement-subject',
		description: 'Search by subject',
	},
};
