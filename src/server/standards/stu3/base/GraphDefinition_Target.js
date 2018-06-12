const BackboneElement = require('./BackboneElement');
const GraphDefinition_Compartment = require('./GraphDefinition_Compartment');
const GraphDefinition_Link = require('./GraphDefinition_Link');

class GraphDefinition_Target extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'GraphDefinition_Target';
	}

	// Type of resource this link refers to.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field type`);
		}
		this._type = new_value;
	}

	// Profile for the target resource.
	get profile () {
		return this._profile;
	}

	set profile ( new_value ) {
		this._profile = new_value;
	}

	// Compartment Consistency Rules.
	get compartment () {
		return this._compartment;
	}

	set compartment ( new_value ) {
		this._compartment = Array.isArray(new_value) ? new_value.map(val => new GraphDefinition_Compartment(val)) : [new GraphDefinition_Compartment(new_value)];
	}

	// Additional links from target resource.
	get link () {
		return this._link;
	}

	set link ( new_value ) {
		this._link = Array.isArray(new_value) ? new_value.map(val => new GraphDefinition_Link(val)) : [new GraphDefinition_Link(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this._type,
			profile: this._profile,
			compartment: this._compartment,
			link: this._link
		});
	}

}

module.exports = GraphDefinition_Target;
