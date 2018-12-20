const BackboneElement = require('./BackboneElement');
const PositiveIntScalar = require('./scalars/PositiveInt.scalar');

class ExplanationOfBenefitCareTeam extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ExplanationOfBenefitCareTeam';
		Object.assign(this, opt);
	}

	// This is a ExplanationOfBenefitCareTeam resource
	static get __resourceType() {
		return 'ExplanationOfBenefitCareTeam';
	}

	// Sequence of careteam which serves to order and provide a link.
	get sequence() {
		return this.__sequence;
	}

	set sequence(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field sequence`);
		}
		this.__sequence = new_value;
	}

	// The members of the team who provided the overall service.
	get provider() {
		return this.__provider;
	}

	set provider(new_value) {
		const Reference = require('./Reference');
		this.__provider = new Reference(new_value);
	}

	// The practitioner who is billing and responsible for the claimed services rendered to the patient.
	get responsible() {
		return this.__responsible;
	}

	set responsible(new_value) {
		this.__responsible = new_value;
	}

	// The lead, assisting or supervising practitioner and their discipline if a multidisiplinary team.
	get role() {
		return this.__role;
	}

	set role(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__role = new CodeableConcept(new_value);
	}

	// The qualification which is applicable for this service.
	get qualification() {
		return this.__qualification;
	}

	set qualification(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__qualification = new CodeableConcept(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			sequence: this.__sequence,
			provider: this.__provider && this.__provider.toJSON(),
			responsible: this.__responsible,
			role: this.__role && this.__role.toJSON(),
			qualification: this.__qualification && this.__qualification.toJSON(),
		});
	}
}

module.exports = ExplanationOfBenefitCareTeam;
