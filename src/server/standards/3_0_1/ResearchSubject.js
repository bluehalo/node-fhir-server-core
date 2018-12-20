const DomainResource = require('./DomainResource');

class ResearchSubject extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ResearchSubject';
		Object.assign(this, opt);
	}

	// This is a ResearchSubject resource
	static get __resourceType() {
		return 'ResearchSubject';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__ResearchSubject = new_value;
	}

	// Identifiers assigned to this research study by the sponsor or other systems.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// The current state of the subject.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// The dates the subject began and ended their participation in the study.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
	}

	// Reference to the study the subject is participating in.
	get study() {
		return this.__study;
	}

	set study(new_value) {
		const Reference = require('./Reference');
		this.__study = new Reference(new_value);
	}

	// The record of the person or animal who is involved in the study.
	get individual() {
		return this.__individual;
	}

	set individual(new_value) {
		const Reference = require('./Reference');
		this.__individual = new Reference(new_value);
	}

	// The name of the arm in the study the subject is expected to follow as part of this study.
	get assignedArm() {
		return this.__assignedArm;
	}

	set assignedArm(new_value) {
		this.__assignedArm = new_value;
	}

	// The name of the arm in the study the subject actually followed as part of this study.
	get actualArm() {
		return this.__actualArm;
	}

	set actualArm(new_value) {
		this.__actualArm = new_value;
	}

	// A record of the patient\'s informed agreement to participate in the study.
	get consent() {
		return this.__consent;
	}

	set consent(new_value) {
		const Reference = require('./Reference');
		this.__consent = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.toJSON(),
			status: this.__status,
			period: this.__period && this.__period.toJSON(),
			study: this.__study && this.__study.toJSON(),
			individual: this.__individual && this.__individual.toJSON(),
			assignedArm: this.__assignedArm,
			actualArm: this.__actualArm,
			consent: this.__consent && this.__consent.toJSON(),
		});
	}
}

module.exports = ResearchSubject;
