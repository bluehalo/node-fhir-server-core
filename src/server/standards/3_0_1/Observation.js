const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');
const InstantScalar = require('./scalars/Instant.scalar');
const TimeScalar = require('./scalars/Time.scalar');

class Observation extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Observation';
		Object.assign(this, opt);
	}

	// This is a Observation resource
	static get __resourceType() {
		return 'Observation';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Observation = new_value;
	}

	// A unique identifier assigned to this observation.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// A plan, proposal or order that is fulfilled in whole or in part by this event.
	get basedOn() {
		return this.__basedOn;
	}

	set basedOn(new_value) {
		const Reference = require('./Reference');
		this.__basedOn = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The status of the result value.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// A code that classifies the general type of observation being made.
	get category() {
		return this.__category;
	}

	set category(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__category = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Describes what was observed. Sometimes this is called the observation \'name\'.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	// The patient, or group of patients, location, or device whose characteristics (direct or indirect) are described by the observation and into whose record the observation is placed.  Comments: Indirect characteristics may be those of a specimen, fetus, donor,  other observer (for example a relative or EMT), or any observation made about the subject.
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// The healthcare event  (e.g. a patient and healthcare provider interaction) during which this observation is made.
	get context() {
		return this.__context;
	}

	set context(new_value) {
		const Reference = require('./Reference');
		this.__context = new Reference(new_value);
	}

	// The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the \'physiologically relevant time\'. This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself.
	get effectiveDateTime() {
		return this.__effectiveDateTime;
	}

	set effectiveDateTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field effectiveDateTime`);
		}
		this.__effectiveDateTime = new_value;
	}

	// The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the \'physiologically relevant time\'. This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself.
	get effectivePeriod() {
		return this.__effectivePeriod;
	}

	set effectivePeriod(new_value) {
		const Period = require('./Period');
		this.__effectivePeriod = new Period(new_value);
	}

	// The date and time this observation was made available to providers, typically after the results have been reviewed and verified.
	get issued() {
		return this.__issued;
	}

	set issued(new_value) {
		// Throw if new value does not match the pattern
		let pattern = InstantScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field issued`);
		}
		this.__issued = new_value;
	}

	// Who was responsible for asserting the observed value as \'true\'.
	get performer() {
		return this.__performer;
	}

	set performer(new_value) {
		const Reference = require('./Reference');
		this.__performer = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
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
	get valueBoolean() {
		return this.__valueBoolean;
	}

	set valueBoolean(new_value) {
		this.__valueBoolean = new_value;
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

	// May include statements about significant, unexpected or unreliable values, or information about the source of the value where this may be relevant to the interpretation of the result.
	get comment() {
		return this.__comment;
	}

	set comment(new_value) {
		this.__comment = new_value;
	}

	// Indicates the site on the subject\'s body where the observation was made (i.e. the target site).
	get bodySite() {
		return this.__bodySite;
	}

	set bodySite(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__bodySite = new CodeableConcept(new_value);
	}

	// Indicates the mechanism used to perform the observation.
	get method() {
		return this.__method;
	}

	set method(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__method = new CodeableConcept(new_value);
	}

	// The specimen that was used when this observation was made.
	get specimen() {
		return this.__specimen;
	}

	set specimen(new_value) {
		const Reference = require('./Reference');
		this.__specimen = new Reference(new_value);
	}

	// The device used to generate the observation data.
	get device() {
		return this.__device;
	}

	set device(new_value) {
		const Reference = require('./Reference');
		this.__device = new Reference(new_value);
	}

	// Guidance on how to interpret the value by comparison to a normal or recommended range.
	get referenceRange() {
		return this.__referenceRange;
	}

	set referenceRange(new_value) {
		const ObservationReferenceRange = require('./ObservationReferenceRange');
		this.__referenceRange = Array.isArray(new_value)
			? new_value.map(val => new ObservationReferenceRange(val))
			: [new ObservationReferenceRange(new_value)];
	}

	// A  reference to another resource (usually another Observation) whose relationship is defined by the relationship type code.
	get related() {
		return this.__related;
	}

	set related(new_value) {
		const ObservationRelated = require('./ObservationRelated');
		this.__related = Array.isArray(new_value)
			? new_value.map(val => new ObservationRelated(val))
			: [new ObservationRelated(new_value)];
	}

	// Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes.  Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations.
	get component() {
		return this.__component;
	}

	set component(new_value) {
		const ObservationComponent = require('./ObservationComponent');
		this.__component = Array.isArray(new_value)
			? new_value.map(val => new ObservationComponent(val))
			: [new ObservationComponent(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			basedOn: this.__basedOn && this.__basedOn.map(v => v.toJSON()),
			status: this.__status,
			category: this.__category && this.__category.map(v => v.toJSON()),
			code: this.__code && this.__code.toJSON(),
			subject: this.__subject && this.__subject.toJSON(),
			context: this.__context && this.__context.toJSON(),
			effectiveDateTime: this.__effectiveDateTime,
			effectivePeriod: this.__effectivePeriod && this.__effectivePeriod.toJSON(),
			issued: this.__issued,
			performer: this.__performer && this.__performer.map(v => v.toJSON()),
			valueQuantity: this.__valueQuantity && this.__valueQuantity.toJSON(),
			valueCodeableConcept: this.__valueCodeableConcept && this.__valueCodeableConcept.toJSON(),
			valueString: this.__valueString,
			valueBoolean: this.__valueBoolean,
			valueRange: this.__valueRange && this.__valueRange.toJSON(),
			valueRatio: this.__valueRatio && this.__valueRatio.toJSON(),
			valueSampledData: this.__valueSampledData && this.__valueSampledData.toJSON(),
			valueAttachment: this.__valueAttachment && this.__valueAttachment.toJSON(),
			valueTime: this.__valueTime,
			valueDateTime: this.__valueDateTime,
			valuePeriod: this.__valuePeriod && this.__valuePeriod.toJSON(),
			dataAbsentReason: this.__dataAbsentReason && this.__dataAbsentReason.toJSON(),
			interpretation: this.__interpretation && this.__interpretation.toJSON(),
			comment: this.__comment,
			bodySite: this.__bodySite && this.__bodySite.toJSON(),
			method: this.__method && this.__method.toJSON(),
			specimen: this.__specimen && this.__specimen.toJSON(),
			device: this.__device && this.__device.toJSON(),
			referenceRange: this.__referenceRange && this.__referenceRange.map(v => v.toJSON()),
			related: this.__related && this.__related.map(v => v.toJSON()),
			component: this.__component && this.__component.map(v => v.toJSON()),
		});
	}
}

module.exports = Observation;
