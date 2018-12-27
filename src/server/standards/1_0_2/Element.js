const IdScalar = require('./scalars/Id.scalar');

class Element {
	constructor(opt) {
		this.__resourceType = 'Element';
		Object.assign(this, opt);
	}

	// This is a Element resource
	static get __resourceType() {
		return 'Element';
	}

	// unique id for the element within a resource (for internal references).
	get id() {
		return this.__id;
	}

	set id(new_value) {
		// Throw if new value does not match the pattern
		let pattern = IdScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field id`);
		}
		this.__id = new_value;
	}

	// May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
	get extension() {
		return this.__extension;
	}

	set extension(new_value) {
		const Extension = require('./Extension');
		this.__extension = Array.isArray(new_value) ? new_value.map(val => new Extension(val)) : [new Extension(new_value)];
	}

	toJSON() {
		return {
			id: this.__id,
			extension: this.__extension && this.__extension.map(v => v.toJSON()),
		};
	}
}

module.exports = Element;
