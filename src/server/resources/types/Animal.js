const path = require('path');
const CodeableConcept = require(path.resolve('./src/server/resources/types/CodeableConcept'));

// animal	?! Σ	0..1	BackboneElement	This patient is known to be an animal (non-human)
class Animal{
	constructor(obj) {
		Object.assign(this, obj);
	}

	// species	Σ	1..1	CodeableConcept	E.g. Dog, Cow
	// AnimalSpecies (Example)
	set species(species) {
		this._species = new CodeableConcept(species);
	}

	get species() {
		return this._species;
	}

	// breed	Σ	0..1	CodeableConcept	E.g. Poodle, Angus
	// AnimalBreeds (Example)
	set breed(breed) {
		this._breed = new CodeableConcept(breed);
	}

	get breed() {
		return this._breed;
	}

	// genderStatus	Σ	0..1	CodeableConcept	E.g. Neutered, Intact
	// GenderStatus (Example)
	set genderStatus(genderStatus) {
		this._genderStatus = new CodeableConcept(genderStatus);
	}

	get genderStatus() {
		return this._genderStatus;
	}

	toJSON() {
		return {
			species: this._species,
			breed: this._breed,
			genderStatus: this._genderStatus
		};
	}
}

module.exports = Animal;
