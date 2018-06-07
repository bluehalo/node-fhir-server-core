const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./task.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'task',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Task = require(resolveFromVersion(version, 'base/Task'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Task.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/task.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};
