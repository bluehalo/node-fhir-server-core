const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const AdverseEvent_SuspectEntity = require('./AdverseEvent_SuspectEntity');

class AdverseEvent extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'AdverseEvent';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'AdverseEvent';
	}

	// This is a AdverseEvent resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['AdverseEvent'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// The identifier(s) of this adverse event that are assigned by business processes and/or used to refer to it when a direct URL reference to the resource itsefl is not appropriate.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	// The type of event which is important to characterize what occurred and caused harm to the subject, or had the potential to cause harm to the subject.
	get category () {
		return this._category;
	}

	set category ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['AE', 'PAE'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field category`);
		}
		this._category = new_value;
	}

	// This element defines the specific type of event that occurred or that was prevented from occurring.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new CodeableConcept(new_value);
	}

	// This subject or group impacted by the event.  With a prospective adverse event, there will be no subject as the adverse event was prevented.
	get subject () {
		return this._subject;
	}

	set subject ( new_value ) {
		this._subject = new Reference(new_value);
	}

	// The date (and perhaps time) when the adverse event occurred.
	get date () {
		return this._date;
	}

	set date ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this._date = new_value;
	}

	// Includes information about the reaction that occurred as a result of exposure to a substance (for example, a drug or a chemical).
	get reaction () {
		return this._reaction;
	}

	set reaction ( new_value ) {
		this._reaction = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The information about where the adverse event occurred.
	get location () {
		return this._location;
	}

	set location ( new_value ) {
		this._location = new Reference(new_value);
	}

	// Describes the seriousness or severity of the adverse event.
	get seriousness () {
		return this._seriousness;
	}

	set seriousness ( new_value ) {
		this._seriousness = new CodeableConcept(new_value);
	}

	// Describes the type of outcome from the adverse event.
	get outcome () {
		return this._outcome;
	}

	set outcome ( new_value ) {
		this._outcome = new CodeableConcept(new_value);
	}

	// Information on who recorded the adverse event.  May be the patient or a practitioner.
	get recorder () {
		return this._recorder;
	}

	set recorder ( new_value ) {
		this._recorder = new Reference(new_value);
	}

	// Parties that may or should contribute or have contributed information to the Act. Such information includes information leading to the decision to perform the Act and how to perform the Act (e.g. consultant), information that the Act itself seeks to reveal (e.g. informant of clinical history), or information about what Act was performed (e.g. informant witness).
	get eventParticipant () {
		return this._eventParticipant;
	}

	set eventParticipant ( new_value ) {
		this._eventParticipant = new Reference(new_value);
	}

	// Describes the adverse event in text.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// Describes the entity that is suspected to have caused the adverse event.
	get suspectEntity () {
		return this._suspectEntity;
	}

	set suspectEntity ( new_value ) {
		this._suspectEntity = Array.isArray(new_value) ? new_value.map(val => new AdverseEvent_SuspectEntity(val)) : [new AdverseEvent_SuspectEntity(new_value)];
	}

	// AdverseEvent.subjectMedicalHistory.
	get subjectMedicalHistory () {
		return this._subjectMedicalHistory;
	}

	set subjectMedicalHistory ( new_value ) {
		this._subjectMedicalHistory = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// AdverseEvent.referenceDocument.
	get referenceDocument () {
		return this._referenceDocument;
	}

	set referenceDocument ( new_value ) {
		this._referenceDocument = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// AdverseEvent.study.
	get study () {
		return this._study;
	}

	set study ( new_value ) {
		this._study = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier && this._identifier.toJSON(),
			category: this._category,
			type: this._type && this._type.toJSON(),
			subject: this._subject && this._subject.toJSON(),
			date: this._date,
			reaction: this._reaction && this._reaction.map(v => v.toJSON()),
			location: this._location && this._location.toJSON(),
			seriousness: this._seriousness && this._seriousness.toJSON(),
			outcome: this._outcome && this._outcome.toJSON(),
			recorder: this._recorder && this._recorder.toJSON(),
			eventParticipant: this._eventParticipant && this._eventParticipant.toJSON(),
			description: this._description,
			suspectEntity: this._suspectEntity && this._suspectEntity.map(v => v.toJSON()),
			subjectMedicalHistory: this._subjectMedicalHistory && this._subjectMedicalHistory.map(v => v.toJSON()),
			referenceDocument: this._referenceDocument && this._referenceDocument.map(v => v.toJSON()),
			study: this._study && this._study.map(v => v.toJSON())
		});
	}

}

module.exports = AdverseEvent;
