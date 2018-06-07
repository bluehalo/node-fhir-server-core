const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const Timing = require('./Timing');
const DeviceMetric_Calibration = require('./DeviceMetric_Calibration');

class DeviceMetric extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'DeviceMetric';
	}

	// This is a DeviceMetric resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['DeviceMetric'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Describes the unique identification of this metric that has been assigned by the device or gateway software. For example: handle ID.  It should be noted that in order to make the identifier unique, the system element of the identifier should be set to the unique identifier of the device.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	// Describes the type of the metric. For example: Heart Rate, PEEP Setting, etc.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new CodeableConcept(new_value);
	}

	// Describes the unit that an observed value determined for this metric will have. For example: Percent, Seconds, etc.
	get unit () {
		return this._unit;
	}

	set unit ( new_value ) {
		this._unit = new CodeableConcept(new_value);
	}

	// Describes the link to the  Device that this DeviceMetric belongs to and that contains administrative device information such as manufacturer, serial number, etc.
	get source () {
		return this._source;
	}

	set source ( new_value ) {
		this._source = new Reference(new_value);
	}

	// Describes the link to the  DeviceComponent that this DeviceMetric belongs to and that provide information about the location of this DeviceMetric in the containment structure of the parent Device. An example would be a DeviceComponent that represents a Channel. This reference can be used by a client application to distinguish DeviceMetrics that have the same type, but should be interpreted based on their containment location.
	get parent () {
		return this._parent;
	}

	set parent ( new_value ) {
		this._parent = new Reference(new_value);
	}

	// Indicates current operational state of the device. For example: On, Off, Standby, etc.
	get operationalStatus () {
		return this._operationalStatus;
	}

	set operationalStatus ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['on', 'off', 'standby', 'entered-in-error'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field operationalStatus`);
		}
		this._operationalStatus = new_value;
	}

	// Describes the color representation for the metric. This is often used to aid clinicians to track and identify parameter types by color. In practice, consider a Patient Monitor that has ECG/HR and Pleth for example; the parameters are displayed in different characteristic colors, such as HR-blue, BP-green, and PR and SpO2- magenta.
	get color () {
		return this._color;
	}

	set color ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field color`);
		}
		this._color = new_value;
	}

	// Indicates the category of the observation generation process. A DeviceMetric can be for example a setting, measurement, or calculation.
	get category () {
		return this._category;
	}

	set category ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['measurement', 'setting', 'calculation', 'unspecified'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field category`);
		}
		this._category = new_value;
	}

	// Describes the measurement repetition time. This is not necessarily the same as the update period. The measurement repetition time can range from milliseconds up to hours. An example for a measurement repetition time in the range of milliseconds is the sampling rate of an ECG. An example for a measurement repetition time in the range of hours is a NIBP that is triggered automatically every hour. The update period may be different than the measurement repetition time, if the device does not update the published observed value with the same frequency as it was measured.
	get measurementPeriod () {
		return this._measurementPeriod;
	}

	set measurementPeriod ( new_value ) {
		this._measurementPeriod = new Timing(new_value);
	}

	// Describes the calibrations that have been performed or that are required to be performed.
	get calibration () {
		return this._calibration;
	}

	set calibration ( new_value ) {
		this._calibration = Array.isArray(new_value) ? new_value.map(val => new DeviceMetric_Calibration(val)) : [new DeviceMetric_Calibration(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier,
			type: this._type,
			unit: this._unit,
			source: this._source,
			parent: this._parent,
			operationalStatus: this._operationalStatus,
			color: this._color,
			category: this._category,
			measurementPeriod: this._measurementPeriod,
			calibration: this._calibration
		});
	}

}

module.exports = DeviceMetric;
