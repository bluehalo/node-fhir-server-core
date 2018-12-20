const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class StructureMapStructure extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'StructureMapStructure';
		Object.assign(this, opt);
	}

	// This is a StructureMapStructure resource
	static get __resourceType() {
		return 'StructureMapStructure';
	}

	// The canonical URL that identifies the structure.
	get url() {
		return this.__url;
	}

	set url(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field url`);
		}
		this.__url = new_value;
	}

	// How the referenced structure is used in this mapping.
	get mode() {
		return this.__mode;
	}

	set mode(new_value) {
		this.__mode = new_value;
	}

	// The name used for this type in the map.
	get alias() {
		return this.__alias;
	}

	set alias(new_value) {
		this.__alias = new_value;
	}

	// Documentation that describes how the structure is used in the mapping.
	get documentation() {
		return this.__documentation;
	}

	set documentation(new_value) {
		this.__documentation = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			url: this.__url,
			mode: this.__mode,
			alias: this.__alias,
			documentation: this.__documentation,
		});
	}
}

module.exports = StructureMapStructure;
