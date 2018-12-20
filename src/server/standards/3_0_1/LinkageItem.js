const BackboneElement = require('./BackboneElement');

class LinkageItem extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'LinkageItem';
		Object.assign(this, opt);
	}

	// This is a LinkageItem resource
	static get __resourceType() {
		return 'LinkageItem';
	}

	// Distinguishes which item is \'source of truth\' (if any) and which items are no longer considered to be current representations.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// The resource instance being linked as part of the group.
	get resource() {
		return this.__resource;
	}

	set resource(new_value) {
		const Reference = require('./Reference');
		this.__resource = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type,
			resource: this.__resource && this.__resource.toJSON(),
		});
	}
}

module.exports = LinkageItem;
