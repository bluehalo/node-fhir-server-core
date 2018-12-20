const BackboneElement = require('./BackboneElement');

class PatientLink extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'PatientLink';
		Object.assign(this, opt);
	}

	// This is a PatientLink resource
	static get __resourceType() {
		return 'PatientLink';
	}

	// The other patient resource that the link refers to.
	get other() {
		return this.__other;
	}

	set other(new_value) {
		const Reference = require('./Reference');
		this.__other = new Reference(new_value);
	}

	// The type of link between this patient resource and another patient resource.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			other: this.__other && this.__other.toJSON(),
			type: this.__type,
		});
	}
}

module.exports = PatientLink;
