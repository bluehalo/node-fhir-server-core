const Element = require('./Element');
const Meta = require('./Meta');

class Resource extends Element {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Resource';
	}

	// The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
	get id () {
		return this._id;
	}

	set id ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[A-Za-z0-9\-\.]{1,64}/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field id`);
		}
		this._id = new_value;
	}

	// The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.
	get meta () {
		return this._meta;
	}

	set meta ( new_value ) {
		this._meta = new Meta(new_value);
	}

	// A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.
	get implicitRules () {
		return this._implicitRules;
	}

	set implicitRules ( new_value ) {
		this._implicitRules = new_value;
	}

	// The base language in which the resource is written.
	get language () {
		return this._language;
	}

	set language ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field language`);
		}
		this._language = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			id: this._id,
			meta: this._meta,
			implicitRules: this._implicitRules,
			language: this._language
		});
	}

}

module.exports = Resource;
