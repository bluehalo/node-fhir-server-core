/**
 * @name exports
 * @summary SubstanceSourceMaterialOrganismHybrid Class
 */
module.exports = class SubstanceSourceMaterialOrganismHybrid {
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

		Object.defineProperty(this, '_maternalOrganismId', {
			enumerable: true,
			get: () => this.__data._maternalOrganismId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._maternalOrganismId = new Element(value);
			},
		});

		Object.defineProperty(this, 'maternalOrganismId', {
			enumerable: true,
			get: () => this.__data.maternalOrganismId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.maternalOrganismId = value;
			},
		});

		Object.defineProperty(this, '_maternalOrganismName', {
			enumerable: true,
			get: () => this.__data._maternalOrganismName,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._maternalOrganismName = new Element(value);
			},
		});

		Object.defineProperty(this, 'maternalOrganismName', {
			enumerable: true,
			get: () => this.__data.maternalOrganismName,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.maternalOrganismName = value;
			},
		});

		Object.defineProperty(this, '_paternalOrganismId', {
			enumerable: true,
			get: () => this.__data._paternalOrganismId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._paternalOrganismId = new Element(value);
			},
		});

		Object.defineProperty(this, 'paternalOrganismId', {
			enumerable: true,
			get: () => this.__data.paternalOrganismId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.paternalOrganismId = value;
			},
		});

		Object.defineProperty(this, '_paternalOrganismName', {
			enumerable: true,
			get: () => this.__data._paternalOrganismName,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._paternalOrganismName = new Element(value);
			},
		});

		Object.defineProperty(this, 'paternalOrganismName', {
			enumerable: true,
			get: () => this.__data.paternalOrganismName,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.paternalOrganismName = value;
			},
		});

		Object.defineProperty(this, 'hybridType', {
			enumerable: true,
			get: () => this.__data.hybridType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.hybridType = new CodeableConcept(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'SubstanceSourceMaterialOrganismHybrid',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'SubstanceSourceMaterialOrganismHybrid';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_maternalOrganismId: this._maternalOrganismId && this._maternalOrganismId.toJSON(),
			maternalOrganismId: this.maternalOrganismId,
			_maternalOrganismName: this._maternalOrganismName && this._maternalOrganismName.toJSON(),
			maternalOrganismName: this.maternalOrganismName,
			_paternalOrganismId: this._paternalOrganismId && this._paternalOrganismId.toJSON(),
			paternalOrganismId: this.paternalOrganismId,
			_paternalOrganismName: this._paternalOrganismName && this._paternalOrganismName.toJSON(),
			paternalOrganismName: this.paternalOrganismName,
			hybridType: this.hybridType && this.hybridType.toJSON(),
		};
	}
};
