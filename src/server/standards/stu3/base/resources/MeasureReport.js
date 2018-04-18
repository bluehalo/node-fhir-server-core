const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Code = require('../types/Code');
const Reference = require('../types/Reference');
const Period = require('../types/Period');
const CodeableConcept = require('../types/CodeableConcept');

class Population {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// identifier	Σ	0..1	Identifier	Population identifier as defined in the measure
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// code	Σ	0..1	CodeableConcept	initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-score
	// MeasurePopulationType (Extensible)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// count		0..1	integer	Size of the population
	set count(count) {
		this._count = count;
	}

	get count() {
		return this._count;
	}

	// patients		0..1	Reference(List)	For patient-list reports, the patients in this population
	set patients(patients) {
		this._patients = new Reference(patients);
	}

	get patients() {
		return this._patients;
	}

	// measureScore	Σ	0..1	decimal	What score this stratum achieved
	set measureScore(measureScore) {
		this._measureScore = measureScore;
	}

	get measureScore() {
		return this._measureScore;
	}

	toJSON() {
		return {
			identifier: this._identifier,
			code: this._code,
			count: this._count,
			patients: this._patients,
			measureScore: this._measureScore,
		};
	}
}

class Stratum {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// value		1..1	string	The stratum value, e.g. male
	set value(value) {
		this._value = value;
	}

	get value() {
		return this._value;
	}

	// population		0..*	BackboneElement	Population results in this stratum
	set population(population) {
		if (Array.isArray(population)) {
			this._population = population.map((i) => new Population(i));
		} else {
			this._population = [new Population(population)];
		}
	}

	get population() {
		return this._population;
	}

	toJSON() {
		return {
			value: this._value,
			population: this._population,
		};
	}
}

class Stratifier {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// identifier		0..1	Identifier	What stratifier of the group
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// stratum		0..*	BackboneElement	Stratum results, one for each unique value in the stratifier
	set stratum(stratum) {
		if (Array.isArray(stratum)) {
			this._stratum = stratum.map((i) => new Stratum(i));
		} else {
			this._stratum = [new Stratum(stratum)];
		}
	}

	get stratum() {
		return this._stratum;
	}

	toJSON() {
		return {
			identifier: this._identifier,
			stratum: this._stratum,
		};
	}
}

class Group {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// identifier		1..1	Identifier	What group of the measure
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// population		0..*	BackboneElement	The populations in the group
	set population(population) {
		if (Array.isArray(population)) {
			this._population = population.map((i) => new Population(i));
		} else {
			this._population = [new Population(population)];
		}
	}

	get population() {
		return this._population;
	}

	// identifier	Σ	0..1	Identifier	Population identifier as defined in the measure
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// code	Σ	0..1	CodeableConcept	initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-score
	// MeasurePopulationType (Extensible)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// count		0..1	integer	Size of the population
	set count(count) {
		this._count = count;
	}

	get count() {
		return this._count;
	}

	// patients		0..1	Reference(List)	For patient-list reports, the patients in this population
	set patients(patients) {
		this._patients = new Reference(patients);
	}

	get patients() {
		return this._patients;
	}

	// measureScore	Σ	0..1	decimal	What score this group achieved
	set measureScore(measureScore) {
		this._measureScore = measureScore;
	}

	get measureScore() {
		return this._measureScore;
	}

	// stratifier		0..*	BackboneElement	Stratification results
	set stratifier(stratifier) {
		if (Array.isArray(stratifier)) {
			this._stratifier = stratifier.map((i) => new Stratifier(i));
		} else {
			this._stratifier = [new Stratifier(stratifier)];
		}
	}

	get stratifier() {
		return this._stratifier;
	}

	toJSON() {
		return {
			identifier: this._identifier,
			population: this._population,
			identifier: this._identifier,
			code: this._code,
			count: this._count,
			patients: this._patients,
			measureScore: this._measureScore,
			stratifier: this._stratifier,
		};
	}
}

class MeasureReport extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'MeasureReport';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..1	Identifier	Additional identifier for the Report
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// status	?!Σ	1..1	code	complete | pending | error
	// MeasureReportStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// type	Σ	1..1	code	individual | patient-list | summary
	// MeasureReportType (Required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// measure	Σ	1..1	Reference(Measure)	What measure was evaluated
	set measure(measure) {
		this._measure = new Reference(measure);
	}

	get measure() {
		return this._measure;
	}

	// patient	Σ	0..1	Reference(Patient)	What patient the report is for
	set patient(patient) {
		this._patient = new Reference(patient);
	}

	get patient() {
		return this._patient;
	}

	// date	Σ	0..1	dateTime	When the report was generated
	set date(date) {
		this._date = date;
	}

	get date() {
		return this._date;
	}

	// reportingOrganization	Σ	0..1	Reference(Organization)	Who is reporting the data
	set reportingOrganization(reportingOrganization) {
		this._reportingOrganization = new Reference(reportingOrganization);
	}

	get reportingOrganization() {
		return this._reportingOrganization;
	}

	// period	Σ	1..1	Period	What period the report covers
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	// evaluatedResources		0..1	Reference(Bundle)	What data was evaluated to produce the measure score
	set evaluatedResources(evaluatedResources) {
		this._evaluatedResources = new Reference(evaluatedResources);
	}

	get evaluatedResources() {
		return this._evaluatedResources;
	}

	// group		0..*	BackboneElement	Measure results for each group
	set group(group) {
		if (Array.isArray(group)) {
			this._group = group.map((i) => new Group(i));
		} else {
			this._group = [new Group(group)];
		}
	}

	get group() {
		return this._group;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			status: this._status,
			type: this._type,
			measure: this._measure,
			patient: this._patient,
			date: this._date,
			reportingOrganization: this._reportingOrganization,
			period: this._period,
			evaluatedResources: this._evaluatedResources,
			group: this._group,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.MeasureReport = MeasureReport;
module.exports.Group = Group;
module.exports.Stratifier = Stratifier;
module.exports.Stratum = Stratum;
module.exports.Population = Population;
