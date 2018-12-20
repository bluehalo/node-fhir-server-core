const BackboneElement = require('./BackboneElement');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class ListEntry extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ListEntry';
		Object.assign(this, opt);
	}

	// This is a ListEntry resource
	static get __resourceType() {
		return 'ListEntry';
	}

	// The flag allows the system constructing the list to indicate the role and significance of the item in the list.
	get flag() {
		return this.__flag;
	}

	set flag(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__flag = new CodeableConcept(new_value);
	}

	// True if this item is marked as deleted in the list.
	get deleted() {
		return this.__deleted;
	}

	set deleted(new_value) {
		this.__deleted = new_value;
	}

	// When this item was added to the list.
	get date() {
		return this.__date;
	}

	set date(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this.__date = new_value;
	}

	// A reference to the actual resource from which data was derived.
	get item() {
		return this.__item;
	}

	set item(new_value) {
		const Reference = require('./Reference');
		this.__item = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			flag: this.__flag && this.__flag.toJSON(),
			deleted: this.__deleted,
			date: this.__date,
			item: this.__item && this.__item.toJSON(),
		});
	}
}

module.exports = ListEntry;
