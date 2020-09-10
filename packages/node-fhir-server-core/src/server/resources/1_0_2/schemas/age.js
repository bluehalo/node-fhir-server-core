/**
 * @name exports
 * @summary Age Class
 */
module.exports = class Age {
	constructor(opts) {
		// Create an object to store all props
		Object.defineProperty(this, '__data', { value: {} });

		// Define getters and setters as enumerable

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Age',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Age';
	}

	toJSON() {
		return {};
	}
};
