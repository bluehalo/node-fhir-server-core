const BackboneElement = require('./BackboneElement');

class MeasureSupplementalData extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MeasureSupplementalData';
		Object.assign(this, opt);
	}

	// This is a MeasureSupplementalData resource
	static get __resourceType() {
		return 'MeasureSupplementalData';
	}

	// An identifier for the supplemental data.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// An indicator of the intended usage for the supplemental data element. Supplemental data indicates the data is additional information requested to augment the measure information. Risk adjustment factor indicates the data is additional information used to calculate risk adjustment factors when applying a risk model to the measure calculation.
	get usage() {
		return this.__usage;
	}

	set usage(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__usage = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// The criteria for the supplemental data. This must be the name of a valid expression defined within a referenced library, and defines the data to be returned for this element.
	get criteria() {
		return this.__criteria;
	}

	set criteria(new_value) {
		this.__criteria = new_value;
	}

	// The supplemental data to be supplied as part of the measure response, specified as a valid FHIR Resource Path.
	get path() {
		return this.__path;
	}

	set path(new_value) {
		this.__path = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			identifier: this.__identifier && this.__identifier.toJSON(),
			usage: this.__usage && this.__usage.map(v => v.toJSON()),
			criteria: this.__criteria,
			path: this.__path,
		});
	}
}

module.exports = MeasureSupplementalData;
