const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');
const CodeScalar = require('./scalars/Code.scalar');

class ConceptMapElement extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ConceptMapElement';
		Object.assign(this, opt);
	}

	// This is a ConceptMapElement resource
	static get __resourceType() {
		return 'ConceptMapElement';
	}

	// An absolute URI that identifies the Code System (if the source is a value set that crosses more than one code system).
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

	// A concept from the target value set that this concept maps to.
	get target() {
		return this.__target;
	}

	set target(new_value) {
		const ConceptMapElementTarget = require('./ConceptMapElementTarget');
		this.__target = Array.isArray(new_value)
			? new_value.map(val => new ConceptMapElementTarget(val))
			: [new ConceptMapElementTarget(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			codeSystem: this.__codeSystem,
			code: this.__code,
			target: this.__target && this.__target.map(v => v.toJSON()),
		});
	}
}

module.exports = ConceptMapElement;
