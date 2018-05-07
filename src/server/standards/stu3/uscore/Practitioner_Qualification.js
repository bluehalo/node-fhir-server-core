const BackboneElement = require('./BackboneElement');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');
const Period = require('./Period');
const Reference = require('./Reference');

class Practitioner_Qualification extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Practitioner_Qualification';
	}

	// An identifier that applies to this person's qualification in this role.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// Coded representation of the qualification.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		this._code = new CodeableConcept(new_value);
	}

	// Period during which the qualification is valid.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		this._period = new Period(new_value);
	}

	// Organization that regulates and issues the qualification.
	get issuer () {
		return this._issuer;
	}

	set issuer ( new_value ) {
		this._issuer = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			identifier: this._identifier,
			code: this._code,
			period: this._period,
			issuer: this._issuer
		});
	}

}

module.exports = Practitioner_Qualification;
