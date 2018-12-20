const DomainResource = require('./DomainResource');

class EpisodeOfCare extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'EpisodeOfCare';
		Object.assign(this, opt);
	}

	// This is a EpisodeOfCare resource
	static get __resourceType() {
		return 'EpisodeOfCare';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__EpisodeOfCare = new_value;
	}

	// Identifier(s) by which this EpisodeOfCare is known.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// planned | waitlist | active | onhold | finished | cancelled.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
	get statusHistory() {
		return this.__statusHistory;
	}

	set statusHistory(new_value) {
		const EpisodeOfCareStatusHistory = require('./EpisodeOfCareStatusHistory');
		this.__statusHistory = Array.isArray(new_value)
			? new_value.map(val => new EpisodeOfCareStatusHistory(val))
			: [new EpisodeOfCareStatusHistory(new_value)];
	}

	// A classification of the type of encounter; e.g. specialist referral, disease management, type of funded care.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// A list of conditions/problems/diagnoses that this episode of care is intended to be providing care for.
	get condition() {
		return this.__condition;
	}

	set condition(new_value) {
		const Reference = require('./Reference');
		this.__condition = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The patient that this EpisodeOfCare applies to.
	get patient() {
		return this.__patient;
	}

	set patient(new_value) {
		const Reference = require('./Reference');
		this.__patient = new Reference(new_value);
	}

	// The organization that has assumed the specific responsibilities for the specified duration.
	get managingOrganization() {
		return this.__managingOrganization;
	}

	set managingOrganization(new_value) {
		const Reference = require('./Reference');
		this.__managingOrganization = new Reference(new_value);
	}

	// The interval during which the managing organization assumes the defined responsibility.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
	}

	// Referral Request(s) that are fulfilled by this EpisodeOfCare, incoming referrals.
	get referralRequest() {
		return this.__referralRequest;
	}

	set referralRequest(new_value) {
		const Reference = require('./Reference');
		this.__referralRequest = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// The practitioner that is the care manager/care co-ordinator for this patient.
	get careManager() {
		return this.__careManager;
	}

	set careManager(new_value) {
		const Reference = require('./Reference');
		this.__careManager = new Reference(new_value);
	}

	// The list of practitioners that may be facilitating this episode of care for specific purposes.
	get careTeam() {
		return this.__careTeam;
	}

	set careTeam(new_value) {
		const EpisodeOfCareCareTeam = require('./EpisodeOfCareCareTeam');
		this.__careTeam = Array.isArray(new_value)
			? new_value.map(val => new EpisodeOfCareCareTeam(val))
			: [new EpisodeOfCareCareTeam(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			status: this.__status,
			statusHistory: this.__statusHistory && this.__statusHistory.map(v => v.toJSON()),
			type: this.__type && this.__type.map(v => v.toJSON()),
			condition: this.__condition && this.__condition.map(v => v.toJSON()),
			patient: this.__patient && this.__patient.toJSON(),
			managingOrganization: this.__managingOrganization && this.__managingOrganization.toJSON(),
			period: this.__period && this.__period.toJSON(),
			referralRequest: this.__referralRequest && this.__referralRequest.map(v => v.toJSON()),
			careManager: this.__careManager && this.__careManager.toJSON(),
			careTeam: this.__careTeam && this.__careTeam.map(v => v.toJSON()),
		});
	}
}

module.exports = EpisodeOfCare;
