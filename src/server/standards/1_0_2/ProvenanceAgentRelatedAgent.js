const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class ProvenanceAgentRelatedAgent extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ProvenanceAgentRelatedAgent';
		Object.assign(this, opt);
	}

	// This is a ProvenanceAgentRelatedAgent resource
	static get __resourceType() {
		return 'ProvenanceAgentRelatedAgent';
	}

	// The type of relationship between agents.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// An internal reference to another agent listed in this provenance by its identifier.
	get target() {
		return this.__target;
	}

	set target(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field target`);
		}
		this.__target = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type && this.__type.toJSON(),
			target: this.__target,
		});
	}
}

module.exports = ProvenanceAgentRelatedAgent;
