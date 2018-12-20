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

	// For example: surgeon, anaethetist, endoscopist.
	get role() {
		return this.__role;
	}

	set role(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__role = new CodeableConcept(new_value);
	}

	// The practitioner who was involved in the procedure.
	get actor() {
		return this.__actor;
	}

	set actor(new_value) {
		const Reference = require('./Reference');
		this.__actor = new Reference(new_value);
	}

	// The organization the device or practitioner was acting on behalf of.
	get onBehalfOf() {
		return this.__onBehalfOf;
	}

	set onBehalfOf(new_value) {
		const Reference = require('./Reference');
		this.__onBehalfOf = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			role: this.__role && this.__role.toJSON(),
			actor: this.__actor && this.__actor.toJSON(),
			onBehalfOf: this.__onBehalfOf && this.__onBehalfOf.toJSON(),
		});
	}
}

module.exports = ProcedurePerformer;
