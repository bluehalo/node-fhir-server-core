const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');
const CodeScalar = require('./scalars/Code.scalar');

class ValueSetExpansionContains extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ValueSetExpansionContains';
		Object.assign(this, opt);
	}

	// This is a ValueSetExpansionContains resource
	static get __resourceType() {
		return 'ValueSetExpansionContains';
	}

	// An absolute URI which is the code system in which the code for this item in the expansion is defined.
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

	// If true, this entry is included in the expansion for navigational purposes, and the user cannot select the code directly as a proper value.
	get abstract() {
		return this.__abstract;
	}

	set abstract(new_value) {
		this.__abstract = new_value;
	}

	// If the concept is inactive in the code system that defines it. Inactive codes are those that are no longer to be used, but are maintained by the code system for understanding legacy data.
	get inactive() {
		return this.__inactive;
	}

	set inactive(new_value) {
		this.__inactive = new_value;
	}

	// The version of this code system that defined this code and/or display. This should only be used with code systems that do not enforce concept permanence.
	get version() {
		return this.__version;
	}

	set version(new_value) {
		this.__version = new_value;
	}

	// The code for this item in the expansion hierarchy. If this code is missing the entry in the hierarchy is a place holder (abstract) and does not represent a valid code in the value set.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		// Throw if new value does not match the pattern
		let pattern = CodeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field code`);
		}
		this.__code = new_value;
	}

	// The recommended display for this item in the expansion.
	get display() {
		return this.__display;
	}

	set display(new_value) {
		this.__display = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			system: this.__system,
			abstract: this.__abstract,
			inactive: this.__inactive,
			version: this.__version,
			code: this.__code,
			display: this.__display,
		});
	}
}

module.exports = ValueSetExpansionContains;
