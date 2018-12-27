const BackboneElement = require('./BackboneElement');
const IdScalar = require('./scalars/Id.scalar');
const Base64BinaryScalar = require('./scalars/Base64Binary.scalar');
const CodeScalar = require('./scalars/Code.scalar');
const DateScalar = require('./scalars/Date.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');
const InstantScalar = require('./scalars/Instant.scalar');
const OidScalar = require('./scalars/Oid.scalar');
const PositiveIntScalar = require('./scalars/PositiveInt.scalar');
const TimeScalar = require('./scalars/Time.scalar');
const UnsignedIntScalar = require('./scalars/UnsignedInt.scalar');
const UriScalar = require('./scalars/Uri.scalar');

class StructureMapGroupRuleSource extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'StructureMapGroupRuleSource';
		Object.assign(this, opt);
	}

	// This is a StructureMapGroupRuleSource resource
	static get __resourceType() {
		return 'StructureMapGroupRuleSource';
	}

	// Type or variable this rule applies to.
	get context() {
		return this.__context;
	}

	set context(new_value) {
		// Throw if new value does not match the pattern
		let pattern = IdScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field context`);
		}
		this.__context = new_value;
	}

	// Specified minimum cardinality for the element. This is optional; if present, it acts an implicit check on the input content.
	get min() {
		return this.__min;
	}

	set min(new_value) {
		this.__min = new_value;
	}

	// Specified maximum cardinality for the element - a number or a \'*\'. This is optional; if present, it acts an implicit check on the input content (* just serves as documentation; it\'s the default value).
	get max() {
		return this.__max;
	}

	set max(new_value) {
		this.__max = new_value;
	}

	// Specified type for the element. This works as a condition on the mapping - use for polymorphic elements.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueBase64Binary() {
		return this.__defaultValueBase64Binary;
	}

	set defaultValueBase64Binary(new_value) {
		// Throw if new value does not match the pattern
		let pattern = Base64BinaryScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field defaultValueBase64Binary`);
		}
		this.__defaultValueBase64Binary = new_value;
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueBoolean() {
		return this.__defaultValueBoolean;
	}

	set defaultValueBoolean(new_value) {
		this.__defaultValueBoolean = new_value;
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueCode() {
		return this.__defaultValueCode;
	}

	set defaultValueCode(new_value) {
		// Throw if new value does not match the pattern
		let pattern = CodeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field defaultValueCode`);
		}
		this.__defaultValueCode = new_value;
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueDate() {
		return this.__defaultValueDate;
	}

	set defaultValueDate(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field defaultValueDate`);
		}
		this.__defaultValueDate = new_value;
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueDateTime() {
		return this.__defaultValueDateTime;
	}

	set defaultValueDateTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field defaultValueDateTime`);
		}
		this.__defaultValueDateTime = new_value;
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueDecimal() {
		return this.__defaultValueDecimal;
	}

	set defaultValueDecimal(new_value) {
		this.__defaultValueDecimal = new_value;
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueId() {
		return this.__defaultValueId;
	}

	set defaultValueId(new_value) {
		// Throw if new value does not match the pattern
		let pattern = IdScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field defaultValueId`);
		}
		this.__defaultValueId = new_value;
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueInstant() {
		return this.__defaultValueInstant;
	}

	set defaultValueInstant(new_value) {
		// Throw if new value does not match the pattern
		let pattern = InstantScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field defaultValueInstant`);
		}
		this.__defaultValueInstant = new_value;
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueInteger() {
		return this.__defaultValueInteger;
	}

	set defaultValueInteger(new_value) {
		this.__defaultValueInteger = new_value;
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueMarkdown() {
		return this.__defaultValueMarkdown;
	}

	set defaultValueMarkdown(new_value) {
		this.__defaultValueMarkdown = new_value;
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueOid() {
		return this.__defaultValueOid;
	}

	set defaultValueOid(new_value) {
		// Throw if new value does not match the pattern
		let pattern = OidScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field defaultValueOid`);
		}
		this.__defaultValueOid = new_value;
	}

	// A value to use if there is no existing value in the source object.
	get defaultValuePositiveInt() {
		return this.__defaultValuePositiveInt;
	}

	set defaultValuePositiveInt(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field defaultValuePositiveInt`);
		}
		this.__defaultValuePositiveInt = new_value;
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueString() {
		return this.__defaultValueString;
	}

	set defaultValueString(new_value) {
		this.__defaultValueString = new_value;
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueTime() {
		return this.__defaultValueTime;
	}

	set defaultValueTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = TimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field defaultValueTime`);
		}
		this.__defaultValueTime = new_value;
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueUnsignedInt() {
		return this.__defaultValueUnsignedInt;
	}

	set defaultValueUnsignedInt(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UnsignedIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field defaultValueUnsignedInt`);
		}
		this.__defaultValueUnsignedInt = new_value;
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueUri() {
		return this.__defaultValueUri;
	}

	set defaultValueUri(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field defaultValueUri`);
		}
		this.__defaultValueUri = new_value;
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueAddress() {
		return this.__defaultValueAddress;
	}

	set defaultValueAddress(new_value) {
		const Address = require('./Address');
		this.__defaultValueAddress = new Address(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueAge() {
		return this.__defaultValueAge;
	}

	set defaultValueAge(new_value) {
		const Age = require('./Age');
		this.__defaultValueAge = new Age(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueAnnotation() {
		return this.__defaultValueAnnotation;
	}

	set defaultValueAnnotation(new_value) {
		const Annotation = require('./Annotation');
		this.__defaultValueAnnotation = new Annotation(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueAttachment() {
		return this.__defaultValueAttachment;
	}

	set defaultValueAttachment(new_value) {
		const Attachment = require('./Attachment');
		this.__defaultValueAttachment = new Attachment(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueCodeableConcept() {
		return this.__defaultValueCodeableConcept;
	}

	set defaultValueCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__defaultValueCodeableConcept = new CodeableConcept(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueCoding() {
		return this.__defaultValueCoding;
	}

	set defaultValueCoding(new_value) {
		const Coding = require('./Coding');
		this.__defaultValueCoding = new Coding(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueContactPoint() {
		return this.__defaultValueContactPoint;
	}

	set defaultValueContactPoint(new_value) {
		const ContactPoint = require('./ContactPoint');
		this.__defaultValueContactPoint = new ContactPoint(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueCount() {
		return this.__defaultValueCount;
	}

	set defaultValueCount(new_value) {
		const Count = require('./Count');
		this.__defaultValueCount = new Count(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueDistance() {
		return this.__defaultValueDistance;
	}

	set defaultValueDistance(new_value) {
		const Distance = require('./Distance');
		this.__defaultValueDistance = new Distance(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueDuration() {
		return this.__defaultValueDuration;
	}

	set defaultValueDuration(new_value) {
		const Duration = require('./Duration');
		this.__defaultValueDuration = new Duration(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueHumanName() {
		return this.__defaultValueHumanName;
	}

	set defaultValueHumanName(new_value) {
		const HumanName = require('./HumanName');
		this.__defaultValueHumanName = new HumanName(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueIdentifier() {
		return this.__defaultValueIdentifier;
	}

	set defaultValueIdentifier(new_value) {
		const Identifier = require('./Identifier');
		this.__defaultValueIdentifier = new Identifier(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueMoney() {
		return this.__defaultValueMoney;
	}

	set defaultValueMoney(new_value) {
		const Money = require('./Money');
		this.__defaultValueMoney = new Money(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValuePeriod() {
		return this.__defaultValuePeriod;
	}

	set defaultValuePeriod(new_value) {
		const Period = require('./Period');
		this.__defaultValuePeriod = new Period(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueQuantity() {
		return this.__defaultValueQuantity;
	}

	set defaultValueQuantity(new_value) {
		const Quantity = require('./Quantity');
		this.__defaultValueQuantity = new Quantity(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueRange() {
		return this.__defaultValueRange;
	}

	set defaultValueRange(new_value) {
		const Range = require('./Range');
		this.__defaultValueRange = new Range(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueRatio() {
		return this.__defaultValueRatio;
	}

	set defaultValueRatio(new_value) {
		const Ratio = require('./Ratio');
		this.__defaultValueRatio = new Ratio(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueReference() {
		return this.__defaultValueReference;
	}

	set defaultValueReference(new_value) {
		const Reference = require('./Reference');
		this.__defaultValueReference = new Reference(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueSampledData() {
		return this.__defaultValueSampledData;
	}

	set defaultValueSampledData(new_value) {
		const SampledData = require('./SampledData');
		this.__defaultValueSampledData = new SampledData(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueSignature() {
		return this.__defaultValueSignature;
	}

	set defaultValueSignature(new_value) {
		const Signature = require('./Signature');
		this.__defaultValueSignature = new Signature(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueTiming() {
		return this.__defaultValueTiming;
	}

	set defaultValueTiming(new_value) {
		const Timing = require('./Timing');
		this.__defaultValueTiming = new Timing(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueMeta() {
		return this.__defaultValueMeta;
	}

	set defaultValueMeta(new_value) {
		const Meta = require('./Meta');
		this.__defaultValueMeta = new Meta(new_value);
	}

	// Optional field for this source.
	get element() {
		return this.__element;
	}

	set element(new_value) {
		this.__element = new_value;
	}

	// How to handle the list mode for this element.
	get listMode() {
		return this.__listMode;
	}

	set listMode(new_value) {
		this.__listMode = new_value;
	}

	// Named context for field, if a field is specified.
	get variable() {
		return this.__variable;
	}

	set variable(new_value) {
		// Throw if new value does not match the pattern
		let pattern = IdScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field variable`);
		}
		this.__variable = new_value;
	}

	// FHIRPath expression  - must be true or the rule does not apply.
	get condition() {
		return this.__condition;
	}

	set condition(new_value) {
		this.__condition = new_value;
	}

	// FHIRPath expression  - must be true or the mapping engine throws an error instead of completing.
	get check() {
		return this.__check;
	}

	set check(new_value) {
		this.__check = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			context: this.__context,
			min: this.__min,
			max: this.__max,
			type: this.__type,
			defaultValueBase64Binary: this.__defaultValueBase64Binary,
			defaultValueBoolean: this.__defaultValueBoolean,
			defaultValueCode: this.__defaultValueCode,
			defaultValueDate: this.__defaultValueDate,
			defaultValueDateTime: this.__defaultValueDateTime,
			defaultValueDecimal: this.__defaultValueDecimal,
			defaultValueId: this.__defaultValueId,
			defaultValueInstant: this.__defaultValueInstant,
			defaultValueInteger: this.__defaultValueInteger,
			defaultValueMarkdown: this.__defaultValueMarkdown,
			defaultValueOid: this.__defaultValueOid,
			defaultValuePositiveInt: this.__defaultValuePositiveInt,
			defaultValueString: this.__defaultValueString,
			defaultValueTime: this.__defaultValueTime,
			defaultValueUnsignedInt: this.__defaultValueUnsignedInt,
			defaultValueUri: this.__defaultValueUri,
			defaultValueAddress: this.__defaultValueAddress && this.__defaultValueAddress.toJSON(),
			defaultValueAge: this.__defaultValueAge && this.__defaultValueAge.toJSON(),
			defaultValueAnnotation: this.__defaultValueAnnotation && this.__defaultValueAnnotation.toJSON(),
			defaultValueAttachment: this.__defaultValueAttachment && this.__defaultValueAttachment.toJSON(),
			defaultValueCodeableConcept: this.__defaultValueCodeableConcept && this.__defaultValueCodeableConcept.toJSON(),
			defaultValueCoding: this.__defaultValueCoding && this.__defaultValueCoding.toJSON(),
			defaultValueContactPoint: this.__defaultValueContactPoint && this.__defaultValueContactPoint.toJSON(),
			defaultValueCount: this.__defaultValueCount && this.__defaultValueCount.toJSON(),
			defaultValueDistance: this.__defaultValueDistance && this.__defaultValueDistance.toJSON(),
			defaultValueDuration: this.__defaultValueDuration && this.__defaultValueDuration.toJSON(),
			defaultValueHumanName: this.__defaultValueHumanName && this.__defaultValueHumanName.toJSON(),
			defaultValueIdentifier: this.__defaultValueIdentifier && this.__defaultValueIdentifier.toJSON(),
			defaultValueMoney: this.__defaultValueMoney && this.__defaultValueMoney.toJSON(),
			defaultValuePeriod: this.__defaultValuePeriod && this.__defaultValuePeriod.toJSON(),
			defaultValueQuantity: this.__defaultValueQuantity && this.__defaultValueQuantity.toJSON(),
			defaultValueRange: this.__defaultValueRange && this.__defaultValueRange.toJSON(),
			defaultValueRatio: this.__defaultValueRatio && this.__defaultValueRatio.toJSON(),
			defaultValueReference: this.__defaultValueReference && this.__defaultValueReference.toJSON(),
			defaultValueSampledData: this.__defaultValueSampledData && this.__defaultValueSampledData.toJSON(),
			defaultValueSignature: this.__defaultValueSignature && this.__defaultValueSignature.toJSON(),
			defaultValueTiming: this.__defaultValueTiming && this.__defaultValueTiming.toJSON(),
			defaultValueMeta: this.__defaultValueMeta && this.__defaultValueMeta.toJSON(),
			element: this.__element,
			listMode: this.__listMode,
			variable: this.__variable,
			condition: this.__condition,
			check: this.__check,
		});
	}
}

module.exports = StructureMapGroupRuleSource;
