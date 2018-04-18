const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Code = require('../types/Code');
const CodeableConcept = require('../types/CodeableConcept');
const Reference = require('../types/Reference');
const Period = require('../types/Period');

class Diagnosis {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// condition	Σ	1..1	Reference(Condition)	Conditions/problems/diagnoses this episode of care is for
	set condition(condition) {
		this._condition = new Reference(condition);
	}

	get condition() {
		return this._condition;
	}

	// role	Σ	0..1	CodeableConcept	Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …)
	// DiagnosisRole (Preferred)
	set role(role) {
		this._role = new CodeableConcept(role);
	}

	get role() {
		return this._role;
	}

	// rank	Σ	0..1	positiveInt	Ranking of the diagnosis (for each role type)
	set rank(rank) {
		this._rank = rank;
	}

	get rank() {
		return this._rank;
	}

	toJSON() {
		return {
			condition: this._condition,
			role: this._role,
			rank: this._rank,
		};
	}
}

class StatusHistory {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// status		1..1	code	planned | waitlist | active | onhold | finished | cancelled | entered-in-error
	// EpisodeOfCareStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// period		1..1	Period	Duration the EpisodeOfCare was in the specified status
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	toJSON() {
		return {
			status: this._status,
			period: this._period,
		};
	}
}

class EpisodeOfCare extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'EpisodeOfCare';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier		0..*	Identifier	Business Identifier(s) relevant for this EpisodeOfCare
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

	// status	?!Σ	1..1	code	planned | waitlist | active | onhold | finished | cancelled | entered-in-error
	// EpisodeOfCareStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// type	Σ	0..*	CodeableConcept	Type/class - e.g. specialist referral, disease management
	// EpisodeOfCareType (Example)
	set type(type) {
		if (Array.isArray(type)) {
			this._type = type.map((i) => new CodeableConcept(i));
		} else {
			this._type = [new CodeableConcept(type)];
		}
	}

	get type() {
		return this._type;
	}

	// patient	Σ	1..1	Reference(Patient)	The patient who is the focus of this episode of care
	set patient(patient) {
		this._patient = new Reference(patient);
	}

	get patient() {
		return this._patient;
	}

	// managingOrganization	Σ	0..1	Reference(Organization)	Organization that assumes care
	set managingOrganization(managingOrganization) {
		this._managingOrganization = new Reference(managingOrganization);
	}

	get managingOrganization() {
		return this._managingOrganization;
	}

	// period	Σ	0..1	Period	Interval during responsibility is assumed
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	// referralRequest		0..*	Reference(ReferralRequest)	Originating Referral Request(s)
	set referralRequest(referralRequest) {
		if (Array.isArray(referralRequest)) {
			this._referralRequest = referralRequest.map((i) => new Reference(i));
		} else {
			this._referralRequest = [new Reference(referralRequest)];
		}
	}

	get referralRequest() {
		return this._referralRequest;
	}

	// careManager		0..1	Reference(Practitioner)	Care manager/care co-ordinator for the patient
	set careManager(careManager) {
		this._careManager = new Reference(careManager);
	}

	get careManager() {
		return this._careManager;
	}

	// team		0..*	Reference(CareTeam)	Other practitioners facilitating this episode of care
	set team(team) {
		if (Array.isArray(team)) {
			this._team = team.map((i) => new Reference(i));
		} else {
			this._team = [new Reference(team)];
		}
	}

	get team() {
		return this._team;
	}

	// account		0..*	Reference(Account)	The set of accounts that may be used for billing for this EpisodeOfCare
	set account(account) {
		if (Array.isArray(account)) {
			this._account = account.map((i) => new Reference(i));
		} else {
			this._account = [new Reference(account)];
		}
	}

	get account() {
		return this._account;
	}

	// statusHistory		0..*	BackboneElement	Past list of status codes (the current status may be included to cover the start date of the status)
	set statusHistory(statusHistory) {
		if (Array.isArray(statusHistory)) {
			this._statusHistory = statusHistory.map((i) => new StatusHistory(i));
		} else {
			this._statusHistory = [new StatusHistory(statusHistory)];
		}
	}

	get statusHistory() {
		return this._statusHistory;
	}

	// diagnosis	Σ	0..*	BackboneElement	The list of diagnosis relevant to this episode of care
	set diagnosis(diagnosis) {
		if (Array.isArray(diagnosis)) {
			this._diagnosis = diagnosis.map((i) => new Diagnosis(i));
		} else {
			this._diagnosis = [new Diagnosis(diagnosis)];
		}
	}

	get diagnosis() {
		return this._diagnosis;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			status: this._status,
			type: this._type,
			patient: this._patient,
			managingOrganization: this._managingOrganization,
			period: this._period,
			referralRequest: this._referralRequest,
			careManager: this._careManager,
			team: this._team,
			account: this._account,
			statusHistory: this._statusHistory,
			diagnosis: this._diagnosis,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.EpisodeOfCare = EpisodeOfCare;
module.exports.StatusHistory = StatusHistory;
module.exports.Diagnosis = Diagnosis;
