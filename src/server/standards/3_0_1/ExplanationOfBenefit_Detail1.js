const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Money = require('./Money');
const ExplanationOfBenefit_Adjudication = require('./ExplanationOfBenefit_Adjudication');

class ExplanationOfBenefit_Detail1 extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ExplanationOfBenefit_Detail1';
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

	// A code to indicate the Professional Service or Product supplied (eg. CTP, HCPCS,USCLS,ICD10, NCPDP,DIN,ACHI,CCI).
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

	// The fee charged for the professional service or product.
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
		this._adjudication = Array.isArray(new_value) ? new_value.map(val => new ExplanationOfBenefit_Adjudication(val)) : [new ExplanationOfBenefit_Adjudication(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			revenue: this._revenue && this._revenue.toJSON(),
			category: this._category && this._category.toJSON(),
			service: this._service && this._service.toJSON(),
			modifier: this._modifier && this._modifier.map(v => v.toJSON()),
			fee: this._fee && this._fee.toJSON(),
			noteNumber: this._noteNumber,
			adjudication: this._adjudication && this._adjudication.map(v => v.toJSON())
		});
	}

}

module.exports = ExplanationOfBenefit_Detail1;
