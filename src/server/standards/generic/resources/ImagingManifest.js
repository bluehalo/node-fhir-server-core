const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Reference = require('../types/Reference');

class Instance {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// sopClass	Σ	1..1	oid	SOP class UID of instance
	set sopClass(sopClass) {
		this._sopClass = sopClass;
	}

	get sopClass() {
		return this._sopClass;
	}

	// uid	Σ	1..1	oid	Selected instance UID
	set uid(uid) {
		this._uid = uid;
	}

	get uid() {
		return this._uid;
	}

	toJSON() {
		return {
			sopClass: this._sopClass,
			uid: this._uid,
		};
	}
}

class Series {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// uid	Σ	1..1	oid	Series instance UID
	set uid(uid) {
		this._uid = uid;
	}

	get uid() {
		return this._uid;
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

	// instance	Σ	1..*	BackboneElement	The selected instance
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
			endpoint: this._endpoint,
			instance: this._instance,
		};
	}
}

class Study {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// uid	Σ	1..1	oid	Study instance UID
	set uid(uid) {
		this._uid = uid;
	}

	get uid() {
		return this._uid;
	}

	// imagingStudy	Σ	0..1	Reference(ImagingStudy)	Reference to ImagingStudy
	set imagingStudy(imagingStudy) {
		this._imagingStudy = new Reference(imagingStudy);
	}

	get imagingStudy() {
		return this._imagingStudy;
	}

	// endpoint	Σ	0..*	Reference(Endpoint)	Study access service endpoint
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

	// series	Σ	1..*	BackboneElement	Series identity of the selected instances
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
		return {
			uid: this._uid,
			imagingStudy: this._imagingStudy,
			endpoint: this._endpoint,
			series: this._series,
		};
	}
}

class ImagingManifest extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'ImagingManifest';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..1	Identifier	SOP Instance UID
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// patient	Σ	1..1	Reference(Patient)	Patient of the selected objects
	set patient(patient) {
		this._patient = new Reference(patient);
	}

	get patient() {
		return this._patient;
	}

	// authoringTime	Σ	0..1	dateTime	Time when the selection of instances was made
	set authoringTime(authoringTime) {
		this._authoringTime = authoringTime;
	}

	get authoringTime() {
		return this._authoringTime;
	}

	// author	Σ	0..1	Reference(Practitioner | Device | Organization | Patient | RelatedPerson)	Author (human or machine)
	set author(author) {
		this._author = new Reference(author);
	}

	get author() {
		return this._author;
	}

	// description	Σ	0..1	string	Description text
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// study	Σ	1..*	BackboneElement	Study identity of the selected instances
	set study(study) {
		if (Array.isArray(study)) {
			this._study = study.map((i) => new Study(i));
		} else {
			this._study = [new Study(study)];
		}
	}

	get study() {
		return this._study;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			patient: this._patient,
			authoringTime: this._authoringTime,
			author: this._author,
			description: this._description,
			study: this._study,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.ImagingManifest = ImagingManifest;
module.exports.Study = Study;
module.exports.Series = Series;
module.exports.Instance = Instance;
