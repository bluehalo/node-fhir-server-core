const BackboneElement = require('./BackboneElement');
const ResourceList = require('./ResourceList');

class Bundle_Response extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Bundle_Response';
	}

	// The status code returned by processing this entry. The status SHALL start with a 3 digit HTTP code (e.g. 404) and may contain the standard HTTP description associated with the status code.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		this._status = new_value;
	}

	// The location header created by processing this operation.
	get location () {
		return this._location;
	}

	set location ( new_value ) {
		this._location = new_value;
	}

	// The etag for the resource, it the operation for the entry produced a versioned resource (see [Resource Metadata and Versioning](http.html#versioning) and [Managing Resource Contention](http.html#concurrency)).
	get etag () {
		return this._etag;
	}

	set etag ( new_value ) {
		this._etag = new_value;
	}

	// The date/time that the resource was modified on the server.
	get lastModified () {
		return this._lastModified;
	}

	set lastModified ( new_value ) {
		this._lastModified = new_value;
	}

	// An OperationOutcome containing hints and warnings produced as part of processing this entry in a batch or transaction.
	get outcome () {
		return this._outcome;
	}

	set outcome ( new_value ) {
		this._outcome = new ResourceList(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			status: this._status,
			location: this._location,
			etag: this._etag,
			lastModified: this._lastModified,
			outcome: this._outcome
		});
	}

}

module.exports = Bundle_Response;
