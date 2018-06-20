const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');
const CapabilityStatement_Interaction = require('./CapabilityStatement_Interaction');
const CapabilityStatement_SearchParam = require('./CapabilityStatement_SearchParam');

class CapabilityStatement_Resource extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'CapabilityStatement_Resource';
	}

	// A type of resource exposed via the restful interface.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field type`);
		}
		this._type = new_value;
	}

	// A specification of the profile that describes the solution's overall support for the resource, including any constraints on cardinality, bindings, lengths or other limitations. See further discussion in [Using Profiles](profiling.html#profile-uses).
	get profile () {
		return this._profile;
	}

	set profile ( new_value ) {
		this._profile = new Reference(new_value);
	}

	// Additional information about the resource type used by the system.
	get documentation () {
		return this._documentation;
	}

	set documentation ( new_value ) {
		this._documentation = new_value;
	}

	// Identifies a restful operation supported by the solution.
	get interaction () {
		return this._interaction;
	}

	set interaction ( new_value ) {
		this._interaction = Array.isArray(new_value) ? new_value.map(val => new CapabilityStatement_Interaction(val)) : [new CapabilityStatement_Interaction(new_value)];
	}

	// This field is set to no-version to specify that the system does not support (server) or use (client) versioning for this resource type. If this has some other value, the server must at least correctly track and populate the versionId meta-property on resources. If the value is 'versioned-update', then the server supports all the versioning features, including using e-tags for version integrity in the API.
	get versioning () {
		return this._versioning;
	}

	set versioning ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['no-version', 'versioned', 'versioned-update'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field versioning`);
		}
		this._versioning = new_value;
	}

	// A flag for whether the server is able to return past versions as part of the vRead operation.
	get readHistory () {
		return this._readHistory;
	}

	set readHistory ( new_value ) {
		this._readHistory = new_value;
	}

	// A flag to indicate that the server allows or needs to allow the client to create new identities on the server (e.g. that is, the client PUTs to a location where there is no existing resource). Allowing this operation means that the server allows the client to create new identities on the server.
	get updateCreate () {
		return this._updateCreate;
	}

	set updateCreate ( new_value ) {
		this._updateCreate = new_value;
	}

	// A flag that indicates that the server supports conditional create.
	get conditionalCreate () {
		return this._conditionalCreate;
	}

	set conditionalCreate ( new_value ) {
		this._conditionalCreate = new_value;
	}

	// A code that indicates how the server supports conditional read.
	get conditionalRead () {
		return this._conditionalRead;
	}

	set conditionalRead ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['not-supported', 'modified-since', 'not-match', 'full-support'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field conditionalRead`);
		}
		this._conditionalRead = new_value;
	}

	// A flag that indicates that the server supports conditional update.
	get conditionalUpdate () {
		return this._conditionalUpdate;
	}

	set conditionalUpdate ( new_value ) {
		this._conditionalUpdate = new_value;
	}

	// A code that indicates how the server supports conditional delete.
	get conditionalDelete () {
		return this._conditionalDelete;
	}

	set conditionalDelete ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['not-supported', 'single', 'multiple'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field conditionalDelete`);
		}
		this._conditionalDelete = new_value;
	}

	// A set of flags that defines how references are supported.
	get referencePolicy () {
		return this._referencePolicy;
	}

	set referencePolicy ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['literal', 'logical', 'resolves', 'enforced', 'local'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field referencePolicy`);
		}
		this._referencePolicy = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// A list of _include values supported by the server.
	get searchInclude () {
		return this._searchInclude;
	}

	set searchInclude ( new_value ) {
		this._searchInclude = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// A list of _revinclude (reverse include) values supported by the server.
	get searchRevInclude () {
		return this._searchRevInclude;
	}

	set searchRevInclude ( new_value ) {
		this._searchRevInclude = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// Search parameters for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation.
	get searchParam () {
		return this._searchParam;
	}

	set searchParam ( new_value ) {
		this._searchParam = Array.isArray(new_value) ? new_value.map(val => new CapabilityStatement_SearchParam(val)) : [new CapabilityStatement_SearchParam(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this._type,
			profile: this._profile,
			documentation: this._documentation,
			interaction: this._interaction,
			versioning: this._versioning,
			readHistory: this._readHistory,
			updateCreate: this._updateCreate,
			conditionalCreate: this._conditionalCreate,
			conditionalRead: this._conditionalRead,
			conditionalUpdate: this._conditionalUpdate,
			conditionalDelete: this._conditionalDelete,
			referencePolicy: this._referencePolicy,
			searchInclude: this._searchInclude,
			searchRevInclude: this._searchRevInclude,
			searchParam: this._searchParam
		});
	}

}

module.exports = CapabilityStatement_Resource;
