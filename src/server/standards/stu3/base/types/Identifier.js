const Element = require('./types/Element');
const Code = require('./types/Code');
const CodeableConcept = require('./types/CodeableConcept');
const Period = require('./types/Period');
const Reference = require('./types/Reference');

class Identifier extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	// use	?!Σ	0..1	code	usual | official | temp | secondary (If known)
	// Binding: IdentifierUse (required)
	set use(use) {
		this._use = new Code(use);
	}

	get use() {
		return this._use;
	}

	// type	Σ	0..1	CodeableConcept	Description of identifier
	// Binding: Identifier Type Codes (extensible)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// system	SΣ	1..1	uri	The namespace for the identifier value
	// Example General': http://www.acme.com/identifiers/patient or urn:ietf:rfc:3986 if the Identifier.value itself is a full uri
	set system(system) {
		this._system = system;
	}

	get system() {
		return this._system;
	}

	// value	SΣ	1..1	string	The value that is unique within the system.
	// Example General': 123456
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
			assigner: this._assigner,
		};

		return Object.assign(super.toJSON(), json);
	}
}

module.exports = Identifier;
