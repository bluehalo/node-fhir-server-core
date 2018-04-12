const DomainResource = require('./types/DomainResource');
const Meta = require('./types/Meta');
const Code = require('./types/Code');
const Narrative = require('./types/Narrative');
const Resource = require('./types/Resource');
const Extension = require('./types/Extension');
const Identifier = require('./types/Identifier');
const CodeableConcept = require('./types/CodeableConcept');
const Reference = require('./types/Reference');
const Annotation = require('./types/Annotation');

class Reaction {
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

	// modifierExtension	?!Î£	0..*	Extension	Extensions that cannot be ignored
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

	// substance		0..1	CodeableConcept	Specific substance or pharmaceutical product considered to be responsible for event
	// Binding: Substance Code (example)
	set substance(substance) {
		this._substance = new CodeableConcept(substance);
	}

	get substance() {
		return this._substance;
	}

	// manifestation		1..*	CodeableConcept	Clinical symptoms/signs associated with the Event
	// Binding: SNOMED CT Clinical Findings (example)
	set manifestation(manifestation) {
		if (Array.isArray(manifestation)) {
			this._manifestation = manifestation.map((i) => new CodeableConcept(i));
		} else {
			this._manifestation = [new CodeableConcept(manifestation)];
		}
	}

	get manifestation() {
		return this._manifestation;
	}

	// description		0..1	string	Description of the event as a whole
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// onset		0..1	dateTime	Date(/time) when manifestations showed
	set onset(onset) {
		this._onset = onset;
	}

	get onset() {
		return this._onset;
	}

	// severity		0..1	code	mild | moderate | severe (of event as a whole)
	// Binding: AllergyIntoleranceSeverity (required)
	set severity(severity) {
		this._severity = new Code(severity);
	}

	get severity() {
		return this._severity;
	}

	// exposureRoute		0..1	CodeableConcept	How the subject was exposed to the substance
	// Binding: SNOMED CT Route Codes (example)
	set exposureRoute(exposureRoute) {
		this._exposureRoute = new CodeableConcept(exposureRoute);
	}

	get exposureRoute() {
		return this._exposureRoute;
	}

	// note		0..*	Annotation	Text about event not captured in other fields
	set note(note) {
		if (Array.isArray(note)) {
			this._note = note.map((i) => new Annotation(i));
		} else {
			this._note = [new Annotation(note)];
		}
	}

	get note() {
		return this._note;
	}

	toJSON() {
		return {
			id: this._id,
			extension: this._extension,
			modifierExtension: this._modifierExtension,
			substance: this._substance,
			manifestation: this._manifestation,
			description: this._description,
			onset: this._onset,
			severity: this._severity,
			exposureRoute: this._exposureRoute,
			note: this._note,
		};
	}
}

class AllergyIntolerance extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'AllergyIntolerance';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// id	Î£	0..1	id	Logical id of this artifact
	set id(id) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

	// meta	Î£	0..1	Meta	Metadata about the resource
	set meta(meta) {
		this._meta = new Meta(meta);
	}

	get meta() {
		return this._meta;
	}

	// implicitRules	?!Î£	0..1	uri	A set of rules under which this content was created
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

	// identifier	Î£	0..*	Identifier	External ids for this item
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

	// clinicalStatus	?!ΣI	0..1	code	active | inactive | resolved
	// AllergyIntoleranceClinicalStatus (Required)
	set clinicalStatus(clinicalStatus) {
		this._clinicalStatus = new Code(clinicalStatus);
	}

	get clinicalStatus() {
		return this._clinicalStatus;
	}

	// verificationStatus	?!ΣI	1..1	code	unconfirmed | confirmed | refuted | entered-in-error
	// AllergyIntoleranceVerificationStatus (Required)
	set verificationStatus(verificationStatus) {
		this._verificationStatus = new Code(verificationStatus);
	}

	get verificationStatus() {
		return this._verificationStatus;
	}

	// type	Î£	0..1	code	allergy | intolerance - Underlying mechanism (if known)
	// Binding: AllergyIntoleranceType (required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// category	Î£	0..*	code	food | medication | environment | biologic
	// Binding: AllergyIntoleranceCategory (required)
	set category(category) {
		if (Array.isArray(category)) {
			this._category = category.map((i) => new Code(i));
		} else {
			this._category = [new Code(category)];
		}
	}

	get category() {
		return this._category;
	}

	// criticality	Î£	0..1	code	low | high | unable-to-assess
	// Binding: AllergyIntoleranceCriticality (required)
	set criticality(criticality) {
		this._criticality = new Code(criticality);
	}

	get criticality() {
		return this._criticality;
	}

	// code	SÎ£	1..1	CodeableConcept	Code that identifies the allergy or intolerance
	// Binding: US Core Substance-Reactant for Intolerance and Negation Codes (extensible)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// patient	SÎ£	1..1	Reference(US Core Patient Profile)	Who the sensitivity is for
	set patient(patient) {
		this._patient = new Reference(patient);
	}

	get patient() {
		return this._patient;
	}

	// onset[x]		0..1	dateTime, Age, Period, Range, string	When allergy or intolerance was identified
	// assertedDate		0..1	dateTime	Date record was believed accurate
	set assertedDate(assertedDate) {
		this._assertedDate = assertedDate;
	}

	get assertedDate() {
		return this._assertedDate;
	}

	// recorder		0..1	Reference(Practitioner), Reference(Patient)	Who recorded the sensitivity
	set recorder(recorder) {
		this._recorder = new Reference(recorder);
	}

	get recorder() {
		return this._recorder;
	}

	// asserter	Î£	0..1	Reference(Patient), Reference(RelatedPerson), Reference(Practitioner)	Source of the information about the allergy
	set asserter(asserter) {
		this._asserter = new Reference(asserter);
	}

	get asserter() {
		return this._asserter;
	}

	// lastOccurrence		0..1	dateTime	Date(/time) of last known occurrence of a reaction
	set lastOccurrence(lastOccurrence) {
		this._lastOccurrence = lastOccurrence;
	}

	get lastOccurrence() {
		return this._lastOccurrence;
	}

	// note		0..*	Annotation	Additional text not captured in other fields
	set note(note) {
		if (Array.isArray(note)) {
			this._note = note.map((i) => new Annotation(i));
		} else {
			this._note = [new Annotation(note)];
		}
	}

	get note() {
		return this._note;
	}

	// reaction	I	0..*	BackboneElement	Adverse Reaction Events linked to exposure to substance
	set reaction(reaction) {
		if (Array.isArray(reaction)) {
			this._reaction = reaction.map((i) => new Reaction(i));
		} else {
			this._reaction = [new Reaction(reaction)];
		}
	}

	get reaction() {
		return this._reaction;
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
			clinicalStatus: this._clinicalStatus,
			verificationStatus: this._verificationStatus,
			type: this._type,
			category: this._category,
			criticality: this._criticality,
			code: this._code,
			patient: this._patient,
			assertedDate: this._assertedDate,
			recorder: this._recorder,
			asserter: this._asserter,
			lastOccurrence: this._lastOccurrence,
			note: this._note,
			reaction: this._reaction,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.AllergyIntolerance = AllergyIntolerance;
module.exports.Reaction = Reaction;
