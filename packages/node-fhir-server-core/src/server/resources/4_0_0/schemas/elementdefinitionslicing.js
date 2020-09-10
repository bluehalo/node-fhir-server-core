/**
 * @name exports
 * @summary ElementDefinitionSlicing Class
 */
module.exports = class ElementDefinitionSlicing {
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

		Object.defineProperty(this, 'discriminator', {
			enumerable: true,
			get: () => this.__data.discriminator,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data.discriminator = Array.isArray(value) ? value.map(v => new Element(v)) : [new Element(value)];
			},
		});

		Object.defineProperty(this, '_description', {
			enumerable: true,
			get: () => this.__data._description,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._description = new Element(value);
			},
		});

		Object.defineProperty(this, 'description', {
			enumerable: true,
			get: () => this.__data.description,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.description = value;
			},
		});

		Object.defineProperty(this, '_ordered', {
			enumerable: true,
			get: () => this.__data._ordered,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._ordered = new Element(value);
			},
		});

		Object.defineProperty(this, 'ordered', {
			enumerable: true,
			get: () => this.__data.ordered,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.ordered = value;
			},
		});

		Object.defineProperty(this, '_rules', {
			enumerable: true,
			get: () => this.__data._rules,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._rules = new Element(value);
			},
		});

		Object.defineProperty(this, 'rules', {
			enumerable: true,
			get: () => this.__data.rules,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.rules = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ElementDefinitionSlicing',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ElementDefinitionSlicing';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			discriminator: this.discriminator && this.discriminator.map(v => v.toJSON()),
			_description: this._description && this._description.toJSON(),
			description: this.description,
			_ordered: this._ordered && this._ordered.toJSON(),
			ordered: this.ordered,
			_rules: this._rules && this._rules.toJSON(),
			rules: this.rules,
		};
	}
};
