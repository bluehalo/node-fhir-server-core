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

class ElementDefinition_Example extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ElementDefinition_Example';
	}

	// Describes the purpose of this example amoung the set of examples.
	get label () {
		return this._label;
	}

	set label ( new_value ) {
		this._label = new_value;
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueBoolean () {
		return this._valueBoolean;
	}

	set valueBoolean ( new_value ) {
		this._valueBoolean = new_value;
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueInteger () {
		return this._valueInteger;
	}

	set valueInteger ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field valueInteger`);
		}
		this._valueInteger = new_value;
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueDecimal () {
		return this._valueDecimal;
	}

	set valueDecimal ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field valueDecimal`);
		}
		this._valueDecimal = new_value;
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueBase64Binary () {
		return this._valueBase64Binary;
	}

	set valueBase64Binary ( new_value ) {
		this._valueBase64Binary = new_value;
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueInstant () {
		return this._valueInstant;
	}

	set valueInstant ( new_value ) {
		this._valueInstant = new_value;
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueString () {
		return this._valueString;
	}

	set valueString ( new_value ) {
		this._valueString = new_value;
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueUri () {
		return this._valueUri;
	}

	set valueUri ( new_value ) {
		this._valueUri = new_value;
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueDate () {
		return this._valueDate;
	}

	set valueDate ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field valueDate`);
		}
		this._valueDate = new_value;
	}

	// The actual value for the element, which must be one of the types allowed for this element.
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

	// The actual value for the element, which must be one of the types allowed for this element.
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

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueCode () {
		return this._valueCode;
	}

	set valueCode ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field valueCode`);
		}
		this._valueCode = new_value;
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueOid () {
		return this._valueOid;
	}

	set valueOid ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /urn:oid:(0|[1-9][0-9]*)(\.(0|[1-9][0-9]*))*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field valueOid`);
		}
		this._valueOid = new_value;
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueUuid () {
		return this._valueUuid;
	}

	set valueUuid ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field valueUuid`);
		}
		this._valueUuid = new_value;
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueId () {
		return this._valueId;
	}

	set valueId ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[A-Za-z0-9\-\.]{1,64}/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field valueId`);
		}
		this._valueId = new_value;
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueUnsignedInt () {
		return this._valueUnsignedInt;
	}

	set valueUnsignedInt ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[0]|([1-9][0-9]*)/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field valueUnsignedInt`);
		}
		this._valueUnsignedInt = new_value;
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valuePositiveInt () {
		return this._valuePositiveInt;
	}

	set valuePositiveInt ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[1-9][0-9]*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field valuePositiveInt`);
		}
		this._valuePositiveInt = new_value;
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueMarkdown () {
		return this._valueMarkdown;
	}

	set valueMarkdown ( new_value ) {
		this._valueMarkdown = new_value;
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueElement () {
		return this._valueElement;
	}

	set valueElement ( new_value ) {
		this._valueElement = new Element(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueExtension () {
		return this._valueExtension;
	}

	set valueExtension ( new_value ) {
		this._valueExtension = new Extension(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueBackboneElement () {
		return this._valueBackboneElement;
	}

	set valueBackboneElement ( new_value ) {
		this._valueBackboneElement = new BackboneElement(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueNarrative () {
		return this._valueNarrative;
	}

	set valueNarrative ( new_value ) {
		this._valueNarrative = new Narrative(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueAnnotation () {
		return this._valueAnnotation;
	}

	set valueAnnotation ( new_value ) {
		this._valueAnnotation = new Annotation(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueAttachment () {
		return this._valueAttachment;
	}

	set valueAttachment ( new_value ) {
		this._valueAttachment = new Attachment(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueIdentifier () {
		return this._valueIdentifier;
	}

	set valueIdentifier ( new_value ) {
		this._valueIdentifier = new Identifier(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueCodeableConcept () {
		return this._valueCodeableConcept;
	}

	set valueCodeableConcept ( new_value ) {
		this._valueCodeableConcept = new CodeableConcept(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueCoding () {
		return this._valueCoding;
	}

	set valueCoding ( new_value ) {
		this._valueCoding = new Coding(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueQuantity () {
		return this._valueQuantity;
	}

	set valueQuantity ( new_value ) {
		this._valueQuantity = new Quantity(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueDuration () {
		return this._valueDuration;
	}

	set valueDuration ( new_value ) {
		this._valueDuration = new Duration(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueSimpleQuantity () {
		return this._valueSimpleQuantity;
	}

	set valueSimpleQuantity ( new_value ) {
		this._valueSimpleQuantity = new Quantity(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueDistance () {
		return this._valueDistance;
	}

	set valueDistance ( new_value ) {
		this._valueDistance = new Distance(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueCount () {
		return this._valueCount;
	}

	set valueCount ( new_value ) {
		this._valueCount = new Count(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueMoney () {
		return this._valueMoney;
	}

	set valueMoney ( new_value ) {
		this._valueMoney = new Money(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueAge () {
		return this._valueAge;
	}

	set valueAge ( new_value ) {
		this._valueAge = new Age(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueRange () {
		return this._valueRange;
	}

	set valueRange ( new_value ) {
		this._valueRange = new Range(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valuePeriod () {
		return this._valuePeriod;
	}

	set valuePeriod ( new_value ) {
		this._valuePeriod = new Period(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueRatio () {
		return this._valueRatio;
	}

	set valueRatio ( new_value ) {
		this._valueRatio = new Ratio(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueReference () {
		return this._valueReference;
	}

	set valueReference ( new_value ) {
		this._valueReference = new Reference(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueSampledData () {
		return this._valueSampledData;
	}

	set valueSampledData ( new_value ) {
		this._valueSampledData = new SampledData(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueSignature () {
		return this._valueSignature;
	}

	set valueSignature ( new_value ) {
		this._valueSignature = new Signature(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueHumanName () {
		return this._valueHumanName;
	}

	set valueHumanName ( new_value ) {
		this._valueHumanName = new HumanName(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueAddress () {
		return this._valueAddress;
	}

	set valueAddress ( new_value ) {
		this._valueAddress = new Address(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueContactPoint () {
		return this._valueContactPoint;
	}

	set valueContactPoint ( new_value ) {
		this._valueContactPoint = new ContactPoint(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueTiming () {
		return this._valueTiming;
	}

	set valueTiming ( new_value ) {
		this._valueTiming = new Timing(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueMeta () {
		return this._valueMeta;
	}

	set valueMeta ( new_value ) {
		this._valueMeta = new Meta(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueElementDefinition () {
		return this._valueElementDefinition;
	}

	set valueElementDefinition ( new_value ) {
		this._valueElementDefinition = new ElementDefinition(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueContactDetail () {
		return this._valueContactDetail;
	}

	set valueContactDetail ( new_value ) {
		this._valueContactDetail = new ContactDetail(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueContributor () {
		return this._valueContributor;
	}

	set valueContributor ( new_value ) {
		this._valueContributor = new Contributor(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueDosage () {
		return this._valueDosage;
	}

	set valueDosage ( new_value ) {
		this._valueDosage = new Dosage(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueRelatedArtifact () {
		return this._valueRelatedArtifact;
	}

	set valueRelatedArtifact ( new_value ) {
		this._valueRelatedArtifact = new RelatedArtifact(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueUsageContext () {
		return this._valueUsageContext;
	}

	set valueUsageContext ( new_value ) {
		this._valueUsageContext = new UsageContext(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueDataRequirement () {
		return this._valueDataRequirement;
	}

	set valueDataRequirement ( new_value ) {
		this._valueDataRequirement = new DataRequirement(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueParameterDefinition () {
		return this._valueParameterDefinition;
	}

	set valueParameterDefinition ( new_value ) {
		this._valueParameterDefinition = new ParameterDefinition(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueTriggerDefinition () {
		return this._valueTriggerDefinition;
	}

	set valueTriggerDefinition ( new_value ) {
		this._valueTriggerDefinition = new TriggerDefinition(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			label: this._label,
			valueBoolean: this._valueBoolean,
			valueInteger: this._valueInteger,
			valueDecimal: this._valueDecimal,
			valueBase64Binary: this._valueBase64Binary,
			valueInstant: this._valueInstant,
			valueString: this._valueString,
			valueUri: this._valueUri,
			valueDate: this._valueDate,
			valueDateTime: this._valueDateTime,
			valueTime: this._valueTime,
			valueCode: this._valueCode,
			valueOid: this._valueOid,
			valueUuid: this._valueUuid,
			valueId: this._valueId,
			valueUnsignedInt: this._valueUnsignedInt,
			valuePositiveInt: this._valuePositiveInt,
			valueMarkdown: this._valueMarkdown,
			valueElement: this._valueElement,
			valueExtension: this._valueExtension,
			valueBackboneElement: this._valueBackboneElement,
			valueNarrative: this._valueNarrative,
			valueAnnotation: this._valueAnnotation,
			valueAttachment: this._valueAttachment,
			valueIdentifier: this._valueIdentifier,
			valueCodeableConcept: this._valueCodeableConcept,
			valueCoding: this._valueCoding,
			valueQuantity: this._valueQuantity,
			valueDuration: this._valueDuration,
			valueSimpleQuantity: this._valueSimpleQuantity,
			valueDistance: this._valueDistance,
			valueCount: this._valueCount,
			valueMoney: this._valueMoney,
			valueAge: this._valueAge,
			valueRange: this._valueRange,
			valuePeriod: this._valuePeriod,
			valueRatio: this._valueRatio,
			valueReference: this._valueReference,
			valueSampledData: this._valueSampledData,
			valueSignature: this._valueSignature,
			valueHumanName: this._valueHumanName,
			valueAddress: this._valueAddress,
			valueContactPoint: this._valueContactPoint,
			valueTiming: this._valueTiming,
			valueMeta: this._valueMeta,
			valueElementDefinition: this._valueElementDefinition,
			valueContactDetail: this._valueContactDetail,
			valueContributor: this._valueContributor,
			valueDosage: this._valueDosage,
			valueRelatedArtifact: this._valueRelatedArtifact,
			valueUsageContext: this._valueUsageContext,
			valueDataRequirement: this._valueDataRequirement,
			valueParameterDefinition: this._valueParameterDefinition,
			valueTriggerDefinition: this._valueTriggerDefinition
		});
	}

}

module.exports = ElementDefinition_Example;
