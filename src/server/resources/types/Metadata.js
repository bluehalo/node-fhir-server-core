'use strict';

class Meta {

	constructor(obj) {
		Object.assign(this, obj);
	}

	get versionId() {
		return this._versionId;
	}

	// 0..1
	set versionId(versionId) {
		this._versionId = versionId;
	}

	get lastUpdated() {
		return this._lastUpdated;
	}

	// 0..1
	set lastUpdated(lastUpdated) {
		this._lastUpdated = lastUpdated;
	}

	get profile() {
		return this._profile;
	}

	// 0..*
	set profile(profile) {
		this._profile = profile;
	}

	toJSON() {
		return {
			versionId: this._versionId,
			lastUpdated: this._lastUpdated,
			profile: this._profile,
			security: this._security,
			tag: this._tag
		};
	}
}

module.exports = Meta;
