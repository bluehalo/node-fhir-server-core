/**
 * @name exports
 * @summary SpecimenDefinitionTypeTestedContainer Class
 */
module.exports = class SpecimenDefinitionTypeTestedContainer {
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

		Object.defineProperty(this, 'cap', {
			enumerable: true,
			get: () => this.__data.cap,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.cap = new CodeableConcept(value);
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

		Object.defineProperty(this, 'capacity', {
			enumerable: true,
			get: () => this.__data.capacity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.capacity = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'minimumVolumeQuantity', {
			enumerable: true,
			get: () => this.__data.minimumVolumeQuantity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.minimumVolumeQuantity = new Quantity(value);
			},
		});

		Object.defineProperty(this, '_minimumVolumeString', {
			enumerable: true,
			get: () => this.__data._minimumVolumeString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._minimumVolumeString = new Element(value);
			},
		});

		Object.defineProperty(this, 'minimumVolumeString', {
			enumerable: true,
			get: () => this.__data.minimumVolumeString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.minimumVolumeString = value;
			},
		});

		Object.defineProperty(this, 'additive', {
			enumerable: true,
			get: () => this.__data.additive,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SpecimenDefinitionTypeTestedContainerAdditive = require('./specimendefinitiontypetestedcontaineradditive.js');
				this.__data.additive = Array.isArray(value)
					? value.map(v => new SpecimenDefinitionTypeTestedContainerAdditive(v))
					: [new SpecimenDefinitionTypeTestedContainerAdditive(value)];
			},
		});

		Object.defineProperty(this, '_preparation', {
			enumerable: true,
			get: () => this.__data._preparation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._preparation = new Element(value);
			},
		});

		Object.defineProperty(this, 'preparation', {
			enumerable: true,
			get: () => this.__data.preparation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.preparation = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'SpecimenDefinitionTypeTestedContainer',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'SpecimenDefinitionTypeTestedContainer';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			material: this.material && this.material.toJSON(),
			type: this.type && this.type.toJSON(),
			cap: this.cap && this.cap.toJSON(),
			_description: this._description && this._description.toJSON(),
			description: this.description,
			capacity: this.capacity && this.capacity.toJSON(),
			minimumVolumeQuantity: this.minimumVolumeQuantity && this.minimumVolumeQuantity.toJSON(),
			_minimumVolumeString: this._minimumVolumeString && this._minimumVolumeString.toJSON(),
			minimumVolumeString: this.minimumVolumeString,
			additive: this.additive && this.additive.map(v => v.toJSON()),
			_preparation: this._preparation && this._preparation.toJSON(),
			preparation: this.preparation,
		};
	}
};
