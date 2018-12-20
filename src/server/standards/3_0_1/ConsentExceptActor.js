const BackboneElement = require('./BackboneElement');

class ConsentExceptActor extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ConsentExceptActor';
		Object.assign(this, opt);
	}

	// This is a ConsentExceptActor resource
	static get __resourceType() {
		return 'ConsentExceptActor';
	}

	// How the individual is involved in the resources content that is described in the exception.
	get role() {
		return this.__role;
	}

	set role(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__role = new CodeableConcept(new_value);
	}

	// The resource that identifies the actor. To identify a actors by type, use group to identify a set of actors by some property they share (e.g. \'admitting officers\').
	get reference() {
		return this.__reference;
	}

	set reference(new_value) {
		const Reference = require('./Reference');
		this.__reference = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			role: this.__role && this.__role.toJSON(),
			reference: this.__reference && this.__reference.toJSON(),
		});
	}
}

module.exports = ConsentExceptActor;
