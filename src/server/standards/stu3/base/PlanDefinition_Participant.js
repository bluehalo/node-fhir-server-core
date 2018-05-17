const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');

class PlanDefinition_Participant extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'PlanDefinition_Participant';
	}

	// The type of participant in the action.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['patient', 'practitioner', 'related-person'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field type`);
		}
		this._type = new_value;
	}

	// The role the participant should play in performing the described action.
	get role () {
		return this._role;
	}

	set role ( new_value ) {
		this._role = new CodeableConcept(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this._type,
			role: this._role
		});
	}

}

module.exports = PlanDefinition_Participant;
