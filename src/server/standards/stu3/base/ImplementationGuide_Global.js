const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');

class ImplementationGuide_Global extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ImplementationGuide_Global';
	}

	// The type of resource that all instances must conform to.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field type`);
		}
		this._type = new_value;
	}

	// A reference to the profile that all instances must conform to.
	get profile () {
		return this._profile;
	}

	set profile ( new_value ) {
		this._profile = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this._type,
			profile: this._profile
		});
	}

}

module.exports = ImplementationGuide_Global;
