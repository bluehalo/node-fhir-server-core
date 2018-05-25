const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');

class Patient_Animal extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Patient_Animal';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Patient_Animal';
	}

	// Identifies the high level taxonomic categorization of the kind of animal.
	get species () {
		return this._species;
	}

	set species ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._species = new CodeableConcept(new_value);
	}

	// Identifies the detailed categorization of the kind of animal.
	get breed () {
		return this._breed;
	}

	set breed ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._breed = new CodeableConcept(new_value);
	}

	// Indicates the current state of the animal's reproductive organs.
	get genderStatus () {
		return this._genderStatus;
	}

	set genderStatus ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._genderStatus = new CodeableConcept(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			species: this.species && this.species.toJSON(),
			breed: this.breed && this.breed.toJSON(),
			genderStatus: this.genderStatus && this.genderStatus.toJSON()
		});
	}

}

module.exports = Patient_Animal;
