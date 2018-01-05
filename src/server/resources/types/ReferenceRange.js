const path = require('path');
const CodeableConcept = require(path.resolve('./src/server/resources/types/CodeableConcept'));
const Range = require(path.resolve('./src/server/resources/types/Range'));

// I	0..*	BackboneElement	Provides guide for interpretation
// Must have at least a low or a high or text
class ReferenceRange {

	constructor(obj) {
		Object.assign(this, obj);
	}

	// I	0..1	SimpleQuantity	Low Range, if relevant
	set low(low){
		this._low = low;
	}

	get low() {
		return this._low;
	}

	// I	0..1	SimpleQuantity	High Range, if relevant
	set high(high) {
		this._high = high;
	}

	get high() {
		return this._high;
	}

	// 0..1	CodeableConcept	Indicates the meaning/use of this range of this range
	// Observation Reference Range Meaning Codes (Example)
	set meaning(meaning) {
		this._meaning = new CodeableConcept(meaning);
	}

	get meaning() {
		return this._meaning;
	}

	// 0..1	Range	Applicable age range, if relevant
	set age(age) {
		this._age = new Range(age);
	}

	get age() {
		return this._age;
	}

	// 0..1	string	Text based reference range in an observation
	set text(text) {
		this._text = text;
	}

	get text() {
		return this._text;
	}

	toJSON() {
		return {
			low: this._low,
			high: this._high,
			meaning: this._meaning,
			age: this._age,
			text: this._text
		};
	}


}

module.exports = ReferenceRange;
