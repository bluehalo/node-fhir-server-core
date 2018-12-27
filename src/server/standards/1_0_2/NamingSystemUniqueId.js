const BackboneElement = require('./BackboneElement');

class NamingSystemUniqueId extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'NamingSystemUniqueId';
		Object.assign(this, opt);
	}

	// This is a NamingSystemUniqueId resource
	static get __resourceType() {
		return 'NamingSystemUniqueId';
	}

	// Identifies the unique identifier scheme used for this particular identifier.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// The string that should be sent over the wire to identify the code system or identifier system.
	get value() {
		return this.__value;
	}

	set value(new_value) {
		this.__value = new_value;
	}

	// Indicates whether this identifier is the \'preferred\' identifier of this type.
	get preferred() {
		return this.__preferred;
	}

	set preferred(new_value) {
		this.__preferred = new_value;
	}

	// Identifies the period of time over which this identifier is considered appropriate to refer to the naming system.  Outside of this window, the identifier might be non-deterministic.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type,
			value: this.__value,
			preferred: this.__preferred,
			period: this.__period && this.__period.toJSON(),
		});
	}
}

module.exports = NamingSystemUniqueId;
