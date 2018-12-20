const BackboneElement = require('./BackboneElement');

class CompositionSection extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'CompositionSection';
		Object.assign(this, opt);
	}

	// This is a CompositionSection resource
	static get __resourceType() {
		return 'CompositionSection';
	}

	// The label for this particular section.  This will be part of the rendered content for the document, and is often used to build a table of contents.
	get title() {
		return this.__title;
	}

	set title(new_value) {
		this.__title = new_value;
	}

	// A code identifying the kind of content contained within the section. This must be consistent with the section title.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	// A human-readable narrative that contains the attested content of the section, used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it \'clinically safe\' for a human to just read the narrative.
	get text() {
		return this.__text;
	}

	set text(new_value) {
		const Narrative = require('./Narrative');
		this.__text = new Narrative(new_value);
	}

	// How the entry list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted.
	get mode() {
		return this.__mode;
	}

	set mode(new_value) {
		this.__mode = new_value;
	}

	// Specifies the order applied to the items in the section entries.
	get orderedBy() {
		return this.__orderedBy;
	}

	set orderedBy(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__orderedBy = new CodeableConcept(new_value);
	}

	// A reference to the actual resource from which the narrative in the section is derived.
	get entry() {
		return this.__entry;
	}

	set entry(new_value) {
		const Reference = require('./Reference');
		this.__entry = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason.
	get emptyReason() {
		return this.__emptyReason;
	}

	set emptyReason(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__emptyReason = new CodeableConcept(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			title: this.__title,
			code: this.__code && this.__code.toJSON(),
			text: this.__text && this.__text.toJSON(),
			mode: this.__mode,
			orderedBy: this.__orderedBy && this.__orderedBy.toJSON(),
			entry: this.__entry && this.__entry.map(v => v.toJSON()),
			emptyReason: this.__emptyReason && this.__emptyReason.toJSON(),
		});
	}
}

module.exports = CompositionSection;
