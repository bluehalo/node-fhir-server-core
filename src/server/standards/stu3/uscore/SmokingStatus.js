const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');
const Period = require('./Period');
const Quantity = require('./Quantity');
const Range = require('./Range');
const Ratio = require('./Ratio');
const SampledData = require('./SampledData');
const Attachment = require('./Attachment');
const Observation_ReferenceRange = require('./Observation_ReferenceRange');
const Observation_Related = require('./Observation_Related');
const Observation_Component = require('./Observation_Component');

class SmokingStatus extends DomainResource {

	constructor ( opts ) {
		super();
		this._resourceType = 'SmokingStatus';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'SmokingStatus';
	}

	// This is a SmokingStatus resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['SmokingStatus'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// A unique identifier assigned to this observation.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// A plan, proposal or order that is fulfilled in whole or in part by this event.
	get basedOn () {
		return this._basedOn;
	}

	set basedOn ( new_value ) {
		this._basedOn = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The status of the result value.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['registered', 'preliminary', 'final', 'amended', 'corrected', 'cancelled', 'entered-in-error', 'unknown'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// A code that classifies the general type of observation being made.
	get category () {
		return this._category;
	}

	set category ( new_value ) {
		this._category = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Describes what was observed. Sometimes this is called the observation "name".
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		this._code = new CodeableConcept(new_value);
	}

	// The patient, or group of patients, location, or device whose characteristics (direct or indirect) are described by the observation and into whose record the observation is placed.  Comments: Indirect characteristics may be those of a specimen, fetus, donor,  other observer (for example a relative or EMT), or any observation made about the subject.
	get subject () {
		return this._subject;
	}

	set subject ( new_value ) {
		this._subject = new Reference(new_value);
	}

	// The healthcare event  (e.g. a patient and healthcare provider interaction) during which this observation is made.
	get context () {
		return this._context;
	}

	set context ( new_value ) {
		this._context = new Reference(new_value);
	}

	// The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the "physiologically relevant time". This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself.
	get effectiveDateTime () {
		return this._effectiveDateTime;
	}

	set effectiveDateTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field effectiveDateTime`);
		}
		this._effectiveDateTime = new_value;
	}

	// The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the "physiologically relevant time". This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself.
	get effectivePeriod () {
		return this._effectivePeriod;
	}

	set effectivePeriod ( new_value ) {
		this._effectivePeriod = new Period(new_value);
	}

	// The date and time this observation was made available to providers, typically after the results have been reviewed and verified.
	get issued () {
		return this._issued;
	}

	set issued ( new_value ) {
		this._issued = new_value;
	}

	// Who was responsible for asserting the observed value as "true".
	get performer () {
		return this._performer;
	}

	set performer ( new_value ) {
		this._performer = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The information determined as a result of making the observation, if the information has a simple value.
	get valueQuantity () {
		return this._valueQuantity;
	}

	set valueQuantity ( new_value ) {
		this._valueQuantity = new Quantity(new_value);
	}

	// The information determined as a result of making the observation, if the information has a simple value.
	get valueCodeableConcept () {
		return this._valueCodeableConcept;
	}

	set valueCodeableConcept ( new_value ) {
		this._valueCodeableConcept = new CodeableConcept(new_value);
	}

	// The information determined as a result of making the observation, if the information has a simple value.
	get valueString () {
		return this._valueString;
	}

	set valueString ( new_value ) {
		this._valueString = new_value;
	}

	// The information determined as a result of making the observation, if the information has a simple value.
	get valueBoolean () {
		return this._valueBoolean;
	}

	set valueBoolean ( new_value ) {
		this._valueBoolean = new_value;
	}

	// The information determined as a result of making the observation, if the information has a simple value.
	get valueRange () {
		return this._valueRange;
	}

	set valueRange ( new_value ) {
		this._valueRange = new Range(new_value);
	}

	// The information determined as a result of making the observation, if the information has a simple value.
	get valueRatio () {
		return this._valueRatio;
	}

	set valueRatio ( new_value ) {
		this._valueRatio = new Ratio(new_value);
	}

	// The information determined as a result of making the observation, if the information has a simple value.
	get valueSampledData () {
		return this._valueSampledData;
	}

	set valueSampledData ( new_value ) {
		this._valueSampledData = new SampledData(new_value);
	}

	// The information determined as a result of making the observation, if the information has a simple value.
	get valueAttachment () {
		return this._valueAttachment;
	}

	set valueAttachment ( new_value ) {
		this._valueAttachment = new Attachment(new_value);
	}

	// The information determined as a result of making the observation, if the information has a simple value.
	get valueTime () {
		return this._valueTime;
	}

	set valueTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field valueTime`);
		}
		this._valueTime = new_value;
	}

	// The information determined as a result of making the observation, if the information has a simple value.
	get valueDateTime () {
		return this._valueDateTime;
	}

	set valueDateTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field valueDateTime`);
		}
		this._valueDateTime = new_value;
	}

	// The information determined as a result of making the observation, if the information has a simple value.
	get valuePeriod () {
		return this._valuePeriod;
	}

	set valuePeriod ( new_value ) {
		this._valuePeriod = new Period(new_value);
	}

	// Provides a reason why the expected value in the element Observation.value[x] is missing.
	get dataAbsentReason () {
		return this._dataAbsentReason;
	}

	set dataAbsentReason ( new_value ) {
		this._dataAbsentReason = new CodeableConcept(new_value);
	}

	// The assessment made based on the result of the observation.  Intended as a simple compact code often placed adjacent to the result value in reports and flow sheets to signal the meaning/normalcy status of the result. Otherwise known as abnormal flag.
	get interpretation () {
		return this._interpretation;
	}

	set interpretation ( new_value ) {
		this._interpretation = new CodeableConcept(new_value);
	}

	// May include statements about significant, unexpected or unreliable values, or information about the source of the value where this may be relevant to the interpretation of the result.
	get comment () {
		return this._comment;
	}

	set comment ( new_value ) {
		this._comment = new_value;
	}

	// Indicates the site on the subject's body where the observation was made (i.e. the target site).
	get bodySite () {
		return this._bodySite;
	}

	set bodySite ( new_value ) {
		this._bodySite = new CodeableConcept(new_value);
	}

	// Indicates the mechanism used to perform the observation.
	get method () {
		return this._method;
	}

	set method ( new_value ) {
		this._method = new CodeableConcept(new_value);
	}

	// The specimen that was used when this observation was made.
	get specimen () {
		return this._specimen;
	}

	set specimen ( new_value ) {
		this._specimen = new Reference(new_value);
	}

	// The device used to generate the observation data.
	get device () {
		return this._device;
	}

	set device ( new_value ) {
		this._device = new Reference(new_value);
	}

	// Guidance on how to interpret the value by comparison to a normal or recommended range.
	get referenceRange () {
		return this._referenceRange;
	}

	set referenceRange ( new_value ) {
		this._referenceRange = Array.isArray(new_value) ? new_value.map(val => new Observation_ReferenceRange(val)) : [new Observation_ReferenceRange(new_value)];
	}

	// A  reference to another resource (usually another Observation) whose relationship is defined by the relationship type code.
	get related () {
		return this._related;
	}

	set related ( new_value ) {
		this._related = Array.isArray(new_value) ? new_value.map(val => new Observation_Related(val)) : [new Observation_Related(new_value)];
	}

	// Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes.  Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations.
	get component () {
		return this._component;
	}

	set component ( new_value ) {
		this._component = Array.isArray(new_value) ? new_value.map(val => new Observation_Component(val)) : [new Observation_Component(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier,
			basedOn: this._basedOn,
			status: this._status,
			category: this._category,
			code: this._code,
			subject: this._subject,
			context: this._context,
			effectiveDateTime: this._effectiveDateTime,
			effectivePeriod: this._effectivePeriod,
			issued: this._issued,
			performer: this._performer,
			valueQuantity: this._valueQuantity,
			valueCodeableConcept: this._valueCodeableConcept,
			valueString: this._valueString,
			valueBoolean: this._valueBoolean,
			valueRange: this._valueRange,
			valueRatio: this._valueRatio,
			valueSampledData: this._valueSampledData,
			valueAttachment: this._valueAttachment,
			valueTime: this._valueTime,
			valueDateTime: this._valueDateTime,
			valuePeriod: this._valuePeriod,
			dataAbsentReason: this._dataAbsentReason,
			interpretation: this._interpretation,
			comment: this._comment,
			bodySite: this._bodySite,
			method: this._method,
			specimen: this._specimen,
			device: this._device,
			referenceRange: this._referenceRange,
			related: this._related,
			component: this._component
		});
	}

}

module.exports = SmokingStatus;
