const DomainResource = require('../../base/types/DomainResource');
const Meta = require('../../base/types/Meta');
const Code = require('../../base/types/Code');
const Narrative = require('../types/Narrative');
const Resource = require('../../base/types/Resource');
const Extension = require('../../base/types/Extension');
const Identifier = require('../types/Identifier');
const HumanName = require('../types/HumanName');
const ContactPoint = require('../../base/types/ContactPoint');
const Address = require('../types/Address');
const Attachment = require('../../base/types/Attachment');
const CodeableConcept = require('../../base/types/CodeableConcept');
const Period = require('../../base/types/Period');
const Reference = require('../../base/types/Reference');

class Qualification {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// id		0..1	string	xml:id (or equivalent in JSON)
	set id(id) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

	// extension		0..*	Extension	Additional Content defined by implementations
	set extension(extension) {
		if (Array.isArray(extension)) {
			this._extension = extension.map((i) => new Extension(i));
		} else {
			this._extension = [new Extension(extension)];
		}
	}

	get extension() {
		return this._extension;
	}

	// modifierExtension	?!Î£	0..*	Extension	Extensions that cannot be ignored
	set modifierExtension(modifierExtension) {
		if (Array.isArray(modifierExtension)) {
			this._modifierExtension = modifierExtension.map((i) => new Extension(i));
		} else {
			this._modifierExtension = [new Extension(modifierExtension)];
		}
	}

	get modifierExtension() {
		return this._modifierExtension;
	}

	// identifier		0..*	Identifier	An identifier for this qualification for the practitioner
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

	// code		1..1	CodeableConcept	Coded representation of the qualification
	// Binding: v2 table 0360, Version 2.7 (example)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// period		0..1	Period	Period during which the qualification is valid
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	// issuer		0..1	Reference(Organization)	Organization that regulates and issues the qualification
	set issuer(issuer) {
		this._issuer = new Reference(issuer);
	}

	get issuer() {
		return this._issuer;
	}

	toJSON() {
		return {
			id: this._id,
			extension: this._extension,
			modifierExtension: this._modifierExtension,
			identifier: this._identifier,
			code: this._code,
			period: this._period,
			issuer: this._issuer,
		};
	}
}

class Practitioner extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Practitioner';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// id	Î£	0..1	id	Logical id of this artifact
	set id(id) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

	// meta	Î£	0..1	Meta	Metadata about the resource
	set meta(meta) {
		this._meta = new Meta(meta);
	}

	get meta() {
		return this._meta;
	}

	// implicitRules	?!Î£	0..1	uri	A set of rules under which this content was created
	set implicitRules(implicitRules) {
		this._implicitRules = implicitRules;
	}

	get implicitRules() {
		return this._implicitRules;
	}

	// language		0..1	code	Language of the resource content
	// Binding: Common Languages (extensible)
	set language(language) {
		this._language = new Code(language);
	}

	get language() {
		return this._language;
	}

	// text	I	0..1	Narrative	Text summary of the resource, for human interpretation
	set text(text) {
		this._text = new Narrative(text);
	}

	get text() {
		return this._text;
	}

	// contained		0..*	Resource	Contained, inline Resources
	set contained(contained) {
		if (Array.isArray(contained)) {
			this._contained = contained.map((i) => new Resource(i));
		} else {
			this._contained = [new Resource(contained)];
		}
	}

	get contained() {
		return this._contained;
	}

	// extension		0..*	Extension	Additional Content defined by implementations
	set extension(extension) {
		if (Array.isArray(extension)) {
			this._extension = extension.map((i) => new Extension(i));
		} else {
			this._extension = [new Extension(extension)];
		}
	}

	get extension() {
		return this._extension;
	}

	// modifierExtension	?!	0..*	Extension	Extensions that cannot be ignored
	set modifierExtension(modifierExtension) {
		if (Array.isArray(modifierExtension)) {
			this._modifierExtension = modifierExtension.map((i) => new Extension(i));
		} else {
			this._modifierExtension = [new Extension(modifierExtension)];
		}
	}

	get modifierExtension() {
		return this._modifierExtension;
	}

	// identifier	SÎ£	1..*	Identifier	A identifier for the person as this agent
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

	// active	Î£	0..1	boolean	Whether this practitioner's record is in active use
	set active(active) {
		this._active = active;
	}

	get active() {
		return this._active;
	}

	// name	SÎ£	1..1	HumanName	The name(s) associated with the practitioner
	set name(name) {
		this._name = new HumanName(name);
	}

	get name() {
		return this._name;
	}

	// telecom	Î£	0..*	ContactPoint	A contact detail for the practitioner (that apply to all roles)
	set telecom(telecom) {
		if (Array.isArray(telecom)) {
			this._telecom = telecom.map((i) => new ContactPoint(i));
		} else {
			this._telecom = [new ContactPoint(telecom)];
		}
	}

	get telecom() {
		return this._telecom;
	}

	// address	Î£	0..*	Address	Address(es) of the practitioner that are not role specific (typically home address)
	set address(address) {
		if (Array.isArray(address)) {
			this._address = address.map((i) => new Address(i));
		} else {
			this._address = [new Address(address)];
		}
	}

	get address() {
		return this._address;
	}

	// gender	Î£	0..1	code	male | female | other | unknown
	// Binding: AdministrativeGender (required)
	set gender(gender) {
		this._gender = new Code(gender);
	}

	get gender() {
		return this._gender;
	}

	// birthDate	Î£	0..1	date	The date on which the practitioner was born
	set birthDate(birthDate) {
		this._birthDate = birthDate;
	}

	get birthDate() {
		return this._birthDate;
	}

	// photo		0..*	Attachment	Image of the person
	set photo(photo) {
		if (Array.isArray(photo)) {
			this._photo = photo.map((i) => new Attachment(i));
		} else {
			this._photo = [new Attachment(photo)];
		}
	}

	get photo() {
		return this._photo;
	}

	// qualification	I	0..*	BackboneElement	Qualifications obtained by training and certification
	set qualification(qualification) {
		if (Array.isArray(qualification)) {
			this._qualification = qualification.map((i) => new Qualification(i));
		} else {
			this._qualification = [new Qualification(qualification)];
		}
	}

	get qualification() {
		return this._qualification;
	}

	// communication		0..*	CodeableConcept	A language the practitioner is able to use in patient communication
	// Binding: Common Languages (extensible)
	set communication(communication) {
		if (Array.isArray(communication)) {
			this._communication = communication.map((i) => new CodeableConcept(i));
		} else {
			this._communication = [new CodeableConcept(communication)];
		}
	}

	get communication() {
		return this._communication;
	}

	toJSON() {
		const json = {
			id: this._id,
			meta: this._meta,
			implicitRules: this._implicitRules,
			language: this._language,
			text: this._text,
			contained: this._contained,
			extension: this._extension,
			modifierExtension: this._modifierExtension,
			identifier: this._identifier,
			active: this._active,
			name: this._name,
			telecom: this._telecom,
			address: this._address,
			gender: this._gender,
			birthDate: this._birthDate,
			photo: this._photo,
			qualification: this._qualification,
			communication: this._communication,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Practitioner = Practitioner;
module.exports.Qualification = Qualification;
