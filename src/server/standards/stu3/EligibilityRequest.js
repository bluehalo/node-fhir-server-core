const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const Period = require('./Period');

class EligibilityRequest extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'EligibilityRequest';
	}

	// This is a EligibilityRequest resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['EligibilityRequest'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// The Response business identifier.
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
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field status`);
		}
		this._status = new_value;
	}

	// Immediate (STAT), best effort (NORMAL), deferred (DEFER).
	get priority () {
		return this._priority;
	}

	set priority ( new_value ) {
		this._priority = new CodeableConcept(new_value);
	}

	// Patient Resource.
	get patient () {
		return this._patient;
	}

	set patient ( new_value ) {
		this._patient = new Reference(new_value);
	}

	// The date or dates when the enclosed suite of services were performed or completed.
	get servicedDate () {
		return this._servicedDate;
	}

	set servicedDate ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field servicedDate`);
		}
		this._servicedDate = new_value;
	}

	// The date or dates when the enclosed suite of services were performed or completed.
	get servicedPeriod () {
		return this._servicedPeriod;
	}

	set servicedPeriod ( new_value ) {
		this._servicedPeriod = new Period(new_value);
	}

	// The date when this resource was created.
	get created () {
		return this._created;
	}

	set created ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
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

	// The practitioner who is responsible for the services rendered to the patient.
	get provider () {
		return this._provider;
	}

	set provider ( new_value ) {
		this._provider = new Reference(new_value);
	}

	// The organization which is responsible for the services rendered to the patient.
	get organization () {
		return this._organization;
	}

	set organization ( new_value ) {
		this._organization = new Reference(new_value);
	}

	// The Insurer who is target  of the request.
	get insurer () {
		return this._insurer;
	}

	set insurer ( new_value ) {
		this._insurer = new Reference(new_value);
	}

	// Facility where the services were provided.
	get facility () {
		return this._facility;
	}

	set facility ( new_value ) {
		this._facility = new Reference(new_value);
	}

	// Financial instrument by which payment information for health care.
	get coverage () {
		return this._coverage;
	}

	set coverage ( new_value ) {
		this._coverage = new Reference(new_value);
	}

	// The contract number of a business agreement which describes the terms and conditions.
	get businessArrangement () {
		return this._businessArrangement;
	}

	set businessArrangement ( new_value ) {
		this._businessArrangement = new_value;
	}

	// Dental, Vision, Medical, Pharmacy, Rehab etc.
	get benefitCategory () {
		return this._benefitCategory;
	}

	set benefitCategory ( new_value ) {
		this._benefitCategory = new CodeableConcept(new_value);
	}

	// Dental: basic, major, ortho; Vision exam, glasses, contacts; etc.
	get benefitSubCategory () {
		return this._benefitSubCategory;
	}

	set benefitSubCategory ( new_value ) {
		this._benefitSubCategory = new CodeableConcept(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier,
			status: this._status,
			priority: this._priority,
			patient: this._patient,
			servicedDate: this._servicedDate,
			servicedPeriod: this._servicedPeriod,
			created: this._created,
			enterer: this._enterer,
			provider: this._provider,
			organization: this._organization,
			insurer: this._insurer,
			facility: this._facility,
			coverage: this._coverage,
			businessArrangement: this._businessArrangement,
			benefitCategory: this._benefitCategory,
			benefitSubCategory: this._benefitSubCategory
		});
	}

}

module.exports = EligibilityRequest;
