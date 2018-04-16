const DomainResource = require('./types/DomainResource');
const Meta = require('./types/Meta');
const Code = require('./types/Code');
const Narrative = require('./uscore/types/Narrative');
const Resource = require('./types/Resource');
const Extension = require('./types/Extension');
const Identifier = require('./uscore/types/Identifier');
const CodeableConcept = require('./types/CodeableConcept');
const Reference = require('./types/Reference');
const Annotation = require('./types/Annotation');

class VaccinationProtocol {
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

	// modifierExtension	?!*	0..*	Extension	Extensions that cannot be ignored
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

	// doseSequence		0..1	positiveInt	Dose number within series
	set doseSequence(doseSequence) {
		this._doseSequence = doseSequence;
	}

	get doseSequence() {
		return this._doseSequence;
	}

	// description		0..1	string	Details of vaccine protocol
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// authority		0..1	Reference(Organization)	Who is responsible for protocol
	set authority(authority) {
		this._authority = new Reference(authority);
	}

	get authority() {
		return this._authority;
	}

	// series		0..1	string	Name of vaccine series
	set series(series) {
		this._series = series;
	}

	get series() {
		return this._series;
	}

	// seriesDoses		0..1	positiveInt	Recommended number of doses for immunity
	set seriesDoses(seriesDoses) {
		this._seriesDoses = seriesDoses;
	}

	get seriesDoses() {
		return this._seriesDoses;
	}

	// targetDisease		1..*	CodeableConcept	Disease immunized against
	// Binding: Vaccination Protocol Dose Target Codes (example)
	set targetDisease(targetDisease) {
		if (Array.isArray(targetDisease)) {
			this._targetDisease = targetDisease.map((i) => new CodeableConcept(i));
		} else {
			this._targetDisease = [new CodeableConcept(targetDisease)];
		}
	}

	get targetDisease() {
		return this._targetDisease;
	}

	// doseStatus		1..1	CodeableConcept	Indicates if dose counts towards immunity
	// Binding: Vaccination Protocol Dose Status codes (example)
	set doseStatus(doseStatus) {
		this._doseStatus = new CodeableConcept(doseStatus);
	}

	get doseStatus() {
		return this._doseStatus;
	}

	// doseStatusReason		0..1	CodeableConcept	Why dose does (not) count
	// Binding: Vaccination Protocol Dose Status Reason codes (example)
	set doseStatusReason(doseStatusReason) {
		this._doseStatusReason = new CodeableConcept(doseStatusReason);
	}

	get doseStatusReason() {
		return this._doseStatusReason;
	}

	toJSON() {
		return {
			id: this._id,
			extension: this._extension,
			modifierExtension: this._modifierExtension,
			doseSequence: this._doseSequence,
			description: this._description,
			authority: this._authority,
			series: this._series,
			seriesDoses: this._seriesDoses,
			targetDisease: this._targetDisease,
			doseStatus: this._doseStatus,
			doseStatusReason: this._doseStatusReason,
		};
	}
}

class Reaction {
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

	// modifierExtension	?!*	0..*	Extension	Extensions that cannot be ignored
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

	// date		0..1	dateTime	When reaction started
	set date(date) {
		this._date = date;
	}

	get date() {
		return this._date;
	}

	// detail		0..1	Reference(Observation)	Additional information on reaction
	set detail(detail) {
		this._detail = new Reference(detail);
	}

	get detail() {
		return this._detail;
	}

	// reported		0..1	boolean	Indicates self-reported reaction
	set reported(reported) {
		this._reported = reported;
	}

	get reported() {
		return this._reported;
	}

	toJSON() {
		return {
			id: this._id,
			extension: this._extension,
			modifierExtension: this._modifierExtension,
			date: this._date,
			detail: this._detail,
			reported: this._reported,
		};
	}
}

class Explanation {
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

	// modifierExtension	?!*	0..*	Extension	Extensions that cannot be ignored
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

	// reason		0..*	CodeableConcept	Why immunization occurred
	// Binding: Immunization Reason Codes (example)
	set reason(reason) {
		if (Array.isArray(reason)) {
			this._reason = reason.map((i) => new CodeableConcept(i));
		} else {
			this._reason = [new CodeableConcept(reason)];
		}
	}

	get reason() {
		return this._reason;
	}

	// reasonNotGiven		0..*	CodeableConcept	Why immunization did not occur
	// Binding: Immunization Reasons for Not Immunizing Codes (example)
	set reasonNotGiven(reasonNotGiven) {
		if (Array.isArray(reasonNotGiven)) {
			this._reasonNotGiven = reasonNotGiven.map((i) => new CodeableConcept(i));
		} else {
			this._reasonNotGiven = [new CodeableConcept(reasonNotGiven)];
		}
	}

	get reasonNotGiven() {
		return this._reasonNotGiven;
	}

	toJSON() {
		return {
			id: this._id,
			extension: this._extension,
			modifierExtension: this._modifierExtension,
			reason: this._reason,
			reasonNotGiven: this._reasonNotGiven,
		};
	}
}

