const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Code = require('./types/Code');
const CodeableConcept = require('./types/CodeableConcept');
const Reference = require('./types/Reference');
const Period = require('./types/Period');
const Narrative = require('./types/Narrative');

class Section {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// title		0..1	string	Label for section (e.g. for ToC)
	set title(title) {
		this._title = title;
	}

	get title() {
		return this._title;
	}

	// code		0..1	CodeableConcept	Classification of section (recommended)
	// Document Section Codes (Example)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// text	I	0..1	Narrative	Text summary of the section, for human interpretation
	set text(text) {
		this._text = new Narrative(text);
	}

	get text() {
		return this._text;
	}

	// mode	?!Σ	0..1	code	working | snapshot | changes
	// ListMode (Required)
	set mode(mode) {
		this._mode = new Code(mode);
	}

	get mode() {
		return this._mode;
	}

	// orderedBy		0..1	CodeableConcept	Order of section entries
	// List Order Codes (Preferred)
	set orderedBy(orderedBy) {
		this._orderedBy = new CodeableConcept(orderedBy);
	}

	get orderedBy() {
		return this._orderedBy;
	}

	// entry	I	0..*	Reference(Any)	A reference to data that supports this section
	set entry(entry) {
		if (Array.isArray(entry)) {
			this._entry = entry.map((i) => new Reference(i));
		} else {
			this._entry = [new Reference(entry)];
		}
	}

	get entry() {
		return this._entry;
	}

	// emptyReason	I	0..1	CodeableConcept	Why the section is empty
	// List Empty Reasons (Preferred)
	set emptyReason(emptyReason) {
		this._emptyReason = new CodeableConcept(emptyReason);
	}

	get emptyReason() {
		return this._emptyReason;
	}

	// section	I	0..*	see section	Nested Section
	set section(section) {
		this._section = [].concat(section);
	}

	get section() {
		return this._section;
	}

	toJSON() {
		return {
			title: this._title,
			code: this._code,
			text: this._text,
			mode: this._mode,
			orderedBy: this._orderedBy,
			entry: this._entry,
			emptyReason: this._emptyReason,
			section: this._section,
		};
	}
}

class Event {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// code	Σ	0..*	CodeableConcept	Code(s) that apply to the event being documented
	// v3 Code System ActCode (Example)
	set code(code) {
		if (Array.isArray(code)) {
			this._code = code.map((i) => new CodeableConcept(i));
		} else {
			this._code = [new CodeableConcept(code)];
		}
	}

	get code() {
		return this._code;
	}

	// period	Σ	0..1	Period	The period covered by the documentation
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	// detail	Σ	0..*	Reference(Any)	The event(s) being documented
	set detail(detail) {
		if (Array.isArray(detail)) {
			this._detail = detail.map((i) => new Reference(i));
		} else {
			this._detail = [new Reference(detail)];
		}
	}

	get detail() {
		return this._detail;
	}

	toJSON() {
		return {
			code: this._code,
			period: this._period,
			detail: this._detail,
		};
	}
}

class RelatesTo {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// code	Σ	1..1	code	replaces | transforms | signs | appends
	// DocumentRelationshipType (Required)
	set code(code) {
		this._code = new Code(code);
	}

	get code() {
		return this._code;
	}

	// target[x]	Σ	1..1		Target of the relationship
	// targetIdentifier			Identifier
	set targetIdentifier(targetIdentifier) {
		this._targetIdentifier = new Identifier(targetIdentifier);
	}

	get targetIdentifier() {
		return this._targetIdentifier;
	}

	// targetReference			Reference
	set targetReference(targetReference) {
		this._targetReference = new Reference(targetReference);
	}

	get targetReference() {
		return this._targetReference;
	}

	toJSON() {
		return {
			code: this._code,
			targetIdentifier: this._targetIdentifier,
			targetReference: this._targetReference,
		};
	}
}

class Attester {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// mode	Σ	1..*	code	personal | professional | legal | official
	// CompositionAttestationMode (Required)
	set mode(mode) {
		if (Array.isArray(mode)) {
			this._mode = mode.map((i) => new Code(i));
		} else {
			this._mode = [new Code(mode)];
		}
	}

	get mode() {
		return this._mode;
	}

	// time	Σ	0..1	dateTime	When the composition was attested
	set time(time) {
		this._time = time;
	}

