const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const ProcessRequest_Item = require('./ProcessRequest_Item');
const Period = require('./Period');

class ProcessRequest extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'ProcessRequest';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ProcessRequest';
	}

	// This is a ProcessRequest resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['ProcessRequest'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// The ProcessRequest business identifier.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// The status of the resource instance.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field status`);
		}
		this._status = new_value;
	}

	// The type of processing action being requested, for example Reversal, Readjudication, StatusRequest,PendedRequest.
	get action () {
		return this._action;
	}

	set action ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['cancel', 'poll', 'reprocess', 'status'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field action`);
		}
		this._action = new_value;
	}

	// The organization which is the target of the request.
	get target () {
		return this._target;
	}

	set target ( new_value ) {
		this._target = new Reference(new_value);
	}

	// The date when this resource was created.
	get created () {
		return this._created;
	}

	set created ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field created`);
		}
		this._created = new_value;
	}

	// The practitioner who is responsible for the action specified in this request.
	get provider () {
		return this._provider;
	}

	set provider ( new_value ) {
		this._provider = new Reference(new_value);
	}

	// The organization which is responsible for the action speccified in this request.
	get organization () {
		return this._organization;
	}

	set organization ( new_value ) {
		this._organization = new Reference(new_value);
	}

	// Reference of resource which is the target or subject of this action.
	get request () {
		return this._request;
	}

	set request ( new_value ) {
		this._request = new Reference(new_value);
	}

	// Reference of a prior response to resource which is the target or subject of this action.
	get response () {
		return this._response;
	}

	set response ( new_value ) {
		this._response = new Reference(new_value);
	}

	// If true remove all history excluding audit.
	get nullify () {
		return this._nullify;
	}

	set nullify ( new_value ) {
		this._nullify = new_value;
	}

	// A reference to supply which authenticates the process.
	get reference () {
		return this._reference;
	}

	set reference ( new_value ) {
		this._reference = new_value;
	}

	// List of top level items to be re-adjudicated, if none specified then the entire submission is re-adjudicated.
	get item () {
		return this._item;
	}

	set item ( new_value ) {
		this._item = Array.isArray(new_value) ? new_value.map(val => new ProcessRequest_Item(val)) : [new ProcessRequest_Item(new_value)];
	}

	// Names of resource types to include.
	get include () {
		return this._include;
	}

	set include ( new_value ) {
		this._include = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// Names of resource types to exclude.
	get exclude () {
		return this._exclude;
	}

	set exclude ( new_value ) {
		this._exclude = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// A period of time during which the fulfilling resources would have been created.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		this._period = new Period(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier && this._identifier.map(v => v.toJSON()),
			status: this._status,
			action: this._action,
			target: this._target && this._target.toJSON(),
			created: this._created,
			provider: this._provider && this._provider.toJSON(),
			organization: this._organization && this._organization.toJSON(),
			request: this._request && this._request.toJSON(),
			response: this._response && this._response.toJSON(),
			nullify: this._nullify,
			reference: this._reference,
			item: this._item && this._item.map(v => v.toJSON()),
			include: this._include,
			exclude: this._exclude,
			period: this._period && this._period.toJSON()
		});
	}

}

module.exports = ProcessRequest;
