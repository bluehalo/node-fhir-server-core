const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Period = require('./Period');
const Reference = require('./Reference');

class Encounter_Participant extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Encounter_Participant';
	}

	// Role of participant in encounter.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// The period of time that the specified participant participated in the encounter. These can overlap or be sub-sets of the overall encounter's period.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		this._period = new Period(new_value);
	}

	// Persons involved in the encounter other than the patient.
	get individual () {
		return this._individual;
	}

	set individual ( new_value ) {
		this._individual = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this._type && this._type.map(v => v.toJSON()),
			period: this._period && this._period.toJSON(),
			individual: this._individual && this._individual.toJSON()
		});
	}

}

module.exports = Encounter_Participant;
