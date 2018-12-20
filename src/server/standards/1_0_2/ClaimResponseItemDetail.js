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

	// The adjudications results.
	get adjudication() {
		return this.__adjudication;
	}

	set adjudication(new_value) {
		const ClaimResponseItemDetailAdjudication = require('./ClaimResponseItemDetailAdjudication');
		this.__adjudication = Array.isArray(new_value)
			? new_value.map(val => new ClaimResponseItemDetailAdjudication(val))
			: [new ClaimResponseItemDetailAdjudication(new_value)];
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
			adjudication: this.__adjudication && this.__adjudication.map(v => v.toJSON()),
			subDetail: this.__subDetail && this.__subDetail.map(v => v.toJSON()),
		});
	}
}

module.exports = ClaimResponseItemDetail;
