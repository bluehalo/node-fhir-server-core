const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const Period = require('./Period');
const MeasureReport_Group = require('./MeasureReport_Group');

class MeasureReport extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'MeasureReport';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'MeasureReport';
	}

	// This is a MeasureReport resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['MeasureReport'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// A formal identifier that is used to identify this report when it is represented in other formats, or referenced in a specification, model, design or an instance.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	// The report status. No data will be available until the report status is complete.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['complete', 'pending', 'error'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// The type of measure report. This may be an individual report, which provides a single patient's score for the measure; a patient listing, which returns the list of patients that meet the various criteria in the measure; or a summary report, which returns a population count for each of the criteria in the measure.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['individual', 'patient-list', 'summary'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field type`);
		}
		this._type = new_value;
	}

	// A reference to the Measure that was evaluated to produce this report.
	get measure () {
		return this._measure;
	}

	set measure ( new_value ) {
		this._measure = new Reference(new_value);
	}

	// Optional Patient if the report was requested for a single patient.
	get patient () {
		return this._patient;
	}

	set patient ( new_value ) {
		this._patient = new Reference(new_value);
	}

	// The date this measure report was generated.
	get date () {
		return this._date;
	}

	set date ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this._date = new_value;
	}

	// Reporting Organization.
	get reportingOrganization () {
		return this._reportingOrganization;
	}

	set reportingOrganization ( new_value ) {
		this._reportingOrganization = new Reference(new_value);
	}

	// The reporting period for which the report was calculated.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		this._period = new Period(new_value);
	}

	// The results of the calculation, one for each population group in the measure.
	get group () {
		return this._group;
	}

	set group ( new_value ) {
		this._group = Array.isArray(new_value) ? new_value.map(val => new MeasureReport_Group(val)) : [new MeasureReport_Group(new_value)];
	}

	// A reference to a Bundle containing the Resources that were used in the evaluation of this report.
	get evaluatedResources () {
		return this._evaluatedResources;
	}

	set evaluatedResources ( new_value ) {
		this._evaluatedResources = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier && this._identifier.toJSON(),
			status: this._status,
			type: this._type,
			measure: this._measure && this._measure.toJSON(),
			patient: this._patient && this._patient.toJSON(),
			date: this._date,
			reportingOrganization: this._reportingOrganization && this._reportingOrganization.toJSON(),
			period: this._period && this._period.toJSON(),
			group: this._group && this._group.map(v => v.toJSON()),
			evaluatedResources: this._evaluatedResources && this._evaluatedResources.toJSON()
		});
	}

}

module.exports = MeasureReport;
