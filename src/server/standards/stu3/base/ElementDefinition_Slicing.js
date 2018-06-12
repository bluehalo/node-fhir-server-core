const BackboneElement = require('./BackboneElement');
const ElementDefinition_Discriminator = require('./ElementDefinition_Discriminator');

class ElementDefinition_Slicing extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ElementDefinition_Slicing';
	}

	// Designates which child elements are used to discriminate between the slices when processing an instance. If one or more discriminators are provided, the value of the child elements in the instance data SHALL completely distinguish which slice the element in the resource matches based on the allowed values for those elements in each of the slices.
	get discriminator () {
		return this._discriminator;
	}

	set discriminator ( new_value ) {
		this._discriminator = Array.isArray(new_value) ? new_value.map(val => new ElementDefinition_Discriminator(val)) : [new ElementDefinition_Discriminator(new_value)];
	}

	// A human-readable text description of how the slicing works. If there is no discriminator, this is required to be present to provide whatever information is possible about how the slices can be differentiated.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// If the matching elements have to occur in the same order as defined in the profile.
	get ordered () {
		return this._ordered;
	}

	set ordered ( new_value ) {
		this._ordered = new_value;
	}

	// Whether additional slices are allowed or not. When the slices are ordered, profile authors can also say that additional slices are only allowed at the end.
	get rules () {
		return this._rules;
	}

	set rules ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['closed', 'open', 'openAtEnd'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field rules`);
		}
		this._rules = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			discriminator: this._discriminator,
			description: this._description,
			ordered: this._ordered,
			rules: this._rules
		});
	}

}

module.exports = ElementDefinition_Slicing;
