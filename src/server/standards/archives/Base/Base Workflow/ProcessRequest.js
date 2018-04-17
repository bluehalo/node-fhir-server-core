const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Code = require('./types/Code');
const Reference = require('./types/Reference');
const Period = require('./types/Period');

class Item {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// sequenceLinkId		1..1	integer	Service instance
	set sequenceLinkId(sequenceLinkId) {
		this._sequenceLinkId = sequenceLinkId;
	}

	get sequenceLinkId() {
		return this._sequenceLinkId;
	}

	toJSON() {
		return {
			sequenceLinkId: this._sequenceLinkId,
		};
	}
}

class ProcessRequest extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'ProcessRequest';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier		0..*	Identifier	Business Identifier
	set identifier(identifier) {
		if (Array.isArray(identifier)) {
			this._identifier = identifier.map((i) => new Identifier(i));
		} else {
			this._identifier = [new Identifier(identifier)];
		}
	}

	get identifier() {
		return this._identifier;
	}

	// status	?!Σ	0..1	code	active | cancelled | draft | entered-in-error
	// Financial Resource Status Codes (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// action		0..1	code	cancel | poll | reprocess | status
	// ActionList (Required)
	set action(action) {
		this._action = new Code(action);
	}

	get action() {
		return this._action;
	}

	// target		0..1	Reference(Organization)	Party which is the target of the request
	set target(target) {
		this._target = new Reference(target);
	}

	get target() {
		return this._target;
	}

	// created		0..1	dateTime	Creation date
	set created(created) {
		this._created = created;
	}

	get created() {
		return this._created;
	}

	// provider		0..1	Reference(Practitioner)	Responsible practitioner
	set provider(provider) {
		this._provider = new Reference(provider);
	}

	get provider() {
		return this._provider;
	}

	// organization		0..1	Reference(Organization)	Responsible organization
	set organization(organization) {
		this._organization = new Reference(organization);
	}

	get organization() {
		return this._organization;
	}

	// request		0..1	Reference(Any)	Reference to the Request resource
	set request(request) {
		this._request = new Reference(request);
	}

	get request() {
		return this._request;
	}

	// response		0..1	Reference(Any)	Reference to the Response resource
	set response(response) {
		this._response = new Reference(response);
	}

	get response() {
		return this._response;
	}

	// nullify		0..1	boolean	Remove history
	set nullify(nullify) {
		this._nullify = nullify;
	}

	get nullify() {
		return this._nullify;
	}

	// reference		0..1	string	Reference number/string
	set reference(reference) {
		this._reference = reference;
	}

	get reference() {
		return this._reference;
	}

	// include		0..*	string	Resource type(s) to include
	set include(include) {
		this._include = [].concat(include);
	}

	get include() {
		return this._include;
	}

	// exclude		0..*	string	Resource type(s) to exclude
	set exclude(exclude) {
		this._exclude = [].concat(exclude);
	}

	get exclude() {
		return this._exclude;
	}

	// period		0..1	Period	Selection period
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	// item		0..*	BackboneElement	Items to re-adjudicate
	set item(item) {
		if (Array.isArray(item)) {
			this._item = item.map((i) => new Item(i));
		} else {
			this._item = [new Item(item)];
		}
	}

	get item() {
		return this._item;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			status: this._status,
			action: this._action,
			target: this._target,
			created: this._created,
			provider: this._provider,
			organization: this._organization,
			request: this._request,
			response: this._response,
			nullify: this._nullify,
			reference: this._reference,
			include: this._include,
			exclude: this._exclude,
			period: this._period,
			item: this._item,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.ProcessRequest = ProcessRequest;
module.exports.Item = Item;
