const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class MedicationRequest extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MedicationRequest';
		Object.assign(this, opt);
	}

	// This is a MedicationRequest resource
	static get __resourceType() {
		return 'MedicationRequest';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__MedicationRequest = new_value;
	}

	// This records identifiers associated with this medication request that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. For example a re-imbursement system might issue its own id for each prescription that is created.  This is particularly important where FHIR only provides part of an entire workflow process where records must be tracked through an entire system.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// Protocol or definition followed by this request.
	get definition() {
		return this.__definition;
	}

	set definition(new_value) {
		const Reference = require('./Reference');
		this.__definition = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// A plan or request that is fulfilled in whole or in part by this medication request.
	get basedOn() {
		return this.__basedOn;
	}

	set basedOn(new_value) {
		const Reference = require('./Reference');
		this.__basedOn = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition or prescription.
	get groupIdentifier() {
		return this.__groupIdentifier;
	}

	set groupIdentifier(new_value) {
		const Identifier = require('./Identifier');
		this.__groupIdentifier = new Identifier(new_value);
	}

	// A code specifying the current state of the order.  Generally this will be active or completed state.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// Whether the request is a proposal, plan, or an original order.
	get intent() {
		return this.__intent;
	}

	set intent(new_value) {
		this.__intent = new_value;
	}

	// Indicates the type of medication order and where the medication is expected to be consumed or administered.
	get category() {
		return this.__category;
	}

	set category(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__category = new CodeableConcept(new_value);
	}

	// Indicates how quickly the Medication Request should be addressed with respect to other requests.
	get priority() {
		return this.__priority;
	}

	set priority(new_value) {
		this.__priority = new_value;
	}

	// Identifies the medication being requested. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.
	get medicationCodeableConcept() {
		return this.__medicationCodeableConcept;
	}

	set medicationCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__medicationCodeableConcept = new CodeableConcept(new_value);
	}

	// Identifies the medication being requested. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.
	get medicationReference() {
		return this.__medicationReference;
	}

	set medicationReference(new_value) {
		const Reference = require('./Reference');
		this.__medicationReference = new Reference(new_value);
	}

	// A link to a resource representing the person or set of individuals to whom the medication will be given.
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// A link to an encounter, or episode of care, that identifies the particular occurrence or set occurrences of contact between patient and health care provider.
	get context() {
		return this.__context;
	}

	set context(new_value) {
		const Reference = require('./Reference');
		this.__context = new Reference(new_value);
	}

	// Include additional information (for example, patient height and weight) that supports the ordering of the medication.
	get supportingInformation() {
		return this.__supportingInformation;
	}

	set supportingInformation(new_value) {
		const Reference = require('./Reference');
		this.__supportingInformation = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// The date (and perhaps time) when the prescription was initially written or authored on.
	get authoredOn() {
		return this.__authoredOn;
	}

	set authoredOn(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field authoredOn`);
		}
		this.__authoredOn = new_value;
	}

	// The individual, organization or device that initiated the request and has responsibility for its activation.
	get requester() {
		return this.__requester;
	}

	set requester(new_value) {
		const MedicationRequestRequester = require('./MedicationRequestRequester');
		this.__requester = new MedicationRequestRequester(new_value);
	}

	// The person who entered the order on behalf of another individual for example in the case of a verbal or a telephone order.
	get recorder() {
		return this.__recorder;
	}

	set recorder(new_value) {
		const Reference = require('./Reference');
		this.__recorder = new Reference(new_value);
	}

	// The reason or the indication for ordering the medication.
	get reasonCode() {
		return this.__reasonCode;
	}

	set reasonCode(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reasonCode = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Condition or observation that supports why the medication was ordered.
	get reasonReference() {
		return this.__reasonReference;
	}

	set reasonReference(new_value) {
		const Reference = require('./Reference');
		this.__reasonReference = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// Extra information about the prescription that could not be conveyed by the other attributes.
	get note() {
		return this.__note;
	}

	set note(new_value) {
		const Annotation = require('./Annotation');
		this.__note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	// Indicates how the medication is to be used by the patient.
	get dosageInstruction() {
		return this.__dosageInstruction;
	}

	set dosageInstruction(new_value) {
		const Dosage = require('./Dosage');
		this.__dosageInstruction = Array.isArray(new_value)
			? new_value.map(val => new Dosage(val))
			: [new Dosage(new_value)];
	}

	// Indicates the specific details for the dispense or medication supply part of a medication request (also known as a Medication Prescription or Medication Order).  Note that this information is not always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.
	get dispenseRequest() {
		return this.__dispenseRequest;
	}

	set dispenseRequest(new_value) {
		const MedicationRequestDispenseRequest = require('./MedicationRequestDispenseRequest');
		this.__dispenseRequest = new MedicationRequestDispenseRequest(new_value);
	}

	// Indicates whether or not substitution can or should be part of the dispense. In some cases substitution must happen, in other cases substitution must not happen. This block explains the prescriber\'s intent. If nothing is specified substitution may be done.
	get substitution() {
		return this.__substitution;
	}

	set substitution(new_value) {
		const MedicationRequestSubstitution = require('./MedicationRequestSubstitution');
		this.__substitution = new MedicationRequestSubstitution(new_value);
	}

	// A link to a resource representing an earlier order related order or prescription.
	get priorPrescription() {
		return this.__priorPrescription;
	}

	set priorPrescription(new_value) {
		const Reference = require('./Reference');
		this.__priorPrescription = new Reference(new_value);
	}

	// Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, duplicate therapy, dosage alert etc.
	get detectedIssue() {
		return this.__detectedIssue;
	}

	set detectedIssue(new_value) {
		const Reference = require('./Reference');
		this.__detectedIssue = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// Links to Provenance records for past versions of this resource or fulfilling request or event resources that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the resource.
	get eventHistory() {
		return this.__eventHistory;
	}

	set eventHistory(new_value) {
		const Reference = require('./Reference');
		this.__eventHistory = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			definition: this.__definition && this.__definition.map(v => v.toJSON()),
			basedOn: this.__basedOn && this.__basedOn.map(v => v.toJSON()),
			groupIdentifier: this.__groupIdentifier && this.__groupIdentifier.toJSON(),
			status: this.__status,
			intent: this.__intent,
			category: this.__category && this.__category.toJSON(),
			priority: this.__priority,
			medicationCodeableConcept: this.__medicationCodeableConcept && this.__medicationCodeableConcept.toJSON(),
			medicationReference: this.__medicationReference && this.__medicationReference.toJSON(),
			subject: this.__subject && this.__subject.toJSON(),
			context: this.__context && this.__context.toJSON(),
			supportingInformation: this.__supportingInformation && this.__supportingInformation.map(v => v.toJSON()),
			authoredOn: this.__authoredOn,
			requester: this.__requester && this.__requester.toJSON(),
			recorder: this.__recorder && this.__recorder.toJSON(),
			reasonCode: this.__reasonCode && this.__reasonCode.map(v => v.toJSON()),
			reasonReference: this.__reasonReference && this.__reasonReference.map(v => v.toJSON()),
			note: this.__note && this.__note.map(v => v.toJSON()),
			dosageInstruction: this.__dosageInstruction && this.__dosageInstruction.map(v => v.toJSON()),
			dispenseRequest: this.__dispenseRequest && this.__dispenseRequest.toJSON(),
			substitution: this.__substitution && this.__substitution.toJSON(),
			priorPrescription: this.__priorPrescription && this.__priorPrescription.toJSON(),
			detectedIssue: this.__detectedIssue && this.__detectedIssue.map(v => v.toJSON()),
			eventHistory: this.__eventHistory && this.__eventHistory.map(v => v.toJSON()),
		});
	}
}

module.exports = MedicationRequest;
