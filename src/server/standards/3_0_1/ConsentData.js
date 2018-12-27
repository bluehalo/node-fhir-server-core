const BackboneElement = require('./BackboneElement');

class ConsentData extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ConsentData';
		Object.assign(this, opt);
	}

	// This is a ConsentData resource
	static get __resourceType() {
		return 'ConsentData';
	}

	// How the resource reference is interpreted when testing consent restrictions.
	get meaning() {
		return this.__meaning;
	}

	set meaning(new_value) {
		this.__meaning = new_value;
	}

	// A reference to a specific resource that defines which resources are covered by this consent.
	get reference() {
		return this.__reference;
	}

	set reference(new_value) {
		const Reference = require('./Reference');
		this.__reference = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			meaning: this.__meaning,
			reference: this.__reference && this.__reference.toJSON(),
		});
	}
}

module.exports = ConsentData;
