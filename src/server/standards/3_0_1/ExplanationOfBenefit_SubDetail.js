const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Quantity = require('./Quantity');
const Money = require('./Money');
const Reference = require('./Reference');
const ExplanationOfBenefit_Adjudication = require('./ExplanationOfBenefit_Adjudication');

class ExplanationOfBenefit_SubDetail extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ExplanationOfBenefit_SubDetail';
	}

	// A service line number.
	get sequence () {
		return this._sequence;
	}

	set sequence ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[1-9][0-9]*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field sequence`);
		}
		this._sequence = new_value;
	}

	// The type of product or service.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new CodeableConcept(new_value);
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

	// For programs which require reson codes for the inclusion, covering, of this billed item under the program or sub-program.
	get programCode () {
		return this._programCode;
	}

	set programCode ( new_value ) {
		this._programCode = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// The number of repetitions of a service or product.
	get quantity () {
		return this._quantity;
	}

	set quantity ( new_value ) {
		this._quantity = new Quantity(new_value);
	}

	// The fee for an addittional service or product or charge.
	get unitPrice () {
		return this._unitPrice;
	}

	set unitPrice ( new_value ) {
		this._unitPrice = new Money(new_value);
	}

	// A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
	get factor () {
		return this._factor;
	}

	set factor ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field factor`);
		}
		this._factor = new_value;
	}

	// The quantity times the unit price for an addittional service or product or charge. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
	get net () {
		return this._net;
	}

	set net ( new_value ) {
		this._net = new Money(new_value);
	}

	// List of Unique Device Identifiers associated with this line item.
	get udi () {
		return this._udi;
	}

	set udi ( new_value ) {
		this._udi = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
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
			sequence: this._sequence,
			type: this._type && this._type.toJSON(),
			revenue: this._revenue && this._revenue.toJSON(),
			category: this._category && this._category.toJSON(),
			service: this._service && this._service.toJSON(),
			modifier: this._modifier && this._modifier.map(v => v.toJSON()),
			programCode: this._programCode && this._programCode.map(v => v.toJSON()),
			quantity: this._quantity && this._quantity.toJSON(),
			unitPrice: this._unitPrice && this._unitPrice.toJSON(),
			factor: this._factor,
			net: this._net && this._net.toJSON(),
			udi: this._udi && this._udi.map(v => v.toJSON()),
			noteNumber: this._noteNumber,
			adjudication: this._adjudication && this._adjudication.map(v => v.toJSON())
		});
	}

}

module.exports = ExplanationOfBenefit_SubDetail;
