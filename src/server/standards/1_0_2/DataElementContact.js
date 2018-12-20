const BackboneElement = require('./BackboneElement');

class DataElementContact extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'DataElementContact';
		Object.assign(this, opt);
	}

	// This is a DataElementContact resource
	static get __resourceType() {
		return 'DataElementContact';
	}

	// The name of an individual to contact regarding the data element.
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

module.exports = DataElementContact;
