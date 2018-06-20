const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const Period = require('./Period');

class Specimen_Processing extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Specimen_Processing';
	}

	// Textual description of procedure.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// A coded value specifying the procedure used to process the specimen.
	get procedure () {
		return this._procedure;
	}

	set procedure ( new_value ) {
		this._procedure = new CodeableConcept(new_value);
	}

	// Material used in the processing step.
	get additive () {
		return this._additive;
	}

	set additive ( new_value ) {
		this._additive = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
	get timeDateTime () {
		return this._timeDateTime;
	}

	set timeDateTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field timeDateTime`);
		}
		this._timeDateTime = new_value;
	}

	// A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
	get timePeriod () {
		return this._timePeriod;
	}

	set timePeriod ( new_value ) {
		this._timePeriod = new Period(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			description: this._description,
			procedure: this._procedure,
			additive: this._additive,
			timeDateTime: this._timeDateTime,
			timePeriod: this._timePeriod
		});
	}

}

module.exports = Specimen_Processing;
