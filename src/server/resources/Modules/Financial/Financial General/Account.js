const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Code = require('./types/Code');
const CodeableConcept = require('./types/CodeableConcept');
const Reference = require('./types/Reference');
const Period = require('./types/Period');

class Guarantor {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// party		1..1	Reference(Patient | RelatedPerson | Organization)	Responsible entity
	set party(party) {
		this._party = new Reference(party);
	}

	get party() {
		return this._party;
	}

	// onHold		0..1	boolean	Credit or other hold applied
	set onHold(onHold) {
		this._onHold = onHold;
	}

	get onHold() {
		return this._onHold;
	}

	// period		0..1	Period	Guarrantee account during
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	toJSON() {
		return {
			party: this._party,
			onHold: this._onHold,
			period: this._period,
		};
	}
}

class Coverage {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// coverage	Σ	1..1	Reference(Coverage)	The party(s) that are responsible for covering the payment of this account
	set coverage(coverage) {
		this._coverage = new Reference(coverage);
	}

	get coverage() {
		return this._coverage;
	}

	// priority	Σ	0..1	positiveInt	The priority of the coverage in the context of this account
	set priority(priority) {
		this._priority = priority;
	}

	get priority() {
		return this._priority;
	}

	toJSON() {
		return {
			coverage: this._coverage,
			priority: this._priority,
		};
	}
}

class Account extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Account';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	Identifier	Account number
	set identifier(identifier) {
		if (Array.isArray(identifier)) {
			this._identifier = identifier.map((i) => new Identifier(i));
		} else {
			this._identifier = [new Identifier(identifier)];
		}
	}

	get identifier() {
		return this._identifier;
	}

	// status	?!Σ	0..1	code	active | inactive | entered-in-error
	// AccountStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// type	Σ	0..1	CodeableConcept	E.g. patient, expense, depreciation
	// Account Types (Example)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// name	Σ	0..1	string	Human-readable label
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// subject	Σ	0..1	Reference(Patient | Device | Practitioner | Location | HealthcareService | Organization)	What is account tied to?
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// period	Σ	0..1	Period	Transaction window
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	// active	Σ	0..1	Period	Time window that transactions may be posted to this account
	set active(active) {
		this._active = new Period(active);
	}

	get active() {
		return this._active;
	}

	// balance		0..1	Money	How much is in account?
	set balance(balance) {
		this._balance = balance;
	}

	get balance() {
		return this._balance;
	}

	// coverage	Σ	0..*	BackboneElement	The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account
	set coverage(coverage) {
		if (Array.isArray(coverage)) {
			this._coverage = coverage.map((i) => new Coverage(i));
		} else {
			this._coverage = [new Coverage(coverage)];
		}
	}

	get coverage() {
		return this._coverage;
	}

	// owner	Σ	0..1	Reference(Organization)	Who is responsible?
	set owner(owner) {
		this._owner = new Reference(owner);
	}

	get owner() {
		return this._owner;
	}

	// description	Σ	0..1	string	Explanation of purpose/use
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// guarantor		0..*	BackboneElement	Responsible for the account
	set guarantor(guarantor) {
		if (Array.isArray(guarantor)) {
			this._guarantor = guarantor.map((i) => new Guarantor(i));
		} else {
			this._guarantor = [new Guarantor(guarantor)];
		}
	}

	get guarantor() {
		return this._guarantor;
	}

	toJSON() {
		const json = {
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
			guarantor: this._guarantor,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Account = Account;
module.exports.Coverage = Coverage;
module.exports.Guarantor = Guarantor;
