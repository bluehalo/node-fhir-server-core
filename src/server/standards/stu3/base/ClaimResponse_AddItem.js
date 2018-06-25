const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Money = require('./Money');
const ClaimResponse_Adjudication = require('./ClaimResponse_Adjudication');
const ClaimResponse_Detail1 = require('./ClaimResponse_Detail1');

class ClaimResponse_AddItem extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ClaimResponse_AddItem';
	}

	// List of input service items which this service line is intended to replace.
	get sequenceLinkId () {
		return this._sequenceLinkId;
	}

	set sequenceLinkId ( new_value ) {
		this._sequenceLinkId = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// The type of reveneu or cost center providing the product and/or service.
	get revenue () {
		return this._revenue;
	}

	set revenue ( new_value ) {
		this._revenue = new CodeableConcept(new_value);
	}

	// Health Care Service Type Codes  to identify the classification of service or benefits.
	get category () {
		return this._category;
	}

	set category ( new_value ) {
		this._category = new CodeableConcept(new_value);
	}

	// A code to indicate the Professional Service or Product supplied.
	get service () {
		return this._service;
	}

	set service ( new_value ) {
		this._service = new CodeableConcept(new_value);
	}

	// Item typification or modifiers codes, eg for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.
	get modifier () {
		return this._modifier;
	}

	set modifier ( new_value ) {
		this._modifier = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// The fee charged for the professional service or product..
	get fee () {
		return this._fee;
	}

	set fee ( new_value ) {
		this._fee = new Money(new_value);
	}

	// A list of note references to the notes provided below.
	get noteNumber () {
		return this._noteNumber;
	}

	set noteNumber ( new_value ) {
		this._noteNumber = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// The adjudications results.
	get adjudication () {
		return this._adjudication;
	}

	set adjudication ( new_value ) {
		this._adjudication = Array.isArray(new_value) ? new_value.map(val => new ClaimResponse_Adjudication(val)) : [new ClaimResponse_Adjudication(new_value)];
	}

	// The second tier service adjudications for payor added services.
	get detail () {
		return this._detail;
	}

	set detail ( new_value ) {
		this._detail = Array.isArray(new_value) ? new_value.map(val => new ClaimResponse_Detail1(val)) : [new ClaimResponse_Detail1(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			sequenceLinkId: this._sequenceLinkId,
			revenue: this._revenue,
			category: this._category,
			service: this._service,
			modifier: this._modifier,
			fee: this._fee,
			noteNumber: this._noteNumber,
			adjudication: this._adjudication,
			detail: this._detail
		});
	}

}

module.exports = ClaimResponse_AddItem;
