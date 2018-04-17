const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Reference = require('./types/Reference');
const Code = require('./types/Code');
const CodeableConcept = require('./types/CodeableConcept');
const Period = require('./types/Period');
const Annotation = require('./types/Annotation');
const Dosage = require('./types/Dosage');

class MedicationStatement extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'MedicationStatement';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	Identifier	External identifier
	set identifier(identifier) {
		if (Array.isArray(identifier)) {
			this._identifier = identifier.map((i) => new Identifier(i));
		} else {
			this._identifier = [new Identifier(identifier)];
		}
	}

	get identifier() {
		return this._identifier;
	}

	// basedOn	Σ	0..*	Reference(MedicationRequest | CarePlan | ProcedureRequest | ReferralRequest)	Fulfils plan, proposal or order
	set basedOn(basedOn) {
		if (Array.isArray(basedOn)) {
			this._basedOn = basedOn.map((i) => new Reference(i));
		} else {
			this._basedOn = [new Reference(basedOn)];
		}
	}

	get basedOn() {
		return this._basedOn;
	}

	// partOf	Σ	0..*	Reference(MedicationAdministration | MedicationDispense | MedicationStatement | Procedure | Observation)	Part of referenced event
	set partOf(partOf) {
		if (Array.isArray(partOf)) {
			this._partOf = partOf.map((i) => new Reference(i));
		} else {
			this._partOf = [new Reference(partOf)];
		}
	}

	get partOf() {
		return this._partOf;
	}

	// context	Σ	0..1	Reference(Encounter | EpisodeOfCare)	Encounter / Episode associated with MedicationStatement
	set context(context) {
		this._context = new Reference(context);
	}

	get context() {
		return this._context;
	}

	// status	?!Σ	1..1	code	active | completed | entered-in-error | intended | stopped | on-hold
	// MedicationStatementStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// category	Σ	0..1	CodeableConcept	Type of medication usage
	// MedicationStatementCategory (Preferred)
	set category(category) {
		this._category = new CodeableConcept(category);
	}

	get category() {
		return this._category;
	}

	// medication[x]	Σ	1..1		What medication was taken
	// SNOMED CT Medication Codes (Example)
	// medicationCodeableConcept			CodeableConcept
	set medicationCodeableConcept(medicationCodeableConcept) {
		this._medicationCodeableConcept = new CodeableConcept(medicationCodeableConcept);
	}

	get medicationCodeableConcept() {
		return this._medicationCodeableConcept;
	}

	// medicationReference			Reference
	set medicationReference(medicationReference) {
		this._medicationReference = new Reference(medicationReference);
	}

	get medicationReference() {
		return this._medicationReference;
	}

	// effective[x]	Σ	0..1		The date/time or interval when the medication was taken
	// effectiveDateTime			dateTime
	set effectiveDateTime(effectiveDateTime) {
		this._effectiveDateTime = effectiveDateTime;
	}

	get effectiveDateTime() {
		return this._effectiveDateTime;
	}

	// effectivePeriod			Period
	set effectivePeriod(effectivePeriod) {
		this._effectivePeriod = new Period(effectivePeriod);
	}

	get effectivePeriod() {
		return this._effectivePeriod;
	}

	// dateAsserted	Σ	0..1	dateTime	When the statement was asserted?
	set dateAsserted(dateAsserted) {
		this._dateAsserted = dateAsserted;
	}

	get dateAsserted() {
		return this._dateAsserted;
	}

	// informationSource		0..1	Reference(Patient | Practitioner | RelatedPerson | Organization)	Person or organization that provided the information about the taking of this medication
	set informationSource(informationSource) {
		this._informationSource = new Reference(informationSource);
	}

	get informationSource() {
		return this._informationSource;
	}

	// subject	Σ	1..1	Reference(Patient | Group)	Who is/was taking the medication
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// derivedFrom		0..*	Reference(Any)	Additional supporting information
	set derivedFrom(derivedFrom) {
		if (Array.isArray(derivedFrom)) {
			this._derivedFrom = derivedFrom.map((i) => new Reference(i));
		} else {
			this._derivedFrom = [new Reference(derivedFrom)];
		}
	}

	get derivedFrom() {
		return this._derivedFrom;
	}

	// taken	?!Σ	1..1	code	y | n | unk | na
	// MedicationStatementTaken (Required)
	set taken(taken) {
		this._taken = new Code(taken);
	}

	get taken() {
		return this._taken;
	}

	// reasonNotTaken	I	0..*	CodeableConcept	True if asserting medication was not given
	// SNOMED CT Drugs not taken/completed Codes (Example)
	set reasonNotTaken(reasonNotTaken) {
		if (Array.isArray(reasonNotTaken)) {
			this._reasonNotTaken = reasonNotTaken.map((i) => new CodeableConcept(i));
		} else {
			this._reasonNotTaken = [new CodeableConcept(reasonNotTaken)];
		}
	}

	get reasonNotTaken() {
		return this._reasonNotTaken;
	}

	// reasonCode		0..*	CodeableConcept	Reason for why the medication is being/was taken
	// Condition/Problem/Diagnosis Codes (Example)
	set reasonCode(reasonCode) {
		if (Array.isArray(reasonCode)) {
			this._reasonCode = reasonCode.map((i) => new CodeableConcept(i));
		} else {
			this._reasonCode = [new CodeableConcept(reasonCode)];
		}
	}

	get reasonCode() {
		return this._reasonCode;
	}

	// reasonReference		0..*	Reference(Condition | Observation)	Condition or observation that supports why the medication is being/was taken
	set reasonReference(reasonReference) {
		if (Array.isArray(reasonReference)) {
			this._reasonReference = reasonReference.map((i) => new Reference(i));
		} else {
			this._reasonReference = [new Reference(reasonReference)];
		}
	}

	get reasonReference() {
		return this._reasonReference;
	}

	// note		0..*	Annotation	Further information about the statement
	set note(note) {
		if (Array.isArray(note)) {
			this._note = note.map((i) => new Annotation(i));
		} else {
			this._note = [new Annotation(note)];
		}
	}

	get note() {
		return this._note;
	}

	// dosage		0..*	Dosage	Details of how medication is/was taken or should be taken
	set dosage(dosage) {
		if (Array.isArray(dosage)) {
			this._dosage = dosage.map((i) => new Dosage(i));
		} else {
			this._dosage = [new Dosage(dosage)];
		}
	}

	get dosage() {
		return this._dosage;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			basedOn: this._basedOn,
			partOf: this._partOf,
			context: this._context,
			status: this._status,
			category: this._category,
			medicationCodeableConcept: this._medicationCodeableConcept,
			medicationReference: this._medicationReference,
			effectiveDateTime: this._effectiveDateTime,
			effectivePeriod: this._effectivePeriod,
			dateAsserted: this._dateAsserted,
			informationSource: this._informationSource,
			subject: this._subject,
			derivedFrom: this._derivedFrom,
			taken: this._taken,
			reasonNotTaken: this._reasonNotTaken,
			reasonCode: this._reasonCode,
			reasonReference: this._reasonReference,
			note: this._note,
			dosage: this._dosage,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.MedicationStatement = MedicationStatement;
