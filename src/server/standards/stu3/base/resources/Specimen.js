const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Code = require('../types/Code');
const CodeableConcept = require('../types/CodeableConcept');
const Reference = require('../types/Reference');
const Annotation = require('../types/Annotation');
const Period = require('../types/Period');

class Container {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// identifier	Σ	0..*	Identifier	Id for the container
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

	// description		0..1	string	Textual description of the container
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// type		0..1	CodeableConcept	Kind of container directly associated with specimen
	// SpecimenContainer (Example)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// capacity		0..1	SimpleQuantity	Container volume or size
	set capacity(capacity) {
		this._capacity = capacity;
	}

	get capacity() {
		return this._capacity;
	}

	// specimenQuantity		0..1	SimpleQuantity	Quantity of specimen within container
	set specimenQuantity(specimenQuantity) {
		this._specimenQuantity = specimenQuantity;
	}

	get specimenQuantity() {
		return this._specimenQuantity;
	}

	// additive[x]		0..1		Additive associated with container
	// v2 Additive/Preservative (Example)
	// additiveCodeableConcept			CodeableConcept
	set additiveCodeableConcept(additiveCodeableConcept) {
		this._additiveCodeableConcept = new CodeableConcept(additiveCodeableConcept);
	}

	get additiveCodeableConcept() {
		return this._additiveCodeableConcept;
	}

	// additiveReference			Reference
	set additiveReference(additiveReference) {
		this._additiveReference = new Reference(additiveReference);
	}

	get additiveReference() {
		return this._additiveReference;
	}

	toJSON() {
		return {
			identifier: this._identifier,
			description: this._description,
			type: this._type,
			capacity: this._capacity,
			specimenQuantity: this._specimenQuantity,
			additiveCodeableConcept: this._additiveCodeableConcept,
			additiveReference: this._additiveReference,
		};
	}
}

class Processing {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// description		0..1	string	Textual description of procedure
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// procedure		0..1	CodeableConcept	Indicates the treatment step applied to the specimen
	// SpecimenProcessingProcedure (Example)
	set procedure(procedure) {
		this._procedure = new CodeableConcept(procedure);
	}

	get procedure() {
		return this._procedure;
	}

	// additive		0..*	Reference(Substance)	Material used in the processing step
	set additive(additive) {
		if (Array.isArray(additive)) {
			this._additive = additive.map((i) => new Reference(i));
		} else {
			this._additive = [new Reference(additive)];
		}
	}

	get additive() {
		return this._additive;
	}

	// time[x]		0..1		Date and time of specimen processing
	// timeDateTime			dateTime
	set timeDateTime(timeDateTime) {
		this._timeDateTime = timeDateTime;
	}

	get timeDateTime() {
		return this._timeDateTime;
	}

	// timePeriod			Period
	set timePeriod(timePeriod) {
		this._timePeriod = new Period(timePeriod);
	}

	get timePeriod() {
		return this._timePeriod;
	}

	toJSON() {
		return {
			description: this._description,
			procedure: this._procedure,
			additive: this._additive,
			timeDateTime: this._timeDateTime,
			timePeriod: this._timePeriod,
		};
	}
}

class Collection {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// collector	Σ	0..1	Reference(Practitioner)	Who collected the specimen
	set collector(collector) {
		this._collector = new Reference(collector);
	}

	get collector() {
		return this._collector;
	}

	// collected[x]	Σ	0..1		Collection time
	// collectedDateTime			dateTime
	set collectedDateTime(collectedDateTime) {
		this._collectedDateTime = collectedDateTime;
	}

	get collectedDateTime() {
		return this._collectedDateTime;
	}

	// collectedPeriod			Period
	set collectedPeriod(collectedPeriod) {
		this._collectedPeriod = new Period(collectedPeriod);
	}

	get collectedPeriod() {
		return this._collectedPeriod;
	}

	// quantity		0..1	SimpleQuantity	The quantity of specimen collected
	set quantity(quantity) {
		this._quantity = quantity;
	}

	get quantity() {
		return this._quantity;
	}

	// method		0..1	CodeableConcept	Technique used to perform collection
	// FHIR Specimen Collection Method (Example)
	set method(method) {
		this._method = new CodeableConcept(method);
	}

	get method() {
		return this._method;
	}

	// bodySite		0..1	CodeableConcept	Anatomical collection site
	// SNOMED CT Body Structures (Example)
	set bodySite(bodySite) {
		this._bodySite = new CodeableConcept(bodySite);
	}

	get bodySite() {
		return this._bodySite;
	}

	toJSON() {
		return {
			collector: this._collector,
			collectedDateTime: this._collectedDateTime,
			collectedPeriod: this._collectedPeriod,
			quantity: this._quantity,
			method: this._method,
			bodySite: this._bodySite,
		};
	}
}

class Specimen extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Specimen';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	Identifier	External Identifier
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

	// accessionIdentifier	Σ	0..1	Identifier	Identifier assigned by the lab
	set accessionIdentifier(accessionIdentifier) {
		this._accessionIdentifier = new Identifier(accessionIdentifier);
	}

	get accessionIdentifier() {
		return this._accessionIdentifier;
	}

	// status	?!Σ	0..1	code	available | unavailable | unsatisfactory | entered-in-error
	// SpecimenStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// type	Σ	0..1	CodeableConcept	Kind of material that forms the specimen
	// v2 Specimen Type (Example)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// subject	Σ	1..1	Reference(Patient | Group | Device | Substance)	Where the specimen came from. This may be from the patient(s) or from the environment or a device
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// receivedTime	Σ	0..1	dateTime	The time when specimen was received for processing
	set receivedTime(receivedTime) {
		this._receivedTime = receivedTime;
	}

	get receivedTime() {
		return this._receivedTime;
	}

	// parent		0..*	Reference(Specimen)	Specimen from which this specimen originated
	set parent(parent) {
		if (Array.isArray(parent)) {
			this._parent = parent.map((i) => new Reference(i));
		} else {
			this._parent = [new Reference(parent)];
		}
	}

	get parent() {
		return this._parent;
	}

	// request		0..*	Reference(ProcedureRequest)	Why the specimen was collected
	set request(request) {
		if (Array.isArray(request)) {
			this._request = request.map((i) => new Reference(i));
		} else {
			this._request = [new Reference(request)];
		}
	}

	get request() {
		return this._request;
	}

	// collection		0..1	BackboneElement	Collection details
	set collection(collection) {
		this._collection = new Collection(collection);
	}

	get collection() {
		return this._collection;
	}

	// processing		0..*	BackboneElement	Processing and processing step details
	set processing(processing) {
		if (Array.isArray(processing)) {
			this._processing = processing.map((i) => new Processing(i));
		} else {
			this._processing = [new Processing(processing)];
		}
	}

	get processing() {
		return this._processing;
	}

	// container		0..*	BackboneElement	Direct container of specimen (tube/slide, etc.)
	set container(container) {
		if (Array.isArray(container)) {
			this._container = container.map((i) => new Container(i));
		} else {
			this._container = [new Container(container)];
		}
	}

	get container() {
		return this._container;
	}

	// note		0..*	Annotation	Comments
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

	toJSON() {
		const json = {
			identifier: this._identifier,
			accessionIdentifier: this._accessionIdentifier,
			status: this._status,
			type: this._type,
			subject: this._subject,
			receivedTime: this._receivedTime,
			parent: this._parent,
			request: this._request,
			collection: this._collection,
			processing: this._processing,
			container: this._container,
			note: this._note,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Specimen = Specimen;
module.exports.Collection = Collection;
module.exports.Processing = Processing;
module.exports.Container = Container;
