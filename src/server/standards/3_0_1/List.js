const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const Annotation = require('./Annotation');
const List_Entry = require('./List_Entry');

class List extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'List';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'List';
	}

	// This is a List resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['List'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Identifier for the List assigned for business purposes outside the context of FHIR.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// Indicates the current state of this list.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['current', 'retired', 'entered-in-error'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// How this list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted.
	get mode () {
		return this._mode;
	}

	set mode ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['working', 'snapshot', 'changes'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field mode`);
		}
		this._mode = new_value;
	}

	// A label for the list assigned by the author.
	get title () {
		return this._title;
	}

	set title ( new_value ) {
		this._title = new_value;
	}

	// This code defines the purpose of the list - why it was created.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		this._code = new CodeableConcept(new_value);
	}

	// The common subject (or patient) of the resources that are in the list, if there is one.
	get subject () {
		return this._subject;
	}

	set subject ( new_value ) {
		this._subject = new Reference(new_value);
	}

	// The encounter that is the context in which this list was created.
	get encounter () {
		return this._encounter;
	}

	set encounter ( new_value ) {
		this._encounter = new Reference(new_value);
	}

	// The date that the list was prepared.
	get date () {
		return this._date;
	}

	set date ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this._date = new_value;
	}

	// The entity responsible for deciding what the contents of the list were. Where the list was created by a human, this is the same as the author of the list.
	get source () {
		return this._source;
	}

	set source ( new_value ) {
		this._source = new Reference(new_value);
	}

	// What order applies to the items in the list.
	get orderedBy () {
		return this._orderedBy;
	}

	set orderedBy ( new_value ) {
		this._orderedBy = new CodeableConcept(new_value);
	}

	// Comments that apply to the overall list.
	get note () {
		return this._note;
	}

	set note ( new_value ) {
		this._note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	// Entries in this list.
	get entry () {
		return this._entry;
	}

	set entry ( new_value ) {
		this._entry = Array.isArray(new_value) ? new_value.map(val => new List_Entry(val)) : [new List_Entry(new_value)];
	}

	// If the list is empty, why the list is empty.
	get emptyReason () {
		return this._emptyReason;
	}

	set emptyReason ( new_value ) {
		this._emptyReason = new CodeableConcept(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier && this._identifier.map(v => v.toJSON()),
			status: this._status,
			mode: this._mode,
			title: this._title,
			code: this._code && this._code.toJSON(),
			subject: this._subject && this._subject.toJSON(),
			encounter: this._encounter && this._encounter.toJSON(),
			date: this._date,
			source: this._source && this._source.toJSON(),
			orderedBy: this._orderedBy && this._orderedBy.toJSON(),
			note: this._note && this._note.map(v => v.toJSON()),
			entry: this._entry && this._entry.map(v => v.toJSON()),
			emptyReason: this._emptyReason && this._emptyReason.toJSON()
		});
	}

}

module.exports = List;
