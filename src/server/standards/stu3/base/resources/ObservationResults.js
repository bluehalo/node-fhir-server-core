const DomainResource = require('../types/DomainResource');
const Meta = require('../types/Meta');
const Code = require('../types/Code');
const Narrative = require('../types/Narrative');
const Resource = require('../types/Resource');
const Extension = require('../types/Extension');
const Identifier = require('../types/Identifier');
const CodeableConcept = require('../types/CodeableConcept');
const Coding = require('../types/Coding');
const Reference = require('../types/Reference');
const Period = require('../types/Period');
const Quantity = require('../types/Quantity');
const Range = require('../types/Range');
const Ratio = require('../types/Ratio');
const SampledData = require('../types/SampledData');
const Attachment = require('../types/Attachment');

class Component {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// id		0..1	string	xml:id (or equivalent in JSON)
	set id(id) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

	// extension		0..*	Extension	Additional Content defined by implementations
	set extension(extension) {
		if (Array.isArray(extension)) {
			this._extension = extension.map((i) => new Extension(i));
		} else {
			this._extension = [new Extension(extension)];
		}
	}

	get extension() {
		return this._extension;
	}

	// modifierExtension	?!*	0..*	Extension	Extensions that cannot be ignored
	set modifierExtension(modifierExtension) {
		if (Array.isArray(modifierExtension)) {
			this._modifierExtension = modifierExtension.map((i) => new Extension(i));
		} else {
			this._modifierExtension = [new Extension(modifierExtension)];
		}
	}

	get modifierExtension() {
		return this._modifierExtension;
	}

	// code	*	1..1	CodeableConcept	Type of component observation (code / type)
	// Binding: LOINC Codes (example)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// value[x]	Σ	0..1		Actual component result
	// valueQuantity			Quantity
	set valueQuantity(valueQuantity) {
		this._valueQuantity = new Quantity(valueQuantity);
	}

	get valueQuantity() {
		return this._valueQuantity;
	}

	// valueCodeableConcept			CodeableConcept
	set valueCodeableConcept(valueCodeableConcept) {
		this._valueCodeableConcept = new CodeableConcept(valueCodeableConcept);
	}

	get valueCodeableConcept() {
		return this._valueCodeableConcept;
	}

	// valueString			string
	set valueString(valueString) {
		this._valueString = valueString;
	}

	get valueString() {
		return this._valueString;
	}

	// valueRange			Range
	set valueRange(valueRange) {
		this._valueRange = new Range(valueRange);
	}

	get valueRange() {
		return this._valueRange;
	}

	// valueRatio			Ratio
	set valueRatio(valueRatio) {
		this._valueRatio = new Ratio(valueRatio);
	}

	get valueRatio() {
		return this._valueRatio;
	}

	// valueSampledData			SampledData
	set valueSampledData(valueSampledData) {
		this._valueSampledData = new SampledData(valueSampledData);
	}

	get valueSampledData() {
		return this._valueSampledData;
	}

	// valueAttachment			Attachment
	set valueAttachment(valueAttachment) {
		this._valueAttachment = new Attachment(valueAttachment);
	}

	get valueAttachment() {
		return this._valueAttachment;
	}

	// valueTime			time
	set valueTime(valueTime) {
		this._valueTime = valueTime;
	}

	get valueTime() {
		return this._valueTime;
	}

	// valueDateTime			dateTime
	set valueDateTime(valueDateTime) {
		this._valueDateTime = valueDateTime;
	}

	get valueDateTime() {
		return this._valueDateTime;
	}

	// valuePeriod			Period
	set valuePeriod(valuePeriod) {
		this._valuePeriod = new Period(valuePeriod);
	}

	get valuePeriod() {
		return this._valuePeriod;
	}

	// dataAbsentReason	I	0..1	CodeableConcept	Why the component result is missing
	// Binding: Observation Value Absent Reason (extensible)
	set dataAbsentReason(dataAbsentReason) {
		this._dataAbsentReason = new CodeableConcept(dataAbsentReason);
	}

	get dataAbsentReason() {
		return this._dataAbsentReason;
	}

