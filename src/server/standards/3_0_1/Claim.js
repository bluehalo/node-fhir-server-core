const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const Period = require('./Period');
const Claim_Related = require('./Claim_Related');
const Claim_Payee = require('./Claim_Payee');
const Claim_CareTeam = require('./Claim_CareTeam');
const Claim_Information = require('./Claim_Information');
const Claim_Diagnosis = require('./Claim_Diagnosis');
const Claim_Procedure = require('./Claim_Procedure');
const Claim_Insurance = require('./Claim_Insurance');
const Claim_Accident = require('./Claim_Accident');
const Claim_Item = require('./Claim_Item');
const Money = require('./Money');

class Claim extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Claim';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Claim';
	}

	// This is a Claim resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['Claim'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// The business identifier for the instance: claim number, pre-determination or pre-authorization number.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// The status of the resource instance.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field status`);
		}
		this._status = new_value;
	}

	// The category of claim, eg, oral, pharmacy, vision, insitutional, professional.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new CodeableConcept(new_value);
	}

	// A finer grained suite of claim subtype codes which may convey Inpatient vs Outpatient and/or a specialty service. In the US the BillType.
	get subType () {
		return this._subType;
	}

	set subType ( new_value ) {
		this._subType = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Complete (Bill or Claim), Proposed (Pre-Authorization), Exploratory (Pre-determination).
	get use () {
		return this._use;
	}

	set use ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['complete', 'proposed', 'exploratory', 'other'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field use`);
		}
		this._use = new_value;
	}

	// Patient Resource.
	get patient () {
		return this._patient;
	}

	set patient ( new_value ) {
		this._patient = new Reference(new_value);
	}

	// The billable period for which charges are being submitted.
	get billablePeriod () {
		return this._billablePeriod;
	}

	set billablePeriod ( new_value ) {
		this._billablePeriod = new Period(new_value);
	}

	// The date when the enclosed suite of services were performed or completed.
	get created () {
		return this._created;
	}

	set created ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field created`);
		}
		this._created = new_value;
	}

	// Person who created the invoice/claim/pre-determination or pre-authorization.
	get enterer () {
		return this._enterer;
	}

	set enterer ( new_value ) {
		this._enterer = new Reference(new_value);
	}

	// The Insurer who is target of the request.
	get insurer () {
		return this._insurer;
	}

	set insurer ( new_value ) {
		this._insurer = new Reference(new_value);
	}

	// The provider which is responsible for the bill, claim pre-determination, pre-authorization.
	get provider () {
		return this._provider;
	}

	set provider ( new_value ) {
		this._provider = new Reference(new_value);
	}

	// The organization which is responsible for the bill, claim pre-determination, pre-authorization.
	get organization () {
		return this._organization;
	}

	set organization ( new_value ) {
		this._organization = new Reference(new_value);
	}

	// Immediate (STAT), best effort (NORMAL), deferred (DEFER).
	get priority () {
		return this._priority;
	}

	set priority ( new_value ) {
		this._priority = new CodeableConcept(new_value);
	}

	// In the case of a Pre-Determination/Pre-Authorization the provider may request that funds in the amount of the expected Benefit be reserved ('Patient' or 'Provider') to pay for the Benefits determined on the subsequent claim(s). 'None' explicitly indicates no funds reserving is requested.
	get fundsReserve () {
		return this._fundsReserve;
	}

	set fundsReserve ( new_value ) {
		this._fundsReserve = new CodeableConcept(new_value);
	}

	// Other claims which are related to this claim such as prior claim versions or for related services.
	get related () {
		return this._related;
	}

	set related ( new_value ) {
		this._related = Array.isArray(new_value) ? new_value.map(val => new Claim_Related(val)) : [new Claim_Related(new_value)];
	}

	// Prescription to support the dispensing of Pharmacy or Vision products.
	get prescription () {
		return this._prescription;
	}

	set prescription ( new_value ) {
		this._prescription = new Reference(new_value);
	}

	// Original prescription which has been superceded by this prescription to support the dispensing of pharmacy services, medications or products. For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the patient has an intolerance, and therefor issues a new precription for an alternate medication which has the same theraputic intent. The prescription from the pharmacy becomes the 'prescription' and that from the physician becomes the 'original prescription'.
	get originalPrescription () {
		return this._originalPrescription;
	}

	set originalPrescription ( new_value ) {
		this._originalPrescription = new Reference(new_value);
	}

	// The party to be reimbursed for the services.
	get payee () {
		return this._payee;
	}

	set payee ( new_value ) {
		this._payee = new Claim_Payee(new_value);
	}

	// The referral resource which lists the date, practitioner, reason and other supporting information.
	get referral () {
		return this._referral;
	}

	set referral ( new_value ) {
		this._referral = new Reference(new_value);
	}

	// Facility where the services were provided.
	get facility () {
		return this._facility;
	}

	set facility ( new_value ) {
		this._facility = new Reference(new_value);
	}

	// The members of the team who provided the overall service as well as their role and whether responsible and qualifications.
	get careTeam () {
		return this._careTeam;
	}

	set careTeam ( new_value ) {
		this._careTeam = Array.isArray(new_value) ? new_value.map(val => new Claim_CareTeam(val)) : [new Claim_CareTeam(new_value)];
	}

	// Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues. Often there are mutiple jurisdiction specific valuesets which are required.
	get information () {
		return this._information;
	}

	set information ( new_value ) {
		this._information = Array.isArray(new_value) ? new_value.map(val => new Claim_Information(val)) : [new Claim_Information(new_value)];
	}

	// List of patient diagnosis for which care is sought.
	get diagnosis () {
		return this._diagnosis;
	}

	set diagnosis ( new_value ) {
		this._diagnosis = Array.isArray(new_value) ? new_value.map(val => new Claim_Diagnosis(val)) : [new Claim_Diagnosis(new_value)];
	}

	// Ordered list of patient procedures performed to support the adjudication.
	get procedure () {
		return this._procedure;
	}

	set procedure ( new_value ) {
		this._procedure = Array.isArray(new_value) ? new_value.map(val => new Claim_Procedure(val)) : [new Claim_Procedure(new_value)];
	}

	// Financial instrument by which payment information for health care.
	get insurance () {
		return this._insurance;
	}

	set insurance ( new_value ) {
		this._insurance = Array.isArray(new_value) ? new_value.map(val => new Claim_Insurance(val)) : [new Claim_Insurance(new_value)];
	}

	// An accident which resulted in the need for healthcare services.
	get accident () {
		return this._accident;
	}

	set accident ( new_value ) {
		this._accident = new Claim_Accident(new_value);
	}

	// The start and optional end dates of when the patient was precluded from working due to the treatable condition(s).
	get employmentImpacted () {
		return this._employmentImpacted;
	}

	set employmentImpacted ( new_value ) {
		this._employmentImpacted = new Period(new_value);
	}

	// The start and optional end dates of when the patient was confined to a treatment center.
	get hospitalization () {
		return this._hospitalization;
	}

	set hospitalization ( new_value ) {
		this._hospitalization = new Period(new_value);
	}

	// First tier of goods and services.
	get item () {
		return this._item;
	}

	set item ( new_value ) {
		this._item = Array.isArray(new_value) ? new_value.map(val => new Claim_Item(val)) : [new Claim_Item(new_value)];
	}

	// The total value of the claim.
	get total () {
		return this._total;
	}

	set total ( new_value ) {
		this._total = new Money(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier && this._identifier.map(v => v.toJSON()),
			status: this._status,
			type: this._type && this._type.toJSON(),
			subType: this._subType && this._subType.map(v => v.toJSON()),
			use: this._use,
			patient: this._patient && this._patient.toJSON(),
			billablePeriod: this._billablePeriod && this._billablePeriod.toJSON(),
			created: this._created,
			enterer: this._enterer && this._enterer.toJSON(),
			insurer: this._insurer && this._insurer.toJSON(),
			provider: this._provider && this._provider.toJSON(),
			organization: this._organization && this._organization.toJSON(),
			priority: this._priority && this._priority.toJSON(),
			fundsReserve: this._fundsReserve && this._fundsReserve.toJSON(),
			related: this._related && this._related.map(v => v.toJSON()),
			prescription: this._prescription && this._prescription.toJSON(),
			originalPrescription: this._originalPrescription && this._originalPrescription.toJSON(),
			payee: this._payee && this._payee.toJSON(),
			referral: this._referral && this._referral.toJSON(),
			facility: this._facility && this._facility.toJSON(),
			careTeam: this._careTeam && this._careTeam.map(v => v.toJSON()),
			information: this._information && this._information.map(v => v.toJSON()),
			diagnosis: this._diagnosis && this._diagnosis.map(v => v.toJSON()),
			procedure: this._procedure && this._procedure.map(v => v.toJSON()),
			insurance: this._insurance && this._insurance.map(v => v.toJSON()),
			accident: this._accident && this._accident.toJSON(),
			employmentImpacted: this._employmentImpacted && this._employmentImpacted.toJSON(),
			hospitalization: this._hospitalization && this._hospitalization.toJSON(),
			item: this._item && this._item.map(v => v.toJSON()),
			total: this._total && this._total.toJSON()
		});
	}

}

module.exports = Claim;
