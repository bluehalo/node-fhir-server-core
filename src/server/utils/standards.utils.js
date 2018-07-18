const { resolveFromVersion } = require('./resolve.utils');
const { VERSIONS } = require('../../constants');

// Helper to determine which operation outcome to retrieve
let getOperationOutcome = base => {
	switch (base) {
		case VERSIONS.STU3:
			return require(resolveFromVersion(base, 'uscore/OperationOutcome'));
		default:
			return require(resolveFromVersion(VERSIONS.STU3, 'uscore/OperationOutcome'));
	}
};

module.exports = {
	getOperationOutcome
};
