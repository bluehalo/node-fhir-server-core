const BackboneElement = require('./BackboneElement');
const CodeSystem_Designation = require('./CodeSystem_Designation');
const CodeSystem_Property1 = require('./CodeSystem_Property1');

class CodeSystem_Concept extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'CodeSystem_Concept';
	}

	// A code - a text symbol - that uniquely identifies the concept within the code system.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field code`);
		}
		this._code = new_value;
	}

	// A human readable string that is the recommended default way to present this concept to a user.
	get display () {
		return this._display;
	}

	set display ( new_value ) {
		this._display = new_value;
	}

	// The formal definition of the concept. The code system resource does not make formal definitions required, because of the prevalence of legacy systems. However, they are highly recommended, as without them there is no formal meaning associated with the concept.
	get definition () {
		return this._definition;
	}

	set definition ( new_value ) {
		this._definition = new_value;
	}

	// Additional representations for the concept - other languages, aliases, specialized purposes, used for particular purposes, etc.
	get designation () {
		return this._designation;
	}

	set designation ( new_value ) {
		this._designation = Array.isArray(new_value) ? new_value.map(val => new CodeSystem_Designation(val)) : [new CodeSystem_Designation(new_value)];
	}

	// A property value for this concept.
	get property () {
		return this._property;
	}

	set property ( new_value ) {
		this._property = Array.isArray(new_value) ? new_value.map(val => new CodeSystem_Property1(val)) : [new CodeSystem_Property1(new_value)];
	}

	// Defines children of a concept to produce a hierarchy of concepts. The nature of the relationships is variable (is-a/contains/categorizes) - see hierarchyMeaning.
	get concept () {
		return this._concept;
	}

	set concept ( new_value ) {
		this._concept = Array.isArray(new_value) ? new_value.map(val => new CodeSystem_Concept(val)) : [new CodeSystem_Concept(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			code: this._code,
			display: this._display,
			definition: this._definition,
			designation: this._designation,
			property: this._property,
			concept: this._concept
		});
	}

}

module.exports = CodeSystem_Concept;
