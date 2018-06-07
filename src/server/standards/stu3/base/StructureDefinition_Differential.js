const BackboneElement = require('./BackboneElement');
const ElementDefinition = require('./ElementDefinition');

class StructureDefinition_Differential extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'StructureDefinition_Differential';
	}

	// Captures constraints on each element within the resource.
	get element () {
		return this._element;
	}

	set element ( new_value ) {
		this._element = Array.isArray(new_value) ? new_value.map(val => new ElementDefinition(val)) : [new ElementDefinition(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			element: this._element
		});
	}

}

module.exports = StructureDefinition_Differential;
