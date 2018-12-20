const BackboneElement = require('./BackboneElement');

class ObservationRelated extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ObservationRelated';
		Object.assign(this, opt);
	}

	// This is a ObservationRelated resource
	static get __resourceType() {
		return 'ObservationRelated';
	}

	// A code specifying the kind of relationship that exists with the target resource.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// A reference to the observation or [[[QuestionnaireResponse]]] resource that is related to this observation.
	get target() {
		return this.__target;
	}

	set target(new_value) {
		const Reference = require('./Reference');
		this.__target = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type,
			target: this.__target && this.__target.toJSON(),
		});
	}
}

module.exports = ObservationRelated;
