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

	// Whether this body site is in active use.
	get active() {
		return this.__active;
	}

	set active(new_value) {
		this.__active = new_value;
	}

	// Named anatomical location - ideally coded where possible.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	// Qualifier to refine the anatomical location.  These include qualifiers for laterality, relative location, directionality, number, and plane.
	get qualifier() {
		return this.__qualifier;
	}

	set qualifier(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__qualifier = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// A summary, charactarization or explanation of the anatomic location.
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

	// The person to which the body site belongs.
	get patient() {
		return this.__patient;
	}

	set patient(new_value) {
		const Reference = require('./Reference');
		this.__patient = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			active: this.__active,
			code: this.__code && this.__code.toJSON(),
			qualifier: this.__qualifier && this.__qualifier.map(v => v.toJSON()),
			description: this.__description,
			image: this.__image && this.__image.map(v => v.toJSON()),
			patient: this.__patient && this.__patient.toJSON(),
		});
	}
}

module.exports = BodySite;
