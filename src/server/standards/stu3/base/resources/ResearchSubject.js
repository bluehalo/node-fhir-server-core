const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Code = require('../types/Code');
const Period = require('../types/Period');
const Reference = require('../types/Reference');

class ResearchSubject extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'ResearchSubject';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..1	Identifier	Business Identifier for research subject
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// status	?!Σ	1..1	code	candidate | enrolled | active | suspended | withdrawn | completed
	// ResearchSubjectStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// period	Σ	0..1	Period	Start and end of participation
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	// study	Σ	1..1	Reference(ResearchStudy)	Study subject is part of
	set study(study) {
		this._study = new Reference(study);
	}

	get study() {
		return this._study;
	}

	// individual	Σ	1..1	Reference(Patient)	Who is part of study
	set individual(individual) {
		this._individual = new Reference(individual);
	}

	get individual() {
		return this._individual;
	}

	// assignedArm		0..1	string	What path should be followed
	set assignedArm(assignedArm) {
		this._assignedArm = assignedArm;
	}

	get assignedArm() {
		return this._assignedArm;
	}

	// actualArm		0..1	string	What path was followed
	set actualArm(actualArm) {
		this._actualArm = actualArm;
	}

	get actualArm() {
		return this._actualArm;
	}

	// consent		0..1	Reference(Consent)	Agreement to participate in study
	set consent(consent) {
		this._consent = new Reference(consent);
	}

	get consent() {
		return this._consent;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			status: this._status,
			period: this._period,
			study: this._study,
			individual: this._individual,
			assignedArm: this._assignedArm,
			actualArm: this._actualArm,
			consent: this._consent,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.ResearchSubject = ResearchSubject;
