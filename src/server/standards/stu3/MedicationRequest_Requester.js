const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');

class MedicationRequest_Requester extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'MedicationRequest_Requester';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'MedicationRequest_Requester';
	}

	// The healthcare professional responsible for authorizing the initial prescription.
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

module.exports = MedicationRequest_Requester;
