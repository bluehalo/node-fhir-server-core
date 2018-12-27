const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');
const InstantScalar = require('./scalars/Instant.scalar');

class BundleEntryRequest extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'BundleEntryRequest';
		Object.assign(this, opt);
	}

	// This is a BundleEntryRequest resource
	static get __resourceType() {
		return 'BundleEntryRequest';
	}

	// The HTTP verb for this entry in either a update history, or a transaction/ transaction response.
	get method() {
		return this.__method;
	}

	set method(new_value) {
		this.__method = new_value;
	}

	// The URL for this entry, relative to the root (the address to which the request is posted).
	get url() {
		return this.__url;
	}

	set url(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field url`);
		}
		this.__url = new_value;
	}

	// If the ETag values match, return a 304 Not modified status. See the API documentation for [\'Conditional Read\'](http.html#cread).
	get ifNoneMatch() {
		return this.__ifNoneMatch;
	}

	set ifNoneMatch(new_value) {
		this.__ifNoneMatch = new_value;
	}

	// Only perform the operation if the last updated date matches. See the API documentation for [\'Conditional Read\'](http.html#cread).
	get ifModifiedSince() {
		return this.__ifModifiedSince;
	}

	set ifModifiedSince(new_value) {
		// Throw if new value does not match the pattern
		let pattern = InstantScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field ifModifiedSince`);
		}
		this.__ifModifiedSince = new_value;
	}

	// Only perform the operation if the Etag value matches. For more information, see the API section [\'Managing Resource Contention\'](http.html#concurrency).
	get ifMatch() {
		return this.__ifMatch;
	}

	set ifMatch(new_value) {
		this.__ifMatch = new_value;
	}

	// Instruct the server not to perform the create if a specified resource already exists. For further information, see the API documentation for [\'Conditional Create\'](http.html#ccreate). This is just the query portion of the URL - what follows the \'?\' (not including the \'?\').
	get ifNoneExist() {
		return this.__ifNoneExist;
	}

	set ifNoneExist(new_value) {
		this.__ifNoneExist = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			method: this.__method,
			url: this.__url,
			ifNoneMatch: this.__ifNoneMatch,
			ifModifiedSince: this.__ifModifiedSince,
			ifMatch: this.__ifMatch,
			ifNoneExist: this.__ifNoneExist,
		});
	}
}

module.exports = BundleEntryRequest;
