const BackboneElement = require('./BackboneElement');
const PositiveIntScalar = require('./scalars/PositiveInt.scalar');

class EpisodeOfCareDiagnosis extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'EpisodeOfCareDiagnosis';
		Object.assign(this, opt);
	}

	// This is a EpisodeOfCareDiagnosis resource
	static get __resourceType() {
		return 'EpisodeOfCareDiagnosis';
	}

	// A list of conditions/problems/diagnoses that this episode of care is intended to be providing care for.
	get condition() {
		return this.__condition;
	}

	set condition(new_value) {
		const Reference = require('./Reference');
		this.__condition = new Reference(new_value);
	}

	// Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …).
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

module.exports = EpisodeOfCareDiagnosis;
