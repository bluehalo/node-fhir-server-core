const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');
const ClaimResponse_Item = require('./ClaimResponse_Item');
const ClaimResponse_AddItem = require('./ClaimResponse_AddItem');
const ClaimResponse_Error = require('./ClaimResponse_Error');
const Money = require('./Money');
const ClaimResponse_Payment = require('./ClaimResponse_Payment');
const Coding = require('./Coding');
const ClaimResponse_ProcessNote = require('./ClaimResponse_ProcessNote');
const ClaimResponse_Insurance = require('./ClaimResponse_Insurance');

class ClaimResponse extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ClaimResponse';
	}

	// This is a ClaimResponse resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['ClaimResponse'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// The Response business identifier.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// The status of the resource instance.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field status`);
		}
		this._status = new_value;
	}

	// Patient Resource.
	get patient () {
		return this._patient;
	}

	set patient ( new_value ) {
		this._patient = new Reference(new_value);
	}

	// The date when the enclosed suite of services were performed or completed.
	get created () {
		return this._created;
	}

	set created ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field created`);
		}
		this._created = new_value;
	}

	// The Insurer who produced this adjudicated response.
	get insurer () {
		return this._insurer;
	}

	set insurer ( new_value ) {
		this._insurer = new Reference(new_value);
	}

	// The practitioner who is responsible for the services rendered to the patient.
	get requestProvider () {
		return this._requestProvider;
	}

	set requestProvider ( new_value ) {
		this._requestProvider = new Reference(new_value);
	}

	// The organization which is responsible for the services rendered to the patient.
	get requestOrganization () {
		return this._requestOrganization;
	}

	set requestOrganization ( new_value ) {
		this._requestOrganization = new Reference(new_value);
	}

	// Original request resource referrence.
	get request () {
		return this._request;
	}

	set request ( new_value ) {
		this._request = new Reference(new_value);
	}

	// Processing outcome errror, partial or complete processing.
	get outcome () {
		return this._outcome;
	}

	set outcome ( new_value ) {
		this._outcome = new CodeableConcept(new_value);
	}

	// A description of the status of the adjudication.
	get disposition () {
		return this._disposition;
	}

	set disposition ( new_value ) {
		this._disposition = new_value;
	}

	// Party to be reimbursed: Subscriber, provider, other.
	get payeeType () {
		return this._payeeType;
	}

	set payeeType ( new_value ) {
		this._payeeType = new CodeableConcept(new_value);
	}

	// The first tier service adjudications for submitted services.
	get item () {
		return this._item;
	}

	set item ( new_value ) {
		this._item = Array.isArray(new_value) ? new_value.map(val => new ClaimResponse_Item(val)) : [new ClaimResponse_Item(new_value)];
	}

	// The first tier service adjudications for payor added services.
	get addItem () {
		return this._addItem;
	}

	set addItem ( new_value ) {
		this._addItem = Array.isArray(new_value) ? new_value.map(val => new ClaimResponse_AddItem(val)) : [new ClaimResponse_AddItem(new_value)];
	}

	// Mutually exclusive with Services Provided (Item).
	get error () {
		return this._error;
	}

	set error ( new_value ) {
		this._error = Array.isArray(new_value) ? new_value.map(val => new ClaimResponse_Error(val)) : [new ClaimResponse_Error(new_value)];
	}

	// The total cost of the services reported.
	get totalCost () {
		return this._totalCost;
	}

	set totalCost ( new_value ) {
		this._totalCost = new Money(new_value);
	}

	// The amount of deductible applied which was not allocated to any particular service line.
	get unallocDeductable () {
		return this._unallocDeductable;
	}

	set unallocDeductable ( new_value ) {
		this._unallocDeductable = new Money(new_value);
	}

	// Total amount of benefit payable (Equal to sum of the Benefit amounts from all detail lines and additions less the Unallocated Deductible).
	get totalBenefit () {
		return this._totalBenefit;
	}

	set totalBenefit ( new_value ) {
		this._totalBenefit = new Money(new_value);
	}

	// Payment details for the claim if the claim has been paid.
	get payment () {
		return this._payment;
	}

	set payment ( new_value ) {
		this._payment = new ClaimResponse_Payment(new_value);
	}

	// Status of funds reservation (For provider, for Patient, None).
	get reserved () {
		return this._reserved;
	}

	set reserved ( new_value ) {
		this._reserved = new Coding(new_value);
	}

	// The form to be used for printing the content.
	get form () {
		return this._form;
	}

	set form ( new_value ) {
		this._form = new CodeableConcept(new_value);
	}

	// Note text.
	get processNote () {
		return this._processNote;
	}

	set processNote ( new_value ) {
		this._processNote = Array.isArray(new_value) ? new_value.map(val => new ClaimResponse_ProcessNote(val)) : [new ClaimResponse_ProcessNote(new_value)];
	}

	// Request for additional supporting or authorizing information, such as: documents, images or resources.
	get communicationRequest () {
		return this._communicationRequest;
	}

	set communicationRequest ( new_value ) {
		this._communicationRequest = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Financial instrument by which payment information for health care.
	get insurance () {
		return this._insurance;
	}

	set insurance ( new_value ) {
		this._insurance = Array.isArray(new_value) ? new_value.map(val => new ClaimResponse_Insurance(val)) : [new ClaimResponse_Insurance(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
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
			item: this._item,
			addItem: this._addItem,
			error: this._error,
			totalCost: this._totalCost,
			unallocDeductable: this._unallocDeductable,
			totalBenefit: this._totalBenefit,
			payment: this._payment,
			reserved: this._reserved,
			form: this._form,
			processNote: this._processNote,
			communicationRequest: this._communicationRequest,
			insurance: this._insurance
		});
	}

}

module.exports = ClaimResponse;
