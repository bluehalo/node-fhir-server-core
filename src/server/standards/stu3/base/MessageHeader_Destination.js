const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');

class MessageHeader_Destination extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'MessageHeader_Destination';
	}

	// Human-readable name for the target system.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// Identifies the target end system in situations where the initial message transmission is to an intermediary system.
	get target () {
		return this._target;
	}

	set target ( new_value ) {
		this._target = new Reference(new_value);
	}

	// Indicates where the message should be routed to.
	get endpoint () {
		return this._endpoint;
	}

	set endpoint ( new_value ) {
		this._endpoint = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			name: this._name,
			target: this._target,
			endpoint: this._endpoint
		});
	}

}

module.exports = MessageHeader_Destination;
