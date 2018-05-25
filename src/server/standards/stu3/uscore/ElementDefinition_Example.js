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
		super( opts );
		this._resourceType = 'ElementDefinition_Example';
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
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._label = new_value;
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueBoolean () {
		return this._valueBoolean;
	}

	set valueBoolean ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueBoolean = new_value;
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueInteger () {
		return this._valueInteger;
	}

	set valueInteger ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
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
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
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
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueBase64Binary = new_value;
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueInstant () {
		return this._valueInstant;
	}

	set valueInstant ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueInstant = new_value;
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueString () {
		return this._valueString;
	}

	set valueString ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueString = new_value;
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueUri () {
		return this._valueUri;
	}

	set valueUri ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueUri = new_value;
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueDate () {
		return this._valueDate;
	}

	set valueDate ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
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
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
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
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
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
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
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
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
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
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
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
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
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
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
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
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
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
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueMarkdown = new_value;
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueElement () {
		return this._valueElement;
	}

	set valueElement ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueElement = new Element(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueExtension () {
		return this._valueExtension;
	}

	set valueExtension ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueExtension = new Extension(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueBackboneElement () {
		return this._valueBackboneElement;
	}

	set valueBackboneElement ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueBackboneElement = new BackboneElement(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueNarrative () {
		return this._valueNarrative;
	}

	set valueNarrative ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueNarrative = new Narrative(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueAnnotation () {
		return this._valueAnnotation;
	}

	set valueAnnotation ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueAnnotation = new Annotation(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueAttachment () {
		return this._valueAttachment;
	}

	set valueAttachment ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueAttachment = new Attachment(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueIdentifier () {
		return this._valueIdentifier;
	}

	set valueIdentifier ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueIdentifier = new Identifier(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueCodeableConcept () {
		return this._valueCodeableConcept;
	}

	set valueCodeableConcept ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueCodeableConcept = new CodeableConcept(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueCoding () {
		return this._valueCoding;
	}

	set valueCoding ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueCoding = new Coding(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueQuantity () {
		return this._valueQuantity;
	}

	set valueQuantity ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueQuantity = new Quantity(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueDuration () {
		return this._valueDuration;
	}

	set valueDuration ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueDuration = new Duration(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueSimpleQuantity () {
		return this._valueSimpleQuantity;
	}

	set valueSimpleQuantity ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueSimpleQuantity = new Quantity(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueDistance () {
		return this._valueDistance;
	}

	set valueDistance ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueDistance = new Distance(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueCount () {
		return this._valueCount;
	}

	set valueCount ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueCount = new Count(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueMoney () {
		return this._valueMoney;
	}

	set valueMoney ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueMoney = new Money(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueAge () {
		return this._valueAge;
	}

	set valueAge ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueAge = new Age(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueRange () {
		return this._valueRange;
	}

	set valueRange ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueRange = new Range(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valuePeriod () {
		return this._valuePeriod;
	}

	set valuePeriod ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valuePeriod = new Period(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueRatio () {
		return this._valueRatio;
	}

	set valueRatio ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueRatio = new Ratio(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueReference () {
		return this._valueReference;
	}

	set valueReference ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueReference = new Reference(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueSampledData () {
		return this._valueSampledData;
	}

	set valueSampledData ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueSampledData = new SampledData(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueSignature () {
		return this._valueSignature;
	}

	set valueSignature ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueSignature = new Signature(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueHumanName () {
		return this._valueHumanName;
	}

	set valueHumanName ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueHumanName = new HumanName(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueAddress () {
		return this._valueAddress;
	}

	set valueAddress ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueAddress = new Address(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueContactPoint () {
		return this._valueContactPoint;
	}

	set valueContactPoint ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueContactPoint = new ContactPoint(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueTiming () {
		return this._valueTiming;
	}

	set valueTiming ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueTiming = new Timing(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueMeta () {
		return this._valueMeta;
	}

	set valueMeta ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueMeta = new Meta(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueElementDefinition () {
		return this._valueElementDefinition;
	}

	set valueElementDefinition ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueElementDefinition = new ElementDefinition(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueContactDetail () {
		return this._valueContactDetail;
	}

	set valueContactDetail ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueContactDetail = new ContactDetail(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueContributor () {
		return this._valueContributor;
	}

	set valueContributor ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueContributor = new Contributor(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueDosage () {
		return this._valueDosage;
	}

	set valueDosage ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueDosage = new Dosage(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueRelatedArtifact () {
		return this._valueRelatedArtifact;
	}

	set valueRelatedArtifact ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueRelatedArtifact = new RelatedArtifact(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueUsageContext () {
		return this._valueUsageContext;
	}

	set valueUsageContext ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueUsageContext = new UsageContext(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueDataRequirement () {
		return this._valueDataRequirement;
	}

	set valueDataRequirement ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueDataRequirement = new DataRequirement(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueParameterDefinition () {
		return this._valueParameterDefinition;
	}

	set valueParameterDefinition ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueParameterDefinition = new ParameterDefinition(new_value);
	}

	// The actual value for the element, which must be one of the types allowed for this element.
	get valueTriggerDefinition () {
		return this._valueTriggerDefinition;
	}

	set valueTriggerDefinition ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._valueTriggerDefinition = new TriggerDefinition(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			label: this.label,
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

module.exports = ElementDefinition_Example;
