/**
 * @name exports
 * @summary ExpansionProfileDesignation Class
 */
module.exports = class ExpansionProfileDesignation {
	constructor(opts) {
		// Create an object to store all props
		Object.defineProperty(this, '__data', { value: {} });

		// Define getters and setters as enumerable

		Object.defineProperty(this, '_id', {
			enumerable: true,
			get: () => this.__data._id,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._id = new Element(value);
			},
		});

		Object.defineProperty(this, 'id', {
			enumerable: true,
			get: () => this.__data.id,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.id = value;
			},
		});

		Object.defineProperty(this, 'extension', {
			enumerable: true,
			get: () => this.__data.extension,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Extension = require('./extension.js');
				this.__data.extension = Array.isArray(value) ? value.map(v => new Extension(v)) : [new Extension(value)];
			},
		});

		Object.defineProperty(this, 'modifierExtension', {
			enumerable: true,
			get: () => this.__data.modifierExtension,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Extension = require('./extension.js');
				this.__data.modifierExtension = Array.isArray(value)
					? value.map(v => new Extension(v))
					: [new Extension(value)];
			},
		});

		Object.defineProperty(this, 'include', {
			enumerable: true,
			get: () => this.__data.include,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ExpansionProfileDesignationInclude = require('./expansionprofiledesignationinclude.js');
				this.__data.include = new ExpansionProfileDesignationInclude(value);
			},
		});

		Object.defineProperty(this, 'exclude', {
			enumerable: true,
			get: () => this.__data.exclude,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ExpansionProfileDesignationExclude = require('./expansionprofiledesignationexclude.js');
				this.__data.exclude = new ExpansionProfileDesignationExclude(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ExpansionProfileDesignation',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ExpansionProfileDesignation';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			include: this.include && this.include.toJSON(),
			exclude: this.exclude && this.exclude.toJSON(),
		};
	}
};
