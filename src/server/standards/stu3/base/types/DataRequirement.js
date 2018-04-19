const Element = require('./types/Element');
const Code = require('./types/Code');
const Period = require('./types/Period');
const Reference = require('./types/Reference');
const Coding = require('./types/Coding');
const CodeableConcept = require('./types/CodeableConcept');

class CodeFilter extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	// path	Σ	1..1	string	The code-valued attribute of the filter
	set path(path) {
		this._path = path;
	}

	get path() {
		return this._path;
	}

	// valueSet[x]	Σ	0..1		Valueset for the filter
	// valueSetString			string
	set valueSetString(valueSetString) {
		this._valueSetString = valueSetString;
	}

	get valueSetString() {
		return this._valueSetString;
	}

	// valueSetReference			Reference
	set valueSetReference(valueSetReference) {
		this._valueSetReference = new Reference(valueSetReference);
	}

	get valueSetReference() {
		return this._valueSetReference;
	}

	// valueCode	Σ	0..*	code	What code is expected
	set valueCode(valueCode) {
		if (Array.isArray(valueCode)) {
			this._valueCode = valueCode.map((i) => new Code(i));
		} else {
			this._valueCode = [new Code(valueCode)];
		}
	}

	get valueCode() {
		return this._valueCode;
	}

	// valueCoding	Σ	0..*	Coding	What Coding is expected
	set valueCoding(valueCoding) {
		if (Array.isArray(valueCoding)) {
			this._valueCoding = valueCoding.map((i) => new Coding(i));
		} else {
			this._valueCoding = [new Coding(valueCoding)];
		}
	}

	get valueCoding() {
		return this._valueCoding;
	}

	// valueCodeableConcept	Σ	0..*	CodeableConcept	What CodeableConcept is expected
	set valueCodeableConcept(valueCodeableConcept) {
		if (Array.isArray(valueCodeableConcept)) {
			this._valueCodeableConcept = valueCodeableConcept.map((i) => new CodeableConcept(i));
		} else {
			this._valueCodeableConcept = [new CodeableConcept(valueCodeableConcept)];
		}
	}

	get valueCodeableConcept() {
		return this._valueCodeableConcept;
	}

	toJSON() {
		return {
			path: this._path,
			valueSetString: this._valueSetString,
			valueSetReference: this._valueSetReference,
			valueCode: this._valueCode,
			valueCoding: this._valueCoding,
			valueCodeableConcept: this._valueCodeableConcept,
		};
	}
}

class DateFilter extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	// path	Σ	1..1	string	The date-valued attribute of the filter
	set path(path) {
		this._path = path;
	}

	get path() {
		return this._path;
	}

	// value[x]	Σ	0..1		The value of the filter, as a Period, DateTime, or Duration value
	// valueDateTime			dateTime
	set valueDateTime(valueDateTime) {
		this._valueDateTime = valueDateTime;
	}

	get valueDateTime() {
		return this._valueDateTime;
	}

	// valuePeriod			Period
	set valuePeriod(valuePeriod) {
		this._valuePeriod = new Period(valuePeriod);
	}

	get valuePeriod() {
		return this._valuePeriod;
	}

	// valueDuration			Duration
	set valueDuration(valueDuration) {
		this._valueDuration = valueDuration;
	}

	get valueDuration() {
		return this._valueDuration;
	}

	toJSON() {
		return {
			path: this._path,
			valueDateTime: this._valueDateTime,
			valuePeriod: this._valuePeriod,
			valueDuration: this._valueDuration,
		};
	}
}

class DataRequirement extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	// type	Σ	1..1	code	The type of the required data
	// FHIRAllTypes (Required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// profile	Σ	0..*	uri	The profile of the required data
	set profile(profile) {
		this._profile = [].concat(profile);
	}

	get profile() {
		return this._profile;
	}

	// mustSupport	Σ	0..*	string	Indicates that specific structure elements are referenced by the knowledge module
	set mustSupport(mustSupport) {
		this._mustSupport = [].concat(mustSupport);
	}

	get mustSupport() {
		return this._mustSupport;
	}

	// codeFilter	Σ	0..*	Element	What codes are expected
	set codeFilter(codeFilter) {
		if (Array.isArray(codeFilter)) {
			this._codeFilter = codeFilter.map((i) => new CodeFilter(i));
		} else {
			this._codeFilter = [new CodeFilter(codeFilter)];
		}
	}

	get codeFilter() {
		return this._codeFilter;
	}

	// dateFilter	Σ	0..*	Element	What dates/date ranges are expected
	set dateFilter(dateFilter) {
		if (Array.isArray(dateFilter)) {
			this._dateFilter = dateFilter.map((i) => new DateFilter(i));
		} else {
			this._dateFilter = [new DateFilter(dateFilter)];
		}
	}

	get dateFilter() {
		return this._dateFilter;
	}

	toJSON() {
		const json = {
			type: this._type,
			profile: this._profile,
			mustSupport: this._mustSupport,
			codeFilter: this._codeFilter,
			dateFilter: this._dateFilter,
		};

		return Object.assign(super.toJSON(), json);
	}
}

module.exports = DataRequirement;
module.exports = DateFilter;
module.exports = CodeFilter;
