const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const Identifier = require('./Identifier');
const Quantity = require('./Quantity');
const Money = require('./Money');

class Contract_ValuedItem extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Contract_ValuedItem';
	}

	// Specific type of Contract Valued Item that may be priced.
	get entityCodeableConcept () {
		return this._entityCodeableConcept;
	}

	set entityCodeableConcept ( new_value ) {
		this._entityCodeableConcept = new CodeableConcept(new_value);
	}

	// Specific type of Contract Valued Item that may be priced.
	get entityReference () {
		return this._entityReference;
	}

	set entityReference ( new_value ) {
		this._entityReference = new Reference(new_value);
	}

	// Identifies a Contract Valued Item instance.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	// Indicates the time during which this Contract ValuedItem information is effective.
	get effectiveTime () {
		return this._effectiveTime;
	}

	set effectiveTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field effectiveTime`);
		}
		this._effectiveTime = new_value;
	}

	// Specifies the units by which the Contract Valued Item is measured or counted, and quantifies the countable or measurable Contract Valued Item instances.
	get quantity () {
		return this._quantity;
	}

	set quantity ( new_value ) {
		this._quantity = new Quantity(new_value);
	}

	// A Contract Valued Item unit valuation measure.
	get unitPrice () {
		return this._unitPrice;
	}

	set unitPrice ( new_value ) {
		this._unitPrice = new Money(new_value);
	}

	// A real number that represents a multiplier used in determining the overall value of the Contract Valued Item delivered. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
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

	// An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the Contract Valued Item delivered. The concept of Points allows for assignment of point values for a Contract Valued Item, such that a monetary amount can be assigned to each point.
	get points () {
		return this._points;
	}

	set points ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field points`);
		}
		this._points = new_value;
	}

	// Expresses the product of the Contract Valued Item unitQuantity and the unitPriceAmt. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
	get net () {
		return this._net;
	}

	set net ( new_value ) {
		this._net = new Money(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			entityCodeableConcept: this._entityCodeableConcept,
			entityReference: this._entityReference,
			identifier: this._identifier,
			effectiveTime: this._effectiveTime,
			quantity: this._quantity,
			unitPrice: this._unitPrice,
			factor: this._factor,
			points: this._points,
			net: this._net
		});
	}

}

module.exports = Contract_ValuedItem;
