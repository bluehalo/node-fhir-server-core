const DomainResource = require('./DomainResource');

class BodySite extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'BodySite';
		Object.assign(this, opt);
	}

	// This is a BodySite resource
	static get __resourceType() {
		return 'BodySite';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__BodySite = new_value;
	}

	// The person to which the body site belongs.
	get patient() {
		return this.__patient;
	}

	set patient(new_value) {
		const Reference = require('./Reference');
		this.__patient = new Reference(new_value);
	}

	// Identifier for this instance of the anatomical location.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// Named anatomical location - ideally coded where possible.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	// Modifier to refine the anatomical location.  These include modifiers for laterality, relative location, directionality, number, and plane.
	get modifier() {
		return this.__modifier;
	}

	set modifier(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__modifier = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Description of anatomical location.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// Image or images used to identify a location.
	get image() {
		return this.__image;
	}

	set image(new_value) {
		const Attachment = require('./Attachment');
		this.__image = Array.isArray(new_value) ? new_value.map(val => new Attachment(val)) : [new Attachment(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			patient: this.__patient && this.__patient.toJSON(),
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			code: this.__code && this.__code.toJSON(),
			modifier: this.__modifier && this.__modifier.map(v => v.toJSON()),
			description: this.__description,
			image: this.__image && this.__image.map(v => v.toJSON()),
		});
	}
}

module.exports = BodySite;
