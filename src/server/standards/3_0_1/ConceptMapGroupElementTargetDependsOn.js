const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class ConceptMapGroupElementTargetDependsOn extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ConceptMapGroupElementTargetDependsOn';
		Object.assign(this, opt);
	}

	// This is a ConceptMapGroupElementTargetDependsOn resource
	static get __resourceType() {
		return 'ConceptMapGroupElementTargetDependsOn';
	}

	// A reference to an element that holds a coded value that corresponds to a code system property. The idea is that the information model carries an element somwhere that is labeled to correspond with a code system property.
	get property() {
		return this.__property;
	}

	set property(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field property`);
		}
		this.__property = new_value;
	}

	// An absolute URI that identifies the code system of the dependency code (if the source/dependency is a value set that crosses code systems).
	get system() {
		return this.__system;
	}

	set system(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field system`);
		}
		this.__system = new_value;
	}

	// Identity (code or path) or the element/item/ValueSet that the map depends on / refers to.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		this.__code = new_value;
	}

	// The display for the code. The display is only provided to help editors when editing the concept map.
	get display() {
		return this.__display;
	}

	set display(new_value) {
		this.__display = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			property: this.__property,
			system: this.__system,
			code: this.__code,
			display: this.__display,
		});
	}
}

module.exports = ConceptMapGroupElementTargetDependsOn;
