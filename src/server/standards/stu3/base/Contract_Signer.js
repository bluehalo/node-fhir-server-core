const BackboneElement = require('./BackboneElement');
const Coding = require('./Coding');
const Reference = require('./Reference');
const Signature = require('./Signature');

class Contract_Signer extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Contract_Signer';
	}

	// Role of this Contract signer, e.g. notary, grantee.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new Coding(new_value);
	}

	// Party which is a signator to this Contract.
	get party () {
		return this._party;
	}

	set party ( new_value ) {
		this._party = new Reference(new_value);
	}

	// Legally binding Contract DSIG signature contents in Base64.
	get signature () {
		return this._signature;
	}

	set signature ( new_value ) {
		this._signature = Array.isArray(new_value) ? new_value.map(val => new Signature(val)) : [new Signature(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this._type,
			party: this._party,
			signature: this._signature
		});
	}

}

module.exports = Contract_Signer;
