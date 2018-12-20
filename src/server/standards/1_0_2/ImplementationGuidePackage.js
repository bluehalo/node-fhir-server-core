const BackboneElement = require('./BackboneElement');

class ImplementationGuidePackage extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ImplementationGuidePackage';
		Object.assign(this, opt);
	}

	// This is a ImplementationGuidePackage resource
	static get __resourceType() {
		return 'ImplementationGuidePackage';
	}

	// The name for the group, as used in page.package.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// Human readable text describing the package.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// A resource that is part of the implementation guide. Conformance resources (value set, structure definition, conformance statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
	get resource() {
		return this.__resource;
	}

	set resource(new_value) {
		const ImplementationGuidePackageResource = require('./ImplementationGuidePackageResource');
		this.__resource = Array.isArray(new_value)
			? new_value.map(val => new ImplementationGuidePackageResource(val))
			: [new ImplementationGuidePackageResource(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			name: this.__name,
			description: this.__description,
			resource: this.__resource && this.__resource.map(v => v.toJSON()),
		});
	}
}

module.exports = ImplementationGuidePackage;
