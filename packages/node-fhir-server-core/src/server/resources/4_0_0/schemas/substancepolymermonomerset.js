/**
 * @name exports
 * @summary SubstancePolymerMonomerSet Class
 */
module.exports = class SubstancePolymerMonomerSet {
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

		Object.defineProperty(this, 'ratioType', {
			enumerable: true,
			get: () => this.__data.ratioType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.ratioType = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'startingMaterial', {
			enumerable: true,
			get: () => this.__data.startingMaterial,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SubstancePolymerMonomerSetStartingMaterial = require('./substancepolymermonomersetstartingmaterial.js');
				this.__data.startingMaterial = Array.isArray(value)
					? value.map(v => new SubstancePolymerMonomerSetStartingMaterial(v))
					: [new SubstancePolymerMonomerSetStartingMaterial(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'SubstancePolymerMonomerSet',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'SubstancePolymerMonomerSet';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			ratioType: this.ratioType && this.ratioType.toJSON(),
			startingMaterial: this.startingMaterial && this.startingMaterial.map(v => v.toJSON()),
		};
	}
};
