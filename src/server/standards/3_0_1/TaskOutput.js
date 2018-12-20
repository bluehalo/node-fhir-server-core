const BackboneElement = require('./BackboneElement');
const Base64BinaryScalar = require('./scalars/Base64Binary.scalar');
const CodeScalar = require('./scalars/Code.scalar');
const DateScalar = require('./scalars/Date.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');
const IdScalar = require('./scalars/Id.scalar');
const InstantScalar = require('./scalars/Instant.scalar');
const OidScalar = require('./scalars/Oid.scalar');
const PositiveIntScalar = require('./scalars/PositiveInt.scalar');
const TimeScalar = require('./scalars/Time.scalar');
const UnsignedIntScalar = require('./scalars/UnsignedInt.scalar');
const UriScalar = require('./scalars/Uri.scalar');

class TaskOutput extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TaskOutput';
		Object.assign(this, opt);
	}

	// This is a TaskOutput resource
	static get __resourceType() {
		return 'TaskOutput';
	}

	// The name of the Output parameter.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// The value of the Output parameter as a basic type.
	get valueBase64Binary() {
		return this.__valueBase64Binary;
	}

	set valueBase64Binary(new_value) {
		// Throw if new value does not match the pattern
		let pattern = Base64BinaryScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field valueBase64Binary`);
		}
		this.__valueBase64Binary = new_value;
	}

	// The value of the Output parameter as a basic type.
	get valueBoolean() {
		return this.__valueBoolean;
	}

	set valueBoolean(new_value) {
		this.__valueBoolean = new_value;
	}

	// The value of the Output parameter as a basic type.
	get valueCode() {
		return this.__valueCode;
	}

	set valueCode(new_value) {
		// Throw if new value does not match the pattern
		let pattern = CodeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field valueCode`);
		}
		this.__valueCode = new_value;
	}

	// The value of the Output parameter as a basic type.
	get valueDate() {
		return this.__valueDate;
	}

	set valueDate(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field valueDate`);
		}
		this.__valueDate = new_value;
	}

	// The value of the Output parameter as a basic type.
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

	// The value of the Output parameter as a basic type.
	get valueDecimal() {
		return this.__valueDecimal;
	}

	set valueDecimal(new_value) {
		this.__valueDecimal = new_value;
	}

	// The value of the Output parameter as a basic type.
	get valueId() {
		return this.__valueId;
	}

	set valueId(new_value) {
		// Throw if new value does not match the pattern
		let pattern = IdScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field valueId`);
		}
		this.__valueId = new_value;
	}

	// The value of the Output parameter as a basic type.
	get valueInstant() {
		return this.__valueInstant;
	}

	set valueInstant(new_value) {
		// Throw if new value does not match the pattern
		let pattern = InstantScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field valueInstant`);
		}
		this.__valueInstant = new_value;
	}

	// The value of the Output parameter as a basic type.
	get valueInteger() {
		return this.__valueInteger;
	}

	set valueInteger(new_value) {
		this.__valueInteger = new_value;
	}

	// The value of the Output parameter as a basic type.
	get valueMarkdown() {
		return this.__valueMarkdown;
	}

	set valueMarkdown(new_value) {
		this.__valueMarkdown = new_value;
	}

	// The value of the Output parameter as a basic type.
	get valueOid() {
		return this.__valueOid;
	}

	set valueOid(new_value) {
		// Throw if new value does not match the pattern
		let pattern = OidScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field valueOid`);
		}
		this.__valueOid = new_value;
	}

	// The value of the Output parameter as a basic type.
	get valuePositiveInt() {
		return this.__valuePositiveInt;
	}

	set valuePositiveInt(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field valuePositiveInt`);
		}
		this.__valuePositiveInt = new_value;
	}

	// The value of the Output parameter as a basic type.
	get valueString() {
		return this.__valueString;
	}

	set valueString(new_value) {
		this.__valueString = new_value;
	}

	// The value of the Output parameter as a basic type.
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

	// The value of the Output parameter as a basic type.
	get valueUnsignedInt() {
		return this.__valueUnsignedInt;
	}

	set valueUnsignedInt(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UnsignedIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field valueUnsignedInt`);
		}
		this.__valueUnsignedInt = new_value;
	}

	// The value of the Output parameter as a basic type.
	get valueUri() {
		return this.__valueUri;
	}

	set valueUri(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field valueUri`);
		}
		this.__valueUri = new_value;
	}

	// The value of the Output parameter as a basic type.
	get valueAddress() {
		return this.__valueAddress;
	}

	set valueAddress(new_value) {
		const Address = require('./Address');
		this.__valueAddress = new Address(new_value);
	}

	// The value of the Output parameter as a basic type.
	get valueAge() {
		return this.__valueAge;
	}

	set valueAge(new_value) {
		const Age = require('./Age');
		this.__valueAge = new Age(new_value);
	}

	// The value of the Output parameter as a basic type.
	get valueAnnotation() {
		return this.__valueAnnotation;
	}

	set valueAnnotation(new_value) {
		const Annotation = require('./Annotation');
		this.__valueAnnotation = new Annotation(new_value);
	}

	// The value of the Output parameter as a basic type.
	get valueAttachment() {
		return this.__valueAttachment;
	}

	set valueAttachment(new_value) {
		const Attachment = require('./Attachment');
		this.__valueAttachment = new Attachment(new_value);
	}

	// The value of the Output parameter as a basic type.
	get valueCodeableConcept() {
		return this.__valueCodeableConcept;
	}

	set valueCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__valueCodeableConcept = new CodeableConcept(new_value);
	}

	// The value of the Output parameter as a basic type.
	get valueCoding() {
		return this.__valueCoding;
	}

	set valueCoding(new_value) {
		const Coding = require('./Coding');
		this.__valueCoding = new Coding(new_value);
	}

	// The value of the Output parameter as a basic type.
	get valueContactPoint() {
		return this.__valueContactPoint;
	}

	set valueContactPoint(new_value) {
		const ContactPoint = require('./ContactPoint');
		this.__valueContactPoint = new ContactPoint(new_value);
	}

	// The value of the Output parameter as a basic type.
	get valueCount() {
		return this.__valueCount;
	}

	set valueCount(new_value) {
		const Count = require('./Count');
		this.__valueCount = new Count(new_value);
	}

	// The value of the Output parameter as a basic type.
	get valueDistance() {
		return this.__valueDistance;
	}

	set valueDistance(new_value) {
		const Distance = require('./Distance');
		this.__valueDistance = new Distance(new_value);
	}

	// The value of the Output parameter as a basic type.
	get valueDuration() {
		return this.__valueDuration;
	}

	set valueDuration(new_value) {
		const Duration = require('./Duration');
		this.__valueDuration = new Duration(new_value);
	}

	// The value of the Output parameter as a basic type.
	get valueHumanName() {
		return this.__valueHumanName;
	}

	set valueHumanName(new_value) {
		const HumanName = require('./HumanName');
		this.__valueHumanName = new HumanName(new_value);
	}

	// The value of the Output parameter as a basic type.
	get valueIdentifier() {
		return this.__valueIdentifier;
	}

	set valueIdentifier(new_value) {
		const Identifier = require('./Identifier');
		this.__valueIdentifier = new Identifier(new_value);
	}

	// The value of the Output parameter as a basic type.
	get valueMoney() {
		return this.__valueMoney;
	}

	set valueMoney(new_value) {
		const Money = require('./Money');
		this.__valueMoney = new Money(new_value);
	}

	// The value of the Output parameter as a basic type.
	get valuePeriod() {
		return this.__valuePeriod;
	}

	set valuePeriod(new_value) {
		const Period = require('./Period');
		this.__valuePeriod = new Period(new_value);
	}

	// The value of the Output parameter as a basic type.
	get valueQuantity() {
		return this.__valueQuantity;
	}

	set valueQuantity(new_value) {
		const Quantity = require('./Quantity');
		this.__valueQuantity = new Quantity(new_value);
	}

	// The value of the Output parameter as a basic type.
	get valueRange() {
		return this.__valueRange;
	}

	set valueRange(new_value) {
		const Range = require('./Range');
		this.__valueRange = new Range(new_value);
	}

	// The value of the Output parameter as a basic type.
	get valueRatio() {
		return this.__valueRatio;
	}

	set valueRatio(new_value) {
		const Ratio = require('./Ratio');
		this.__valueRatio = new Ratio(new_value);
	}

	// The value of the Output parameter as a basic type.
	get valueReference() {
		return this.__valueReference;
	}

	set valueReference(new_value) {
		const Reference = require('./Reference');
		this.__valueReference = new Reference(new_value);
	}

	// The value of the Output parameter as a basic type.
	get valueSampledData() {
		return this.__valueSampledData;
	}

	set valueSampledData(new_value) {
		const SampledData = require('./SampledData');
		this.__valueSampledData = new SampledData(new_value);
	}

	// The value of the Output parameter as a basic type.
	get valueSignature() {
		return this.__valueSignature;
	}

	set valueSignature(new_value) {
		const Signature = require('./Signature');
		this.__valueSignature = new Signature(new_value);
	}

	// The value of the Output parameter as a basic type.
	get valueTiming() {
		return this.__valueTiming;
	}

	set valueTiming(new_value) {
		const Timing = require('./Timing');
		this.__valueTiming = new Timing(new_value);
	}

	// The value of the Output parameter as a basic type.
	get valueMeta() {
		return this.__valueMeta;
	}

	set valueMeta(new_value) {
		const Meta = require('./Meta');
		this.__valueMeta = new Meta(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type && this.__type.toJSON(),
			valueBase64Binary: this.__valueBase64Binary,
			valueBoolean: this.__valueBoolean,
			valueCode: this.__valueCode,
			valueDate: this.__valueDate,
			valueDateTime: this.__valueDateTime,
			valueDecimal: this.__valueDecimal,
			valueId: this.__valueId,
			valueInstant: this.__valueInstant,
			valueInteger: this.__valueInteger,
			valueMarkdown: this.__valueMarkdown,
			valueOid: this.__valueOid,
			valuePositiveInt: this.__valuePositiveInt,
			valueString: this.__valueString,
			valueTime: this.__valueTime,
			valueUnsignedInt: this.__valueUnsignedInt,
			valueUri: this.__valueUri,
			valueAddress: this.__valueAddress && this.__valueAddress.toJSON(),
			valueAge: this.__valueAge && this.__valueAge.toJSON(),
			valueAnnotation: this.__valueAnnotation && this.__valueAnnotation.toJSON(),
			valueAttachment: this.__valueAttachment && this.__valueAttachment.toJSON(),
			valueCodeableConcept: this.__valueCodeableConcept && this.__valueCodeableConcept.toJSON(),
			valueCoding: this.__valueCoding && this.__valueCoding.toJSON(),
			valueContactPoint: this.__valueContactPoint && this.__valueContactPoint.toJSON(),
			valueCount: this.__valueCount && this.__valueCount.toJSON(),
			valueDistance: this.__valueDistance && this.__valueDistance.toJSON(),
			valueDuration: this.__valueDuration && this.__valueDuration.toJSON(),
			valueHumanName: this.__valueHumanName && this.__valueHumanName.toJSON(),
			valueIdentifier: this.__valueIdentifier && this.__valueIdentifier.toJSON(),
			valueMoney: this.__valueMoney && this.__valueMoney.toJSON(),
			valuePeriod: this.__valuePeriod && this.__valuePeriod.toJSON(),
			valueQuantity: this.__valueQuantity && this.__valueQuantity.toJSON(),
			valueRange: this.__valueRange && this.__valueRange.toJSON(),
			valueRatio: this.__valueRatio && this.__valueRatio.toJSON(),
			valueReference: this.__valueReference && this.__valueReference.toJSON(),
			valueSampledData: this.__valueSampledData && this.__valueSampledData.toJSON(),
			valueSignature: this.__valueSignature && this.__valueSignature.toJSON(),
			valueTiming: this.__valueTiming && this.__valueTiming.toJSON(),
			valueMeta: this.__valueMeta && this.__valueMeta.toJSON(),
		});
	}
}

module.exports = TaskOutput;
