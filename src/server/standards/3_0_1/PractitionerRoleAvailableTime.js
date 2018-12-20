const BackboneElement = require('./BackboneElement');
const TimeScalar = require('./scalars/Time.scalar');

class PractitionerRoleAvailableTime extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'PractitionerRoleAvailableTime';
		Object.assign(this, opt);
	}

	// This is a PractitionerRoleAvailableTime resource
	static get __resourceType() {
		return 'PractitionerRoleAvailableTime';
	}

	// Indicates which days of the week are available between the start and end Times.
	get daysOfWeek() {
		return this.__daysOfWeek;
	}

	set daysOfWeek(new_value) {
		this.__daysOfWeek = Array.isArray(new_value) ? new_value : [new_value];
	}

	// Is this always available? (hence times are irrelevant) e.g. 24 hour service.
	get allDay() {
		return this.__allDay;
	}

	set allDay(new_value) {
		this.__allDay = new_value;
	}

	// The opening time of day. Note: If the AllDay flag is set, then this time is ignored.
	get availableStartTime() {
		return this.__availableStartTime;
	}

	set availableStartTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = TimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field availableStartTime`);
		}
		this.__availableStartTime = new_value;
	}

	// The closing time of day. Note: If the AllDay flag is set, then this time is ignored.
	get availableEndTime() {
		return this.__availableEndTime;
	}

	set availableEndTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = TimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field availableEndTime`);
		}
		this.__availableEndTime = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			daysOfWeek: this.__daysOfWeek,
			allDay: this.__allDay,
			availableStartTime: this.__availableStartTime,
			availableEndTime: this.__availableEndTime,
		});
	}
}

module.exports = PractitionerRoleAvailableTime;
