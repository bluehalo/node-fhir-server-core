const BackboneElement = require('./BackboneElement');

class ProcessRequest_Item extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ProcessRequest_Item';
	}

	// A service line number.
	get sequenceLinkId () {
		return this._sequenceLinkId;
	}

	set sequenceLinkId ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field sequenceLinkId`);
		}
		this._sequenceLinkId = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			sequenceLinkId: this._sequenceLinkId
		});
	}

}

module.exports = ProcessRequest_Item;
