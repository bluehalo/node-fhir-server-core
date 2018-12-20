const BackboneElement = require('./BackboneElement');

class CarePlanRelatedPlan extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'CarePlanRelatedPlan';
		Object.assign(this, opt);
	}

	// This is a CarePlanRelatedPlan resource
	static get __resourceType() {
		return 'CarePlanRelatedPlan';
	}

	// Identifies the type of relationship this plan has to the target plan.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		this.__code = new_value;
	}

	// A reference to the plan to which a relationship is asserted.
	get plan() {
		return this.__plan;
	}

	set plan(new_value) {
		const Reference = require('./Reference');
		this.__plan = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			code: this.__code,
			plan: this.__plan && this.__plan.toJSON(),
		});
	}
}

module.exports = CarePlanRelatedPlan;
