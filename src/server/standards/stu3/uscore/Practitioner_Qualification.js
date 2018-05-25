const BackboneElement = require('./BackboneElement');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');
const Period = require('./Period');
const Reference = require('./Reference');

class Practitioner_Qualification extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Practitioner_Qualification';
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
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// Coded representation of the qualification.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._code = new CodeableConcept(new_value);
	}

	// Period during which the qualification is valid.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._period = new Period(new_value);
	}

	// Organization that regulates and issues the qualification.
	get issuer () {
		return this._issuer;
	}

	set issuer ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._issuer = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			identifier: this.identifier && this.identifier.toJSON(),
			code: this.code && this.code.toJSON(),
			period: this.period && this.period.toJSON(),
			issuer: this.issuer && this.issuer.toJSON()
		});
	}

}

module.exports = Practitioner_Qualification;
