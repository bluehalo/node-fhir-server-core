const DomainResource = require('./DomainResource');
const DateScalar = require('./scalars/Date.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class EligibilityRequest extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'EligibilityRequest';
		Object.assign(this, opt);
	}

	// This is a EligibilityRequest resource
	static get __resourceType() {
		return 'EligibilityRequest';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__EligibilityRequest = new_value;
	}

	// The Response business identifier.
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

	// Immediate (STAT), best effort (NORMAL), deferred (DEFER).
	get priority() {
		return this.__priority;
	}

	set priority(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__priority = new CodeableConcept(new_value);
	}

	// Patient Resource.
	get patient() {
		return this.__patient;
	}

	set patient(new_value) {
		const Reference = require('./Reference');
		this.__patient = new Reference(new_value);
	}

	// The date or dates when the enclosed suite of services were performed or completed.
	get servicedDate() {
		return this.__servicedDate;
	}

	set servicedDate(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field servicedDate`);
		}
		this.__servicedDate = new_value;
	}

	// The date or dates when the enclosed suite of services were performed or completed.
	get servicedPeriod() {
		return this.__servicedPeriod;
	}

	set servicedPeriod(new_value) {
		const Period = require('./Period');
		this.__servicedPeriod = new Period(new_value);
	}

	// The date when this resource was created.
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

	// The practitioner who is responsible for the services rendered to the patient.
	get provider() {
		return this.__provider;
	}

	set provider(new_value) {
		const Reference = require('./Reference');
		this.__provider = new Reference(new_value);
	}

	// The organization which is responsible for the services rendered to the patient.
	get organization() {
		return this.__organization;
	}

	set organization(new_value) {
		const Reference = require('./Reference');
		this.__organization = new Reference(new_value);
	}

	// The Insurer who is target  of the request.
	get insurer() {
		return this.__insurer;
	}

	set insurer(new_value) {
		const Reference = require('./Reference');
		this.__insurer = new Reference(new_value);
	}

	// Facility where the services were provided.
	get facility() {
		return this.__facility;
	}

	set facility(new_value) {
		const Reference = require('./Reference');
		this.__facility = new Reference(new_value);
	}

	// Financial instrument by which payment information for health care.
	get coverage() {
		return this.__coverage;
	}

	set coverage(new_value) {
		const Reference = require('./Reference');
		this.__coverage = new Reference(new_value);
	}

	// The contract number of a business agreement which describes the terms and conditions.
	get businessArrangement() {
		return this.__businessArrangement;
	}

	set businessArrangement(new_value) {
		this.__businessArrangement = new_value;
	}

	// Dental, Vision, Medical, Pharmacy, Rehab etc.
	get benefitCategory() {
		return this.__benefitCategory;
	}

	set benefitCategory(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__benefitCategory = new CodeableConcept(new_value);
	}

	// Dental: basic, major, ortho; Vision exam, glasses, contacts; etc.
	get benefitSubCategory() {
		return this.__benefitSubCategory;
	}

	set benefitSubCategory(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__benefitSubCategory = new CodeableConcept(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			status: this.__status,
			priority: this.__priority && this.__priority.toJSON(),
			patient: this.__patient && this.__patient.toJSON(),
			servicedDate: this.__servicedDate,
			servicedPeriod: this.__servicedPeriod && this.__servicedPeriod.toJSON(),
			created: this.__created,
			enterer: this.__enterer && this.__enterer.toJSON(),
			provider: this.__provider && this.__provider.toJSON(),
			organization: this.__organization && this.__organization.toJSON(),
			insurer: this.__insurer && this.__insurer.toJSON(),
			facility: this.__facility && this.__facility.toJSON(),
			coverage: this.__coverage && this.__coverage.toJSON(),
			businessArrangement: this.__businessArrangement,
			benefitCategory: this.__benefitCategory && this.__benefitCategory.toJSON(),
			benefitSubCategory: this.__benefitSubCategory && this.__benefitSubCategory.toJSON(),
		});
	}
}

module.exports = EligibilityRequest;