	// interpretation		0..1	CodeableConcept	High, low, normal, etc.
	// Binding: Observation Interpretation Codes (extensible)
	set interpretation(interpretation) {
		this._interpretation = new CodeableConcept(interpretation);
	}

	get interpretation() {
		return this._interpretation;
	}

	// referenceRange		0..*		Unknown reference to #Observation:uscoreobss.referenceRange
	// Provides guide for interpretation of component result
	set referenceRange(referenceRange) {
		this._referenceRange = [].concat(referenceRange);
	}

	get referenceRange() {
		return this._referenceRange;
	}

	toJSON() {
		return {
			id: this._id,
			extension: this._extension,
			modifierExtension: this._modifierExtension,
			code: this._code,
			valueQuantity: this._valueQuantity,
			valueCodeableConcept: this._valueCodeableConcept,
			valueString: this._valueString,
			valueRange: this._valueRange,
			valueRatio: this._valueRatio,
			valueSampledData: this._valueSampledData,
			valueAttachment: this._valueAttachment,
			valueTime: this._valueTime,
			valueDateTime: this._valueDateTime,
			valuePeriod: this._valuePeriod,
			dataAbsentReason: this._dataAbsentReason,
			interpretation: this._interpretation,
			referenceRange: this._referenceRange,
		};
	}
}

class Related {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// id		0..1	string	xml:id (or equivalent in JSON)
	set id(id) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

	// extension		0..*	Extension	Additional Content defined by implementations
	set extension(extension) {
		if (Array.isArray(extension)) {
			this._extension = extension.map((i) => new Extension(i));
		} else {
			this._extension = [new Extension(extension)];
		}
	}

	get extension() {
		return this._extension;
	}

	// modifierExtension	?!*	0..*	Extension	Extensions that cannot be ignored
	set modifierExtension(modifierExtension) {
		if (Array.isArray(modifierExtension)) {
			this._modifierExtension = modifierExtension.map((i) => new Extension(i));
		} else {
			this._modifierExtension = [new Extension(modifierExtension)];
		}
	}

	get modifierExtension() {
		return this._modifierExtension;
	}

	// type		0..1	code	has-member | derived-from | sequel-to | replaces | qualified-by | interfered-by
	// Binding: ObservationRelationshipType (required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// target		1..1	Reference(Observation), Reference(QuestionnaireResponse), Reference(Sequence)	Resource that is related to this one
	set target(target) {
		this._target = new Reference(target);
	}

	get target() {
		return this._target;
	}

	toJSON() {
		return {
			id: this._id,
			extension: this._extension,
			modifierExtension: this._modifierExtension,
			type: this._type,
			target: this._target,
		};
	}
}

class ReferenceRange {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// id		0..1	string	xml:id (or equivalent in JSON)
	set id(id) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

	// extension		0..*	Extension	Additional Content defined by implementations
	set extension(extension) {
		if (Array.isArray(extension)) {
			this._extension = extension.map((i) => new Extension(i));
		} else {
			this._extension = [new Extension(extension)];
		}
	}

	get extension() {
		return this._extension;
	}

	// modifierExtension	?!*	0..*	Extension	Extensions that cannot be ignored
	set modifierExtension(modifierExtension) {
		if (Array.isArray(modifierExtension)) {
			this._modifierExtension = modifierExtension.map((i) => new Extension(i));
		} else {
			this._modifierExtension = [new Extension(modifierExtension)];
		}
	}

	get modifierExtension() {
		return this._modifierExtension;
	}

	// low	I	0..1	SimpleQuantity	Low Range, if relevant
	set low(low) {
		this._low = low;
	}

	get low() {
		return this._low;
	}

	// high	I	0..1	SimpleQuantity	High Range, if relevant
	set high(high) {
		this._high = high;
	}

	get high() {
		return this._high;
	}

	// meaning		0..*	CodeableConcept	Reference range qualifier
	// Binding: Observation Reference Range Meaning Codes (example)
	set meaning(meaning) {
		if (Array.isArray(meaning)) {
			this._meaning = meaning.map((i) => new CodeableConcept(i));
		} else {
			this._meaning = [new CodeableConcept(meaning)];
		}
	}

