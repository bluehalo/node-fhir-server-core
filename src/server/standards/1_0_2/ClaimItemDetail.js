const BackboneElement = require('./BackboneElement');
const PositiveIntScalar = require('./scalars/PositiveInt.scalar');

class ClaimItemDetail extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ClaimItemDetail';
		Object.assign(this, opt);
	}

	// This is a ClaimItemDetail resource
	static get __resourceType() {
		return 'ClaimItemDetail';
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

	// The type of product or service.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const Coding = require('./Coding');
		this.__type = new Coding(new_value);
	}

	// If a grouping item then \'GROUP\' otherwise it is a node therefore a code to indicate the Professional Service or Product supplied.
	get service() {
		return this.__service;
	}

	set service(new_value) {
		const Coding = require('./Coding');
		this.__service = new Coding(new_value);
	}

	// The number of repetitions of a service or product.
	get quantity() {
		return this.__quantity;
	}

	set quantity(new_value) {
		const Quantity = require('./Quantity');
		this.__quantity = new Quantity(new_value);
	}

	// If the item is a node then this is the fee for the product or service, otherwise this is the total of the fees for the children of the group.
	get unitPrice() {
		return this.__unitPrice;
	}

	set unitPrice(new_value) {
		const Quantity = require('./Quantity');
		this.__unitPrice = new Quantity(new_value);
	}

	// A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
	get factor() {
		return this.__factor;
	}

	set factor(new_value) {
		this.__factor = new_value;
	}

	// An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the good or service delivered. The concept of Points allows for assignment of point values for services and/or goods, such that a monetary amount can be assigned to each point.
	get points() {
		return this.__points;
	}

	set points(new_value) {
		this.__points = new_value;
	}

	// The quantity times the unit price for an additional  service or product or charge. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
	get net() {
		return this.__net;
	}

	set net(new_value) {
		const Quantity = require('./Quantity');
		this.__net = new Quantity(new_value);
	}

	// List of Unique Device Identifiers associated with this line item.
	get udi() {
		return this.__udi;
	}

	set udi(new_value) {
		const Coding = require('./Coding');
		this.__udi = new Coding(new_value);
	}

	// Third tier of goods and services.
	get subDetail() {
		return this.__subDetail;
	}

	set subDetail(new_value) {
		const ClaimItemDetailSubDetail = require('./ClaimItemDetailSubDetail');
		this.__subDetail = Array.isArray(new_value)
			? new_value.map(val => new ClaimItemDetailSubDetail(val))
			: [new ClaimItemDetailSubDetail(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			sequence: this.__sequence,
			type: this.__type && this.__type.toJSON(),
			service: this.__service && this.__service.toJSON(),
			quantity: this.__quantity && this.__quantity.toJSON(),
			unitPrice: this.__unitPrice && this.__unitPrice.toJSON(),
			factor: this.__factor,
			points: this.__points,
			net: this.__net && this.__net.toJSON(),
			udi: this.__udi && this.__udi.toJSON(),
			subDetail: this.__subDetail && this.__subDetail.map(v => v.toJSON()),
		});
	}
}

module.exports = ClaimItemDetail;
