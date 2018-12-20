const BackboneElement = require('./BackboneElement');

class ProcessRequestItem extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ProcessRequestItem';
		Object.assign(this, opt);
	}

	// This is a ProcessRequestItem resource
	static get __resourceType() {
		return 'ProcessRequestItem';
	}

	// A service line number.
	get sequenceLinkId() {
		return this.__sequenceLinkId;
	}

	set sequenceLinkId(new_value) {
		this.__sequenceLinkId = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			sequenceLinkId: this.__sequenceLinkId,
		});
	}
}

module.exports = ProcessRequestItem;
