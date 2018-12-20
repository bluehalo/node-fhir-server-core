const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class Composition extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Composition';
		Object.assign(this, opt);
	}

	// This is a Composition resource
	static get __resourceType() {
		return 'Composition';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Composition = new_value;
	}

	// Logical identifier for the composition, assigned when created. This identifier stays constant as the composition is changed over time.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// The workflow/clinical status of this composition. The status is a marker for the clinical standing of the document.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// Specifies the particular kind of composition (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the composition.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// A categorization for the type of the composition - helps for indexing and searching. This may be implied by or derived from the code specified in the Composition Type.
	get class() {
		return this.__class;
	}

	set class(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__class = new CodeableConcept(new_value);
	}

	// Who or what the composition is about. The composition can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of livestock, or a set of patients that share a common exposure).
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// Describes the clinical encounter or type of care this documentation is associated with.
	get encounter() {
		return this.__encounter;
	}

	set encounter(new_value) {
		const Reference = require('./Reference');
		this.__encounter = new Reference(new_value);
	}

	// The composition editing time, when the composition was last logically changed by the author.
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

	// Identifies who is responsible for the information in the composition, not necessarily who typed it in.
	get author() {
		return this.__author;
	}

	set author(new_value) {
		const Reference = require('./Reference');
		this.__author = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Official human-readable label for the composition.
	get title() {
		return this.__title;
	}

	set title(new_value) {
		this.__title = new_value;
	}

	// The code specifying the level of confidentiality of the Composition.
	get confidentiality() {
		return this.__confidentiality;
	}

	set confidentiality(new_value) {
		this.__confidentiality = new_value;
	}

	// A participant who has attested to the accuracy of the composition/document.
	get attester() {
		return this.__attester;
	}

	set attester(new_value) {
		const CompositionAttester = require('./CompositionAttester');
		this.__attester = Array.isArray(new_value)
			? new_value.map(val => new CompositionAttester(val))
			: [new CompositionAttester(new_value)];
	}

	// Identifies the organization or group who is responsible for ongoing maintenance of and access to the composition/document information.
	get custodian() {
		return this.__custodian;
	}

	set custodian(new_value) {
		const Reference = require('./Reference');
		this.__custodian = new Reference(new_value);
	}

	// Relationships that this composition has with other compositions or documents that already exist.
	get relatesTo() {
		return this.__relatesTo;
	}

	set relatesTo(new_value) {
		const CompositionRelatesTo = require('./CompositionRelatesTo');
		this.__relatesTo = Array.isArray(new_value)
			? new_value.map(val => new CompositionRelatesTo(val))
			: [new CompositionRelatesTo(new_value)];
	}

	// The clinical service, such as a colonoscopy or an appendectomy, being documented.
	get event() {
		return this.__event;
	}

	set event(new_value) {
		const CompositionEvent = require('./CompositionEvent');
		this.__event = Array.isArray(new_value)
			? new_value.map(val => new CompositionEvent(val))
			: [new CompositionEvent(new_value)];
	}

	// The root of the sections that make up the composition.
	get section() {
		return this.__section;
	}

	set section(new_value) {
		const CompositionSection = require('./CompositionSection');
		this.__section = Array.isArray(new_value)
			? new_value.map(val => new CompositionSection(val))
			: [new CompositionSection(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.toJSON(),
			status: this.__status,
			type: this.__type && this.__type.toJSON(),
			class: this.__class && this.__class.toJSON(),
			subject: this.__subject && this.__subject.toJSON(),
			encounter: this.__encounter && this.__encounter.toJSON(),
			date: this.__date,
			author: this.__author && this.__author.map(v => v.toJSON()),
			title: this.__title,
			confidentiality: this.__confidentiality,
			attester: this.__attester && this.__attester.map(v => v.toJSON()),
			custodian: this.__custodian && this.__custodian.toJSON(),
			relatesTo: this.__relatesTo && this.__relatesTo.map(v => v.toJSON()),
			event: this.__event && this.__event.map(v => v.toJSON()),
			section: this.__section && this.__section.map(v => v.toJSON()),
		});
	}
}

module.exports = Composition;
