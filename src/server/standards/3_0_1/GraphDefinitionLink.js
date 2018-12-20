const BackboneElement = require('./BackboneElement');

class GraphDefinitionLink extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'GraphDefinitionLink';
		Object.assign(this, opt);
	}

	// This is a GraphDefinitionLink resource
	static get __resourceType() {
		return 'GraphDefinitionLink';
	}

	// Path in the resource that contains the link.
	get path() {
		return this.__path;
	}

	set path(new_value) {
		this.__path = new_value;
	}

	// Which slice (if profiled).
	get sliceName() {
		return this.__sliceName;
	}

	set sliceName(new_value) {
		this.__sliceName = new_value;
	}

	// Minimum occurrences for this link.
	get min() {
		return this.__min;
	}

	set min(new_value) {
		this.__min = new_value;
	}

	// Maximum occurrences for this link.
	get max() {
		return this.__max;
	}

	set max(new_value) {
		this.__max = new_value;
	}

	// Information about why this link is of interest in this graph definition.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// Potential target for the link.
	get target() {
		return this.__target;
	}

	set target(new_value) {
		const GraphDefinitionLinkTarget = require('./GraphDefinitionLinkTarget');
		this.__target = Array.isArray(new_value)
			? new_value.map(val => new GraphDefinitionLinkTarget(val))
			: [new GraphDefinitionLinkTarget(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			path: this.__path,
			sliceName: this.__sliceName,
			min: this.__min,
			max: this.__max,
			description: this.__description,
			target: this.__target && this.__target.map(v => v.toJSON()),
		});
	}
}

module.exports = GraphDefinitionLink;
