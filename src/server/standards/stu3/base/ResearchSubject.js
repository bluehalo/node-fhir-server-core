const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Period = require('./Period');
const Reference = require('./Reference');

class ResearchSubject extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ResearchSubject';
	}

	// This is a ResearchSubject resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['ResearchSubject'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Identifiers assigned to this research study by the sponsor or other systems.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	// The current state of the subject.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['candidate', 'enrolled', 'active', 'suspended', 'withdrawn', 'completed'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// The dates the subject began and ended their participation in the study.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		this._period = new Period(new_value);
	}

	// Reference to the study the subject is participating in.
	get study () {
		return this._study;
	}

	set study ( new_value ) {
		this._study = new Reference(new_value);
	}

	// The record of the person or animal who is involved in the study.
	get individual () {
		return this._individual;
	}

	set individual ( new_value ) {
		this._individual = new Reference(new_value);
	}

	// The name of the arm in the study the subject is expected to follow as part of this study.
	get assignedArm () {
		return this._assignedArm;
	}

	set assignedArm ( new_value ) {
		this._assignedArm = new_value;
	}

	// The name of the arm in the study the subject actually followed as part of this study.
	get actualArm () {
		return this._actualArm;
	}

	set actualArm ( new_value ) {
		this._actualArm = new_value;
	}

	// A record of the patient's informed agreement to participate in the study.
	get consent () {
		return this._consent;
	}

	set consent ( new_value ) {
		this._consent = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier,
			status: this._status,
			period: this._period,
			study: this._study,
			individual: this._individual,
			assignedArm: this._assignedArm,
			actualArm: this._actualArm,
			consent: this._consent
		});
	}

}

module.exports = ResearchSubject;
