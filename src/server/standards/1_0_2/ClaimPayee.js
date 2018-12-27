const BackboneElement = require('./BackboneElement');

class ClaimPayee extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ClaimPayee';
		Object.assign(this, opt);
	}

	// This is a ClaimPayee resource
	static get __resourceType() {
		return 'ClaimPayee';
	}

	// Party to be reimbursed: Subscriber, provider, other.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const Coding = require('./Coding');
		this.__type = new Coding(new_value);
	}

	// The provider who is to be reimbursed for the claim (the party to whom any benefit is assigned).
	get provider() {
		return this.__provider;
	}

	set provider(new_value) {
		const Reference = require('./Reference');
		this.__provider = new Reference(new_value);
	}

	// The organization who is to be reimbursed for the claim (the party to whom any benefit is assigned).
	get organization() {
		return this.__organization;
	}

	set organization(new_value) {
		const Reference = require('./Reference');
		this.__organization = new Reference(new_value);
	}

	// The person other than the subscriber who is to be reimbursed for the claim (the party to whom any benefit is assigned).
	get person() {
		return this.__person;
	}

	set person(new_value) {
		const Reference = require('./Reference');
		this.__person = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type && this.__type.toJSON(),
			provider: this.__provider && this.__provider.toJSON(),
			organization: this.__organization && this.__organization.toJSON(),
			person: this.__person && this.__person.toJSON(),
		});
	}
}

module.exports = ClaimPayee;
