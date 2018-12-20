const BackboneElement = require('./BackboneElement');

class StructureDefinitionDifferential extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'StructureDefinitionDifferential';
		Object.assign(this, opt);
	}

	// This is a StructureDefinitionDifferential resource
	static get __resourceType() {
		return 'StructureDefinitionDifferential';
	}

	// Captures constraints on each element within the resource.
	get element() {
		return this.__element;
	}

	set element(new_value) {
		const ElementDefinition = require('./ElementDefinition');
		this.__element = Array.isArray(new_value)
			? new_value.map(val => new ElementDefinition(val))
			: [new ElementDefinition(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			element: this.__element && this.__element.map(v => v.toJSON()),
		});
	}
}

module.exports = StructureDefinitionDifferential;
