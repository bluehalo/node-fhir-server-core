const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');
const Period = require('./Period');
const Attachment = require('./Attachment');
const Annotation = require('./Annotation');

class Media extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Media';
	}

	// This is a Media resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['Media'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Identifiers associated with the image - these may include identifiers for the image itself, identifiers for the context of its collection (e.g. series ids) and context ids such as accession numbers or other workflow identifiers.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// A procedure that is fulfilled in whole or in part by the creation of this media.
	get basedOn () {
		return this._basedOn;
	}

	set basedOn ( new_value ) {
		this._basedOn = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Whether the media is a photo (still image), an audio recording, or a video recording.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['photo', 'video', 'audio'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field type`);
		}
		this._type = new_value;
	}

	// Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM system, are wrapped in a Media resource, then this is the modality.
	get subtype () {
		return this._subtype;
	}

	set subtype ( new_value ) {
		this._subtype = new CodeableConcept(new_value);
	}

	// The name of the imaging view e.g. Lateral or Antero-posterior (AP).
	get view () {
		return this._view;
	}

	set view ( new_value ) {
		this._view = new CodeableConcept(new_value);
	}

	// Who/What this Media is a record of.
	get subject () {
		return this._subject;
	}

	set subject ( new_value ) {
		this._subject = new Reference(new_value);
	}

	// The encounter or episode of care that establishes the context for this media.
	get context () {
		return this._context;
	}

	set context ( new_value ) {
		this._context = new Reference(new_value);
	}

	// The date and time(s) at which the media was collected.
	get occurrenceDateTime () {
		return this._occurrenceDateTime;
	}

	set occurrenceDateTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field occurrenceDateTime`);
		}
		this._occurrenceDateTime = new_value;
	}

	// The date and time(s) at which the media was collected.
	get occurrencePeriod () {
		return this._occurrencePeriod;
	}

	set occurrencePeriod ( new_value ) {
		this._occurrencePeriod = new Period(new_value);
	}

	// The person who administered the collection of the image.
	get operator () {
		return this._operator;
	}

	set operator ( new_value ) {
		this._operator = new Reference(new_value);
	}

	// Describes why the event occurred in coded or textual form.
	get reasonCode () {
		return this._reasonCode;
	}

	set reasonCode ( new_value ) {
		this._reasonCode = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Indicates the site on the subject's body where the media was collected (i.e. the target site).
	get bodySite () {
		return this._bodySite;
	}

	set bodySite ( new_value ) {
		this._bodySite = new CodeableConcept(new_value);
	}

	// The device used to collect the media.
	get device () {
		return this._device;
	}

	set device ( new_value ) {
		this._device = new Reference(new_value);
	}

	// Height of the image in pixels (photo/video).
	get height () {
		return this._height;
	}

	set height ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[1-9][0-9]*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field height`);
		}
		this._height = new_value;
	}

	// Width of the image in pixels (photo/video).
	get width () {
		return this._width;
	}

	set width ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[1-9][0-9]*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field width`);
		}
		this._width = new_value;
	}

	// The number of frames in a photo. This is used with a multi-page fax, or an imaging acquisition context that takes multiple slices in a single image, or an animated gif. If there is more than one frame, this SHALL have a value in order to alert interface software that a multi-frame capable rendering widget is required.
	get frames () {
		return this._frames;
	}

	set frames ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[1-9][0-9]*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field frames`);
		}
		this._frames = new_value;
	}

	// The duration of the recording in seconds - for audio and video.
	get duration () {
		return this._duration;
	}

	set duration ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[0]|([1-9][0-9]*)/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field duration`);
		}
		this._duration = new_value;
	}

	// The actual content of the media - inline or by direct reference to the media source file.
	get content () {
		return this._content;
	}

	set content ( new_value ) {
		this._content = new Attachment(new_value);
	}

	// Comments made about the media by the performer, subject or other participants.
	get note () {
		return this._note;
	}

	set note ( new_value ) {
		this._note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier,
			basedOn: this._basedOn,
			type: this._type,
			subtype: this._subtype,
			view: this._view,
			subject: this._subject,
			context: this._context,
			occurrenceDateTime: this._occurrenceDateTime,
			occurrencePeriod: this._occurrencePeriod,
			operator: this._operator,
			reasonCode: this._reasonCode,
			bodySite: this._bodySite,
			device: this._device,
			height: this._height,
			width: this._width,
			frames: this._frames,
			duration: this._duration,
			content: this._content,
			note: this._note
		});
	}

}

module.exports = Media;
