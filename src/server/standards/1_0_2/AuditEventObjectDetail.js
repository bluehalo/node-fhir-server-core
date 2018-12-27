const BackboneElement = require('./BackboneElement');
const Base64BinaryScalar = require('./scalars/Base64Binary.scalar');

class AuditEventObjectDetail extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'AuditEventObjectDetail';
		Object.assign(this, opt);
	}

	// This is a AuditEventObjectDetail resource
	static get __resourceType() {
		return 'AuditEventObjectDetail';
	}

	// Name of the property.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// Property value.
	get value() {
		return this.__value;
	}

	set value(new_value) {
		// Throw if new value does not match the pattern
		let pattern = Base64BinaryScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field value`);
		}
		this.__value = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type,
			value: this.__value,
		});
	}
}

module.exports = AuditEventObjectDetail;
