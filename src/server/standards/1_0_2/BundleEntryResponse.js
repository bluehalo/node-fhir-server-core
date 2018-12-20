const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');
const InstantScalar = require('./scalars/Instant.scalar');

class BundleEntryResponse extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'BundleEntryResponse';
		Object.assign(this, opt);
	}

	// This is a BundleEntryResponse resource
	static get __resourceType() {
		return 'BundleEntryResponse';
	}

	// The status code returned by processing this entry.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// The location header created by processing this operation.
	get location() {
		return this.__location;
	}

	set location(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field location`);
		}
		this.__location = new_value;
	}

	// The etag for the resource, it the operation for the entry produced a versioned resource.
	get etag() {
		return this.__etag;
	}

	set etag(new_value) {
		this.__etag = new_value;
	}

	// The date/time that the resource was modified on the server.
	get lastModified() {
		return this.__lastModified;
	}

	set lastModified(new_value) {
		// Throw if new value does not match the pattern
		let pattern = InstantScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field lastModified`);
		}
		this.__lastModified = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			status: this.__status,
			location: this.__location,
			etag: this.__etag,
			lastModified: this.__lastModified,
		});
	}
}

module.exports = BundleEntryResponse;
