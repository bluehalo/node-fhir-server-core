const BackboneElement = require('./BackboneElement');

class ConceptMap_DependsOn extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ConceptMap_DependsOn';
	}

	// A reference to an element that holds a coded value that corresponds to a code system property. The idea is that the information model carries an element somwhere that is labeled to correspond with a code system property.
	get property () {
		return this._property;
	}

	set property ( new_value ) {
		this._property = new_value;
	}

	// An absolute URI that identifies the code system of the dependency code (if the source/dependency is a value set that crosses code systems).
	get system () {
		return this._system;
	}

	set system ( new_value ) {
		this._system = new_value;
	}

	// Identity (code or path) or the element/item/ValueSet that the map depends on / refers to.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		this._code = new_value;
	}

	// The display for the code. The display is only provided to help editors when editing the concept map.
	get display () {
		return this._display;
	}

	set display ( new_value ) {
		this._display = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			property: this._property,
			system: this._system,
			code: this._code,
			display: this._display
		});
	}

}

module.exports = ConceptMap_DependsOn;
