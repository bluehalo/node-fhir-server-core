/**
 * @name exports
 * @summary ProvenanceEntity Class
 */
module.exports = class ProvenanceEntity {
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

		Object.defineProperty(this, '_role', {
			enumerable: true,
			get: () => this.__data._role,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._role = new Element(value);
			},
		});

		Object.defineProperty(this, 'role', {
			enumerable: true,
			get: () => this.__data.role,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.role = value;
			},
		});

		Object.defineProperty(this, 'what', {
			enumerable: true,
			get: () => this.__data.what,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.what = new Reference(value);
			},
		});

		Object.defineProperty(this, 'agent', {
			enumerable: true,
			get: () => this.__data.agent,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ProvenanceAgent = require('./provenanceagent.js');
				this.__data.agent = Array.isArray(value)
					? value.map(v => new ProvenanceAgent(v))
					: [new ProvenanceAgent(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ProvenanceEntity',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ProvenanceEntity';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_role: this._role && this._role.toJSON(),
			role: this.role,
			what: this.what && this.what.toJSON(),
			agent: this.agent && this.agent.map(v => v.toJSON()),
		};
	}
};
