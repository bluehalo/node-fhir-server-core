const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Code = require('./types/Code');
const Reference = require('./types/Reference');
const CodeableConcept = require('./types/CodeableConcept');

class Error {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// code		1..1	CodeableConcept	Error code detailing processing issues
	// Adjudication Error Codes (Example)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	toJSON() {
		return {
			code: this._code,
		};
	}
}

class Financial {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// type		1..1	CodeableConcept	Deductable, visits, benefit amount
	// Benefit Type Codes (Example)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// allowed[x]		0..1		Benefits allowed
	// allowedUnsignedInt			unsignedInt
	set allowedUnsignedInt(allowedUnsignedInt) {
		this._allowedUnsignedInt = allowedUnsignedInt;
	}

	get allowedUnsignedInt() {
		return this._allowedUnsignedInt;
	}

	// allowedString			string
	set allowedString(allowedString) {
		this._allowedString = allowedString;
	}

	get allowedString() {
		return this._allowedString;
	}

	// allowedMoney			Money
	set allowedMoney(allowedMoney) {
		this._allowedMoney = allowedMoney;
	}

	get allowedMoney() {
		return this._allowedMoney;
	}

	// used[x]		0..1		Benefits used
	// usedUnsignedInt			unsignedInt
	set usedUnsignedInt(usedUnsignedInt) {
		this._usedUnsignedInt = usedUnsignedInt;
	}

	get usedUnsignedInt() {
		return this._usedUnsignedInt;
	}

	// usedMoney			Money
	set usedMoney(usedMoney) {
		this._usedMoney = usedMoney;
	}

	get usedMoney() {
		return this._usedMoney;
	}

	toJSON() {
		return {
			type: this._type,
			allowedUnsignedInt: this._allowedUnsignedInt,
			allowedString: this._allowedString,
			allowedMoney: this._allowedMoney,
			usedUnsignedInt: this._usedUnsignedInt,
			usedMoney: this._usedMoney,
		};
	}
}

class BenefitBalance {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// category		1..1	CodeableConcept	Type of services covered
	// Benefit Category Codes (Example)
	set category(category) {
		this._category = new CodeableConcept(category);
	}

	get category() {
		return this._category;
	}

	// subCategory		0..1	CodeableConcept	Detailed services covered within the type
	// Benefit SubCategory Codes (Example)
	set subCategory(subCategory) {
		this._subCategory = new CodeableConcept(subCategory);
	}

	get subCategory() {
		return this._subCategory;
	}

	// excluded		0..1	boolean	Excluded from the plan
	set excluded(excluded) {
		this._excluded = excluded;
	}

	get excluded() {
		return this._excluded;
	}

	// name		0..1	string	Short name for the benefit
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// description		0..1	string	Description of the benefit or services covered
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// network		0..1	CodeableConcept	In or out of network
	// Network Type Codes (Example)
	set network(network) {
		this._network = new CodeableConcept(network);
	}

	get network() {
		return this._network;
	}

	// unit		0..1	CodeableConcept	Individual or family
	// Unit Type Codes (Example)
	set benefitBalanceUnit(benefitBalanceUnit) {
		this._benefitBalanceUnit = new CodeableConcept(benefitBalanceUnit);
	}

	get benefitBalanceUnit() {
		return this._benefitBalanceUnit;
	}

	// term		0..1	CodeableConcept	Annual or lifetime
	// Benefit Term Codes (Example)
	set term(term) {
		this._term = new CodeableConcept(term);
	}

	get term() {
		return this._term;
	}

	// financial		0..*	BackboneElement	Benefit Summary
	set financial(financial) {
		if (Array.isArray(financial)) {
			this._financial = financial.map((i) => new Financial(i));
		} else {
			this._financial = [new Financial(financial)];
		}
	}

	get financial() {
		return this._financial;
	}

	toJSON() {
		return {
			category: this._category,
			subCategory: this._subCategory,
			excluded: this._excluded,
			name: this._name,
			description: this._description,
			network: this._network,
			benefitBalanceUnit: this._benefitBalanceUnit,
			term: this._term,
			financial: this._financial,
		};
	}
}

