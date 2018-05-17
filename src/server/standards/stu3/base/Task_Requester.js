const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');

class Task_Requester extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Task_Requester';
	}

	// The device, practitioner, etc. who initiated the task.
	get agent () {
		return this._agent;
	}

	set agent ( new_value ) {
		this._agent = new Reference(new_value);
	}

	// The organization the device or practitioner was acting on behalf of when they initiated the task.
	get onBehalfOf () {
		return this._onBehalfOf;
	}

	set onBehalfOf ( new_value ) {
		this._onBehalfOf = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			agent: this._agent,
			onBehalfOf: this._onBehalfOf
		});
	}

}

module.exports = Task_Requester;
