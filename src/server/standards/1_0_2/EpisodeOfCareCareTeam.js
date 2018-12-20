const BackboneElement = require('./BackboneElement');

class EpisodeOfCareCareTeam extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'EpisodeOfCareCareTeam';
		Object.assign(this, opt);
	}

	// This is a EpisodeOfCareCareTeam resource
	static get __resourceType() {
		return 'EpisodeOfCareCareTeam';
	}

	// The role this team member is taking within this episode of care.
	get role() {
		return this.__role;
	}

	set role(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__role = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// The period of time this practitioner is performing some role within the episode of care.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
	}

	// The practitioner (or Organization) within the team.
	get member() {
		return this.__member;
	}

	set member(new_value) {
		const Reference = require('./Reference');
		this.__member = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			role: this.__role && this.__role.map(v => v.toJSON()),
			period: this.__period && this.__period.toJSON(),
			member: this.__member && this.__member.toJSON(),
		});
	}
}

module.exports = EpisodeOfCareCareTeam;