class Immunization extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Immunization';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// id	*	0..1	id	Logical id of this artifact
	set id(id) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

	// meta	*	0..1	Meta	Metadata about the resource
	set meta(meta) {
		this._meta = new Meta(meta);
	}

	get meta() {
		return this._meta;
	}

	// implicitRules	?!*	0..1	uri	A set of rules under which this content was created
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

	// identifier		0..*	Identifier	Business identifier
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

	// status	?!S	1..1	code	completed | entered-in-error
	// Binding: Immunization Status (required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// date	S	1..1	dateTime	Vaccination administration date
	set date(date) {
		this._date = date;
	}

	get date() {
		return this._date;
	}

	// vaccineCode	S	1..1	CodeableConcept	Vaccine Product Type (bind to CVX)
	// Binding: Vaccine Administered Value Set (example)
	set vaccineCode(vaccineCode) {
		this._vaccineCode = new CodeableConcept(vaccineCode);
	}

	get vaccineCode() {
		return this._vaccineCode;
	}

	// patient	S	1..1	Reference(US Core Patient Profile)	Who was immunized
	set patient(patient) {
		this._patient = new Reference(patient);
	}

	get patient() {
		return this._patient;
	}

	// wasNotGiven	?!S	1..1	boolean	Flag for whether immunization was given
	set wasNotGiven(wasNotGiven) {
		this._wasNotGiven = wasNotGiven;
	}

	get wasNotGiven() {
		return this._wasNotGiven;
	}

	// primarySource	S	1..1	boolean	Indicates context the data was recorded in
	set primarySource(primarySource) {
		this._primarySource = primarySource;
	}

	get primarySource() {
		return this._primarySource;
	}

	// reportOrigin		0..1	CodeableConcept	Indicates the source of a secondarily reported record
	// Binding: ImmunizationOrigin (example)
	set reportOrigin(reportOrigin) {
		this._reportOrigin = new CodeableConcept(reportOrigin);
	}

	get reportOrigin() {
		return this._reportOrigin;
	}

	// performer		0..1	Reference(Practitioner)	Who administered vaccine
	set performer(performer) {
		this._performer = new Reference(performer);
	}

	get performer() {
		return this._performer;
	}

	// requester		0..1	Reference(Practitioner)	Who ordered vaccination
	set requester(requester) {
		this._requester = new Reference(requester);
	}

	get requester() {
		return this._requester;
	}

	// encounter		0..1	Reference(Encounter)	Encounter administered as part of
	set encounter(encounter) {
		this._encounter = new Reference(encounter);
	}

	get encounter() {
		return this._encounter;
	}

	// manufacturer		0..1	Reference(Organization)	Vaccine manufacturer
	set manufacturer(manufacturer) {
		this._manufacturer = new Reference(manufacturer);
	}

	get manufacturer() {
		return this._manufacturer;
	}

	// location		0..1	Reference(Location)	Where vaccination occurred
	set location(location) {
		this._location = new Reference(location);
	}

	get location() {
		return this._location;
	}

	// lotNumber		0..1	string	Vaccine lot number
	set lotNumber(lotNumber) {
		this._lotNumber = lotNumber;
	}

	get lotNumber() {
		return this._lotNumber;
	}

	// expirationDate		0..1	date	Vaccine expiration date
	set expirationDate(expirationDate) {
		this._expirationDate = expirationDate;
	}

	get expirationDate() {
		return this._expirationDate;
	}

	// site		0..1	CodeableConcept	Body site vaccine was administered
	// Binding: Codes for Immunization Site of Administration (example)
	set site(site) {
		this._site = new CodeableConcept(site);
	}

	get site() {
		return this._site;
	}

	// route		0..1	CodeableConcept	How vaccine entered body
	// Binding: Immunization Route Codes (example)
	set route(route) {
		this._route = new CodeableConcept(route);
	}

	get route() {
		return this._route;
	}

	// doseQuantity		0..1	SimpleQuantity	Amount of vaccine administered
	set doseQuantity(doseQuantity) {
		this._doseQuantity = doseQuantity;
	}

	get doseQuantity() {
		return this._doseQuantity;
	}

	// note	*	0..*	Annotation	Vaccination notes
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

	// explanation	I	0..1	BackboneElement	Administration/non-administration reasons
	set explanation(explanation) {
		this._explanation = new Explanation(explanation);
	}

	get explanation() {
		return this._explanation;
	}

	// reaction	I	0..*	BackboneElement	Details of a reaction that follows immunization
	set reaction(reaction) {
		if (Array.isArray(reaction)) {
			this._reaction = reaction.map((i) => new Reaction(i));
		} else {
			this._reaction = [new Reaction(reaction)];
		}
	}

	get reaction() {
		return this._reaction;
	}

	// vaccinationProtocol	I	0..*	BackboneElement	What protocol was followed
	set vaccinationProtocol(vaccinationProtocol) {
		if (Array.isArray(vaccinationProtocol)) {
			this._vaccinationProtocol = vaccinationProtocol.map((i) => new VaccinationProtocol(i));
		} else {
			this._vaccinationProtocol = [new VaccinationProtocol(vaccinationProtocol)];
		}
	}

	get vaccinationProtocol() {
		return this._vaccinationProtocol;
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
			status: this._status,
			date: this._date,
			vaccineCode: this._vaccineCode,
			patient: this._patient,
			wasNotGiven: this._wasNotGiven,
			primarySource: this._primarySource,
			reportOrigin: this._reportOrigin,
			performer: this._performer,
			requester: this._requester,
			encounter: this._encounter,
			manufacturer: this._manufacturer,
			location: this._location,
			lotNumber: this._lotNumber,
			expirationDate: this._expirationDate,
			site: this._site,
			route: this._route,
			doseQuantity: this._doseQuantity,
			note: this._note,
			explanation: this._explanation,
			reaction: this._reaction,
			vaccinationProtocol: this._vaccinationProtocol,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Immunization = Immunization;
module.exports.Explanation = Explanation;
module.exports.Reaction = Reaction;
module.exports.VaccinationProtocol = VaccinationProtocol;
