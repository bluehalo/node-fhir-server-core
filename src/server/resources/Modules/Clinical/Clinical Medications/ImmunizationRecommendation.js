const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Reference = require('./types/Reference');
const CodeableConcept = require('./types/CodeableConcept');

class Protocol {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// doseSequence		0..1	positiveInt	Dose number within sequence
	set doseSequence(doseSequence) {
		this._doseSequence = doseSequence;
	}

	get doseSequence() {
		return this._doseSequence;
	}

	// description		0..1	string	Protocol details
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// authority		0..1	Reference(Organization)	Who is responsible for protocol
	set authority(authority) {
		this._authority = new Reference(authority);
	}

	get authority() {
		return this._authority;
	}

	// series		0..1	string	Name of vaccination series
	set series(series) {
		this._series = series;
	}

	get series() {
		return this._series;
	}

	toJSON() {
		return {
			doseSequence: this._doseSequence,
			description: this._description,
			authority: this._authority,
			series: this._series,
		};
	}
}

class DateCriterion {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// code		1..1	CodeableConcept	Type of date
	// Immunization Recommendation Date Criterion Codes (Example)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// value		1..1	dateTime	Recommended date
	set value(value) {
		this._value = value;
	}

	get value() {
		return this._value;
	}

	toJSON() {
		return {
			code: this._code,
			value: this._value,
		};
	}
}

class Recommendation {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// date	Σ	1..1	dateTime	Date recommendation created
	set date(date) {
		this._date = date;
	}

	get date() {
		return this._date;
	}

	// vaccineCode	Σ	0..1	CodeableConcept	Vaccine recommendation applies to
	// Vaccine Administered Value Set (Example)
	set vaccineCode(vaccineCode) {
		this._vaccineCode = new CodeableConcept(vaccineCode);
	}

	get vaccineCode() {
		return this._vaccineCode;
	}

	// targetDisease	Σ	0..1	CodeableConcept	Disease to be immunized against
	// Immunization Recommendation Target Disease Codes (Example)
	set targetDisease(targetDisease) {
		this._targetDisease = new CodeableConcept(targetDisease);
	}

	get targetDisease() {
		return this._targetDisease;
	}

	// doseNumber	Σ	0..1	positiveInt	Recommended dose number
	set doseNumber(doseNumber) {
		this._doseNumber = doseNumber;
	}

	get doseNumber() {
		return this._doseNumber;
	}

	// forecastStatus	Σ	1..1	CodeableConcept	Vaccine administration status
	// Immunization Recommendation Status Codes (Example)
	set forecastStatus(forecastStatus) {
		this._forecastStatus = new CodeableConcept(forecastStatus);
	}

	get forecastStatus() {
		return this._forecastStatus;
	}

	// supportingImmunization		0..*	Reference(Immunization)	Past immunizations supporting recommendation
	set supportingImmunization(supportingImmunization) {
		if (Array.isArray(supportingImmunization)) {
			this._supportingImmunization = supportingImmunization.map((i) => new Reference(i));
		} else {
			this._supportingImmunization = [new Reference(supportingImmunization)];
		}
	}

	get supportingImmunization() {
		return this._supportingImmunization;
	}

	// supportingPatientInformation		0..*	Reference(Observation | AllergyIntolerance)	Patient observations supporting recommendation
	set supportingPatientInformation(supportingPatientInformation) {
		if (Array.isArray(supportingPatientInformation)) {
			this._supportingPatientInformation = supportingPatientInformation.map((i) => new Reference(i));
		} else {
			this._supportingPatientInformation = [new Reference(supportingPatientInformation)];
		}
	}

	get supportingPatientInformation() {
		return this._supportingPatientInformation;
	}

	// dateCriterion		0..*	BackboneElement	Dates governing proposed immunization
	set dateCriterion(dateCriterion) {
		if (Array.isArray(dateCriterion)) {
			this._dateCriterion = dateCriterion.map((i) => new DateCriterion(i));
		} else {
			this._dateCriterion = [new DateCriterion(dateCriterion)];
		}
	}

	get dateCriterion() {
		return this._dateCriterion;
	}

	// protocol		0..1	BackboneElement	Protocol used by recommendation
	set protocol(protocol) {
		this._protocol = new Protocol(protocol);
	}

	get protocol() {
		return this._protocol;
	}

	toJSON() {
		return {
			date: this._date,
			vaccineCode: this._vaccineCode,
			targetDisease: this._targetDisease,
			doseNumber: this._doseNumber,
			forecastStatus: this._forecastStatus,
			supportingImmunization: this._supportingImmunization,
			supportingPatientInformation: this._supportingPatientInformation,
			dateCriterion: this._dateCriterion,
			protocol: this._protocol,
		};
	}
}

class ImmunizationRecommendation extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'ImmunizationRecommendation';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	Identifier	Business identifier
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

	// patient	Σ	1..1	Reference(Patient)	Who this profile is for
	set patient(patient) {
		this._patient = new Reference(patient);
	}

	get patient() {
		return this._patient;
	}

	// recommendation	ΣI	1..*	BackboneElement	Vaccine administration recommendations
	// + One of vaccineCode or targetDisease SHALL be present
	set recommendation(recommendation) {
		if (Array.isArray(recommendation)) {
			this._recommendation = recommendation.map((i) => new Recommendation(i));
		} else {
			this._recommendation = [new Recommendation(recommendation)];
		}
	}

	get recommendation() {
		return this._recommendation;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			patient: this._patient,
			recommendation: this._recommendation,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.ImmunizationRecommendation = ImmunizationRecommendation;
module.exports.Recommendation = Recommendation;
module.exports.DateCriterion = DateCriterion;
module.exports.Protocol = Protocol;
