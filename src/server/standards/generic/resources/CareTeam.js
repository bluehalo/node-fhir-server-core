const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Code = require('../types/Code');
const CodeableConcept = require('../types/CodeableConcept');
const Reference = require('../types/Reference');
const Period = require('../types/Period');
const Annotation = require('../types/Annotation');

class Participant {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// role	Σ	0..1	CodeableConcept	Type of involvement
	// Participant Roles (Example)
	set role(role) {
		this._role = new CodeableConcept(role);
	}

	get role() {
		return this._role;
	}

	// member	Σ	0..1	Reference(Practitioner | RelatedPerson | Patient | Organization | CareTeam)	Who is involved
	set member(member) {
		this._member = new Reference(member);
	}

	get member() {
		return this._member;
	}

	// onBehalfOf	Σ	0..1	Reference(Organization)	Organization of the practitioner
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

	// identifier	Σ	0..*	Identifier	External Ids for this team
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

	// status	?!Σ	0..1	code	proposed | active | suspended | inactive | entered-in-error
	// CareTeamStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// category	Σ	0..*	CodeableConcept	Type of team
	// CareTeamCategory (Example)
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

	// name	Σ	0..1	string	Name of the team, such as crisis assessment team
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// subject	Σ	0..1	Reference(Patient | Group)	Who care team is for
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// context	Σ	0..1	Reference(Encounter | EpisodeOfCare)	Encounter or episode associated with CareTeam
	set context(context) {
		this._context = new Reference(context);
	}

	get context() {
		return this._context;
	}

	// period	Σ	0..1	Period	Time period team covers
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	// reasonCode		0..*	CodeableConcept	Why the care team exists
	// SNOMED CT Clinical Findings (Example)
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

	// managingOrganization	Σ	0..*	Reference(Organization)	Organization responsible for the care team
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

	// participant	I	0..*	BackboneElement	Members of the team
	// + CareTeam.participant.onBehalfOf can only be populated when CareTeam.participant.member is a Practitioner
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

	toJSON() {
		const json = {
			identifier: this._identifier,
			status: this._status,
			category: this._category,
			name: this._name,
			subject: this._subject,
			context: this._context,
			period: this._period,
			reasonCode: this._reasonCode,
			reasonReference: this._reasonReference,
			managingOrganization: this._managingOrganization,
			note: this._note,
			participant: this._participant,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.CareTeam = CareTeam;
module.exports.Participant = Participant;
