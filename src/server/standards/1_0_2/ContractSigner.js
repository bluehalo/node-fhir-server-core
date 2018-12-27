const BackboneElement = require('./BackboneElement');

class ContractSigner extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ContractSigner';
		Object.assign(this, opt);
	}

	// This is a ContractSigner resource
	static get __resourceType() {
		return 'ContractSigner';
	}

	// Role of this Contract signer, e.g. notary, grantee.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const Coding = require('./Coding');
		this.__type = new Coding(new_value);
	}

	// Party which is a signator to this Contract.
	get party() {
		return this.__party;
	}

	set party(new_value) {
		const Reference = require('./Reference');
		this.__party = new Reference(new_value);
	}

	// Legally binding Contract DSIG signature contents in Base64.
	get signature() {
		return this.__signature;
	}

	set signature(new_value) {
		this.__signature = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type && this.__type.toJSON(),
			party: this.__party && this.__party.toJSON(),
			signature: this.__signature,
		});
	}
}

module.exports = ContractSigner;
