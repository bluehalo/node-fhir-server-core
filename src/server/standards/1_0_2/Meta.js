const Element = require('./Element');
const IdScalar = require('./scalars/Id.scalar');
const InstantScalar = require('./scalars/Instant.scalar');
const UriScalar = require('./scalars/Uri.scalar');

class Meta extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Meta';
		Object.assign(this, opt);
	}

	// This is a Meta resource
	static get __resourceType() {
		return 'Meta';
	}

	// The version specific identifier, as it appears in the version portion of the URL. This values changes when the resource is created, updated, or deleted.
	get versionId() {
		return this.__versionId;
	}

	set versionId(new_value) {
		// Throw if new value does not match the pattern
		let pattern = IdScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field versionId`);
		}
		this.__versionId = new_value;
	}

	// When the resource last changed - e.g. when the version changed.
	get lastUpdated() {
		return this.__lastUpdated;
	}

	set lastUpdated(new_value) {
		// Throw if new value does not match the pattern
		let pattern = InstantScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field lastUpdated`);
		}
		this.__lastUpdated = new_value;
	}

	// A list of profiles [[[StructureDefinition]]]s that this resource claims to conform to. The URL is a reference to [[[StructureDefinition.url]]].
	get profile() {
		return this.__profile;
	}

	set profile(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field profile`);
		}
		this.__profile = Array.isArray(new_value) ? new_value : [new_value];
	}

	// Security labels applied to this resource. These tags connect specific resources to the overall security policy and infrastructure.
	get security() {
		return this.__security;
	}

	set security(new_value) {
		const Coding = require('./Coding');
		this.__security = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// Tags applied to this resource. Tags are intended to be used to identify and relate resources to process and workflow, and applications are not required to consider the tags when interpreting the meaning of a resource.
	get tag() {
		return this.__tag;
	}

	set tag(new_value) {
		const Coding = require('./Coding');
		this.__tag = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			versionId: this.__versionId,
			lastUpdated: this.__lastUpdated,
			profile: this.__profile,
			security: this.__security && this.__security.map(v => v.toJSON()),
			tag: this.__tag && this.__tag.map(v => v.toJSON()),
		});
	}
}

module.exports = Meta;
