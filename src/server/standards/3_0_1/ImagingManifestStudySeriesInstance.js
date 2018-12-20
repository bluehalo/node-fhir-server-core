const BackboneElement = require('./BackboneElement');
const OidScalar = require('./scalars/Oid.scalar');

class ImagingManifestStudySeriesInstance extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ImagingManifestStudySeriesInstance';
		Object.assign(this, opt);
	}

	// This is a ImagingManifestStudySeriesInstance resource
	static get __resourceType() {
		return 'ImagingManifestStudySeriesInstance';
	}

	// SOP class UID of the selected instance.
	get sopClass() {
		return this.__sopClass;
	}

	set sopClass(new_value) {
		// Throw if new value does not match the pattern
		let pattern = OidScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field sopClass`);
		}
		this.__sopClass = new_value;
	}

	// SOP Instance UID of the selected instance.
	get uid() {
		return this.__uid;
	}

	set uid(new_value) {
		// Throw if new value does not match the pattern
		let pattern = OidScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field uid`);
		}
		this.__uid = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			sopClass: this.__sopClass,
			uid: this.__uid,
		});
	}
}

module.exports = ImagingManifestStudySeriesInstance;
