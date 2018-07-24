const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');

class Linkage_Item extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Linkage_Item';
	}

	// Distinguishes which item is "source of truth" (if any) and which items are no longer considered to be current representations.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['source', 'alternate', 'historical'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field type`);
		}
		this._type = new_value;
	}

	// The resource instance being linked as part of the group.
	get resource () {
		return this._resource;
	}

	set resource ( new_value ) {
		this._resource = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this._type,
			resource: this._resource
		});
	}

}

module.exports = Linkage_Item;
