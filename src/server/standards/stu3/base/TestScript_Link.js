const BackboneElement = require('./BackboneElement');

class TestScript_Link extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'TestScript_Link';
	}

	// URL to a particular requirement or feature within the FHIR specification.
	get url () {
		return this._url;
	}

	set url ( new_value ) {
		this._url = new_value;
	}

	// Short description of the link.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			url: this._url,
			description: this._description
		});
	}

}

module.exports = TestScript_Link;
