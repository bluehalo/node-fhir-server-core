const DomainResource = require('./DomainResource');
const Reference = require('./Reference');
const Linkage_Item = require('./Linkage_Item');

class Linkage extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Linkage';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Linkage';
	}

	// This is a Linkage resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['Linkage'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Indicates whether the asserted set of linkages are considered to be "in effect".
	get active () {
		return this._active;
	}

	set active ( new_value ) {
		this._active = new_value;
	}

	// Identifies the user or organization responsible for asserting the linkages and who establishes the context for evaluating the nature of each linkage.
	get author () {
		return this._author;
	}

	set author ( new_value ) {
		this._author = new Reference(new_value);
	}

	// Identifies one of the records that is considered to refer to the same real-world occurrence as well as how the items hould be evaluated within the collection of linked items.
	get item () {
		return this._item;
	}

	set item ( new_value ) {
		this._item = Array.isArray(new_value) ? new_value.map(val => new Linkage_Item(val)) : [new Linkage_Item(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			active: this._active,
			author: this._author && this._author.toJSON(),
			item: this._item && this._item.map(v => v.toJSON())
		});
	}

}

module.exports = Linkage;
