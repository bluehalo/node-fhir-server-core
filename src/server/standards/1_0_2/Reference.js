const Element = require('./Element');

class Reference extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Reference';
		Object.assign(this, opt);
	}

	// This is a Reference resource
	static get __resourceType() {
		return 'Reference';
	}

	// A reference to a location at which the other resource is found. The reference may be a relative reference, in which case it is relative to the service base URL, or an absolute URL that resolves to the location where the resource is found. The reference may be version specific or not. If the reference is not to a FHIR RESTful server, then it should be assumed to be version specific. Internal fragment references (start with \'#\') refer to contained resources.
	get reference() {
		return this.__reference;
	}

	set reference(new_value) {
		this.__reference = new_value;
	}

	// Plain text narrative that identifies the resource in addition to the resource reference.
	get display() {
		return this.__display;
	}

	set display(new_value) {
		this.__display = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			reference: this.__reference,
			display: this.__display,
		});
	}
}

module.exports = Reference;
