const BackboneElement = require('./BackboneElement');
const CodeScalar = require('./scalars/Code.scalar');
const UriScalar = require('./scalars/Uri.scalar');

class ConceptMapGroupUnmapped extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ConceptMapGroupUnmapped';
		Object.assign(this, opt);
	}

	// This is a ConceptMapGroupUnmapped resource
	static get __resourceType() {
		return 'ConceptMapGroupUnmapped';
	}

	// Defines which action to take if there is no match in the group. One of 3 actions is possible: use the unmapped code (this is useful when doing a mapping between versions, and only a few codes have changed), use a fixed code (a default code), or alternatively, a reference to a different concept map can be provided (by canonical URL).
	get mode() {
		return this.__mode;
	}

	set mode(new_value) {
		this.__mode = new_value;
	}

	// The fixed code to use when the mode = \'fixed\'  - all unmapped codes are mapped to a single fixed code.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		// Throw if new value does not match the pattern
		let pattern = CodeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field code`);
		}
		this.__code = new_value;
	}

	// The display for the code. The display is only provided to help editors when editing the concept map.
	get display() {
		return this.__display;
	}

	set display(new_value) {
		this.__display = new_value;
	}

	// The canonical URL of the map to use if this map contains no mapping.
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

	toJSON() {
		return Object.assign(super.toJSON(), {
			mode: this.__mode,
			code: this.__code,
			display: this.__display,
			url: this.__url,
		});
	}
}

module.exports = ConceptMapGroupUnmapped;
