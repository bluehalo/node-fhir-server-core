const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const CapabilityStatement_Certificate = require('./CapabilityStatement_Certificate');

class CapabilityStatement_Security extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'CapabilityStatement_Security';
	}

	// Server adds CORS headers when responding to requests - this enables javascript applications to use the server.
	get cors () {
		return this._cors;
	}

	set cors ( new_value ) {
		this._cors = new_value;
	}

	// Types of security services that are supported/required by the system.
	get service () {
		return this._service;
	}

	set service ( new_value ) {
		this._service = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// General description of how security works.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// Certificates associated with security profiles.
	get certificate () {
		return this._certificate;
	}

	set certificate ( new_value ) {
		this._certificate = Array.isArray(new_value) ? new_value.map(val => new CapabilityStatement_Certificate(val)) : [new CapabilityStatement_Certificate(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			cors: this._cors,
			service: this._service,
			description: this._description,
			certificate: this._certificate
		});
	}

}

module.exports = CapabilityStatement_Security;
