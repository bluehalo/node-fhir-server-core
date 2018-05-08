const BackboneElement = require('./BackboneElement');
const Period = require('./Period');
const Quantity = require('./Quantity');
const Duration = require('./Duration');
const Reference = require('./Reference');

class MedicationRequest_DispenseRequest extends BackboneElement {

	constructor ( opts ) {
		super();
		this._resourceType = 'MedicationRequest_DispenseRequest';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'MedicationRequest_DispenseRequest';
	}

	// This indicates the validity period of a prescription (stale dating the Prescription).
	get validityPeriod () {
		return this._validityPeriod;
	}

	set validityPeriod ( new_value ) {
		this._validityPeriod = new Period(new_value);
	}

	// An integer indicating the number of times, in addition to the original dispense, (aka refills or repeats) that the patient can receive the prescribed medication. Usage Notes: This integer does not include the original order dispense. This means that if an order indicates dispense 30 tablets plus "3 repeats", then the order can be dispensed a total of 4 times and the patient can receive a total of 120 tablets.
	get numberOfRepeatsAllowed () {
		return this._numberOfRepeatsAllowed;
	}

	set numberOfRepeatsAllowed ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[1-9][0-9]*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field numberOfRepeatsAllowed`);
		}
		this._numberOfRepeatsAllowed = new_value;
	}

	// The amount that is to be dispensed for one fill.
	get quantity () {
		return this._quantity;
	}

	set quantity ( new_value ) {
		this._quantity = new Quantity(new_value);
	}

	// Identifies the period time over which the supplied product is expected to be used, or the length of time the dispense is expected to last.
	get expectedSupplyDuration () {
		return this._expectedSupplyDuration;
	}

	set expectedSupplyDuration ( new_value ) {
		this._expectedSupplyDuration = new Duration(new_value);
	}

	// Indicates the intended dispensing Organization specified by the prescriber.
	get performer () {
		return this._performer;
	}

	set performer ( new_value ) {
		this._performer = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			validityPeriod: this._validityPeriod,
			numberOfRepeatsAllowed: this._numberOfRepeatsAllowed,
			quantity: this._quantity,
			expectedSupplyDuration: this._expectedSupplyDuration,
			performer: this._performer
		});
	}

}

module.exports = MedicationRequest_DispenseRequest;
