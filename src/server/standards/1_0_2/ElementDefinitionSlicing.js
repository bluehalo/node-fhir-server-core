const Element = require('./Element');

class ElementDefinitionSlicing extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ElementDefinitionSlicing';
		Object.assign(this, opt);
	}

	// This is a ElementDefinitionSlicing resource
	static get __resourceType() {
		return 'ElementDefinitionSlicing';
	}

	// Designates which child elements are used to discriminate between the slices when processing an instance. If one or more discriminators are provided, the value of the child elements in the instance data SHALL completely distinguish which slice the element in the resource matches based on the allowed values for those elements in each of the slices.
	get discriminator() {
		return this.__discriminator;
	}

	set discriminator(new_value) {
		this.__discriminator = Array.isArray(new_value) ? new_value : [new_value];
	}

	// A human-readable text description of how the slicing works. If there is no discriminator, this is required to be present to provide whatever information is possible about how the slices can be differentiated.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// If the matching elements have to occur in the same order as defined in the profile.
	get ordered() {
		return this.__ordered;
	}

	set ordered(new_value) {
		this.__ordered = new_value;
	}

	// Whether additional slices are allowed or not. When the slices are ordered, profile authors can also say that additional slices are only allowed at the end.
	get rules() {
		return this.__rules;
	}

	set rules(new_value) {
		this.__rules = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			discriminator: this.__discriminator,
			description: this.__description,
			ordered: this.__ordered,
			rules: this.__rules,
		});
	}
}

module.exports = ElementDefinitionSlicing;
