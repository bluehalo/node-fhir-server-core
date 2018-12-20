const BackboneElement = require('./BackboneElement');
const IdScalar = require('./scalars/Id.scalar');

class StructureMapGroupInput extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'StructureMapGroupInput';
		Object.assign(this, opt);
	}

	// This is a StructureMapGroupInput resource
	static get __resourceType() {
		return 'StructureMapGroupInput';
	}

	// Name for this instance of data.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		// Throw if new value does not match the pattern
		let pattern = IdScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field name`);
		}
		this.__name = new_value;
	}

	// Type for this instance of data.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// Mode for this instance of data.
	get mode() {
		return this.__mode;
	}

	set mode(new_value) {
		this.__mode = new_value;
	}

	// Documentation for this instance of data.
	get documentation() {
		return this.__documentation;
	}

	set documentation(new_value) {
		this.__documentation = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			name: this.__name,
			type: this.__type,
			mode: this.__mode,
			documentation: this.__documentation,
		});
	}
}

module.exports = StructureMapGroupInput;
