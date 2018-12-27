const Element = require('./Element');
const CodeScalar = require('./scalars/Code.scalar');

class DataRequirementCodeFilter extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'DataRequirementCodeFilter';
		Object.assign(this, opt);
	}

	// This is a DataRequirementCodeFilter resource
	static get __resourceType() {
		return 'DataRequirementCodeFilter';
	}

	// The code-valued attribute of the filter. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant. The path must resolve to an element of type code, Coding, or CodeableConcept.
	get path() {
		return this.__path;
	}

	set path(new_value) {
		this.__path = new_value;
	}

	// The valueset for the code filter. The valueSet and value elements are exclusive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.
	get valueSetString() {
		return this.__valueSetString;
	}

	set valueSetString(new_value) {
		this.__valueSetString = new_value;
	}

	// The valueset for the code filter. The valueSet and value elements are exclusive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.
	get valueSetReference() {
		return this.__valueSetReference;
	}

	set valueSetReference(new_value) {
		const Reference = require('./Reference');
		this.__valueSetReference = new Reference(new_value);
	}

	// The codes for the code filter. Only one of valueSet, valueCode, valueCoding, or valueCodeableConcept may be specified. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified codes.
	get valueCode() {
		return this.__valueCode;
	}

	set valueCode(new_value) {
		// Throw if new value does not match the pattern
		let pattern = CodeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field valueCode`);
		}
		this.__valueCode = Array.isArray(new_value) ? new_value : [new_value];
	}

	// The Codings for the code filter. Only one of valueSet, valueCode, valueConding, or valueCodeableConcept may be specified. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified Codings.
	get valueCoding() {
		return this.__valueCoding;
	}

	set valueCoding(new_value) {
		const Coding = require('./Coding');
		this.__valueCoding = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// The CodeableConcepts for the code filter. Only one of valueSet, valueCode, valueConding, or valueCodeableConcept may be specified. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified CodeableConcepts.
	get valueCodeableConcept() {
		return this.__valueCodeableConcept;
	}

	set valueCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__valueCodeableConcept = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			path: this.__path,
			valueSetString: this.__valueSetString,
			valueSetReference: this.__valueSetReference && this.__valueSetReference.toJSON(),
			valueCode: this.__valueCode,
			valueCoding: this.__valueCoding && this.__valueCoding.map(v => v.toJSON()),
			valueCodeableConcept: this.__valueCodeableConcept && this.__valueCodeableConcept.map(v => v.toJSON()),
		});
	}
}

module.exports = DataRequirementCodeFilter;
