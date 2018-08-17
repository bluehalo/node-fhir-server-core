const BackboneElement = require('./BackboneElement');
const ClaimResponse_Adjudication = require('./ClaimResponse_Adjudication');
const ClaimResponse_SubDetail = require('./ClaimResponse_SubDetail');

class ClaimResponse_Detail extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ClaimResponse_Detail';
	}

	// A service line number.
	get sequenceLinkId () {
		return this._sequenceLinkId;
	}

	set sequenceLinkId ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[1-9][0-9]*/;
		if ( new_value && !pattern.test(new_value) ) {
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

	// The third tier service adjudications for submitted services.
	get subDetail () {
		return this._subDetail;
	}

	set subDetail ( new_value ) {
		this._subDetail = Array.isArray(new_value) ? new_value.map(val => new ClaimResponse_SubDetail(val)) : [new ClaimResponse_SubDetail(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			sequenceLinkId: this._sequenceLinkId,
			noteNumber: this._noteNumber,
			adjudication: this._adjudication && this._adjudication.map(v => v.toJSON()),
			subDetail: this._subDetail && this._subDetail.map(v => v.toJSON())
		});
	}

}

module.exports = ClaimResponse_Detail;
