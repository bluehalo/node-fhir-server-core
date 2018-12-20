const BackboneElement = require('./BackboneElement');
const InstantScalar = require('./scalars/Instant.scalar');

class DeviceMetricCalibration extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'DeviceMetricCalibration';
		Object.assign(this, opt);
	}

	// This is a DeviceMetricCalibration resource
	static get __resourceType() {
		return 'DeviceMetricCalibration';
	}

	// Describes the type of the calibration method.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// Describes the state of the calibration.
	get state() {
		return this.__state;
	}

	set state(new_value) {
		this.__state = new_value;
	}

	// Describes the time last calibration has been performed.
	get time() {
		return this.__time;
	}

	set time(new_value) {
		// Throw if new value does not match the pattern
		let pattern = InstantScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field time`);
		}
		this.__time = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type,
			state: this.__state,
			time: this.__time,
		});
	}
}

module.exports = DeviceMetricCalibration;
