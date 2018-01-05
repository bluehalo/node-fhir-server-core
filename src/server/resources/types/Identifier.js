const path = require('path');
const Element = require(path.resolve('./src/server/resources/types/Element'));
const Code = require(path.resolve('./src/server/resources/types/Code'));
const CodeableConcept = require(path.resolve('./src/server/resources/types/CodeableConcept'));
const Period = require(path.resolve('./src/server/resources/types/Period'));
const Reference = require(path.resolve('./src/server/resources/types/Reference'));



class Identifier extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	// use	code	usual | official | temp | secondary (If known)
	// Identifier Use (Required)
	set use(use) {
		this._use = new Code(use);
	}

	get use() {
		return this._use;
	}

	// type	Σ	0..1	CodeableConcept	Description of identifier
	// Identifier Type Codes (Extensible)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// system	Σ	0..1	uri	The namespace for the identifier
	set system(system) {
		this._system = system;
	}

	get system() {
		return this._system;
	}

	// value	Σ	0..1	string	The value that is unique
	set value(value) {
		this._value = value;
	}

	get value() {
		return this._value;
	}

	// period	Σ	0..1	Period	Time period when id is/was valid for use
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	// assigner	Σ	0..1	Reference(Organization)	Organization that issued id (may be just text)
	set assigner(assigner) {
		this._assigner = new Reference(assigner);
	}

	get assigner() {
		return this._assigner;
	}

	toJSON() {
		const json = {
			use: this._use,
			type: this._type,
			system: this._system,
			value: this._value,
			period: this._period,
			assigner: this._assigner
		};

		return Object.assign(super.toJSON(), json);
	}
}

module.exports = Identifier;
