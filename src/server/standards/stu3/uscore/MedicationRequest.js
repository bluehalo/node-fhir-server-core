const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');
const MedicationRequest_Requester = require('./MedicationRequest_Requester');
const Annotation = require('./Annotation');
const Dosage = require('./Dosage');
const MedicationRequest_DispenseRequest = require('./MedicationRequest_DispenseRequest');
const MedicationRequest_Substitution = require('./MedicationRequest_Substitution');

class MedicationRequest extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'MedicationRequest';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'MedicationRequest';
	}

	// This is a MedicationRequest resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['MedicationRequest'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// This records identifiers associated with this medication request that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. For example a re-imbursement system might issue its own id for each prescription that is created.  This is particularly important where FHIR only provides part of an entire workflow process where records must be tracked through an entire system.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// Protocol or definition followed by this request.
	get definition () {
		return this._definition;
	}

	set definition ( new_value ) {
		this._definition = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A plan or request that is fulfilled in whole or in part by this medication request.
	get basedOn () {
		return this._basedOn;
	}

	set basedOn ( new_value ) {
		this._basedOn = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition or prescription.
	get groupIdentifier () {
		return this._groupIdentifier;
	}

	set groupIdentifier ( new_value ) {
		this._groupIdentifier = new Identifier(new_value);
	}

	// A code specifying the current state of the order.  Generally this will be active or completed state.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['active', 'on-hold', 'cancelled', 'completed', 'entered-in-error', 'stopped', 'draft', 'unknown'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// Whether the request is a proposal, plan, or an original order.
	get intent () {
		return this._intent;
	}

	set intent ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['proposal', 'plan', 'order', 'instance-order'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field intent`);
		}
		this._intent = new_value;
	}

	// Indicates the type of medication order and where the medication is expected to be consumed or administered.
	get category () {
		return this._category;
	}

	set category ( new_value ) {
		this._category = new CodeableConcept(new_value);
	}

	// Indicates how quickly the Medication Request should be addressed with respect to other requests.
	get priority () {
		return this._priority;
	}

	set priority ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['routine', 'urgent', 'stat', 'asap'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field priority`);
		}
		this._priority = new_value;
	}

	// Identifies the medication being requested. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.
	get medicationCodeableConcept () {
		return this._medicationCodeableConcept;
	}

	set medicationCodeableConcept ( new_value ) {
		this._medicationCodeableConcept = new CodeableConcept(new_value);
	}

	// Identifies the medication being requested. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.
	get medicationReference () {
		return this._medicationReference;
	}

	set medicationReference ( new_value ) {
		this._medicationReference = new Reference(new_value);
	}

	// A link to a resource representing the person or set of individuals to whom the medication will be given.
	get subject () {
		return this._subject;
	}

	set subject ( new_value ) {
		this._subject = new Reference(new_value);
	}

	// A link to an encounter, or episode of care, that identifies the particular occurrence or set occurrences of contact between patient and health care provider.
	get context () {
		return this._context;
	}

	set context ( new_value ) {
		this._context = new Reference(new_value);
	}

	// Include additional information (for example, patient height and weight) that supports the ordering of the medication.
	get supportingInformation () {
		return this._supportingInformation;
	}

	set supportingInformation ( new_value ) {
		this._supportingInformation = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The date (and perhaps time) when the prescription was initially written or authored on.
	get authoredOn () {
		return this._authoredOn;
	}

	set authoredOn ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field authoredOn`);
		}
		this._authoredOn = new_value;
	}

	// The individual, organization or device that initiated the request and has responsibility for its activation.
	get requester () {
		return this._requester;
	}

	set requester ( new_value ) {
		this._requester = new MedicationRequest_Requester(new_value);
	}

	// The person who entered the order on behalf of another individual for example in the case of a verbal or a telephone order.
	get recorder () {
		return this._recorder;
	}

	set recorder ( new_value ) {
		this._recorder = new Reference(new_value);
	}

	// The reason or the indication for ordering the medication.
	get reasonCode () {
		return this._reasonCode;
	}

	set reasonCode ( new_value ) {
		this._reasonCode = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Condition or observation that supports why the medication was ordered.
	get reasonReference () {
		return this._reasonReference;
	}

	set reasonReference ( new_value ) {
		this._reasonReference = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Extra information about the prescription that could not be conveyed by the other attributes.
	get note () {
		return this._note;
	}

	set note ( new_value ) {
		this._note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	// Indicates how the medication is to be used by the patient.
	get dosageInstruction () {
		return this._dosageInstruction;
	}

	set dosageInstruction ( new_value ) {
		this._dosageInstruction = Array.isArray(new_value) ? new_value.map(val => new Dosage(val)) : [new Dosage(new_value)];
	}

	// Indicates the specific details for the dispense or medication supply part of a medication request (also known as a Medication Prescription or Medication Order).  Note that this information is not always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.
	get dispenseRequest () {
		return this._dispenseRequest;
	}

	set dispenseRequest ( new_value ) {
		this._dispenseRequest = new MedicationRequest_DispenseRequest(new_value);
	}

	// Indicates whether or not substitution can or should be part of the dispense. In some cases substitution must happen, in other cases substitution must not happen. This block explains the prescriber's intent. If nothing is specified substitution may be done.
	get substitution () {
		return this._substitution;
	}

	set substitution ( new_value ) {
		this._substitution = new MedicationRequest_Substitution(new_value);
	}

	// A link to a resource representing an earlier order related order or prescription.
	get priorPrescription () {
		return this._priorPrescription;
	}

	set priorPrescription ( new_value ) {
		this._priorPrescription = new Reference(new_value);
	}

	// Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, duplicate therapy, dosage alert etc.
	get detectedIssue () {
		return this._detectedIssue;
	}

	set detectedIssue ( new_value ) {
		this._detectedIssue = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Links to Provenance records for past versions of this resource or fulfilling request or event resources that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the resource.
	get eventHistory () {
		return this._eventHistory;
	}

	set eventHistory ( new_value ) {
		this._eventHistory = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this.resourceType,
			identifier: this.identifier && this.identifier.map(v => v.toJSON()),
			definition: this.definition && this.definition.map(v => v.toJSON()),
			basedOn: this.basedOn && this.basedOn.map(v => v.toJSON()),
			groupIdentifier: this.groupIdentifier && this.groupIdentifier.toJSON(),
			status: this.status,
			intent: this.intent,
			category: this.category && this.category.toJSON(),
			priority: this.priority,
			medicationCodeableConcept: this.medicationCodeableConcept && this.medicationCodeableConcept.toJSON(),
			medicationReference: this.medicationReference && this.medicationReference.toJSON(),
			subject: this.subject && this.subject.toJSON(),
			context: this.context && this.context.toJSON(),
			supportingInformation: this.supportingInformation && this.supportingInformation.map(v => v.toJSON()),
			authoredOn: this.authoredOn,
			requester: this.requester && this.requester.toJSON(),
			recorder: this.recorder && this.recorder.toJSON(),
			reasonCode: this.reasonCode && this.reasonCode.map(v => v.toJSON()),
			reasonReference: this.reasonReference && this.reasonReference.map(v => v.toJSON()),
			note: this.note && this.note.map(v => v.toJSON()),
			dosageInstruction: this.dosageInstruction && this.dosageInstruction.map(v => v.toJSON()),
			dispenseRequest: this.dispenseRequest && this.dispenseRequest.toJSON(),
			substitution: this.substitution && this.substitution.toJSON(),
			priorPrescription: this.priorPrescription && this.priorPrescription.toJSON(),
			detectedIssue: this.detectedIssue && this.detectedIssue.map(v => v.toJSON()),
			eventHistory: this.eventHistory && this.eventHistory.map(v => v.toJSON())
		});
	}

}

module.exports = MedicationRequest;
