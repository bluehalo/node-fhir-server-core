const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');

class ClaimResponse_Error extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ClaimResponse_Error';
	}

	// The sequence number of the line item submitted which contains the error. This value is omitted when the error is elsewhere.
	get sequenceLinkId () {
		return this._sequenceLinkId;
	}

	set sequenceLinkId ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[1-9][0-9]*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field sequenceLinkId`);
		}
		this._sequenceLinkId = new_value;
	}

	// The sequence number of the addition within the line item submitted which contains the error. This value is omitted when the error is not related to an Addition.
	get detailSequenceLinkId () {
		return this._detailSequenceLinkId;
	}

	set detailSequenceLinkId ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[1-9][0-9]*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field detailSequenceLinkId`);
		}
		this._detailSequenceLinkId = new_value;
	}

	// The sequence number of the addition within the line item submitted which contains the error. This value is omitted when the error is not related to an Addition.
	get subdetailSequenceLinkId () {
		return this._subdetailSequenceLinkId;
	}

	set subdetailSequenceLinkId ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[1-9][0-9]*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field subdetailSequenceLinkId`);
		}
		this._subdetailSequenceLinkId = new_value;
	}

	// An error code,from a specified code system, which details why the claim could not be adjudicated.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		this._code = new CodeableConcept(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			sequenceLinkId: this._sequenceLinkId,
			detailSequenceLinkId: this._detailSequenceLinkId,
			subdetailSequenceLinkId: this._subdetailSequenceLinkId,
			code: this._code
		});
	}

}

module.exports = ClaimResponse_Error;
