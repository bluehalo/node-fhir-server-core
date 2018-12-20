const BackboneElement = require('./BackboneElement');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class SpecimenProcessing extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'SpecimenProcessing';
		Object.assign(this, opt);
	}

	// This is a SpecimenProcessing resource
	static get __resourceType() {
		return 'SpecimenProcessing';
	}

	// Textual description of procedure.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// A coded value specifying the procedure used to process the specimen.
	get procedure() {
		return this.__procedure;
	}

	set procedure(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__procedure = new CodeableConcept(new_value);
	}

	// Material used in the processing step.
	get additive() {
		return this.__additive;
	}

	set additive(new_value) {
		const Reference = require('./Reference');
		this.__additive = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
	get timeDateTime() {
		return this.__timeDateTime;
	}

	set timeDateTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field timeDateTime`);
		}
		this.__timeDateTime = new_value;
	}

	// A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
	get timePeriod() {
		return this.__timePeriod;
	}

	set timePeriod(new_value) {
		const Period = require('./Period');
		this.__timePeriod = new Period(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			description: this.__description,
			procedure: this.__procedure && this.__procedure.toJSON(),
			additive: this.__additive && this.__additive.map(v => v.toJSON()),
			timeDateTime: this.__timeDateTime,
			timePeriod: this.__timePeriod && this.__timePeriod.toJSON(),
		});
	}
}

module.exports = SpecimenProcessing;
