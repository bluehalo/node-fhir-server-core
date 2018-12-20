const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class SequenceRepository extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'SequenceRepository';
		Object.assign(this, opt);
	}

	// This is a SequenceRepository resource
	static get __resourceType() {
		return 'SequenceRepository';
	}

	// Click and see / RESTful API / Need login to see / RESTful API with authentication / Other ways to see resource.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// URI of an external repository which contains further details about the genetics data.
	get url() {
		return this.__url;
	}

	set url(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field url`);
		}
		this.__url = new_value;
	}

	// URI of an external repository which contains further details about the genetics data.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// Id of the variant in this external repository. The server will understand how to use this id to call for more info about datasets in external repository.
	get datasetId() {
		return this.__datasetId;
	}

	set datasetId(new_value) {
		this.__datasetId = new_value;
	}

	// Id of the variantset in this external repository. The server will understand how to use this id to call for more info about variantsets in external repository.
	get variantsetId() {
		return this.__variantsetId;
	}

	set variantsetId(new_value) {
		this.__variantsetId = new_value;
	}

	// Id of the read in this external repository.
	get readsetId() {
		return this.__readsetId;
	}

	set readsetId(new_value) {
		this.__readsetId = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type,
			url: this.__url,
			name: this.__name,
			datasetId: this.__datasetId,
			variantsetId: this.__variantsetId,
			readsetId: this.__readsetId,
		});
	}
}

module.exports = SequenceRepository;
