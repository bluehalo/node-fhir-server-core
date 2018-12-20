const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class ConformanceImplementation extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ConformanceImplementation';
		Object.assign(this, opt);
	}

	// This is a ConformanceImplementation resource
	static get __resourceType() {
		return 'ConformanceImplementation';
	}

	// Information about the specific installation that this conformance statement relates to.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// An absolute base URL for the implementation.  This forms the base for REST interfaces as well as the mailbox and document interfaces.
	get url() {
		return this.__url;
	}

	set url(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field url`);
		}
		this.__url = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			description: this.__description,
			url: this.__url,
		});
	}
}

module.exports = ConformanceImplementation;
