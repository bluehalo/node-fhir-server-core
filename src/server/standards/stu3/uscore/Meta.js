const Element = require('./Element');
const Coding = require('./Coding');

class Meta extends Element {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Meta';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Meta';
	}

	// The version specific identifier, as it appears in the version portion of the URL. This values changes when the resource is created, updated, or deleted.
	get versionId () {
		return this._versionId;
	}

	set versionId ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[A-Za-z0-9\-\.]{1,64}/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field versionId`);
		}
		this._versionId = new_value;
	}

	// When the resource last changed - e.g. when the version changed.
	get lastUpdated () {
		return this._lastUpdated;
	}

	set lastUpdated ( new_value ) {
		this._lastUpdated = new_value;
	}

	// A list of profiles (references to [[[StructureDefinition]]] resources) that this resource claims to conform to. The URL is a reference to [[[StructureDefinition.url]]].
	get profile () {
		return this._profile;
	}

	set profile ( new_value ) {
		this._profile = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// Security labels applied to this resource. These tags connect specific resources to the overall security policy and infrastructure.
	get security () {
		return this._security;
	}

	set security ( new_value ) {
		this._security = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// Tags applied to this resource. Tags are intended to be used to identify and relate resources to process and workflow, and applications are not required to consider the tags when interpreting the meaning of a resource.
	get tag () {
		return this._tag;
	}

	set tag ( new_value ) {
		this._tag = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			versionId: this.versionId,
			lastUpdated: this.lastUpdated,
			profile: this.profile,
			security: this.security && this.security.map(v => v.toJSON()),
			tag: this.tag && this.tag.map(v => v.toJSON())
		});
	}

}

module.exports = Meta;
