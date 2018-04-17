const CodeableConcept = require('./CodeableConcept');
const Quantity = require('./Quantity');
const ReferenceRange = require('./ReferenceRange');
const SampledData = require('./SampledData');
const Attachment = require('./Attachment');
const Period = require('./Period');
const Ratio = require('./Ratio');



class Component {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// Σ I	1..1	CodeableConcept	Type of component observation (code / type)
	// LOINC Codes (Example)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// Σ	0..1		Actual result
	// valueQuantity : Quantity
	set valueQuantity(value) {
		this._valueQuantity = new Quantity(value);
	}

	get valueQuantity() {
		return this._valueQuantity;
	}

	// valueCodeableConcept			CodeableConcept
	set valueCodeableConcept(value) {
		this._valueCodeableConcept = new CodeableConcept(value);
	}

	get valueCodeableConcept() {
		return this._valueCodeableConcept;
	}
	// valueString			string
	set valueString(value) {
		this._valueString = value;
	}

	get valueString() {
		return this._valueString;
	}

	// valueRange			Range
	set valueRange(value) {
		this._valueRange = new Range(value);
	}

	get valueRange() {
		return this._valueRange;
	}

	// valueRatio			Ratio
	set valueRatio(value) {
		this._valueRatio = new Ratio(value);
	}

	get valueRatio() {
		return this._valueRatio;
	}

	// valueSampledData			SampledData
	set valueSampledData(value) {
		this._valueSampledData = new SampledData(value);
	}

	get valueSampledData() {
		return this._valueSampledData;
	}

	// valueAttachment			Attachment
	set valueAttachment(value) {
		this._valueAttachment = new Attachment(value);
	}

	get valueAttachment() {
		return this._valueAttachment;
	}

	// valueTime			time
	set valueTime(value) {
		this._valueTime = value;
	}

	get valueTime() {
		return this._valueTime;
	}

	// valueDateTime			dateTime
	set valueDateTime(value) {
		this._valueDateTime = value;
	}

	get valueDateTime() {
		return this._valueDateTime;
	}

	// valuePeriod			Period
	set valuePeriod(value) {
		this._valuePeriod = new Period(value);
	}

	get valuePeriod() {
		return this._valuePeriod;
	}

	// 	I	0..1	CodeableConcept	Why the component result is missing
	// Observation Value Absent Reason (Extensible)
	set dataAbsentReason(dataAbsentReason) {
		this._dataAbsentReason = new CodeableConcept(dataAbsentReason);
	}

	get dataAbsentReason() {
		return this._dataAbsentReason;
	}

	// 0..*	see referenceRange	Provides guide for interpretation of component result
	set referenceRange(referenceRange) {
		if (Array.isArray(referenceRange)) {
			this._referenceRange = referenceRange.map((x) => new ReferenceRange(x));
		} else {
			this._referenceRange = [new ReferenceRange(referenceRange)];
		}
	}

	get referenceRange() {
		return this._referenceRange;
	}

	toJSON() {
		return {
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
			referenceRange: this._referenceRange
		};
	}
}

module.exports = Component;
