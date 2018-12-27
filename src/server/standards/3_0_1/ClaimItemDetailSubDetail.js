const BackboneElement = require('./BackboneElement');
const PositiveIntScalar = require('./scalars/PositiveInt.scalar');

class ClaimItemDetailSubDetail extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ClaimItemDetailSubDetail';
		Object.assign(this, opt);
	}

	// This is a ClaimItemDetailSubDetail resource
	static get __resourceType() {
		return 'ClaimItemDetailSubDetail';
	}

	// A service line number.
	get sequence() {
		return this.__sequence;
	}

	set sequence(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field sequence`);
		}
		this.__sequence = new_value;
	}

	// The type of reveneu or cost center providing the product and/or service.
	get revenue() {
		return this.__revenue;
	}

	set revenue(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__revenue = new CodeableConcept(new_value);
	}

	// Health Care Service Type Codes  to identify the classification of service or benefits.
	get category() {
		return this.__category;
	}

	set category(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__category = new CodeableConcept(new_value);
	}

	// A code to indicate the Professional Service or Product supplied (eg. CTP, HCPCS,USCLS,ICD10, NCPDP,DIN,ACHI,CCI).
	get service() {
		return this.__service;
	}

	set service(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__service = new CodeableConcept(new_value);
	}

	// Item typification or modifiers codes, eg for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.
	get modifier() {
		return this.__modifier;
	}

	set modifier(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__modifier = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// For programs which require reson codes for the inclusion, covering, of this billed item under the program or sub-program.
	get programCode() {
		return this.__programCode;
	}

	set programCode(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__programCode = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// The number of repetitions of a service or product.
	get quantity() {
		return this.__quantity;
	}

	set quantity(new_value) {
		const Quantity = require('./Quantity');
		this.__quantity = new Quantity(new_value);
	}

	// The fee for an addittional service or product or charge.
	get unitPrice() {
		return this.__unitPrice;
	}

	set unitPrice(new_value) {
		const Money = require('./Money');
		this.__unitPrice = new Money(new_value);
	}

	// A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
	get factor() {
		return this.__factor;
	}

	set factor(new_value) {
		this.__factor = new_value;
	}

	// The quantity times the unit price for an addittional service or product or charge. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
	get net() {
		return this.__net;
	}

	set net(new_value) {
		const Money = require('./Money');
		this.__net = new Money(new_value);
	}

	// List of Unique Device Identifiers associated with this line item.
	get udi() {
		return this.__udi;
	}

	set udi(new_value) {
		const Reference = require('./Reference');
		this.__udi = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			sequence: this.__sequence,
			revenue: this.__revenue && this.__revenue.toJSON(),
			category: this.__category && this.__category.toJSON(),
			service: this.__service && this.__service.toJSON(),
			modifier: this.__modifier && this.__modifier.map(v => v.toJSON()),
			programCode: this.__programCode && this.__programCode.map(v => v.toJSON()),
			quantity: this.__quantity && this.__quantity.toJSON(),
			unitPrice: this.__unitPrice && this.__unitPrice.toJSON(),
			factor: this.__factor,
			net: this.__net && this.__net.toJSON(),
			udi: this.__udi && this.__udi.map(v => v.toJSON()),
		});
	}
}

module.exports = ClaimItemDetailSubDetail;
