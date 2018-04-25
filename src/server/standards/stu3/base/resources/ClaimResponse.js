const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Code = require('../types/Code');
const Reference = require('../types/Reference');
const CodeableConcept = require('../types/CodeableConcept');
const Coding = require('../types/Coding');

class Insurance {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// sequence		1..1	positiveInt	Service instance identifier
	set sequence(sequence) {
		this._sequence = sequence;
	}

	get sequence() {
		return this._sequence;
	}

	// focal		1..1	boolean	Is the focal Coverage
	set focal(focal) {
		this._focal = focal;
	}

	get focal() {
		return this._focal;
	}

	// coverage		1..1	Reference(Coverage)	Insurance information
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

	// preAuthRef		0..*	string	Pre-Authorization/Determination Reference
	set preAuthRef(preAuthRef) {
		this._preAuthRef = [].concat(preAuthRef);
	}

	get preAuthRef() {
		return this._preAuthRef;
	}

	// claimResponse		0..1	Reference(ClaimResponse)	Adjudication results
	set claimResponse(claimResponse) {
		this._claimResponse = new Reference(claimResponse);
	}

	get claimResponse() {
		return this._claimResponse;
	}

	toJSON() {
		return {
			sequence: this._sequence,
			focal: this._focal,
			coverage: this._coverage,
			businessArrangement: this._businessArrangement,
			preAuthRef: this._preAuthRef,
			claimResponse: this._claimResponse,
		};
	}
}

class ProcessNote {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// number		0..1	positiveInt	Sequence Number for this note
	set number(number) {
		this._number = number;
	}

	get number() {
		return this._number;
	}

	// type		0..1	CodeableConcept	display | print | printoper
	// NoteType (Required)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// text		0..1	string	Note explanatory text
	set text(text) {
		this._text = text;
	}

	get text() {
		return this._text;
	}

	// language		0..1	CodeableConcept	Language if different from the resource
	// Common Languages (Extensible but limited to All Languages)
	set language(language) {
		this._language = new CodeableConcept(language);
	}

	get language() {
		return this._language;
	}

	toJSON() {
		return {
			number: this._number,
			type: this._type,
			text: this._text,
			language: this._language,
		};
	}
}

class Payment {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// type		0..1	CodeableConcept	Partial or Complete
	// Example Payment Type Codes (Example)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// adjustment		0..1	Money	Payment adjustment for non-Claim issues
	set adjustment(adjustment) {
		this._adjustment = adjustment;
	}

	get adjustment() {
		return this._adjustment;
	}

	// adjustmentReason		0..1	CodeableConcept	Explanation for the non-claim adjustment
	// Payment Adjustment Reason Codes (Example)
	set adjustmentReason(adjustmentReason) {
		this._adjustmentReason = new CodeableConcept(adjustmentReason);
	}

	get adjustmentReason() {
		return this._adjustmentReason;
	}

	// date		0..1	date	Expected data of Payment
	set date(date) {
		this._date = date;
	}

	get date() {
		return this._date;
	}

	// amount		0..1	Money	Payable amount after adjustment
	set amount(amount) {
		this._amount = amount;
	}

	get amount() {
		return this._amount;
	}

	// identifier		0..1	Identifier	Identifier of the payment instrument
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	toJSON() {
		return {
			type: this._type,
			adjustment: this._adjustment,
			adjustmentReason: this._adjustmentReason,
			date: this._date,
			amount: this._amount,
			identifier: this._identifier,
		};
	}
}

class Error {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// sequenceLinkId		0..1	positiveInt	Item sequence number
	set sequenceLinkId(sequenceLinkId) {
		this._sequenceLinkId = sequenceLinkId;
	}

	get sequenceLinkId() {
		return this._sequenceLinkId;
	}

	// detailSequenceLinkId		0..1	positiveInt	Detail sequence number
	set detailSequenceLinkId(detailSequenceLinkId) {
		this._detailSequenceLinkId = detailSequenceLinkId;
	}

	get detailSequenceLinkId() {
		return this._detailSequenceLinkId;
	}

	// subdetailSequenceLinkId		0..1	positiveInt	Subdetail sequence number
	set subdetailSequenceLinkId(subdetailSequenceLinkId) {
		this._subdetailSequenceLinkId = subdetailSequenceLinkId;
	}

