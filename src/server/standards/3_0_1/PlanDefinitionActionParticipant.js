const BackboneElement = require('./BackboneElement');

class PlanDefinitionActionParticipant extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'PlanDefinitionActionParticipant';
		Object.assign(this, opt);
	}

	// This is a PlanDefinitionActionParticipant resource
	static get __resourceType() {
		return 'PlanDefinitionActionParticipant';
	}

	// The type of participant in the action.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// The role the participant should play in performing the described action.
	get role() {
		return this.__role;
	}

	set role(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__role = new CodeableConcept(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type,
			role: this.__role && this.__role.toJSON(),
		});
	}
}

module.exports = PlanDefinitionActionParticipant;
