const { DSTU2 } = require('../../../constants');

/**
 * @name exports
 * @summary Patient conformance statement
 */

module.exports = {
	profile: 'patient',
	resourcedocumentation: (version, count) => ({
		extension: [{
			url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
			// This will be resolved dynamically by the service methods
			valueDecimal: count
		}],
		type: DSTU2.RESOURCE_TYPES.PATIENT,
		profile: {
			reference: 'http://hl7.org/fhir/Profile/Patient'
		},
		interaction: [{
			code: 'read'
		}, {
			code: 'search'
		}],
		// TODO: These need a definition for each one which is a URL to the definition of
		// search parameters. We should investigate the best way to configure this so there
		// is not a lot of repeat information.
		searchParam: [{
			name: 'id',
			type: 'token',
			documentation: 'Id of the patient'
		}, {
			name: 'name',
			type: 'string',
			documentation: 'Name of the patient'
		}, {
			name: 'birthdate',
			type: 'date',
			documentation: 'Birthdate of the patient'
		}, {
			name: 'gender',
			type: 'token',
			documentation: 'Gender of the patient'
		}, {
			name: 'given',
			type: 'string',
			documentation: 'A portion of the given name of the patient'
		}, {
			name: 'family',
			type: 'string',
			documentation: 'A portion of the family name of the patient'
		}, {
			name: 'identifier',
			type: 'token',
			documentation: 'A patient identifier'
		}]
	})
};
