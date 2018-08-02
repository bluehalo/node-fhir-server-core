const BackboneElement = require('./BackboneElement');
const ConceptMap_DependsOn = require('./ConceptMap_DependsOn');

class ConceptMap_Target extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ConceptMap_Target';
	}

	// Identity (code or path) or the element/item that the map refers to.
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

	// The equivalence between the source and target concepts (counting for the dependencies and products). The equivalence is read from target to source (e.g. the target is 'wider' than the source).
	get equivalence () {
		return this._equivalence;
	}

	set equivalence ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['relatedto', 'equivalent', 'equal', 'wider', 'subsumes', 'narrower', 'specializes', 'inexact', 'unmatched', 'disjoint'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field equivalence`);
		}
		this._equivalence = new_value;
	}

	// A description of status/issues in mapping that conveys additional information not represented in  the structured data.
	get comment () {
		return this._comment;
	}

	set comment ( new_value ) {
		this._comment = new_value;
	}

	// A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.
	get dependsOn () {
		return this._dependsOn;
	}

	set dependsOn ( new_value ) {
		this._dependsOn = Array.isArray(new_value) ? new_value.map(val => new ConceptMap_DependsOn(val)) : [new ConceptMap_DependsOn(new_value)];
	}

	// A set of additional outcomes from this mapping to other elements. To properly execute this mapping, the specified element must be mapped to some data element or source that is in context. The mapping may still be useful without a place for the additional data elements, but the equivalence cannot be relied on.
	get product () {
		return this._product;
	}

	set product ( new_value ) {
		this._product = Array.isArray(new_value) ? new_value.map(val => new ConceptMap_DependsOn(val)) : [new ConceptMap_DependsOn(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			code: this._code,
			display: this._display,
			equivalence: this._equivalence,
			comment: this._comment,
			dependsOn: this._dependsOn && this._dependsOn.map(v => v.toJSON()),
			product: this._product && this._product.map(v => v.toJSON())
		});
	}

}

module.exports = ConceptMap_Target;
