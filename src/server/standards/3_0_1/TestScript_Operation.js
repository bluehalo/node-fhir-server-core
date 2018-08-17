const BackboneElement = require('./BackboneElement');
const Coding = require('./Coding');
const TestScript_RequestHeader = require('./TestScript_RequestHeader');

class TestScript_Operation extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'TestScript_Operation';
	}

	// Server interaction or operation type.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new Coding(new_value);
	}

	// The type of the resource.  See http://build.fhir.org/resourcelist.html.
	get resource () {
		return this._resource;
	}

	set resource ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field resource`);
		}
		this._resource = new_value;
	}

	// The label would be used for tracking/logging purposes by test engines.
	get label () {
		return this._label;
	}

	set label ( new_value ) {
		this._label = new_value;
	}

	// The description would be used by test engines for tracking and reporting purposes.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// The content-type or mime-type to use for RESTful operation in the 'Accept' header.
	get accept () {
		return this._accept;
	}

	set accept ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['xml', 'json', 'ttl', 'none'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field accept`);
		}
		this._accept = new_value;
	}

	// The content-type or mime-type to use for RESTful operation in the 'Content-Type' header.
	get contentType () {
		return this._contentType;
	}

	set contentType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['xml', 'json', 'ttl', 'none'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field contentType`);
		}
		this._contentType = new_value;
	}

	// The server where the request message is destined for.  Must be one of the server numbers listed in TestScript.destination section.
	get destination () {
		return this._destination;
	}

	set destination ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field destination`);
		}
		this._destination = new_value;
	}

	// Whether or not to implicitly send the request url in encoded format. The default is true to match the standard RESTful client behavior. Set to false when communicating with a server that does not support encoded url paths.
	get encodeRequestUrl () {
		return this._encodeRequestUrl;
	}

	set encodeRequestUrl ( new_value ) {
		this._encodeRequestUrl = new_value;
	}

	// The server where the request message originates from.  Must be one of the server numbers listed in TestScript.origin section.
	get origin () {
		return this._origin;
	}

	set origin ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field origin`);
		}
		this._origin = new_value;
	}

	// Path plus parameters after [type].  Used to set parts of the request URL explicitly.
	get params () {
		return this._params;
	}

	set params ( new_value ) {
		this._params = new_value;
	}

	// Header elements would be used to set HTTP headers.
	get requestHeader () {
		return this._requestHeader;
	}

	set requestHeader ( new_value ) {
		this._requestHeader = Array.isArray(new_value) ? new_value.map(val => new TestScript_RequestHeader(val)) : [new TestScript_RequestHeader(new_value)];
	}

	// The fixture id (maybe new) to map to the request.
	get requestId () {
		return this._requestId;
	}

	set requestId ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[A-Za-z0-9\-\.]{1,64}/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field requestId`);
		}
		this._requestId = new_value;
	}

	// The fixture id (maybe new) to map to the response.
	get responseId () {
		return this._responseId;
	}

	set responseId ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[A-Za-z0-9\-\.]{1,64}/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field responseId`);
		}
		this._responseId = new_value;
	}

	// The id of the fixture used as the body of a PUT or POST request.
	get sourceId () {
		return this._sourceId;
	}

	set sourceId ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[A-Za-z0-9\-\.]{1,64}/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field sourceId`);
		}
		this._sourceId = new_value;
	}

	// Id of fixture used for extracting the [id],  [type], and [vid] for GET requests.
	get targetId () {
		return this._targetId;
	}

	set targetId ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[A-Za-z0-9\-\.]{1,64}/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field targetId`);
		}
		this._targetId = new_value;
	}

	// Complete request URL.
	get url () {
		return this._url;
	}

	set url ( new_value ) {
		this._url = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this._type && this._type.toJSON(),
			resource: this._resource,
			label: this._label,
			description: this._description,
			accept: this._accept,
			contentType: this._contentType,
			destination: this._destination,
			encodeRequestUrl: this._encodeRequestUrl,
			origin: this._origin,
			params: this._params,
			requestHeader: this._requestHeader && this._requestHeader.map(v => v.toJSON()),
			requestId: this._requestId,
			responseId: this._responseId,
			sourceId: this._sourceId,
			targetId: this._targetId,
			url: this._url
		});
	}

}

module.exports = TestScript_Operation;
