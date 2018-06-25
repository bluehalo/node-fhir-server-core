const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const Composition_Attester = require('./Composition_Attester');
const Composition_RelatesTo = require('./Composition_RelatesTo');
const Composition_Event = require('./Composition_Event');
const Composition_Section = require('./Composition_Section');

class Composition extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Composition';
	}

	// This is a Composition resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['Composition'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Logical identifier for the composition, assigned when created. This identifier stays constant as the composition is changed over time.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	// The workflow/clinical status of this composition. The status is a marker for the clinical standing of the document.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['preliminary', 'final', 'amended', 'entered-in-error'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// Specifies the particular kind of composition (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the composition.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new CodeableConcept(new_value);
	}

	// A categorization for the type of the composition - helps for indexing and searching. This may be implied by or derived from the code specified in the Composition Type.
	get class () {
		return this._class;
	}

	set class ( new_value ) {
		this._class = new CodeableConcept(new_value);
	}

	// Who or what the composition is about. The composition can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of livestock, or a set of patients that share a common exposure).
	get subject () {
		return this._subject;
	}

	set subject ( new_value ) {
		this._subject = new Reference(new_value);
	}

	// Describes the clinical encounter or type of care this documentation is associated with.
	get encounter () {
		return this._encounter;
	}

	set encounter ( new_value ) {
		this._encounter = new Reference(new_value);
	}

	// The composition editing time, when the composition was last logically changed by the author.
	get date () {
		return this._date;
	}

	set date ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this._date = new_value;
	}

	// Identifies who is responsible for the information in the composition, not necessarily who typed it in.
	get author () {
		return this._author;
	}

	set author ( new_value ) {
		this._author = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Official human-readable label for the composition.
	get title () {
		return this._title;
	}

	set title ( new_value ) {
		this._title = new_value;
	}

	// The code specifying the level of confidentiality of the Composition.
	get confidentiality () {
		return this._confidentiality;
	}

	set confidentiality ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field confidentiality`);
		}
		this._confidentiality = new_value;
	}

	// A participant who has attested to the accuracy of the composition/document.
	get attester () {
		return this._attester;
	}

	set attester ( new_value ) {
		this._attester = Array.isArray(new_value) ? new_value.map(val => new Composition_Attester(val)) : [new Composition_Attester(new_value)];
	}

	// Identifies the organization or group who is responsible for ongoing maintenance of and access to the composition/document information.
	get custodian () {
		return this._custodian;
	}

	set custodian ( new_value ) {
		this._custodian = new Reference(new_value);
	}

	// Relationships that this composition has with other compositions or documents that already exist.
	get relatesTo () {
		return this._relatesTo;
	}

	set relatesTo ( new_value ) {
		this._relatesTo = Array.isArray(new_value) ? new_value.map(val => new Composition_RelatesTo(val)) : [new Composition_RelatesTo(new_value)];
	}

	// The clinical service, such as a colonoscopy or an appendectomy, being documented.
	get event () {
		return this._event;
	}

	set event ( new_value ) {
		this._event = Array.isArray(new_value) ? new_value.map(val => new Composition_Event(val)) : [new Composition_Event(new_value)];
	}

	// The root of the sections that make up the composition.
	get section () {
		return this._section;
	}

	set section ( new_value ) {
		this._section = Array.isArray(new_value) ? new_value.map(val => new Composition_Section(val)) : [new Composition_Section(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier,
			status: this._status,
			type: this._type,
			class: this._class,
			subject: this._subject,
			encounter: this._encounter,
			date: this._date,
			author: this._author,
			title: this._title,
			confidentiality: this._confidentiality,
			attester: this._attester,
			custodian: this._custodian,
			relatesTo: this._relatesTo,
			event: this._event,
			section: this._section
		});
	}

}

module.exports = Composition;
