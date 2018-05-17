const BackboneElement = require('./BackboneElement');

class Sequence_Repository extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Sequence_Repository';
	}

	// Click and see / RESTful API / Need login to see / RESTful API with authentication / Other ways to see resource.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['directlink', 'openapi', 'login', 'oauth', 'other'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field type`);
		}
		this._type = new_value;
	}

	// URI of an external repository which contains further details about the genetics data.
	get url () {
		return this._url;
	}

	set url ( new_value ) {
		this._url = new_value;
	}

	// URI of an external repository which contains further details about the genetics data.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// Id of the variant in this external repository. The server will understand how to use this id to call for more info about datasets in external repository.
	get datasetId () {
		return this._datasetId;
	}

	set datasetId ( new_value ) {
		this._datasetId = new_value;
	}

	// Id of the variantset in this external repository. The server will understand how to use this id to call for more info about variantsets in external repository.
	get variantsetId () {
		return this._variantsetId;
	}

	set variantsetId ( new_value ) {
		this._variantsetId = new_value;
	}

	// Id of the read in this external repository.
	get readsetId () {
		return this._readsetId;
	}

	set readsetId ( new_value ) {
		this._readsetId = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this._type,
			url: this._url,
			name: this._name,
			datasetId: this._datasetId,
			variantsetId: this._variantsetId,
			readsetId: this._readsetId
		});
	}

}

module.exports = Sequence_Repository;
