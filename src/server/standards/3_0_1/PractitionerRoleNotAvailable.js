const BackboneElement = require('./BackboneElement');

class PractitionerRoleNotAvailable extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'PractitionerRoleNotAvailable';
		Object.assign(this, opt);
	}

	// This is a PractitionerRoleNotAvailable resource
	static get __resourceType() {
		return 'PractitionerRoleNotAvailable';
	}

	// The reason that can be presented to the user as to why this time is not available.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// Service is not available (seasonally or for a public holiday) from this date.
	get during() {
		return this.__during;
	}

	set during(new_value) {
		const Period = require('./Period');
		this.__during = new Period(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			description: this.__description,
			during: this.__during && this.__during.toJSON(),
		});
	}
}

module.exports = PractitionerRoleNotAvailable;
