const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');

class MessageDefinition_Focus extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'MessageDefinition_Focus';
	}

	// The kind of resource that must be the focus for this message.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field code`);
		}
		this._code = new_value;
	}

	// A profile that reflects constraints for the focal resource (and potentially for related resources).
	get profile () {
		return this._profile;
	}

	set profile ( new_value ) {
		this._profile = new Reference(new_value);
	}

	// Identifies the minimum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.
	get min () {
		return this._min;
	}

	set min ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[0]|([1-9][0-9]*)/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field min`);
		}
		this._min = new_value;
	}

	// Identifies the maximum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.
	get max () {
		return this._max;
	}

	set max ( new_value ) {
		this._max = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			code: this._code,
			profile: this._profile && this._profile.toJSON(),
			min: this._min,
			max: this._max
		});
	}

}

module.exports = MessageDefinition_Focus;
