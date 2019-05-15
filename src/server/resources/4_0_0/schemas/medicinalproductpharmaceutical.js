/**
 * @name exports
 * @summary MedicinalProductPharmaceutical Class
 */
module.exports = class MedicinalProductPharmaceutical {
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

		Object.defineProperty(this, 'meta', {
			enumerable: true,
			get: () => this.__data.meta,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Meta = require('./meta.js');
				this.__data.meta = new Meta(value);
			},
		});

		Object.defineProperty(this, '_implicitRules', {
			enumerable: true,
			get: () => this.__data._implicitRules,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._implicitRules = new Element(value);
			},
		});

		Object.defineProperty(this, 'implicitRules', {
			enumerable: true,
			get: () => this.__data.implicitRules,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.implicitRules = value;
			},
		});

		Object.defineProperty(this, '_language', {
			enumerable: true,
			get: () => this.__data._language,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._language = new Element(value);
			},
		});

		Object.defineProperty(this, 'language', {
			enumerable: true,
			get: () => this.__data.language,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.language = value;
			},
		});

		Object.defineProperty(this, 'text', {
			enumerable: true,
			get: () => this.__data.text,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Narrative = require('./narrative.js');
				this.__data.text = new Narrative(value);
			},
		});

		Object.defineProperty(this, 'contained', {
			enumerable: true,
			get: () => this.__data.contained,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.contained = Array.isArray(value) ? value.map(v => v) : [value];
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

		Object.defineProperty(this, 'identifier', {
			enumerable: true,
			get: () => this.__data.identifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.identifier = Array.isArray(value) ? value.map(v => new Identifier(v)) : [new Identifier(value)];
			},
		});

		Object.defineProperty(this, 'administrableDoseForm', {
			enumerable: true,
			get: () => this.__data.administrableDoseForm,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.administrableDoseForm = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'unitOfPresentation', {
			enumerable: true,
			get: () => this.__data.unitOfPresentation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.unitOfPresentation = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'ingredient', {
			enumerable: true,
			get: () => this.__data.ingredient,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.ingredient = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'device', {
			enumerable: true,
			get: () => this.__data.device,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.device = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'characteristics', {
			enumerable: true,
			get: () => this.__data.characteristics,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicinalProductPharmaceuticalCharacteristics = require('./medicinalproductpharmaceuticalcharacteristics.js');
				this.__data.characteristics = Array.isArray(value)
					? value.map(v => new MedicinalProductPharmaceuticalCharacteristics(v))
					: [new MedicinalProductPharmaceuticalCharacteristics(value)];
			},
		});

		Object.defineProperty(this, 'routeOfAdministration', {
			enumerable: true,
			get: () => this.__data.routeOfAdministration,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicinalProductPharmaceuticalRouteOfAdministration = require('./medicinalproductpharmaceuticalrouteofadministration.js');
				this.__data.routeOfAdministration = Array.isArray(value)
					? value.map(v => new MedicinalProductPharmaceuticalRouteOfAdministration(v))
					: [new MedicinalProductPharmaceuticalRouteOfAdministration(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'MedicinalProductPharmaceutical',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'MedicinalProductPharmaceutical';
	}

	toJSON() {
		return {
			resourceType: this.resourceType,
			id: this.id,
			meta: this.meta && this.meta.toJSON(),
			_implicitRules: this._implicitRules && this._implicitRules.toJSON(),
			implicitRules: this.implicitRules,
			_language: this._language && this._language.toJSON(),
			language: this.language,
			text: this.text && this.text.toJSON(),
			contained: this.contained,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			identifier: this.identifier && this.identifier.map(v => v.toJSON()),
			administrableDoseForm: this.administrableDoseForm && this.administrableDoseForm.toJSON(),
			unitOfPresentation: this.unitOfPresentation && this.unitOfPresentation.toJSON(),
			ingredient: this.ingredient && this.ingredient.map(v => v.toJSON()),
			device: this.device && this.device.map(v => v.toJSON()),
			characteristics: this.characteristics && this.characteristics.map(v => v.toJSON()),
			routeOfAdministration: this.routeOfAdministration && this.routeOfAdministration.map(v => v.toJSON()),
		};
	}
};
