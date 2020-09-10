/**
 * @name exports
 * @summary SubstancePolymer Class
 */
module.exports = class SubstancePolymer {
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

		Object.defineProperty(this, 'class', {
			enumerable: true,
			get: () => this.__data.class,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.class = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'geometry', {
			enumerable: true,
			get: () => this.__data.geometry,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.geometry = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'copolymerConnectivity', {
			enumerable: true,
			get: () => this.__data.copolymerConnectivity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.copolymerConnectivity = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, '_modification', {
			enumerable: true,
			get: () => this.__data._modification,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._modification = new Element(value);
			},
		});

		Object.defineProperty(this, 'modification', {
			enumerable: true,
			get: () => this.__data.modification,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.modification = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'monomerSet', {
			enumerable: true,
			get: () => this.__data.monomerSet,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SubstancePolymerMonomerSet = require('./substancepolymermonomerset.js');
				this.__data.monomerSet = Array.isArray(value)
					? value.map(v => new SubstancePolymerMonomerSet(v))
					: [new SubstancePolymerMonomerSet(value)];
			},
		});

		Object.defineProperty(this, 'repeat', {
			enumerable: true,
			get: () => this.__data.repeat,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SubstancePolymerRepeat = require('./substancepolymerrepeat.js');
				this.__data.repeat = Array.isArray(value)
					? value.map(v => new SubstancePolymerRepeat(v))
					: [new SubstancePolymerRepeat(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'SubstancePolymer',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'SubstancePolymer';
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
			class: this.class && this.class.toJSON(),
			geometry: this.geometry && this.geometry.toJSON(),
			copolymerConnectivity: this.copolymerConnectivity && this.copolymerConnectivity.map(v => v.toJSON()),
			_modification: this._modification && this._modification.toJSON(),
			modification: this.modification,
			monomerSet: this.monomerSet && this.monomerSet.map(v => v.toJSON()),
			repeat: this.repeat && this.repeat.map(v => v.toJSON()),
		};
	}
};
