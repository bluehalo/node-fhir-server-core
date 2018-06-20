const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');

class Encounter_Diagnosis extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Encounter_Diagnosis';
	}

	// Reason the encounter takes place, as specified using information from another resource. For admissions, this is the admission diagnosis. The indication will typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure.
	get condition () {
		return this._condition;
	}

	set condition ( new_value ) {
		this._condition = new Reference(new_value);
	}

	// Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …).
	get role () {
		return this._role;
	}

	set role ( new_value ) {
		this._role = new CodeableConcept(new_value);
	}

	// Ranking of the diagnosis (for each role type).
	get rank () {
		return this._rank;
	}

	set rank ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[1-9][0-9]*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field rank`);
		}
		this._rank = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			condition: this._condition,
			role: this._role,
			rank: this._rank
		});
	}

}

module.exports = Encounter_Diagnosis;
