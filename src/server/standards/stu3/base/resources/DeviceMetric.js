const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const CodeableConcept = require('../types/CodeableConcept');
const Reference = require('../types/Reference');
const Code = require('../types/Code');
const Timing = require('../types/Timing');

class Calibration {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// type	Σ	0..1	code	unspecified | offset | gain | two-point
	// DeviceMetricCalibrationType (Required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// state	Σ	0..1	code	not-calibrated | calibration-required | calibrated | unspecified
	// DeviceMetricCalibrationState (Required)
	set state(state) {
		this._state = new Code(state);
	}

	get state() {
		return this._state;
	}

	// time	Σ	0..1	instant	Describes the time last calibration has been performed
	set time(time) {
		this._time = time;
	}

	get time() {
		return this._time;
	}

	toJSON() {
		return {
			type: this._type,
			state: this._state,
			time: this._time,
		};
	}
}

class DeviceMetric extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'DeviceMetric';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	1..1	Identifier	Unique identifier of this DeviceMetric
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// type	Σ	1..1	CodeableConcept	Identity of metric, for example Heart Rate or PEEP Setting
	// Device Metric and Component Types (Preferred)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// unit	Σ	0..1	CodeableConcept	Unit of Measure for the Metric
	// Device Metric and Component Types (Preferred)
	set deviceMetricUnit(deviceMetricUnit) {
		this._deviceMetricUnit = new CodeableConcept(deviceMetricUnit);
	}

	get deviceMetricUnit() {
		return this._deviceMetricUnit;
	}

	// source	Σ	0..1	Reference(Device)	Describes the link to the source Device
	set source(source) {
		this._source = new Reference(source);
	}

	get source() {
		return this._source;
	}

	// parent	Σ	0..1	Reference(DeviceComponent)	Describes the link to the parent DeviceComponent
	set parent(parent) {
		this._parent = new Reference(parent);
	}

	get parent() {
		return this._parent;
	}

	// operationalStatus	Σ	0..1	code	on | off | standby | entered-in-error
	// DeviceMetricOperationalStatus (Required)
	set operationalStatus(operationalStatus) {
		this._operationalStatus = new Code(operationalStatus);
	}

	get operationalStatus() {
		return this._operationalStatus;
	}

	// color	Σ	0..1	code	black | red | green | yellow | blue | magenta | cyan | white
	// DeviceMetricColor (Required)
	set color(color) {
		this._color = new Code(color);
	}

	get color() {
		return this._color;
	}

	// category	Σ	1..1	code	measurement | setting | calculation | unspecified
	// DeviceMetricCategory (Required)
	set category(category) {
		this._category = new Code(category);
	}

	get category() {
		return this._category;
	}

	// measurementPeriod	Σ	0..1	Timing	Describes the measurement repetition time
	set measurementPeriod(measurementPeriod) {
		this._measurementPeriod = new Timing(measurementPeriod);
	}

	get measurementPeriod() {
		return this._measurementPeriod;
	}

	// calibration	Σ	0..*	BackboneElement	Describes the calibrations that have been performed or that are required to be performed
	set calibration(calibration) {
		if (Array.isArray(calibration)) {
			this._calibration = calibration.map((i) => new Calibration(i));
		} else {
			this._calibration = [new Calibration(calibration)];
		}
	}

	get calibration() {
		return this._calibration;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			type: this._type,
			deviceMetricUnit: this._deviceMetricUnit,
			source: this._source,
			parent: this._parent,
			operationalStatus: this._operationalStatus,
			color: this._color,
			category: this._category,
			measurementPeriod: this._measurementPeriod,
			calibration: this._calibration,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.DeviceMetric = DeviceMetric;
module.exports.Calibration = Calibration;