	get meaning() {
		return this._meaning;
	}

	// age		0..1	Range	Applicable age range, if relevant
	set age(age) {
		this._age = new Range(age);
	}

	get age() {
		return this._age;
	}

	// text		0..1	string	Text based reference range in an observation
	set text(text) {
		this._text = text;
	}

	get text() {
		return this._text;
	}

	toJSON() {
		return {
			id: this._id,
			extension: this._extension,
			modifierExtension: this._modifierExtension,
			low: this._low,
			high: this._high,
			meaning: this._meaning,
			age: this._age,
			text: this._text,
		};
	}
}

class ObservationResults extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'ObservationResults';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// id	*	0..1	id	Logical id of this artifact
	set id(id) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

	// meta	*	0..1	Meta	Metadata about the resource
	set meta(meta) {
		this._meta = new Meta(meta);
	}

	get meta() {
		return this._meta;
	}

	// implicitRules	?!*	0..1	uri	A set of rules under which this content was created
	set implicitRules(implicitRules) {
		this._implicitRules = implicitRules;
	}

	get implicitRules() {
		return this._implicitRules;
	}

	// language		0..1	code	Language of the resource content
	// Binding: Common Languages (extensible)
	set language(language) {
		this._language = new Code(language);
	}

	get language() {
		return this._language;
	}

	// text	I	0..1	Narrative	Text summary of the resource, for human interpretation
	set text(text) {
		this._text = new Narrative(text);
	}

	get text() {
		return this._text;
	}

	// contained		0..*	Resource	Contained, inline Resources
	set contained(contained) {
		if (Array.isArray(contained)) {
			this._contained = contained.map((i) => new Resource(i));
		} else {
			this._contained = [new Resource(contained)];
		}
	}

	get contained() {
		return this._contained;
	}

	// extension		0..*	Extension	Additional Content defined by implementations
	set extension(extension) {
		if (Array.isArray(extension)) {
			this._extension = extension.map((i) => new Extension(i));
		} else {
			this._extension = [new Extension(extension)];
		}
	}

	get extension() {
		return this._extension;
	}

	// modifierExtension	?!	0..*	Extension	Extensions that cannot be ignored
	set modifierExtension(modifierExtension) {
		if (Array.isArray(modifierExtension)) {
			this._modifierExtension = modifierExtension.map((i) => new Extension(i));
		} else {
			this._modifierExtension = [new Extension(modifierExtension)];
		}
	}

	get modifierExtension() {
		return this._modifierExtension;
	}

	// identifier		0..*	Identifier	Unique Id for this particular observation
	set identifier(identifier) {
		if (Array.isArray(identifier)) {
			this._identifier = identifier.map((i) => new Identifier(i));
		} else {
			this._identifier = [new Identifier(identifier)];
		}
	}

	get identifier() {
		return this._identifier;
	}

	// status	?!S	1..1	code	registered | preliminary | final | amended +
	// Binding: ObservationStatus (required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// category	S	1..1	CodeableConcept	Classification of type of observation
	// Binding: Observation Category Codes (example)
	// Required Pattern: {"coding":[{"system":"http://hl7.org/fhir/observation-category","code":"laboratory"}]}
	set category(category) {
		this._category = new CodeableConcept(category);
	}

	get category() {
		return this._category;
	}

	// code	S	1..1	CodeableConcept	US Realm Laboratory Test Name
	// Binding: LOINC Codes (extensible)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// coding	S	1..*	Coding	Standard and local codes may be included here by repeating the coding element with a different coding.system.
	set coding(coding) {
		if (Array.isArray(coding)) {
			this._coding = coding.map((i) => new Coding(i));
		} else {
			this._coding = [new Coding(coding)];
		}
	}

	get coding() {
		return this._coding;
	}

	// system	S	1..1	uri	Identity of the terminology system
	set system(system) {
		this._system = system;
	}

	get system() {
		return this._system;
	}

	// version	*	0..1	string	Version of the system - if relevant
	set version(version) {
		this._version = version;
	}

	get version() {
		return this._version;
	}

	// display	S	0..1	string	Representation defined by the system
	set display(display) {
		this._display = display;
	}

	get display() {
		return this._display;
	}

	// userSelected	*	0..1	boolean	If this coding was chosen directly by the user
	set userSelected(userSelected) {
		this._userSelected = userSelected;
	}

	get userSelected() {
		return this._userSelected;
	}

	// subject	S	1..1	Reference(US Core Patient Profile)	Who and/or what this is about
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// encounter		0..1	Reference(Encounter)	Healthcare event during which this observation is made
	set encounter(encounter) {
		this._encounter = new Reference(encounter);
	}

	get encounter() {
		return this._encounter;
	}

	// effective[x]	Σ	0..1		Clinically relevant time/time-period for observation
	// effectiveDateTime			dateTime
	set effectiveDateTime(effectiveDateTime) {
		this._effectiveDateTime = effectiveDateTime;
	}

	get effectiveDateTime() {
		return this._effectiveDateTime;
	}

	// effectivePeriod			Period
	set effectivePeriod(effectivePeriod) {
		this._effectivePeriod = new Period(effectivePeriod);
	}

	get effectivePeriod() {
		return this._effectivePeriod;
	}

	// issued	*	0..1	instant	Date/Time this was made available
	set issued(issued) {
		this._issued = issued;
	}

	get issued() {
		return this._issued;
	}

	// performer	*	0..*	Reference(Practitioner), Reference(Organization), Reference(Patient), Reference(RelatedPerson)	Who is responsible for the observation
	set performer(performer) {
		if (Array.isArray(performer)) {
			this._performer = performer.map((i) => new Reference(i));
		} else {
			this._performer = [new Reference(performer)];
		}
	}

	get performer() {
		return this._performer;
	}

	// value[x]	ΣI	0..1		Actual result
	// Slice: Unordered, Open, by @type
	// valueQuantity			Quantity
	set valueQuantity(valueQuantity) {
		this._valueQuantity = new Quantity(valueQuantity);
	}

	get valueQuantity() {
		return this._valueQuantity;
	}

	// valueCodeableConcept			CodeableConcept
	set valueCodeableConcept(valueCodeableConcept) {
		this._valueCodeableConcept = new CodeableConcept(valueCodeableConcept);
	}

	get valueCodeableConcept() {
		return this._valueCodeableConcept;
	}

	// valueString			string
	set valueString(valueString) {
		this._valueString = valueString;
	}

	get valueString() {
		return this._valueString;
	}

	// valueBoolean			boolean
	set valueBoolean(valueBoolean) {
		this._valueBoolean = valueBoolean;
	}

	get valueBoolean() {
		return this._valueBoolean;
	}

	// valueRange			Range
	set valueRange(valueRange) {
		this._valueRange = new Range(valueRange);
	}

	get valueRange() {
		return this._valueRange;
	}

	// valueRatio			Ratio
	set valueRatio(valueRatio) {
		this._valueRatio = new Ratio(valueRatio);
	}

	get valueRatio() {
		return this._valueRatio;
	}

	// valueSampledData			SampledData
	set valueSampledData(valueSampledData) {
		this._valueSampledData = new SampledData(valueSampledData);
	}

	get valueSampledData() {
		return this._valueSampledData;
	}

	// valueAttachment			Attachment
	set valueAttachment(valueAttachment) {
		this._valueAttachment = new Attachment(valueAttachment);
	}

	get valueAttachment() {
		return this._valueAttachment;
	}

	// valueTime			time
	set valueTime(valueTime) {
		this._valueTime = valueTime;
	}

	get valueTime() {
		return this._valueTime;
	}

	// valueDateTime			dateTime
	set valueDateTime(valueDateTime) {
		this._valueDateTime = valueDateTime;
	}

	get valueDateTime() {
		return this._valueDateTime;
	}

	// valuePeriod			Period
	set valuePeriod(valuePeriod) {
		this._valuePeriod = new Period(valuePeriod);
	}

	get valuePeriod() {
		return this._valuePeriod;
	}

	// dataAbsentReason	SI	0..1	CodeableConcept	Why the result is missing
	// Binding: Observation Value Absent Reason (extensible)
	set dataAbsentReason(dataAbsentReason) {
		this._dataAbsentReason = new CodeableConcept(dataAbsentReason);
	}

	get dataAbsentReason() {
		return this._dataAbsentReason;
	}

	// interpretation		0..1	CodeableConcept	High, low, normal, etc.
	// Binding: Observation Interpretation Codes (extensible)
	set interpretation(interpretation) {
		this._interpretation = new CodeableConcept(interpretation);
	}

	get interpretation() {
		return this._interpretation;
	}

	// comment		0..1	string	Comments about result
	set comment(comment) {
		this._comment = comment;
	}

	get comment() {
		return this._comment;
	}

	// bodySite		0..1	CodeableConcept	Observed body part
	// Binding: SNOMED CT Body Structures (example)
	set bodySite(bodySite) {
		this._bodySite = new CodeableConcept(bodySite);
	}

	get bodySite() {
		return this._bodySite;
	}

	// method		0..1	CodeableConcept	How it was done
	// Binding: Observation Methods (example)
	set method(method) {
		this._method = new CodeableConcept(method);
	}

	get method() {
		return this._method;
	}

	// specimen		0..1	Reference(Specimen)	Specimen used for this observation
	set specimen(specimen) {
		this._specimen = new Reference(specimen);
	}

	get specimen() {
		return this._specimen;
	}

	// device		0..1	Reference(Device), Reference(DeviceMetric)	(Measurement) Device
	set device(device) {
		this._device = new Reference(device);
	}

	get device() {
		return this._device;
	}

	// referenceRange	I	0..*	BackboneElement	Provides guide for interpretation
	// obs-3: Must have at least a low or a high or text
	set referenceRange(referenceRange) {
		if (Array.isArray(referenceRange)) {
			this._referenceRange = referenceRange.map((i) => new ReferenceRange(i));
		} else {
			this._referenceRange = [new ReferenceRange(referenceRange)];
		}
	}

	get referenceRange() {
		return this._referenceRange;
	}

	// related	*I	0..*	BackboneElement	Resource related to this observation
	set related(related) {
		if (Array.isArray(related)) {
			this._related = related.map((i) => new Related(i));
		} else {
			this._related = [new Related(related)];
		}
	}

	get related() {
		return this._related;
	}

	// component	*I	0..*	BackboneElement	Component results
	set component(component) {
		if (Array.isArray(component)) {
			this._component = component.map((i) => new Component(i));
		} else {
			this._component = [new Component(component)];
		}
	}

	get component() {
		return this._component;
	}

	toJSON() {
		const json = {
			id: this._id,
			meta: this._meta,
			implicitRules: this._implicitRules,
			language: this._language,
			text: this._text,
			contained: this._contained,
			extension: this._extension,
			modifierExtension: this._modifierExtension,
			identifier: this._identifier,
			status: this._status,
			category: this._category,
			code: this._code,
			coding: this._coding,
			system: this._system,
			version: this._version,
			display: this._display,
			userSelected: this._userSelected,
			subject: this._subject,
			encounter: this._encounter,
			effectiveDateTime: this._effectiveDateTime,
			effectivePeriod: this._effectivePeriod,
			issued: this._issued,
			performer: this._performer,
			valueQuantity: this._valueQuantity,
			valueCodeableConcept: this._valueCodeableConcept,
			valueString: this._valueString,
			valueBoolean: this._valueBoolean,
			valueRange: this._valueRange,
			valueRatio: this._valueRatio,
			valueSampledData: this._valueSampledData,
			valueAttachment: this._valueAttachment,
			valueTime: this._valueTime,
			valueDateTime: this._valueDateTime,
			valuePeriod: this._valuePeriod,
			dataAbsentReason: this._dataAbsentReason,
			interpretation: this._interpretation,
			comment: this._comment,
			bodySite: this._bodySite,
			method: this._method,
			specimen: this._specimen,
			device: this._device,
			referenceRange: this._referenceRange,
			related: this._related,
			component: this._component,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.ObservationResults = ObservationResults;
module.exports.ReferenceRange = ReferenceRange;
module.exports.Related = Related;
module.exports.Component = Component;
