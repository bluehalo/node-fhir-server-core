const ParametersParameter = require('./ParametersParameter');

class ParametersParameterMultiPart extends ParametersParameter {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ParametersParameterMultiPart';
		Object.assign(this, opt);
	}

	// This is a Parameters Parameter resource with a 'part' array describing
	// multi-part parameters
	static get __resourceType() {
		return 'ParametersParameterMultiPart';
	}

	// A named part of a multi-part parameter..
	get part() {
		return this.__part;
	}

	set part(new_value) {
		this.__part = Array.isArray(new_value)
			? new_value.map(val => new ParametersParameter(val))
			: [new ParametersParameter(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			part: this.__part && this.__part.map(v => v.toJSON()),
		});
	}
}

module.exports = ParametersParameterMultiPart;
