const Element = require('./Element');

class Contributor extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Contributor';
		Object.assign(this, opt);
	}

	// This is a Contributor resource
	static get __resourceType() {
		return 'Contributor';
	}

	// The type of contributor.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// The name of the individual or organization responsible for the contribution.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// Contact details to assist a user in finding and communicating with the contributor.
	get contact() {
		return this.__contact;
	}

	set contact(new_value) {
		const ContactDetail = require('./ContactDetail');
		this.__contact = Array.isArray(new_value)
			? new_value.map(val => new ContactDetail(val))
			: [new ContactDetail(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type,
			name: this.__name,
			contact: this.__contact && this.__contact.map(v => v.toJSON()),
		});
	}
}

module.exports = Contributor;
