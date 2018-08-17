const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');

class List_Entry extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'List_Entry';
	}

	// The flag allows the system constructing the list to indicate the role and significance of the item in the list.
	get flag () {
		return this._flag;
	}

	set flag ( new_value ) {
		this._flag = new CodeableConcept(new_value);
	}

	// True if this item is marked as deleted in the list.
	get deleted () {
		return this._deleted;
	}

	set deleted ( new_value ) {
		this._deleted = new_value;
	}

	// When this item was added to the list.
	get date () {
		return this._date;
	}

	set date ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this._date = new_value;
	}

	// A reference to the actual resource from which data was derived.
	get item () {
		return this._item;
	}

	set item ( new_value ) {
		this._item = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			flag: this._flag && this._flag.toJSON(),
			deleted: this._deleted,
			date: this._date,
			item: this._item && this._item.toJSON()
		});
	}

}

module.exports = List_Entry;
