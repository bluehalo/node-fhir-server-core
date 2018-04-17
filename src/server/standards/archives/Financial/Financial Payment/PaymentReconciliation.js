const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Code = require('./types/Code');
const Period = require('./types/Period');
const Reference = require('./types/Reference');
const CodeableConcept = require('./types/CodeableConcept');

class ProcessNote {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// type		0..1	CodeableConcept	display | print | printoper
	// NoteType (Required)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// text		0..1	string	Comment on the processing
	set text(text) {
		this._text = text;
	}

	get text() {
		return this._text;
	}

	toJSON() {
		return {
			type: this._type,
			text: this._text,
		};
	}
}

class Detail {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// type		1..1	CodeableConcept	Type code
	// Payment Type Codes (Example)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// request		0..1	Reference(Any)	Claim
	set request(request) {
		this._request = new Reference(request);
	}

	get request() {
		return this._request;
	}

	// response		0..1	Reference(Any)	Claim Response
	set response(response) {
		this._response = new Reference(response);
	}

	get response() {
		return this._response;
	}

	// submitter		0..1	Reference(Organization)	Organization which submitted the claim
	set submitter(submitter) {
		this._submitter = new Reference(submitter);
	}

	get submitter() {
		return this._submitter;
	}

	// payee		0..1	Reference(Organization)	Organization which is receiving the payment
	set payee(payee) {
		this._payee = new Reference(payee);
	}

	get payee() {
		return this._payee;
	}

	// date		0..1	date	Invoice date
	set date(date) {
		this._date = date;
	}

	get date() {
		return this._date;
	}

	// amount		0..1	Money	Amount being paid
	set amount(amount) {
		this._amount = amount;
	}

	get amount() {
		return this._amount;
	}

	toJSON() {
		return {
			type: this._type,
			request: this._request,
			response: this._response,
			submitter: this._submitter,
			payee: this._payee,
			date: this._date,
			amount: this._amount,
		};
	}
}

class PaymentReconciliation extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'PaymentReconciliation';
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

	// period		0..1	Period	Period covered
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	// created		0..1	dateTime	Creation date
	set created(created) {
		this._created = created;
	}

	get created() {
		return this._created;
	}

	// organization		0..1	Reference(Organization)	Insurer
	set organization(organization) {
		this._organization = new Reference(organization);
	}

	get organization() {
		return this._organization;
	}

	// request		0..1	Reference(ProcessRequest)	Claim reference
	set request(request) {
		this._request = new Reference(request);
	}

	get request() {
		return this._request;
	}

	// outcome		0..1	CodeableConcept	complete | error | partial
	// RemittanceOutcome (Required)
	set outcome(outcome) {
		this._outcome = new CodeableConcept(outcome);
	}

	get outcome() {
		return this._outcome;
	}

	// disposition		0..1	string	Disposition Message
	set disposition(disposition) {
		this._disposition = disposition;
	}

	get disposition() {
		return this._disposition;
	}

	// requestProvider		0..1	Reference(Practitioner)	Responsible practitioner
	set requestProvider(requestProvider) {
		this._requestProvider = new Reference(requestProvider);
	}

	get requestProvider() {
		return this._requestProvider;
	}

	// requestOrganization		0..1	Reference(Organization)	Responsible organization
	set requestOrganization(requestOrganization) {
		this._requestOrganization = new Reference(requestOrganization);
	}

	get requestOrganization() {
		return this._requestOrganization;
	}

	// form		0..1	CodeableConcept	Printed Form Identifier
	// Form Codes (Example)
	set form(form) {
		this._form = new CodeableConcept(form);
	}

	get form() {
		return this._form;
	}

	// total		0..1	Money	Total amount of Payment
	set total(total) {
		this._total = total;
	}

	get total() {
		return this._total;
	}

	// detail		0..*	BackboneElement	List of settlements
	set detail(detail) {
		if (Array.isArray(detail)) {
			this._detail = detail.map((i) => new Detail(i));
		} else {
			this._detail = [new Detail(detail)];
		}
	}

	get detail() {
		return this._detail;
	}

	// processNote		0..*	BackboneElement	Processing comments
	set processNote(processNote) {
		if (Array.isArray(processNote)) {
			this._processNote = processNote.map((i) => new ProcessNote(i));
		} else {
			this._processNote = [new ProcessNote(processNote)];
		}
	}

	get processNote() {
		return this._processNote;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			status: this._status,
			period: this._period,
			created: this._created,
			organization: this._organization,
			request: this._request,
			outcome: this._outcome,
			disposition: this._disposition,
			requestProvider: this._requestProvider,
			requestOrganization: this._requestOrganization,
			form: this._form,
			total: this._total,
			detail: this._detail,
			processNote: this._processNote,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.PaymentReconciliation = PaymentReconciliation;
module.exports.Detail = Detail;
module.exports.ProcessNote = ProcessNote;
