const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class CapabilityStatementImplementation extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'CapabilityStatementImplementation';
		Object.assign(this, opt);
	}

	// This is a CapabilityStatementImplementation resource
	static get __resourceType() {
		return 'CapabilityStatementImplementation';
	}

	// Information about the specific installation that this capability statement relates to.
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

module.exports = CapabilityStatementImplementation;
