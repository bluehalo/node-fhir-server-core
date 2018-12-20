const BackboneElement = require('./BackboneElement');
const PositiveIntScalar = require('./scalars/PositiveInt.scalar');

class ClaimResponseItem extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ClaimResponseItem';
		Object.assign(this, opt);
	}

	// This is a ClaimResponseItem resource
	static get __resourceType() {
		return 'ClaimResponseItem';
	}

	// A service line number.
	get sequenceLinkId() {
		return this.__sequenceLinkId;
	}

	set sequenceLinkId(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field sequenceLinkId`);
		}
		this.__sequenceLinkId = new_value;
	}

	// A list of note references to the notes provided below.
	get noteNumber() {
		return this.__noteNumber;
	}

	set noteNumber(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field noteNumber`);
		}
		this.__noteNumber = Array.isArray(new_value) ? new_value : [new_value];
	}

	// The adjudication results.
	get adjudication() {
		return this.__adjudication;
	}

	set adjudication(new_value) {
		const ClaimResponseItemAdjudication = require('./ClaimResponseItemAdjudication');
		this.__adjudication = Array.isArray(new_value)
			? new_value.map(val => new ClaimResponseItemAdjudication(val))
			: [new ClaimResponseItemAdjudication(new_value)];
	}

	// The second tier service adjudications for submitted services.
	get detail() {
		return this.__detail;
	}

	set detail(new_value) {
		const ClaimResponseItemDetail = require('./ClaimResponseItemDetail');
		this.__detail = Array.isArray(new_value)
			? new_value.map(val => new ClaimResponseItemDetail(val))
			: [new ClaimResponseItemDetail(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			sequenceLinkId: this.__sequenceLinkId,
			noteNumber: this.__noteNumber,
			adjudication: this.__adjudication && this.__adjudication.map(v => v.toJSON()),
			detail: this.__detail && this.__detail.map(v => v.toJSON()),
		});
	}
}

module.exports = ClaimResponseItem;
