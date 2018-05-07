const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');

class Procedure_FocalDevice extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Procedure_FocalDevice';
	}

	// The kind of change that happened to the device during the procedure.
	get action () {
		return this._action;
	}

	set action ( new_value ) {
		this._action = new CodeableConcept(new_value);
	}

	// The device that was manipulated (changed) during the procedure.
	get manipulated () {
		return this._manipulated;
	}

	set manipulated ( new_value ) {
		this._manipulated = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			action: this._action,
			manipulated: this._manipulated
		});
	}

}

module.exports = Procedure_FocalDevice;
