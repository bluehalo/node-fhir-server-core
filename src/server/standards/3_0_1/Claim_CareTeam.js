const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');

class Claim_CareTeam extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Claim_CareTeam';
	}

	// Sequence of the careTeam which serves to order and provide a link.
	get sequence () {
		return this._sequence;
	}

	set sequence ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[1-9][0-9]*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field sequence`);
		}
		this._sequence = new_value;
	}

	// Member of the team who provided the overall service.
	get provider () {
		return this._provider;
	}

	set provider ( new_value ) {
		this._provider = new Reference(new_value);
	}

	// The party who is billing and responsible for the claimed good or service rendered to the patient.
	get responsible () {
		return this._responsible;
	}

	set responsible ( new_value ) {
		this._responsible = new_value;
	}

	// The lead, assisting or supervising practitioner and their discipline if a multidisiplinary team.
	get role () {
		return this._role;
	}

	set role ( new_value ) {
		this._role = new CodeableConcept(new_value);
	}

	// The qualification which is applicable for this service.
	get qualification () {
		return this._qualification;
	}

	set qualification ( new_value ) {
		this._qualification = new CodeableConcept(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			sequence: this._sequence,
			provider: this._provider && this._provider.toJSON(),
			responsible: this._responsible,
			role: this._role && this._role.toJSON(),
			qualification: this._qualification && this._qualification.toJSON()
		});
	}

}

module.exports = Claim_CareTeam;
