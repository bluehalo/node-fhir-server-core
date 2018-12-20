const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class ProvenanceEntity extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ProvenanceEntity';
		Object.assign(this, opt);
	}

	// This is a ProvenanceEntity resource
	static get __resourceType() {
		return 'ProvenanceEntity';
	}

	// How the entity was used during the activity.
	get role() {
		return this.__role;
	}

	set role(new_value) {
		this.__role = new_value;
	}

	// Identity of the  Entity used. May be a logical or physical uri and maybe absolute or relative.
	get whatUri() {
		return this.__whatUri;
	}

	set whatUri(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field whatUri`);
		}
		this.__whatUri = new_value;
	}

	// Identity of the  Entity used. May be a logical or physical uri and maybe absolute or relative.
	get whatReference() {
		return this.__whatReference;
	}

	set whatReference(new_value) {
		const Reference = require('./Reference');
		this.__whatReference = new Reference(new_value);
	}

	// Identity of the  Entity used. May be a logical or physical uri and maybe absolute or relative.
	get whatIdentifier() {
		return this.__whatIdentifier;
	}

	set whatIdentifier(new_value) {
		const Identifier = require('./Identifier');
		this.__whatIdentifier = new Identifier(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			role: this.__role,
			whatUri: this.__whatUri,
			whatReference: this.__whatReference && this.__whatReference.toJSON(),
			whatIdentifier: this.__whatIdentifier && this.__whatIdentifier.toJSON(),
		});
	}
}

module.exports = ProvenanceEntity;
