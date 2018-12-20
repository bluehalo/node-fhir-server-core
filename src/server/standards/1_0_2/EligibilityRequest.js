const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class EligibilityRequest extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'EligibilityRequest';
		Object.assign(this, opt);
	}

	// This is a EligibilityRequest resource
	static get __resourceType() {
		return 'EligibilityRequest';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__EligibilityRequest = new_value;
	}

	// The Response business identifier.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.
	get ruleset() {
		return this.__ruleset;
	}

	set ruleset(new_value) {
		const Coding = require('./Coding');
		this.__ruleset = new Coding(new_value);
	}

	// The style (standard) and version of the original material which was converted into this resource.
	get originalRuleset() {
		return this.__originalRuleset;
	}

	set originalRuleset(new_value) {
		const Coding = require('./Coding');
		this.__originalRuleset = new Coding(new_value);
	}

	// The date when this resource was created.
	get created() {
		return this.__created;
	}

	set created(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field created`);
		}
		this.__created = new_value;
	}

	// The Insurer who is target  of the request.
	get target() {
		return this.__target;
	}

	set target(new_value) {
		const Reference = require('./Reference');
		this.__target = new Reference(new_value);
	}

	// The practitioner who is responsible for the services rendered to the patient.
	get provider() {
		return this.__provider;
	}

	set provider(new_value) {
		const Reference = require('./Reference');
		this.__provider = new Reference(new_value);
	}

	// The organization which is responsible for the services rendered to the patient.
	get organization() {
		return this.__organization;
	}

	set organization(new_value) {
		const Reference = require('./Reference');
		this.__organization = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			ruleset: this.__ruleset && this.__ruleset.toJSON(),
			originalRuleset: this.__originalRuleset && this.__originalRuleset.toJSON(),
			created: this.__created,
			target: this.__target && this.__target.toJSON(),
			provider: this.__provider && this.__provider.toJSON(),
			organization: this.__organization && this.__organization.toJSON(),
		});
	}
}

module.exports = EligibilityRequest;
