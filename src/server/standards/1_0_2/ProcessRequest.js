const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class ProcessRequest extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ProcessRequest';
		Object.assign(this, opt);
	}

	// This is a ProcessRequest resource
	static get __resourceType() {
		return 'ProcessRequest';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__ProcessRequest = new_value;
	}

	// The type of processing action being requested, for example Reversal, Readjudication, StatusRequest,PendedRequest.
	get action() {
		return this.__action;
	}

	set action(new_value) {
		this.__action = new_value;
	}

	// The ProcessRequest business identifier.
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

	// The organization which is the target of the request.
	get target() {
		return this.__target;
	}

	set target(new_value) {
		const Reference = require('./Reference');
		this.__target = new Reference(new_value);
	}

	// The practitioner who is responsible for the action specified in thise request.
	get provider() {
		return this.__provider;
	}

	set provider(new_value) {
		const Reference = require('./Reference');
		this.__provider = new Reference(new_value);
	}

	// The organization which is responsible for the action speccified in thise request.
	get organization() {
		return this.__organization;
	}

	set organization(new_value) {
		const Reference = require('./Reference');
		this.__organization = new Reference(new_value);
	}

	// Reference of resource which is the target or subject of this action.
	get request() {
		return this.__request;
	}

	set request(new_value) {
		const Reference = require('./Reference');
		this.__request = new Reference(new_value);
	}

	// Reference of a prior response to resource which is the target or subject of this action.
	get response() {
		return this.__response;
	}

	set response(new_value) {
		const Reference = require('./Reference');
		this.__response = new Reference(new_value);
	}

	// If true remove all history excluding audit.
	get nullify() {
		return this.__nullify;
	}

	set nullify(new_value) {
		this.__nullify = new_value;
	}

	// A reference to supply which authenticates the process.
	get reference() {
		return this.__reference;
	}

	set reference(new_value) {
		this.__reference = new_value;
	}

	// List of top level items to be re-adjudicated, if none specified then the entire submission is re-adjudicated.
	get item() {
		return this.__item;
	}

	set item(new_value) {
		const ProcessRequestItem = require('./ProcessRequestItem');
		this.__item = Array.isArray(new_value)
			? new_value.map(val => new ProcessRequestItem(val))
			: [new ProcessRequestItem(new_value)];
	}

	// Names of resource types to include.
	get include() {
		return this.__include;
	}

	set include(new_value) {
		this.__include = Array.isArray(new_value) ? new_value : [new_value];
	}

	// Names of resource types to exclude.
	get exclude() {
		return this.__exclude;
	}

	set exclude(new_value) {
		this.__exclude = Array.isArray(new_value) ? new_value : [new_value];
	}

	// A period of time during which the fulfilling resources would have been created.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			action: this.__action,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			ruleset: this.__ruleset && this.__ruleset.toJSON(),
			originalRuleset: this.__originalRuleset && this.__originalRuleset.toJSON(),
			created: this.__created,
			target: this.__target && this.__target.toJSON(),
			provider: this.__provider && this.__provider.toJSON(),
			organization: this.__organization && this.__organization.toJSON(),
			request: this.__request && this.__request.toJSON(),
			response: this.__response && this.__response.toJSON(),
			nullify: this.__nullify,
			reference: this.__reference,
			item: this.__item && this.__item.map(v => v.toJSON()),
			include: this.__include,
			exclude: this.__exclude,
			period: this.__period && this.__period.toJSON(),
		});
	}
}

module.exports = ProcessRequest;
