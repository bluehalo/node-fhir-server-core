const BackboneElement = require('./BackboneElement');
const DateScalar = require('./scalars/Date.scalar');

class ClaimMissingTeeth extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ClaimMissingTeeth';
		Object.assign(this, opt);
	}

	// This is a ClaimMissingTeeth resource
	static get __resourceType() {
		return 'ClaimMissingTeeth';
	}

	// The code identifying which tooth is missing.
	get tooth() {
		return this.__tooth;
	}

	set tooth(new_value) {
		const Coding = require('./Coding');
		this.__tooth = new Coding(new_value);
	}

	// Missing reason may be: E-extraction, O-other.
	get reason() {
		return this.__reason;
	}

	set reason(new_value) {
		const Coding = require('./Coding');
		this.__reason = new Coding(new_value);
	}

	// The date of the extraction either known from records or patient reported estimate.
	get extractionDate() {
		return this.__extractionDate;
	}

	set extractionDate(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field extractionDate`);
		}
		this.__extractionDate = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			tooth: this.__tooth && this.__tooth.toJSON(),
			reason: this.__reason && this.__reason.toJSON(),
			extractionDate: this.__extractionDate,
		});
	}
}

module.exports = ClaimMissingTeeth;
