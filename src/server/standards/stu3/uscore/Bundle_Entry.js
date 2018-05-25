const BackboneElement = require('./BackboneElement');
const Bundle_Link = require('./Bundle_Link');
const ResourceList = require('./ResourceList');
const Bundle_Search = require('./Bundle_Search');
const Bundle_Request = require('./Bundle_Request');
const Bundle_Response = require('./Bundle_Response');

class Bundle_Entry extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Bundle_Entry';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Bundle_Entry';
	}

	// A series of links that provide context to this entry.
	get link () {
		return this._link;
	}

	set link ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._link = Array.isArray(new_value) ? new_value.map(val => new Bundle_Link(val)) : [new Bundle_Link(new_value)];
	}

	// The Absolute URL for the resource.  The fullUrl SHALL not disagree with the id in the resource. The fullUrl is a version independent reference to the resource. The fullUrl element SHALL have a value except that:  * fullUrl can be empty on a POST (although it does not need to when specifying a temporary id for reference in the bundle) * Results from operations might involve resources that are not identified.
	get fullUrl () {
		return this._fullUrl;
	}

	set fullUrl ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._fullUrl = new_value;
	}

	// The Resources for the entry.
	get resource () {
		return this._resource;
	}

	set resource ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._resource = new ResourceList(new_value);
	}

	// Information about the search process that lead to the creation of this entry.
	get search () {
		return this._search;
	}

	set search ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._search = new Bundle_Search(new_value);
	}

	// Additional information about how this entry should be processed as part of a transaction.
	get request () {
		return this._request;
	}

	set request ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._request = new Bundle_Request(new_value);
	}

	// Additional information about how this entry should be processed as part of a transaction.
	get response () {
		return this._response;
	}

	set response ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._response = new Bundle_Response(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			link: this.link && this.link.toJSON(),
			fullUrl: this.fullUrl,
			resource: this.resource && this.resource.toJSON(),
			search: this.search && this.search.toJSON(),
			request: this.request && this.request.toJSON(),
			response: this.response && this.response.toJSON()
		});
	}

}

module.exports = Bundle_Entry;
