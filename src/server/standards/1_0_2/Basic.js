const DomainResource = require('./DomainResource');
const DateScalar = require('./scalars/Date.scalar');

class Basic extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Basic';
		Object.assign(this, opt);
	}

	// This is a Basic resource
	static get __resourceType() {
		return 'Basic';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Basic = new_value;
	}

	// Identifier assigned to the resource for business purposes, outside the context of FHIR.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// Identifies the \'type\' of resource - equivalent to the resource name for other resources.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	// Identifies the patient, practitioner, device or any other resource that is the \'focus\' of this resource.
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// Indicates who was responsible for creating the resource instance.
	get author() {
		return this.__author;
	}

	set author(new_value) {
		const Reference = require('./Reference');
		this.__author = new Reference(new_value);
	}

	// Identifies when the resource was first created.
	get created() {
		return this.__created;
	}

	set created(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field created`);
		}
		this.__created = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			code: this.__code && this.__code.toJSON(),
			subject: this.__subject && this.__subject.toJSON(),
			author: this.__author && this.__author.toJSON(),
			created: this.__created,
		});
	}
}

module.exports = Basic;
