const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');
const Identifier = require('./Identifier');
const Provenance_Agent = require('./Provenance_Agent');

class Provenance_Entity extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Provenance_Entity';
	}

	// How the entity was used during the activity.
	get role () {
		return this._role;
	}

	set role ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['derivation', 'revision', 'quotation', 'source', 'removal'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field role`);
		}
		this._role = new_value;
	}

	// Identity of the  Entity used. May be a logical or physical uri and maybe absolute or relative.
	get whatUri () {
		return this._whatUri;
	}

	set whatUri ( new_value ) {
		this._whatUri = new_value;
	}

	// Identity of the  Entity used. May be a logical or physical uri and maybe absolute or relative.
	get whatReference () {
		return this._whatReference;
	}

	set whatReference ( new_value ) {
		this._whatReference = new Reference(new_value);
	}

	// Identity of the  Entity used. May be a logical or physical uri and maybe absolute or relative.
	get whatIdentifier () {
		return this._whatIdentifier;
	}

	set whatIdentifier ( new_value ) {
		this._whatIdentifier = new Identifier(new_value);
	}

	// The entity is attributed to an agent to express the agent's responsibility for that entity, possibly along with other agents. This description can be understood as shorthand for saying that the agent was responsible for the activity which generated the entity.
	get agent () {
		return this._agent;
	}

	set agent ( new_value ) {
		this._agent = Array.isArray(new_value) ? new_value.map(val => new Provenance_Agent(val)) : [new Provenance_Agent(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			role: this._role,
			whatUri: this._whatUri,
			whatReference: this._whatReference && this._whatReference.toJSON(),
			whatIdentifier: this._whatIdentifier && this._whatIdentifier.toJSON(),
			agent: this._agent && this._agent.map(v => v.toJSON())
		});
	}

}

module.exports = Provenance_Entity;
