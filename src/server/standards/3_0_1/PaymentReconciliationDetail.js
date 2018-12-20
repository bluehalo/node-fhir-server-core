const BackboneElement = require('./BackboneElement');
const DateScalar = require('./scalars/Date.scalar');

class PaymentReconciliationDetail extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'PaymentReconciliationDetail';
		Object.assign(this, opt);
	}

	// This is a PaymentReconciliationDetail resource
	static get __resourceType() {
		return 'PaymentReconciliationDetail';
	}

	// Code to indicate the nature of the payment, adjustment, funds advance, etc.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// The claim or financial resource.
	get request() {
		return this.__request;
	}

	set request(new_value) {
		const Reference = require('./Reference');
		this.__request = new Reference(new_value);
	}

	// The claim response resource.
	get response() {
		return this.__response;
	}

	set response(new_value) {
		const Reference = require('./Reference');
		this.__response = new Reference(new_value);
	}

	// The Organization which submitted the claim or financial transaction.
	get submitter() {
		return this.__submitter;
	}

	set submitter(new_value) {
		const Reference = require('./Reference');
		this.__submitter = new Reference(new_value);
	}

	// The organization which is receiving the payment.
	get payee() {
		return this.__payee;
	}

	set payee(new_value) {
		const Reference = require('./Reference');
		this.__payee = new Reference(new_value);
	}

	// The date of the invoice or financial resource.
	get date() {
		return this.__date;
	}

	set date(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this.__date = new_value;
	}

	// Amount paid for this detail.
	get amount() {
		return this.__amount;
	}

	set amount(new_value) {
		const Money = require('./Money');
		this.__amount = new Money(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type && this.__type.toJSON(),
			request: this.__request && this.__request.toJSON(),
			response: this.__response && this.__response.toJSON(),
			submitter: this.__submitter && this.__submitter.toJSON(),
			payee: this.__payee && this.__payee.toJSON(),
			date: this.__date,
			amount: this.__amount && this.__amount.toJSON(),
		});
	}
}

module.exports = PaymentReconciliationDetail;
