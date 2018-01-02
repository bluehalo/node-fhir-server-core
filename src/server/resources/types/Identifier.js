const path = require('path');
const Code = require(path.resolve('./src/server/resources/types/Code'));

class Identifier {
	constructor(obj) {
		Object.assign(this, obj);
	}


	// use	code	usual | official | temp | secondary (If known)
	// IdentifierUse (Required)
	set use(use) {
		this._use = new Code(use);
	}

	get use() {
		return this._use;
	}

	// type	Σ	0..1	CodeableConcept	Description of identifier
	// Identifier Type Codes (Extensible)
	set type(type) {
		this._type = type.trim();
	}

	get type() {
		return this._type;
	}

	// system	Σ	0..1	uri	The namespace for the identifier
	set system(system) {
		this._system = system.trim();
	}

	get system() {
		return this._system;
	}

	// value	Σ	0..1	string	The value that is unique
	set value(value) {
		this._value = value.trim();
	}

	get value() {
		return this._value;
	}

	// period	Σ	0..1	Period	Time period when id is/was valid for use
	set period(period) {
		this._period = period.trim();
	}

	get period() {
		return this._period;
	}

	// assigner	Σ	0..1	Reference(Organization)	Organization that issued id (may be just text)
	set assigner(assigner) {
		this._assigner = assigner.trim();
	}

	get assigner() {
		return this._assigner;
	}

	toJSON() {
		return {
			use: this._use,
			type: this._type,
			system: this._system,
			value: this._value,
			period: this._period,
			assigner: this._assigner
		};
	}
}

module.exports = Identifier;
