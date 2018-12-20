const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class ExpansionProfileExcludedSystem extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ExpansionProfileExcludedSystem';
		Object.assign(this, opt);
	}

	// This is a ExpansionProfileExcludedSystem resource
	static get __resourceType() {
		return 'ExpansionProfileExcludedSystem';
	}

	// An absolute URI which is the code system to be excluded.
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

	// The version of the code system from which codes in the expansion should be excluded.
	get version() {
		return this.__version;
	}

	set version(new_value) {
		this.__version = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			system: this.__system,
			version: this.__version,
		});
	}
}

module.exports = ExpansionProfileExcludedSystem;
