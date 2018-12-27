const BackboneElement = require('./BackboneElement');
const Base64BinaryScalar = require('./scalars/Base64Binary.scalar');
const InstantScalar = require('./scalars/Instant.scalar');
const UriScalar = require('./scalars/Uri.scalar');
const DateScalar = require('./scalars/Date.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');
const TimeScalar = require('./scalars/Time.scalar');
const CodeScalar = require('./scalars/Code.scalar');
const OidScalar = require('./scalars/Oid.scalar');
const IdScalar = require('./scalars/Id.scalar');
const UnsignedIntScalar = require('./scalars/UnsignedInt.scalar');
const PositiveIntScalar = require('./scalars/PositiveInt.scalar');

class ParametersParameter extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ParametersParameter';
		Object.assign(this, opt);
	}

	// This is a ParametersParameter resource
	static get __resourceType() {
		return 'ParametersParameter';
	}

	// The name of the parameter (reference to the operation definition).
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// If the parameter is a data type.
	get valueBoolean() {
		return this.__valueBoolean;
	}

	set valueBoolean(new_value) {
		this.__valueBoolean = new_value;
	}

	// If the parameter is a data type.
	get valueInteger() {
		return this.__valueInteger;
	}

	set valueInteger(new_value) {
		this.__valueInteger = new_value;
	}

	// If the parameter is a data type.
	get valueDecimal() {
		return this.__valueDecimal;
	}

	set valueDecimal(new_value) {
		this.__valueDecimal = new_value;
	}

	// If the parameter is a data type.
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

	// If the parameter is a data type.
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

	// If the parameter is a data type.
	get valueString() {
		return this.__valueString;
	}

	set valueString(new_value) {
		this.__valueString = new_value;
	}

	// If the parameter is a data type.
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

	// If the parameter is a data type.
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

	// If the parameter is a data type.
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

	// If the parameter is a data type.
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

	// If the parameter is a data type.
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

	// If the parameter is a data type.
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

	// If the parameter is a data type.
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

	// If the parameter is a data type.
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

	// If the parameter is a data type.
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

	// If the parameter is a data type.
	get valueMarkdown() {
		return this.__valueMarkdown;
	}

	set valueMarkdown(new_value) {
		this.__valueMarkdown = new_value;
	}

	// If the parameter is a data type.
	get valueAnnotation() {
		return this.__valueAnnotation;
	}

	set valueAnnotation(new_value) {
		const Annotation = require('./Annotation');
		this.__valueAnnotation = new Annotation(new_value);
	}

	// If the parameter is a data type.
	get valueAttachment() {
		return this.__valueAttachment;
	}

	set valueAttachment(new_value) {
		const Attachment = require('./Attachment');
		this.__valueAttachment = new Attachment(new_value);
	}

	// If the parameter is a data type.
	get valueIdentifier() {
		return this.__valueIdentifier;
	}

	set valueIdentifier(new_value) {
		const Identifier = require('./Identifier');
		this.__valueIdentifier = new Identifier(new_value);
	}

	// If the parameter is a data type.
	get valueCodeableConcept() {
		return this.__valueCodeableConcept;
	}

	set valueCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__valueCodeableConcept = new CodeableConcept(new_value);
	}

	// If the parameter is a data type.
	get valueCoding() {
		return this.__valueCoding;
	}

	set valueCoding(new_value) {
		const Coding = require('./Coding');
		this.__valueCoding = new Coding(new_value);
	}

	// If the parameter is a data type.
	get valueQuantity() {
		return this.__valueQuantity;
	}

	set valueQuantity(new_value) {
		const Quantity = require('./Quantity');
		this.__valueQuantity = new Quantity(new_value);
	}

	// If the parameter is a data type.
	get valueRange() {
		return this.__valueRange;
	}

	set valueRange(new_value) {
		const Range = require('./Range');
		this.__valueRange = new Range(new_value);
	}

	// If the parameter is a data type.
	get valuePeriod() {
		return this.__valuePeriod;
	}

	set valuePeriod(new_value) {
		const Period = require('./Period');
		this.__valuePeriod = new Period(new_value);
	}

	// If the parameter is a data type.
	get valueRatio() {
		return this.__valueRatio;
	}

	set valueRatio(new_value) {
		const Ratio = require('./Ratio');
		this.__valueRatio = new Ratio(new_value);
	}

	// If the parameter is a data type.
	get valueSampledData() {
		return this.__valueSampledData;
	}

	set valueSampledData(new_value) {
		const SampledData = require('./SampledData');
		this.__valueSampledData = new SampledData(new_value);
	}

	// If the parameter is a data type.
	get valueSignature() {
		return this.__valueSignature;
	}

	set valueSignature(new_value) {
		const Signature = require('./Signature');
		this.__valueSignature = new Signature(new_value);
	}

	// If the parameter is a data type.
	get valueHumanName() {
		return this.__valueHumanName;
	}

	set valueHumanName(new_value) {
		const HumanName = require('./HumanName');
		this.__valueHumanName = new HumanName(new_value);
	}

	// If the parameter is a data type.
	get valueAddress() {
		return this.__valueAddress;
	}

	set valueAddress(new_value) {
		const Address = require('./Address');
		this.__valueAddress = new Address(new_value);
	}

	// If the parameter is a data type.
	get valueContactPoint() {
		return this.__valueContactPoint;
	}

	set valueContactPoint(new_value) {
		const ContactPoint = require('./ContactPoint');
		this.__valueContactPoint = new ContactPoint(new_value);
	}

	// If the parameter is a data type.
	get valueTiming() {
		return this.__valueTiming;
	}

	set valueTiming(new_value) {
		const Timing = require('./Timing');
		this.__valueTiming = new Timing(new_value);
	}

	// If the parameter is a data type.
	get valueReference() {
		return this.__valueReference;
	}

	set valueReference(new_value) {
		const Reference = require('./Reference');
		this.__valueReference = new Reference(new_value);
	}

	// If the parameter is a data type.
	get valueMeta() {
		return this.__valueMeta;
	}

	set valueMeta(new_value) {
		const Meta = require('./Meta');
		this.__valueMeta = new Meta(new_value);
	}

	// If the parameter is a whole resource.
	get resource() {
		return this.__resource;
	}

	set resource(new_value) {
		this.__resource = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			name: this.__name,
			valueBoolean: this.__valueBoolean,
			valueInteger: this.__valueInteger,
			valueDecimal: this.__valueDecimal,
			valueBase64Binary: this.__valueBase64Binary,
			valueInstant: this.__valueInstant,
			valueString: this.__valueString,
			valueUri: this.__valueUri,
			valueDate: this.__valueDate,
			valueDateTime: this.__valueDateTime,
			valueTime: this.__valueTime,
			valueCode: this.__valueCode,
			valueOid: this.__valueOid,
			valueId: this.__valueId,
			valueUnsignedInt: this.__valueUnsignedInt,
			valuePositiveInt: this.__valuePositiveInt,
			valueMarkdown: this.__valueMarkdown,
			valueAnnotation: this.__valueAnnotation && this.__valueAnnotation.toJSON(),
			valueAttachment: this.__valueAttachment && this.__valueAttachment.toJSON(),
			valueIdentifier: this.__valueIdentifier && this.__valueIdentifier.toJSON(),
			valueCodeableConcept: this.__valueCodeableConcept && this.__valueCodeableConcept.toJSON(),
			valueCoding: this.__valueCoding && this.__valueCoding.toJSON(),
			valueQuantity: this.__valueQuantity && this.__valueQuantity.toJSON(),
			valueRange: this.__valueRange && this.__valueRange.toJSON(),
			valuePeriod: this.__valuePeriod && this.__valuePeriod.toJSON(),
			valueRatio: this.__valueRatio && this.__valueRatio.toJSON(),
			valueSampledData: this.__valueSampledData && this.__valueSampledData.toJSON(),
			valueSignature: this.__valueSignature && this.__valueSignature.toJSON(),
			valueHumanName: this.__valueHumanName && this.__valueHumanName.toJSON(),
			valueAddress: this.__valueAddress && this.__valueAddress.toJSON(),
			valueContactPoint: this.__valueContactPoint && this.__valueContactPoint.toJSON(),
			valueTiming: this.__valueTiming && this.__valueTiming.toJSON(),
			valueReference: this.__valueReference && this.__valueReference.toJSON(),
			valueMeta: this.__valueMeta && this.__valueMeta.toJSON(),
			resource: this.__resource,
		});
	}
}

module.exports = ParametersParameter;
