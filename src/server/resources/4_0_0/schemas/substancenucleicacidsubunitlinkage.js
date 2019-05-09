/**
 * @name exports
 * @summary SubstanceNucleicAcidSubunitLinkage Class
 */
module.exports = class SubstanceNucleicAcidSubunitLinkage {
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

		Object.defineProperty(this, '_connectivity', {
			enumerable: true,
			get: () => this.__data._connectivity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._connectivity = new Element(value);
			},
		});

		Object.defineProperty(this, 'connectivity', {
			enumerable: true,
			get: () => this.__data.connectivity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.connectivity = value;
			},
		});

		Object.defineProperty(this, 'identifier', {
			enumerable: true,
			get: () => this.__data.identifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.identifier = new Identifier(value);
			},
		});

		Object.defineProperty(this, '_name', {
			enumerable: true,
			get: () => this.__data._name,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._name = new Element(value);
			},
		});

		Object.defineProperty(this, 'name', {
			enumerable: true,
			get: () => this.__data.name,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.name = value;
			},
		});

		Object.defineProperty(this, '_residueSite', {
			enumerable: true,
			get: () => this.__data._residueSite,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._residueSite = new Element(value);
			},
		});

		Object.defineProperty(this, 'residueSite', {
			enumerable: true,
			get: () => this.__data.residueSite,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.residueSite = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'SubstanceNucleicAcidSubunitLinkage',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'SubstanceNucleicAcidSubunitLinkage';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_connectivity: this._connectivity && this._connectivity.toJSON(),
			connectivity: this.connectivity,
			identifier: this.identifier && this.identifier.toJSON(),
			_name: this._name && this._name.toJSON(),
			name: this.name,
			_residueSite: this._residueSite && this._residueSite.toJSON(),
			residueSite: this.residueSite,
		};
	}
};
