const BackboneElement = require('./BackboneElement');
const TimeScalar = require('./scalars/Time.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class ObservationComponent extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ObservationComponent';
		Object.assign(this, opt);
	}

	// This is a ObservationComponent resource
	static get __resourceType() {
		return 'ObservationComponent';
	}

	// Describes what was observed. Sometimes this is called the observation \'code\'.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	// The information determined as a result of making the observation, if the information has a simple value.
	get valueQuantity() {
		return this.__valueQuantity;
	}

	set valueQuantity(new_value) {
		const Quantity = require('./Quantity');
		this.__valueQuantity = new Quantity(new_value);
	}

	// The information determined as a result of making the observation, if the information has a simple value.
	get valueCodeableConcept() {
		return this.__valueCodeableConcept;
	}

	set valueCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__valueCodeableConcept = new CodeableConcept(new_value);
	}

	// The information determined as a result of making the observation, if the information has a simple value.
	get valueString() {
		return this.__valueString;
	}

	set valueString(new_value) {
		this.__valueString = new_value;
	}

	// The information determined as a result of making the observation, if the information has a simple value.
	get valueRange() {
		return this.__valueRange;
	}

	set valueRange(new_value) {
		const Range = require('./Range');
		this.__valueRange = new Range(new_value);
	}

	// The information determined as a result of making the observation, if the information has a simple value.
	get valueRatio() {
		return this.__valueRatio;
	}

	set valueRatio(new_value) {
		const Ratio = require('./Ratio');
		this.__valueRatio = new Ratio(new_value);
	}

	// The information determined as a result of making the observation, if the information has a simple value.
	get valueSampledData() {
		return this.__valueSampledData;
	}

	set valueSampledData(new_value) {
		const SampledData = require('./SampledData');
		this.__valueSampledData = new SampledData(new_value);
	}

	// The information determined as a result of making the observation, if the information has a simple value.
	get valueAttachment() {
		return this.__valueAttachment;
	}

	set valueAttachment(new_value) {
		const Attachment = require('./Attachment');
		this.__valueAttachment = new Attachment(new_value);
	}

	// The information determined as a result of making the observation, if the information has a simple value.
	get valueTime() {
		return this.__valueTime;
	}

	set valueTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = TimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field valueTime`);
		}
		this.__valueTime = new_value;
	}

	// The information determined as a result of making the observation, if the information has a simple value.
	get valueDateTime() {
		return this.__valueDateTime;
	}

	set valueDateTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field valueDateTime`);
		}
		this.__valueDateTime = new_value;
	}

	// The information determined as a result of making the observation, if the information has a simple value.
	get valuePeriod() {
		return this.__valuePeriod;
	}

	set valuePeriod(new_value) {
		const Period = require('./Period');
		this.__valuePeriod = new Period(new_value);
	}

	// Provides a reason why the expected value in the element Observation.value[x] is missing.
	get dataAbsentReason() {
		return this.__dataAbsentReason;
	}

	set dataAbsentReason(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__dataAbsentReason = new CodeableConcept(new_value);
	}

	// The assessment made based on the result of the observation.  Intended as a simple compact code often placed adjacent to the result value in reports and flow sheets to signal the meaning/normalcy status of the result. Otherwise known as abnormal flag.
	get interpretation() {
		return this.__interpretation;
	}

	set interpretation(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__interpretation = new CodeableConcept(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			code: this.__code && this.__code.toJSON(),
			valueQuantity: this.__valueQuantity && this.__valueQuantity.toJSON(),
			valueCodeableConcept: this.__valueCodeableConcept && this.__valueCodeableConcept.toJSON(),
			valueString: this.__valueString,
			valueRange: this.__valueRange && this.__valueRange.toJSON(),
			valueRatio: this.__valueRatio && this.__valueRatio.toJSON(),
			valueSampledData: this.__valueSampledData && this.__valueSampledData.toJSON(),
			valueAttachment: this.__valueAttachment && this.__valueAttachment.toJSON(),
			valueTime: this.__valueTime,
			valueDateTime: this.__valueDateTime,
			valuePeriod: this.__valuePeriod && this.__valuePeriod.toJSON(),
			dataAbsentReason: this.__dataAbsentReason && this.__dataAbsentReason.toJSON(),
			interpretation: this.__interpretation && this.__interpretation.toJSON(),
		});
	}
}

module.exports = ObservationComponent;
