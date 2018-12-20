const BackboneElement = require('./BackboneElement');
const OidScalar = require('./scalars/Oid.scalar');
const UnsignedIntScalar = require('./scalars/UnsignedInt.scalar');

class ImagingStudySeriesInstance extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ImagingStudySeriesInstance';
		Object.assign(this, opt);
	}

	// This is a ImagingStudySeriesInstance resource
	static get __resourceType() {
		return 'ImagingStudySeriesInstance';
	}

	// Formal identifier for this image or other content.
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

	// The number of instance in the series.
	get number() {
		return this.__number;
	}

	set number(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UnsignedIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field number`);
		}
		this.__number = new_value;
	}

	// DICOM instance  type.
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

	// The description of the instance.
	get title() {
		return this.__title;
	}

	set title(new_value) {
		this.__title = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			uid: this.__uid,
			number: this.__number,
			sopClass: this.__sopClass,
			title: this.__title,
		});
	}
}

module.exports = ImagingStudySeriesInstance;
