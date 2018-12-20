const Element = require('./Element');

class Reference extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Reference';
		Object.assign(this, opt);
	}

	// This is a Reference resource
	static get __resourceType() {
		return 'Reference';
	}

	// A reference to a location at which the other resource is found. The reference may be a relative reference, in which case it is relative to the service base URL, or an absolute URL that resolves to the location where the resource is found. The reference may be version specific or not. If the reference is not to a FHIR RESTful server, then it should be assumed to be version specific. Internal fragment references (start with \'#\') refer to contained resources.
	get reference() {
		return this.__reference;
	}

	set reference(new_value) {
		this.__reference = new_value;
	}

	// An identifier for the other resource. This is used when there is no way to reference the other resource directly, either because the entity is not available through a FHIR server, or because there is no way for the author of the resource to convert a known identifier to an actual location. There is no requirement that a Reference.identifier point to something that is actually exposed as a FHIR instance, but it SHALL point to a business concept that would be expected to be exposed as a FHIR instance, and that instance would need to be of a FHIR resource type allowed by the reference.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// Plain text narrative that identifies the resource in addition to the resource reference.
	get display() {
		return this.__display;
	}

	set display(new_value) {
		this.__display = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			reference: this.__reference,
			identifier: this.__identifier && this.__identifier.toJSON(),
			display: this.__display,
		});
	}
}

module.exports = Reference;
