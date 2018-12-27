const BackboneElement = require('./BackboneElement');

class ClaimResponseAddItemDetail extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ClaimResponseAddItemDetail';
		Object.assign(this, opt);
	}

	// This is a ClaimResponseAddItemDetail resource
	static get __resourceType() {
		return 'ClaimResponseAddItemDetail';
	}

	// A code to indicate the Professional Service or Product supplied.
	get service() {
		return this.__service;
	}

	set service(new_value) {
		const Coding = require('./Coding');
		this.__service = new Coding(new_value);
	}

	// The fee charged for the professional service or product..
	get fee() {
		return this.__fee;
	}

	set fee(new_value) {
		const Quantity = require('./Quantity');
		this.__fee = new Quantity(new_value);
	}

	// The adjudications results.
	get adjudication() {
		return this.__adjudication;
	}

	set adjudication(new_value) {
		const ClaimResponseAddItemDetailAdjudication = require('./ClaimResponseAddItemDetailAdjudication');
		this.__adjudication = Array.isArray(new_value)
			? new_value.map(val => new ClaimResponseAddItemDetailAdjudication(val))
			: [new ClaimResponseAddItemDetailAdjudication(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			service: this.__service && this.__service.toJSON(),
			fee: this.__fee && this.__fee.toJSON(),
			adjudication: this.__adjudication && this.__adjudication.map(v => v.toJSON()),
		});
	}
}

module.exports = ClaimResponseAddItemDetail;
