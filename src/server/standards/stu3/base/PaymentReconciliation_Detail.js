const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const Money = require('./Money');

class PaymentReconciliation_Detail extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'PaymentReconciliation_Detail';
	}

	// Code to indicate the nature of the payment, adjustment, funds advance, etc.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new CodeableConcept(new_value);
	}

	// The claim or financial resource.
	get request () {
		return this._request;
	}

	set request ( new_value ) {
		this._request = new Reference(new_value);
	}

	// The claim response resource.
	get response () {
		return this._response;
	}

	set response ( new_value ) {
		this._response = new Reference(new_value);
	}

	// The Organization which submitted the claim or financial transaction.
	get submitter () {
		return this._submitter;
	}

	set submitter ( new_value ) {
		this._submitter = new Reference(new_value);
	}

	// The organization which is receiving the payment.
	get payee () {
		return this._payee;
	}

	set payee ( new_value ) {
		this._payee = new Reference(new_value);
	}

	// The date of the invoice or financial resource.
	get date () {
		return this._date;
	}

	set date ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this._date = new_value;
	}

	// Amount paid for this detail.
	get amount () {
		return this._amount;
	}

	set amount ( new_value ) {
		this._amount = new Money(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this._type,
			request: this._request,
			response: this._response,
			submitter: this._submitter,
			payee: this._payee,
			date: this._date,
			amount: this._amount
		});
	}

}

module.exports = PaymentReconciliation_Detail;
