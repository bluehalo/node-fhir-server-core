const BackboneElement = require('./BackboneElement');

class Medication_Batch extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Medication_Batch';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Medication_Batch';
	}

	// The assigned lot number of a batch of the specified product.
	get lotNumber () {
		return this._lotNumber;
	}

	set lotNumber ( new_value ) {
		this._lotNumber = new_value;
	}

	// When this specific batch of product will expire.
	get expirationDate () {
		return this._expirationDate;
	}

	set expirationDate ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field expirationDate`);
		}
		this._expirationDate = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			lotNumber: this.lotNumber,
			expirationDate: this.expirationDate
		});
	}

}

module.exports = Medication_Batch;
