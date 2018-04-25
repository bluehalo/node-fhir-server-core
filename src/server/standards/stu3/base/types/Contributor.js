const Element = require('./Element');
const Code = require('./Code');
const ContactDetail = require('./ContactDetail');

class Contributor extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	// type	Σ	1..1	code	author | editor | reviewer | endorser
	// ContributorType (Required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// name	Σ	1..1	string	Who contributed the content
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// contact	Σ	0..*	ContactDetail	Contact details of the contributor
	set contact(contact) {
		if (Array.isArray(contact)) {
			this._contact = contact.map((i) => new ContactDetail(i));
		} else {
			this._contact = [new ContactDetail(contact)];
		}
	}

	get contact() {
		return this._contact;
	}

	toJSON() {
		const json = {
			type: this._type,
			name: this._name,
			contact: this._contact,
		};

		return Object.assign(super.toJSON(), json);
	}
}

module.exports = Contributor;
