const BackboneElement = require('./BackboneElement');
const PositiveIntScalar = require('./scalars/PositiveInt.scalar');

class EncounterDiagnosis extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'EncounterDiagnosis';
		Object.assign(this, opt);
	}

	// This is a EncounterDiagnosis resource
	static get __resourceType() {
		return 'EncounterDiagnosis';
	}

	// Reason the encounter takes place, as specified using information from another resource. For admissions, this is the admission diagnosis. The indication will typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure.
	get condition() {
		return this.__condition;
	}

	set condition(new_value) {
		const Reference = require('./Reference');
		this.__condition = new Reference(new_value);
	}

	// Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …).
	get role() {
		return this.__role;
	}

	set role(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__role = new CodeableConcept(new_value);
	}

	// Ranking of the diagnosis (for each role type).
	get rank() {
		return this.__rank;
	}

	set rank(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field rank`);
		}
		this.__rank = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			condition: this.__condition && this.__condition.toJSON(),
			role: this.__role && this.__role.toJSON(),
			rank: this.__rank,
		});
	}
}

module.exports = EncounterDiagnosis;
