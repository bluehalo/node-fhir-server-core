const Element = require('./Element');
const BackboneElement = require('./BackboneElement');
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

class Extension extends Element {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Extension';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Extension';
	}

	// Source of the definition for the extension code - a logical name or a URL.
	get url () {
		return this._url;
	}

	set url ( new_value ) {
		this._url = new_value;
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueBoolean () {
		return this._valueBoolean;
	}

	set valueBoolean ( new_value ) {
		this._valueBoolean = new_value;
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueInteger () {
		return this._valueInteger;
	}

	set valueInteger ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field valueInteger`);
		}
		this._valueInteger = new_value;
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueDecimal () {
		return this._valueDecimal;
	}

	set valueDecimal ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field valueDecimal`);
		}
		this._valueDecimal = new_value;
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueBase64Binary () {
		return this._valueBase64Binary;
	}

	set valueBase64Binary ( new_value ) {
		this._valueBase64Binary = new_value;
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueInstant () {
		return this._valueInstant;
	}

	set valueInstant ( new_value ) {
		this._valueInstant = new_value;
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueString () {
		return this._valueString;
	}

	set valueString ( new_value ) {
		this._valueString = new_value;
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueUri () {
		return this._valueUri;
	}

	set valueUri ( new_value ) {
		this._valueUri = new_value;
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueDate () {
		return this._valueDate;
	}

	set valueDate ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field valueDate`);
		}
		this._valueDate = new_value;
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueDateTime () {
		return this._valueDateTime;
	}

	set valueDateTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field valueDateTime`);
		}
		this._valueDateTime = new_value;
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueTime () {
		return this._valueTime;
	}

	set valueTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field valueTime`);
		}
		this._valueTime = new_value;
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueCode () {
		return this._valueCode;
	}

	set valueCode ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field valueCode`);
		}
		this._valueCode = new_value;
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueOid () {
		return this._valueOid;
	}

	set valueOid ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /urn:oid:(0|[1-9][0-9]*)(\.(0|[1-9][0-9]*))*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field valueOid`);
		}
		this._valueOid = new_value;
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueUuid () {
		return this._valueUuid;
	}

	set valueUuid ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field valueUuid`);
		}
		this._valueUuid = new_value;
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueId () {
		return this._valueId;
	}

	set valueId ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[A-Za-z0-9\-\.]{1,64}/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field valueId`);
		}
		this._valueId = new_value;
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueUnsignedInt () {
		return this._valueUnsignedInt;
	}

	set valueUnsignedInt ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[0]|([1-9][0-9]*)/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field valueUnsignedInt`);
		}
		this._valueUnsignedInt = new_value;
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valuePositiveInt () {
		return this._valuePositiveInt;
	}

	set valuePositiveInt ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[1-9][0-9]*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field valuePositiveInt`);
		}
		this._valuePositiveInt = new_value;
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueMarkdown () {
		return this._valueMarkdown;
	}

	set valueMarkdown ( new_value ) {
		this._valueMarkdown = new_value;
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueElement () {
		return this._valueElement;
	}

	set valueElement ( new_value ) {
		this._valueElement = new Element(new_value);
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueExtension () {
		return this._valueExtension;
	}

	set valueExtension ( new_value ) {
		this._valueExtension = new Extension(new_value);
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueBackboneElement () {
		return this._valueBackboneElement;
	}

	set valueBackboneElement ( new_value ) {
		this._valueBackboneElement = new BackboneElement(new_value);
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueNarrative () {
		return this._valueNarrative;
	}

	set valueNarrative ( new_value ) {
		this._valueNarrative = new Narrative(new_value);
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueAnnotation () {
		return this._valueAnnotation;
	}

	set valueAnnotation ( new_value ) {
		this._valueAnnotation = new Annotation(new_value);
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueAttachment () {
		return this._valueAttachment;
	}

	set valueAttachment ( new_value ) {
		this._valueAttachment = new Attachment(new_value);
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueIdentifier () {
		return this._valueIdentifier;
	}

	set valueIdentifier ( new_value ) {
		this._valueIdentifier = new Identifier(new_value);
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueCodeableConcept () {
		return this._valueCodeableConcept;
	}

	set valueCodeableConcept ( new_value ) {
		this._valueCodeableConcept = new CodeableConcept(new_value);
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueCoding () {
		return this._valueCoding;
	}

	set valueCoding ( new_value ) {
		this._valueCoding = new Coding(new_value);
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueQuantity () {
		return this._valueQuantity;
	}

	set valueQuantity ( new_value ) {
		this._valueQuantity = new Quantity(new_value);
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueDuration () {
		return this._valueDuration;
	}

	set valueDuration ( new_value ) {
		this._valueDuration = new Duration(new_value);
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueSimpleQuantity () {
		return this._valueSimpleQuantity;
	}

	set valueSimpleQuantity ( new_value ) {
		this._valueSimpleQuantity = new Quantity(new_value);
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueDistance () {
		return this._valueDistance;
	}

	set valueDistance ( new_value ) {
		this._valueDistance = new Distance(new_value);
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueCount () {
		return this._valueCount;
	}

	set valueCount ( new_value ) {
		this._valueCount = new Count(new_value);
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueMoney () {
		return this._valueMoney;
	}

	set valueMoney ( new_value ) {
		this._valueMoney = new Money(new_value);
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueAge () {
		return this._valueAge;
	}

	set valueAge ( new_value ) {
		this._valueAge = new Age(new_value);
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueRange () {
		return this._valueRange;
	}

	set valueRange ( new_value ) {
		this._valueRange = new Range(new_value);
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valuePeriod () {
		return this._valuePeriod;
	}

	set valuePeriod ( new_value ) {
		this._valuePeriod = new Period(new_value);
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueRatio () {
		return this._valueRatio;
	}

	set valueRatio ( new_value ) {
		this._valueRatio = new Ratio(new_value);
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueReference () {
		return this._valueReference;
	}

	set valueReference ( new_value ) {
		this._valueReference = new Reference(new_value);
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueSampledData () {
		return this._valueSampledData;
	}

	set valueSampledData ( new_value ) {
		this._valueSampledData = new SampledData(new_value);
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueSignature () {
		return this._valueSignature;
	}

	set valueSignature ( new_value ) {
		this._valueSignature = new Signature(new_value);
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueHumanName () {
		return this._valueHumanName;
	}

	set valueHumanName ( new_value ) {
		this._valueHumanName = new HumanName(new_value);
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueAddress () {
		return this._valueAddress;
	}

	set valueAddress ( new_value ) {
		this._valueAddress = new Address(new_value);
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueContactPoint () {
		return this._valueContactPoint;
	}

	set valueContactPoint ( new_value ) {
		this._valueContactPoint = new ContactPoint(new_value);
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueTiming () {
		return this._valueTiming;
	}

	set valueTiming ( new_value ) {
		this._valueTiming = new Timing(new_value);
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueMeta () {
		return this._valueMeta;
	}

	set valueMeta ( new_value ) {
		this._valueMeta = new Meta(new_value);
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueElementDefinition () {
		return this._valueElementDefinition;
	}

	set valueElementDefinition ( new_value ) {
		this._valueElementDefinition = new ElementDefinition(new_value);
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueContactDetail () {
		return this._valueContactDetail;
	}

	set valueContactDetail ( new_value ) {
		this._valueContactDetail = new ContactDetail(new_value);
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueContributor () {
		return this._valueContributor;
	}

	set valueContributor ( new_value ) {
		this._valueContributor = new Contributor(new_value);
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueDosage () {
		return this._valueDosage;
	}

	set valueDosage ( new_value ) {
		this._valueDosage = new Dosage(new_value);
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueRelatedArtifact () {
		return this._valueRelatedArtifact;
	}

	set valueRelatedArtifact ( new_value ) {
		this._valueRelatedArtifact = new RelatedArtifact(new_value);
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueUsageContext () {
		return this._valueUsageContext;
	}

	set valueUsageContext ( new_value ) {
		this._valueUsageContext = new UsageContext(new_value);
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueDataRequirement () {
		return this._valueDataRequirement;
	}

	set valueDataRequirement ( new_value ) {
		this._valueDataRequirement = new DataRequirement(new_value);
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueParameterDefinition () {
		return this._valueParameterDefinition;
	}

	set valueParameterDefinition ( new_value ) {
		this._valueParameterDefinition = new ParameterDefinition(new_value);
	}

	// Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
	get valueTriggerDefinition () {
		return this._valueTriggerDefinition;
	}

	set valueTriggerDefinition ( new_value ) {
		this._valueTriggerDefinition = new TriggerDefinition(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			url: this.url,
			valueBoolean: this.valueBoolean,
			valueInteger: this.valueInteger,
			valueDecimal: this.valueDecimal,
			valueBase64Binary: this.valueBase64Binary,
			valueInstant: this.valueInstant,
			valueString: this.valueString,
			valueUri: this.valueUri,
			valueDate: this.valueDate,
			valueDateTime: this.valueDateTime,
			valueTime: this.valueTime,
			valueCode: this.valueCode,
			valueOid: this.valueOid,
			valueUuid: this.valueUuid,
			valueId: this.valueId,
			valueUnsignedInt: this.valueUnsignedInt,
			valuePositiveInt: this.valuePositiveInt,
			valueMarkdown: this.valueMarkdown,
			valueElement: this.valueElement && this.valueElement.toJSON(),
			valueExtension: this.valueExtension && this.valueExtension.toJSON(),
			valueBackboneElement: this.valueBackboneElement && this.valueBackboneElement.toJSON(),
			valueNarrative: this.valueNarrative && this.valueNarrative.toJSON(),
			valueAnnotation: this.valueAnnotation && this.valueAnnotation.toJSON(),
			valueAttachment: this.valueAttachment && this.valueAttachment.toJSON(),
			valueIdentifier: this.valueIdentifier && this.valueIdentifier.toJSON(),
			valueCodeableConcept: this.valueCodeableConcept && this.valueCodeableConcept.toJSON(),
			valueCoding: this.valueCoding && this.valueCoding.toJSON(),
			valueQuantity: this.valueQuantity && this.valueQuantity.toJSON(),
			valueDuration: this.valueDuration && this.valueDuration.toJSON(),
			valueSimpleQuantity: this.valueSimpleQuantity && this.valueSimpleQuantity.toJSON(),
			valueDistance: this.valueDistance && this.valueDistance.toJSON(),
			valueCount: this.valueCount && this.valueCount.toJSON(),
			valueMoney: this.valueMoney && this.valueMoney.toJSON(),
			valueAge: this.valueAge && this.valueAge.toJSON(),
			valueRange: this.valueRange && this.valueRange.toJSON(),
			valuePeriod: this.valuePeriod && this.valuePeriod.toJSON(),
			valueRatio: this.valueRatio && this.valueRatio.toJSON(),
			valueReference: this.valueReference && this.valueReference.toJSON(),
			valueSampledData: this.valueSampledData && this.valueSampledData.toJSON(),
			valueSignature: this.valueSignature && this.valueSignature.toJSON(),
			valueHumanName: this.valueHumanName && this.valueHumanName.toJSON(),
			valueAddress: this.valueAddress && this.valueAddress.toJSON(),
			valueContactPoint: this.valueContactPoint && this.valueContactPoint.toJSON(),
			valueTiming: this.valueTiming && this.valueTiming.toJSON(),
			valueMeta: this.valueMeta && this.valueMeta.toJSON(),
			valueElementDefinition: this.valueElementDefinition && this.valueElementDefinition.toJSON(),
			valueContactDetail: this.valueContactDetail && this.valueContactDetail.toJSON(),
			valueContributor: this.valueContributor && this.valueContributor.toJSON(),
			valueDosage: this.valueDosage && this.valueDosage.toJSON(),
			valueRelatedArtifact: this.valueRelatedArtifact && this.valueRelatedArtifact.toJSON(),
			valueUsageContext: this.valueUsageContext && this.valueUsageContext.toJSON(),
			valueDataRequirement: this.valueDataRequirement && this.valueDataRequirement.toJSON(),
			valueParameterDefinition: this.valueParameterDefinition && this.valueParameterDefinition.toJSON(),
			valueTriggerDefinition: this.valueTriggerDefinition && this.valueTriggerDefinition.toJSON()
		});
	}

}

module.exports = Extension;
