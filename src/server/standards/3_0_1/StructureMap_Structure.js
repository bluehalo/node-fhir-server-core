const BackboneElement = require('./BackboneElement');

class StructureMap_Structure extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'StructureMap_Structure';
	}

	// The canonical URL that identifies the structure.
	get url () {
		return this._url;
	}

	set url ( new_value ) {
		this._url = new_value;
	}

	// How the referenced structure is used in this mapping.
	get mode () {
		return this._mode;
	}

	set mode ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['source', 'queried', 'target', 'produced'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field mode`);
		}
		this._mode = new_value;
	}

	// The name used for this type in the map.
	get alias () {
		return this._alias;
	}

	set alias ( new_value ) {
		this._alias = new_value;
	}

	// Documentation that describes how the structure is used in the mapping.
	get documentation () {
		return this._documentation;
	}

	set documentation ( new_value ) {
		this._documentation = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			url: this._url,
			mode: this._mode,
			alias: this._alias,
			documentation: this._documentation
		});
	}

}

module.exports = StructureMap_Structure;
