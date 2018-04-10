const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Reference = require('./types/Reference');
const Code = require('./types/Code');
const CodeableConcept = require('./types/CodeableConcept');
const Period = require('./types/Period');
const Quantity = require('./types/Quantity');
const Range = require('./types/Range');
const Ratio = require('./types/Ratio');
const SampledData = require('./types/SampledData');
const Attachment = require('./types/Attachment');

class Component {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// code	Σ	1..1	CodeableConcept	Type of component observation (code / type)
	// LOINC Codes (Example)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// value[x]	Σ	0..1		Actual component result
	// valueQuantity			Quantity
	set valueQuantity(valueQuantity) {
		this._valueQuantity = new Quantity(valueQuantity);
	}

	get valueQuantity() {
		return this._valueQuantity;
	}

	// valueCodeableConcept			CodeableConcept
	set valueCodeableConcept(valueCodeableConcept) {
		this._valueCodeableConcept = new CodeableConcept(valueCodeableConcept);
	}

	get valueCodeableConcept() {
		return this._valueCodeableConcept;
	}

	// valueString			string
	set valueString(valueString) {
		this._valueString = valueString;
	}

	get valueString() {
		return this._valueString;
	}

	// valueRange			Range
	set valueRange(valueRange) {
		this._valueRange = new Range(valueRange);
	}

	get valueRange() {
		return this._valueRange;
	}

	// valueRatio			Ratio
	set valueRatio(valueRatio) {
		this._valueRatio = new Ratio(valueRatio);
	}

	get valueRatio() {
		return this._valueRatio;
	}

	// valueSampledData			SampledData
	set valueSampledData(valueSampledData) {
		this._valueSampledData = new SampledData(valueSampledData);
	}

	get valueSampledData() {
		return this._valueSampledData;
	}

	// valueAttachment			Attachment
	set valueAttachment(valueAttachment) {
		this._valueAttachment = new Attachment(valueAttachment);
	}

	get valueAttachment() {
		return this._valueAttachment;
	}

	// valueTime			time
	set valueTime(valueTime) {
		this._valueTime = valueTime;
	}

	get valueTime() {
		return this._valueTime;
	}

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

	// dataAbsentReason	I	0..1	CodeableConcept	Why the component result is missing
	// Observation Value Absent Reason (Extensible)
	set dataAbsentReason(dataAbsentReason) {
		this._dataAbsentReason = new CodeableConcept(dataAbsentReason);
	}

	get dataAbsentReason() {
		return this._dataAbsentReason;
	}

	// interpretation		0..1	CodeableConcept	High, low, normal, etc.
	// Observation Interpretation Codes (Extensible)
	set interpretation(interpretation) {
		this._interpretation = new CodeableConcept(interpretation);
	}

	get interpretation() {
		return this._interpretation;
	}

	// referenceRange		0..*	see referenceRange	Provides guide for interpretation of component result
	set referenceRange(referenceRange) {
		this._referenceRange = [].concat(referenceRange);
	}

	get referenceRange() {
		return this._referenceRange;
	}

	toJSON() {
		return {
			code: this._code,
			valueQuantity: this._valueQuantity,
			valueCodeableConcept: this._valueCodeableConcept,
			valueString: this._valueString,
			valueRange: this._valueRange,
			valueRatio: this._valueRatio,
			valueSampledData: this._valueSampledData,
			valueAttachment: this._valueAttachment,
			valueTime: this._valueTime,
			valueDateTime: this._valueDateTime,
			valuePeriod: this._valuePeriod,
			dataAbsentReason: this._dataAbsentReason,
			interpretation: this._interpretation,
			referenceRange: this._referenceRange,
		};
	}
}

class Related {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// type		0..1	code	has-member | derived-from | sequel-to | replaces | qualified-by | interfered-by
	// ObservationRelationshipType (Required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// target		1..1	Reference(Observation | QuestionnaireResponse | Sequence)	Resource that is related to this one
	set target(target) {
		this._target = new Reference(target);
	}

	get target() {
		return this._target;
	}

	toJSON() {
		return {
			type: this._type,
			target: this._target,
		};
	}
}

class ReferenceRange {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// low	I	0..1	SimpleQuantity	Low Range, if relevant
	set low(low) {
		this._low = low;
	}

