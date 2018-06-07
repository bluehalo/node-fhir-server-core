const BackboneElement = require('./BackboneElement');
const ImplementationGuide_Resource = require('./ImplementationGuide_Resource');

class ImplementationGuide_Package extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ImplementationGuide_Package';
	}

	// The name for the group, as used in page.package.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// Human readable text describing the package.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
	get resource () {
		return this._resource;
	}

	set resource ( new_value ) {
		this._resource = Array.isArray(new_value) ? new_value.map(val => new ImplementationGuide_Resource(val)) : [new ImplementationGuide_Resource(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			name: this._name,
			description: this._description,
			resource: this._resource
		});
	}

}

module.exports = ImplementationGuide_Package;
