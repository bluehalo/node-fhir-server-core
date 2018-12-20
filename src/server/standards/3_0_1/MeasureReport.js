const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class MeasureReport extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MeasureReport';
		Object.assign(this, opt);
	}

	// This is a MeasureReport resource
	static get __resourceType() {
		return 'MeasureReport';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__MeasureReport = new_value;
	}

	// A formal identifier that is used to identify this report when it is represented in other formats, or referenced in a specification, model, design or an instance.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// The report status. No data will be available until the report status is complete.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// The type of measure report. This may be an individual report, which provides a single patient\'s score for the measure; a patient listing, which returns the list of patients that meet the various criteria in the measure; or a summary report, which returns a population count for each of the criteria in the measure.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// A reference to the Measure that was evaluated to produce this report.
	get measure() {
		return this.__measure;
	}

	set measure(new_value) {
		const Reference = require('./Reference');
		this.__measure = new Reference(new_value);
	}

	// Optional Patient if the report was requested for a single patient.
	get patient() {
		return this.__patient;
	}

	set patient(new_value) {
		const Reference = require('./Reference');
		this.__patient = new Reference(new_value);
	}

	// The date this measure report was generated.
	get date() {
		return this.__date;
	}

	set date(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this.__date = new_value;
	}

	// Reporting Organization.
	get reportingOrganization() {
		return this.__reportingOrganization;
	}

	set reportingOrganization(new_value) {
		const Reference = require('./Reference');
		this.__reportingOrganization = new Reference(new_value);
	}

	// The reporting period for which the report was calculated.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
	}

	// The results of the calculation, one for each population group in the measure.
	get group() {
		return this.__group;
	}

	set group(new_value) {
		const MeasureReportGroup = require('./MeasureReportGroup');
		this.__group = Array.isArray(new_value)
			? new_value.map(val => new MeasureReportGroup(val))
			: [new MeasureReportGroup(new_value)];
	}

	// A reference to a Bundle containing the Resources that were used in the evaluation of this report.
	get evaluatedResources() {
		return this.__evaluatedResources;
	}

	set evaluatedResources(new_value) {
		const Reference = require('./Reference');
		this.__evaluatedResources = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.toJSON(),
			status: this.__status,
			type: this.__type,
			measure: this.__measure && this.__measure.toJSON(),
			patient: this.__patient && this.__patient.toJSON(),
			date: this.__date,
			reportingOrganization: this.__reportingOrganization && this.__reportingOrganization.toJSON(),
			period: this.__period && this.__period.toJSON(),
			group: this.__group && this.__group.map(v => v.toJSON()),
			evaluatedResources: this.__evaluatedResources && this.__evaluatedResources.toJSON(),
		});
	}
}

module.exports = MeasureReport;
