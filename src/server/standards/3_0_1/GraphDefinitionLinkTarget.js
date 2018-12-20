const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class GraphDefinitionLinkTarget extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'GraphDefinitionLinkTarget';
		Object.assign(this, opt);
	}

	// This is a GraphDefinitionLinkTarget resource
	static get __resourceType() {
		return 'GraphDefinitionLinkTarget';
	}

	// Type of resource this link refers to.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// Profile for the target resource.
	get profile() {
		return this.__profile;
	}

	set profile(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field profile`);
		}
		this.__profile = new_value;
	}

	// Compartment Consistency Rules.
	get compartment() {
		return this.__compartment;
	}

	set compartment(new_value) {
		const GraphDefinitionLinkTargetCompartment = require('./GraphDefinitionLinkTargetCompartment');
		this.__compartment = Array.isArray(new_value)
			? new_value.map(val => new GraphDefinitionLinkTargetCompartment(val))
			: [new GraphDefinitionLinkTargetCompartment(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type,
			profile: this.__profile,
			compartment: this.__compartment && this.__compartment.map(v => v.toJSON()),
		});
	}
}

module.exports = GraphDefinitionLinkTarget;