	get subdetailSequenceLinkId() {
		return this._subdetailSequenceLinkId;
	}

	// code		1..1	CodeableConcept	Error code detailing processing issues
	// Adjudication Error Codes (Example)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	toJSON() {
		return {
			sequenceLinkId: this._sequenceLinkId,
			detailSequenceLinkId: this._detailSequenceLinkId,
			subdetailSequenceLinkId: this._subdetailSequenceLinkId,
			code: this._code,
		};
	}
}

class Detail {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// revenue		0..1	CodeableConcept	Revenue or cost center code
	// Example Revenue Center Codes (Example)
	set revenue(revenue) {
		this._revenue = new CodeableConcept(revenue);
	}

	get revenue() {
		return this._revenue;
	}

	// category		0..1	CodeableConcept	Type of service or product
	// Benefit SubCategory Codes (Example)
	set category(category) {
		this._category = new CodeableConcept(category);
	}

	get category() {
		return this._category;
	}

	// service		0..1	CodeableConcept	Service or Product
	// USCLS Codes (Example)
	set service(service) {
		this._service = new CodeableConcept(service);
	}

	get service() {
		return this._service;
	}

	// modifier		0..*	CodeableConcept	Service/Product billing modifiers
	// Modifier type Codes (Example)
	set modifier(modifier) {
		if (Array.isArray(modifier)) {
			this._modifier = modifier.map((i) => new CodeableConcept(i));
		} else {
			this._modifier = [new CodeableConcept(modifier)];
		}
	}

	get modifier() {
		return this._modifier;
	}

	// fee		0..1	Money	Professional fee or Product charge
	set fee(fee) {
		this._fee = fee;
	}

	get fee() {
		return this._fee;
	}

	// noteNumber		0..*	positiveInt	List of note numbers which apply
	set noteNumber(noteNumber) {
		this._noteNumber = [].concat(noteNumber);
	}

	get noteNumber() {
		return this._noteNumber;
	}

	// adjudication		0..*	see adjudication	Added items detail adjudication
	set adjudication(adjudication) {
		this._adjudication = [].concat(adjudication);
	}

	get adjudication() {
		return this._adjudication;
	}

	toJSON() {
		return {
			revenue: this._revenue,
			category: this._category,
			service: this._service,
			modifier: this._modifier,
			fee: this._fee,
			noteNumber: this._noteNumber,
			adjudication: this._adjudication,
		};
	}
}

class AddItem {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// sequenceLinkId		0..*	positiveInt	Service instances
	set sequenceLinkId(sequenceLinkId) {
		this._sequenceLinkId = [].concat(sequenceLinkId);
	}

	get sequenceLinkId() {
		return this._sequenceLinkId;
	}

	// revenue		0..1	CodeableConcept	Revenue or cost center code
	// Example Revenue Center Codes (Example)
	set revenue(revenue) {
		this._revenue = new CodeableConcept(revenue);
	}

	get revenue() {
		return this._revenue;
	}

	// category		0..1	CodeableConcept	Type of service or product
	// Benefit SubCategory Codes (Example)
	set category(category) {
		this._category = new CodeableConcept(category);
	}

	get category() {
		return this._category;
	}

	// service		0..1	CodeableConcept	Group, Service or Product
	// USCLS Codes (Example)
	set service(service) {
		this._service = new CodeableConcept(service);
	}

	get service() {
		return this._service;
	}

	// modifier		0..*	CodeableConcept	Service/Product billing modifiers
	// Modifier type Codes (Example)
	set modifier(modifier) {
		if (Array.isArray(modifier)) {
			this._modifier = modifier.map((i) => new CodeableConcept(i));
		} else {
			this._modifier = [new CodeableConcept(modifier)];
		}
	}

	get modifier() {
		return this._modifier;
	}

	// fee		0..1	Money	Professional fee or Product charge
	set fee(fee) {
		this._fee = fee;
	}

	get fee() {
		return this._fee;
	}

	// noteNumber		0..*	positiveInt	List of note numbers which apply
	set noteNumber(noteNumber) {
		this._noteNumber = [].concat(noteNumber);
	}

	get noteNumber() {
		return this._noteNumber;
	}

	// adjudication		0..*	see adjudication	Added items adjudication
	set adjudication(adjudication) {
		this._adjudication = [].concat(adjudication);
	}

	get adjudication() {
		return this._adjudication;
	}

