const DomainResource = require('../../generic/types/DomainResource');
const Meta = require('../../generic/types/Meta');
const Code = require('../../generic/types/Code');
const Narrative = require('../types/Narrative');
const Resource = require('../../generic/types/Resource');
const Extension = require('../../generic/types/Extension');
const Identifier = require('../types/Identifier');
const CodeableConcept = require('../../generic/types/CodeableConcept');
const Reference = require('../../generic/types/Reference');
const Period = require('../../generic/types/Period');
const Annotation = require('../../generic/types/Annotation');

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

	// id	*	0..1	id	Logical id of this artifact
	set id(id) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

	// meta	*	0..1	Meta	Metadata about the resource
	set meta(meta) {
		this._meta = new Meta(meta);
	}

	get meta() {
		return this._meta;
	}

	// implicitRules	?!*	0..1	uri	A set of rules under which this content was created
	set implicitRules(implicitRules) {
		this._implicitRules = implicitRules;
	}

	get implicitRules() {
		return this._implicitRules;
	}

	// language		0..1	code	Language of the resource content
	// Binding: Common Languages (extensible)
	set language(language) {
		this._language = new Code(language);
	}

	get language() {
		return this._language;
	}

	// text	I	0..1	Narrative	Text summary of the resource, for human interpretation
	set text(text) {
		this._text = new Narrative(text);
	}

	get text() {
		return this._text;
	}

	// contained		0..*	Resource	Contained, inline Resources
	set contained(contained) {
		if (Array.isArray(contained)) {
			this._contained = contained.map((i) => new Resource(i));
		} else {
			this._contained = [new Resource(contained)];
		}
	}

	get contained() {
		return this._contained;
	}

	// extension		0..*	Extension	Additional Content defined by implementations
	set extension(extension) {
		if (Array.isArray(extension)) {
			this._extension = extension.map((i) => new Extension(i));
		} else {
			this._extension = [new Extension(extension)];
		}
	}

	get extension() {
		return this._extension;
	}

	// modifierExtension	?!	0..*	Extension	Extensions that cannot be ignored
	set modifierExtension(modifierExtension) {
		if (Array.isArray(modifierExtension)) {
			this._modifierExtension = modifierExtension.map((i) => new Extension(i));
		} else {
			this._modifierExtension = [new Extension(modifierExtension)];
		}
	}

	get modifierExtension() {
		return this._modifierExtension;
	}

	// identifier		0..*	Identifier	External identifier
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

	// status	?!S	1..1	code	active | completed | entered-in-error | intended | stopped | on-hold
	// Binding: MedicationStatementStatus (required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
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

	// subject	S	1..1	Reference(US Core Patient Profile)	Who is/was taking the medication
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
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

	// informationSource		0..1	Reference(Patient), Reference(Practitioner), Reference(RelatedPerson), Reference(Organization)	Person or organization that provided the information about the taking of this medication
	set informationSource(informationSource) {
		this._informationSource = new Reference(informationSource);
	}

	get informationSource() {
		return this._informationSource;
	}

	// derivedFrom		0..*	Reference(Resource)	Additional supporting information
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

	// dateAsserted	S	1..1	dateTime	When the statement was asserted?
	set dateAsserted(dateAsserted) {
		this._dateAsserted = dateAsserted;
	}

	get dateAsserted() {
		return this._dateAsserted;
	}

	// notTaken	?!*	0..1	code	y | n | unk
	// Binding: MedicationStatementNotTaken (required)
	set notTaken(notTaken) {
		this._notTaken = new Code(notTaken);
	}

	get notTaken() {
		return this._notTaken;
	}

	// reasonNotTaken	I	0..*	CodeableConcept	True if asserting medication was not given
	// Binding: SNOMED CT Drugs not taken/completed Codes (example)
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

	// reasonForUseCodeableConcept		0..*	CodeableConcept	Reason for why the medication is being/was taken
	// Binding: Condition/Problem/Diagnosis Codes (example)
	set reasonForUseCodeableConcept(reasonForUseCodeableConcept) {
		if (Array.isArray(reasonForUseCodeableConcept)) {
			this._reasonForUseCodeableConcept = reasonForUseCodeableConcept.map((i) => new CodeableConcept(i));
		} else {
			this._reasonForUseCodeableConcept = [new CodeableConcept(reasonForUseCodeableConcept)];
		}
	}

	get reasonForUseCodeableConcept() {
		return this._reasonForUseCodeableConcept;
	}

	// reasonForUseReference		0..*	Reference(Condition), Reference(Observation)	Condition or observation that supports why the medication is being/was taken
	set reasonForUseReference(reasonForUseReference) {
		if (Array.isArray(reasonForUseReference)) {
			this._reasonForUseReference = reasonForUseReference.map((i) => new Reference(i));
		} else {
			this._reasonForUseReference = [new Reference(reasonForUseReference)];
		}
	}

	get reasonForUseReference() {
		return this._reasonForUseReference;
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

	// category		0..1	code	Type of medication usage
	// Binding: MedicationStatementCategory (example)
	set category(category) {
		this._category = new Code(category);
	}

	get category() {
		return this._category;
	}

	// dosage		0..*	DosageInstruction	Details of how medication was taken
	set dosage(dosage) {
		this._dosage = [].concat(dosage);
	}

	get dosage() {
		return this._dosage;
	}

	toJSON() {
		const json = {
			id: this._id,
			meta: this._meta,
			implicitRules: this._implicitRules,
			language: this._language,
			text: this._text,
			contained: this._contained,
			extension: this._extension,
			modifierExtension: this._modifierExtension,
			identifier: this._identifier,
			status: this._status,
			medicationCodeableConcept: this._medicationCodeableConcept,
			medicationReference: this._medicationReference,
			subject: this._subject,
			effectiveDateTime: this._effectiveDateTime,
			effectivePeriod: this._effectivePeriod,
			informationSource: this._informationSource,
			derivedFrom: this._derivedFrom,
			dateAsserted: this._dateAsserted,
			notTaken: this._notTaken,
			reasonNotTaken: this._reasonNotTaken,
			reasonForUseCodeableConcept: this._reasonForUseCodeableConcept,
			reasonForUseReference: this._reasonForUseReference,
			note: this._note,
			category: this._category,
			dosage: this._dosage,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.MedicationStatement = MedicationStatement;
