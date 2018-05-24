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
	if (service[`get${resourceType}`]) {
		interactions.push({ code: 'search' });
	}

	if (service[`get${resourceType}ById`]) {
		interactions.push({ code: 'read' });
	}

	if (service[`create${resourceType}`]) {
		interactions.push({ code: 'create' });
	}

	if (service[`update${resourceType}`]) {
		interactions.push({ code: 'update' });
	}

	if (service[`delete${resourceType}`]) {
		interactions.push({ code: 'delete' });
	}

	// Save these interactions so we don't need to do this again
	profileInteractions[resourceType] = interactions;

	return interactions;
};

module.exports = generateInteractions;
