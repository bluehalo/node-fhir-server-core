const BackboneElement = require('./BackboneElement');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class MedicationPackageBatch extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MedicationPackageBatch';
		Object.assign(this, opt);
	}

	// This is a MedicationPackageBatch resource
	static get __resourceType() {
		return 'MedicationPackageBatch';
	}

	// The assigned lot number of a batch of the specified product.
	get lotNumber() {
		return this.__lotNumber;
	}

	set lotNumber(new_value) {
		this.__lotNumber = new_value;
	}

	// When this specific batch of product will expire.
	get expirationDate() {
		return this.__expirationDate;
	}

	set expirationDate(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field expirationDate`);
		}
		this.__expirationDate = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			lotNumber: this.__lotNumber,
			expirationDate: this.__expirationDate,
		});
	}
}

module.exports = MedicationPackageBatch;
