const DomainResource = require('./DomainResource');
const PositiveIntScalar = require('./scalars/PositiveInt.scalar');
const UnsignedIntScalar = require('./scalars/UnsignedInt.scalar');

class Media extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Media';
		Object.assign(this, opt);
	}

	// This is a Media resource
	static get __resourceType() {
		return 'Media';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Media = new_value;
	}

	// Whether the media is a photo (still image), an audio recording, or a video recording.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM system, are wrapped in a Media resource, then this is the modality.
	get subtype() {
		return this.__subtype;
	}

	set subtype(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__subtype = new CodeableConcept(new_value);
	}

	// Identifiers associated with the image - these may include identifiers for the image itself, identifiers for the context of its collection (e.g. series ids) and context ids such as accession numbers or other workflow identifiers.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// Who/What this Media is a record of.
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// The person who administered the collection of the image.
	get operator() {
		return this.__operator;
	}

	set operator(new_value) {
		const Reference = require('./Reference');
		this.__operator = new Reference(new_value);
	}

	// The name of the imaging view e.g. Lateral or Antero-posterior (AP).
	get view() {
		return this.__view;
	}

	set view(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__view = new CodeableConcept(new_value);
	}

	// The name of the device / manufacturer of the device  that was used to make the recording.
	get deviceName() {
		return this.__deviceName;
	}

	set deviceName(new_value) {
		this.__deviceName = new_value;
	}

	// Height of the image in pixels (photo/video).
	get height() {
		return this.__height;
	}

	set height(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field height`);
		}
		this.__height = new_value;
	}

	// Width of the image in pixels (photo/video).
	get width() {
		return this.__width;
	}

	set width(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field width`);
		}
		this.__width = new_value;
	}

	// The number of frames in a photo. This is used with a multi-page fax, or an imaging acquisition context that takes multiple slices in a single image, or an animated gif. If there is more than one frame, this SHALL have a value in order to alert interface software that a multi-frame capable rendering widget is required.
	get frames() {
		return this.__frames;
	}

	set frames(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field frames`);
		}
		this.__frames = new_value;
	}

	// The duration of the recording in seconds - for audio and video.
	get duration() {
		return this.__duration;
	}

	set duration(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UnsignedIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field duration`);
		}
		this.__duration = new_value;
	}

	// The actual content of the media - inline or by direct reference to the media source file.
	get content() {
		return this.__content;
	}

	set content(new_value) {
		const Attachment = require('./Attachment');
		this.__content = new Attachment(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			type: this.__type,
			subtype: this.__subtype && this.__subtype.toJSON(),
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			subject: this.__subject && this.__subject.toJSON(),
			operator: this.__operator && this.__operator.toJSON(),
			view: this.__view && this.__view.toJSON(),
			deviceName: this.__deviceName,
			height: this.__height,
			width: this.__width,
			frames: this.__frames,
			duration: this.__duration,
			content: this.__content && this.__content.toJSON(),
		});
	}
}

module.exports = Media;
