const BackboneElement = require('./BackboneElement');

class Consent_Policy extends BackboneElement {

	constructor ( opts ) {
		super();
		this._resourceType = 'Consent_Policy';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Consent_Policy';
	}

	// Entity or Organization having regulatory jurisdiction or accountability for  enforcing policies pertaining to Consent Directives.
	get authority () {
		return this._authority;
	}

	set authority ( new_value ) {
		this._authority = new_value;
	}

	// The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
	get uri () {
		return this._uri;
	}

	set uri ( new_value ) {
		this._uri = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			authority: this._authority,
			uri: this._uri
		});
	}

}

module.exports = Consent_Policy;
