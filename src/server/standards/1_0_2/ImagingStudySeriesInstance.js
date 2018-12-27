const BackboneElement = require('./BackboneElement');
const UnsignedIntScalar = require('./scalars/UnsignedInt.scalar');
const OidScalar = require('./scalars/Oid.scalar');

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

	// A human-friendly SOP Class name.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// The description of the instance.
	get title() {
		return this.__title;
	}

	set title(new_value) {
		this.__title = new_value;
	}

	// Content of the instance or a rendering thereof (e.g. a JPEG of an image, or an XML of a structured report). May be represented for example by inline encoding; by a URL reference to a WADO-RS service that makes the instance available; or to a FHIR Resource (e.g. Media, Document, etc.). Multiple content attachments may be used for alternate representations of the instance.
	get content() {
		return this.__content;
	}

	set content(new_value) {
		const Attachment = require('./Attachment');
		this.__content = Array.isArray(new_value) ? new_value.map(val => new Attachment(val)) : [new Attachment(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			number: this.__number,
			uid: this.__uid,
			sopClass: this.__sopClass,
			type: this.__type,
			title: this.__title,
			content: this.__content && this.__content.map(v => v.toJSON()),
		});
	}
}

module.exports = ImagingStudySeriesInstance;
