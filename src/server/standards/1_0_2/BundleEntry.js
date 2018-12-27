const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class BundleEntry extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'BundleEntry';
		Object.assign(this, opt);
	}

	// This is a BundleEntry resource
	static get __resourceType() {
		return 'BundleEntry';
	}

	// The Absolute URL for the resource. This must be provided for all resources. The fullUrl SHALL not disagree with the id in the resource. The fullUrl is a version independent reference to the resource.
	get fullUrl() {
		return this.__fullUrl;
	}

	set fullUrl(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field fullUrl`);
		}
		this.__fullUrl = new_value;
	}

	// The Resources for the entry.
	get resource() {
		return this.__resource;
	}

	set resource(new_value) {
		this.__resource = new_value;
	}

	// Information about the search process that lead to the creation of this entry.
	get search() {
		return this.__search;
	}

	set search(new_value) {
		const BundleEntrySearch = require('./BundleEntrySearch');
		this.__search = new BundleEntrySearch(new_value);
	}

	// Additional information about how this entry should be processed as part of a transaction.
	get request() {
		return this.__request;
	}

	set request(new_value) {
		const BundleEntryRequest = require('./BundleEntryRequest');
		this.__request = new BundleEntryRequest(new_value);
	}

	// Additional information about how this entry should be processed as part of a transaction.
	get response() {
		return this.__response;
	}

	set response(new_value) {
		const BundleEntryResponse = require('./BundleEntryResponse');
		this.__response = new BundleEntryResponse(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			fullUrl: this.__fullUrl,
			resource: this.__resource && this.__resource.toJSON(),
			search: this.__search && this.__search.toJSON(),
			request: this.__request && this.__request.toJSON(),
			response: this.__response && this.__response.toJSON(),
		});
	}
}

module.exports = BundleEntry;
