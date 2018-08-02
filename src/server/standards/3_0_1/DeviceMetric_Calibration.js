const BackboneElement = require('./BackboneElement');

class DeviceMetric_Calibration extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'DeviceMetric_Calibration';
	}

	// Describes the type of the calibration method.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['unspecified', 'offset', 'gain', 'two-point'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field type`);
		}
		this._type = new_value;
	}

	// Describes the state of the calibration.
	get state () {
		return this._state;
	}

	set state ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['not-calibrated', 'calibration-required', 'calibrated', 'unspecified'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field state`);
		}
		this._state = new_value;
	}

	// Describes the time last calibration has been performed.
	get time () {
		return this._time;
	}

	set time ( new_value ) {
		this._time = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this._type,
			state: this._state,
			time: this._time
		});
	}

}

module.exports = DeviceMetric_Calibration;
