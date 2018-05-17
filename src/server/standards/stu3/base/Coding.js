const Element = require('./Element');

class Coding extends Element {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Coding';
	}

	// The identification of the code system that defines the meaning of the symbol in the code.
	get system () {
		return this._system;
	}

	set system ( new_value ) {
		this._system = new_value;
	}

	// The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured. and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.
	get version () {
		return this._version;
	}

	set version ( new_value ) {
		this._version = new_value;
	}

	// A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field code`);
		}
		this._code = new_value;
	}

	// A representation of the meaning of the code in the system, following the rules of the system.
	get display () {
		return this._display;
	}

	set display ( new_value ) {
		this._display = new_value;
	}

	// Indicates that this coding was chosen by a user directly - i.e. off a pick list of available items (codes or displays).
	get userSelected () {
		return this._userSelected;
	}

	set userSelected ( new_value ) {
		this._userSelected = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			system: this._system,
			version: this._version,
			code: this._code,
			display: this._display,
			userSelected: this._userSelected
		});
	}

}

module.exports = Coding;
