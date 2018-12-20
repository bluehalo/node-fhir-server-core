const DomainResource = require('./DomainResource');

class ResearchStudy extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ResearchStudy';
		Object.assign(this, opt);
	}

	// This is a ResearchStudy resource
	static get __resourceType() {
		return 'ResearchStudy';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__ResearchStudy = new_value;
	}

	// Identifiers assigned to this research study by the sponsor or other systems.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// A short, descriptive user-friendly label for the study.
	get title() {
		return this.__title;
	}

	set title(new_value) {
		this.__title = new_value;
	}

	// The set of steps expected to be performed as part of the execution of the study.
	get protocol() {
		return this.__protocol;
	}

	set protocol(new_value) {
		const Reference = require('./Reference');
		this.__protocol = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A larger research study of which this particular study is a component or step.
	get partOf() {
		return this.__partOf;
	}

	set partOf(new_value) {
		const Reference = require('./Reference');
		this.__partOf = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The current state of the study.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// Codes categorizing the type of study such as investigational vs. observational, type of blinding, type of randomization, safety vs. efficacy, etc.
	get category() {
		return this.__category;
	}

	set category(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__category = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// The condition(s), medication(s), food(s), therapy(ies), device(s) or other concerns or interventions that the study is seeking to gain more information about.
	get focus() {
		return this.__focus;
	}

	set focus(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__focus = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Contact details to assist a user in learning more about or engaging with the study.
	get contact() {
		return this.__contact;
	}

	set contact(new_value) {
		const ContactDetail = require('./ContactDetail');
		this.__contact = Array.isArray(new_value)
			? new_value.map(val => new ContactDetail(val))
			: [new ContactDetail(new_value)];
	}

	// Citations, references and other related documents.
	get relatedArtifact() {
		return this.__relatedArtifact;
	}

	set relatedArtifact(new_value) {
		const RelatedArtifact = require('./RelatedArtifact');
		this.__relatedArtifact = Array.isArray(new_value)
			? new_value.map(val => new RelatedArtifact(val))
			: [new RelatedArtifact(new_value)];
	}

	// Key terms to aid in searching for or filtering the study.
	get keyword() {
		return this.__keyword;
	}

	set keyword(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__keyword = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Indicates a country, state or other region where the study is taking place.
	get jurisdiction() {
		return this.__jurisdiction;
	}

	set jurisdiction(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__jurisdiction = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// A full description of how the study is being conducted.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// Reference to a Group that defines the criteria for and quantity of subjects participating in the study.  E.g. \' 200 female Europeans between the ages of 20 and 45 with early onset diabetes\'.
	get enrollment() {
		return this.__enrollment;
	}

	set enrollment(new_value) {
		const Reference = require('./Reference');
		this.__enrollment = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// Identifies the start date and the expected (or actual, depending on status) end date for the study.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
	}

	// The organization responsible for the execution of the study.
	get sponsor() {
		return this.__sponsor;
	}

	set sponsor(new_value) {
		const Reference = require('./Reference');
		this.__sponsor = new Reference(new_value);
	}

	// Indicates the individual who has primary oversite of the execution of the study.
	get principalInvestigator() {
		return this.__principalInvestigator;
	}

	set principalInvestigator(new_value) {
		const Reference = require('./Reference');
		this.__principalInvestigator = new Reference(new_value);
	}

	// Clinic, hospital or other healthcare location that is participating in the study.
	get site() {
		return this.__site;
	}

	set site(new_value) {
		const Reference = require('./Reference');
		this.__site = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A description and/or code explaining the premature termination of the study.
	get reasonStopped() {
		return this.__reasonStopped;
	}

	set reasonStopped(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reasonStopped = new CodeableConcept(new_value);
	}

	// Comments made about the event by the performer, subject or other participants.
	get note() {
		return this.__note;
	}

	set note(new_value) {
		const Annotation = require('./Annotation');
		this.__note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	// Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.
	get arm() {
		return this.__arm;
	}

	set arm(new_value) {
		const ResearchStudyArm = require('./ResearchStudyArm');
		this.__arm = Array.isArray(new_value)
			? new_value.map(val => new ResearchStudyArm(val))
			: [new ResearchStudyArm(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			title: this.__title,
			protocol: this.__protocol && this.__protocol.map(v => v.toJSON()),
			partOf: this.__partOf && this.__partOf.map(v => v.toJSON()),
			status: this.__status,
			category: this.__category && this.__category.map(v => v.toJSON()),
			focus: this.__focus && this.__focus.map(v => v.toJSON()),
			contact: this.__contact && this.__contact.map(v => v.toJSON()),
			relatedArtifact: this.__relatedArtifact && this.__relatedArtifact.map(v => v.toJSON()),
			keyword: this.__keyword && this.__keyword.map(v => v.toJSON()),
			jurisdiction: this.__jurisdiction && this.__jurisdiction.map(v => v.toJSON()),
			description: this.__description,
			enrollment: this.__enrollment && this.__enrollment.map(v => v.toJSON()),
			period: this.__period && this.__period.toJSON(),
			sponsor: this.__sponsor && this.__sponsor.toJSON(),
			principalInvestigator: this.__principalInvestigator && this.__principalInvestigator.toJSON(),
			site: this.__site && this.__site.map(v => v.toJSON()),
			reasonStopped: this.__reasonStopped && this.__reasonStopped.toJSON(),
			note: this.__note && this.__note.map(v => v.toJSON()),
			arm: this.__arm && this.__arm.map(v => v.toJSON()),
		});
	}
}

module.exports = ResearchStudy;
