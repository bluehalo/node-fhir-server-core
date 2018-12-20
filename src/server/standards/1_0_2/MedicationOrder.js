const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class MedicationOrder extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MedicationOrder';
		Object.assign(this, opt);
	}

	// This is a MedicationOrder resource
	static get __resourceType() {
		return 'MedicationOrder';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__MedicationOrder = new_value;
	}

	// External identifier - one that would be used by another non-FHIR system - for example a re-imbursement system might issue its own id for each prescription that is created.  This is particularly important where FHIR only provides part of an entire workflow process where records have to be tracked through an entire system.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// The date (and perhaps time) when the prescription was written.
	get dateWritten() {
		return this.__dateWritten;
	}

	set dateWritten(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field dateWritten`);
		}
		this.__dateWritten = new_value;
	}

	// A code specifying the state of the order.  Generally this will be active or completed state.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// The date (and perhaps time) when the prescription was stopped.
	get dateEnded() {
		return this.__dateEnded;
	}

	set dateEnded(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field dateEnded`);
		}
		this.__dateEnded = new_value;
	}

	// The reason why the prescription was stopped, if it was.
	get reasonEnded() {
		return this.__reasonEnded;
	}

	set reasonEnded(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reasonEnded = new CodeableConcept(new_value);
	}

	// A link to a resource representing the person to whom the medication will be given.
	get patient() {
		return this.__patient;
	}

	set patient(new_value) {
		const Reference = require('./Reference');
		this.__patient = new Reference(new_value);
	}

	// The healthcare professional responsible for authorizing the prescription.
	get prescriber() {
		return this.__prescriber;
	}

	set prescriber(new_value) {
		const Reference = require('./Reference');
		this.__prescriber = new Reference(new_value);
	}

	// A link to a resource that identifies the particular occurrence of contact between patient and health care provider.
	get encounter() {
		return this.__encounter;
	}

	set encounter(new_value) {
		const Reference = require('./Reference');
		this.__encounter = new Reference(new_value);
	}

	// Can be the reason or the indication for writing the prescription.
	get reasonCodeableConcept() {
		return this.__reasonCodeableConcept;
	}

	set reasonCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reasonCodeableConcept = new CodeableConcept(new_value);
	}

	// Can be the reason or the indication for writing the prescription.
	get reasonReference() {
		return this.__reasonReference;
	}

	set reasonReference(new_value) {
		const Reference = require('./Reference');
		this.__reasonReference = new Reference(new_value);
	}

	// Extra information about the prescription that could not be conveyed by the other attributes.
	get note() {
		return this.__note;
	}

	set note(new_value) {
		this.__note = new_value;
	}

	// Identifies the medication being administered. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.
	get medicationCodeableConcept() {
		return this.__medicationCodeableConcept;
	}

	set medicationCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__medicationCodeableConcept = new CodeableConcept(new_value);
	}

	// Identifies the medication being administered. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.
	get medicationReference() {
		return this.__medicationReference;
	}

	set medicationReference(new_value) {
		const Reference = require('./Reference');
		this.__medicationReference = new Reference(new_value);
	}

	// Indicates how the medication is to be used by the patient.
	get dosageInstruction() {
		return this.__dosageInstruction;
	}

	set dosageInstruction(new_value) {
		const MedicationOrderDosageInstruction = require('./MedicationOrderDosageInstruction');
		this.__dosageInstruction = Array.isArray(new_value)
			? new_value.map(val => new MedicationOrderDosageInstruction(val))
			: [new MedicationOrderDosageInstruction(new_value)];
	}

	// Indicates the specific details for the dispense or medication supply part of a medication order (also known as a Medication Prescription).  Note that this information is NOT always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.
	get dispenseRequest() {
		return this.__dispenseRequest;
	}

	set dispenseRequest(new_value) {
		const MedicationOrderDispenseRequest = require('./MedicationOrderDispenseRequest');
		this.__dispenseRequest = new MedicationOrderDispenseRequest(new_value);
	}

	// Indicates whether or not substitution can or should be part of the dispense. In some cases substitution must happen, in other cases substitution must not happen, and in others it does not matter. This block explains the prescriber\'s intent. If nothing is specified substitution may be done.
	get substitution() {
		return this.__substitution;
	}

	set substitution(new_value) {
		const MedicationOrderSubstitution = require('./MedicationOrderSubstitution');
		this.__substitution = new MedicationOrderSubstitution(new_value);
	}

	// A link to a resource representing an earlier order or prescription that this order supersedes.
	get priorPrescription() {
		return this.__priorPrescription;
	}

	set priorPrescription(new_value) {
		const Reference = require('./Reference');
		this.__priorPrescription = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			dateWritten: this.__dateWritten,
			status: this.__status,
			dateEnded: this.__dateEnded,
			reasonEnded: this.__reasonEnded && this.__reasonEnded.toJSON(),
			patient: this.__patient && this.__patient.toJSON(),
			prescriber: this.__prescriber && this.__prescriber.toJSON(),
			encounter: this.__encounter && this.__encounter.toJSON(),
			reasonCodeableConcept: this.__reasonCodeableConcept && this.__reasonCodeableConcept.toJSON(),
			reasonReference: this.__reasonReference && this.__reasonReference.toJSON(),
			note: this.__note,
			medicationCodeableConcept: this.__medicationCodeableConcept && this.__medicationCodeableConcept.toJSON(),
			medicationReference: this.__medicationReference && this.__medicationReference.toJSON(),
			dosageInstruction: this.__dosageInstruction && this.__dosageInstruction.map(v => v.toJSON()),
			dispenseRequest: this.__dispenseRequest && this.__dispenseRequest.toJSON(),
			substitution: this.__substitution && this.__substitution.toJSON(),
			priorPrescription: this.__priorPrescription && this.__priorPrescription.toJSON(),
		});
	}
}

module.exports = MedicationOrder;
