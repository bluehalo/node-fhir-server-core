const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class ConceptMapElementTargetDependsOn extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ConceptMapElementTargetDependsOn';
		Object.assign(this, opt);
	}

	// This is a ConceptMapElementTargetDependsOn resource
	static get __resourceType() {
		return 'ConceptMapElementTargetDependsOn';
	}

	// A reference to a specific concept that holds a coded value. This can be an element in a FHIR resource, or a specific reference to a data element in a different specification (e.g. HL7 v2) or a general reference to a kind of data field, or a reference to a value set with an appropriately narrow definition.
	get element() {
		return this.__element;
	}

	set element(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field element`);
		}
		this.__element = new_value;
	}

	// An absolute URI that identifies the code system of the dependency code (if the source/dependency is a value set that crosses code systems).
	get codeSystem() {
		return this.__codeSystem;
	}

	set codeSystem(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field codeSystem`);
		}
		this.__codeSystem = new_value;
	}

	// Identity (code or path) or the element/item/ValueSet that the map depends on / refers to.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		this.__code = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			element: this.__element,
			codeSystem: this.__codeSystem,
			code: this.__code,
		});
	}
}

module.exports = ConceptMapElementTargetDependsOn;