	get time() {
		return this._time;
	}

	// party	Σ	0..1	Reference(Patient | Practitioner | Organization)	Who attested the composition
	set party(party) {
		this._party = new Reference(party);
	}

	get party() {
		return this._party;
	}

	toJSON() {
		return {
			mode: this._mode,
			time: this._time,
			party: this._party,
		};
	}
}

class Composition extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Composition';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..1	Identifier	Logical identifier of composition (version-independent)
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// status	?!Σ	1..1	code	preliminary | final | amended | entered-in-error
	// CompositionStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// type	Σ	1..1	CodeableConcept	Kind of composition (LOINC if possible)
	// FHIR Document Type Codes (Preferred)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// class	Σ	0..1	CodeableConcept	Categorization of Composition
	// FHIR Document Class Codes (Example)
	set compositionClass(compositionClass) {
		this._compositionClass = new CodeableConcept(compositionClass);
	}

	get compositionClass() {
		return this._compositionClass;
	}

	// subject	Σ	1..1	Reference(Any)	Who and/or what the composition is about
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// encounter	Σ	0..1	Reference(Encounter)	Context of the Composition
	set encounter(encounter) {
		this._encounter = new Reference(encounter);
	}

	get encounter() {
		return this._encounter;
	}

	// date	Σ	1..1	dateTime	Composition editing time
	set date(date) {
		this._date = date;
	}

	get date() {
		return this._date;
	}

	// author	Σ	1..*	Reference(Practitioner | Device | Patient | RelatedPerson)	Who and/or what authored the composition
	set author(author) {
		if (Array.isArray(author)) {
			this._author = author.map((i) => new Reference(i));
		} else {
			this._author = [new Reference(author)];
		}
	}

	get author() {
		return this._author;
	}

	// title	Σ	1..1	string	Human Readable name/title
	set title(title) {
		this._title = title;
	}

	get title() {
		return this._title;
	}

	// confidentiality	?!Σ	0..1	code	As defined by affinity domain
	// ConfidentialityClassification (Required)
	set confidentiality(confidentiality) {
		this._confidentiality = new Code(confidentiality);
	}

	get confidentiality() {
		return this._confidentiality;
	}

	// custodian	Σ	0..1	Reference(Organization)	Organization which maintains the composition
	set custodian(custodian) {
		this._custodian = new Reference(custodian);
	}

	get custodian() {
		return this._custodian;
	}

	// attester	Σ	0..*	BackboneElement	Attests to accuracy of composition
	set attester(attester) {
		if (Array.isArray(attester)) {
			this._attester = attester.map((i) => new Attester(i));
		} else {
			this._attester = [new Attester(attester)];
		}
	}

	get attester() {
		return this._attester;
	}

	// relatesTo	Σ	0..*	BackboneElement	Relationships to other compositions/documents
	set relatesTo(relatesTo) {
		if (Array.isArray(relatesTo)) {
			this._relatesTo = relatesTo.map((i) => new RelatesTo(i));
		} else {
			this._relatesTo = [new RelatesTo(relatesTo)];
		}
	}

	get relatesTo() {
		return this._relatesTo;
	}

	// event	Σ	0..*	BackboneElement	The clinical service(s) being documented
	set event(event) {
		if (Array.isArray(event)) {
			this._event = event.map((i) => new Event(i));
		} else {
			this._event = [new Event(event)];
		}
	}

	get event() {
		return this._event;
	}

	// section	I	0..*	BackboneElement	Composition is broken into sections
	// + A section must at least one of text, entries, or sub-sections
	// + A section can only have an emptyReason if it is empty
	set section(section) {
		if (Array.isArray(section)) {
			this._section = section.map((i) => new Section(i));
		} else {
			this._section = [new Section(section)];
		}
	}

	get section() {
		return this._section;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			status: this._status,
			type: this._type,
			compositionClass: this._compositionClass,
			subject: this._subject,
			encounter: this._encounter,
			date: this._date,
			author: this._author,
			title: this._title,
			confidentiality: this._confidentiality,
			custodian: this._custodian,
			attester: this._attester,
			relatesTo: this._relatesTo,
			event: this._event,
			section: this._section,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Composition = Composition;
module.exports.Attester = Attester;
module.exports.RelatesTo = RelatesTo;
module.exports.Event = Event;
module.exports.Section = Section;
