const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const HumanName = require('./HumanName');
const ContactPoint = require('./ContactPoint');
const Address = require('./Address');

class Organization_Contact extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Organization_Contact';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Organization_Contact';
	}

	// Indicates a purpose for which the contact can be reached.
	get purpose () {
		return this._purpose;
	}

	set purpose ( new_value ) {
		this._purpose = new CodeableConcept(new_value);
	}

	// A name associated with the contact.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new HumanName(new_value);
	}

	// A contact detail (e.g. a telephone number or an email address) by which the party may be contacted.
	get telecom () {
		return this._telecom;
	}

	set telecom ( new_value ) {
		this._telecom = Array.isArray(new_value) ? new_value.map(val => new ContactPoint(val)) : [new ContactPoint(new_value)];
	}

	// Visiting or postal addresses for the contact.
	get address () {
		return this._address;
	}

	set address ( new_value ) {
		this._address = new Address(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			purpose: this.purpose && this.purpose.toJSON(),
			name: this.name && this.name.toJSON(),
			telecom: this.telecom && this.telecom.map(v => v.toJSON()),
			address: this.address && this.address.toJSON()
		});
	}

}

module.exports = Organization_Contact;