	// detail		0..*	BackboneElement	Added items details
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

	toJSON() {
		return {
			sequenceLinkId: this._sequenceLinkId,
			revenue: this._revenue,
			category: this._category,
			service: this._service,
			modifier: this._modifier,
			fee: this._fee,
			noteNumber: this._noteNumber,
			adjudication: this._adjudication,
			detail: this._detail,
		};
	}
}

class Adjudication {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// category		1..1	CodeableConcept	Adjudication category such as co-pay, eligible, benefit, etc.
	// Adjudication Value Codes (Example)
	set category(category) {
		this._category = new CodeableConcept(category);
	}

	get category() {
		return this._category;
	}

	// reason		0..1	CodeableConcept	Explanation of Adjudication outcome
	// Adjudication Reason Codes (Example)
	set reason(reason) {
		this._reason = new CodeableConcept(reason);
	}

	get reason() {
		return this._reason;
	}

	// amount		0..1	Money	Monetary amount
	set amount(amount) {
		this._amount = amount;
	}

	get amount() {
		return this._amount;
	}

	// value		0..1	decimal	Non-monetary value
	set value(value) {
		this._value = value;
	}

	get value() {
		return this._value;
	}

	toJSON() {
		return {
			category: this._category,
			reason: this._reason,
			amount: this._amount,
			value: this._value,
		};
	}
}

class SubDetail {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// sequenceLinkId		1..1	positiveInt	Service instance
	set sequenceLinkId(sequenceLinkId) {
		this._sequenceLinkId = sequenceLinkId;
	}

	get sequenceLinkId() {
		return this._sequenceLinkId;
	}

	// noteNumber		0..*	positiveInt	List of note numbers which apply
	set noteNumber(noteNumber) {
		this._noteNumber = [].concat(noteNumber);
	}

	get noteNumber() {
		return this._noteNumber;
	}

	// adjudication		0..*	see adjudication	Subdetail level adjudication details
	set adjudication(adjudication) {
		this._adjudication = [].concat(adjudication);
	}

	get adjudication() {
		return this._adjudication;
	}

	toJSON() {
		return {
			sequenceLinkId: this._sequenceLinkId,
			noteNumber: this._noteNumber,
			adjudication: this._adjudication,
		};
	}
}

class Item {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// sequenceLinkId		1..1	positiveInt	Service instance
	set sequenceLinkId(sequenceLinkId) {
		this._sequenceLinkId = sequenceLinkId;
	}

	get sequenceLinkId() {
		return this._sequenceLinkId;
	}

	// noteNumber		0..*	positiveInt	List of note numbers which apply
	set noteNumber(noteNumber) {
		this._noteNumber = [].concat(noteNumber);
	}

	get noteNumber() {
		return this._noteNumber;
	}

	// adjudication		0..*	BackboneElement	Adjudication details
	set adjudication(adjudication) {
		if (Array.isArray(adjudication)) {
			this._adjudication = adjudication.map((i) => new Adjudication(i));
		} else {
			this._adjudication = [new Adjudication(adjudication)];
		}
	}

	get adjudication() {
		return this._adjudication;
	}

	// detail		0..*	BackboneElement	Detail line items
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

	toJSON() {
		return {
			sequenceLinkId: this._sequenceLinkId,
			noteNumber: this._noteNumber,
			adjudication: this._adjudication,
			detail: this._detail,
		};
	}
}

