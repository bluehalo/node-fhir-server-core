const BackboneElement = require('./BackboneElement');

class ConformanceRestSecurity extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ConformanceRestSecurity';
		Object.assign(this, opt);
	}

	// This is a ConformanceRestSecurity resource
	static get __resourceType() {
		return 'ConformanceRestSecurity';
	}

	// Server adds CORS headers when responding to requests - this enables javascript applications to use the server.
	get cors() {
		return this.__cors;
	}

	set cors(new_value) {
		this.__cors = new_value;
	}

	// Types of security services are supported/required by the system.
	get service() {
		return this.__service;
	}

	set service(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__service = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// General description of how security works.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// Certificates associated with security profiles.
	get certificate() {
		return this.__certificate;
	}

	set certificate(new_value) {
		const ConformanceRestSecurityCertificate = require('./ConformanceRestSecurityCertificate');
		this.__certificate = Array.isArray(new_value)
			? new_value.map(val => new ConformanceRestSecurityCertificate(val))
			: [new ConformanceRestSecurityCertificate(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			cors: this.__cors,
			service: this.__service && this.__service.map(v => v.toJSON()),
			description: this.__description,
			certificate: this.__certificate && this.__certificate.map(v => v.toJSON()),
		});
	}
}

module.exports = ConformanceRestSecurity;
