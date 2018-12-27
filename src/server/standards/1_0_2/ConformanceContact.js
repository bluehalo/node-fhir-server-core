const BackboneElement = require('./BackboneElement');

class ConformanceContact extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ConformanceContact';
		Object.assign(this, opt);
	}

	// This is a ConformanceContact resource
	static get __resourceType() {
		return 'ConformanceContact';
	}

	// The name of an individual to contact regarding the conformance.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// Contact details for individual (if a name was provided) or the publisher.
	get telecom() {
		return this.__telecom;
	}

	set telecom(new_value) {
		const ContactPoint = require('./ContactPoint');
		this.__telecom = Array.isArray(new_value)
			? new_value.map(val => new ContactPoint(val))
			: [new ContactPoint(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			name: this.__name,
			telecom: this.__telecom && this.__telecom.map(v => v.toJSON()),
		});
	}
}

module.exports = ConformanceContact;
