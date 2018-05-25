const Element = require('./Element');
const Coding = require('./Coding');
const ElementDefinition_Slicing = require('./ElementDefinition_Slicing');
const ElementDefinition_Base = require('./ElementDefinition_Base');
const ElementDefinition_Type = require('./ElementDefinition_Type');
const Extension = require('./Extension');
const BackboneElement = require('./BackboneElement');
const Narrative = require('./Narrative');
const Annotation = require('./Annotation');
const Attachment = require('./Attachment');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');
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
const ContactDetail = require('./ContactDetail');
const Contributor = require('./Contributor');
const Dosage = require('./Dosage');
const RelatedArtifact = require('./RelatedArtifact');
const UsageContext = require('./UsageContext');
const DataRequirement = require('./DataRequirement');
const ParameterDefinition = require('./ParameterDefinition');
const TriggerDefinition = require('./TriggerDefinition');
const ElementDefinition_Example = require('./ElementDefinition_Example');
const ElementDefinition_Constraint = require('./ElementDefinition_Constraint');
const ElementDefinition_Binding = require('./ElementDefinition_Binding');
const ElementDefinition_Mapping = require('./ElementDefinition_Mapping');

class ElementDefinition extends Element {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'ElementDefinition';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ElementDefinition';
	}

	// The path identifies the element and is expressed as a "."-separated list of ancestor elements, beginning with the name of the resource or extension.
	get path () {
		return this._path;
	}

	set path ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._path = new_value;
	}

	// Codes that define how this element is represented in instances, when the deviation varies from the normal case.
	get representation () {
		return this._representation;
	}

	set representation ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value is not in the allowed values
		let allowed_values = ['xmlAttr', 'xmlText', 'typeAttr', 'cdaText', 'xhtml'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field representation`);
		}
		this._representation = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// The name of this element definition slice, when slicing is working. The name must be a token with no dots or spaces. This is a unique name referring to a specific set of constraints applied to this element, used to provide a name to different slices of the same element.
	get sliceName () {
		return this._sliceName;
	}

	set sliceName ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._sliceName = new_value;
	}

	// A single preferred label which is the text to display beside the element indicating its meaning or to use to prompt for the element in a user display or form.
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

	// A code that has the same meaning as the element in a particular terminology.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._code = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// Indicates that the element is sliced into a set of alternative definitions (i.e. in a structure definition, there are multiple different constraints on a single element in the base resource). Slicing can be used in any resource that has cardinality ..* on the base resource, or any resource with a choice of types. The set of slices is any elements that come after this in the element sequence that have the same path, until a shorter path occurs (the shorter path terminates the set).
	get slicing () {
		return this._slicing;
	}

	set slicing ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._slicing = new ElementDefinition_Slicing(new_value);
	}

	// A concise description of what this element means (e.g. for use in autogenerated summaries).
	get short () {
		return this._short;
	}

	set short ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._short = new_value;
	}

	// Provides a complete explanation of the meaning of the data element for human readability.  For the case of elements derived from existing elements (e.g. constraints), the definition SHALL be consistent with the base definition, but convey the meaning of the element in the particular context of use of the resource.
	get definition () {
		return this._definition;
	}

	set definition ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._definition = new_value;
	}

	// Explanatory notes and implementation guidance about the data element, including notes about how to use the data properly, exceptions to proper use, etc.
	get comment () {
		return this._comment;
	}

	set comment ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._comment = new_value;
	}

	// This element is for traceability of why the element was created and why the constraints exist as they do. This may be used to point to source materials or specifications that drove the structure of this element.
	get requirements () {
		return this._requirements;
	}

	set requirements ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._requirements = new_value;
	}

	// Identifies additional names by which this element might also be known.
	get alias () {
		return this._alias;
	}

	set alias ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._alias = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// The minimum number of times this element SHALL appear in the instance.
	get min () {
		return this._min;
	}

	set min ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /[0]|([1-9][0-9]*)/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field min`);
		}
		this._min = new_value;
	}

	// The maximum number of times this element is permitted to appear in the instance.
	get max () {
		return this._max;
	}

	set max ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._max = new_value;
	}

	// Information about the base definition of the element, provided to make it unnecessary for tools to trace the deviation of the element through the derived and related profiles. This information is provided when the element definition is not the original definition of an element - i.g. either in a constraint on another type, or for elements from a super type in a snap shot.
	get base () {
		return this._base;
	}

	set base ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._base = new ElementDefinition_Base(new_value);
	}

	// Identifies the identity of an element defined elsewhere in the profile whose content rules should be applied to the current element.
	get contentReference () {
		return this._contentReference;
	}

	set contentReference ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._contentReference = new_value;
	}

	// The data type or resource that the value of this element is permitted to be.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._type = Array.isArray(new_value) ? new_value.map(val => new ElementDefinition_Type(val)) : [new ElementDefinition_Type(new_value)];
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueBoolean () {
		return this._defaultValueBoolean;
	}

	set defaultValueBoolean ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueBoolean = new_value;
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueInteger () {
		return this._defaultValueInteger;
	}

	set defaultValueInteger ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field defaultValueInteger`);
		}
		this._defaultValueInteger = new_value;
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueDecimal () {
		return this._defaultValueDecimal;
	}

	set defaultValueDecimal ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field defaultValueDecimal`);
		}
		this._defaultValueDecimal = new_value;
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueBase64Binary () {
		return this._defaultValueBase64Binary;
	}

	set defaultValueBase64Binary ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueBase64Binary = new_value;
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueInstant () {
		return this._defaultValueInstant;
	}

	set defaultValueInstant ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueInstant = new_value;
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueString () {
		return this._defaultValueString;
	}

	set defaultValueString ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueString = new_value;
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueUri () {
		return this._defaultValueUri;
	}

	set defaultValueUri ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueUri = new_value;
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueDate () {
		return this._defaultValueDate;
	}

	set defaultValueDate ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field defaultValueDate`);
		}
		this._defaultValueDate = new_value;
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueDateTime () {
		return this._defaultValueDateTime;
	}

	set defaultValueDateTime ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field defaultValueDateTime`);
		}
		this._defaultValueDateTime = new_value;
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueTime () {
		return this._defaultValueTime;
	}

	set defaultValueTime ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field defaultValueTime`);
		}
		this._defaultValueTime = new_value;
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueCode () {
		return this._defaultValueCode;
	}

	set defaultValueCode ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field defaultValueCode`);
		}
		this._defaultValueCode = new_value;
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueOid () {
		return this._defaultValueOid;
	}

	set defaultValueOid ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /urn:oid:(0|[1-9][0-9]*)(\.(0|[1-9][0-9]*))*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field defaultValueOid`);
		}
		this._defaultValueOid = new_value;
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueUuid () {
		return this._defaultValueUuid;
	}

	set defaultValueUuid ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field defaultValueUuid`);
		}
		this._defaultValueUuid = new_value;
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueId () {
		return this._defaultValueId;
	}

	set defaultValueId ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /[A-Za-z0-9\-\.]{1,64}/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field defaultValueId`);
		}
		this._defaultValueId = new_value;
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueUnsignedInt () {
		return this._defaultValueUnsignedInt;
	}

	set defaultValueUnsignedInt ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /[0]|([1-9][0-9]*)/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field defaultValueUnsignedInt`);
		}
		this._defaultValueUnsignedInt = new_value;
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValuePositiveInt () {
		return this._defaultValuePositiveInt;
	}

	set defaultValuePositiveInt ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /[1-9][0-9]*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field defaultValuePositiveInt`);
		}
		this._defaultValuePositiveInt = new_value;
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueMarkdown () {
		return this._defaultValueMarkdown;
	}

	set defaultValueMarkdown ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueMarkdown = new_value;
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueElement () {
		return this._defaultValueElement;
	}

	set defaultValueElement ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueElement = new Element(new_value);
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueExtension () {
		return this._defaultValueExtension;
	}

	set defaultValueExtension ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueExtension = new Extension(new_value);
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueBackboneElement () {
		return this._defaultValueBackboneElement;
	}

	set defaultValueBackboneElement ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueBackboneElement = new BackboneElement(new_value);
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueNarrative () {
		return this._defaultValueNarrative;
	}

	set defaultValueNarrative ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueNarrative = new Narrative(new_value);
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueAnnotation () {
		return this._defaultValueAnnotation;
	}

	set defaultValueAnnotation ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueAnnotation = new Annotation(new_value);
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueAttachment () {
		return this._defaultValueAttachment;
	}

	set defaultValueAttachment ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueAttachment = new Attachment(new_value);
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueIdentifier () {
		return this._defaultValueIdentifier;
	}

	set defaultValueIdentifier ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueIdentifier = new Identifier(new_value);
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueCodeableConcept () {
		return this._defaultValueCodeableConcept;
	}

	set defaultValueCodeableConcept ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueCodeableConcept = new CodeableConcept(new_value);
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueCoding () {
		return this._defaultValueCoding;
	}

	set defaultValueCoding ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueCoding = new Coding(new_value);
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueQuantity () {
		return this._defaultValueQuantity;
	}

	set defaultValueQuantity ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueQuantity = new Quantity(new_value);
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueDuration () {
		return this._defaultValueDuration;
	}

	set defaultValueDuration ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueDuration = new Duration(new_value);
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueSimpleQuantity () {
		return this._defaultValueSimpleQuantity;
	}

	set defaultValueSimpleQuantity ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueSimpleQuantity = new Quantity(new_value);
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueDistance () {
		return this._defaultValueDistance;
	}

	set defaultValueDistance ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueDistance = new Distance(new_value);
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueCount () {
		return this._defaultValueCount;
	}

	set defaultValueCount ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueCount = new Count(new_value);
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueMoney () {
		return this._defaultValueMoney;
	}

	set defaultValueMoney ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueMoney = new Money(new_value);
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueAge () {
		return this._defaultValueAge;
	}

	set defaultValueAge ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueAge = new Age(new_value);
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueRange () {
		return this._defaultValueRange;
	}

	set defaultValueRange ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueRange = new Range(new_value);
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValuePeriod () {
		return this._defaultValuePeriod;
	}

	set defaultValuePeriod ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValuePeriod = new Period(new_value);
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueRatio () {
		return this._defaultValueRatio;
	}

	set defaultValueRatio ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueRatio = new Ratio(new_value);
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueReference () {
		return this._defaultValueReference;
	}

	set defaultValueReference ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueReference = new Reference(new_value);
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueSampledData () {
		return this._defaultValueSampledData;
	}

	set defaultValueSampledData ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueSampledData = new SampledData(new_value);
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueSignature () {
		return this._defaultValueSignature;
	}

	set defaultValueSignature ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueSignature = new Signature(new_value);
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueHumanName () {
		return this._defaultValueHumanName;
	}

	set defaultValueHumanName ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueHumanName = new HumanName(new_value);
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueAddress () {
		return this._defaultValueAddress;
	}

	set defaultValueAddress ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueAddress = new Address(new_value);
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueContactPoint () {
		return this._defaultValueContactPoint;
	}

	set defaultValueContactPoint ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueContactPoint = new ContactPoint(new_value);
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueTiming () {
		return this._defaultValueTiming;
	}

	set defaultValueTiming ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueTiming = new Timing(new_value);
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueMeta () {
		return this._defaultValueMeta;
	}

	set defaultValueMeta ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueMeta = new Meta(new_value);
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueElementDefinition () {
		return this._defaultValueElementDefinition;
	}

	set defaultValueElementDefinition ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueElementDefinition = new ElementDefinition(new_value);
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueContactDetail () {
		return this._defaultValueContactDetail;
	}

	set defaultValueContactDetail ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueContactDetail = new ContactDetail(new_value);
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueContributor () {
		return this._defaultValueContributor;
	}

	set defaultValueContributor ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueContributor = new Contributor(new_value);
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueDosage () {
		return this._defaultValueDosage;
	}

	set defaultValueDosage ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueDosage = new Dosage(new_value);
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueRelatedArtifact () {
		return this._defaultValueRelatedArtifact;
	}

	set defaultValueRelatedArtifact ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueRelatedArtifact = new RelatedArtifact(new_value);
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueUsageContext () {
		return this._defaultValueUsageContext;
	}

	set defaultValueUsageContext ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueUsageContext = new UsageContext(new_value);
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueDataRequirement () {
		return this._defaultValueDataRequirement;
	}

	set defaultValueDataRequirement ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueDataRequirement = new DataRequirement(new_value);
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueParameterDefinition () {
		return this._defaultValueParameterDefinition;
	}

	set defaultValueParameterDefinition ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueParameterDefinition = new ParameterDefinition(new_value);
	}

	// The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
	get defaultValueTriggerDefinition () {
		return this._defaultValueTriggerDefinition;
	}

	set defaultValueTriggerDefinition ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._defaultValueTriggerDefinition = new TriggerDefinition(new_value);
	}

	// The Implicit meaning that is to be understood when this element is missing (e.g. 'when this element is missing, the period is ongoing'.
	get meaningWhenMissing () {
		return this._meaningWhenMissing;
	}

	set meaningWhenMissing ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._meaningWhenMissing = new_value;
	}

	// If present, indicates that the order of the repeating element has meaning and describes what that meaning is.  If absent, it means that the order of the element has no meaning.
	get orderMeaning () {
		return this._orderMeaning;
	}

	set orderMeaning ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._orderMeaning = new_value;
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedBoolean () {
		return this._fixedBoolean;
	}

	set fixedBoolean ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedBoolean = new_value;
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedInteger () {
		return this._fixedInteger;
	}

	set fixedInteger ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field fixedInteger`);
		}
		this._fixedInteger = new_value;
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedDecimal () {
		return this._fixedDecimal;
	}

	set fixedDecimal ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field fixedDecimal`);
		}
		this._fixedDecimal = new_value;
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedBase64Binary () {
		return this._fixedBase64Binary;
	}

	set fixedBase64Binary ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedBase64Binary = new_value;
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedInstant () {
		return this._fixedInstant;
	}

	set fixedInstant ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedInstant = new_value;
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedString () {
		return this._fixedString;
	}

	set fixedString ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedString = new_value;
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedUri () {
		return this._fixedUri;
	}

	set fixedUri ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedUri = new_value;
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedDate () {
		return this._fixedDate;
	}

	set fixedDate ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field fixedDate`);
		}
		this._fixedDate = new_value;
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedDateTime () {
		return this._fixedDateTime;
	}

	set fixedDateTime ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field fixedDateTime`);
		}
		this._fixedDateTime = new_value;
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedTime () {
		return this._fixedTime;
	}

	set fixedTime ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field fixedTime`);
		}
		this._fixedTime = new_value;
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedCode () {
		return this._fixedCode;
	}

	set fixedCode ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field fixedCode`);
		}
		this._fixedCode = new_value;
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedOid () {
		return this._fixedOid;
	}

	set fixedOid ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /urn:oid:(0|[1-9][0-9]*)(\.(0|[1-9][0-9]*))*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field fixedOid`);
		}
		this._fixedOid = new_value;
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedUuid () {
		return this._fixedUuid;
	}

	set fixedUuid ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field fixedUuid`);
		}
		this._fixedUuid = new_value;
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedId () {
		return this._fixedId;
	}

	set fixedId ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /[A-Za-z0-9\-\.]{1,64}/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field fixedId`);
		}
		this._fixedId = new_value;
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedUnsignedInt () {
		return this._fixedUnsignedInt;
	}

	set fixedUnsignedInt ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /[0]|([1-9][0-9]*)/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field fixedUnsignedInt`);
		}
		this._fixedUnsignedInt = new_value;
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedPositiveInt () {
		return this._fixedPositiveInt;
	}

	set fixedPositiveInt ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /[1-9][0-9]*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field fixedPositiveInt`);
		}
		this._fixedPositiveInt = new_value;
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedMarkdown () {
		return this._fixedMarkdown;
	}

	set fixedMarkdown ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedMarkdown = new_value;
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedElement () {
		return this._fixedElement;
	}

	set fixedElement ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedElement = new Element(new_value);
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedExtension () {
		return this._fixedExtension;
	}

	set fixedExtension ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedExtension = new Extension(new_value);
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedBackboneElement () {
		return this._fixedBackboneElement;
	}

	set fixedBackboneElement ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedBackboneElement = new BackboneElement(new_value);
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedNarrative () {
		return this._fixedNarrative;
	}

	set fixedNarrative ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedNarrative = new Narrative(new_value);
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedAnnotation () {
		return this._fixedAnnotation;
	}

	set fixedAnnotation ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedAnnotation = new Annotation(new_value);
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedAttachment () {
		return this._fixedAttachment;
	}

	set fixedAttachment ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedAttachment = new Attachment(new_value);
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedIdentifier () {
		return this._fixedIdentifier;
	}

	set fixedIdentifier ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedIdentifier = new Identifier(new_value);
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedCodeableConcept () {
		return this._fixedCodeableConcept;
	}

	set fixedCodeableConcept ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedCodeableConcept = new CodeableConcept(new_value);
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedCoding () {
		return this._fixedCoding;
	}

	set fixedCoding ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedCoding = new Coding(new_value);
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedQuantity () {
		return this._fixedQuantity;
	}

	set fixedQuantity ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedQuantity = new Quantity(new_value);
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedDuration () {
		return this._fixedDuration;
	}

	set fixedDuration ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedDuration = new Duration(new_value);
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedSimpleQuantity () {
		return this._fixedSimpleQuantity;
	}

	set fixedSimpleQuantity ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedSimpleQuantity = new Quantity(new_value);
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedDistance () {
		return this._fixedDistance;
	}

	set fixedDistance ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedDistance = new Distance(new_value);
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedCount () {
		return this._fixedCount;
	}

	set fixedCount ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedCount = new Count(new_value);
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedMoney () {
		return this._fixedMoney;
	}

	set fixedMoney ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedMoney = new Money(new_value);
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedAge () {
		return this._fixedAge;
	}

	set fixedAge ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedAge = new Age(new_value);
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedRange () {
		return this._fixedRange;
	}

	set fixedRange ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedRange = new Range(new_value);
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedPeriod () {
		return this._fixedPeriod;
	}

	set fixedPeriod ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedPeriod = new Period(new_value);
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedRatio () {
		return this._fixedRatio;
	}

	set fixedRatio ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedRatio = new Ratio(new_value);
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedReference () {
		return this._fixedReference;
	}

	set fixedReference ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedReference = new Reference(new_value);
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedSampledData () {
		return this._fixedSampledData;
	}

	set fixedSampledData ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedSampledData = new SampledData(new_value);
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedSignature () {
		return this._fixedSignature;
	}

	set fixedSignature ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedSignature = new Signature(new_value);
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedHumanName () {
		return this._fixedHumanName;
	}

	set fixedHumanName ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedHumanName = new HumanName(new_value);
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedAddress () {
		return this._fixedAddress;
	}

	set fixedAddress ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedAddress = new Address(new_value);
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedContactPoint () {
		return this._fixedContactPoint;
	}

	set fixedContactPoint ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedContactPoint = new ContactPoint(new_value);
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedTiming () {
		return this._fixedTiming;
	}

	set fixedTiming ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedTiming = new Timing(new_value);
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedMeta () {
		return this._fixedMeta;
	}

	set fixedMeta ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedMeta = new Meta(new_value);
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedElementDefinition () {
		return this._fixedElementDefinition;
	}

	set fixedElementDefinition ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedElementDefinition = new ElementDefinition(new_value);
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedContactDetail () {
		return this._fixedContactDetail;
	}

	set fixedContactDetail ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedContactDetail = new ContactDetail(new_value);
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedContributor () {
		return this._fixedContributor;
	}

	set fixedContributor ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedContributor = new Contributor(new_value);
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedDosage () {
		return this._fixedDosage;
	}

	set fixedDosage ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedDosage = new Dosage(new_value);
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedRelatedArtifact () {
		return this._fixedRelatedArtifact;
	}

	set fixedRelatedArtifact ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedRelatedArtifact = new RelatedArtifact(new_value);
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedUsageContext () {
		return this._fixedUsageContext;
	}

	set fixedUsageContext ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedUsageContext = new UsageContext(new_value);
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedDataRequirement () {
		return this._fixedDataRequirement;
	}

	set fixedDataRequirement ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedDataRequirement = new DataRequirement(new_value);
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedParameterDefinition () {
		return this._fixedParameterDefinition;
	}

	set fixedParameterDefinition ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedParameterDefinition = new ParameterDefinition(new_value);
	}

	// Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
	get fixedTriggerDefinition () {
		return this._fixedTriggerDefinition;
	}

	set fixedTriggerDefinition ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fixedTriggerDefinition = new TriggerDefinition(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternBoolean () {
		return this._patternBoolean;
	}

	set patternBoolean ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternBoolean = new_value;
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternInteger () {
		return this._patternInteger;
	}

	set patternInteger ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field patternInteger`);
		}
		this._patternInteger = new_value;
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternDecimal () {
		return this._patternDecimal;
	}

	set patternDecimal ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field patternDecimal`);
		}
		this._patternDecimal = new_value;
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternBase64Binary () {
		return this._patternBase64Binary;
	}

	set patternBase64Binary ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternBase64Binary = new_value;
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternInstant () {
		return this._patternInstant;
	}

	set patternInstant ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternInstant = new_value;
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternString () {
		return this._patternString;
	}

	set patternString ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternString = new_value;
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternUri () {
		return this._patternUri;
	}

	set patternUri ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternUri = new_value;
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternDate () {
		return this._patternDate;
	}

	set patternDate ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field patternDate`);
		}
		this._patternDate = new_value;
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternDateTime () {
		return this._patternDateTime;
	}

	set patternDateTime ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field patternDateTime`);
		}
		this._patternDateTime = new_value;
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternTime () {
		return this._patternTime;
	}

	set patternTime ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field patternTime`);
		}
		this._patternTime = new_value;
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternCode () {
		return this._patternCode;
	}

	set patternCode ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field patternCode`);
		}
		this._patternCode = new_value;
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternOid () {
		return this._patternOid;
	}

	set patternOid ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /urn:oid:(0|[1-9][0-9]*)(\.(0|[1-9][0-9]*))*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field patternOid`);
		}
		this._patternOid = new_value;
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternUuid () {
		return this._patternUuid;
	}

	set patternUuid ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field patternUuid`);
		}
		this._patternUuid = new_value;
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternId () {
		return this._patternId;
	}

	set patternId ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /[A-Za-z0-9\-\.]{1,64}/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field patternId`);
		}
		this._patternId = new_value;
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternUnsignedInt () {
		return this._patternUnsignedInt;
	}

	set patternUnsignedInt ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /[0]|([1-9][0-9]*)/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field patternUnsignedInt`);
		}
		this._patternUnsignedInt = new_value;
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternPositiveInt () {
		return this._patternPositiveInt;
	}

	set patternPositiveInt ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /[1-9][0-9]*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field patternPositiveInt`);
		}
		this._patternPositiveInt = new_value;
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternMarkdown () {
		return this._patternMarkdown;
	}

	set patternMarkdown ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternMarkdown = new_value;
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternElement () {
		return this._patternElement;
	}

	set patternElement ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternElement = new Element(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternExtension () {
		return this._patternExtension;
	}

	set patternExtension ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternExtension = new Extension(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternBackboneElement () {
		return this._patternBackboneElement;
	}

	set patternBackboneElement ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternBackboneElement = new BackboneElement(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternNarrative () {
		return this._patternNarrative;
	}

	set patternNarrative ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternNarrative = new Narrative(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternAnnotation () {
		return this._patternAnnotation;
	}

	set patternAnnotation ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternAnnotation = new Annotation(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternAttachment () {
		return this._patternAttachment;
	}

	set patternAttachment ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternAttachment = new Attachment(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternIdentifier () {
		return this._patternIdentifier;
	}

	set patternIdentifier ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternIdentifier = new Identifier(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternCodeableConcept () {
		return this._patternCodeableConcept;
	}

	set patternCodeableConcept ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternCodeableConcept = new CodeableConcept(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternCoding () {
		return this._patternCoding;
	}

	set patternCoding ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternCoding = new Coding(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternQuantity () {
		return this._patternQuantity;
	}

	set patternQuantity ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternQuantity = new Quantity(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternDuration () {
		return this._patternDuration;
	}

	set patternDuration ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternDuration = new Duration(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternSimpleQuantity () {
		return this._patternSimpleQuantity;
	}

	set patternSimpleQuantity ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternSimpleQuantity = new Quantity(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternDistance () {
		return this._patternDistance;
	}

	set patternDistance ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternDistance = new Distance(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternCount () {
		return this._patternCount;
	}

	set patternCount ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternCount = new Count(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternMoney () {
		return this._patternMoney;
	}

	set patternMoney ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternMoney = new Money(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternAge () {
		return this._patternAge;
	}

	set patternAge ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternAge = new Age(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternRange () {
		return this._patternRange;
	}

	set patternRange ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternRange = new Range(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternPeriod () {
		return this._patternPeriod;
	}

	set patternPeriod ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternPeriod = new Period(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternRatio () {
		return this._patternRatio;
	}

	set patternRatio ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternRatio = new Ratio(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternReference () {
		return this._patternReference;
	}

	set patternReference ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternReference = new Reference(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternSampledData () {
		return this._patternSampledData;
	}

	set patternSampledData ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternSampledData = new SampledData(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternSignature () {
		return this._patternSignature;
	}

	set patternSignature ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternSignature = new Signature(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternHumanName () {
		return this._patternHumanName;
	}

	set patternHumanName ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternHumanName = new HumanName(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternAddress () {
		return this._patternAddress;
	}

	set patternAddress ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternAddress = new Address(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternContactPoint () {
		return this._patternContactPoint;
	}

	set patternContactPoint ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternContactPoint = new ContactPoint(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternTiming () {
		return this._patternTiming;
	}

	set patternTiming ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternTiming = new Timing(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternMeta () {
		return this._patternMeta;
	}

	set patternMeta ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternMeta = new Meta(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternElementDefinition () {
		return this._patternElementDefinition;
	}

	set patternElementDefinition ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternElementDefinition = new ElementDefinition(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternContactDetail () {
		return this._patternContactDetail;
	}

	set patternContactDetail ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternContactDetail = new ContactDetail(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternContributor () {
		return this._patternContributor;
	}

	set patternContributor ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternContributor = new Contributor(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternDosage () {
		return this._patternDosage;
	}

	set patternDosage ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternDosage = new Dosage(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternRelatedArtifact () {
		return this._patternRelatedArtifact;
	}

	set patternRelatedArtifact ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternRelatedArtifact = new RelatedArtifact(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternUsageContext () {
		return this._patternUsageContext;
	}

	set patternUsageContext ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternUsageContext = new UsageContext(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternDataRequirement () {
		return this._patternDataRequirement;
	}

	set patternDataRequirement ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternDataRequirement = new DataRequirement(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternParameterDefinition () {
		return this._patternParameterDefinition;
	}

	set patternParameterDefinition ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternParameterDefinition = new ParameterDefinition(new_value);
	}

	// Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
	get patternTriggerDefinition () {
		return this._patternTriggerDefinition;
	}

	set patternTriggerDefinition ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patternTriggerDefinition = new TriggerDefinition(new_value);
	}

	// A sample value for this element demonstrating the type of information that would typically be found in the element.
	get example () {
		return this._example;
	}

	set example ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._example = Array.isArray(new_value) ? new_value.map(val => new ElementDefinition_Example(val)) : [new ElementDefinition_Example(new_value)];
	}

	// The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
	get minValueDate () {
		return this._minValueDate;
	}

	set minValueDate ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field minValueDate`);
		}
		this._minValueDate = new_value;
	}

	// The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
	get minValueDateTime () {
		return this._minValueDateTime;
	}

	set minValueDateTime ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field minValueDateTime`);
		}
		this._minValueDateTime = new_value;
	}

	// The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
	get minValueInstant () {
		return this._minValueInstant;
	}

	set minValueInstant ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._minValueInstant = new_value;
	}

	// The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
	get minValueTime () {
		return this._minValueTime;
	}

	set minValueTime ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field minValueTime`);
		}
		this._minValueTime = new_value;
	}

	// The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
	get minValueDecimal () {
		return this._minValueDecimal;
	}

	set minValueDecimal ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field minValueDecimal`);
		}
		this._minValueDecimal = new_value;
	}

	// The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
	get minValueInteger () {
		return this._minValueInteger;
	}

	set minValueInteger ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field minValueInteger`);
		}
		this._minValueInteger = new_value;
	}

	// The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
	get minValuePositiveInt () {
		return this._minValuePositiveInt;
	}

	set minValuePositiveInt ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /[1-9][0-9]*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field minValuePositiveInt`);
		}
		this._minValuePositiveInt = new_value;
	}

	// The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
	get minValueUnsignedInt () {
		return this._minValueUnsignedInt;
	}

	set minValueUnsignedInt ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /[0]|([1-9][0-9]*)/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field minValueUnsignedInt`);
		}
		this._minValueUnsignedInt = new_value;
	}

	// The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
	get minValueQuantity () {
		return this._minValueQuantity;
	}

	set minValueQuantity ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._minValueQuantity = new Quantity(new_value);
	}

	// The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
	get maxValueDate () {
		return this._maxValueDate;
	}

	set maxValueDate ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field maxValueDate`);
		}
		this._maxValueDate = new_value;
	}

	// The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
	get maxValueDateTime () {
		return this._maxValueDateTime;
	}

	set maxValueDateTime ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field maxValueDateTime`);
		}
		this._maxValueDateTime = new_value;
	}

	// The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
	get maxValueInstant () {
		return this._maxValueInstant;
	}

	set maxValueInstant ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._maxValueInstant = new_value;
	}

	// The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
	get maxValueTime () {
		return this._maxValueTime;
	}

	set maxValueTime ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field maxValueTime`);
		}
		this._maxValueTime = new_value;
	}

	// The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
	get maxValueDecimal () {
		return this._maxValueDecimal;
	}

	set maxValueDecimal ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field maxValueDecimal`);
		}
		this._maxValueDecimal = new_value;
	}

	// The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
	get maxValueInteger () {
		return this._maxValueInteger;
	}

	set maxValueInteger ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field maxValueInteger`);
		}
		this._maxValueInteger = new_value;
	}

	// The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
	get maxValuePositiveInt () {
		return this._maxValuePositiveInt;
	}

	set maxValuePositiveInt ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /[1-9][0-9]*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field maxValuePositiveInt`);
		}
		this._maxValuePositiveInt = new_value;
	}

	// The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
	get maxValueUnsignedInt () {
		return this._maxValueUnsignedInt;
	}

	set maxValueUnsignedInt ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /[0]|([1-9][0-9]*)/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field maxValueUnsignedInt`);
		}
		this._maxValueUnsignedInt = new_value;
	}

	// The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
	get maxValueQuantity () {
		return this._maxValueQuantity;
	}

	set maxValueQuantity ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._maxValueQuantity = new Quantity(new_value);
	}

	// Indicates the maximum length in characters that is permitted to be present in conformant instances and which is expected to be supported by conformant consumers that support the element.
	get maxLength () {
		return this._maxLength;
	}

	set maxLength ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field maxLength`);
		}
		this._maxLength = new_value;
	}

	// A reference to an invariant that may make additional statements about the cardinality or value in the instance.
	get condition () {
		return this._condition;
	}

	set condition ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._condition = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// Formal constraints such as co-occurrence and other constraints that can be computationally evaluated within the context of the instance.
	get constraint () {
		return this._constraint;
	}

	set constraint ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._constraint = Array.isArray(new_value) ? new_value.map(val => new ElementDefinition_Constraint(val)) : [new ElementDefinition_Constraint(new_value)];
	}

	// If true, implementations that produce or consume resources SHALL provide "support" for the element in some meaningful way.  If false, the element may be ignored and not supported.
	get mustSupport () {
		return this._mustSupport;
	}

	set mustSupport ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._mustSupport = new_value;
	}

	// If true, the value of this element affects the interpretation of the element or resource that contains it, and the value of the element cannot be ignored. Typically, this is used for status, negation and qualification codes. The effect of this is that the element cannot be ignored by systems: they SHALL either recognize the element and process it, and/or a pre-determination has been made that it is not relevant to their particular system.
	get isModifier () {
		return this._isModifier;
	}

	set isModifier ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._isModifier = new_value;
	}

	// Whether the element should be included if a client requests a search with the parameter _summary=true.
	get isSummary () {
		return this._isSummary;
	}

	set isSummary ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._isSummary = new_value;
	}

	// Binds to a value set if this element is coded (code, Coding, CodeableConcept, Quantity), or the data types (string, uri).
	get binding () {
		return this._binding;
	}

	set binding ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._binding = new ElementDefinition_Binding(new_value);
	}

	// Identifies a concept from an external specification that roughly corresponds to this element.
	get mapping () {
		return this._mapping;
	}

	set mapping ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._mapping = Array.isArray(new_value) ? new_value.map(val => new ElementDefinition_Mapping(val)) : [new ElementDefinition_Mapping(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			path: this.path,
			representation: this.representation,
			sliceName: this.sliceName,
			label: this.label,
			code: this.code.map(v => v.toJSON()),
			slicing: this.slicing && this.slicing.toJSON(),
			short: this.short,
			definition: this.definition,
			comment: this.comment,
			requirements: this.requirements,
			alias: this.alias,
			min: this.min,
			max: this.max,
			base: this.base && this.base.toJSON(),
			contentReference: this.contentReference,
			type: this.type.map(v => v.toJSON()),
			defaultValueBoolean: this.defaultValueBoolean,
			defaultValueInteger: this.defaultValueInteger,
			defaultValueDecimal: this.defaultValueDecimal,
			defaultValueBase64Binary: this.defaultValueBase64Binary,
			defaultValueInstant: this.defaultValueInstant,
			defaultValueString: this.defaultValueString,
			defaultValueUri: this.defaultValueUri,
			defaultValueDate: this.defaultValueDate,
			defaultValueDateTime: this.defaultValueDateTime,
			defaultValueTime: this.defaultValueTime,
			defaultValueCode: this.defaultValueCode,
			defaultValueOid: this.defaultValueOid,
			defaultValueUuid: this.defaultValueUuid,
			defaultValueId: this.defaultValueId,
			defaultValueUnsignedInt: this.defaultValueUnsignedInt,
			defaultValuePositiveInt: this.defaultValuePositiveInt,
			defaultValueMarkdown: this.defaultValueMarkdown,
			defaultValueElement: this.defaultValueElement && this.defaultValueElement.toJSON(),
			defaultValueExtension: this.defaultValueExtension && this.defaultValueExtension.toJSON(),
			defaultValueBackboneElement: this.defaultValueBackboneElement && this.defaultValueBackboneElement.toJSON(),
			defaultValueNarrative: this.defaultValueNarrative && this.defaultValueNarrative.toJSON(),
			defaultValueAnnotation: this.defaultValueAnnotation && this.defaultValueAnnotation.toJSON(),
			defaultValueAttachment: this.defaultValueAttachment && this.defaultValueAttachment.toJSON(),
			defaultValueIdentifier: this.defaultValueIdentifier && this.defaultValueIdentifier.toJSON(),
			defaultValueCodeableConcept: this.defaultValueCodeableConcept && this.defaultValueCodeableConcept.toJSON(),
			defaultValueCoding: this.defaultValueCoding && this.defaultValueCoding.toJSON(),
			defaultValueQuantity: this.defaultValueQuantity && this.defaultValueQuantity.toJSON(),
			defaultValueDuration: this.defaultValueDuration && this.defaultValueDuration.toJSON(),
			defaultValueSimpleQuantity: this.defaultValueSimpleQuantity && this.defaultValueSimpleQuantity.toJSON(),
			defaultValueDistance: this.defaultValueDistance && this.defaultValueDistance.toJSON(),
			defaultValueCount: this.defaultValueCount && this.defaultValueCount.toJSON(),
			defaultValueMoney: this.defaultValueMoney && this.defaultValueMoney.toJSON(),
			defaultValueAge: this.defaultValueAge && this.defaultValueAge.toJSON(),
			defaultValueRange: this.defaultValueRange && this.defaultValueRange.toJSON(),
			defaultValuePeriod: this.defaultValuePeriod && this.defaultValuePeriod.toJSON(),
			defaultValueRatio: this.defaultValueRatio && this.defaultValueRatio.toJSON(),
			defaultValueReference: this.defaultValueReference && this.defaultValueReference.toJSON(),
			defaultValueSampledData: this.defaultValueSampledData && this.defaultValueSampledData.toJSON(),
			defaultValueSignature: this.defaultValueSignature && this.defaultValueSignature.toJSON(),
			defaultValueHumanName: this.defaultValueHumanName && this.defaultValueHumanName.toJSON(),
			defaultValueAddress: this.defaultValueAddress && this.defaultValueAddress.toJSON(),
			defaultValueContactPoint: this.defaultValueContactPoint && this.defaultValueContactPoint.toJSON(),
			defaultValueTiming: this.defaultValueTiming && this.defaultValueTiming.toJSON(),
			defaultValueMeta: this.defaultValueMeta && this.defaultValueMeta.toJSON(),
			defaultValueElementDefinition: this.defaultValueElementDefinition && this.defaultValueElementDefinition.toJSON(),
			defaultValueContactDetail: this.defaultValueContactDetail && this.defaultValueContactDetail.toJSON(),
			defaultValueContributor: this.defaultValueContributor && this.defaultValueContributor.toJSON(),
			defaultValueDosage: this.defaultValueDosage && this.defaultValueDosage.toJSON(),
			defaultValueRelatedArtifact: this.defaultValueRelatedArtifact && this.defaultValueRelatedArtifact.toJSON(),
			defaultValueUsageContext: this.defaultValueUsageContext && this.defaultValueUsageContext.toJSON(),
			defaultValueDataRequirement: this.defaultValueDataRequirement && this.defaultValueDataRequirement.toJSON(),
			defaultValueParameterDefinition: this.defaultValueParameterDefinition && this.defaultValueParameterDefinition.toJSON(),
			defaultValueTriggerDefinition: this.defaultValueTriggerDefinition && this.defaultValueTriggerDefinition.toJSON(),
			meaningWhenMissing: this.meaningWhenMissing,
			orderMeaning: this.orderMeaning,
			fixedBoolean: this.fixedBoolean,
			fixedInteger: this.fixedInteger,
			fixedDecimal: this.fixedDecimal,
			fixedBase64Binary: this.fixedBase64Binary,
			fixedInstant: this.fixedInstant,
			fixedString: this.fixedString,
			fixedUri: this.fixedUri,
			fixedDate: this.fixedDate,
			fixedDateTime: this.fixedDateTime,
			fixedTime: this.fixedTime,
			fixedCode: this.fixedCode,
			fixedOid: this.fixedOid,
			fixedUuid: this.fixedUuid,
			fixedId: this.fixedId,
			fixedUnsignedInt: this.fixedUnsignedInt,
			fixedPositiveInt: this.fixedPositiveInt,
			fixedMarkdown: this.fixedMarkdown,
			fixedElement: this.fixedElement && this.fixedElement.toJSON(),
			fixedExtension: this.fixedExtension && this.fixedExtension.toJSON(),
			fixedBackboneElement: this.fixedBackboneElement && this.fixedBackboneElement.toJSON(),
			fixedNarrative: this.fixedNarrative && this.fixedNarrative.toJSON(),
			fixedAnnotation: this.fixedAnnotation && this.fixedAnnotation.toJSON(),
			fixedAttachment: this.fixedAttachment && this.fixedAttachment.toJSON(),
			fixedIdentifier: this.fixedIdentifier && this.fixedIdentifier.toJSON(),
			fixedCodeableConcept: this.fixedCodeableConcept && this.fixedCodeableConcept.toJSON(),
			fixedCoding: this.fixedCoding && this.fixedCoding.toJSON(),
			fixedQuantity: this.fixedQuantity && this.fixedQuantity.toJSON(),
			fixedDuration: this.fixedDuration && this.fixedDuration.toJSON(),
			fixedSimpleQuantity: this.fixedSimpleQuantity && this.fixedSimpleQuantity.toJSON(),
			fixedDistance: this.fixedDistance && this.fixedDistance.toJSON(),
			fixedCount: this.fixedCount && this.fixedCount.toJSON(),
			fixedMoney: this.fixedMoney && this.fixedMoney.toJSON(),
			fixedAge: this.fixedAge && this.fixedAge.toJSON(),
			fixedRange: this.fixedRange && this.fixedRange.toJSON(),
			fixedPeriod: this.fixedPeriod && this.fixedPeriod.toJSON(),
			fixedRatio: this.fixedRatio && this.fixedRatio.toJSON(),
			fixedReference: this.fixedReference && this.fixedReference.toJSON(),
			fixedSampledData: this.fixedSampledData && this.fixedSampledData.toJSON(),
			fixedSignature: this.fixedSignature && this.fixedSignature.toJSON(),
			fixedHumanName: this.fixedHumanName && this.fixedHumanName.toJSON(),
			fixedAddress: this.fixedAddress && this.fixedAddress.toJSON(),
			fixedContactPoint: this.fixedContactPoint && this.fixedContactPoint.toJSON(),
			fixedTiming: this.fixedTiming && this.fixedTiming.toJSON(),
			fixedMeta: this.fixedMeta && this.fixedMeta.toJSON(),
			fixedElementDefinition: this.fixedElementDefinition && this.fixedElementDefinition.toJSON(),
			fixedContactDetail: this.fixedContactDetail && this.fixedContactDetail.toJSON(),
			fixedContributor: this.fixedContributor && this.fixedContributor.toJSON(),
			fixedDosage: this.fixedDosage && this.fixedDosage.toJSON(),
			fixedRelatedArtifact: this.fixedRelatedArtifact && this.fixedRelatedArtifact.toJSON(),
			fixedUsageContext: this.fixedUsageContext && this.fixedUsageContext.toJSON(),
			fixedDataRequirement: this.fixedDataRequirement && this.fixedDataRequirement.toJSON(),
			fixedParameterDefinition: this.fixedParameterDefinition && this.fixedParameterDefinition.toJSON(),
			fixedTriggerDefinition: this.fixedTriggerDefinition && this.fixedTriggerDefinition.toJSON(),
			patternBoolean: this.patternBoolean,
			patternInteger: this.patternInteger,
			patternDecimal: this.patternDecimal,
			patternBase64Binary: this.patternBase64Binary,
			patternInstant: this.patternInstant,
			patternString: this.patternString,
			patternUri: this.patternUri,
			patternDate: this.patternDate,
			patternDateTime: this.patternDateTime,
			patternTime: this.patternTime,
			patternCode: this.patternCode,
			patternOid: this.patternOid,
			patternUuid: this.patternUuid,
			patternId: this.patternId,
			patternUnsignedInt: this.patternUnsignedInt,
			patternPositiveInt: this.patternPositiveInt,
			patternMarkdown: this.patternMarkdown,
			patternElement: this.patternElement && this.patternElement.toJSON(),
			patternExtension: this.patternExtension && this.patternExtension.toJSON(),
			patternBackboneElement: this.patternBackboneElement && this.patternBackboneElement.toJSON(),
			patternNarrative: this.patternNarrative && this.patternNarrative.toJSON(),
			patternAnnotation: this.patternAnnotation && this.patternAnnotation.toJSON(),
			patternAttachment: this.patternAttachment && this.patternAttachment.toJSON(),
			patternIdentifier: this.patternIdentifier && this.patternIdentifier.toJSON(),
			patternCodeableConcept: this.patternCodeableConcept && this.patternCodeableConcept.toJSON(),
			patternCoding: this.patternCoding && this.patternCoding.toJSON(),
			patternQuantity: this.patternQuantity && this.patternQuantity.toJSON(),
			patternDuration: this.patternDuration && this.patternDuration.toJSON(),
			patternSimpleQuantity: this.patternSimpleQuantity && this.patternSimpleQuantity.toJSON(),
			patternDistance: this.patternDistance && this.patternDistance.toJSON(),
			patternCount: this.patternCount && this.patternCount.toJSON(),
			patternMoney: this.patternMoney && this.patternMoney.toJSON(),
			patternAge: this.patternAge && this.patternAge.toJSON(),
			patternRange: this.patternRange && this.patternRange.toJSON(),
			patternPeriod: this.patternPeriod && this.patternPeriod.toJSON(),
			patternRatio: this.patternRatio && this.patternRatio.toJSON(),
			patternReference: this.patternReference && this.patternReference.toJSON(),
			patternSampledData: this.patternSampledData && this.patternSampledData.toJSON(),
			patternSignature: this.patternSignature && this.patternSignature.toJSON(),
			patternHumanName: this.patternHumanName && this.patternHumanName.toJSON(),
			patternAddress: this.patternAddress && this.patternAddress.toJSON(),
			patternContactPoint: this.patternContactPoint && this.patternContactPoint.toJSON(),
			patternTiming: this.patternTiming && this.patternTiming.toJSON(),
			patternMeta: this.patternMeta && this.patternMeta.toJSON(),
			patternElementDefinition: this.patternElementDefinition && this.patternElementDefinition.toJSON(),
			patternContactDetail: this.patternContactDetail && this.patternContactDetail.toJSON(),
			patternContributor: this.patternContributor && this.patternContributor.toJSON(),
			patternDosage: this.patternDosage && this.patternDosage.toJSON(),
			patternRelatedArtifact: this.patternRelatedArtifact && this.patternRelatedArtifact.toJSON(),
			patternUsageContext: this.patternUsageContext && this.patternUsageContext.toJSON(),
			patternDataRequirement: this.patternDataRequirement && this.patternDataRequirement.toJSON(),
			patternParameterDefinition: this.patternParameterDefinition && this.patternParameterDefinition.toJSON(),
			patternTriggerDefinition: this.patternTriggerDefinition && this.patternTriggerDefinition.toJSON(),
			example: this.example.map(v => v.toJSON()),
			minValueDate: this.minValueDate,
			minValueDateTime: this.minValueDateTime,
			minValueInstant: this.minValueInstant,
			minValueTime: this.minValueTime,
			minValueDecimal: this.minValueDecimal,
			minValueInteger: this.minValueInteger,
			minValuePositiveInt: this.minValuePositiveInt,
			minValueUnsignedInt: this.minValueUnsignedInt,
			minValueQuantity: this.minValueQuantity && this.minValueQuantity.toJSON(),
			maxValueDate: this.maxValueDate,
			maxValueDateTime: this.maxValueDateTime,
			maxValueInstant: this.maxValueInstant,
			maxValueTime: this.maxValueTime,
			maxValueDecimal: this.maxValueDecimal,
			maxValueInteger: this.maxValueInteger,
			maxValuePositiveInt: this.maxValuePositiveInt,
			maxValueUnsignedInt: this.maxValueUnsignedInt,
			maxValueQuantity: this.maxValueQuantity && this.maxValueQuantity.toJSON(),
			maxLength: this.maxLength,
			condition: this.condition,
			constraint: this.constraint.map(v => v.toJSON()),
			mustSupport: this.mustSupport,
			isModifier: this.isModifier,
			isSummary: this.isSummary,
			binding: this.binding && this.binding.toJSON(),
			mapping: this.mapping.map(v => v.toJSON())
		});
	}

}

module.exports = ElementDefinition;
