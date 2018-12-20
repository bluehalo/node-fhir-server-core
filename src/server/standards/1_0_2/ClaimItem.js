const BackboneElement = require('./BackboneElement');
const PositiveIntScalar = require('./scalars/PositiveInt.scalar');
const DateScalar = require('./scalars/Date.scalar');

class ClaimItem extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ClaimItem';
		Object.assign(this, opt);
	}

	// This is a ClaimItem resource
	static get __resourceType() {
		return 'ClaimItem';
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

	// The practitioner who is responsible for the services rendered to the patient.
	get provider() {
		return this.__provider;
	}

	set provider(new_value) {
		const Reference = require('./Reference');
		this.__provider = new Reference(new_value);
	}

	// Diagnosis applicable for this service or product line.
	get diagnosisLinkId() {
		return this.__diagnosisLinkId;
	}

	set diagnosisLinkId(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field diagnosisLinkId`);
		}
		this.__diagnosisLinkId = Array.isArray(new_value) ? new_value : [new_value];
	}

	// If a grouping item then \'GROUP\' otherwise it is a node therefore a code to indicate the Professional Service or Product supplied.
	get service() {
		return this.__service;
	}

	set service(new_value) {
		const Coding = require('./Coding');
		this.__service = new Coding(new_value);
	}

	// The date when the enclosed suite of services were performed or completed.
	get serviceDate() {
		return this.__serviceDate;
	}

	set serviceDate(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field serviceDate`);
		}
		this.__serviceDate = new_value;
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

	// Physical service site on the patient (limb, tooth, etc.).
	get bodySite() {
		return this.__bodySite;
	}

	set bodySite(new_value) {
		const Coding = require('./Coding');
		this.__bodySite = new Coding(new_value);
	}

	// A region or surface of the site, e.g. limb region or tooth surface(s).
	get subSite() {
		return this.__subSite;
	}

	set subSite(new_value) {
		const Coding = require('./Coding');
		this.__subSite = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// Item typification or modifiers codes, e.g. for Oral whether the treatment is cosmetic or associated with TMJ, or an appliance was lost or stolen.
	get modifier() {
		return this.__modifier;
	}

	set modifier(new_value) {
		const Coding = require('./Coding');
		this.__modifier = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// Second tier of goods and services.
	get detail() {
		return this.__detail;
	}

	set detail(new_value) {
		const ClaimItemDetail = require('./ClaimItemDetail');
		this.__detail = Array.isArray(new_value)
			? new_value.map(val => new ClaimItemDetail(val))
			: [new ClaimItemDetail(new_value)];
	}

	// The materials and placement date of prior fixed prosthesis.
	get prosthesis() {
		return this.__prosthesis;
	}

	set prosthesis(new_value) {
		const ClaimItemProsthesis = require('./ClaimItemProsthesis');
		this.__prosthesis = new ClaimItemProsthesis(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			sequence: this.__sequence,
			type: this.__type && this.__type.toJSON(),
			provider: this.__provider && this.__provider.toJSON(),
			diagnosisLinkId: this.__diagnosisLinkId,
			service: this.__service && this.__service.toJSON(),
			serviceDate: this.__serviceDate,
			quantity: this.__quantity && this.__quantity.toJSON(),
			unitPrice: this.__unitPrice && this.__unitPrice.toJSON(),
			factor: this.__factor,
			points: this.__points,
			net: this.__net && this.__net.toJSON(),
			udi: this.__udi && this.__udi.toJSON(),
			bodySite: this.__bodySite && this.__bodySite.toJSON(),
			subSite: this.__subSite && this.__subSite.map(v => v.toJSON()),
			modifier: this.__modifier && this.__modifier.map(v => v.toJSON()),
			detail: this.__detail && this.__detail.map(v => v.toJSON()),
			prosthesis: this.__prosthesis && this.__prosthesis.toJSON(),
		});
	}
}

module.exports = ClaimItem;
