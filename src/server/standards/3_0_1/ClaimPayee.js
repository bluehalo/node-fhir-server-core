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

	// Type of Party to be reimbursed: Subscriber, provider, other.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// organization | patient | practitioner | relatedperson.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		const Coding = require('./Coding');
		this.__resourceType = new Coding(new_value);
	}

	// Party to be reimbursed: Subscriber, provider, other.
	get party() {
		return this.__party;
	}

	set party(new_value) {
		const Reference = require('./Reference');
		this.__party = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type && this.__type.toJSON(),
			resourceType: this.__resourceType && this.__resourceType.toJSON(),
			party: this.__party && this.__party.toJSON(),
		});
	}
}

module.exports = ClaimPayee;
