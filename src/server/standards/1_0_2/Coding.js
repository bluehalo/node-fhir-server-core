const Element = require('./Element');
const UriScalar = require('./scalars/Uri.scalar');
const CodeScalar = require('./scalars/Code.scalar');

class Coding extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Coding';
		Object.assign(this, opt);
	}

	// This is a Coding resource
	static get __resourceType() {
		return 'Coding';
	}

	// The identification of the code system that defines the meaning of the symbol in the code.
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

	// The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured. and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.
	get version() {
		return this.__version;
	}

	set version(new_value) {
		this.__version = new_value;
	}

	// A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).
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

	// A representation of the meaning of the code in the system, following the rules of the system.
	get display() {
		return this.__display;
	}

	set display(new_value) {
		this.__display = new_value;
	}

	// Indicates that this coding was chosen by a user directly - i.e. off a pick list of available items (codes or displays).
	get userSelected() {
		return this.__userSelected;
	}

	set userSelected(new_value) {
		this.__userSelected = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			system: this.__system,
			version: this.__version,
			code: this.__code,
			display: this.__display,
			userSelected: this.__userSelected,
		});
	}
}

module.exports = Coding;
