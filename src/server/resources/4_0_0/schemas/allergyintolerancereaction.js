/**
 * @name exports
 * @summary AllergyIntoleranceReaction Class
 */
module.exports = class AllergyIntoleranceReaction {
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

		Object.defineProperty(this, 'substance', {
			enumerable: true,
			get: () => this.__data.substance,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.substance = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'manifestation', {
			enumerable: true,
			get: () => this.__data.manifestation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.manifestation = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
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

		Object.defineProperty(this, '_onset', {
			enumerable: true,
			get: () => this.__data._onset,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._onset = new Element(value);
			},
		});

		Object.defineProperty(this, 'onset', {
			enumerable: true,
			get: () => this.__data.onset,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.onset = value;
			},
		});

		Object.defineProperty(this, '_severity', {
			enumerable: true,
			get: () => this.__data._severity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._severity = new Element(value);
			},
		});

		Object.defineProperty(this, 'severity', {
			enumerable: true,
			get: () => this.__data.severity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.severity = value;
			},
		});

		Object.defineProperty(this, 'exposureRoute', {
			enumerable: true,
			get: () => this.__data.exposureRoute,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.exposureRoute = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'note', {
			enumerable: true,
			get: () => this.__data.note,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Annotation = require('./annotation.js');
				this.__data.note = Array.isArray(value) ? value.map(v => new Annotation(v)) : [new Annotation(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'AllergyIntoleranceReaction',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'AllergyIntoleranceReaction';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			substance: this.substance && this.substance.toJSON(),
			manifestation: this.manifestation && this.manifestation.map(v => v.toJSON()),
			_description: this._description && this._description.toJSON(),
			description: this.description,
			_onset: this._onset && this._onset.toJSON(),
			onset: this.onset,
			_severity: this._severity && this._severity.toJSON(),
			severity: this.severity,
			exposureRoute: this.exposureRoute && this.exposureRoute.toJSON(),
			note: this.note && this.note.map(v => v.toJSON()),
		};
	}
};
