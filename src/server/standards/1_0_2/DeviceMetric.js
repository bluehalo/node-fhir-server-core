const DomainResource = require('./DomainResource');

class DeviceMetric extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'DeviceMetric';
		Object.assign(this, opt);
	}

	// This is a DeviceMetric resource
	static get __resourceType() {
		return 'DeviceMetric';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__DeviceMetric = new_value;
	}

	// Describes the type of the metric. For example: Heart Rate, PEEP Setting, etc.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// Describes the unique identification of this metric that has been assigned by the device or gateway software. For example: handle ID.  It should be noted that in order to make the identifier unique, the system element of the identifier should be set to the unique identifier of the device.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// Describes the unit that an observed value determined for this metric will have. For example: Percent, Seconds, etc.
	get unit() {
		return this.__unit;
	}

	set unit(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__unit = new CodeableConcept(new_value);
	}

	// Describes the link to the  Device that this DeviceMetric belongs to and that contains administrative device information such as manufacture, serial number, etc.
	get source() {
		return this.__source;
	}

	set source(new_value) {
		const Reference = require('./Reference');
		this.__source = new Reference(new_value);
	}

	// Describes the link to the  DeviceComponent that this DeviceMetric belongs to and that provide information about the location of this DeviceMetric in the containment structure of the parent Device. An example would be a DeviceComponent that represents a Channel. This reference can be used by a client application to distinguish DeviceMetrics that have the same type, but should be interpreted based on their containment location.
	get parent() {
		return this.__parent;
	}

	set parent(new_value) {
		const Reference = require('./Reference');
		this.__parent = new Reference(new_value);
	}

	// Indicates current operational state of the device. For example: On, Off, Standby, etc.
	get operationalStatus() {
		return this.__operationalStatus;
	}

	set operationalStatus(new_value) {
		this.__operationalStatus = new_value;
	}

	// Describes the color representation for the metric. This is often used to aid clinicians to track and identify parameter types by color. In practice, consider a Patient Monitor that has ECG/HR and Pleth for example; the parameters are displayed in different characteristic colors, such as HR-blue, BP-green, and PR and SpO2- magenta.
	get color() {
		return this.__color;
	}

	set color(new_value) {
		this.__color = new_value;
	}

	// Indicates the category of the observation generation process. A DeviceMetric can be for example a setting, measurement, or calculation.
	get category() {
		return this.__category;
	}

	set category(new_value) {
		this.__category = new_value;
	}

	// Describes the measurement repetition time. This is not necessarily the same as the update period. The measurement repetition time can range from milliseconds up to hours. An example for a measurement repetition time in the range of milliseconds is the sampling rate of an ECG. An example for a measurement repetition time in the range of hours is a NIBP that is triggered automatically every hour. The update period may be different than the measurement repetition time, if the device does not update the published observed value with the same frequency as it was measured.
	get measurementPeriod() {
		return this.__measurementPeriod;
	}

	set measurementPeriod(new_value) {
		const Timing = require('./Timing');
		this.__measurementPeriod = new Timing(new_value);
	}

	// Describes the calibrations that have been performed or that are required to be performed.
	get calibration() {
		return this.__calibration;
	}

	set calibration(new_value) {
		const DeviceMetricCalibration = require('./DeviceMetricCalibration');
		this.__calibration = Array.isArray(new_value)
			? new_value.map(val => new DeviceMetricCalibration(val))
			: [new DeviceMetricCalibration(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			type: this.__type && this.__type.toJSON(),
			identifier: this.__identifier && this.__identifier.toJSON(),
			unit: this.__unit && this.__unit.toJSON(),
			source: this.__source && this.__source.toJSON(),
			parent: this.__parent && this.__parent.toJSON(),
			operationalStatus: this.__operationalStatus,
			color: this.__color,
			category: this.__category,
			measurementPeriod: this.__measurementPeriod && this.__measurementPeriod.toJSON(),
			calibration: this.__calibration && this.__calibration.map(v => v.toJSON()),
		});
	}
}

module.exports = DeviceMetric;
