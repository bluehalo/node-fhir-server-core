const BackboneElement = require('./BackboneElement');
const PositiveIntScalar = require('./scalars/PositiveInt.scalar');

class ClaimResponseItemDetailSubDetail extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ClaimResponseItemDetailSubDetail';
		Object.assign(this, opt);
	}

	// This is a ClaimResponseItemDetailSubDetail resource
	static get __resourceType() {
		return 'ClaimResponseItemDetailSubDetail';
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
		const ClaimResponseItemDetailSubDetailAdjudication = require('./ClaimResponseItemDetailSubDetailAdjudication');
		this.__adjudication = Array.isArray(new_value)
			? new_value.map(val => new ClaimResponseItemDetailSubDetailAdjudication(val))
			: [new ClaimResponseItemDetailSubDetailAdjudication(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			sequenceLinkId: this.__sequenceLinkId,
			adjudication: this.__adjudication && this.__adjudication.map(v => v.toJSON()),
		});
	}
}

module.exports = ClaimResponseItemDetailSubDetail;
