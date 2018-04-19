const Element = require('./types/Element');
const Coding = require('./types/Coding');
const CodeableConcept = require('./types/CodeableConcept');
const Quantity = require('./types/Quantity');
const Range = require('./types/Range');

class UsageContext extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	// code	Σ	1..1	Coding	Type of context being specified
	// UsageContextType (Extensible)
	set code(code) {
		this._code = new Coding(code);
	}

	get code() {
		return this._code;
	}

	// value[x]	Σ	1..1		Value that defines the context
	// Context of Use ValueSet (Example)
	// valueCodeableConcept			CodeableConcept
	set valueCodeableConcept(valueCodeableConcept) {
		this._valueCodeableConcept = new CodeableConcept(valueCodeableConcept);
	}

	get valueCodeableConcept() {
		return this._valueCodeableConcept;
	}

	// valueQuantity			Quantity
	set valueQuantity(valueQuantity) {
		this._valueQuantity = new Quantity(valueQuantity);
	}

	get valueQuantity() {
		return this._valueQuantity;
	}

	// valueRange			Range
	set valueRange(valueRange) {
		this._valueRange = new Range(valueRange);
	}

	get valueRange() {
		return this._valueRange;
	}

	toJSON() {
		const json = {
			code: this._code,
			valueCodeableConcept: this._valueCodeableConcept,
			valueQuantity: this._valueQuantity,
			valueRange: this._valueRange,
		};

		return Object.assign(super.toJSON(), json);
	}
}

module.exports = UsageContext;
