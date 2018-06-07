const BackboneElement = require('./BackboneElement');
const ClaimResponse_Adjudication = require('./ClaimResponse_Adjudication');
const ClaimResponse_Detail = require('./ClaimResponse_Detail');

class ClaimResponse_Item extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ClaimResponse_Item';
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

	// The adjudication results.
	get adjudication () {
		return this._adjudication;
	}

	set adjudication ( new_value ) {
		this._adjudication = Array.isArray(new_value) ? new_value.map(val => new ClaimResponse_Adjudication(val)) : [new ClaimResponse_Adjudication(new_value)];
	}

	// The second tier service adjudications for submitted services.
	get detail () {
		return this._detail;
	}

	set detail ( new_value ) {
		this._detail = Array.isArray(new_value) ? new_value.map(val => new ClaimResponse_Detail(val)) : [new ClaimResponse_Detail(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			sequenceLinkId: this._sequenceLinkId,
			noteNumber: this._noteNumber,
			adjudication: this._adjudication,
			detail: this._detail
		});
	}

}

module.exports = ClaimResponse_Item;
