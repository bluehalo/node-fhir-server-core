const BackboneElement = require('./BackboneElement');

class ConceptMap_Unmapped extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ConceptMap_Unmapped';
	}

	// Defines which action to take if there is no match in the group. One of 3 actions is possible: use the unmapped code (this is useful when doing a mapping between versions, and only a few codes have changed), use a fixed code (a default code), or alternatively, a reference to a different concept map can be provided (by canonical URL).
	get mode () {
		return this._mode;
	}

	set mode ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['provided', 'fixed', 'other-map'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field mode`);
		}
		this._mode = new_value;
	}

	// The fixed code to use when the mode = 'fixed'  - all unmapped codes are mapped to a single fixed code.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
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

	// The canonical URL of the map to use if this map contains no mapping.
	get url () {
		return this._url;
	}

	set url ( new_value ) {
		this._url = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			mode: this._mode,
			code: this._code,
			display: this._display,
			url: this._url
		});
	}

}

module.exports = ConceptMap_Unmapped;
