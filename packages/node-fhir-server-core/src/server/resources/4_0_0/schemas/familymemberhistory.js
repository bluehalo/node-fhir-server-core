/**
 * @name exports
 * @summary FamilyMemberHistory Class
 */
module.exports = class FamilyMemberHistory {
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

		Object.defineProperty(this, '_instantiatesCanonical', {
			enumerable: true,
			get: () => this.__data._instantiatesCanonical,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._instantiatesCanonical = new Element(value);
			},
		});

		Object.defineProperty(this, 'instantiatesCanonical', {
			enumerable: true,
			get: () => this.__data.instantiatesCanonical,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.instantiatesCanonical = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_instantiatesUri', {
			enumerable: true,
			get: () => this.__data._instantiatesUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._instantiatesUri = new Element(value);
			},
		});

		Object.defineProperty(this, 'instantiatesUri', {
			enumerable: true,
			get: () => this.__data.instantiatesUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.instantiatesUri = Array.isArray(value) ? value.map(v => v) : [value];
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

		Object.defineProperty(this, 'dataAbsentReason', {
			enumerable: true,
			get: () => this.__data.dataAbsentReason,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.dataAbsentReason = new CodeableConcept(value);
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

		Object.defineProperty(this, '_date', {
			enumerable: true,
			get: () => this.__data._date,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._date = new Element(value);
			},
		});

		Object.defineProperty(this, 'date', {
			enumerable: true,
			get: () => this.__data.date,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.date = value;
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

		Object.defineProperty(this, 'relationship', {
			enumerable: true,
			get: () => this.__data.relationship,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.relationship = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'sex', {
			enumerable: true,
			get: () => this.__data.sex,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.sex = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'bornPeriod', {
			enumerable: true,
			get: () => this.__data.bornPeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.bornPeriod = new Period(value);
			},
		});

		Object.defineProperty(this, '_bornDate', {
			enumerable: true,
			get: () => this.__data._bornDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._bornDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'bornDate', {
			enumerable: true,
			get: () => this.__data.bornDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.bornDate = value;
			},
		});

		Object.defineProperty(this, '_bornString', {
			enumerable: true,
			get: () => this.__data._bornString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._bornString = new Element(value);
			},
		});

		Object.defineProperty(this, 'bornString', {
			enumerable: true,
			get: () => this.__data.bornString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.bornString = value;
			},
		});

		Object.defineProperty(this, 'ageAge', {
			enumerable: true,
			get: () => this.__data.ageAge,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Age = require('./age.js');
				this.__data.ageAge = new Age(value);
			},
		});

		Object.defineProperty(this, 'ageRange', {
			enumerable: true,
			get: () => this.__data.ageRange,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Range = require('./range.js');
				this.__data.ageRange = new Range(value);
			},
		});

		Object.defineProperty(this, '_ageString', {
			enumerable: true,
			get: () => this.__data._ageString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._ageString = new Element(value);
			},
		});

		Object.defineProperty(this, 'ageString', {
			enumerable: true,
			get: () => this.__data.ageString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.ageString = value;
			},
		});

		Object.defineProperty(this, '_estimatedAge', {
			enumerable: true,
			get: () => this.__data._estimatedAge,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._estimatedAge = new Element(value);
			},
		});

		Object.defineProperty(this, 'estimatedAge', {
			enumerable: true,
			get: () => this.__data.estimatedAge,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.estimatedAge = value;
			},
		});

		Object.defineProperty(this, '_deceasedBoolean', {
			enumerable: true,
			get: () => this.__data._deceasedBoolean,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._deceasedBoolean = new Element(value);
			},
		});

		Object.defineProperty(this, 'deceasedBoolean', {
			enumerable: true,
			get: () => this.__data.deceasedBoolean,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.deceasedBoolean = value;
			},
		});

		Object.defineProperty(this, 'deceasedAge', {
			enumerable: true,
			get: () => this.__data.deceasedAge,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Age = require('./age.js');
				this.__data.deceasedAge = new Age(value);
			},
		});

		Object.defineProperty(this, 'deceasedRange', {
			enumerable: true,
			get: () => this.__data.deceasedRange,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Range = require('./range.js');
				this.__data.deceasedRange = new Range(value);
			},
		});

		Object.defineProperty(this, '_deceasedDate', {
			enumerable: true,
			get: () => this.__data._deceasedDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._deceasedDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'deceasedDate', {
			enumerable: true,
			get: () => this.__data.deceasedDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.deceasedDate = value;
			},
		});

		Object.defineProperty(this, '_deceasedString', {
			enumerable: true,
			get: () => this.__data._deceasedString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._deceasedString = new Element(value);
			},
		});

		Object.defineProperty(this, 'deceasedString', {
			enumerable: true,
			get: () => this.__data.deceasedString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.deceasedString = value;
			},
		});

		Object.defineProperty(this, 'reasonCode', {
			enumerable: true,
			get: () => this.__data.reasonCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.reasonCode = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'reasonReference', {
			enumerable: true,
			get: () => this.__data.reasonReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.reasonReference = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
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

		Object.defineProperty(this, 'condition', {
			enumerable: true,
			get: () => this.__data.condition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let FamilyMemberHistoryCondition = require('./familymemberhistorycondition.js');
				this.__data.condition = Array.isArray(value)
					? value.map(v => new FamilyMemberHistoryCondition(v))
					: [new FamilyMemberHistoryCondition(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'FamilyMemberHistory',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'FamilyMemberHistory';
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
			_instantiatesCanonical: this._instantiatesCanonical && this._instantiatesCanonical.toJSON(),
			instantiatesCanonical: this.instantiatesCanonical,
			_instantiatesUri: this._instantiatesUri && this._instantiatesUri.toJSON(),
			instantiatesUri: this.instantiatesUri,
			_status: this._status && this._status.toJSON(),
			status: this.status,
			dataAbsentReason: this.dataAbsentReason && this.dataAbsentReason.toJSON(),
			patient: this.patient && this.patient.toJSON(),
			_date: this._date && this._date.toJSON(),
			date: this.date,
			_name: this._name && this._name.toJSON(),
			name: this.name,
			relationship: this.relationship && this.relationship.toJSON(),
			sex: this.sex && this.sex.toJSON(),
			bornPeriod: this.bornPeriod && this.bornPeriod.toJSON(),
			_bornDate: this._bornDate && this._bornDate.toJSON(),
			bornDate: this.bornDate,
			_bornString: this._bornString && this._bornString.toJSON(),
			bornString: this.bornString,
			ageAge: this.ageAge && this.ageAge.toJSON(),
			ageRange: this.ageRange && this.ageRange.toJSON(),
			_ageString: this._ageString && this._ageString.toJSON(),
			ageString: this.ageString,
			_estimatedAge: this._estimatedAge && this._estimatedAge.toJSON(),
			estimatedAge: this.estimatedAge,
			_deceasedBoolean: this._deceasedBoolean && this._deceasedBoolean.toJSON(),
			deceasedBoolean: this.deceasedBoolean,
			deceasedAge: this.deceasedAge && this.deceasedAge.toJSON(),
			deceasedRange: this.deceasedRange && this.deceasedRange.toJSON(),
			_deceasedDate: this._deceasedDate && this._deceasedDate.toJSON(),
			deceasedDate: this.deceasedDate,
			_deceasedString: this._deceasedString && this._deceasedString.toJSON(),
			deceasedString: this.deceasedString,
			reasonCode: this.reasonCode && this.reasonCode.map(v => v.toJSON()),
			reasonReference: this.reasonReference && this.reasonReference.map(v => v.toJSON()),
			note: this.note && this.note.map(v => v.toJSON()),
			condition: this.condition && this.condition.map(v => v.toJSON()),
		};
	}
};
