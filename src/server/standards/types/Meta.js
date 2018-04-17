const Element = require('./Element');
const Coding = require('./Coding');

class Meta extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
		
	}

	// versionId	Σ	0..1	id	Version specific identifier
	set versionId(versionId) {
		this._versionId = versionId;
	}

	get versionId() {
		return this._versionId;
	}

	// lastUpdated	Σ	0..1	instant	When the resource version last changed
	set lastUpdated(lastUpdated) {
		this._lastUpdated = lastUpdated;
	}

	get lastUpdated() {
		return this._lastUpdated;
	}

	// profile	Σ	0..*	uri	Profiles this resource claims to conform to
	set profile(profile) {
		this._profile = [].concat(profile);
	}

	get profile() {
		return this._profile;
	}

	// security	Σ	0..*	Coding	Security Labels applied to this resource
	// All Security Labels (Extensible)
	set security(security) {
		if (Array.isArray(security)) {
			this._security = security.map((i) => new Coding(i));
		} else {
			this._security = [new Coding(security)];
		}
	}

	get security() {
		return this._security;
	}

	// tag	Σ	0..*	Coding	Tags applied to this resource
	// Common Tags (Example)
	set tag(tag) {
		if (Array.isArray(tag)) {
			this._tag = tag.map((i) => new Coding(i));
		} else {
			this._tag = [new Coding(tag)];
		}
	}

	get tag() {
		return this._tag;
	}

	toJSON() {
		const json = {
			versionId: this._versionId,
			lastUpdated: this._lastUpdated,
			profile: this._profile,
			security: this._security,
			tag: this._tag,
		};
		
		return Object.assign(super.toJSON(), json);
	}
}

module.exports = Meta;
