const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Code = require('./types/Code');
const Coding = require('./types/Coding');
const Reference = require('./types/Reference');
const CodeableConcept = require('./types/CodeableConcept');

class Instance {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// uid		1..1	oid	Formal DICOM identifier for this instance
	set uid(uid) {
		this._uid = uid;
	}

	get uid() {
		return this._uid;
	}

	// number		0..1	unsignedInt	The number of this instance in the series
	set number(number) {
		this._number = number;
	}

	get number() {
		return this._number;
	}

	// sopClass		1..1	oid	DICOM class type
	set sopClass(sopClass) {
		this._sopClass = sopClass;
	}

	get sopClass() {
		return this._sopClass;
	}

	// title		0..1	string	Description of instance
	set title(title) {
		this._title = title;
	}

	get title() {
		return this._title;
	}

	toJSON() {
		return {
			uid: this._uid,
			number: this._number,
			sopClass: this._sopClass,
			title: this._title,
		};
	}
}

class Series {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// uid	Σ	1..1	oid	Formal DICOM identifier for this series
	set uid(uid) {
		this._uid = uid;
	}

	get uid() {
		return this._uid;
	}

	// number	Σ	0..1	unsignedInt	Numeric identifier of this series
	set number(number) {
		this._number = number;
	}

	get number() {
		return this._number;
	}

	// modality	Σ	1..1	Coding	The modality of the instances in the series
	// Acquisition Modality Codes (Extensible)
	set modality(modality) {
		this._modality = new Coding(modality);
	}

	get modality() {
		return this._modality;
	}

	// description	Σ	0..1	string	A short human readable summary of the series
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// numberOfInstances	Σ	0..1	unsignedInt	Number of Series Related Instances
	set numberOfInstances(numberOfInstances) {
		this._numberOfInstances = numberOfInstances;
	}

	get numberOfInstances() {
		return this._numberOfInstances;
	}

	// availability	Σ	0..1	code	ONLINE | OFFLINE | NEARLINE | UNAVAILABLE
	// InstanceAvailability (Required)
	set availability(availability) {
		this._availability = new Code(availability);
	}

	get availability() {
		return this._availability;
	}

	// endpoint	Σ	0..*	Reference(Endpoint)	Series access endpoint
	set endpoint(endpoint) {
		if (Array.isArray(endpoint)) {
			this._endpoint = endpoint.map((i) => new Reference(i));
		} else {
			this._endpoint = [new Reference(endpoint)];
		}
	}

	get endpoint() {
		return this._endpoint;
	}

	// bodySite	Σ	0..1	Coding	Body part examined
	// SNOMED CT Body Structures (Example)
	set bodySite(bodySite) {
		this._bodySite = new Coding(bodySite);
	}

	get bodySite() {
		return this._bodySite;
	}

	// laterality	Σ	0..1	Coding	Body part laterality
	// Laterality (Example)
	set laterality(laterality) {
		this._laterality = new Coding(laterality);
	}

	get laterality() {
		return this._laterality;
	}

	// started	Σ	0..1	dateTime	When the series started
	set started(started) {
		this._started = started;
	}

	get started() {
		return this._started;
	}

	// performer	Σ	0..*	Reference(Practitioner)	Who performed the series
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

	// instance		0..*	BackboneElement	A single SOP instance from the series
	set instance(instance) {
		if (Array.isArray(instance)) {
			this._instance = instance.map((i) => new Instance(i));
		} else {
			this._instance = [new Instance(instance)];
		}
	}

	get instance() {
		return this._instance;
	}

	toJSON() {
		return {
			uid: this._uid,
			number: this._number,
			modality: this._modality,
			description: this._description,
			numberOfInstances: this._numberOfInstances,
			availability: this._availability,
			endpoint: this._endpoint,
			bodySite: this._bodySite,
			laterality: this._laterality,
			started: this._started,
			performer: this._performer,
			instance: this._instance,
		};
	}
}

