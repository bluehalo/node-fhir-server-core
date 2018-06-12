const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Timing = require('./Timing');
const Quantity = require('./Quantity');

class NutritionOrder_Supplement extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'NutritionOrder_Supplement';
	}

	// The kind of nutritional supplement product required such as a high protein or pediatric clear liquid supplement.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new CodeableConcept(new_value);
	}

	// The product or brand name of the nutritional supplement such as "Acme Protein Shake".
	get productName () {
		return this._productName;
	}

	set productName ( new_value ) {
		this._productName = new_value;
	}

	// The time period and frequency at which the supplement(s) should be given.  The supplement should be given for the combination of all schedules if more than one schedule is present.
	get schedule () {
		return this._schedule;
	}

	set schedule ( new_value ) {
		this._schedule = Array.isArray(new_value) ? new_value.map(val => new Timing(val)) : [new Timing(new_value)];
	}

	// The amount of the nutritional supplement to be given.
	get quantity () {
		return this._quantity;
	}

	set quantity ( new_value ) {
		this._quantity = new Quantity(new_value);
	}

	// Free text or additional instructions or information pertaining to the oral supplement.
	get instruction () {
		return this._instruction;
	}

	set instruction ( new_value ) {
		this._instruction = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this._type,
			productName: this._productName,
			schedule: this._schedule,
			quantity: this._quantity,
			instruction: this._instruction
		});
	}

}

module.exports = NutritionOrder_Supplement;
