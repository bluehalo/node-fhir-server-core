const BackboneElement = require('./BackboneElement');

class CapabilityStatementRestResource extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'CapabilityStatementRestResource';
		Object.assign(this, opt);
	}

	// This is a CapabilityStatementRestResource resource
	static get __resourceType() {
		return 'CapabilityStatementRestResource';
	}

	// A type of resource exposed via the restful interface.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// A specification of the profile that describes the solution\'s overall support for the resource, including any constraints on cardinality, bindings, lengths or other limitations. See further discussion in [Using Profiles](profiling.html#profile-uses).
	get profile() {
		return this.__profile;
	}

	set profile(new_value) {
		const Reference = require('./Reference');
		this.__profile = new Reference(new_value);
	}

	// Additional information about the resource type used by the system.
	get documentation() {
		return this.__documentation;
	}

	set documentation(new_value) {
		this.__documentation = new_value;
	}

	// Identifies a restful operation supported by the solution.
	get interaction() {
		return this.__interaction;
	}

	set interaction(new_value) {
		const CapabilityStatementRestResourceInteraction = require('./CapabilityStatementRestResourceInteraction');
		this.__interaction = Array.isArray(new_value)
			? new_value.map(val => new CapabilityStatementRestResourceInteraction(val))
			: [new CapabilityStatementRestResourceInteraction(new_value)];
	}

	// This field is set to no-version to specify that the system does not support (server) or use (client) versioning for this resource type. If this has some other value, the server must at least correctly track and populate the versionId meta-property on resources. If the value is \'versioned-update\', then the server supports all the versioning features, including using e-tags for version integrity in the API.
	get versioning() {
		return this.__versioning;
	}

	set versioning(new_value) {
		this.__versioning = new_value;
	}

	// A flag for whether the server is able to return past versions as part of the vRead operation.
	get readHistory() {
		return this.__readHistory;
	}

	set readHistory(new_value) {
		this.__readHistory = new_value;
	}

	// A flag to indicate that the server allows or needs to allow the client to create new identities on the server (e.g. that is, the client PUTs to a location where there is no existing resource). Allowing this operation means that the server allows the client to create new identities on the server.
	get updateCreate() {
		return this.__updateCreate;
	}

	set updateCreate(new_value) {
		this.__updateCreate = new_value;
	}

	// A flag that indicates that the server supports conditional create.
	get conditionalCreate() {
		return this.__conditionalCreate;
	}

	set conditionalCreate(new_value) {
		this.__conditionalCreate = new_value;
	}

	// A code that indicates how the server supports conditional read.
	get conditionalRead() {
		return this.__conditionalRead;
	}

	set conditionalRead(new_value) {
		this.__conditionalRead = new_value;
	}

	// A flag that indicates that the server supports conditional update.
	get conditionalUpdate() {
		return this.__conditionalUpdate;
	}

	set conditionalUpdate(new_value) {
		this.__conditionalUpdate = new_value;
	}

	// A code that indicates how the server supports conditional delete.
	get conditionalDelete() {
		return this.__conditionalDelete;
	}

	set conditionalDelete(new_value) {
		this.__conditionalDelete = new_value;
	}

	// A set of flags that defines how references are supported.
	get referencePolicy() {
		return this.__referencePolicy;
	}

	set referencePolicy(new_value) {
		this.__referencePolicy = Array.isArray(new_value) ? new_value : [new_value];
	}

	// A list of _include values supported by the server.
	get searchInclude() {
		return this.__searchInclude;
	}

	set searchInclude(new_value) {
		this.__searchInclude = Array.isArray(new_value) ? new_value : [new_value];
	}

	// A list of _revinclude (reverse include) values supported by the server.
	get searchRevInclude() {
		return this.__searchRevInclude;
	}

	set searchRevInclude(new_value) {
		this.__searchRevInclude = Array.isArray(new_value) ? new_value : [new_value];
	}

	// Search parameters for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation.
	get searchParam() {
		return this.__searchParam;
	}

	set searchParam(new_value) {
		const CapabilityStatementRestResourceSearchParam = require('./CapabilityStatementRestResourceSearchParam');
		this.__searchParam = Array.isArray(new_value)
			? new_value.map(val => new CapabilityStatementRestResourceSearchParam(val))
			: [new CapabilityStatementRestResourceSearchParam(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type,
			profile: this.__profile && this.__profile.toJSON(),
			documentation: this.__documentation,
			interaction: this.__interaction && this.__interaction.map(v => v.toJSON()),
			versioning: this.__versioning,
			readHistory: this.__readHistory,
			updateCreate: this.__updateCreate,
			conditionalCreate: this.__conditionalCreate,
			conditionalRead: this.__conditionalRead,
			conditionalUpdate: this.__conditionalUpdate,
			conditionalDelete: this.__conditionalDelete,
			referencePolicy: this.__referencePolicy,
			searchInclude: this.__searchInclude,
			searchRevInclude: this.__searchRevInclude,
			searchParam: this.__searchParam && this.__searchParam.map(v => v.toJSON()),
		});
	}
}

module.exports = CapabilityStatementRestResource;
