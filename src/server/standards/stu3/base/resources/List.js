const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Code = require('../types/Code');
const CodeableConcept = require('../types/CodeableConcept');
const Reference = require('../types/Reference');
const Annotation = require('../types/Annotation');

class Entry {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// flag		0..1	CodeableConcept	Status/Workflow information about this item
	// Patient Medicine Change Types (Example)
	set flag(flag) {
		this._flag = new CodeableConcept(flag);
	}

	get flag() {
		return this._flag;
	}

	// deleted	?!I	0..1	boolean	If this item is actually marked as deleted
	set deleted(deleted) {
		this._deleted = deleted;
	}

	get deleted() {
		return this._deleted;
	}

	// date		0..1	dateTime	When item added to list
	set date(date) {
		this._date = date;
	}

	get date() {
		return this._date;
	}

	// item		1..1	Reference(Any)	Actual entry
	set item(item) {
		this._item = new Reference(item);
	}

	get item() {
		return this._item;
	}

	toJSON() {
		return {
			flag: this._flag,
			deleted: this._deleted,
			date: this._date,
			item: this._item,
		};
	}
}

class List extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'List';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier		0..*	Identifier	Business identifier
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

	// status	?!Σ	1..1	code	current | retired | entered-in-error
	// ListStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// mode	?!Σ	1..1	code	working | snapshot | changes
	// ListMode (Required)
	set mode(mode) {
		this._mode = new Code(mode);
	}

	get mode() {
		return this._mode;
	}

	// title	Σ	0..1	string	Descriptive name for the list
	set title(title) {
		this._title = title;
	}

	get title() {
		return this._title;
	}

	// code	Σ	0..1	CodeableConcept	What the purpose of this list is
	// Example Use Codes for List (Example)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// subject	Σ	0..1	Reference(Patient | Group | Device | Location)	If all resources have the same subject
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// encounter		0..1	Reference(Encounter)	Context in which list created
	set encounter(encounter) {
		this._encounter = new Reference(encounter);
	}

	get encounter() {
		return this._encounter;
	}

	// date	Σ	0..1	dateTime	When the list was prepared
	set date(date) {
		this._date = date;
	}

	get date() {
		return this._date;
	}

	// source	Σ	0..1	Reference(Practitioner | Patient | Device)	Who and/or what defined the list contents (aka Author)
	set source(source) {
		this._source = new Reference(source);
	}

	get source() {
		return this._source;
	}

	// orderedBy		0..1	CodeableConcept	What order the list has
	// List Order Codes (Preferred)
	set orderedBy(orderedBy) {
		this._orderedBy = new CodeableConcept(orderedBy);
	}

	get orderedBy() {
		return this._orderedBy;
	}

	// note		0..*	Annotation	Comments about the list
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

	// entry	I	0..*	BackboneElement	Entries in the list
	set entry(entry) {
		if (Array.isArray(entry)) {
			this._entry = entry.map((i) => new Entry(i));
		} else {
			this._entry = [new Entry(entry)];
		}
	}

	get entry() {
		return this._entry;
	}

	// emptyReason	I	0..1	CodeableConcept	Why list is empty
	// List Empty Reasons (Preferred)
	set emptyReason(emptyReason) {
		this._emptyReason = new CodeableConcept(emptyReason);
	}

	get emptyReason() {
		return this._emptyReason;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			status: this._status,
			mode: this._mode,
			title: this._title,
			code: this._code,
			subject: this._subject,
			encounter: this._encounter,
			date: this._date,
			source: this._source,
			orderedBy: this._orderedBy,
			note: this._note,
			entry: this._entry,
			emptyReason: this._emptyReason,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.List = List;
module.exports.Entry = Entry;
