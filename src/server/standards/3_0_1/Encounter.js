const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Encounter_StatusHistory = require('./Encounter_StatusHistory');
const Coding = require('./Coding');
const Encounter_ClassHistory = require('./Encounter_ClassHistory');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const Encounter_Participant = require('./Encounter_Participant');
const Period = require('./Period');
const Duration = require('./Duration');
const Encounter_Diagnosis = require('./Encounter_Diagnosis');
const Encounter_Hospitalization = require('./Encounter_Hospitalization');
const Encounter_Location = require('./Encounter_Location');

class Encounter extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Encounter';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Encounter';
	}

	// This is a Encounter resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['Encounter'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Identifier(s) by which this encounter is known.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// planned | arrived | triaged | in-progress | onleave | finished | cancelled +.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['planned', 'arrived', 'triaged', 'in-progress', 'onleave', 'finished', 'cancelled', 'entered-in-error', 'unknown'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// The status history permits the encounter resource to contain the status history without needing to read through the historical versions of the resource, or even have the server store them.
	get statusHistory () {
		return this._statusHistory;
	}

	set statusHistory ( new_value ) {
		this._statusHistory = Array.isArray(new_value) ? new_value.map(val => new Encounter_StatusHistory(val)) : [new Encounter_StatusHistory(new_value)];
	}

	// inpatient | outpatient | ambulatory | emergency +.
	get class () {
		return this._class;
	}

	set class ( new_value ) {
		this._class = new Coding(new_value);
	}

	// The class history permits the tracking of the encounters transitions without needing to go  through the resource history.  This would be used for a case where an admission starts of as an emergency encounter, then transisions into an inpatient scenario. Doing this and not restarting a new encounter ensures that any lab/diagnostic results can more easily follow the patient and not require re-processing and not get lost or cancelled during a kindof discharge from emergency to inpatient.
	get classHistory () {
		return this._classHistory;
	}

	set classHistory ( new_value ) {
		this._classHistory = Array.isArray(new_value) ? new_value.map(val => new Encounter_ClassHistory(val)) : [new Encounter_ClassHistory(new_value)];
	}

	// Specific type of encounter (e.g. e-mail consultation, surgical day-care, skilled nursing, rehabilitation).
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Indicates the urgency of the encounter.
	get priority () {
		return this._priority;
	}

	set priority ( new_value ) {
		this._priority = new CodeableConcept(new_value);
	}

	// The patient ro group present at the encounter.
	get subject () {
		return this._subject;
	}

	set subject ( new_value ) {
		this._subject = new Reference(new_value);
	}

	// Where a specific encounter should be classified as a part of a specific episode(s) of care this field should be used. This association can facilitate grouping of related encounters together for a specific purpose, such as government reporting, issue tracking, association via a common problem.  The association is recorded on the encounter as these are typically created after the episode of care, and grouped on entry rather than editing the episode of care to append another encounter to it (the episode of care could span years).
	get episodeOfCare () {
		return this._episodeOfCare;
	}

	set episodeOfCare ( new_value ) {
		this._episodeOfCare = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The referral request this encounter satisfies (incoming referral).
	get incomingReferral () {
		return this._incomingReferral;
	}

	set incomingReferral ( new_value ) {
		this._incomingReferral = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The list of people responsible for providing the service.
	get participant () {
		return this._participant;
	}

	set participant ( new_value ) {
		this._participant = Array.isArray(new_value) ? new_value.map(val => new Encounter_Participant(val)) : [new Encounter_Participant(new_value)];
	}

	// The appointment that scheduled this encounter.
	get appointment () {
		return this._appointment;
	}

	set appointment ( new_value ) {
		this._appointment = new Reference(new_value);
	}

	// The start and end time of the encounter.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		this._period = new Period(new_value);
	}

	// Quantity of time the encounter lasted. This excludes the time during leaves of absence.
	get length () {
		return this._length;
	}

	set length ( new_value ) {
		this._length = new Duration(new_value);
	}

	// Reason the encounter takes place, expressed as a code. For admissions, this can be used for a coded admission diagnosis.
	get reason () {
		return this._reason;
	}

	set reason ( new_value ) {
		this._reason = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// The list of diagnosis relevant to this encounter.
	get diagnosis () {
		return this._diagnosis;
	}

	set diagnosis ( new_value ) {
		this._diagnosis = Array.isArray(new_value) ? new_value.map(val => new Encounter_Diagnosis(val)) : [new Encounter_Diagnosis(new_value)];
	}

	// The set of accounts that may be used for billing for this Encounter.
	get account () {
		return this._account;
	}

	set account ( new_value ) {
		this._account = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Details about the admission to a healthcare service.
	get hospitalization () {
		return this._hospitalization;
	}

	set hospitalization ( new_value ) {
		this._hospitalization = new Encounter_Hospitalization(new_value);
	}

	// List of locations where  the patient has been during this encounter.
	get location () {
		return this._location;
	}

	set location ( new_value ) {
		this._location = Array.isArray(new_value) ? new_value.map(val => new Encounter_Location(val)) : [new Encounter_Location(new_value)];
	}

	// An organization that is in charge of maintaining the information of this Encounter (e.g. who maintains the report or the master service catalog item, etc.). This MAY be the same as the organization on the Patient record, however it could be different. This MAY not be not the Service Delivery Location's Organization.
	get serviceProvider () {
		return this._serviceProvider;
	}

	set serviceProvider ( new_value ) {
		this._serviceProvider = new Reference(new_value);
	}

	// Another Encounter of which this encounter is a part of (administratively or in time).
	get partOf () {
		return this._partOf;
	}

	set partOf ( new_value ) {
		this._partOf = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier && this._identifier.map(v => v.toJSON()),
			status: this._status,
			statusHistory: this._statusHistory && this._statusHistory.map(v => v.toJSON()),
			class: this._class && this._class.toJSON(),
			classHistory: this._classHistory && this._classHistory.map(v => v.toJSON()),
			type: this._type && this._type.map(v => v.toJSON()),
			priority: this._priority && this._priority.toJSON(),
			subject: this._subject && this._subject.toJSON(),
			episodeOfCare: this._episodeOfCare && this._episodeOfCare.map(v => v.toJSON()),
			incomingReferral: this._incomingReferral && this._incomingReferral.map(v => v.toJSON()),
			participant: this._participant && this._participant.map(v => v.toJSON()),
			appointment: this._appointment && this._appointment.toJSON(),
			period: this._period && this._period.toJSON(),
			length: this._length && this._length.toJSON(),
			reason: this._reason && this._reason.map(v => v.toJSON()),
			diagnosis: this._diagnosis && this._diagnosis.map(v => v.toJSON()),
			account: this._account && this._account.map(v => v.toJSON()),
			hospitalization: this._hospitalization && this._hospitalization.toJSON(),
			location: this._location && this._location.map(v => v.toJSON()),
			serviceProvider: this._serviceProvider && this._serviceProvider.toJSON(),
			partOf: this._partOf && this._partOf.toJSON()
		});
	}

}

module.exports = Encounter;
