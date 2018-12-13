/**
 * Generate a list of interactions a particular profile can support
 * keep a local copy of interactions so this does not need to happen each time
 */
let profileInteractions = {};
let generateInteractions = (service, resourceType) => {
	// return from cache if it exists
	if (profileInteractions[resourceType]) {
		return profileInteractions[resourceType];
	}

	let interactions = [];

	// Test for the existence of a service method
	if (service.search) {
		interactions.push({ code: 'search-type' });
	}

	if (service.searchById) {
		interactions.push({ code: 'read' });
	}

	if (service.searchByVersionId) {
		interactions.push({ code: 'vread' });
	}

	if (service.create) {
		interactions.push({ code: 'create' });
	}

	if (service.update) {
		interactions.push({ code: 'update' });
	}

	if (service.remove) {
		interactions.push({ code: 'delete' });
	}

	if (service.history) {
		interactions.push({ code: 'history-type' });
	}

	if (service.historyById) {
		interactions.push({ code: 'history-instance' });
	}

	if (service.expandById) {
		interactions.push({ code: 'expand' });
	}

	// Save these interactions so we don't need to do this again
	profileInteractions[resourceType] = interactions;

	return interactions;
};

module.exports = generateInteractions;
