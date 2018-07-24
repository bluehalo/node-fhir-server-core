const BackboneElement = require('./BackboneElement');
const ClaimResponse_Adjudication = require('./ClaimResponse_Adjudication');

class ClaimResponse_SubDetail extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ClaimResponse_SubDetail';
	}

	// A service line number.
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

	// A list of note references to the notes provided below.
	get noteNumber () {
		return this._noteNumber;
	}

	set noteNumber ( new_value ) {
		this._noteNumber = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// The adjudications results.
	get adjudication () {
		return this._adjudication;
	}

	set adjudication ( new_value ) {
		this._adjudication = Array.isArray(new_value) ? new_value.map(val => new ClaimResponse_Adjudication(val)) : [new ClaimResponse_Adjudication(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			sequenceLinkId: this._sequenceLinkId,
			noteNumber: this._noteNumber,
			adjudication: this._adjudication
		});
	}

}

module.exports = ClaimResponse_SubDetail;
