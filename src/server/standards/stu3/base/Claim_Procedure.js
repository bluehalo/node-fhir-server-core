const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');

class Claim_Procedure extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Claim_Procedure';
	}

	// Sequence of procedures which serves to order and provide a link.
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

	// Date and optionally time the procedure was performed .
	get date () {
		return this._date;
	}

	set date ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this._date = new_value;
	}

	// The procedure code.
	get procedureCodeableConcept () {
		return this._procedureCodeableConcept;
	}

	set procedureCodeableConcept ( new_value ) {
		this._procedureCodeableConcept = new CodeableConcept(new_value);
	}

	// The procedure code.
	get procedureReference () {
		return this._procedureReference;
	}

	set procedureReference ( new_value ) {
		this._procedureReference = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			sequence: this._sequence,
			date: this._date,
			procedureCodeableConcept: this._procedureCodeableConcept,
			procedureReference: this._procedureReference
		});
	}

}

module.exports = Claim_Procedure;