class ClaimResponse extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'ClaimResponse';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier		0..*	Identifier	Response number
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

	// patient		0..1	Reference(Patient)	The subject of the Products and Services
	set patient(patient) {
		this._patient = new Reference(patient);
	}

	get patient() {
		return this._patient;
	}

	// created		0..1	dateTime	Creation date
	set created(created) {
		this._created = created;
	}

	get created() {
		return this._created;
	}

	// insurer		0..1	Reference(Organization)	Insurance issuing organization
	set insurer(insurer) {
		this._insurer = new Reference(insurer);
	}

	get insurer() {
		return this._insurer;
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

	// request		0..1	Reference(Claim)	Id of resource triggering adjudication
	set request(request) {
		this._request = new Reference(request);
	}

	get request() {
		return this._request;
	}

	// outcome		0..1	CodeableConcept	complete | error | partial
	// Claim Processing Codes (Example)
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

	// payeeType		0..1	CodeableConcept	Party to be paid any benefits payable
	// Claim Payee Type Codes (Example)
	set payeeType(payeeType) {
		this._payeeType = new CodeableConcept(payeeType);
	}

	get payeeType() {
		return this._payeeType;
	}

	// totalCost		0..1	Money	Total Cost of service from the Claim
	set totalCost(totalCost) {
		this._totalCost = totalCost;
	}

	get totalCost() {
		return this._totalCost;
	}

	// unallocDeductable		0..1	Money	Unallocated deductible
	set unallocDeductable(unallocDeductable) {
		this._unallocDeductable = unallocDeductable;
	}

	get unallocDeductable() {
		return this._unallocDeductable;
	}

	// totalBenefit		0..1	Money	Total benefit payable for the Claim
	set totalBenefit(totalBenefit) {
		this._totalBenefit = totalBenefit;
	}

	get totalBenefit() {
		return this._totalBenefit;
	}

	// reserved		0..1	Coding	Funds reserved status
	// Funds Reservation Codes (Example)
	set reserved(reserved) {
		this._reserved = new Coding(reserved);
	}

	get reserved() {
		return this._reserved;
	}

	// form		0..1	CodeableConcept	Printed Form Identifier
	// Form Codes (Example)
	set form(form) {
		this._form = new CodeableConcept(form);
	}

	get form() {
		return this._form;
	}

	// communicationRequest		0..*	Reference(CommunicationRequest)	Request for additional information
	set communicationRequest(communicationRequest) {
		if (Array.isArray(communicationRequest)) {
			this._communicationRequest = communicationRequest.map((i) => new Reference(i));
		} else {
			this._communicationRequest = [new Reference(communicationRequest)];
		}
	}

	get communicationRequest() {
		return this._communicationRequest;
	}

	// item		0..*	BackboneElement	Line items
	set item(item) {
		if (Array.isArray(item)) {
			this._item = item.map((i) => new Item(i));
		} else {
			this._item = [new Item(item)];
		}
	}

	get item() {
		return this._item;
	}

	// addItem		0..*	BackboneElement	Insurer added line items
	set addItem(addItem) {
		if (Array.isArray(addItem)) {
			this._addItem = addItem.map((i) => new AddItem(i));
		} else {
			this._addItem = [new AddItem(addItem)];
		}
	}

	get addItem() {
		return this._addItem;
	}

	// error		0..*	BackboneElement	Processing errors
	set error(error) {
		if (Array.isArray(error)) {
			this._error = error.map((i) => new Error(i));
		} else {
			this._error = [new Error(error)];
		}
	}

	get error() {
		return this._error;
	}

	// payment		0..1	BackboneElement	Payment details, if paid
	set payment(payment) {
		this._payment = new Payment(payment);
	}

	get payment() {
		return this._payment;
	}

	// processNote		0..*	BackboneElement	Processing notes
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

	// insurance		0..*	BackboneElement	Insurance or medical plan
	set insurance(insurance) {
		if (Array.isArray(insurance)) {
			this._insurance = insurance.map((i) => new Insurance(i));
		} else {
			this._insurance = [new Insurance(insurance)];
		}
	}

	get insurance() {
		return this._insurance;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			status: this._status,
			patient: this._patient,
			created: this._created,
			insurer: this._insurer,
			requestProvider: this._requestProvider,
			requestOrganization: this._requestOrganization,
			request: this._request,
			outcome: this._outcome,
			disposition: this._disposition,
			payeeType: this._payeeType,
			totalCost: this._totalCost,
			unallocDeductable: this._unallocDeductable,
			totalBenefit: this._totalBenefit,
			reserved: this._reserved,
			form: this._form,
			communicationRequest: this._communicationRequest,
			item: this._item,
			addItem: this._addItem,
			error: this._error,
			payment: this._payment,
			processNote: this._processNote,
			insurance: this._insurance,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.ClaimResponse = ClaimResponse;
module.exports.Item = Item;
module.exports.Detail = Detail;
module.exports.SubDetail = SubDetail;
module.exports.Adjudication = Adjudication;
module.exports.AddItem = AddItem;
module.exports.Detail = Detail;
module.exports.Error = Error;
module.exports.Payment = Payment;
module.exports.ProcessNote = ProcessNote;
module.exports.Insurance = Insurance;
