const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Period = require('./Period');
const Address = require('./Address');
const Reference = require('./Reference');
const Quantity = require('./Quantity');
const Money = require('./Money');
const Claim_Detail = require('./Claim_Detail');

class Claim_Item extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Claim_Item';
	}

	// A service line number.
	get sequence () {
		return this._sequence;
	}

	set sequence ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[1-9][0-9]*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field sequence`);
		}
		this._sequence = new_value;
	}

	// CareTeam applicable for this service or product line.
	get careTeamLinkId () {
		return this._careTeamLinkId;
	}

	set careTeamLinkId ( new_value ) {
		this._careTeamLinkId = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// Diagnosis applicable for this service or product line.
	get diagnosisLinkId () {
		return this._diagnosisLinkId;
	}

	set diagnosisLinkId ( new_value ) {
		this._diagnosisLinkId = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// Procedures applicable for this service or product line.
	get procedureLinkId () {
		return this._procedureLinkId;
	}

	set procedureLinkId ( new_value ) {
		this._procedureLinkId = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// Exceptions, special conditions and supporting information pplicable for this service or product line.
	get informationLinkId () {
		return this._informationLinkId;
	}

	set informationLinkId ( new_value ) {
		this._informationLinkId = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
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

	// If this is an actual service or product line, ie. not a Group, then use code to indicate the Professional Service or Product supplied (eg. CTP, HCPCS,USCLS,ICD10, NCPDP,DIN,RXNorm,ACHI,CCI). If a grouping item then use a group code to indicate the type of thing being grouped eg. 'glasses' or 'compound'.
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

	// For programs which require reason codes for the inclusion or covering of this billed item under the program or sub-program.
	get programCode () {
		return this._programCode;
	}

	set programCode ( new_value ) {
		this._programCode = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// The date or dates when the enclosed suite of services were performed or completed.
	get servicedDate () {
		return this._servicedDate;
	}

	set servicedDate ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field servicedDate`);
		}
		this._servicedDate = new_value;
	}

	// The date or dates when the enclosed suite of services were performed or completed.
	get servicedPeriod () {
		return this._servicedPeriod;
	}

	set servicedPeriod ( new_value ) {
		this._servicedPeriod = new Period(new_value);
	}

	// Where the service was provided.
	get locationCodeableConcept () {
		return this._locationCodeableConcept;
	}

	set locationCodeableConcept ( new_value ) {
		this._locationCodeableConcept = new CodeableConcept(new_value);
	}

	// Where the service was provided.
	get locationAddress () {
		return this._locationAddress;
	}

	set locationAddress ( new_value ) {
		this._locationAddress = new Address(new_value);
	}

	// Where the service was provided.
	get locationReference () {
		return this._locationReference;
	}

	set locationReference ( new_value ) {
		this._locationReference = new Reference(new_value);
	}

	// The number of repetitions of a service or product.
	get quantity () {
		return this._quantity;
	}

	set quantity ( new_value ) {
		this._quantity = new Quantity(new_value);
	}

	// If the item is a node then this is the fee for the product or service, otherwise this is the total of the fees for the children of the group.
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
		if ( !pattern.test(new_value) ) {
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

	// Physical service site on the patient (limb, tooth, etc).
	get bodySite () {
		return this._bodySite;
	}

	set bodySite ( new_value ) {
		this._bodySite = new CodeableConcept(new_value);
	}

	// A region or surface of the site, eg. limb region or tooth surface(s).
	get subSite () {
		return this._subSite;
	}

	set subSite ( new_value ) {
		this._subSite = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// A billed item may include goods or services provided in multiple encounters.
	get encounter () {
		return this._encounter;
	}

	set encounter ( new_value ) {
		this._encounter = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Second tier of goods and services.
	get detail () {
		return this._detail;
	}

	set detail ( new_value ) {
		this._detail = Array.isArray(new_value) ? new_value.map(val => new Claim_Detail(val)) : [new Claim_Detail(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			sequence: this._sequence,
			careTeamLinkId: this._careTeamLinkId,
			diagnosisLinkId: this._diagnosisLinkId,
			procedureLinkId: this._procedureLinkId,
			informationLinkId: this._informationLinkId,
			revenue: this._revenue,
			category: this._category,
			service: this._service,
			modifier: this._modifier,
			programCode: this._programCode,
			servicedDate: this._servicedDate,
			servicedPeriod: this._servicedPeriod,
			locationCodeableConcept: this._locationCodeableConcept,
			locationAddress: this._locationAddress,
			locationReference: this._locationReference,
			quantity: this._quantity,
			unitPrice: this._unitPrice,
			factor: this._factor,
			net: this._net,
			udi: this._udi,
			bodySite: this._bodySite,
			subSite: this._subSite,
			encounter: this._encounter,
			detail: this._detail
		});
	}

}

module.exports = Claim_Item;
