const BackboneElement = require('./BackboneElement');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class ContractValuedItem extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ContractValuedItem';
		Object.assign(this, opt);
	}

	// This is a ContractValuedItem resource
	static get __resourceType() {
		return 'ContractValuedItem';
	}

	// Specific type of Contract Valued Item that may be priced.
	get entityCodeableConcept() {
		return this.__entityCodeableConcept;
	}

	set entityCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__entityCodeableConcept = new CodeableConcept(new_value);
	}

	// Specific type of Contract Valued Item that may be priced.
	get entityReference() {
		return this.__entityReference;
	}

	set entityReference(new_value) {
		const Reference = require('./Reference');
		this.__entityReference = new Reference(new_value);
	}

	// Identifies a Contract Valued Item instance.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// Indicates the time during which this Contract ValuedItem information is effective.
	get effectiveTime() {
		return this.__effectiveTime;
	}

	set effectiveTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field effectiveTime`);
		}
		this.__effectiveTime = new_value;
	}

	// Specifies the units by which the Contract Valued Item is measured or counted, and quantifies the countable or measurable Contract Valued Item instances.
	get quantity() {
		return this.__quantity;
	}

	set quantity(new_value) {
		const Quantity = require('./Quantity');
		this.__quantity = new Quantity(new_value);
	}

	// A Contract Valued Item unit valuation measure.
	get unitPrice() {
		return this.__unitPrice;
	}

	set unitPrice(new_value) {
		const Quantity = require('./Quantity');
		this.__unitPrice = new Quantity(new_value);
	}

	// A real number that represents a multiplier used in determining the overall value of the Contract Valued Item delivered. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
	get factor() {
		return this.__factor;
	}

	set factor(new_value) {
		this.__factor = new_value;
	}

	// An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the Contract Valued Item delivered. The concept of Points allows for assignment of point values for a Contract Valued Item, such that a monetary amount can be assigned to each point.
	get points() {
		return this.__points;
	}

	set points(new_value) {
		this.__points = new_value;
	}

	// Expresses the product of the Contract Valued Item unitQuantity and the unitPriceAmt. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
	get net() {
		return this.__net;
	}

	set net(new_value) {
		const Quantity = require('./Quantity');
		this.__net = new Quantity(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			entityCodeableConcept: this.__entityCodeableConcept && this.__entityCodeableConcept.toJSON(),
			entityReference: this.__entityReference && this.__entityReference.toJSON(),
			identifier: this.__identifier && this.__identifier.toJSON(),
			effectiveTime: this.__effectiveTime,
			quantity: this.__quantity && this.__quantity.toJSON(),
			unitPrice: this.__unitPrice && this.__unitPrice.toJSON(),
			factor: this.__factor,
			points: this.__points,
			net: this.__net && this.__net.toJSON(),
		});
	}
}

module.exports = ContractValuedItem;
