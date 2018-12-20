const BackboneElement = require('./BackboneElement');

class EncounterLocation extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'EncounterLocation';
		Object.assign(this, opt);
	}

	// This is a EncounterLocation resource
	static get __resourceType() {
		return 'EncounterLocation';
	}

	// The location where the encounter takes place.
	get location() {
		return this.__location;
	}

	set location(new_value) {
		const Reference = require('./Reference');
		this.__location = new Reference(new_value);
	}

	// The status of the participants\' presence at the specified location during the period specified. If the participant is is no longer at the location, then the period will have an end date/time.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// Time period during which the patient was present at the location.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			location: this.__location && this.__location.toJSON(),
			status: this.__status,
			period: this.__period && this.__period.toJSON(),
		});
	}
}

module.exports = EncounterLocation;
