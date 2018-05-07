const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Quantity = require('./Quantity');
const Range = require('./Range');
const Ratio = require('./Ratio');
const SampledData = require('./SampledData');
const Attachment = require('./Attachment');
const Period = require('./Period');
const Observation_ReferenceRange = require('./Observation_ReferenceRange');

class Observation_Component extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Observation_Component';
	}

	// Describes what was observed. Sometimes this is called the observation "code".
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		this._code = new CodeableConcept(new_value);
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

	// Guidance on how to interpret the value by comparison to a normal or recommended range.
	get referenceRange () {
		return this._referenceRange;
	}

	set referenceRange ( new_value ) {
		this._referenceRange = Array.isArray(new_value) ? new_value.map(val => new Observation_ReferenceRange(val)) : [new Observation_ReferenceRange(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			code: this._code,
			valueQuantity: this._valueQuantity,
			valueCodeableConcept: this._valueCodeableConcept,
			valueString: this._valueString,
			valueRange: this._valueRange,
			valueRatio: this._valueRatio,
			valueSampledData: this._valueSampledData,
			valueAttachment: this._valueAttachment,
			valueTime: this._valueTime,
			valueDateTime: this._valueDateTime,
			valuePeriod: this._valuePeriod,
			dataAbsentReason: this._dataAbsentReason,
			interpretation: this._interpretation,
			referenceRange: this._referenceRange
		});
	}

}

module.exports = Observation_Component;
