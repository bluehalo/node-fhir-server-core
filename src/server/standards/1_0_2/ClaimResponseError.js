const BackboneElement = require('./BackboneElement');
const PositiveIntScalar = require('./scalars/PositiveInt.scalar');

class ClaimResponseError extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ClaimResponseError';
		Object.assign(this, opt);
	}

	// This is a ClaimResponseError resource
	static get __resourceType() {
		return 'ClaimResponseError';
	}

	// The sequence number of the line item submitted which contains the error. This value is omitted when the error is elsewhere.
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

	// The sequence number of the addition within the line item submitted which contains the error. This value is omitted when the error is not related to an Addition.
	get detailSequenceLinkId() {
		return this.__detailSequenceLinkId;
	}

	set detailSequenceLinkId(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field detailSequenceLinkId`);
		}
		this.__detailSequenceLinkId = new_value;
	}

	// The sequence number of the addition within the line item submitted which contains the error. This value is omitted when the error is not related to an Addition.
	get subdetailSequenceLinkId() {
		return this.__subdetailSequenceLinkId;
	}

	set subdetailSequenceLinkId(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field subdetailSequenceLinkId`);
		}
		this.__subdetailSequenceLinkId = new_value;
	}

	// An error code,froma specified code system, which details why the claim could not be adjudicated.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const Coding = require('./Coding');
		this.__code = new Coding(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			sequenceLinkId: this.__sequenceLinkId,
			detailSequenceLinkId: this.__detailSequenceLinkId,
			subdetailSequenceLinkId: this.__subdetailSequenceLinkId,
			code: this.__code && this.__code.toJSON(),
		});
	}
}

module.exports = ClaimResponseError;
