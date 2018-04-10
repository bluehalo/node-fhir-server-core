const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Code = require('./types/Code');
const CodeableConcept = require('./types/CodeableConcept');
const Reference = require('./types/Reference');

class Mitigation {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// action		1..1	CodeableConcept	What mitigation?
	// Detected Issue Mitigation Action (Preferred)
	set action(action) {
		this._action = new CodeableConcept(action);
	}

	get action() {
		return this._action;
	}

	// date		0..1	dateTime	Date committed
	set date(date) {
		this._date = date;
	}

	get date() {
		return this._date;
	}

	// author		0..1	Reference(Practitioner)	Who is committing?
	set author(author) {
		this._author = new Reference(author);
	}

	get author() {
		return this._author;
	}

	toJSON() {
		return {
			action: this._action,
			date: this._date,
			author: this._author,
		};
	}
}

class DetectedIssue extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'DetectedIssue';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..1	Identifier	Unique id for the detected issue
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// status	?!Σ	1..1	code	registered | preliminary | final | amended +
	// ObservationStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// category	Σ	0..1	CodeableConcept	Issue Category, e.g. drug-drug, duplicate therapy, etc.
	// Detected Issue Category (Preferred)
	set category(category) {
		this._category = new CodeableConcept(category);
	}

	get category() {
		return this._category;
	}

	// severity	Σ	0..1	code	high | moderate | low
	// DetectedIssueSeverity (Required)
	set severity(severity) {
		this._severity = new Code(severity);
	}

	get severity() {
		return this._severity;
	}

	// patient	Σ	0..1	Reference(Patient)	Associated patient
	set patient(patient) {
		this._patient = new Reference(patient);
	}

	get patient() {
		return this._patient;
	}

	// date	Σ	0..1	dateTime	When identified
	set date(date) {
		this._date = date;
	}

	get date() {
		return this._date;
	}

	// author	Σ	0..1	Reference(Practitioner | Device)	The provider or device that identified the issue
	set author(author) {
		this._author = new Reference(author);
	}

	get author() {
		return this._author;
	}

	// implicated	Σ	0..*	Reference(Any)	Problem resource
	set implicated(implicated) {
		if (Array.isArray(implicated)) {
			this._implicated = implicated.map((i) => new Reference(i));
		} else {
			this._implicated = [new Reference(implicated)];
		}
	}

	get implicated() {
		return this._implicated;
	}

	// detail		0..1	string	Description and context
	set detail(detail) {
		this._detail = detail;
	}

	get detail() {
		return this._detail;
	}

	// reference		0..1	uri	Authority for issue
	set reference(reference) {
		this._reference = reference;
	}

	get reference() {
		return this._reference;
	}

	// mitigation		0..*	BackboneElement	Step taken to address
	set mitigation(mitigation) {
		if (Array.isArray(mitigation)) {
			this._mitigation = mitigation.map((i) => new Mitigation(i));
		} else {
			this._mitigation = [new Mitigation(mitigation)];
		}
	}

	get mitigation() {
		return this._mitigation;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			status: this._status,
			category: this._category,
			severity: this._severity,
			patient: this._patient,
			date: this._date,
			author: this._author,
			implicated: this._implicated,
			detail: this._detail,
			reference: this._reference,
			mitigation: this._mitigation,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.DetectedIssue = DetectedIssue;
module.exports.Mitigation = Mitigation;
