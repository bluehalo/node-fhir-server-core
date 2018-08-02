const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');

class EpisodeOfCare_Diagnosis extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'EpisodeOfCare_Diagnosis';
	}

	// A list of conditions/problems/diagnoses that this episode of care is intended to be providing care for.
	get condition () {
		return this._condition;
	}

	set condition ( new_value ) {
		this._condition = new Reference(new_value);
	}

	// Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …).
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
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field rank`);
		}
		this._rank = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			condition: this._condition && this._condition.toJSON(),
			role: this._role && this._role.toJSON(),
			rank: this._rank
		});
	}

}

module.exports = EpisodeOfCare_Diagnosis;
