const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Code = require('./types/Code');
const CodeableConcept = require('./types/CodeableConcept');
const Reference = require('./types/Reference');
const Period = require('./types/Period');

class EligibilityRequest extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'EligibilityRequest';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier		0..*	Identifier	Business Identifier
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

	// status	?!Σ	0..1	code	active | cancelled | draft | entered-in-error
	// Financial Resource Status Codes (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// priority		0..1	CodeableConcept	Desired processing priority
	// Process Priority Codes (Example)
	set priority(priority) {
		this._priority = new CodeableConcept(priority);
	}

	get priority() {
		return this._priority;
	}

	// patient		0..1	Reference(Patient)	The subject of the Products and Services
	set patient(patient) {
		this._patient = new Reference(patient);
	}

	get patient() {
		return this._patient;
	}

	// serviced[x]		0..1		Estimated date or dates of Service
	// servicedDate			date
	set servicedDate(servicedDate) {
		this._servicedDate = servicedDate;
	}

	get servicedDate() {
		return this._servicedDate;
	}

	// servicedPeriod			Period
	set servicedPeriod(servicedPeriod) {
		this._servicedPeriod = new Period(servicedPeriod);
	}

	get servicedPeriod() {
		return this._servicedPeriod;
	}

	// created		0..1	dateTime	Creation date
	set created(created) {
		this._created = created;
	}

	get created() {
		return this._created;
	}

	// enterer		0..1	Reference(Practitioner)	Author
	set enterer(enterer) {
		this._enterer = new Reference(enterer);
	}

	get enterer() {
		return this._enterer;
	}

	// provider		0..1	Reference(Practitioner)	Responsible practitioner
	set provider(provider) {
		this._provider = new Reference(provider);
	}

	get provider() {
		return this._provider;
	}

	// organization		0..1	Reference(Organization)	Responsible organization
	set organization(organization) {
		this._organization = new Reference(organization);
	}

	get organization() {
		return this._organization;
	}

	// insurer		0..1	Reference(Organization)	Target
	set insurer(insurer) {
		this._insurer = new Reference(insurer);
	}

	get insurer() {
		return this._insurer;
	}

	// facility		0..1	Reference(Location)	Servicing Facility
	set facility(facility) {
		this._facility = new Reference(facility);
	}

	get facility() {
		return this._facility;
	}

	// coverage		0..1	Reference(Coverage)	Insurance or medical plan
	set coverage(coverage) {
		this._coverage = new Reference(coverage);
	}

	get coverage() {
		return this._coverage;
	}

	// businessArrangement		0..1	string	Business agreement
	set businessArrangement(businessArrangement) {
		this._businessArrangement = businessArrangement;
	}

	get businessArrangement() {
		return this._businessArrangement;
	}

	// benefitCategory		0..1	CodeableConcept	Type of services covered
	// Benefit Category Codes (Example)
	set benefitCategory(benefitCategory) {
		this._benefitCategory = new CodeableConcept(benefitCategory);
	}

	get benefitCategory() {
		return this._benefitCategory;
	}

	// benefitSubCategory		0..1	CodeableConcept	Detailed services covered within the type
	// Benefit SubCategory Codes (Example)
	set benefitSubCategory(benefitSubCategory) {
		this._benefitSubCategory = new CodeableConcept(benefitSubCategory);
	}

	get benefitSubCategory() {
		return this._benefitSubCategory;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			status: this._status,
			priority: this._priority,
			patient: this._patient,
			servicedDate: this._servicedDate,
			servicedPeriod: this._servicedPeriod,
			created: this._created,
			enterer: this._enterer,
			provider: this._provider,
			organization: this._organization,
			insurer: this._insurer,
			facility: this._facility,
			coverage: this._coverage,
			businessArrangement: this._businessArrangement,
			benefitCategory: this._benefitCategory,
			benefitSubCategory: this._benefitSubCategory,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.EligibilityRequest = EligibilityRequest;
