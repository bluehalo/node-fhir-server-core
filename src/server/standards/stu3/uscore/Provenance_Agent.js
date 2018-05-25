const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');

class Provenance_Agent extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Provenance_Agent';
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
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._role = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// The individual, device or organization that participated in the event.
	get whoUri () {
		return this._whoUri;
	}

	set whoUri ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._whoUri = new_value;
	}

	// The individual, device or organization that participated in the event.
	get whoReference () {
		return this._whoReference;
	}

	set whoReference ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._whoReference = new Reference(new_value);
	}

	// The individual, device, or organization for whom the change was made.
	get onBehalfOfUri () {
		return this._onBehalfOfUri;
	}

	set onBehalfOfUri ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._onBehalfOfUri = new_value;
	}

	// The individual, device, or organization for whom the change was made.
	get onBehalfOfReference () {
		return this._onBehalfOfReference;
	}

	set onBehalfOfReference ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._onBehalfOfReference = new Reference(new_value);
	}

	// The type of relationship between agents.
	get relatedAgentType () {
		return this._relatedAgentType;
	}

	set relatedAgentType ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._relatedAgentType = new CodeableConcept(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			role: this.role.map(v => v.toJSON()),
			whoUri: this.whoUri,
			whoReference: this.whoReference && this.whoReference.toJSON(),
			onBehalfOfUri: this.onBehalfOfUri,
			onBehalfOfReference: this.onBehalfOfReference && this.onBehalfOfReference.toJSON(),
			relatedAgentType: this.relatedAgentType && this.relatedAgentType.toJSON()
		});
	}

}

module.exports = Provenance_Agent;
