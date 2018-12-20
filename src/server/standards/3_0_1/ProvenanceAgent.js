const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class ProvenanceAgent extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ProvenanceAgent';
		Object.assign(this, opt);
	}

	// This is a ProvenanceAgent resource
	static get __resourceType() {
		return 'ProvenanceAgent';
	}

	// The function of the agent with respect to the activity. The security role enabling the agent with respect to the activity.
	get role() {
		return this.__role;
	}

	set role(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__role = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// The individual, device or organization that participated in the event.
	get whoUri() {
		return this.__whoUri;
	}

	set whoUri(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field whoUri`);
		}
		this.__whoUri = new_value;
	}

	// The individual, device or organization that participated in the event.
	get whoReference() {
		return this.__whoReference;
	}

	set whoReference(new_value) {
		const Reference = require('./Reference');
		this.__whoReference = new Reference(new_value);
	}

	// The individual, device, or organization for whom the change was made.
	get onBehalfOfUri() {
		return this.__onBehalfOfUri;
	}

	set onBehalfOfUri(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field onBehalfOfUri`);
		}
		this.__onBehalfOfUri = new_value;
	}

	// The individual, device, or organization for whom the change was made.
	get onBehalfOfReference() {
		return this.__onBehalfOfReference;
	}

	set onBehalfOfReference(new_value) {
		const Reference = require('./Reference');
		this.__onBehalfOfReference = new Reference(new_value);
	}

	// The type of relationship between agents.
	get relatedAgentType() {
		return this.__relatedAgentType;
	}

	set relatedAgentType(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__relatedAgentType = new CodeableConcept(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			role: this.__role && this.__role.map(v => v.toJSON()),
			whoUri: this.__whoUri,
			whoReference: this.__whoReference && this.__whoReference.toJSON(),
			onBehalfOfUri: this.__onBehalfOfUri,
			onBehalfOfReference: this.__onBehalfOfReference && this.__onBehalfOfReference.toJSON(),
			relatedAgentType: this.__relatedAgentType && this.__relatedAgentType.toJSON(),
		});
	}
}

module.exports = ProvenanceAgent;
