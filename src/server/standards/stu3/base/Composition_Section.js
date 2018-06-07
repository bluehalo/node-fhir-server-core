const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Narrative = require('./Narrative');
const Reference = require('./Reference');

class Composition_Section extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Composition_Section';
	}

	// The label for this particular section.  This will be part of the rendered content for the document, and is often used to build a table of contents.
	get title () {
		return this._title;
	}

	set title ( new_value ) {
		this._title = new_value;
	}

	// A code identifying the kind of content contained within the section. This must be consistent with the section title.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		this._code = new CodeableConcept(new_value);
	}

	// A human-readable narrative that contains the attested content of the section, used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative.
	get text () {
		return this._text;
	}

	set text ( new_value ) {
		this._text = new Narrative(new_value);
	}

	// How the entry list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted.
	get mode () {
		return this._mode;
	}

	set mode ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field mode`);
		}
		this._mode = new_value;
	}

	// Specifies the order applied to the items in the section entries.
	get orderedBy () {
		return this._orderedBy;
	}

	set orderedBy ( new_value ) {
		this._orderedBy = new CodeableConcept(new_value);
	}

	// A reference to the actual resource from which the narrative in the section is derived.
	get entry () {
		return this._entry;
	}

	set entry ( new_value ) {
		this._entry = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason.
	get emptyReason () {
		return this._emptyReason;
	}

	set emptyReason ( new_value ) {
		this._emptyReason = new CodeableConcept(new_value);
	}

	// A nested sub-section within this section.
	get section () {
		return this._section;
	}

	set section ( new_value ) {
		this._section = Array.isArray(new_value) ? new_value.map(val => new Composition_Section(val)) : [new Composition_Section(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			title: this._title,
			code: this._code,
			text: this._text,
			mode: this._mode,
			orderedBy: this._orderedBy,
			entry: this._entry,
			emptyReason: this._emptyReason,
			section: this._section
		});
	}

}

module.exports = Composition_Section;
