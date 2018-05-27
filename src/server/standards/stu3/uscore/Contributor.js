const Element = require('./Element');
const ContactDetail = require('./ContactDetail');

class Contributor extends Element {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Contributor';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Contributor';
	}

	// The type of contributor.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['author', 'editor', 'reviewer', 'endorser'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field type`);
		}
		this._type = new_value;
	}

	// The name of the individual or organization responsible for the contribution.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// Contact details to assist a user in finding and communicating with the contributor.
	get contact () {
		return this._contact;
	}

	set contact ( new_value ) {
		this._contact = Array.isArray(new_value) ? new_value.map(val => new ContactDetail(val)) : [new ContactDetail(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this.type,
			name: this.name,
			contact: this.contact && this.contact.map(v => v.toJSON())
		});
	}

}

module.exports = Contributor;
