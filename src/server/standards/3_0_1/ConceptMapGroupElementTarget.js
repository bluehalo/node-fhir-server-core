const BackboneElement = require('./BackboneElement');
const CodeScalar = require('./scalars/Code.scalar');

class ConceptMapGroupElementTarget extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ConceptMapGroupElementTarget';
		Object.assign(this, opt);
	}

	// This is a ConceptMapGroupElementTarget resource
	static get __resourceType() {
		return 'ConceptMapGroupElementTarget';
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

	// The display for the code. The display is only provided to help editors when editing the concept map.
	get display() {
		return this.__display;
	}

	set display(new_value) {
		this.__display = new_value;
	}

	// The equivalence between the source and target concepts (counting for the dependencies and products). The equivalence is read from target to source (e.g. the target is \'wider\' than the source).
	get equivalence() {
		return this.__equivalence;
	}

	set equivalence(new_value) {
		this.__equivalence = new_value;
	}

	// A description of status/issues in mapping that conveys additional information not represented in  the structured data.
	get comment() {
		return this.__comment;
	}

	set comment(new_value) {
		this.__comment = new_value;
	}

	// A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.
	get dependsOn() {
		return this.__dependsOn;
	}

	set dependsOn(new_value) {
		const ConceptMapGroupElementTargetDependsOn = require('./ConceptMapGroupElementTargetDependsOn');
		this.__dependsOn = Array.isArray(new_value)
			? new_value.map(val => new ConceptMapGroupElementTargetDependsOn(val))
			: [new ConceptMapGroupElementTargetDependsOn(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			code: this.__code,
			display: this.__display,
			equivalence: this.__equivalence,
			comment: this.__comment,
			dependsOn: this.__dependsOn && this.__dependsOn.map(v => v.toJSON()),
		});
	}
}

module.exports = ConceptMapGroupElementTarget;
