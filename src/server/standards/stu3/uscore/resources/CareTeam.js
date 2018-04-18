const DomainResource = require('../../base/types/DomainResource');
const Meta = require('../../base/types/Meta');
const Code = require('../../base/types/Code');
const Narrative = require('../types/Narrative');
const Resource = require('../../base/types/Resource');
const Extension = require('../../base/types/Extension');
const Identifier = require('../types/Identifier');
const CodeableConcept = require('../../base/types/CodeableConcept');
const Reference = require('../../base/types/Reference');
const Period = require('../../base/types/Period');
const Annotation = require('../../base/types/Annotation');

class Participant {
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

	// role	SÎ£	1..1	CodeableConcept	Type of involvement
	// Binding: CareTeam Provider Roles (extensible)
	set role(role) {
		this._role = new CodeableConcept(role);
	}

	get role() {
		return this._role;
	}

	// member	SÎ£	1..1	Reference(US Core Patient Profile), Reference(US Core Practitioner Profile), Reference(US Core Organization Profile), Reference(RelatedPerson)	Who is involved
	set member(member) {
		this._member = new Reference(member);
	}

	get member() {
		return this._member;
	}

	// onBehalfOf	Î£	0..1	Reference(Organization)	Organization of the practitioner
	set onBehalfOf(onBehalfOf) {
		this._onBehalfOf = new Reference(onBehalfOf);
	}

	get onBehalfOf() {
		return this._onBehalfOf;
	}

	// period		0..1	Period	Time period of participant
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	toJSON() {
		return {
			id: this._id,
			extension: this._extension,
			modifierExtension: this._modifierExtension,
			role: this._role,
			member: this._member,
			onBehalfOf: this._onBehalfOf,
			period: this._period,
		};
	}
}

class CareTeam extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'CareTeam';
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

	// identifier	Î£	0..*	Identifier	External Ids for this team
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

	// status	?!SÎ£	1..1	code	proposed | active | suspended | inactive | entered-in-error
	// Binding: CareTeamStatus (required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// category	Î£	0..*	CodeableConcept	Type of team
	// Binding: CareTeamCategory (example)
	set category(category) {
		if (Array.isArray(category)) {
			this._category = category.map((i) => new CodeableConcept(i));
		} else {
			this._category = [new CodeableConcept(category)];
		}
	}

	get category() {
		return this._category;
	}

	// name	Î£	0..1	string	Name of the team, such as crisis assessment team
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// subject	SÎ£	1..1	Reference(US Core Patient Profile)	Who care team is for
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// context	Î£	0..1	Reference(Encounter), Reference(EpisodeOfCare)	Encounter or episode associated with CareTeam
	set context(context) {
		this._context = new Reference(context);
	}

	get context() {
		return this._context;
	}

	// period	Î£	0..1	Period	Time period team covers
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	// participant	SI	1..*	BackboneElement	Members of the team
	set participant(participant) {
		if (Array.isArray(participant)) {
			this._participant = participant.map((i) => new Participant(i));
		} else {
			this._participant = [new Participant(participant)];
		}
	}

	get participant() {
		return this._participant;
	}

	// reasonCode		0..*	CodeableConcept	Why the care team exists
	// Binding: SNOMED CT Clinical Findings (example)
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

	// reasonReference		0..*	Reference(Condition)	Why the care team exists
	set reasonReference(reasonReference) {
		if (Array.isArray(reasonReference)) {
			this._reasonReference = reasonReference.map((i) => new Reference(i));
		} else {
			this._reasonReference = [new Reference(reasonReference)];
		}
	}

	get reasonReference() {
		return this._reasonReference;
	}

	// managingOrganization	Î£	0..*	Reference(Organization)	Organization responsible for the care team
	set managingOrganization(managingOrganization) {
		if (Array.isArray(managingOrganization)) {
			this._managingOrganization = managingOrganization.map((i) => new Reference(i));
		} else {
			this._managingOrganization = [new Reference(managingOrganization)];
		}
	}

	get managingOrganization() {
		return this._managingOrganization;
	}

	// note		0..*	Annotation	Comments made about the CareTeam
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
			category: this._category,
			name: this._name,
			subject: this._subject,
			context: this._context,
			period: this._period,
			participant: this._participant,
			reasonCode: this._reasonCode,
			reasonReference: this._reasonReference,
			managingOrganization: this._managingOrganization,
			note: this._note,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.CareTeam = CareTeam;
module.exports.Participant = Participant;
