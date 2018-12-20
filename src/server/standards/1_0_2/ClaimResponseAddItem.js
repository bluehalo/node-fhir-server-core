const BackboneElement = require('./BackboneElement');
const PositiveIntScalar = require('./scalars/PositiveInt.scalar');

class ClaimResponseAddItem extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ClaimResponseAddItem';
		Object.assign(this, opt);
	}

	// This is a ClaimResponseAddItem resource
	static get __resourceType() {
		return 'ClaimResponseAddItem';
	}

	// List of input service items which this service line is intended to replace.
	get sequenceLinkId() {
		return this.__sequenceLinkId;
	}

	set sequenceLinkId(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field sequenceLinkId`);
		}
		this.__sequenceLinkId = Array.isArray(new_value) ? new_value : [new_value];
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

	// A list of note references to the notes provided below.
	get noteNumberLinkId() {
		return this.__noteNumberLinkId;
	}

	set noteNumberLinkId(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field noteNumberLinkId`);
		}
		this.__noteNumberLinkId = Array.isArray(new_value) ? new_value : [new_value];
	}

	// The adjudications results.
	get adjudication() {
		return this.__adjudication;
	}

	set adjudication(new_value) {
		const ClaimResponseAddItemAdjudication = require('./ClaimResponseAddItemAdjudication');
		this.__adjudication = Array.isArray(new_value)
			? new_value.map(val => new ClaimResponseAddItemAdjudication(val))
			: [new ClaimResponseAddItemAdjudication(new_value)];
	}

	// The second tier service adjudications for payor added services.
	get detail() {
		return this.__detail;
	}

	set detail(new_value) {
		const ClaimResponseAddItemDetail = require('./ClaimResponseAddItemDetail');
		this.__detail = Array.isArray(new_value)
			? new_value.map(val => new ClaimResponseAddItemDetail(val))
			: [new ClaimResponseAddItemDetail(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			sequenceLinkId: this.__sequenceLinkId,
			service: this.__service && this.__service.toJSON(),
			fee: this.__fee && this.__fee.toJSON(),
			noteNumberLinkId: this.__noteNumberLinkId,
			adjudication: this.__adjudication && this.__adjudication.map(v => v.toJSON()),
			detail: this.__detail && this.__detail.map(v => v.toJSON()),
		});
	}
}

module.exports = ClaimResponseAddItem;
