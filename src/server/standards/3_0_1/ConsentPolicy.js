const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class ConsentPolicy extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ConsentPolicy';
		Object.assign(this, opt);
	}

	// This is a ConsentPolicy resource
	static get __resourceType() {
		return 'ConsentPolicy';
	}

	// Entity or Organization having regulatory jurisdiction or accountability for  enforcing policies pertaining to Consent Directives.
	get authority() {
		return this.__authority;
	}

	set authority(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field authority`);
		}
		this.__authority = new_value;
	}

	// The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
	get uri() {
		return this.__uri;
	}

	set uri(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field uri`);
		}
		this.__uri = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			authority: this.__authority,
			uri: this.__uri,
		});
	}
}

module.exports = ConsentPolicy;