class ImagingStudy extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'ImagingStudy';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// uid	Σ	1..1	oid	Formal DICOM identifier for the study
	set uid(uid) {
		this._uid = uid;
	}

	get uid() {
		return this._uid;
	}

	// accession	Σ	0..1	Identifier	Related workflow identifier ("Accession Number")
	set accession(accession) {
		this._accession = new Identifier(accession);
	}

	get accession() {
		return this._accession;
	}

	// identifier	Σ	0..*	Identifier	Other identifiers for the study
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

	// availability	Σ	0..1	code	ONLINE | OFFLINE | NEARLINE | UNAVAILABLE
	// InstanceAvailability (Required)
	set availability(availability) {
		this._availability = new Code(availability);
	}

	get availability() {
		return this._availability;
	}

	// modalityList	Σ	0..*	Coding	All series modality if actual acquisition modalities
	// Acquisition Modality Codes (Extensible)
	set modalityList(modalityList) {
		if (Array.isArray(modalityList)) {
			this._modalityList = modalityList.map((i) => new Coding(i));
		} else {
			this._modalityList = [new Coding(modalityList)];
		}
	}

	get modalityList() {
		return this._modalityList;
	}

	// patient	Σ	1..1	Reference(Patient)	Who the images are of
	set patient(patient) {
		this._patient = new Reference(patient);
	}

	get patient() {
		return this._patient;
	}

	// context	Σ	0..1	Reference(Encounter | EpisodeOfCare)	Originating context
	set context(context) {
		this._context = new Reference(context);
	}

	get context() {
		return this._context;
	}

	// started	Σ	0..1	dateTime	When the study was started
	set started(started) {
		this._started = started;
	}

	get started() {
		return this._started;
	}

	// basedOn	Σ	0..*	Reference(ReferralRequest | CarePlan | ProcedureRequest)	Request fulfilled
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

	// referrer	Σ	0..1	Reference(Practitioner)	Referring physician
	set referrer(referrer) {
		this._referrer = new Reference(referrer);
	}

	get referrer() {
		return this._referrer;
	}

	// interpreter	Σ	0..*	Reference(Practitioner)	Who interpreted images
	set interpreter(interpreter) {
		if (Array.isArray(interpreter)) {
			this._interpreter = interpreter.map((i) => new Reference(i));
		} else {
			this._interpreter = [new Reference(interpreter)];
		}
	}

	get interpreter() {
		return this._interpreter;
	}

	// endpoint	Σ	0..*	Reference(Endpoint)	Study access endpoint
	set endpoint(endpoint) {
		if (Array.isArray(endpoint)) {
			this._endpoint = endpoint.map((i) => new Reference(i));
		} else {
			this._endpoint = [new Reference(endpoint)];
		}
	}

	get endpoint() {
		return this._endpoint;
	}

	// numberOfSeries	Σ	0..1	unsignedInt	Number of Study Related Series
	set numberOfSeries(numberOfSeries) {
		this._numberOfSeries = numberOfSeries;
	}

	get numberOfSeries() {
		return this._numberOfSeries;
	}

	// numberOfInstances	Σ	0..1	unsignedInt	Number of Study Related Instances
	set numberOfInstances(numberOfInstances) {
		this._numberOfInstances = numberOfInstances;
	}

	get numberOfInstances() {
		return this._numberOfInstances;
	}

	// procedureReference	Σ	0..*	Reference(Procedure)	The performed Procedure reference
	set procedureReference(procedureReference) {
		if (Array.isArray(procedureReference)) {
			this._procedureReference = procedureReference.map((i) => new Reference(i));
		} else {
			this._procedureReference = [new Reference(procedureReference)];
		}
	}

	get procedureReference() {
		return this._procedureReference;
	}

	// procedureCode	Σ	0..*	CodeableConcept	The performed procedure code
	// Procedure Codes (SNOMED CT) (Example)
	set procedureCode(procedureCode) {
		if (Array.isArray(procedureCode)) {
			this._procedureCode = procedureCode.map((i) => new CodeableConcept(i));
		} else {
			this._procedureCode = [new CodeableConcept(procedureCode)];
		}
	}

	get procedureCode() {
		return this._procedureCode;
	}

	// reason	Σ	0..1	CodeableConcept	Why the study was requested
	// Procedure Reason Codes (Example)
	set reason(reason) {
		this._reason = new CodeableConcept(reason);
	}

	get reason() {
		return this._reason;
	}

	// description	Σ	0..1	string	Institution-generated description
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// series	Σ	0..*	BackboneElement	Each study has one or more series of instances
	set series(series) {
		if (Array.isArray(series)) {
			this._series = series.map((i) => new Series(i));
		} else {
			this._series = [new Series(series)];
		}
	}

	get series() {
		return this._series;
	}

	toJSON() {
		const json = {
			uid: this._uid,
			accession: this._accession,
			identifier: this._identifier,
			availability: this._availability,
			modalityList: this._modalityList,
			patient: this._patient,
			context: this._context,
			started: this._started,
			basedOn: this._basedOn,
			referrer: this._referrer,
			interpreter: this._interpreter,
			endpoint: this._endpoint,
			numberOfSeries: this._numberOfSeries,
			numberOfInstances: this._numberOfInstances,
			procedureReference: this._procedureReference,
			procedureCode: this._procedureCode,
			reason: this._reason,
			description: this._description,
			series: this._series,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.ImagingStudy = ImagingStudy;
module.exports.Series = Series;
module.exports.Instance = Instance;
