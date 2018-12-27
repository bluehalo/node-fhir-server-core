const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');
const DateScalar = require('./scalars/Date.scalar');

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

	// The category of claim this is.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// The business identifier for the instance: invoice number, claim number, pre-determination or pre-authorization number.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// The version of the specification on which this instance relies.
	get ruleset() {
		return this.__ruleset;
	}

	set ruleset(new_value) {
		const Coding = require('./Coding');
		this.__ruleset = new Coding(new_value);
	}

	// The version of the specification from which the original instance was created.
	get originalRuleset() {
		return this.__originalRuleset;
	}

	set originalRuleset(new_value) {
		const Coding = require('./Coding');
		this.__originalRuleset = new Coding(new_value);
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

	// Insurer Identifier, typical BIN number (6 digit).
	get target() {
		return this.__target;
	}

	set target(new_value) {
		const Reference = require('./Reference');
		this.__target = new Reference(new_value);
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

	// Complete (Bill or Claim), Proposed (Pre-Authorization), Exploratory (Pre-determination).
	get use() {
		return this.__use;
	}

	set use(new_value) {
		this.__use = new_value;
	}

	// Immediate (stat), best effort (normal), deferred (deferred).
	get priority() {
		return this.__priority;
	}

	set priority(new_value) {
		const Coding = require('./Coding');
		this.__priority = new Coding(new_value);
	}

	// In the case of a Pre-Determination/Pre-Authorization the provider may request that funds in the amount of the expected Benefit be reserved (\'Patient\' or \'Provider\') to pay for the Benefits determined on the subsequent claim(s). \'None\' explicitly indicates no funds reserving is requested.
	get fundsReserve() {
		return this.__fundsReserve;
	}

	set fundsReserve(new_value) {
		const Coding = require('./Coding');
		this.__fundsReserve = new Coding(new_value);
	}

	// Person who created the invoice/claim/pre-determination or pre-authorization.
	get enterer() {
		return this.__enterer;
	}

	set enterer(new_value) {
		const Reference = require('./Reference');
		this.__enterer = new Reference(new_value);
	}

	// Facility where the services were provided.
	get facility() {
		return this.__facility;
	}

	set facility(new_value) {
		const Reference = require('./Reference');
		this.__facility = new Reference(new_value);
	}

	// Prescription to support the dispensing of Pharmacy or Vision products.
	get prescription() {
		return this.__prescription;
	}

	set prescription(new_value) {
		const Reference = require('./Reference');
		this.__prescription = new Reference(new_value);
	}

	// Original prescription to support the dispensing of pharmacy services, medications or products.
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

	// Ordered list of patient diagnosis for which care is sought.
	get diagnosis() {
		return this.__diagnosis;
	}

	set diagnosis(new_value) {
		const ClaimDiagnosis = require('./ClaimDiagnosis');
		this.__diagnosis = Array.isArray(new_value)
			? new_value.map(val => new ClaimDiagnosis(val))
			: [new ClaimDiagnosis(new_value)];
	}

	// List of patient conditions for which care is sought.
	get condition() {
		return this.__condition;
	}

	set condition(new_value) {
		const Coding = require('./Coding');
		this.__condition = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// Patient Resource.
	get patient() {
		return this.__patient;
	}

	set patient(new_value) {
		const Reference = require('./Reference');
		this.__patient = new Reference(new_value);
	}

	// Financial instrument by which payment information for health care.
	get coverage() {
		return this.__coverage;
	}

	set coverage(new_value) {
		const ClaimCoverage = require('./ClaimCoverage');
		this.__coverage = Array.isArray(new_value)
			? new_value.map(val => new ClaimCoverage(val))
			: [new ClaimCoverage(new_value)];
	}

	// Factors which may influence the applicability of coverage.
	get exception() {
		return this.__exception;
	}

	set exception(new_value) {
		const Coding = require('./Coding');
		this.__exception = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// Name of school for over-aged dependents.
	get school() {
		return this.__school;
	}

	set school(new_value) {
		this.__school = new_value;
	}

	// Date of an accident which these services are addressing.
	get accident() {
		return this.__accident;
	}

	set accident(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field accident`);
		}
		this.__accident = new_value;
	}

	// Type of accident: work, auto, etc.
	get accidentType() {
		return this.__accidentType;
	}

	set accidentType(new_value) {
		const Coding = require('./Coding');
		this.__accidentType = new Coding(new_value);
	}

	// A list of intervention and exception codes which may influence the adjudication of the claim.
	get interventionException() {
		return this.__interventionException;
	}

	set interventionException(new_value) {
		const Coding = require('./Coding');
		this.__interventionException = Array.isArray(new_value)
			? new_value.map(val => new Coding(val))
			: [new Coding(new_value)];
	}

	// First tier of goods and services.
	get item() {
		return this.__item;
	}

	set item(new_value) {
		const ClaimItem = require('./ClaimItem');
		this.__item = Array.isArray(new_value) ? new_value.map(val => new ClaimItem(val)) : [new ClaimItem(new_value)];
	}

	// Code to indicate that Xrays, images, emails, documents, models or attachments are being sent in support of this submission.
	get additionalMaterials() {
		return this.__additionalMaterials;
	}

	set additionalMaterials(new_value) {
		const Coding = require('./Coding');
		this.__additionalMaterials = Array.isArray(new_value)
			? new_value.map(val => new Coding(val))
			: [new Coding(new_value)];
	}

	// A list of teeth which would be expected but are not found due to having been previously  extracted or for other reasons.
	get missingTeeth() {
		return this.__missingTeeth;
	}

	set missingTeeth(new_value) {
		const ClaimMissingTeeth = require('./ClaimMissingTeeth');
		this.__missingTeeth = Array.isArray(new_value)
			? new_value.map(val => new ClaimMissingTeeth(val))
			: [new ClaimMissingTeeth(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			type: this.__type,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			ruleset: this.__ruleset && this.__ruleset.toJSON(),
			originalRuleset: this.__originalRuleset && this.__originalRuleset.toJSON(),
			created: this.__created,
			target: this.__target && this.__target.toJSON(),
			provider: this.__provider && this.__provider.toJSON(),
			organization: this.__organization && this.__organization.toJSON(),
			use: this.__use,
			priority: this.__priority && this.__priority.toJSON(),
			fundsReserve: this.__fundsReserve && this.__fundsReserve.toJSON(),
			enterer: this.__enterer && this.__enterer.toJSON(),
			facility: this.__facility && this.__facility.toJSON(),
			prescription: this.__prescription && this.__prescription.toJSON(),
			originalPrescription: this.__originalPrescription && this.__originalPrescription.toJSON(),
			payee: this.__payee && this.__payee.toJSON(),
			referral: this.__referral && this.__referral.toJSON(),
			diagnosis: this.__diagnosis && this.__diagnosis.map(v => v.toJSON()),
			condition: this.__condition && this.__condition.map(v => v.toJSON()),
			patient: this.__patient && this.__patient.toJSON(),
			coverage: this.__coverage && this.__coverage.map(v => v.toJSON()),
			exception: this.__exception && this.__exception.map(v => v.toJSON()),
			school: this.__school,
			accident: this.__accident,
			accidentType: this.__accidentType && this.__accidentType.toJSON(),
			interventionException: this.__interventionException && this.__interventionException.map(v => v.toJSON()),
			item: this.__item && this.__item.map(v => v.toJSON()),
			additionalMaterials: this.__additionalMaterials && this.__additionalMaterials.map(v => v.toJSON()),
			missingTeeth: this.__missingTeeth && this.__missingTeeth.map(v => v.toJSON()),
		});
	}
}

module.exports = Claim;
