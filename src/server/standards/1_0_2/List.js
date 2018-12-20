const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class List extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'List';
		Object.assign(this, opt);
	}

	// This is a List resource
	static get __resourceType() {
		return 'List';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__List = new_value;
	}

	// Identifier for the List assigned for business purposes outside the context of FHIR.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// A label for the list assigned by the author.
	get title() {
		return this.__title;
	}

	set title(new_value) {
		this.__title = new_value;
	}

	// This code defines the purpose of the list - why it was created.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	// The common subject (or patient) of the resources that are in the list, if there is one.
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// The entity responsible for deciding what the contents of the list were. Where the list was created by a human, this is the same as the author of the list.
	get source() {
		return this.__source;
	}

	set source(new_value) {
		const Reference = require('./Reference');
		this.__source = new Reference(new_value);
	}

	// The encounter that is the context in which this list was created.
	get encounter() {
		return this.__encounter;
	}

	set encounter(new_value) {
		const Reference = require('./Reference');
		this.__encounter = new Reference(new_value);
	}

	// Indicates the current state of this list.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// The date that the list was prepared.
	get date() {
		return this.__date;
	}

	set date(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this.__date = new_value;
	}

	// What order applies to the items in the list.
	get orderedBy() {
		return this.__orderedBy;
	}

	set orderedBy(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__orderedBy = new CodeableConcept(new_value);
	}

	// How this list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted.
	get mode() {
		return this.__mode;
	}

	set mode(new_value) {
		this.__mode = new_value;
	}

	// Comments that apply to the overall list.
	get note() {
		return this.__note;
	}

	set note(new_value) {
		this.__note = new_value;
	}

	// Entries in this list.
	get entry() {
		return this.__entry;
	}

	set entry(new_value) {
		const ListEntry = require('./ListEntry');
		this.__entry = Array.isArray(new_value) ? new_value.map(val => new ListEntry(val)) : [new ListEntry(new_value)];
	}

	// If the list is empty, why the list is empty.
	get emptyReason() {
		return this.__emptyReason;
	}

	set emptyReason(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__emptyReason = new CodeableConcept(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			title: this.__title,
			code: this.__code && this.__code.toJSON(),
			subject: this.__subject && this.__subject.toJSON(),
			source: this.__source && this.__source.toJSON(),
			encounter: this.__encounter && this.__encounter.toJSON(),
			status: this.__status,
			date: this.__date,
			orderedBy: this.__orderedBy && this.__orderedBy.toJSON(),
			mode: this.__mode,
			note: this.__note,
			entry: this.__entry && this.__entry.map(v => v.toJSON()),
			emptyReason: this.__emptyReason && this.__emptyReason.toJSON(),
		});
	}
}

module.exports = List;
