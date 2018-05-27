const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');

class Observation_Related extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Observation_Related';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Observation_Related';
	}

	// A code specifying the kind of relationship that exists with the target resource.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['has-member', 'derived-from', 'sequel-to', 'replaces', 'qualified-by', 'interfered-by'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field type`);
		}
		this._type = new_value;
	}

	// A reference to the observation or [[[QuestionnaireResponse]]] resource that is related to this observation.
	get target () {
		return this._target;
	}

	set target ( new_value ) {
		this._target = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this.type,
			target: this.target && this.target.toJSON()
		});
	}

}

module.exports = Observation_Related;
