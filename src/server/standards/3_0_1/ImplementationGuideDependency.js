const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class ImplementationGuideDependency extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ImplementationGuideDependency';
		Object.assign(this, opt);
	}

	// This is a ImplementationGuideDependency resource
	static get __resourceType() {
		return 'ImplementationGuideDependency';
	}

	// How the dependency is represented when the guide is published.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// Where the dependency is located.
	get uri() {
		return this.__uri;
	}

	set uri(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field uri`);
		}
		this.__uri = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type,
			uri: this.__uri,
		});
	}
}

module.exports = ImplementationGuideDependency;
