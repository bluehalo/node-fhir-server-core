const BackboneElement = require('./BackboneElement');

class DataElement_Mapping extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'DataElement_Mapping';
	}

	// An internal id that is used to identify this mapping set when specific mappings are made on a per-element basis.
	get identity () {
		return this._identity;
	}

	set identity ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[A-Za-z0-9\-\.]{1,64}/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field identity`);
		}
		this._identity = new_value;
	}

	// An absolute URI that identifies the specification that this mapping is expressed to.
	get uri () {
		return this._uri;
	}

	set uri ( new_value ) {
		this._uri = new_value;
	}

	// A name for the specification that is being mapped to.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// Comments about this mapping, including version notes, issues, scope limitations, and other important notes for usage.
	get comment () {
		return this._comment;
	}

	set comment ( new_value ) {
		this._comment = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			identity: this._identity,
			uri: this._uri,
			name: this._name,
			comment: this._comment
		});
	}

}

module.exports = DataElement_Mapping;
