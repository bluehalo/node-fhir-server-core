const Element = require('./Element');

class ElementDefinitionBase extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ElementDefinitionBase';
		Object.assign(this, opt);
	}

	// This is a ElementDefinitionBase resource
	static get __resourceType() {
		return 'ElementDefinitionBase';
	}

	// The Path that identifies the base element - this matches the ElementDefinition.path for that element. Across FHIR, there is only one base definition of any element - that is, an element definition on a [[[StructureDefinition]]] without a StructureDefinition.base.
	get path() {
		return this.__path;
	}

	set path(new_value) {
		this.__path = new_value;
	}

	// Minimum cardinality of the base element identified by the path.
	get min() {
		return this.__min;
	}

	set min(new_value) {
		this.__min = new_value;
	}

	// Maximum cardinality of the base element identified by the path.
	get max() {
		return this.__max;
	}

	set max(new_value) {
		this.__max = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			path: this.__path,
			min: this.__min,
			max: this.__max,
		});
	}
}

module.exports = ElementDefinitionBase;
