const BackboneElement = require('./BackboneElement');

class ExpansionProfile_ExcludedSystem extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ExpansionProfile_ExcludedSystem';
	}

	// An absolute URI which is the code system to be excluded.
	get system () {
		return this._system;
	}

	set system ( new_value ) {
		this._system = new_value;
	}

	// The version of the code system from which codes in the expansion should be excluded.
	get version () {
		return this._version;
	}

	set version ( new_value ) {
		this._version = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			system: this._system,
			version: this._version
		});
	}

}

module.exports = ExpansionProfile_ExcludedSystem;
