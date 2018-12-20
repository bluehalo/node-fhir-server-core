const BackboneElement = require('./BackboneElement');

class CareTeamParticipant extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'CareTeamParticipant';
		Object.assign(this, opt);
	}

	// This is a CareTeamParticipant resource
	static get __resourceType() {
		return 'CareTeamParticipant';
	}

	// Indicates specific responsibility of an individual within the care team, such as \'Primary care physician\', \'Trained social worker counselor\', \'Caregiver\', etc.
	get role() {
		return this.__role;
	}

	set role(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__role = new CodeableConcept(new_value);
	}

	// The specific person or organization who is participating/expected to participate in the care team.
	get member() {
		return this.__member;
	}

	set member(new_value) {
		const Reference = require('./Reference');
		this.__member = new Reference(new_value);
	}

	// The organization of the practitioner.
	get onBehalfOf() {
		return this.__onBehalfOf;
	}

	set onBehalfOf(new_value) {
		const Reference = require('./Reference');
		this.__onBehalfOf = new Reference(new_value);
	}

	// Indicates when the specific member or organization did (or is intended to) come into effect and end.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			role: this.__role && this.__role.toJSON(),
			member: this.__member && this.__member.toJSON(),
			onBehalfOf: this.__onBehalfOf && this.__onBehalfOf.toJSON(),
			period: this.__period && this.__period.toJSON(),
		});
	}
}

module.exports = CareTeamParticipant;
