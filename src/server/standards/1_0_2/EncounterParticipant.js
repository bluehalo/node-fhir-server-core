const BackboneElement = require('./BackboneElement');

class EncounterParticipant extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'EncounterParticipant';
		Object.assign(this, opt);
	}

	// This is a EncounterParticipant resource
	static get __resourceType() {
		return 'EncounterParticipant';
	}

	// Role of participant in encounter.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// The period of time that the specified participant was present during the encounter. These can overlap or be sub-sets of the overall encounters period.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
	}

	// Persons involved in the encounter other than the patient.
	get individual() {
		return this.__individual;
	}

	set individual(new_value) {
		const Reference = require('./Reference');
		this.__individual = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type && this.__type.map(v => v.toJSON()),
			period: this.__period && this.__period.toJSON(),
			individual: this.__individual && this.__individual.toJSON(),
		});
	}
}

module.exports = EncounterParticipant;
