const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');

class Claim_Insurance extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Claim_Insurance';
	}

	// Sequence of coverage which serves to provide a link and convey coordination of benefit order.
	get sequence () {
		return this._sequence;
	}

	set sequence ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[1-9][0-9]*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field sequence`);
		}
		this._sequence = new_value;
	}

	// A flag to indicate that this Coverage is the focus for adjudication. The Coverage against which the claim is to be adjudicated.
	get focal () {
		return this._focal;
	}

	set focal ( new_value ) {
		this._focal = new_value;
	}

	// Reference to the program or plan identification, underwriter or payor.
	get coverage () {
		return this._coverage;
	}

	set coverage ( new_value ) {
		this._coverage = new Reference(new_value);
	}

	// The contract number of a business agreement which describes the terms and conditions.
	get businessArrangement () {
		return this._businessArrangement;
	}

	set businessArrangement ( new_value ) {
		this._businessArrangement = new_value;
	}

	// A list of references from the Insurer to which these services pertain.
	get preAuthRef () {
		return this._preAuthRef;
	}

	set preAuthRef ( new_value ) {
		this._preAuthRef = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// The Coverages adjudication details.
	get claimResponse () {
		return this._claimResponse;
	}

	set claimResponse ( new_value ) {
		this._claimResponse = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			sequence: this._sequence,
			focal: this._focal,
			coverage: this._coverage,
			businessArrangement: this._businessArrangement,
			preAuthRef: this._preAuthRef,
			claimResponse: this._claimResponse
		});
	}

}

module.exports = Claim_Insurance;
