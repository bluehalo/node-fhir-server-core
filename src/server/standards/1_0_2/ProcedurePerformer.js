const BackboneElement = require('./BackboneElement');

class ProcedurePerformer extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ProcedurePerformer';
		Object.assign(this, opt);
	}

	// This is a ProcedurePerformer resource
	static get __resourceType() {
		return 'ProcedurePerformer';
	}

	// The practitioner who was involved in the procedure.
	get actor() {
		return this.__actor;
	}

	set actor(new_value) {
		const Reference = require('./Reference');
		this.__actor = new Reference(new_value);
	}

	// For example: surgeon, anaethetist, endoscopist.
	get role() {
		return this.__role;
	}

	set role(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__role = new CodeableConcept(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			actor: this.__actor && this.__actor.toJSON(),
			role: this.__role && this.__role.toJSON(),
		});
	}
}

module.exports = ProcedurePerformer;
