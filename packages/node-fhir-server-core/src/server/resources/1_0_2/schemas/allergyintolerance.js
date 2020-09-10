/**
 * @name exports
 * @summary AllergyIntolerance Class
 */
module.exports = class AllergyIntolerance {
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

		Object.defineProperty(this, '_recordedDate', {
			enumerable: true,
			get: () => this.__data._recordedDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._recordedDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'recordedDate', {
			enumerable: true,
			get: () => this.__data.recordedDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.recordedDate = value;
			},
		});

		Object.defineProperty(this, 'recorder', {
			enumerable: true,
			get: () => this.__data.recorder,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.recorder = new Reference(value);
			},
		});

		Object.defineProperty(this, 'patient', {
			enumerable: true,
			get: () => this.__data.patient,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.patient = new Reference(value);
			},
		});

		Object.defineProperty(this, 'reporter', {
			enumerable: true,
			get: () => this.__data.reporter,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.reporter = new Reference(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/allergyintolerance-substance-code
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

		Object.defineProperty(this, '_status', {
			enumerable: true,
			get: () => this.__data._status,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._status = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/allergy-intolerance-status
		Object.defineProperty(this, 'status', {
			enumerable: true,
			get: () => this.__data.status,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.status = value;
			},
		});

		Object.defineProperty(this, '_criticality', {
			enumerable: true,
			get: () => this.__data._criticality,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._criticality = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/allergy-intolerance-criticality
		Object.defineProperty(this, 'criticality', {
			enumerable: true,
			get: () => this.__data.criticality,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.criticality = value;
			},
		});

		Object.defineProperty(this, '_type', {
			enumerable: true,
			get: () => this.__data._type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._type = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/allergy-intolerance-type
		Object.defineProperty(this, 'type', {
			enumerable: true,
			get: () => this.__data.type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.type = value;
			},
		});

		Object.defineProperty(this, '_category', {
			enumerable: true,
			get: () => this.__data._category,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._category = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/allergy-intolerance-category
		Object.defineProperty(this, 'category', {
			enumerable: true,
			get: () => this.__data.category,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.category = value;
			},
		});

		Object.defineProperty(this, '_lastOccurence', {
			enumerable: true,
			get: () => this.__data._lastOccurence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._lastOccurence = new Element(value);
			},
		});

		Object.defineProperty(this, 'lastOccurence', {
			enumerable: true,
			get: () => this.__data.lastOccurence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.lastOccurence = value;
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
				this.__data.note = new Annotation(value);
			},
		});

		Object.defineProperty(this, 'reaction', {
			enumerable: true,
			get: () => this.__data.reaction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let AllergyIntoleranceReaction = require('./allergyintolerancereaction.js');
				this.__data.reaction = Array.isArray(value)
					? value.map(v => new AllergyIntoleranceReaction(v))
					: [new AllergyIntoleranceReaction(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'AllergyIntolerance',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'AllergyIntolerance';
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
			_onset: this._onset && this._onset.toJSON(),
			onset: this.onset,
			_recordedDate: this._recordedDate && this._recordedDate.toJSON(),
			recordedDate: this.recordedDate,
			recorder: this.recorder && this.recorder.toJSON(),
			patient: this.patient && this.patient.toJSON(),
			reporter: this.reporter && this.reporter.toJSON(),
			substance: this.substance && this.substance.toJSON(),
			_status: this._status && this._status.toJSON(),
			status: this.status,
			_criticality: this._criticality && this._criticality.toJSON(),
			criticality: this.criticality,
			_type: this._type && this._type.toJSON(),
			type: this.type,
			_category: this._category && this._category.toJSON(),
			category: this.category,
			_lastOccurence: this._lastOccurence && this._lastOccurence.toJSON(),
			lastOccurence: this.lastOccurence,
			note: this.note && this.note.toJSON(),
			reaction: this.reaction && this.reaction.map(v => v.toJSON()),
		};
	}
};
