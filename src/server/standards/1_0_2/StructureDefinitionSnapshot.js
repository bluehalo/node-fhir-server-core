const BackboneElement = require('./BackboneElement');

class StructureDefinitionSnapshot extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'StructureDefinitionSnapshot';
		Object.assign(this, opt);
	}

	// This is a StructureDefinitionSnapshot resource
	static get __resourceType() {
		return 'StructureDefinitionSnapshot';
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

module.exports = StructureDefinitionSnapshot;
