const BackboneElement = require('./BackboneElement');

class ImplementationGuideGlobal extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ImplementationGuideGlobal';
		Object.assign(this, opt);
	}

	// This is a ImplementationGuideGlobal resource
	static get __resourceType() {
		return 'ImplementationGuideGlobal';
	}

	// The type of resource that all instances must conform to.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// A reference to the profile that all instances must conform to.
	get profile() {
		return this.__profile;
	}

	set profile(new_value) {
		const Reference = require('./Reference');
		this.__profile = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type,
			profile: this.__profile && this.__profile.toJSON(),
		});
	}
}

module.exports = ImplementationGuideGlobal;
