const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');

class ProcedureRequest_Requester extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ProcedureRequest_Requester';
	}

	// The device, practitioner or organization who initiated the request.
	get agent () {
		return this._agent;
	}

	set agent ( new_value ) {
		this._agent = new Reference(new_value);
	}

	// The organization the device or practitioner was acting on behalf of.
	get onBehalfOf () {
		return this._onBehalfOf;
	}

	set onBehalfOf ( new_value ) {
		this._onBehalfOf = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			agent: this._agent && this._agent.toJSON(),
			onBehalfOf: this._onBehalfOf && this._onBehalfOf.toJSON()
		});
	}

}

module.exports = ProcedureRequest_Requester;
