const BackboneElement = require('./BackboneElement');

class PractitionerQualification extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'PractitionerQualification';
		Object.assign(this, opt);
	}

	// This is a PractitionerQualification resource
	static get __resourceType() {
		return 'PractitionerQualification';
	}

	// An identifier that applies to this person\'s qualification in this role.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// Coded representation of the qualification.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	// Period during which the qualification is valid.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
	}

	// Organization that regulates and issues the qualification.
	get issuer() {
		return this.__issuer;
	}

	set issuer(new_value) {
		const Reference = require('./Reference');
		this.__issuer = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			code: this.__code && this.__code.toJSON(),
			period: this.__period && this.__period.toJSON(),
			issuer: this.__issuer && this.__issuer.toJSON(),
		});
	}
}

module.exports = PractitionerQualification;