class Insurance {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// coverage		0..1	Reference(Coverage)	Updated Coverage details
	set coverage(coverage) {
		this._coverage = new Reference(coverage);
	}

	get coverage() {
		return this._coverage;
	}

	// contract		0..1	Reference(Contract)	Contract details
	set contract(contract) {
		this._contract = new Reference(contract);
	}

	get contract() {
		return this._contract;
	}

	// benefitBalance		0..*	BackboneElement	Benefits by Category
	set benefitBalance(benefitBalance) {
		if (Array.isArray(benefitBalance)) {
			this._benefitBalance = benefitBalance.map((i) => new BenefitBalance(i));
		} else {
			this._benefitBalance = [new BenefitBalance(benefitBalance)];
		}
	}

	get benefitBalance() {
		return this._benefitBalance;
	}

	toJSON() {
		return {
			coverage: this._coverage,
			contract: this._contract,
			benefitBalance: this._benefitBalance,
		};
	}
}

class EligibilityResponse extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'EligibilityResponse';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier		0..*	Identifier	Business Identifier
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

	// status	?!Σ	0..1	code	active | cancelled | draft | entered-in-error
	// Financial Resource Status Codes (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// created		0..1	dateTime	Creation date
	set created(created) {
		this._created = created;
	}

	get created() {
		return this._created;
	}

	// requestProvider		0..1	Reference(Practitioner)	Responsible practitioner
	set requestProvider(requestProvider) {
		this._requestProvider = new Reference(requestProvider);
	}

	get requestProvider() {
		return this._requestProvider;
	}

	// requestOrganization		0..1	Reference(Organization)	Responsible organization
	set requestOrganization(requestOrganization) {
		this._requestOrganization = new Reference(requestOrganization);
	}

	get requestOrganization() {
		return this._requestOrganization;
	}

	// request		0..1	Reference(EligibilityRequest)	Eligibility reference
	set request(request) {
		this._request = new Reference(request);
	}

	get request() {
		return this._request;
	}

	// outcome		0..1	CodeableConcept	complete | error | partial
	// RemittanceOutcome (Required)
	set outcome(outcome) {
		this._outcome = new CodeableConcept(outcome);
	}

	get outcome() {
		return this._outcome;
	}

	// disposition		0..1	string	Disposition Message
	set disposition(disposition) {
		this._disposition = disposition;
	}

	get disposition() {
		return this._disposition;
	}

	// insurer		0..1	Reference(Organization)	Insurer issuing the coverage
	set insurer(insurer) {
		this._insurer = new Reference(insurer);
	}

	get insurer() {
		return this._insurer;
	}

	// inforce		0..1	boolean	Coverage inforce indicator
	set inforce(inforce) {
		this._inforce = inforce;
	}

	get inforce() {
		return this._inforce;
	}

	// form		0..1	CodeableConcept	Printed Form Identifier
	// Form Codes (Example)
	set form(form) {
		this._form = new CodeableConcept(form);
	}

	get form() {
		return this._form;
	}

	// insurance		0..*	BackboneElement	Details by insurance coverage
	set insurance(insurance) {
		if (Array.isArray(insurance)) {
			this._insurance = insurance.map((i) => new Insurance(i));
		} else {
			this._insurance = [new Insurance(insurance)];
		}
	}

	get insurance() {
		return this._insurance;
	}

	// error		0..*	BackboneElement	Processing errors
	set error(error) {
		if (Array.isArray(error)) {
			this._error = error.map((i) => new Error(i));
		} else {
			this._error = [new Error(error)];
		}
	}

	get error() {
		return this._error;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			status: this._status,
			created: this._created,
			requestProvider: this._requestProvider,
			requestOrganization: this._requestOrganization,
			request: this._request,
			outcome: this._outcome,
			disposition: this._disposition,
			insurer: this._insurer,
			inforce: this._inforce,
			form: this._form,
			insurance: this._insurance,
			error: this._error,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.EligibilityResponse = EligibilityResponse;
module.exports.Insurance = Insurance;
module.exports.BenefitBalance = BenefitBalance;
module.exports.Financial = Financial;
module.exports.Error = Error;
