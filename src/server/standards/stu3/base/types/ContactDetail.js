const Element = require('./Element');
const ContactPoint = require('./ContactPoint');

class ContactDetail extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	// name	Σ	0..1	string	Name of an individual to contact
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// telecom	Σ	0..*	ContactPoint	Contact details for individual or organization
	set telecom(telecom) {
		if (Array.isArray(telecom)) {
			this._telecom = telecom.map((i) => new ContactPoint(i));
		} else {
			this._telecom = [new ContactPoint(telecom)];
		}
	}

	get telecom() {
		return this._telecom;
	}

	toJSON() {
		const json = {
			name: this._name,
			telecom: this._telecom,
		};

		return Object.assign(super.toJSON(), json);
	}
}

module.exports = ContactDetail;
