/**
 * @name exports
 * @summary Money Class
 */
module.exports = class Money {
	constructor(opts) {
		// Create an object to store all props
		Object.defineProperty(this, '__data', { value: {} });

		// Define getters and setters as enumerable

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Money',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Money';
	}

	toJSON() {
		return {};
	}
};
