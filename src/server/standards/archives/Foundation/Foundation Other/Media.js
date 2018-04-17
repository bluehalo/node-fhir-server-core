const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Reference = require('./types/Reference');
const Code = require('./types/Code');
const CodeableConcept = require('./types/CodeableConcept');
const Period = require('./types/Period');
const Attachment = require('./types/Attachment');
const Annotation = require('./types/Annotation');

class Media extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Media';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	Identifier	Identifier(s) for the image
	set identifier(identifier) {
		if (Array.isArray(identifier)) {
			this._identifier = identifier.map((i) => new Identifier(i));
		} else {
			this._identifier = [new Identifier(identifier)];
		}
	}

	get identifier() {
		return this._identifier;
	}

	// basedOn	Σ	0..*	Reference(ProcedureRequest)	Procedure that caused this media to be created
	set basedOn(basedOn) {
		if (Array.isArray(basedOn)) {
			this._basedOn = basedOn.map((i) => new Reference(i));
		} else {
			this._basedOn = [new Reference(basedOn)];
		}
	}

	get basedOn() {
		return this._basedOn;
	}

	// type	Σ	1..1	code	photo | video | audio
	// DigitalMediaType (Required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// subtype	Σ	0..1	CodeableConcept	The type of acquisition equipment/process
	// Media SubType (Example)
	set subtype(subtype) {
		this._subtype = new CodeableConcept(subtype);
	}

	get subtype() {
		return this._subtype;
	}

	// view	Σ	0..1	CodeableConcept	Imaging view, e.g. Lateral or Antero-posterior
	// Media Collection View/Projection (Example)
	set view(view) {
		this._view = new CodeableConcept(view);
	}

	get view() {
		return this._view;
	}

	// subject	Σ	0..1	Reference(Patient | Practitioner | Group | Device | Specimen)	Who/What this Media is a record of
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// context	Σ	0..1	Reference(Encounter | EpisodeOfCare)	Encounter / Episode associated with media
	set context(context) {
		this._context = new Reference(context);
	}

	get context() {
		return this._context;
	}

	// occurrence[x]	Σ	0..1		When Media was collected
	// occurrenceDateTime			dateTime
	set occurrenceDateTime(occurrenceDateTime) {
		this._occurrenceDateTime = occurrenceDateTime;
	}

	get occurrenceDateTime() {
		return this._occurrenceDateTime;
	}

	// occurrencePeriod			Period
	set occurrencePeriod(occurrencePeriod) {
		this._occurrencePeriod = new Period(occurrencePeriod);
	}

	get occurrencePeriod() {
		return this._occurrencePeriod;
	}

	// operator	Σ	0..1	Reference(Practitioner)	The person who generated the image
	set operator(operator) {
		this._operator = new Reference(operator);
	}

	get operator() {
		return this._operator;
	}

	// reasonCode	Σ	0..*	CodeableConcept	Why was event performed?
	// Procedure Reason Codes (Example)
	set reasonCode(reasonCode) {
		if (Array.isArray(reasonCode)) {
			this._reasonCode = reasonCode.map((i) => new CodeableConcept(i));
		} else {
			this._reasonCode = [new CodeableConcept(reasonCode)];
		}
	}

	get reasonCode() {
		return this._reasonCode;
	}

	// bodySite	Σ	0..1	CodeableConcept	Body part in media
	// SNOMED CT Body Structures (Example)
	set bodySite(bodySite) {
		this._bodySite = new CodeableConcept(bodySite);
	}

	get bodySite() {
		return this._bodySite;
	}

	// device	Σ	0..1	Reference(Device | DeviceMetric)	Observing Device
	set device(device) {
		this._device = new Reference(device);
	}

	get device() {
		return this._device;
	}

	// height	ΣI	0..1	positiveInt	Height of the image in pixels (photo/video)
	set height(height) {
		this._height = height;
	}

	get height() {
		return this._height;
	}

	// width	ΣI	0..1	positiveInt	Width of the image in pixels (photo/video)
	set width(width) {
		this._width = width;
	}

	get width() {
		return this._width;
	}

	// frames	ΣI	0..1	positiveInt	Number of frames if > 1 (photo)
	set frames(frames) {
		this._frames = frames;
	}

	get frames() {
		return this._frames;
	}

	// duration	ΣI	0..1	unsignedInt	Length in seconds (audio / video)
	set duration(duration) {
		this._duration = duration;
	}

	get duration() {
		return this._duration;
	}

	// content		1..1	Attachment	Actual Media - reference or data
	set content(content) {
		this._content = new Attachment(content);
	}

	get content() {
		return this._content;
	}

	// note		0..*	Annotation	Comments made about the media
	set note(note) {
		if (Array.isArray(note)) {
			this._note = note.map((i) => new Annotation(i));
		} else {
			this._note = [new Annotation(note)];
		}
	}

	get note() {
		return this._note;
	}

	toJSON() {
		const json = {
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
			note: this._note,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Media = Media;
