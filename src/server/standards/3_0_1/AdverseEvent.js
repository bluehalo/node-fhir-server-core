const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class AdverseEvent extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'AdverseEvent';
		Object.assign(this, opt);
	}

	// This is a AdverseEvent resource
	static get __resourceType() {
		return 'AdverseEvent';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__AdverseEvent = new_value;
	}

	// The identifier(s) of this adverse event that are assigned by business processes and/or used to refer to it when a direct URL reference to the resource itsefl is not appropriate.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// The type of event which is important to characterize what occurred and caused harm to the subject, or had the potential to cause harm to the subject.
	get category() {
		return this.__category;
	}

	set category(new_value) {
		this.__category = new_value;
	}

	// This element defines the specific type of event that occurred or that was prevented from occurring.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// This subject or group impacted by the event.  With a prospective adverse event, there will be no subject as the adverse event was prevented.
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// The date (and perhaps time) when the adverse event occurred.
	get date() {
		return this.__date;
	}

	set date(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this.__date = new_value;
	}

	// Includes information about the reaction that occurred as a result of exposure to a substance (for example, a drug or a chemical).
	get reaction() {
		return this.__reaction;
	}

	set reaction(new_value) {
		const Reference = require('./Reference');
		this.__reaction = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The information about where the adverse event occurred.
	get location() {
		return this.__location;
	}

	set location(new_value) {
		const Reference = require('./Reference');
		this.__location = new Reference(new_value);
	}

	// Describes the seriousness or severity of the adverse event.
	get seriousness() {
		return this.__seriousness;
	}

	set seriousness(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__seriousness = new CodeableConcept(new_value);
	}

	// Describes the type of outcome from the adverse event.
	get outcome() {
		return this.__outcome;
	}

	set outcome(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__outcome = new CodeableConcept(new_value);
	}

	// Information on who recorded the adverse event.  May be the patient or a practitioner.
	get recorder() {
		return this.__recorder;
	}

	set recorder(new_value) {
		const Reference = require('./Reference');
		this.__recorder = new Reference(new_value);
	}

	// Parties that may or should contribute or have contributed information to the Act. Such information includes information leading to the decision to perform the Act and how to perform the Act (e.g. consultant), information that the Act itself seeks to reveal (e.g. informant of clinical history), or information about what Act was performed (e.g. informant witness).
	get eventParticipant() {
		return this.__eventParticipant;
	}

	set eventParticipant(new_value) {
		const Reference = require('./Reference');
		this.__eventParticipant = new Reference(new_value);
	}

	// Describes the adverse event in text.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// Describes the entity that is suspected to have caused the adverse event.
	get suspectEntity() {
		return this.__suspectEntity;
	}

	set suspectEntity(new_value) {
		const AdverseEventSuspectEntity = require('./AdverseEventSuspectEntity');
		this.__suspectEntity = Array.isArray(new_value)
			? new_value.map(val => new AdverseEventSuspectEntity(val))
			: [new AdverseEventSuspectEntity(new_value)];
	}

	// AdverseEvent.subjectMedicalHistory.
	get subjectMedicalHistory() {
		return this.__subjectMedicalHistory;
	}

	set subjectMedicalHistory(new_value) {
		const Reference = require('./Reference');
		this.__subjectMedicalHistory = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// AdverseEvent.referenceDocument.
	get referenceDocument() {
		return this.__referenceDocument;
	}

	set referenceDocument(new_value) {
		const Reference = require('./Reference');
		this.__referenceDocument = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// AdverseEvent.study.
	get study() {
		return this.__study;
	}

	set study(new_value) {
		const Reference = require('./Reference');
		this.__study = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.toJSON(),
			category: this.__category,
			type: this.__type && this.__type.toJSON(),
			subject: this.__subject && this.__subject.toJSON(),
			date: this.__date,
			reaction: this.__reaction && this.__reaction.map(v => v.toJSON()),
			location: this.__location && this.__location.toJSON(),
			seriousness: this.__seriousness && this.__seriousness.toJSON(),
			outcome: this.__outcome && this.__outcome.toJSON(),
			recorder: this.__recorder && this.__recorder.toJSON(),
			eventParticipant: this.__eventParticipant && this.__eventParticipant.toJSON(),
			description: this.__description,
			suspectEntity: this.__suspectEntity && this.__suspectEntity.map(v => v.toJSON()),
			subjectMedicalHistory: this.__subjectMedicalHistory && this.__subjectMedicalHistory.map(v => v.toJSON()),
			referenceDocument: this.__referenceDocument && this.__referenceDocument.map(v => v.toJSON()),
			study: this.__study && this.__study.map(v => v.toJSON()),
		});
	}
}

module.exports = AdverseEvent;
