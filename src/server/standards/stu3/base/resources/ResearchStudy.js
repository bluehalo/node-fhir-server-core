const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Reference = require('../types/Reference');
const Code = require('../types/Code');
const CodeableConcept = require('../types/CodeableConcept');
const ContactDetail = require('../types/ContactDetail');
const RelatedArtifact = require('../types/RelatedArtifact');
const Period = require('../types/Period');
const Annotation = require('../types/Annotation');

class Arm {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// name		1..1	string	Label for study arm
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// code		0..1	CodeableConcept	Categorization of study arm
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// description		0..1	string	Short explanation of study path
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	toJSON() {
		return {
			name: this._name,
			code: this._code,
			description: this._description,
		};
	}
}

class ResearchStudy extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'ResearchStudy';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	S	0..*	Identifier	Business Identifier for study
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

	// title	S	0..1	string	Name for this study
	set title(title) {
		this._title = title;
	}

	get title() {
		return this._title;
	}

	// protocol	S	0..*	Reference(PlanDefinition)	Steps followed in executing study
	set protocol(protocol) {
		if (Array.isArray(protocol)) {
			this._protocol = protocol.map((i) => new Reference(i));
		} else {
			this._protocol = [new Reference(protocol)];
		}
	}

	get protocol() {
		return this._protocol;
	}

	// partOf	S	0..*	Reference(ResearchStudy)	Part of larger study
	set partOf(partOf) {
		if (Array.isArray(partOf)) {
			this._partOf = partOf.map((i) => new Reference(i));
		} else {
			this._partOf = [new Reference(partOf)];
		}
	}

	get partOf() {
		return this._partOf;
	}

	// status	?!S	1..1	code	draft | in-progress | suspended | stopped | completed | entered-in-error
	// ResearchStudyStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// category	S	0..*	CodeableConcept	Classifications for the study
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

	// focus	S	0..*	CodeableConcept	Drugs, devices, conditions, etc. under study
	set focus(focus) {
		if (Array.isArray(focus)) {
			this._focus = focus.map((i) => new CodeableConcept(i));
		} else {
			this._focus = [new CodeableConcept(focus)];
		}
	}

	get focus() {
		return this._focus;
	}

	// contact	S	0..*	ContactDetail	Contact details for the study
	set contact(contact) {
		if (Array.isArray(contact)) {
			this._contact = contact.map((i) => new ContactDetail(i));
		} else {
			this._contact = [new ContactDetail(contact)];
		}
	}

	get contact() {
		return this._contact;
	}

	// relatedArtifact		0..*	RelatedArtifact	References and dependencies
	set relatedArtifact(relatedArtifact) {
		if (Array.isArray(relatedArtifact)) {
			this._relatedArtifact = relatedArtifact.map((i) => new RelatedArtifact(i));
		} else {
			this._relatedArtifact = [new RelatedArtifact(relatedArtifact)];
		}
	}

	get relatedArtifact() {
		return this._relatedArtifact;
	}

	// keyword	S	0..*	CodeableConcept	Used to search for the study
	set keyword(keyword) {
		if (Array.isArray(keyword)) {
			this._keyword = keyword.map((i) => new CodeableConcept(i));
		} else {
			this._keyword = [new CodeableConcept(keyword)];
		}
	}

	get keyword() {
		return this._keyword;
	}

	// jurisdiction	S	0..*	CodeableConcept	Geographic region(s) for study
	// Jurisdiction ValueSet (Extensible)
	set jurisdiction(jurisdiction) {
		if (Array.isArray(jurisdiction)) {
			this._jurisdiction = jurisdiction.map((i) => new CodeableConcept(i));
		} else {
			this._jurisdiction = [new CodeableConcept(jurisdiction)];
		}
	}

	get jurisdiction() {
		return this._jurisdiction;
	}

	// description		0..1	markdown	What this is study doing
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// enrollment	S	0..*	Reference(Group)	Inclusion & exclusion criteria
	set enrollment(enrollment) {
		if (Array.isArray(enrollment)) {
			this._enrollment = enrollment.map((i) => new Reference(i));
		} else {
			this._enrollment = [new Reference(enrollment)];
		}
	}

	get enrollment() {
		return this._enrollment;
	}

	// period	S	0..1	Period	When the study began and ended
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	// sponsor	S	0..1	Reference(Organization)	Organization responsible for the study
	set sponsor(sponsor) {
		this._sponsor = new Reference(sponsor);
	}

	get sponsor() {
		return this._sponsor;
	}

	// principalInvestigator	S	0..1	Reference(Practitioner)	The individual responsible for the study
	set principalInvestigator(principalInvestigator) {
		this._principalInvestigator = new Reference(principalInvestigator);
	}

	get principalInvestigator() {
		return this._principalInvestigator;
	}

	// site	S	0..*	Reference(Location)	Location involved in study execution
	set site(site) {
		if (Array.isArray(site)) {
			this._site = site.map((i) => new Reference(i));
		} else {
			this._site = [new Reference(site)];
		}
	}

	get site() {
		return this._site;
	}

	// reasonStopped	S	0..1	CodeableConcept	Reason for terminating study early
	set reasonStopped(reasonStopped) {
		this._reasonStopped = new CodeableConcept(reasonStopped);
	}

	get reasonStopped() {
		return this._reasonStopped;
	}

	// note		0..*	Annotation	Comments made about the event
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

	// arm		0..*	BackboneElement	Defined path through the study for a subject
	set arm(arm) {
		if (Array.isArray(arm)) {
			this._arm = arm.map((i) => new Arm(i));
		} else {
			this._arm = [new Arm(arm)];
		}
	}

	get arm() {
		return this._arm;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			title: this._title,
			protocol: this._protocol,
			partOf: this._partOf,
			status: this._status,
			category: this._category,
			focus: this._focus,
			contact: this._contact,
			relatedArtifact: this._relatedArtifact,
			keyword: this._keyword,
			jurisdiction: this._jurisdiction,
			description: this._description,
			enrollment: this._enrollment,
			period: this._period,
			sponsor: this._sponsor,
			principalInvestigator: this._principalInvestigator,
			site: this._site,
			reasonStopped: this._reasonStopped,
			note: this._note,
			arm: this._arm,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.ResearchStudy = ResearchStudy;
module.exports.Arm = Arm;
