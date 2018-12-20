const DomainResource = require('./DomainResource');

class Linkage extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Linkage';
		Object.assign(this, opt);
	}

	// This is a Linkage resource
	static get __resourceType() {
		return 'Linkage';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Linkage = new_value;
	}

	// Indicates whether the asserted set of linkages are considered to be \'in effect\'.
	get active() {
		return this.__active;
	}

	set active(new_value) {
		this.__active = new_value;
	}

	// Identifies the user or organization responsible for asserting the linkages and who establishes the context for evaluating the nature of each linkage.
	get author() {
		return this.__author;
	}

	set author(new_value) {
		const Reference = require('./Reference');
		this.__author = new Reference(new_value);
	}

	// Identifies one of the records that is considered to refer to the same real-world occurrence as well as how the items hould be evaluated within the collection of linked items.
	get item() {
		return this.__item;
	}

	set item(new_value) {
		const LinkageItem = require('./LinkageItem');
		this.__item = Array.isArray(new_value) ? new_value.map(val => new LinkageItem(val)) : [new LinkageItem(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			active: this.__active,
			author: this.__author && this.__author.toJSON(),
			item: this.__item && this.__item.map(v => v.toJSON()),
		});
	}
}

module.exports = Linkage;
