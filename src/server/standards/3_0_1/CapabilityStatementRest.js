const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class CapabilityStatementRest extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'CapabilityStatementRest';
		Object.assign(this, opt);
	}

	// This is a CapabilityStatementRest resource
	static get __resourceType() {
		return 'CapabilityStatementRest';
	}

	// Identifies whether this portion of the statement is describing the ability to initiate or receive restful operations.
	get mode() {
		return this.__mode;
	}

	set mode(new_value) {
		this.__mode = new_value;
	}

	// Information about the system\'s restful capabilities that apply across all applications, such as security.
	get documentation() {
		return this.__documentation;
	}

	set documentation(new_value) {
		this.__documentation = new_value;
	}

	// Information about security implementation from an interface perspective - what a client needs to know.
	get security() {
		return this.__security;
	}

	set security(new_value) {
		const CapabilityStatementRestSecurity = require('./CapabilityStatementRestSecurity');
		this.__security = new CapabilityStatementRestSecurity(new_value);
	}

	// A specification of the restful capabilities of the solution for a specific resource type.
	get resource() {
		return this.__resource;
	}

	set resource(new_value) {
		const CapabilityStatementRestResource = require('./CapabilityStatementRestResource');
		this.__resource = Array.isArray(new_value)
			? new_value.map(val => new CapabilityStatementRestResource(val))
			: [new CapabilityStatementRestResource(new_value)];
	}

	// A specification of restful operations supported by the system.
	get interaction() {
		return this.__interaction;
	}

	set interaction(new_value) {
		const CapabilityStatementRestInteraction = require('./CapabilityStatementRestInteraction');
		this.__interaction = Array.isArray(new_value)
			? new_value.map(val => new CapabilityStatementRestInteraction(val))
			: [new CapabilityStatementRestInteraction(new_value)];
	}

	// Definition of an operation or a named query together with its parameters and their meaning and type.
	get operation() {
		return this.__operation;
	}

	set operation(new_value) {
		const CapabilityStatementRestOperation = require('./CapabilityStatementRestOperation');
		this.__operation = Array.isArray(new_value)
			? new_value.map(val => new CapabilityStatementRestOperation(val))
			: [new CapabilityStatementRestOperation(new_value)];
	}

	// An absolute URI which is a reference to the definition of a compartment that the system supports. The reference is to a CompartmentDefinition resource by its canonical URL .
	get compartment() {
		return this.__compartment;
	}

	set compartment(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field compartment`);
		}
		this.__compartment = Array.isArray(new_value) ? new_value : [new_value];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			mode: this.__mode,
			documentation: this.__documentation,
			security: this.__security && this.__security.toJSON(),
			resource: this.__resource && this.__resource.map(v => v.toJSON()),
			interaction: this.__interaction && this.__interaction.map(v => v.toJSON()),
			operation: this.__operation && this.__operation.map(v => v.toJSON()),
			compartment: this.__compartment,
		});
	}
}

module.exports = CapabilityStatementRest;
