const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');

class ActivityDefinition_Participant extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ActivityDefinition_Participant';
	}

	// The type of participant in the action.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field type`);
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
			role: this._role && this._role.toJSON()
		});
	}

}

module.exports = ActivityDefinition_Participant;
