const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Code = require('./types/Code');
const CodeableConcept = require('./types/CodeableConcept');
const Reference = require('./types/Reference');
const Period = require('./types/Period');

class Flag extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Flag';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	Identifier	Business identifier
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

	// status	?!Σ	1..1	code	active | inactive | entered-in-error
	// FlagStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// category	Σ	0..1	CodeableConcept	Clinical, administrative, etc.
	// Flag Category (Example)
	set category(category) {
		this._category = new CodeableConcept(category);
	}

	get category() {
		return this._category;
	}

	// code	Σ	1..1	CodeableConcept	Coded or textual message to display to user
	// Flag Code (Example)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// subject	Σ	1..1	Reference(Patient | Location | Group | Organization | Practitioner | PlanDefinition | Medication | Procedure)	Who/What is flag about?
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// period	Σ	0..1	Period	Time period when flag is active
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	// encounter	Σ	0..1	Reference(Encounter)	Alert relevant during encounter
	set encounter(encounter) {
		this._encounter = new Reference(encounter);
	}

	get encounter() {
		return this._encounter;
	}

	// author	Σ	0..1	Reference(Device | Organization | Patient | Practitioner)	Flag creator
	set author(author) {
		this._author = new Reference(author);
	}

	get author() {
		return this._author;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			status: this._status,
			category: this._category,
			code: this._code,
			subject: this._subject,
			period: this._period,
			encounter: this._encounter,
			author: this._author,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Flag = Flag;
