const BackboneElement = require('./BackboneElement');

class ConformanceRestInteraction extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ConformanceRestInteraction';
		Object.assign(this, opt);
	}

	// This is a ConformanceRestInteraction resource
	static get __resourceType() {
		return 'ConformanceRestInteraction';
	}

	// A coded identifier of the operation, supported by the system.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		this.__code = new_value;
	}

	// Guidance specific to the implementation of this operation, such as limitations on the kind of transactions allowed, or information about system wide search is implemented.
	get documentation() {
		return this.__documentation;
	}

	set documentation(new_value) {
		this.__documentation = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			code: this.__code,
			documentation: this.__documentation,
		});
	}
}

module.exports = ConformanceRestInteraction;
