const BackboneElement = require('./BackboneElement');
const UnsignedIntScalar = require('./scalars/UnsignedInt.scalar');

class MessageDefinitionFocus extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MessageDefinitionFocus';
		Object.assign(this, opt);
	}

	// This is a MessageDefinitionFocus resource
	static get __resourceType() {
		return 'MessageDefinitionFocus';
	}

	// The kind of resource that must be the focus for this message.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		this.__code = new_value;
	}

	// A profile that reflects constraints for the focal resource (and potentially for related resources).
	get profile() {
		return this.__profile;
	}

	set profile(new_value) {
		const Reference = require('./Reference');
		this.__profile = new Reference(new_value);
	}

	// Identifies the minimum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.
	get min() {
		return this.__min;
	}

	set min(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UnsignedIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field min`);
		}
		this.__min = new_value;
	}

	// Identifies the maximum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.
	get max() {
		return this.__max;
	}

	set max(new_value) {
		this.__max = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			code: this.__code,
			profile: this.__profile && this.__profile.toJSON(),
			min: this.__min,
			max: this.__max,
		});
	}
}

module.exports = MessageDefinitionFocus;
