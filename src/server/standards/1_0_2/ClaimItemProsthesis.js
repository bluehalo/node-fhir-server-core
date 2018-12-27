const BackboneElement = require('./BackboneElement');
const DateScalar = require('./scalars/Date.scalar');

class ClaimItemProsthesis extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ClaimItemProsthesis';
		Object.assign(this, opt);
	}

	// This is a ClaimItemProsthesis resource
	static get __resourceType() {
		return 'ClaimItemProsthesis';
	}

	// Indicates whether this is the initial placement of a fixed prosthesis.
	get initial() {
		return this.__initial;
	}

	set initial(new_value) {
		this.__initial = new_value;
	}

	// Date of the initial placement.
	get priorDate() {
		return this.__priorDate;
	}

	set priorDate(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field priorDate`);
		}
		this.__priorDate = new_value;
	}

	// Material of the prior denture or bridge prosthesis. (Oral).
	get priorMaterial() {
		return this.__priorMaterial;
	}

	set priorMaterial(new_value) {
		const Coding = require('./Coding');
		this.__priorMaterial = new Coding(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			initial: this.__initial,
			priorDate: this.__priorDate,
			priorMaterial: this.__priorMaterial && this.__priorMaterial.toJSON(),
		});
	}
}

module.exports = ClaimItemProsthesis;
