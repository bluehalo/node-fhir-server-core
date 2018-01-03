const path = require('path');
const CodeableConcept = require(path.resolve('./src/server/resources/types/CodeableConcept'));
const Quantity = require(path.resolve('./src/server/resources/types/Quantity'));
const ReferenceRange = require(path.resolve('./src/server/resources/types/ReferenceRange'));


class Component {
	constructor(obj) {
		Object.assign(this, obj);
	}

	set valueQuantity(valueQuantity) {
		this._valueQuantity = new Quantity(valueQuantity);
	}

	get valueQuantity() {
		return this._valueQuantity;
	}

	// Σ I	1..1	CodeableConcept	Type of component observation (code / type)
	// LOINC Codes (Example)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// 	I	0..1	CodeableConcept	Why the component result is missing
	// Observation Value Absent Reason (Extensible)
	set dataAbsentReason(dataAbsentReason) {
		this._dataAbsentReason = new CodeableConcept(dataAbsentReason);
	}

	get dataAbsentReason() {
		return this._dataAbsentReason;
	}

	// 0..*	see referenceRange	Provides guide for interpretation of component result
	set referenceRange(referenceRange) {
		if (Array.isArray(referenceRange)) {
			this._referenceRange = referenceRange.map((x) => new ReferenceRange(x));
		} else {
			this._referenceRange = [new ReferenceRange(referenceRange)];
		}
	}

	get referenceRange() {
		return this._referenceRange;
	}

	toJSON() {
		return {
			code: this._code,
			valueQuantity: this._valueQuantity,
			dataAbsentReason: this._dataAbsentReason,
			referenceRange: this._referenceRange
		};
	}
}

module.exports = Component;
