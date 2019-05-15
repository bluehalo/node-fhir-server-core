/**
 * @name exports
 * @summary Observation Class
 */
module.exports = class Observation {
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

		Object.defineProperty(this, 'basedOn', {
			enumerable: true,
			get: () => this.__data.basedOn,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.basedOn = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'partOf', {
			enumerable: true,
			get: () => this.__data.partOf,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.partOf = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
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

		Object.defineProperty(this, 'category', {
			enumerable: true,
			get: () => this.__data.category,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.category = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'code', {
			enumerable: true,
			get: () => this.__data.code,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.code = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'subject', {
			enumerable: true,
			get: () => this.__data.subject,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.subject = new Reference(value);
			},
		});

		Object.defineProperty(this, 'focus', {
			enumerable: true,
			get: () => this.__data.focus,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.focus = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'encounter', {
			enumerable: true,
			get: () => this.__data.encounter,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.encounter = new Reference(value);
			},
		});

		Object.defineProperty(this, '_effectiveDateTime', {
			enumerable: true,
			get: () => this.__data._effectiveDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._effectiveDateTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'effectiveDateTime', {
			enumerable: true,
			get: () => this.__data.effectiveDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.effectiveDateTime = value;
			},
		});

		Object.defineProperty(this, 'effectivePeriod', {
			enumerable: true,
			get: () => this.__data.effectivePeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.effectivePeriod = new Period(value);
			},
		});

		Object.defineProperty(this, 'effectiveTiming', {
			enumerable: true,
			get: () => this.__data.effectiveTiming,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Timing = require('./timing.js');
				this.__data.effectiveTiming = new Timing(value);
			},
		});

		Object.defineProperty(this, '_effectiveInstant', {
			enumerable: true,
			get: () => this.__data._effectiveInstant,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._effectiveInstant = new Element(value);
			},
		});

		Object.defineProperty(this, 'effectiveInstant', {
			enumerable: true,
			get: () => this.__data.effectiveInstant,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.effectiveInstant = value;
			},
		});

		Object.defineProperty(this, '_issued', {
			enumerable: true,
			get: () => this.__data._issued,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._issued = new Element(value);
			},
		});

		Object.defineProperty(this, 'issued', {
			enumerable: true,
			get: () => this.__data.issued,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.issued = value;
			},
		});

		Object.defineProperty(this, 'performer', {
			enumerable: true,
			get: () => this.__data.performer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.performer = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'valueQuantity', {
			enumerable: true,
			get: () => this.__data.valueQuantity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.valueQuantity = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'valueCodeableConcept', {
			enumerable: true,
			get: () => this.__data.valueCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.valueCodeableConcept = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_valueString', {
			enumerable: true,
			get: () => this.__data._valueString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueString = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueString', {
			enumerable: true,
			get: () => this.__data.valueString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueString = value;
			},
		});

		Object.defineProperty(this, '_valueBoolean', {
			enumerable: true,
			get: () => this.__data._valueBoolean,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueBoolean = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueBoolean', {
			enumerable: true,
			get: () => this.__data.valueBoolean,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueBoolean = value;
			},
		});

		Object.defineProperty(this, '_valueInteger', {
			enumerable: true,
			get: () => this.__data._valueInteger,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueInteger = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueInteger', {
			enumerable: true,
			get: () => this.__data.valueInteger,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueInteger = value;
			},
		});

		Object.defineProperty(this, 'valueRange', {
			enumerable: true,
			get: () => this.__data.valueRange,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Range = require('./range.js');
				this.__data.valueRange = new Range(value);
			},
		});

		Object.defineProperty(this, 'valueRatio', {
			enumerable: true,
			get: () => this.__data.valueRatio,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Ratio = require('./ratio.js');
				this.__data.valueRatio = new Ratio(value);
			},
		});

		Object.defineProperty(this, 'valueSampledData', {
			enumerable: true,
			get: () => this.__data.valueSampledData,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SampledData = require('./sampleddata.js');
				this.__data.valueSampledData = new SampledData(value);
			},
		});

		Object.defineProperty(this, '_valueTime', {
			enumerable: true,
			get: () => this.__data._valueTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueTime', {
			enumerable: true,
			get: () => this.__data.valueTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueTime = value;
			},
		});

		Object.defineProperty(this, '_valueDateTime', {
			enumerable: true,
			get: () => this.__data._valueDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueDateTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueDateTime', {
			enumerable: true,
			get: () => this.__data.valueDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueDateTime = value;
			},
		});

		Object.defineProperty(this, 'valuePeriod', {
			enumerable: true,
			get: () => this.__data.valuePeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.valuePeriod = new Period(value);
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

		Object.defineProperty(this, 'interpretation', {
			enumerable: true,
			get: () => this.__data.interpretation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.interpretation = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
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

		Object.defineProperty(this, 'bodySite', {
			enumerable: true,
			get: () => this.__data.bodySite,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.bodySite = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'method', {
			enumerable: true,
			get: () => this.__data.method,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.method = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'specimen', {
			enumerable: true,
			get: () => this.__data.specimen,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.specimen = new Reference(value);
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
				this.__data.device = new Reference(value);
			},
		});

		Object.defineProperty(this, 'referenceRange', {
			enumerable: true,
			get: () => this.__data.referenceRange,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ObservationReferenceRange = require('./observationreferencerange.js');
				this.__data.referenceRange = Array.isArray(value)
					? value.map(v => new ObservationReferenceRange(v))
					: [new ObservationReferenceRange(value)];
			},
		});

		Object.defineProperty(this, 'hasMember', {
			enumerable: true,
			get: () => this.__data.hasMember,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.hasMember = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'derivedFrom', {
			enumerable: true,
			get: () => this.__data.derivedFrom,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.derivedFrom = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'component', {
			enumerable: true,
			get: () => this.__data.component,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ObservationComponent = require('./observationcomponent.js');
				this.__data.component = Array.isArray(value)
					? value.map(v => new ObservationComponent(v))
					: [new ObservationComponent(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Observation',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Observation';
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
			basedOn: this.basedOn && this.basedOn.map(v => v.toJSON()),
			partOf: this.partOf && this.partOf.map(v => v.toJSON()),
			_status: this._status && this._status.toJSON(),
			status: this.status,
			category: this.category && this.category.map(v => v.toJSON()),
			code: this.code && this.code.toJSON(),
			subject: this.subject && this.subject.toJSON(),
			focus: this.focus && this.focus.map(v => v.toJSON()),
			encounter: this.encounter && this.encounter.toJSON(),
			_effectiveDateTime: this._effectiveDateTime && this._effectiveDateTime.toJSON(),
			effectiveDateTime: this.effectiveDateTime,
			effectivePeriod: this.effectivePeriod && this.effectivePeriod.toJSON(),
			effectiveTiming: this.effectiveTiming && this.effectiveTiming.toJSON(),
			_effectiveInstant: this._effectiveInstant && this._effectiveInstant.toJSON(),
			effectiveInstant: this.effectiveInstant,
			_issued: this._issued && this._issued.toJSON(),
			issued: this.issued,
			performer: this.performer && this.performer.map(v => v.toJSON()),
			valueQuantity: this.valueQuantity && this.valueQuantity.toJSON(),
			valueCodeableConcept: this.valueCodeableConcept && this.valueCodeableConcept.toJSON(),
			_valueString: this._valueString && this._valueString.toJSON(),
			valueString: this.valueString,
			_valueBoolean: this._valueBoolean && this._valueBoolean.toJSON(),
			valueBoolean: this.valueBoolean,
			_valueInteger: this._valueInteger && this._valueInteger.toJSON(),
			valueInteger: this.valueInteger,
			valueRange: this.valueRange && this.valueRange.toJSON(),
			valueRatio: this.valueRatio && this.valueRatio.toJSON(),
			valueSampledData: this.valueSampledData && this.valueSampledData.toJSON(),
			_valueTime: this._valueTime && this._valueTime.toJSON(),
			valueTime: this.valueTime,
			_valueDateTime: this._valueDateTime && this._valueDateTime.toJSON(),
			valueDateTime: this.valueDateTime,
			valuePeriod: this.valuePeriod && this.valuePeriod.toJSON(),
			dataAbsentReason: this.dataAbsentReason && this.dataAbsentReason.toJSON(),
			interpretation: this.interpretation && this.interpretation.map(v => v.toJSON()),
			note: this.note && this.note.map(v => v.toJSON()),
			bodySite: this.bodySite && this.bodySite.toJSON(),
			method: this.method && this.method.toJSON(),
			specimen: this.specimen && this.specimen.toJSON(),
			device: this.device && this.device.toJSON(),
			referenceRange: this.referenceRange && this.referenceRange.map(v => v.toJSON()),
			hasMember: this.hasMember && this.hasMember.map(v => v.toJSON()),
			derivedFrom: this.derivedFrom && this.derivedFrom.map(v => v.toJSON()),
			component: this.component && this.component.map(v => v.toJSON()),
		};
	}
};
