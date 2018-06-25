const BackboneElement = require('./BackboneElement');

class PractitionerRole_AvailableTime extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'PractitionerRole_AvailableTime';
	}

	// Indicates which days of the week are available between the start and end Times.
	get daysOfWeek () {
		return this._daysOfWeek;
	}

	set daysOfWeek ( new_value ) {
		this._daysOfWeek = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// Is this always available? (hence times are irrelevant) e.g. 24 hour service.
	get allDay () {
		return this._allDay;
	}

	set allDay ( new_value ) {
		this._allDay = new_value;
	}

	// The opening time of day. Note: If the AllDay flag is set, then this time is ignored.
	get availableStartTime () {
		return this._availableStartTime;
	}

	set availableStartTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field availableStartTime`);
		}
		this._availableStartTime = new_value;
	}

	// The closing time of day. Note: If the AllDay flag is set, then this time is ignored.
	get availableEndTime () {
		return this._availableEndTime;
	}

	set availableEndTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field availableEndTime`);
		}
		this._availableEndTime = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			daysOfWeek: this._daysOfWeek,
			allDay: this._allDay,
			availableStartTime: this._availableStartTime,
			availableEndTime: this._availableEndTime
		});
	}

}

module.exports = PractitionerRole_AvailableTime;
