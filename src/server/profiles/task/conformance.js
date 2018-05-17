const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./task.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'task',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Task = require(resolveFromVersion(version, 'base/Task'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Task.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/task.html'
			},
			interaction: [{
				code: 'read'
			}, {
				code: 'search'
			}],
			searchParam: searchParams
		};
	}
};
