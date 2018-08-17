const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');
const Coding = require('./Coding');
const CodeableConcept = require('./CodeableConcept');

class DataRequirement_CodeFilter extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'DataRequirement_CodeFilter';
	}

	// The code-valued attribute of the filter. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant. The path must resolve to an element of type code, Coding, or CodeableConcept.
	get path () {
		return this._path;
	}

	set path ( new_value ) {
		this._path = new_value;
	}

	// The valueset for the code filter. The valueSet and value elements are exclusive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.
	get valueSetString () {
		return this._valueSetString;
	}

	set valueSetString ( new_value ) {
		this._valueSetString = new_value;
	}

	// The valueset for the code filter. The valueSet and value elements are exclusive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.
	get valueSetReference () {
		return this._valueSetReference;
	}

	set valueSetReference ( new_value ) {
		this._valueSetReference = new Reference(new_value);
	}

	// The codes for the code filter. Only one of valueSet, valueCode, valueCoding, or valueCodeableConcept may be specified. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified codes.
	get valueCode () {
		return this._valueCode;
	}

	set valueCode ( new_value ) {
		this._valueCode = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// The Codings for the code filter. Only one of valueSet, valueCode, valueConding, or valueCodeableConcept may be specified. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified Codings.
	get valueCoding () {
		return this._valueCoding;
	}

	set valueCoding ( new_value ) {
		this._valueCoding = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// The CodeableConcepts for the code filter. Only one of valueSet, valueCode, valueConding, or valueCodeableConcept may be specified. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified CodeableConcepts.
	get valueCodeableConcept () {
		return this._valueCodeableConcept;
	}

	set valueCodeableConcept ( new_value ) {
		this._valueCodeableConcept = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			path: this._path,
			valueSetString: this._valueSetString,
			valueSetReference: this._valueSetReference && this._valueSetReference.toJSON(),
			valueCode: this._valueCode,
			valueCoding: this._valueCoding && this._valueCoding.map(v => v.toJSON()),
			valueCodeableConcept: this._valueCodeableConcept && this._valueCodeableConcept.map(v => v.toJSON())
		});
	}

}

module.exports = DataRequirement_CodeFilter;
