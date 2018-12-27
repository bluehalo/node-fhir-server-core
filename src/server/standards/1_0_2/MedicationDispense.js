const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class MedicationDispense extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MedicationDispense';
		Object.assign(this, opt);
	}

	// This is a MedicationDispense resource
	static get __resourceType() {
		return 'MedicationDispense';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__MedicationDispense = new_value;
	}

	// Identifier assigned by the dispensing facility - this is an identifier assigned outside FHIR.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// A code specifying the state of the set of dispense events.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// A link to a resource representing the person to whom the medication will be given.
	get patient() {
		return this.__patient;
	}

	set patient(new_value) {
		const Reference = require('./Reference');
		this.__patient = new Reference(new_value);
	}

	// The individual responsible for dispensing the medication.
	get dispenser() {
		return this.__dispenser;
	}

	set dispenser(new_value) {
		const Reference = require('./Reference');
		this.__dispenser = new Reference(new_value);
	}

	// Indicates the medication order that is being dispensed against.
	get authorizingPrescription() {
		return this.__authorizingPrescription;
	}

	set authorizingPrescription(new_value) {
		const Reference = require('./Reference');
		this.__authorizingPrescription = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// Indicates the type of dispensing event that is performed. For example, Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// The amount of medication that has been dispensed. Includes unit of measure.
	get quantity() {
		return this.__quantity;
	}

	set quantity(new_value) {
		const Quantity = require('./Quantity');
		this.__quantity = new Quantity(new_value);
	}

	// The amount of medication expressed as a timing amount.
	get daysSupply() {
		return this.__daysSupply;
	}

	set daysSupply(new_value) {
		const Quantity = require('./Quantity');
		this.__daysSupply = new Quantity(new_value);
	}

	// Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
	get medicationCodeableConcept() {
		return this.__medicationCodeableConcept;
	}

	set medicationCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__medicationCodeableConcept = new CodeableConcept(new_value);
	}

	// Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
	get medicationReference() {
		return this.__medicationReference;
	}

	set medicationReference(new_value) {
		const Reference = require('./Reference');
		this.__medicationReference = new Reference(new_value);
	}

	// The time when the dispensed product was packaged and reviewed.
	get whenPrepared() {
		return this.__whenPrepared;
	}

	set whenPrepared(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field whenPrepared`);
		}
		this.__whenPrepared = new_value;
	}

	// The time the dispensed product was provided to the patient or their representative.
	get whenHandedOver() {
		return this.__whenHandedOver;
	}

	set whenHandedOver(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field whenHandedOver`);
		}
		this.__whenHandedOver = new_value;
	}

	// Identification of the facility/location where the medication was shipped to, as part of the dispense event.
	get destination() {
		return this.__destination;
	}

	set destination(new_value) {
		const Reference = require('./Reference');
		this.__destination = new Reference(new_value);
	}

	// Identifies the person who picked up the medication.  This will usually be a patient or their caregiver, but some cases exist where it can be a healthcare professional.
	get receiver() {
		return this.__receiver;
	}

	set receiver(new_value) {
		const Reference = require('./Reference');
		this.__receiver = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Extra information about the dispense that could not be conveyed in the other attributes.
	get note() {
		return this.__note;
	}

	set note(new_value) {
		this.__note = new_value;
	}

	// Indicates how the medication is to be used by the patient.
	get dosageInstruction() {
		return this.__dosageInstruction;
	}

	set dosageInstruction(new_value) {
		const MedicationDispenseDosageInstruction = require('./MedicationDispenseDosageInstruction');
		this.__dosageInstruction = Array.isArray(new_value)
			? new_value.map(val => new MedicationDispenseDosageInstruction(val))
			: [new MedicationDispenseDosageInstruction(new_value)];
	}

	// Indicates whether or not substitution was made as part of the dispense.  In some cases substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.
	get substitution() {
		return this.__substitution;
	}

	set substitution(new_value) {
		const MedicationDispenseSubstitution = require('./MedicationDispenseSubstitution');
		this.__substitution = new MedicationDispenseSubstitution(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.toJSON(),
			status: this.__status,
			patient: this.__patient && this.__patient.toJSON(),
			dispenser: this.__dispenser && this.__dispenser.toJSON(),
			authorizingPrescription: this.__authorizingPrescription && this.__authorizingPrescription.map(v => v.toJSON()),
			type: this.__type && this.__type.toJSON(),
			quantity: this.__quantity && this.__quantity.toJSON(),
			daysSupply: this.__daysSupply && this.__daysSupply.toJSON(),
			medicationCodeableConcept: this.__medicationCodeableConcept && this.__medicationCodeableConcept.toJSON(),
			medicationReference: this.__medicationReference && this.__medicationReference.toJSON(),
			whenPrepared: this.__whenPrepared,
			whenHandedOver: this.__whenHandedOver,
			destination: this.__destination && this.__destination.toJSON(),
			receiver: this.__receiver && this.__receiver.map(v => v.toJSON()),
			note: this.__note,
			dosageInstruction: this.__dosageInstruction && this.__dosageInstruction.map(v => v.toJSON()),
			substitution: this.__substitution && this.__substitution.toJSON(),
		});
	}
}

module.exports = MedicationDispense;