	get low() {
		return this._low;
	}

	// high	I	0..1	SimpleQuantity	High Range, if relevant
	set high(high) {
		this._high = high;
	}

	get high() {
		return this._high;
	}

	// type		0..1	CodeableConcept	Reference range qualifier
	// Observation Reference Range Meaning Codes (Extensible)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// appliesTo		0..*	CodeableConcept	Reference range population
	// Observation Reference Range Applies To Codes (Example)
	set appliesTo(appliesTo) {
		if (Array.isArray(appliesTo)) {
			this._appliesTo = appliesTo.map((i) => new CodeableConcept(i));
		} else {
			this._appliesTo = [new CodeableConcept(appliesTo)];
		}
	}

	get appliesTo() {
		return this._appliesTo;
	}

	// age		0..1	Range	Applicable age range, if relevant
	set age(age) {
		this._age = new Range(age);
	}

	get age() {
		return this._age;
	}

	// text		0..1	string	Text based reference range in an observation
	set text(text) {
		this._text = text;
	}

	get text() {
		return this._text;
	}

	toJSON() {
		return {
			low: this._low,
			high: this._high,
			type: this._type,
			appliesTo: this._appliesTo,
			age: this._age,
			text: this._text,
		};
	}
}

class Observation extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Observation';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	Identifier	Business Identifier for observation
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

	// basedOn	Σ	0..*	Reference(CarePlan | DeviceRequest | ImmunizationRecommendation | MedicationRequest | NutritionOrder | ProcedureRequest | ReferralRequest)	Fulfills plan, proposal or order
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

	// status	?!Σ	1..1	code	registered | preliminary | final | amended +
	// ObservationStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// category		0..*	CodeableConcept	Classification of type of observation
	// Observation Category Codes (Preferred)
	set category(category) {
		if (Array.isArray(category)) {
			this._category = category.map((i) => new CodeableConcept(i));
		} else {
			this._category = [new CodeableConcept(category)];
		}
	}

	get category() {
		return this._category;
	}

	// code	Σ	1..1	CodeableConcept	Type of observation (code / type)
	// LOINC Codes (Example)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// subject	Σ	0..1	Reference(Patient | Group | Device | Location)	Who and/or what this is about
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// context		0..1	Reference(Encounter | EpisodeOfCare)	Healthcare event during which this observation is made
	set context(context) {
		this._context = new Reference(context);
	}

	get context() {
		return this._context;
	}

	// effective[x]	Σ	0..1		Clinically relevant time/time-period for observation
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

	// issued	Σ	0..1	instant	Date/Time this was made available
	set issued(issued) {
		this._issued = issued;
	}

	get issued() {
		return this._issued;
	}

	// performer	Σ	0..*	Reference(Practitioner | Organization | Patient | RelatedPerson)	Who is responsible for the observation
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

	// value[x]	ΣI	0..1		Actual result
	// valueQuantity			Quantity
	set valueQuantity(valueQuantity) {
		this._valueQuantity = new Quantity(valueQuantity);
	}

	get valueQuantity() {
		return this._valueQuantity;
	}

	// valueCodeableConcept			CodeableConcept
	set valueCodeableConcept(valueCodeableConcept) {
		this._valueCodeableConcept = new CodeableConcept(valueCodeableConcept);
	}

	get valueCodeableConcept() {
		return this._valueCodeableConcept;
	}

	// valueString			string
	set valueString(valueString) {
		this._valueString = valueString;
	}

	get valueString() {
		return this._valueString;
	}

	// valueBoolean			boolean
	set valueBoolean(valueBoolean) {
		this._valueBoolean = valueBoolean;
	}

	get valueBoolean() {
		return this._valueBoolean;
	}

	// valueRange			Range
	set valueRange(valueRange) {
		this._valueRange = new Range(valueRange);
	}

	get valueRange() {
		return this._valueRange;
	}

	// valueRatio			Ratio
	set valueRatio(valueRatio) {
		this._valueRatio = new Ratio(valueRatio);
	}

	get valueRatio() {
		return this._valueRatio;
	}

	// valueSampledData			SampledData
	set valueSampledData(valueSampledData) {
		this._valueSampledData = new SampledData(valueSampledData);
	}

	get valueSampledData() {
		return this._valueSampledData;
	}

	// valueAttachment			Attachment
	set valueAttachment(valueAttachment) {
		this._valueAttachment = new Attachment(valueAttachment);
	}

	get valueAttachment() {
		return this._valueAttachment;
	}

	// valueTime			time
	set valueTime(valueTime) {
		this._valueTime = valueTime;
	}

	get valueTime() {
		return this._valueTime;
	}

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

	// dataAbsentReason	I	0..1	CodeableConcept	Why the result is missing
	// Observation Value Absent Reason (Extensible)
	set dataAbsentReason(dataAbsentReason) {
		this._dataAbsentReason = new CodeableConcept(dataAbsentReason);
	}

	get dataAbsentReason() {
		return this._dataAbsentReason;
	}

	// interpretation		0..1	CodeableConcept	High, low, normal, etc.
	// Observation Interpretation Codes (Extensible)
	set interpretation(interpretation) {
		this._interpretation = new CodeableConcept(interpretation);
	}

	get interpretation() {
		return this._interpretation;
	}

	// comment		0..1	string	Comments about result
	set comment(comment) {
		this._comment = comment;
	}

	get comment() {
		return this._comment;
	}

	// bodySite		0..1	CodeableConcept	Observed body part
	// SNOMED CT Body Structures (Example)
	set bodySite(bodySite) {
		this._bodySite = new CodeableConcept(bodySite);
	}

	get bodySite() {
		return this._bodySite;
	}

	// method		0..1	CodeableConcept	How it was done
	// Observation Methods (Example)
	set method(method) {
		this._method = new CodeableConcept(method);
	}

	get method() {
		return this._method;
	}

	// specimen		0..1	Reference(Specimen)	Specimen used for this observation
	set specimen(specimen) {
		this._specimen = new Reference(specimen);
	}

	get specimen() {
		return this._specimen;
	}

	// device		0..1	Reference(Device | DeviceMetric)	(Measurement) Device
	set device(device) {
		this._device = new Reference(device);
	}

	get device() {
		return this._device;
	}

	// referenceRange	I	0..*	BackboneElement	Provides guide for interpretation
	// + Must have at least a low or a high or text
	set referenceRange(referenceRange) {
		if (Array.isArray(referenceRange)) {
			this._referenceRange = referenceRange.map((i) => new ReferenceRange(i));
		} else {
			this._referenceRange = [new ReferenceRange(referenceRange)];
		}
	}

	get referenceRange() {
		return this._referenceRange;
	}

	// related	Σ	0..*	BackboneElement	Resource related to this observation
	set related(related) {
		if (Array.isArray(related)) {
			this._related = related.map((i) => new Related(i));
		} else {
			this._related = [new Related(related)];
		}
	}

	get related() {
		return this._related;
	}

	// component	Σ	0..*	BackboneElement	Component results
	set component(component) {
		if (Array.isArray(component)) {
			this._component = component.map((i) => new Component(i));
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
			basedOn: this._basedOn,
			status: this._status,
			category: this._category,
			code: this._code,
			subject: this._subject,
			context: this._context,
			effectiveDateTime: this._effectiveDateTime,
			effectivePeriod: this._effectivePeriod,
			issued: this._issued,
			performer: this._performer,
			valueQuantity: this._valueQuantity,
			valueCodeableConcept: this._valueCodeableConcept,
			valueString: this._valueString,
			valueBoolean: this._valueBoolean,
			valueRange: this._valueRange,
			valueRatio: this._valueRatio,
			valueSampledData: this._valueSampledData,
			valueAttachment: this._valueAttachment,
			valueTime: this._valueTime,
			valueDateTime: this._valueDateTime,
			valuePeriod: this._valuePeriod,
			dataAbsentReason: this._dataAbsentReason,
			interpretation: this._interpretation,
			comment: this._comment,
			bodySite: this._bodySite,
			method: this._method,
			specimen: this._specimen,
			device: this._device,
			referenceRange: this._referenceRange,
			related: this._related,
			component: this._component,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Observation = Observation;
module.exports.ReferenceRange = ReferenceRange;
module.exports.Related = Related;
module.exports.Component = Component;
