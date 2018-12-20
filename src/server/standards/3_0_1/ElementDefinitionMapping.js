const Element = require('./Element');
const IdScalar = require('./scalars/Id.scalar');
const CodeScalar = require('./scalars/Code.scalar');

class ElementDefinitionMapping extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ElementDefinitionMapping';
		Object.assign(this, opt);
	}

	// This is a ElementDefinitionMapping resource
	static get __resourceType() {
		return 'ElementDefinitionMapping';
	}

	// An internal reference to the definition of a mapping.
	get identity() {
		return this.__identity;
	}

	set identity(new_value) {
		// Throw if new value does not match the pattern
		let pattern = IdScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field identity`);
		}
		this.__identity = new_value;
	}

	// Identifies the computable language in which mapping.map is expressed.
	get language() {
		return this.__language;
	}

	set language(new_value) {
		// Throw if new value does not match the pattern
		let pattern = CodeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field language`);
		}
		this.__language = new_value;
	}

	// Expresses what part of the target specification corresponds to this element.
	get map() {
		return this.__map;
	}

	set map(new_value) {
		this.__map = new_value;
	}

	// Comments that provide information about the mapping or its use.
	get comment() {
		return this.__comment;
	}

	set comment(new_value) {
		this.__comment = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			identity: this.__identity,
			language: this.__language,
			map: this.__map,
			comment: this.__comment,
		});
	}
}

module.exports = ElementDefinitionMapping;
