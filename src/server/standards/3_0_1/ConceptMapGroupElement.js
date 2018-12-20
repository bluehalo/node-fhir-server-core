const BackboneElement = require('./BackboneElement');
const CodeScalar = require('./scalars/Code.scalar');

class ConceptMapGroupElement extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ConceptMapGroupElement';
		Object.assign(this, opt);
	}

	// This is a ConceptMapGroupElement resource
	static get __resourceType() {
		return 'ConceptMapGroupElement';
	}

	// Identity (code or path) or the element/item being mapped.
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

	// A concept from the target value set that this concept maps to.
	get target() {
		return this.__target;
	}

	set target(new_value) {
		const ConceptMapGroupElementTarget = require('./ConceptMapGroupElementTarget');
		this.__target = Array.isArray(new_value)
			? new_value.map(val => new ConceptMapGroupElementTarget(val))
			: [new ConceptMapGroupElementTarget(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			code: this.__code,
			display: this.__display,
			target: this.__target && this.__target.map(v => v.toJSON()),
		});
	}
}

module.exports = ConceptMapGroupElement;
