const Element = require('./types/Element');
const Code = require('./types/Code');
const Reference = require('./types/Reference');

class ParameterDefinition extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	// name	Σ	0..1	code	Name used to access the parameter value
	set name(name) {
		this._name = new Code(name);
	}

	get name() {
		return this._name;
	}

	// use	Σ	1..1	code	in | out
	// OperationParameterUse (Required)
	set use(use) {
		this._use = new Code(use);
	}

	get use() {
		return this._use;
	}

	// min	Σ	0..1	integer	Minimum cardinality
	set min(min) {
		this._min = min;
	}

	get min() {
		return this._min;
	}

	// max	Σ	0..1	string	Maximum cardinality (a number of *)
	set max(max) {
		this._max = max;
	}

	get max() {
		return this._max;
	}

	// documentation	Σ	0..1	string	A brief description of the parameter
	set documentation(documentation) {
		this._documentation = documentation;
	}

	get documentation() {
		return this._documentation;
	}

	// type	Σ	1..1	code	What type of value
	// FHIRAllTypes (Required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// profile	Σ	0..1	Reference(StructureDefinition)	What profile the value is expected to be
	set profile(profile) {
		this._profile = new Reference(profile);
	}

	get profile() {
		return this._profile;
	}

	toJSON() {
		const json = {
			name: this._name,
			use: this._use,
			min: this._min,
			max: this._max,
			documentation: this._documentation,
			type: this._type,
			profile: this._profile,
		};

		return Object.assign(super.toJSON(), json);
	}
}

module.exports = ParameterDefinition;
