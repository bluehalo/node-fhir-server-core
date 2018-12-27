const BackboneElement = require('./BackboneElement');
const PositiveIntScalar = require('./scalars/PositiveInt.scalar');

class ClaimResponseItemDetail extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ClaimResponseItemDetail';
		Object.assign(this, opt);
	}

	// This is a ClaimResponseItemDetail resource
	static get __resourceType() {
		return 'ClaimResponseItemDetail';
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

	// The third tier service adjudications for submitted services.
	get subDetail() {
		return this.__subDetail;
	}

	set subDetail(new_value) {
		const ClaimResponseItemDetailSubDetail = require('./ClaimResponseItemDetailSubDetail');
		this.__subDetail = Array.isArray(new_value)
			? new_value.map(val => new ClaimResponseItemDetailSubDetail(val))
			: [new ClaimResponseItemDetailSubDetail(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			sequenceLinkId: this.__sequenceLinkId,
			noteNumber: this.__noteNumber,
			subDetail: this.__subDetail && this.__subDetail.map(v => v.toJSON()),
		});
	}
}

module.exports = ClaimResponseItemDetail;
