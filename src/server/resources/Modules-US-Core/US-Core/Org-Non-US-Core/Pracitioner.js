const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const HumanName = require('./types/HumanName');
const ContactPoint = require('./types/ContactPoint');
const Address = require('./types/Address');
const Code = require('./types/Code');
const Attachment = require('./types/Attachment');
const CodeableConcept = require('./types/CodeableConcept');
const Period = require('./types/Period');
const Reference = require('./types/Reference');

class Qualification {
	constructor(obj) {
		Object.assign(this, obj);
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
	// v2 table 0360, Version 2.7 (Example)
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

	// identifier	Σ	0..*	Identifier	A identifier for the person as this agent
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

	// active	Σ	0..1	boolean	Whether this practitioner's record is in active use
	set active(active) {
		this._active = active;
	}

	get active() {
		return this._active;
	}

	// name	Σ	0..*	HumanName	The name(s) associated with the practitioner
	set name(name) {
		if (Array.isArray(name)) {
			this._name = name.map((i) => new HumanName(i));
		} else {
			this._name = [new HumanName(name)];
		}
	}

	get name() {
		return this._name;
	}

	// telecom	Σ	0..*	ContactPoint	A contact detail for the practitioner (that apply to all roles)
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

	// address	Σ	0..*	Address	Address(es) of the practitioner that are not role specific (typically home address)
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

	// gender	Σ	0..1	code	male | female | other | unknown
	// AdministrativeGender (Required)
	set gender(gender) {
		this._gender = new Code(gender);
	}

	get gender() {
		return this._gender;
	}

	// birthDate	Σ	0..1	date	The date on which the practitioner was born
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

	// qualification		0..*	BackboneElement	Qualifications obtained by training and certification
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
	// Common Languages (Extensible but limited to All Languages)
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
