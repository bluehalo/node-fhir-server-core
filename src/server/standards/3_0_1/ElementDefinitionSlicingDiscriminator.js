const Element = require('./Element');

class ElementDefinitionSlicingDiscriminator extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ElementDefinitionSlicingDiscriminator';
		Object.assign(this, opt);
	}

	// This is a ElementDefinitionSlicingDiscriminator resource
	static get __resourceType() {
		return 'ElementDefinitionSlicingDiscriminator';
	}

	// How the element value is interpreted when discrimination is evaluated.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// A FHIRPath expression, using a restricted subset of FHIRPath, that is used to identify the element on which discrimination is based.
	get path() {
		return this.__path;
	}

	set path(new_value) {
		this.__path = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type,
			path: this.__path,
		});
	}
}

module.exports = ElementDefinitionSlicingDiscriminator;
