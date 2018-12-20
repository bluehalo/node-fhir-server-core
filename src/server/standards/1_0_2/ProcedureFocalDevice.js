const BackboneElement = require('./BackboneElement');

class ProcedureFocalDevice extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ProcedureFocalDevice';
		Object.assign(this, opt);
	}

	// This is a ProcedureFocalDevice resource
	static get __resourceType() {
		return 'ProcedureFocalDevice';
	}

	// The kind of change that happened to the device during the procedure.
	get action() {
		return this.__action;
	}

	set action(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__action = new CodeableConcept(new_value);
	}

	// The device that was manipulated (changed) during the procedure.
	get manipulated() {
		return this.__manipulated;
	}

	set manipulated(new_value) {
		const Reference = require('./Reference');
		this.__manipulated = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			action: this.__action && this.__action.toJSON(),
			manipulated: this.__manipulated && this.__manipulated.toJSON(),
		});
	}
}

module.exports = ProcedureFocalDevice;
