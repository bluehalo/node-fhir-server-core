const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');
const CodeScalar = require('./scalars/Code.scalar');

class ConceptMapElementTarget extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ConceptMapElementTarget';
		Object.assign(this, opt);
	}

	// This is a ConceptMapElementTarget resource
	static get __resourceType() {
		return 'ConceptMapElementTarget';
	}

	// An absolute URI that identifies the code system of the target code (if the target is a value set that cross code systems).
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

	// Identity (code or path) or the element/item that the map refers to.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		// Throw if new value does not match the pattern
		let pattern = CodeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field code`);
		}
		this.__code = new_value;
	}

	// The equivalence between the source and target concepts (counting for the dependencies and products). The equivalence is read from target to source (e.g. the target is \'wider\' than the source).
	get equivalence() {
		return this.__equivalence;
	}

	set equivalence(new_value) {
		this.__equivalence = new_value;
	}

	// A description of status/issues in mapping that conveys additional information not represented in  the structured data.
	get comments() {
		return this.__comments;
	}

	set comments(new_value) {
		this.__comments = new_value;
	}

	// A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.
	get dependsOn() {
		return this.__dependsOn;
	}

	set dependsOn(new_value) {
		const ConceptMapElementTargetDependsOn = require('./ConceptMapElementTargetDependsOn');
		this.__dependsOn = Array.isArray(new_value)
			? new_value.map(val => new ConceptMapElementTargetDependsOn(val))
			: [new ConceptMapElementTargetDependsOn(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			codeSystem: this.__codeSystem,
			code: this.__code,
			equivalence: this.__equivalence,
			comments: this.__comments,
			dependsOn: this.__dependsOn && this.__dependsOn.map(v => v.toJSON()),
		});
	}
}

module.exports = ConceptMapElementTarget;
