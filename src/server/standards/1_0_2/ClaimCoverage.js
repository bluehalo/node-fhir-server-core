const BackboneElement = require('./BackboneElement');
const PositiveIntScalar = require('./scalars/PositiveInt.scalar');

class ClaimCoverage extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ClaimCoverage';
		Object.assign(this, opt);
	}

	// This is a ClaimCoverage resource
	static get __resourceType() {
		return 'ClaimCoverage';
	}

	// A service line item.
	get sequence() {
		return this.__sequence;
	}

	set sequence(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field sequence`);
		}
		this.__sequence = new_value;
	}

	// The instance number of the Coverage which is the focus for adjudication. The Coverage against which the claim is to be adjudicated.
	get focal() {
		return this.__focal;
	}

	set focal(new_value) {
		this.__focal = new_value;
	}

	// Reference to the program or plan identification, underwriter or payor.
	get coverage() {
		return this.__coverage;
	}

	set coverage(new_value) {
		const Reference = require('./Reference');
		this.__coverage = new Reference(new_value);
	}

	// The contract number of a business agreement which describes the terms and conditions.
	get businessArrangement() {
		return this.__businessArrangement;
	}

	set businessArrangement(new_value) {
		this.__businessArrangement = new_value;
	}

	// The relationship of the patient to the subscriber.
	get relationship() {
		return this.__relationship;
	}

	set relationship(new_value) {
		const Coding = require('./Coding');
		this.__relationship = new Coding(new_value);
	}

	// A list of references from the Insurer to which these services pertain.
	get preAuthRef() {
		return this.__preAuthRef;
	}

	set preAuthRef(new_value) {
		this.__preAuthRef = Array.isArray(new_value) ? new_value : [new_value];
	}

	// The Coverages adjudication details.
	get claimResponse() {
		return this.__claimResponse;
	}

	set claimResponse(new_value) {
		const Reference = require('./Reference');
		this.__claimResponse = new Reference(new_value);
	}

	// The style (standard) and version of the original material which was converted into this resource.
	get originalRuleset() {
		return this.__originalRuleset;
	}

	set originalRuleset(new_value) {
		const Coding = require('./Coding');
		this.__originalRuleset = new Coding(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			sequence: this.__sequence,
			focal: this.__focal,
			coverage: this.__coverage && this.__coverage.toJSON(),
			businessArrangement: this.__businessArrangement,
			relationship: this.__relationship && this.__relationship.toJSON(),
			preAuthRef: this.__preAuthRef,
			claimResponse: this.__claimResponse && this.__claimResponse.toJSON(),
			originalRuleset: this.__originalRuleset && this.__originalRuleset.toJSON(),
		});
	}
}

module.exports = ClaimCoverage;
