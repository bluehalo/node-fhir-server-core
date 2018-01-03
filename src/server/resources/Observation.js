const path = require('path');
const DomainResource = require(path.resolve('./src/server/resources/types/DomainResource'));
const CodeableConcept = require(path.resolve('./src/server/resources/types/CodeableConcept'));
const Identifier = require(path.resolve('./src/server/resources/types/Identifier'));
const Code = require(path.resolve('./src/server/resources/types/Code'));
const Reference = require(path.resolve('./src/server/resources/types/Reference'));
const ReferenceRange = require(path.resolve('./src/server/resources/types/ReferenceRange'));
const Quantity = require(path.resolve('./src/server/resources/types/Quantity'));
const Component = require(path.resolve('./src/server/resources/types/Component'));


class Observation extends DomainResource {
	constructor(obj) {
		super();
		Object.assign(this, obj);
		this._resourceType = 'Observation';
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier		0..*	Identifier	Unique Id for this particular observation
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

	// status	?! Σ	1..1	code	registered | preliminary | final | amended +
	// ObservationStatus
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// category		0..1	CodeableConcept	Classification of type of observation
	// Observation Category Codes
	set category(category) {
		this._category = new CodeableConcept(category);
	}

	get category() {
		return this._category;
	}

	// code	Σ	1..1	CodeableConcept	Type of observation (code / type)
	// LOINC Codes
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// Σ	0..1 Reference(Patient | Group | Device | Location)	Who and/or what this is about
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// 0..1 Reference(Encounter) Healthcare event during which this observation is made
	set encounter(encounter) {
		this._encounter = new Reference(encounter);
	}

	get encounter() {
		return this._encounter;
	}

	// Σ	0..1 effectiveDateTime datetime Clinically relevant time/time-period for observation
	set effectiveDateTime(effectiveDateTime) {
		this._effectiveDateTime = effectiveDateTime;
	}

	get effectiveDateTime() {
		return this._effectiveDateTime;
	}

	// Σ	0..1 effectiveDateTime datetime Clinically relevant time/time-period for observation
	set effectivePeriod(effectivePeriod) {
		this._effectivePeriod = effectivePeriod;
	}

	get effectivePeriod() {
		return this._effectivePeriod;
	}

	// Σ	0..1	instant	Date/Time this was made available
	set issued(issued) {
		this._issued = issued;
	}

	get issued() {
		return this._issued;
	}

	// Σ	0..*	Reference(Practitioner | Organization | Patient | RelatedPerson)	Who is responsible for the observation
	set performer(performer) {
		if (Array.isArray(performer)) {
			this._performer = performer.map((i) => new Reference(i));
		} else {
			this._performer = [new Reference(performer)];
		}
	}

	get performer() {
		return this._performer;
	}

	// Σ	0..1		Actual result
	set value(value) {
		//this[`_${value.constructor.name}`] = value;
		this._value = value;
	}

	get value() {
		return this._value;
	}

	// move this
	set valueQuantity(valueQuantity) {
		this._valueQuantity = new Quantity(valueQuantity);
	}

	get valueQuantity() {
		return this._valueQuantity;
	}

	// I	0..1	CodeableConcept	Why the result is missing
	// Observation Value Absent Reason (Extensible)
	set dataAbsentReason(dataAbsentReason) {
		this._dataAbsentReason = new CodeableConcept(dataAbsentReason);
	}

	get dataAbsentReason() {
		return this._dataAbsentReason;
	}

	// 	0..1	CodeableConcept	High, low, normal, etc.
	// Observation Interpretation Codes (Extensible)
	set interpretation(interpretation) {
		this._interpretation = new CodeableConcept(interpretation);
	}

	get interpretation() {
		return this._interpretation;
	}

	// 	0..1	string	Comments about result
	set comments(comments) {
		this._comments = comments;
	}

	get comments() {
		return this._comments;
	}

	// 0..1	CodeableConcept	Observed body part
	// SNOMED CT Body Structures (Example)
	set bodySite(bodySite) {
		this._bodySite = new CodeableConcept(bodySite);
	}

	get bodySite() {
		return this._bodySite;
	}

	// 0..1	CodeableConcept	How it was done
	// Observation Methods (Example)
	set method(method) {
		this._method = new CodeableConcept(method);
	}

	get method() {
		return this._method;
	}

	// 0..1	Reference(Specimen)	Specimen used for this observation
	set specimen(specimen) {
		this._specimen = new Reference(specimen);
	}

	get specimen() {
		return this._specimen;
	}

	// 0..1	Reference(Device | DeviceMetric)	(Measurement) Device
	set device(device) {
		this._device = new Reference(device);
	}

	get device() {
		return this._device;
	}

	// I	0..*	BackboneElement	Provides guide for interpretation
	// Must have at least a low or a high or text
	set referenceRange(referenceRange) {
		if (Array.isArray(referenceRange)) {
			this._referenceRange = referenceRange.map((x) => new ReferenceRange(x));
		} else {
			this._referenceRange = [new ReferenceRange(referenceRange)];
		}
	}

	get referenceRange() {
		return this._referenceRange;
	}

	// Σ	0..*	BackboneElement	Σ	0..*	BackboneElement	Component results results
	set component(component) {
		if (Array.isArray(component)) {
			this._component = component.map((x) => new Component(x));
		} else {
			this._component = [new Component(component)];
		}
	}

	get component() {
		return this._component;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			status: this._status,
			category: this._category,
			code: this._code,
			subject: this._subject,
			encounter: this._encounter,
			effectiveDateTime: this._effectiveDateTime,
			effectivePeriod: this._effectivePeriod,
			performer: this._performer,
			// value(x)
			valueQuantity: this._valueQuantity,
			dataAbsentReason: this._dataAbsentReason,
			interpretation: this._interpretation,
			comments: this._comments,
			bodySite: this._bodySite,
			method: this._method,
			referenceRange: this._referenceRange,
			component: this._component
		};

		// return in order
		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}

}

module.exports = Observation;
