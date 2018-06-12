const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const Period = require('./Period');
const Money = require('./Money');
const Account_Coverage = require('./Account_Coverage');
const Account_Guarantor = require('./Account_Guarantor');

class Account extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Account';
	}

	// This is a Account resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['Account'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Unique identifier used to reference the account.  May or may not be intended for human use (e.g. credit card number).
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// Indicates whether the account is presently used/usable or not.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['active', 'inactive', 'entered-in-error'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// Categorizes the account for reporting and searching purposes.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new CodeableConcept(new_value);
	}

	// Name used for the account when displaying it to humans in reports, etc.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// Identifies the patient, device, practitioner, location or other object the account is associated with.
	get subject () {
		return this._subject;
	}

	set subject ( new_value ) {
		this._subject = new Reference(new_value);
	}

	// Identifies the period of time the account applies to; e.g. accounts created per fiscal year, quarter, etc.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		this._period = new Period(new_value);
	}

	// Indicates the period of time over which the account is allowed to have transactions posted to it. This period may be different to the coveragePeriod which is the duration of time that services may occur.
	get active () {
		return this._active;
	}

	set active ( new_value ) {
		this._active = new Period(new_value);
	}

	// Represents the sum of all credits less all debits associated with the account.  Might be positive, zero or negative.
	get balance () {
		return this._balance;
	}

	set balance ( new_value ) {
		this._balance = new Money(new_value);
	}

	// The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account.
	get coverage () {
		return this._coverage;
	}

	set coverage ( new_value ) {
		this._coverage = Array.isArray(new_value) ? new_value.map(val => new Account_Coverage(val)) : [new Account_Coverage(new_value)];
	}

	// Indicates the organization, department, etc. with responsibility for the account.
	get owner () {
		return this._owner;
	}

	set owner ( new_value ) {
		this._owner = new Reference(new_value);
	}

	// Provides additional information about what the account tracks and how it is used.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// Parties financially responsible for the account.
	get guarantor () {
		return this._guarantor;
	}

	set guarantor ( new_value ) {
		this._guarantor = Array.isArray(new_value) ? new_value.map(val => new Account_Guarantor(val)) : [new Account_Guarantor(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier,
			status: this._status,
			type: this._type,
			name: this._name,
			subject: this._subject,
			period: this._period,
			active: this._active,
			balance: this._balance,
			coverage: this._coverage,
			owner: this._owner,
			description: this._description,
			guarantor: this._guarantor
		});
	}

}

module.exports = Account;
