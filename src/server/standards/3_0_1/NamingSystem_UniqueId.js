const BackboneElement = require('./BackboneElement');
const Period = require('./Period');

class NamingSystem_UniqueId extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'NamingSystem_UniqueId';
	}

	// Identifies the unique identifier scheme used for this particular identifier.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['oid', 'uuid', 'uri', 'other'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field type`);
		}
		this._type = new_value;
	}

	// The string that should be sent over the wire to identify the code system or identifier system.
	get value () {
		return this._value;
	}

	set value ( new_value ) {
		this._value = new_value;
	}

	// Indicates whether this identifier is the "preferred" identifier of this type.
	get preferred () {
		return this._preferred;
	}

	set preferred ( new_value ) {
		this._preferred = new_value;
	}

	// Notes about the past or intended usage of this identifier.
	get comment () {
		return this._comment;
	}

	set comment ( new_value ) {
		this._comment = new_value;
	}

	// Identifies the period of time over which this identifier is considered appropriate to refer to the naming system.  Outside of this window, the identifier might be non-deterministic.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		this._period = new Period(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this._type,
			value: this._value,
			preferred: this._preferred,
			comment: this._comment,
			period: this._period && this._period.toJSON()
		});
	}

}

module.exports = NamingSystem_UniqueId;
