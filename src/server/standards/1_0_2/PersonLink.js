const BackboneElement = require('./BackboneElement');

class PersonLink extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'PersonLink';
		Object.assign(this, opt);
	}

	// This is a PersonLink resource
	static get __resourceType() {
		return 'PersonLink';
	}

	// The resource to which this actual person is associated.
	get target() {
		return this.__target;
	}

	set target(new_value) {
		const Reference = require('./Reference');
		this.__target = new Reference(new_value);
	}

	// Level of assurance that this link is actually associated with the target resource.
	get assurance() {
		return this.__assurance;
	}

	set assurance(new_value) {
		this.__assurance = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			target: this.__target && this.__target.toJSON(),
			assurance: this.__assurance,
		});
	}
}

module.exports = PersonLink;
