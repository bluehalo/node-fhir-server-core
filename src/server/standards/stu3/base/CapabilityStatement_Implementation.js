const BackboneElement = require('./BackboneElement');

class CapabilityStatement_Implementation extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'CapabilityStatement_Implementation';
	}

	// Information about the specific installation that this capability statement relates to.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// An absolute base URL for the implementation.  This forms the base for REST interfaces as well as the mailbox and document interfaces.
	get url () {
		return this._url;
	}

	set url ( new_value ) {
		this._url = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			description: this._description,
			url: this._url
		});
	}

}

module.exports = CapabilityStatement_Implementation;
