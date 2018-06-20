const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const EpisodeOfCare_StatusHistory = require('./EpisodeOfCare_StatusHistory');
const CodeableConcept = require('./CodeableConcept');
const EpisodeOfCare_Diagnosis = require('./EpisodeOfCare_Diagnosis');
const Reference = require('./Reference');
const Period = require('./Period');

class EpisodeOfCare extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'EpisodeOfCare';
	}

	// This is a EpisodeOfCare resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['EpisodeOfCare'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// The EpisodeOfCare may be known by different identifiers for different contexts of use, such as when an external agency is tracking the Episode for funding purposes.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// planned | waitlist | active | onhold | finished | cancelled.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['planned', 'waitlist', 'active', 'onhold', 'finished', 'cancelled', 'entered-in-error'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
	get statusHistory () {
		return this._statusHistory;
	}

	set statusHistory ( new_value ) {
		this._statusHistory = Array.isArray(new_value) ? new_value.map(val => new EpisodeOfCare_StatusHistory(val)) : [new EpisodeOfCare_StatusHistory(new_value)];
	}

	// A classification of the type of episode of care; e.g. specialist referral, disease management, type of funded care.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// The list of diagnosis relevant to this episode of care.
	get diagnosis () {
		return this._diagnosis;
	}

	set diagnosis ( new_value ) {
		this._diagnosis = Array.isArray(new_value) ? new_value.map(val => new EpisodeOfCare_Diagnosis(val)) : [new EpisodeOfCare_Diagnosis(new_value)];
	}

	// The patient who is the focus of this episode of care.
	get patient () {
		return this._patient;
	}

	set patient ( new_value ) {
		this._patient = new Reference(new_value);
	}

	// The organization that has assumed the specific responsibilities for the specified duration.
	get managingOrganization () {
		return this._managingOrganization;
	}

	set managingOrganization ( new_value ) {
		this._managingOrganization = new Reference(new_value);
	}

	// The interval during which the managing organization assumes the defined responsibility.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		this._period = new Period(new_value);
	}

	// Referral Request(s) that are fulfilled by this EpisodeOfCare, incoming referrals.
	get referralRequest () {
		return this._referralRequest;
	}

	set referralRequest ( new_value ) {
		this._referralRequest = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The practitioner that is the care manager/care co-ordinator for this patient.
	get careManager () {
		return this._careManager;
	}

	set careManager ( new_value ) {
		this._careManager = new Reference(new_value);
	}

	// The list of practitioners that may be facilitating this episode of care for specific purposes.
	get team () {
		return this._team;
	}

	set team ( new_value ) {
		this._team = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The set of accounts that may be used for billing for this EpisodeOfCare.
	get account () {
		return this._account;
	}

	set account ( new_value ) {
		this._account = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier,
			status: this._status,
			statusHistory: this._statusHistory,
			type: this._type,
			diagnosis: this._diagnosis,
			patient: this._patient,
			managingOrganization: this._managingOrganization,
			period: this._period,
			referralRequest: this._referralRequest,
			careManager: this._careManager,
			team: this._team,
			account: this._account
		});
	}

}

module.exports = EpisodeOfCare;
