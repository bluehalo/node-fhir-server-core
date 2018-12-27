const DomainResource = require('./DomainResource');

class Account extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Account';
		Object.assign(this, opt);
	}

	// This is a Account resource
	static get __resourceType() {
		return 'Account';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Account = new_value;
	}

	// Unique identifier used to reference the account.  May or may not be intended for human use (e.g. credit card number).
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// Name used for the account when displaying it to humans in reports, etc.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// Categorizes the account for reporting and searching purposes.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// Indicates whether the account is presently used/useable or not.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// Indicates the period of time over which the account is allowed.
	get activePeriod() {
		return this.__activePeriod;
	}

	set activePeriod(new_value) {
		const Period = require('./Period');
		this.__activePeriod = new Period(new_value);
	}

	// Identifies the currency to which transactions must be converted when crediting or debiting the account.
	get currency() {
		return this.__currency;
	}

	set currency(new_value) {
		const Coding = require('./Coding');
		this.__currency = new Coding(new_value);
	}

	// Represents the sum of all credits less all debits associated with the account.  Might be positive, zero or negative.
	get balance() {
		return this.__balance;
	}

	set balance(new_value) {
		const Quantity = require('./Quantity');
		this.__balance = new Quantity(new_value);
	}

	// Identifies the period of time the account applies to; e.g. accounts created per fiscal year, quarter, etc.
	get coveragePeriod() {
		return this.__coveragePeriod;
	}

	set coveragePeriod(new_value) {
		const Period = require('./Period');
		this.__coveragePeriod = new Period(new_value);
	}

	// Identifies the patient, device, practitioner, location or other object the account is associated with.
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// Indicates the organization, department, etc. with responsibility for the account.
	get owner() {
		return this.__owner;
	}

	set owner(new_value) {
		const Reference = require('./Reference');
		this.__owner = new Reference(new_value);
	}

	// Provides additional information about what the account tracks and how it is used.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			name: this.__name,
			type: this.__type && this.__type.toJSON(),
			status: this.__status,
			activePeriod: this.__activePeriod && this.__activePeriod.toJSON(),
			currency: this.__currency && this.__currency.toJSON(),
			balance: this.__balance && this.__balance.toJSON(),
			coveragePeriod: this.__coveragePeriod && this.__coveragePeriod.toJSON(),
			subject: this.__subject && this.__subject.toJSON(),
			owner: this.__owner && this.__owner.toJSON(),
			description: this.__description,
		});
	}
}

module.exports = Account;
