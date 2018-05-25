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
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value is not in the allowed values
		let allowed_values = ['author', 'editor', 'reviewer', 'endorser'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field type`);
		}
		this._type = new_value;
	}

	// The name of the individual or organization responsible for the contribution.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._name = new_value;
	}

	// Contact details to assist a user in finding and communicating with the contributor.
	get contact () {
		return this._contact;
	}

	set contact ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._contact = Array.isArray(new_value) ? new_value.map(val => new ContactDetail(val)) : [new ContactDetail(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this.type,
			name: this.name,
			contact: this.contact && this.contact.toJSON()
		});
	}

}

module.exports = Contributor;
