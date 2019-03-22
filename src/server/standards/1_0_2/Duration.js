/**
 * @name exports
 * @summary Duration Class
 */
module.exports = class Duration {
	constructor(opts) {
		// Create an object to store all props
		Object.defineProperty(this, '__data', { value: {} });

		// Define getters and setters as enumerable

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Duration',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Duration';
	}

	toJSON() {
		return {};
	}
};
