const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class ValueSetCodeSystem extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ValueSetCodeSystem';
		Object.assign(this, opt);
	}

	// This is a ValueSetCodeSystem resource
	static get __resourceType() {
		return 'ValueSetCodeSystem';
	}

	// An absolute URI that is used to reference this code system, including in [Coding]{datatypes.html#Coding}.system.
	get system() {
		return this.__system;
	}

	set system(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field system`);
		}
		this.__system = new_value;
	}

	// The version of this code system that defines the codes. Note that the version is optional because a well maintained code system does not suffer from versioning, and therefore the version does not need to be maintained. However many code systems are not well maintained, and the version needs to be defined and tracked.
	get version() {
		return this.__version;
	}

	set version(new_value) {
		this.__version = new_value;
	}

	// If code comparison is case sensitive when codes within this system are compared to each other.
	get caseSensitive() {
		return this.__caseSensitive;
	}

	set caseSensitive(new_value) {
		this.__caseSensitive = new_value;
	}

	// Concepts that are in the code system. The concept definitions are inherently hierarchical, but the definitions must be consulted to determine what the meaning of the hierarchical relationships are.
	get concept() {
		return this.__concept;
	}

	set concept(new_value) {
		const ValueSetCodeSystemConcept = require('./ValueSetCodeSystemConcept');
		this.__concept = Array.isArray(new_value)
			? new_value.map(val => new ValueSetCodeSystemConcept(val))
			: [new ValueSetCodeSystemConcept(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			system: this.__system,
			version: this.__version,
			caseSensitive: this.__caseSensitive,
			concept: this.__concept && this.__concept.map(v => v.toJSON()),
		});
	}
}

module.exports = ValueSetCodeSystem;
