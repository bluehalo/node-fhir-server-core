const BackboneElement = require('./BackboneElement');
const ElementDefinition = require('./ElementDefinition');

class StructureDefinition_Snapshot extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'StructureDefinition_Snapshot';
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
			element: this._element && this._element.map(v => v.toJSON())
		});
	}

}

module.exports = StructureDefinition_Snapshot;
