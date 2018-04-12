const { STU3 } = require('../../../constants');

/**
 * @name exports
 * @summary Patient conformance statement
 */

module.exports = {
	Profile: 'Careplan',
	Resource: (count) => ({
		extension: [{
			url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
			// This will be resolved dynamically by the service methods
			valueDecimal: count
		}],
		type: STU3.RESOURCE_TYPES.CAREPLAN,
		profile: {
			reference: 'http://hl7.org/fhir/Profile/Careplan'
		},
		interaction: [{
			code: 'read'
		}, {
			code: 'search'
		}],
		searchParam: [ {
			name: '_content',
			type: 'string'
		}, {
			name: '_id',
			type: 'token'
		}, {
			name: '_lastUpdated',
			type: 'date'
		}, {
			name: '_profile',
			type: 'uri'
		}, {
			name: '_query',
			type: 'token'
		}, {
			name: '_security',
			type: 'token'
		}, {
			name: '_tag',
			type: 'token'
		}]
	})
};
