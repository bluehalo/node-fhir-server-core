const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Period = require('./Period');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');
const PaymentReconciliation_Detail = require('./PaymentReconciliation_Detail');
const Money = require('./Money');
const PaymentReconciliation_ProcessNote = require('./PaymentReconciliation_ProcessNote');

class PaymentReconciliation extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'PaymentReconciliation';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'PaymentReconciliation';
	}

	// This is a PaymentReconciliation resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['PaymentReconciliation'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
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
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field status`);
		}
		this._status = new_value;
	}

	// The period of time for which payments have been gathered into this bulk payment for settlement.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		this._period = new Period(new_value);
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

	// The Insurer who produced this adjudicated response.
	get organization () {
		return this._organization;
	}

	set organization ( new_value ) {
		this._organization = new Reference(new_value);
	}

	// Original request resource reference.
	get request () {
		return this._request;
	}

	set request ( new_value ) {
		this._request = new Reference(new_value);
	}

	// Transaction status: error, complete.
	get outcome () {
		return this._outcome;
	}

	set outcome ( new_value ) {
		this._outcome = new CodeableConcept(new_value);
	}

	// A description of the status of the adjudication.
	get disposition () {
		return this._disposition;
	}

	set disposition ( new_value ) {
		this._disposition = new_value;
	}

	// The practitioner who is responsible for the services rendered to the patient.
	get requestProvider () {
		return this._requestProvider;
	}

	set requestProvider ( new_value ) {
		this._requestProvider = new Reference(new_value);
	}

	// The organization which is responsible for the services rendered to the patient.
	get requestOrganization () {
		return this._requestOrganization;
	}

	set requestOrganization ( new_value ) {
		this._requestOrganization = new Reference(new_value);
	}

	// List of individual settlement amounts and the corresponding transaction.
	get detail () {
		return this._detail;
	}

	set detail ( new_value ) {
		this._detail = Array.isArray(new_value) ? new_value.map(val => new PaymentReconciliation_Detail(val)) : [new PaymentReconciliation_Detail(new_value)];
	}

	// The form to be used for printing the content.
	get form () {
		return this._form;
	}

	set form ( new_value ) {
		this._form = new CodeableConcept(new_value);
	}

	// Total payment amount.
	get total () {
		return this._total;
	}

	set total ( new_value ) {
		this._total = new Money(new_value);
	}

	// Suite of notes.
	get processNote () {
		return this._processNote;
	}

	set processNote ( new_value ) {
		this._processNote = Array.isArray(new_value) ? new_value.map(val => new PaymentReconciliation_ProcessNote(val)) : [new PaymentReconciliation_ProcessNote(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier && this._identifier.map(v => v.toJSON()),
			status: this._status,
			period: this._period && this._period.toJSON(),
			created: this._created,
			organization: this._organization && this._organization.toJSON(),
			request: this._request && this._request.toJSON(),
			outcome: this._outcome && this._outcome.toJSON(),
			disposition: this._disposition,
			requestProvider: this._requestProvider && this._requestProvider.toJSON(),
			requestOrganization: this._requestOrganization && this._requestOrganization.toJSON(),
			detail: this._detail && this._detail.map(v => v.toJSON()),
			form: this._form && this._form.toJSON(),
			total: this._total && this._total.toJSON(),
			processNote: this._processNote && this._processNote.map(v => v.toJSON())
		});
	}

}

module.exports = PaymentReconciliation;
