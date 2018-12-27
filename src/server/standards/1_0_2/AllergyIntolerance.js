const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class AllergyIntolerance extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'AllergyIntolerance';
		Object.assign(this, opt);
	}

	// This is a AllergyIntolerance resource
	static get __resourceType() {
		return 'AllergyIntolerance';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__AllergyIntolerance = new_value;
	}

	// This records identifiers associated with this allergy/intolerance concern that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// Record of the date and/or time of the onset of the Allergy or Intolerance.
	get onset() {
		return this.__onset;
	}

	set onset(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field onset`);
		}
		this.__onset = new_value;
	}

	// Date when the sensitivity was recorded.
	get recordedDate() {
		return this.__recordedDate;
	}

	set recordedDate(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field recordedDate`);
		}
		this.__recordedDate = new_value;
	}

	// Individual who recorded the record and takes responsibility for its conten.
	get recorder() {
		return this.__recorder;
	}

	set recorder(new_value) {
		const Reference = require('./Reference');
		this.__recorder = new Reference(new_value);
	}

	// The patient who has the allergy or intolerance.
	get patient() {
		return this.__patient;
	}

	set patient(new_value) {
		const Reference = require('./Reference');
		this.__patient = new Reference(new_value);
	}

	// The source of the information about the allergy that is recorded.
	get reporter() {
		return this.__reporter;
	}

	set reporter(new_value) {
		const Reference = require('./Reference');
		this.__reporter = new Reference(new_value);
	}

	// Identification of a substance, or a class of substances, that is considered to be responsible for the adverse reaction risk.
	get substance() {
		return this.__substance;
	}

	set substance(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__substance = new CodeableConcept(new_value);
	}

	// Assertion about certainty associated with the propensity, or potential risk, of a reaction to the identified Substance.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// Estimate of the potential clinical harm, or seriousness, of the reaction to the identified Substance.
	get criticality() {
		return this.__criticality;
	}

	set criticality(new_value) {
		this.__criticality = new_value;
	}

	// Identification of the underlying physiological mechanism for the reaction risk.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// Category of the identified Substance.
	get category() {
		return this.__category;
	}

	set category(new_value) {
		this.__category = new_value;
	}

	// Represents the date and/or time of the last known occurrence of a reaction event.
	get lastOccurence() {
		return this.__lastOccurence;
	}

	set lastOccurence(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field lastOccurence`);
		}
		this.__lastOccurence = new_value;
	}

	// Additional narrative about the propensity for the Adverse Reaction, not captured in other fields.
	get note() {
		return this.__note;
	}

	set note(new_value) {
		const Annotation = require('./Annotation');
		this.__note = new Annotation(new_value);
	}

	// Details about each adverse reaction event linked to exposure to the identified Substance.
	get reaction() {
		return this.__reaction;
	}

	set reaction(new_value) {
		const AllergyIntoleranceReaction = require('./AllergyIntoleranceReaction');
		this.__reaction = Array.isArray(new_value)
			? new_value.map(val => new AllergyIntoleranceReaction(val))
			: [new AllergyIntoleranceReaction(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			onset: this.__onset,
			recordedDate: this.__recordedDate,
			recorder: this.__recorder && this.__recorder.toJSON(),
			patient: this.__patient && this.__patient.toJSON(),
			reporter: this.__reporter && this.__reporter.toJSON(),
			substance: this.__substance && this.__substance.toJSON(),
			status: this.__status,
			criticality: this.__criticality,
			type: this.__type,
			category: this.__category,
			lastOccurence: this.__lastOccurence,
			note: this.__note && this.__note.toJSON(),
			reaction: this.__reaction && this.__reaction.map(v => v.toJSON()),
		});
	}
}

module.exports = AllergyIntolerance;
