const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');
const ContactDetail = require('./ContactDetail');
const RelatedArtifact = require('./RelatedArtifact');
const Period = require('./Period');
const Annotation = require('./Annotation');
const ResearchStudy_Arm = require('./ResearchStudy_Arm');

class ResearchStudy extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'ResearchStudy';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ResearchStudy';
	}

	// This is a ResearchStudy resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['ResearchStudy'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Identifiers assigned to this research study by the sponsor or other systems.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// A short, descriptive user-friendly label for the study.
	get title () {
		return this._title;
	}

	set title ( new_value ) {
		this._title = new_value;
	}

	// The set of steps expected to be performed as part of the execution of the study.
	get protocol () {
		return this._protocol;
	}

	set protocol ( new_value ) {
		this._protocol = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A larger research study of which this particular study is a component or step.
	get partOf () {
		return this._partOf;
	}

	set partOf ( new_value ) {
		this._partOf = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The current state of the study.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['draft', 'in-progress', 'suspended', 'stopped', 'completed', 'entered-in-error'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// Codes categorizing the type of study such as investigational vs. observational, type of blinding, type of randomization, safety vs. efficacy, etc.
	get category () {
		return this._category;
	}

	set category ( new_value ) {
		this._category = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// The condition(s), medication(s), food(s), therapy(ies), device(s) or other concerns or interventions that the study is seeking to gain more information about.
	get focus () {
		return this._focus;
	}

	set focus ( new_value ) {
		this._focus = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Contact details to assist a user in learning more about or engaging with the study.
	get contact () {
		return this._contact;
	}

	set contact ( new_value ) {
		this._contact = Array.isArray(new_value) ? new_value.map(val => new ContactDetail(val)) : [new ContactDetail(new_value)];
	}

	// Citations, references and other related documents.
	get relatedArtifact () {
		return this._relatedArtifact;
	}

	set relatedArtifact ( new_value ) {
		this._relatedArtifact = Array.isArray(new_value) ? new_value.map(val => new RelatedArtifact(val)) : [new RelatedArtifact(new_value)];
	}

	// Key terms to aid in searching for or filtering the study.
	get keyword () {
		return this._keyword;
	}

	set keyword ( new_value ) {
		this._keyword = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Indicates a country, state or other region where the study is taking place.
	get jurisdiction () {
		return this._jurisdiction;
	}

	set jurisdiction ( new_value ) {
		this._jurisdiction = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// A full description of how the study is being conducted.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// Reference to a Group that defines the criteria for and quantity of subjects participating in the study.  E.g. " 200 female Europeans between the ages of 20 and 45 with early onset diabetes".
	get enrollment () {
		return this._enrollment;
	}

	set enrollment ( new_value ) {
		this._enrollment = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Identifies the start date and the expected (or actual, depending on status) end date for the study.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		this._period = new Period(new_value);
	}

	// The organization responsible for the execution of the study.
	get sponsor () {
		return this._sponsor;
	}

	set sponsor ( new_value ) {
		this._sponsor = new Reference(new_value);
	}

	// Indicates the individual who has primary oversite of the execution of the study.
	get principalInvestigator () {
		return this._principalInvestigator;
	}

	set principalInvestigator ( new_value ) {
		this._principalInvestigator = new Reference(new_value);
	}

	// Clinic, hospital or other healthcare location that is participating in the study.
	get site () {
		return this._site;
	}

	set site ( new_value ) {
		this._site = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A description and/or code explaining the premature termination of the study.
	get reasonStopped () {
		return this._reasonStopped;
	}

	set reasonStopped ( new_value ) {
		this._reasonStopped = new CodeableConcept(new_value);
	}

	// Comments made about the event by the performer, subject or other participants.
	get note () {
		return this._note;
	}

	set note ( new_value ) {
		this._note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	// Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.
	get arm () {
		return this._arm;
	}

	set arm ( new_value ) {
		this._arm = Array.isArray(new_value) ? new_value.map(val => new ResearchStudy_Arm(val)) : [new ResearchStudy_Arm(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier && this._identifier.map(v => v.toJSON()),
			title: this._title,
			protocol: this._protocol && this._protocol.map(v => v.toJSON()),
			partOf: this._partOf && this._partOf.map(v => v.toJSON()),
			status: this._status,
			category: this._category && this._category.map(v => v.toJSON()),
			focus: this._focus && this._focus.map(v => v.toJSON()),
			contact: this._contact && this._contact.map(v => v.toJSON()),
			relatedArtifact: this._relatedArtifact && this._relatedArtifact.map(v => v.toJSON()),
			keyword: this._keyword && this._keyword.map(v => v.toJSON()),
			jurisdiction: this._jurisdiction && this._jurisdiction.map(v => v.toJSON()),
			description: this._description,
			enrollment: this._enrollment && this._enrollment.map(v => v.toJSON()),
			period: this._period && this._period.toJSON(),
			sponsor: this._sponsor && this._sponsor.toJSON(),
			principalInvestigator: this._principalInvestigator && this._principalInvestigator.toJSON(),
			site: this._site && this._site.map(v => v.toJSON()),
			reasonStopped: this._reasonStopped && this._reasonStopped.toJSON(),
			note: this._note && this._note.map(v => v.toJSON()),
			arm: this._arm && this._arm.map(v => v.toJSON())
		});
	}

}

module.exports = ResearchStudy;
