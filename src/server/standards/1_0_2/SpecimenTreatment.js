const BackboneElement = require('./BackboneElement');

class SpecimenTreatment extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'SpecimenTreatment';
		Object.assign(this, opt);
	}

	// This is a SpecimenTreatment resource
	static get __resourceType() {
		return 'SpecimenTreatment';
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

	toJSON() {
		return Object.assign(super.toJSON(), {
			description: this.__description,
			procedure: this.__procedure && this.__procedure.toJSON(),
			additive: this.__additive && this.__additive.map(v => v.toJSON()),
		});
	}
}

module.exports = SpecimenTreatment;
