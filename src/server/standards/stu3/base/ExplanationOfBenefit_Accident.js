const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Address = require('./Address');
const Reference = require('./Reference');

class ExplanationOfBenefit_Accident extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ExplanationOfBenefit_Accident';
	}

	// Date of an accident which these services are addressing.
	get date () {
		return this._date;
	}

	set date ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this._date = new_value;
	}

	// Type of accident: work, auto, etc.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new CodeableConcept(new_value);
	}

	// Where the accident occurred.
	get locationAddress () {
		return this._locationAddress;
	}

	set locationAddress ( new_value ) {
		this._locationAddress = new Address(new_value);
	}

	// Where the accident occurred.
	get locationReference () {
		return this._locationReference;
	}

	set locationReference ( new_value ) {
		this._locationReference = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			date: this._date,
			type: this._type,
			locationAddress: this._locationAddress,
			locationReference: this._locationReference
		});
	}

}

module.exports = ExplanationOfBenefit_Accident;
