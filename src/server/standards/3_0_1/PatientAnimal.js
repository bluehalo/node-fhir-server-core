const BackboneElement = require('./BackboneElement');

class PatientAnimal extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'PatientAnimal';
		Object.assign(this, opt);
	}

	// This is a PatientAnimal resource
	static get __resourceType() {
		return 'PatientAnimal';
	}

	// Identifies the high level taxonomic categorization of the kind of animal.
	get species() {
		return this.__species;
	}

	set species(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__species = new CodeableConcept(new_value);
	}

	// Identifies the detailed categorization of the kind of animal.
	get breed() {
		return this.__breed;
	}

	set breed(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__breed = new CodeableConcept(new_value);
	}

	// Indicates the current state of the animal\'s reproductive organs.
	get genderStatus() {
		return this.__genderStatus;
	}

	set genderStatus(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__genderStatus = new CodeableConcept(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			species: this.__species && this.__species.toJSON(),
			breed: this.__breed && this.__breed.toJSON(),
			genderStatus: this.__genderStatus && this.__genderStatus.toJSON(),
		});
	}
}

module.exports = PatientAnimal;
