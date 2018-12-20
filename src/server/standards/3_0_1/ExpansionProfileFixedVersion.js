const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class ExpansionProfileFixedVersion extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ExpansionProfileFixedVersion';
		Object.assign(this, opt);
	}

	// This is a ExpansionProfileFixedVersion resource
	static get __resourceType() {
		return 'ExpansionProfileFixedVersion';
	}

	// The specific system for which to fix the version.
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

	// The version of the code system from which codes in the expansion should be included.
	get version() {
		return this.__version;
	}

	set version(new_value) {
		this.__version = new_value;
	}

	// How to manage the intersection between a fixed version in a value set, and this fixed version of the system in the expansion profile.
	get mode() {
		return this.__mode;
	}

	set mode(new_value) {
		this.__mode = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			system: this.__system,
			version: this.__version,
			mode: this.__mode,
		});
	}
}

module.exports = ExpansionProfileFixedVersion;
