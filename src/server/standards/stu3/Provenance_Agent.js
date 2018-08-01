const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');

class Provenance_Agent extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Provenance_Agent';
	}

	// The function of the agent with respect to the activity. The security role enabling the agent with respect to the activity.
	get role () {
		return this._role;
	}

	set role ( new_value ) {
		this._role = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// The individual, device or organization that participated in the event.
	get whoUri () {
		return this._whoUri;
	}

	set whoUri ( new_value ) {
		this._whoUri = new_value;
	}

	// The individual, device or organization that participated in the event.
	get whoReference () {
		return this._whoReference;
	}

	set whoReference ( new_value ) {
		this._whoReference = new Reference(new_value);
	}

	// The individual, device, or organization for whom the change was made.
	get onBehalfOfUri () {
		return this._onBehalfOfUri;
	}

	set onBehalfOfUri ( new_value ) {
		this._onBehalfOfUri = new_value;
	}

	// The individual, device, or organization for whom the change was made.
	get onBehalfOfReference () {
		return this._onBehalfOfReference;
	}

	set onBehalfOfReference ( new_value ) {
		this._onBehalfOfReference = new Reference(new_value);
	}

	// The type of relationship between agents.
	get relatedAgentType () {
		return this._relatedAgentType;
	}

	set relatedAgentType ( new_value ) {
		this._relatedAgentType = new CodeableConcept(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			role: this._role,
			whoUri: this._whoUri,
			whoReference: this._whoReference,
			onBehalfOfUri: this._onBehalfOfUri,
			onBehalfOfReference: this._onBehalfOfReference,
			relatedAgentType: this._relatedAgentType
		});
	}

}

module.exports = Provenance_Agent;
