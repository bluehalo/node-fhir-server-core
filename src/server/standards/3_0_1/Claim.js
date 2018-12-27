const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class Claim extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Claim';
		Object.assign(this, opt);
	}

	// This is a Claim resource
	static get __resourceType() {
		return 'Claim';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Claim = new_value;
	}

	// The business identifier for the instance: claim number, pre-determination or pre-authorization number.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// The status of the resource instance.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// The category of claim, eg, oral, pharmacy, vision, insitutional, professional.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// A finer grained suite of claim subtype codes which may convey Inpatient vs Outpatient and/or a specialty service. In the US the BillType.
	get subType() {
		return this.__subType;
	}

	set subType(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__subType = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Complete (Bill or Claim), Proposed (Pre-Authorization), Exploratory (Pre-determination).
	get use() {
		return this.__use;
	}

	set use(new_value) {
		this.__use = new_value;
	}

	// Patient Resource.
	get patient() {
		return this.__patient;
	}

	set patient(new_value) {
		const Reference = require('./Reference');
		this.__patient = new Reference(new_value);
	}

	// The billable period for which charges are being submitted.
	get billablePeriod() {
		return this.__billablePeriod;
	}

	set billablePeriod(new_value) {
		const Period = require('./Period');
		this.__billablePeriod = new Period(new_value);
	}

	// The date when the enclosed suite of services were performed or completed.
	get created() {
		return this.__created;
	}

	set created(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field created`);
		}
		this.__created = new_value;
	}

	// Person who created the invoice/claim/pre-determination or pre-authorization.
	get enterer() {
		return this.__enterer;
	}

	set enterer(new_value) {
		const Reference = require('./Reference');
		this.__enterer = new Reference(new_value);
	}

	// The Insurer who is target of the request.
	get insurer() {
		return this.__insurer;
	}

	set insurer(new_value) {
		const Reference = require('./Reference');
		this.__insurer = new Reference(new_value);
	}

	// The provider which is responsible for the bill, claim pre-determination, pre-authorization.
	get provider() {
		return this.__provider;
	}

	set provider(new_value) {
		const Reference = require('./Reference');
		this.__provider = new Reference(new_value);
	}

	// The organization which is responsible for the bill, claim pre-determination, pre-authorization.
	get organization() {
		return this.__organization;
	}

	set organization(new_value) {
		const Reference = require('./Reference');
		this.__organization = new Reference(new_value);
	}

	// Immediate (STAT), best effort (NORMAL), deferred (DEFER).
	get priority() {
		return this.__priority;
	}

	set priority(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__priority = new CodeableConcept(new_value);
	}

	// In the case of a Pre-Determination/Pre-Authorization the provider may request that funds in the amount of the expected Benefit be reserved (\'Patient\' or \'Provider\') to pay for the Benefits determined on the subsequent claim(s). \'None\' explicitly indicates no funds reserving is requested.
	get fundsReserve() {
		return this.__fundsReserve;
	}

	set fundsReserve(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__fundsReserve = new CodeableConcept(new_value);
	}

	// Other claims which are related to this claim such as prior claim versions or for related services.
	get related() {
		return this.__related;
	}

	set related(new_value) {
		const ClaimRelated = require('./ClaimRelated');
		this.__related = Array.isArray(new_value)
			? new_value.map(val => new ClaimRelated(val))
			: [new ClaimRelated(new_value)];
	}

	// Prescription to support the dispensing of Pharmacy or Vision products.
	get prescription() {
		return this.__prescription;
	}

	set prescription(new_value) {
		const Reference = require('./Reference');
		this.__prescription = new Reference(new_value);
	}

	// Original prescription which has been superceded by this prescription to support the dispensing of pharmacy services, medications or products. For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the patient has an intolerance, and therefor issues a new precription for an alternate medication which has the same theraputic intent. The prescription from the pharmacy becomes the \'prescription\' and that from the physician becomes the \'original prescription\'.
	get originalPrescription() {
		return this.__originalPrescription;
	}

	set originalPrescription(new_value) {
		const Reference = require('./Reference');
		this.__originalPrescription = new Reference(new_value);
	}

	// The party to be reimbursed for the services.
	get payee() {
		return this.__payee;
	}

	set payee(new_value) {
		const ClaimPayee = require('./ClaimPayee');
		this.__payee = new ClaimPayee(new_value);
	}

	// The referral resource which lists the date, practitioner, reason and other supporting information.
	get referral() {
		return this.__referral;
	}

	set referral(new_value) {
		const Reference = require('./Reference');
		this.__referral = new Reference(new_value);
	}

	// Facility where the services were provided.
	get facility() {
		return this.__facility;
	}

	set facility(new_value) {
		const Reference = require('./Reference');
		this.__facility = new Reference(new_value);
	}

	// The members of the team who provided the overall service as well as their role and whether responsible and qualifications.
	get careTeam() {
		return this.__careTeam;
	}

	set careTeam(new_value) {
		const ClaimCareTeam = require('./ClaimCareTeam');
		this.__careTeam = Array.isArray(new_value)
			? new_value.map(val => new ClaimCareTeam(val))
			: [new ClaimCareTeam(new_value)];
	}

	// Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues. Often there are mutiple jurisdiction specific valuesets which are required.
	get information() {
		return this.__information;
	}

	set information(new_value) {
		const ClaimInformation = require('./ClaimInformation');
		this.__information = Array.isArray(new_value)
			? new_value.map(val => new ClaimInformation(val))
			: [new ClaimInformation(new_value)];
	}

	// List of patient diagnosis for which care is sought.
	get diagnosis() {
		return this.__diagnosis;
	}

	set diagnosis(new_value) {
		const ClaimDiagnosis = require('./ClaimDiagnosis');
		this.__diagnosis = Array.isArray(new_value)
			? new_value.map(val => new ClaimDiagnosis(val))
			: [new ClaimDiagnosis(new_value)];
	}

	// Ordered list of patient procedures performed to support the adjudication.
	get procedure() {
		return this.__procedure;
	}

	set procedure(new_value) {
		const ClaimProcedure = require('./ClaimProcedure');
		this.__procedure = Array.isArray(new_value)
			? new_value.map(val => new ClaimProcedure(val))
			: [new ClaimProcedure(new_value)];
	}

	// Financial instrument by which payment information for health care.
	get insurance() {
		return this.__insurance;
	}

	set insurance(new_value) {
		const ClaimInsurance = require('./ClaimInsurance');
		this.__insurance = Array.isArray(new_value)
			? new_value.map(val => new ClaimInsurance(val))
			: [new ClaimInsurance(new_value)];
	}

	// An accident which resulted in the need for healthcare services.
	get accident() {
		return this.__accident;
	}

	set accident(new_value) {
		const ClaimAccident = require('./ClaimAccident');
		this.__accident = new ClaimAccident(new_value);
	}

	// The start and optional end dates of when the patient was precluded from working due to the treatable condition(s).
	get employmentImpacted() {
		return this.__employmentImpacted;
	}

	set employmentImpacted(new_value) {
		const Period = require('./Period');
		this.__employmentImpacted = new Period(new_value);
	}

	// The start and optional end dates of when the patient was confined to a treatment center.
	get hospitalization() {
		return this.__hospitalization;
	}

	set hospitalization(new_value) {
		const Period = require('./Period');
		this.__hospitalization = new Period(new_value);
	}

	// First tier of goods and services.
	get item() {
		return this.__item;
	}

	set item(new_value) {
		const ClaimItem = require('./ClaimItem');
		this.__item = Array.isArray(new_value) ? new_value.map(val => new ClaimItem(val)) : [new ClaimItem(new_value)];
	}

	// The total value of the claim.
	get total() {
		return this.__total;
	}

	set total(new_value) {
		const Money = require('./Money');
		this.__total = new Money(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			status: this.__status,
			type: this.__type && this.__type.toJSON(),
			subType: this.__subType && this.__subType.map(v => v.toJSON()),
			use: this.__use,
			patient: this.__patient && this.__patient.toJSON(),
			billablePeriod: this.__billablePeriod && this.__billablePeriod.toJSON(),
			created: this.__created,
			enterer: this.__enterer && this.__enterer.toJSON(),
			insurer: this.__insurer && this.__insurer.toJSON(),
			provider: this.__provider && this.__provider.toJSON(),
			organization: this.__organization && this.__organization.toJSON(),
			priority: this.__priority && this.__priority.toJSON(),
			fundsReserve: this.__fundsReserve && this.__fundsReserve.toJSON(),
			related: this.__related && this.__related.map(v => v.toJSON()),
			prescription: this.__prescription && this.__prescription.toJSON(),
			originalPrescription: this.__originalPrescription && this.__originalPrescription.toJSON(),
			payee: this.__payee && this.__payee.toJSON(),
			referral: this.__referral && this.__referral.toJSON(),
			facility: this.__facility && this.__facility.toJSON(),
			careTeam: this.__careTeam && this.__careTeam.map(v => v.toJSON()),
			information: this.__information && this.__information.map(v => v.toJSON()),
			diagnosis: this.__diagnosis && this.__diagnosis.map(v => v.toJSON()),
			procedure: this.__procedure && this.__procedure.map(v => v.toJSON()),
			insurance: this.__insurance && this.__insurance.map(v => v.toJSON()),
			accident: this.__accident && this.__accident.toJSON(),
			employmentImpacted: this.__employmentImpacted && this.__employmentImpacted.toJSON(),
			hospitalization: this.__hospitalization && this.__hospitalization.toJSON(),
			item: this.__item && this.__item.map(v => v.toJSON()),
			total: this.__total && this.__total.toJSON(),
		});
	}
}

module.exports = Claim;
