const BackboneElement = require('./BackboneElement');
const ConceptMap_Target = require('./ConceptMap_Target');

class ConceptMap_Element extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ConceptMap_Element';
	}

	// Identity (code or path) or the element/item being mapped.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field code`);
		}
		this._code = new_value;
	}

	// The display for the code. The display is only provided to help editors when editing the concept map.
	get display () {
		return this._display;
	}

	set display ( new_value ) {
		this._display = new_value;
	}

	// A concept from the target value set that this concept maps to.
	get target () {
		return this._target;
	}

	set target ( new_value ) {
		this._target = Array.isArray(new_value) ? new_value.map(val => new ConceptMap_Target(val)) : [new ConceptMap_Target(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			code: this._code,
			display: this._display,
			target: this._target && this._target.map(v => v.toJSON())
		});
	}

}

module.exports = ConceptMap_Element;
