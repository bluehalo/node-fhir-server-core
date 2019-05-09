/**
 * @name exports
 * @summary SubstancePolymerMonomerSetStartingMaterial Class
 */
module.exports = class SubstancePolymerMonomerSetStartingMaterial {
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

		Object.defineProperty(this, 'material', {
			enumerable: true,
			get: () => this.__data.material,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.material = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'type', {
			enumerable: true,
			get: () => this.__data.type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.type = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_isDefining', {
			enumerable: true,
			get: () => this.__data._isDefining,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._isDefining = new Element(value);
			},
		});

		Object.defineProperty(this, 'isDefining', {
			enumerable: true,
			get: () => this.__data.isDefining,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.isDefining = value;
			},
		});

		Object.defineProperty(this, 'amount', {
			enumerable: true,
			get: () => this.__data.amount,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SubstanceAmount = require('./substanceamount.js');
				this.__data.amount = new SubstanceAmount(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'SubstancePolymerMonomerSetStartingMaterial',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'SubstancePolymerMonomerSetStartingMaterial';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			material: this.material && this.material.toJSON(),
			type: this.type && this.type.toJSON(),
			_isDefining: this._isDefining && this._isDefining.toJSON(),
			isDefining: this.isDefining,
			amount: this.amount && this.amount.toJSON(),
		};
	}
};
