const BackboneElement = require('./BackboneElement');
const Element = require('./Element');
const Extension = require('./Extension');
const Narrative = require('./Narrative');
const Annotation = require('./Annotation');
const Attachment = require('./Attachment');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');
const Coding = require('./Coding');
const Quantity = require('./Quantity');
const Duration = require('./Duration');
const Distance = require('./Distance');
const Count = require('./Count');
const Money = require('./Money');
const Age = require('./Age');
const Range = require('./Range');
const Period = require('./Period');
const Ratio = require('./Ratio');
const Reference = require('./Reference');
const SampledData = require('./SampledData');
const Signature = require('./Signature');
const HumanName = require('./HumanName');
const Address = require('./Address');
const ContactPoint = require('./ContactPoint');
const Timing = require('./Timing');
const Meta = require('./Meta');
const ElementDefinition = require('./ElementDefinition');
const ContactDetail = require('./ContactDetail');
const Contributor = require('./Contributor');
const Dosage = require('./Dosage');
const RelatedArtifact = require('./RelatedArtifact');
const UsageContext = require('./UsageContext');
const DataRequirement = require('./DataRequirement');
const ParameterDefinition = require('./ParameterDefinition');
const TriggerDefinition = require('./TriggerDefinition');

class StructureMap_Source extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'StructureMap_Source';
	}

	// Type or variable this rule applies to.
	get context () {
		return this._context;
	}

	set context ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[A-Za-z0-9\-\.]{1,64}/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field context`);
		}
		this._context = new_value;
	}

	// Specified minimum cardinality for the element. This is optional; if present, it acts an implicit check on the input content.
	get min () {
		return this._min;
	}

	set min ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field min`);
		}
		this._min = new_value;
	}

	// Specified maximum cardinality for the element - a number or a "*". This is optional; if present, it acts an implicit check on the input content (* just serves as documentation; it's the default value).
	get max () {
		return this._max;
	}

	set max ( new_value ) {
		this._max = new_value;
	}

	// Specified type for the element. This works as a condition on the mapping - use for polymorphic elements.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new_value;
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueBoolean () {
		return this._defaultValueBoolean;
	}

	set defaultValueBoolean ( new_value ) {
		this._defaultValueBoolean = new_value;
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueInteger () {
		return this._defaultValueInteger;
	}

	set defaultValueInteger ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field defaultValueInteger`);
		}
		this._defaultValueInteger = new_value;
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueDecimal () {
		return this._defaultValueDecimal;
	}

	set defaultValueDecimal ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field defaultValueDecimal`);
		}
		this._defaultValueDecimal = new_value;
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueBase64Binary () {
		return this._defaultValueBase64Binary;
	}

	set defaultValueBase64Binary ( new_value ) {
		this._defaultValueBase64Binary = new_value;
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueInstant () {
		return this._defaultValueInstant;
	}

	set defaultValueInstant ( new_value ) {
		this._defaultValueInstant = new_value;
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueString () {
		return this._defaultValueString;
	}

	set defaultValueString ( new_value ) {
		this._defaultValueString = new_value;
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueUri () {
		return this._defaultValueUri;
	}

	set defaultValueUri ( new_value ) {
		this._defaultValueUri = new_value;
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueDate () {
		return this._defaultValueDate;
	}

	set defaultValueDate ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field defaultValueDate`);
		}
		this._defaultValueDate = new_value;
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueDateTime () {
		return this._defaultValueDateTime;
	}

	set defaultValueDateTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field defaultValueDateTime`);
		}
		this._defaultValueDateTime = new_value;
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueTime () {
		return this._defaultValueTime;
	}

	set defaultValueTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field defaultValueTime`);
		}
		this._defaultValueTime = new_value;
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueCode () {
		return this._defaultValueCode;
	}

	set defaultValueCode ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field defaultValueCode`);
		}
		this._defaultValueCode = new_value;
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueOid () {
		return this._defaultValueOid;
	}

	set defaultValueOid ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /urn:oid:(0|[1-9][0-9]*)(\.(0|[1-9][0-9]*))*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field defaultValueOid`);
		}
		this._defaultValueOid = new_value;
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueUuid () {
		return this._defaultValueUuid;
	}

	set defaultValueUuid ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field defaultValueUuid`);
		}
		this._defaultValueUuid = new_value;
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueId () {
		return this._defaultValueId;
	}

	set defaultValueId ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[A-Za-z0-9\-\.]{1,64}/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field defaultValueId`);
		}
		this._defaultValueId = new_value;
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueUnsignedInt () {
		return this._defaultValueUnsignedInt;
	}

	set defaultValueUnsignedInt ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[0]|([1-9][0-9]*)/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field defaultValueUnsignedInt`);
		}
		this._defaultValueUnsignedInt = new_value;
	}

	// A value to use if there is no existing value in the source object.
	get defaultValuePositiveInt () {
		return this._defaultValuePositiveInt;
	}

	set defaultValuePositiveInt ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[1-9][0-9]*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field defaultValuePositiveInt`);
		}
		this._defaultValuePositiveInt = new_value;
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueMarkdown () {
		return this._defaultValueMarkdown;
	}

	set defaultValueMarkdown ( new_value ) {
		this._defaultValueMarkdown = new_value;
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueElement () {
		return this._defaultValueElement;
	}

	set defaultValueElement ( new_value ) {
		this._defaultValueElement = new Element(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueExtension () {
		return this._defaultValueExtension;
	}

	set defaultValueExtension ( new_value ) {
		this._defaultValueExtension = new Extension(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueBackboneElement () {
		return this._defaultValueBackboneElement;
	}

	set defaultValueBackboneElement ( new_value ) {
		this._defaultValueBackboneElement = new BackboneElement(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueNarrative () {
		return this._defaultValueNarrative;
	}

	set defaultValueNarrative ( new_value ) {
		this._defaultValueNarrative = new Narrative(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueAnnotation () {
		return this._defaultValueAnnotation;
	}

	set defaultValueAnnotation ( new_value ) {
		this._defaultValueAnnotation = new Annotation(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueAttachment () {
		return this._defaultValueAttachment;
	}

	set defaultValueAttachment ( new_value ) {
		this._defaultValueAttachment = new Attachment(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueIdentifier () {
		return this._defaultValueIdentifier;
	}

	set defaultValueIdentifier ( new_value ) {
		this._defaultValueIdentifier = new Identifier(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueCodeableConcept () {
		return this._defaultValueCodeableConcept;
	}

	set defaultValueCodeableConcept ( new_value ) {
		this._defaultValueCodeableConcept = new CodeableConcept(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueCoding () {
		return this._defaultValueCoding;
	}

	set defaultValueCoding ( new_value ) {
		this._defaultValueCoding = new Coding(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueQuantity () {
		return this._defaultValueQuantity;
	}

	set defaultValueQuantity ( new_value ) {
		this._defaultValueQuantity = new Quantity(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueDuration () {
		return this._defaultValueDuration;
	}

	set defaultValueDuration ( new_value ) {
		this._defaultValueDuration = new Duration(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueSimpleQuantity () {
		return this._defaultValueSimpleQuantity;
	}

	set defaultValueSimpleQuantity ( new_value ) {
		this._defaultValueSimpleQuantity = new Quantity(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueDistance () {
		return this._defaultValueDistance;
	}

	set defaultValueDistance ( new_value ) {
		this._defaultValueDistance = new Distance(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueCount () {
		return this._defaultValueCount;
	}

	set defaultValueCount ( new_value ) {
		this._defaultValueCount = new Count(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueMoney () {
		return this._defaultValueMoney;
	}

	set defaultValueMoney ( new_value ) {
		this._defaultValueMoney = new Money(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueAge () {
		return this._defaultValueAge;
	}

	set defaultValueAge ( new_value ) {
		this._defaultValueAge = new Age(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueRange () {
		return this._defaultValueRange;
	}

	set defaultValueRange ( new_value ) {
		this._defaultValueRange = new Range(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValuePeriod () {
		return this._defaultValuePeriod;
	}

	set defaultValuePeriod ( new_value ) {
		this._defaultValuePeriod = new Period(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueRatio () {
		return this._defaultValueRatio;
	}

	set defaultValueRatio ( new_value ) {
		this._defaultValueRatio = new Ratio(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueReference () {
		return this._defaultValueReference;
	}

	set defaultValueReference ( new_value ) {
		this._defaultValueReference = new Reference(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueSampledData () {
		return this._defaultValueSampledData;
	}

	set defaultValueSampledData ( new_value ) {
		this._defaultValueSampledData = new SampledData(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueSignature () {
		return this._defaultValueSignature;
	}

	set defaultValueSignature ( new_value ) {
		this._defaultValueSignature = new Signature(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueHumanName () {
		return this._defaultValueHumanName;
	}

	set defaultValueHumanName ( new_value ) {
		this._defaultValueHumanName = new HumanName(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueAddress () {
		return this._defaultValueAddress;
	}

	set defaultValueAddress ( new_value ) {
		this._defaultValueAddress = new Address(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueContactPoint () {
		return this._defaultValueContactPoint;
	}

	set defaultValueContactPoint ( new_value ) {
		this._defaultValueContactPoint = new ContactPoint(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueTiming () {
		return this._defaultValueTiming;
	}

	set defaultValueTiming ( new_value ) {
		this._defaultValueTiming = new Timing(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueMeta () {
		return this._defaultValueMeta;
	}

	set defaultValueMeta ( new_value ) {
		this._defaultValueMeta = new Meta(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueElementDefinition () {
		return this._defaultValueElementDefinition;
	}

	set defaultValueElementDefinition ( new_value ) {
		this._defaultValueElementDefinition = new ElementDefinition(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueContactDetail () {
		return this._defaultValueContactDetail;
	}

	set defaultValueContactDetail ( new_value ) {
		this._defaultValueContactDetail = new ContactDetail(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueContributor () {
		return this._defaultValueContributor;
	}

	set defaultValueContributor ( new_value ) {
		this._defaultValueContributor = new Contributor(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueDosage () {
		return this._defaultValueDosage;
	}

	set defaultValueDosage ( new_value ) {
		this._defaultValueDosage = new Dosage(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueRelatedArtifact () {
		return this._defaultValueRelatedArtifact;
	}

	set defaultValueRelatedArtifact ( new_value ) {
		this._defaultValueRelatedArtifact = new RelatedArtifact(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueUsageContext () {
		return this._defaultValueUsageContext;
	}

	set defaultValueUsageContext ( new_value ) {
		this._defaultValueUsageContext = new UsageContext(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueDataRequirement () {
		return this._defaultValueDataRequirement;
	}

	set defaultValueDataRequirement ( new_value ) {
		this._defaultValueDataRequirement = new DataRequirement(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueParameterDefinition () {
		return this._defaultValueParameterDefinition;
	}

	set defaultValueParameterDefinition ( new_value ) {
		this._defaultValueParameterDefinition = new ParameterDefinition(new_value);
	}

	// A value to use if there is no existing value in the source object.
	get defaultValueTriggerDefinition () {
		return this._defaultValueTriggerDefinition;
	}

	set defaultValueTriggerDefinition ( new_value ) {
		this._defaultValueTriggerDefinition = new TriggerDefinition(new_value);
	}

	// Optional field for this source.
	get element () {
		return this._element;
	}

	set element ( new_value ) {
		this._element = new_value;
	}

	// How to handle the list mode for this element.
	get listMode () {
		return this._listMode;
	}

	set listMode ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['first', 'not_first', 'last', 'not_last', 'only_one'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field listMode`);
		}
		this._listMode = new_value;
	}

	// Named context for field, if a field is specified.
	get variable () {
		return this._variable;
	}

	set variable ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[A-Za-z0-9\-\.]{1,64}/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field variable`);
		}
		this._variable = new_value;
	}

	// FHIRPath expression  - must be true or the rule does not apply.
	get condition () {
		return this._condition;
	}

	set condition ( new_value ) {
		this._condition = new_value;
	}

	// FHIRPath expression  - must be true or the mapping engine throws an error instead of completing.
	get check () {
		return this._check;
	}

	set check ( new_value ) {
		this._check = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			context: this._context,
			min: this._min,
			max: this._max,
			type: this._type,
			defaultValueBoolean: this._defaultValueBoolean,
			defaultValueInteger: this._defaultValueInteger,
			defaultValueDecimal: this._defaultValueDecimal,
			defaultValueBase64Binary: this._defaultValueBase64Binary,
			defaultValueInstant: this._defaultValueInstant,
			defaultValueString: this._defaultValueString,
			defaultValueUri: this._defaultValueUri,
			defaultValueDate: this._defaultValueDate,
			defaultValueDateTime: this._defaultValueDateTime,
			defaultValueTime: this._defaultValueTime,
			defaultValueCode: this._defaultValueCode,
			defaultValueOid: this._defaultValueOid,
			defaultValueUuid: this._defaultValueUuid,
			defaultValueId: this._defaultValueId,
			defaultValueUnsignedInt: this._defaultValueUnsignedInt,
			defaultValuePositiveInt: this._defaultValuePositiveInt,
			defaultValueMarkdown: this._defaultValueMarkdown,
			defaultValueElement: this._defaultValueElement && this._defaultValueElement.toJSON(),
			defaultValueExtension: this._defaultValueExtension && this._defaultValueExtension.toJSON(),
			defaultValueBackboneElement: this._defaultValueBackboneElement && this._defaultValueBackboneElement.toJSON(),
			defaultValueNarrative: this._defaultValueNarrative && this._defaultValueNarrative.toJSON(),
			defaultValueAnnotation: this._defaultValueAnnotation && this._defaultValueAnnotation.toJSON(),
			defaultValueAttachment: this._defaultValueAttachment && this._defaultValueAttachment.toJSON(),
			defaultValueIdentifier: this._defaultValueIdentifier && this._defaultValueIdentifier.toJSON(),
			defaultValueCodeableConcept: this._defaultValueCodeableConcept && this._defaultValueCodeableConcept.toJSON(),
			defaultValueCoding: this._defaultValueCoding && this._defaultValueCoding.toJSON(),
			defaultValueQuantity: this._defaultValueQuantity && this._defaultValueQuantity.toJSON(),
			defaultValueDuration: this._defaultValueDuration && this._defaultValueDuration.toJSON(),
			defaultValueSimpleQuantity: this._defaultValueSimpleQuantity && this._defaultValueSimpleQuantity.toJSON(),
			defaultValueDistance: this._defaultValueDistance && this._defaultValueDistance.toJSON(),
			defaultValueCount: this._defaultValueCount && this._defaultValueCount.toJSON(),
			defaultValueMoney: this._defaultValueMoney && this._defaultValueMoney.toJSON(),
			defaultValueAge: this._defaultValueAge && this._defaultValueAge.toJSON(),
			defaultValueRange: this._defaultValueRange && this._defaultValueRange.toJSON(),
			defaultValuePeriod: this._defaultValuePeriod && this._defaultValuePeriod.toJSON(),
			defaultValueRatio: this._defaultValueRatio && this._defaultValueRatio.toJSON(),
			defaultValueReference: this._defaultValueReference && this._defaultValueReference.toJSON(),
			defaultValueSampledData: this._defaultValueSampledData && this._defaultValueSampledData.toJSON(),
			defaultValueSignature: this._defaultValueSignature && this._defaultValueSignature.toJSON(),
			defaultValueHumanName: this._defaultValueHumanName && this._defaultValueHumanName.toJSON(),
			defaultValueAddress: this._defaultValueAddress && this._defaultValueAddress.toJSON(),
			defaultValueContactPoint: this._defaultValueContactPoint && this._defaultValueContactPoint.toJSON(),
			defaultValueTiming: this._defaultValueTiming && this._defaultValueTiming.toJSON(),
			defaultValueMeta: this._defaultValueMeta && this._defaultValueMeta.toJSON(),
			defaultValueElementDefinition: this._defaultValueElementDefinition && this._defaultValueElementDefinition.toJSON(),
			defaultValueContactDetail: this._defaultValueContactDetail && this._defaultValueContactDetail.toJSON(),
			defaultValueContributor: this._defaultValueContributor && this._defaultValueContributor.toJSON(),
			defaultValueDosage: this._defaultValueDosage && this._defaultValueDosage.toJSON(),
			defaultValueRelatedArtifact: this._defaultValueRelatedArtifact && this._defaultValueRelatedArtifact.toJSON(),
			defaultValueUsageContext: this._defaultValueUsageContext && this._defaultValueUsageContext.toJSON(),
			defaultValueDataRequirement: this._defaultValueDataRequirement && this._defaultValueDataRequirement.toJSON(),
			defaultValueParameterDefinition: this._defaultValueParameterDefinition && this._defaultValueParameterDefinition.toJSON(),
			defaultValueTriggerDefinition: this._defaultValueTriggerDefinition && this._defaultValueTriggerDefinition.toJSON(),
			element: this._element,
			listMode: this._listMode,
			variable: this._variable,
			condition: this._condition,
			check: this._check
		});
	}

}

module.exports = StructureMap_Source;
