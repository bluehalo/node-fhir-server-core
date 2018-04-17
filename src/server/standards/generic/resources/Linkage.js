const DomainResource = require('../types/DomainResource');
const Reference = require('../types/Reference');
const Code = require('../types/Code');

class Item {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// type	Σ	1..1	code	source | alternate | historical
	// LinkageType (Required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// resource	Σ	1..1	Reference()	Resource being linked
	set resource(resource) {
		this._resource = new Reference(resource);
	}

	get resource() {
		return this._resource;
	}

	toJSON() {
		return {
			type: this._type,
			resource: this._resource,
		};
	}
}

class Linkage extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Linkage';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// active	Σ	0..1	boolean	Whether this linkage assertion is active or not
	set active(active) {
		this._active = active;
	}

	get active() {
		return this._active;
	}

	// author	Σ	0..1	Reference(Practitioner | Organization)	Who is responsible for linkages
	set author(author) {
		this._author = new Reference(author);
	}

	get author() {
		return this._author;
	}

	// item	ΣI	1..*	BackboneElement	Item to be linked
	set item(item) {
		if (Array.isArray(item)) {
			this._item = item.map((i) => new Item(i));
		} else {
			this._item = [new Item(item)];
		}
	}

	get item() {
		return this._item;
	}

	toJSON() {
		const json = {
			active: this._active,
			author: this._author,
			item: this._item,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Linkage = Linkage;
module.exports.Item = Item;
