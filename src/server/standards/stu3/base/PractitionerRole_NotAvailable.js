const BackboneElement = require('./BackboneElement');
const Period = require('./Period');

class PractitionerRole_NotAvailable extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'PractitionerRole_NotAvailable';
	}

	// The reason that can be presented to the user as to why this time is not available.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// Service is not available (seasonally or for a public holiday) from this date.
	get during () {
		return this._during;
	}

	set during ( new_value ) {
		this._during = new Period(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			description: this._description,
			during: this._during
		});
	}

}

module.exports = PractitionerRole_NotAvailable;
