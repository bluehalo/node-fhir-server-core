const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const CodeableConcept = require('./types/CodeableConcept');
const Attachment = require('./types/Attachment');
const Reference = require('./types/Reference');

class Bodysite extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Bodysite';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	Identifier	Bodysite identifier
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

	// active	?!Σ	0..1	boolean	Whether this body site record is in active use
	set active(active) {
		this._active = active;
	}

	get active() {
		return this._active;
	}

	// code	Σ	0..1	CodeableConcept	Named anatomical location
	// SNOMED CT Body Structures (Example)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// qualifier		0..*	CodeableConcept	Modification to location code
	// Bodysite Location Qualifier (Example)
	set qualifier(qualifier) {
		if (Array.isArray(qualifier)) {
			this._qualifier = qualifier.map((i) => new CodeableConcept(i));
		} else {
			this._qualifier = [new CodeableConcept(qualifier)];
		}
	}

	get qualifier() {
		return this._qualifier;
	}

	// description	Σ	0..1	string	Anatomical location description
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// image		0..*	Attachment	Attached images
	set image(image) {
		if (Array.isArray(image)) {
			this._image = image.map((i) => new Attachment(i));
		} else {
			this._image = [new Attachment(image)];
		}
	}

	get image() {
		return this._image;
	}

	// patient	Σ	1..1	Reference(Patient)	Who this is about
	set patient(patient) {
		this._patient = new Reference(patient);
	}

	get patient() {
		return this._patient;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			active: this._active,
			code: this._code,
			qualifier: this._qualifier,
			description: this._description,
			image: this._image,
			patient: this._patient,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Bodysite = Bodysite;
