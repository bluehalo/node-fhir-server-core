const BackboneElement = require('./BackboneElement');

class ExpansionProfile_FixedVersion extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ExpansionProfile_FixedVersion';
	}

	// The specific system for which to fix the version.
	get system () {
		return this._system;
	}

	set system ( new_value ) {
		this._system = new_value;
	}

	// The version of the code system from which codes in the expansion should be included.
	get version () {
		return this._version;
	}

	set version ( new_value ) {
		this._version = new_value;
	}

	// How to manage the intersection between a fixed version in a value set, and this fixed version of the system in the expansion profile.
	get mode () {
		return this._mode;
	}

	set mode ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['default', 'check', 'override'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field mode`);
		}
		this._mode = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			system: this._system,
			version: this._version,
			mode: this._mode
		});
	}

}

module.exports = ExpansionProfile_FixedVersion;
