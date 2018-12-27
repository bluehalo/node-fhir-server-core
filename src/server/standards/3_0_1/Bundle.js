const Resource = require('./Resource');
const UnsignedIntScalar = require('./scalars/UnsignedInt.scalar');

class Bundle extends Resource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Bundle';
		Object.assign(this, opt);
	}

	// This is a Bundle resource
	static get __resourceType() {
		return 'Bundle';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Bundle = new_value;
	}

	// A persistent identifier for the batch that won\'t change as a batch is copied from server to server.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// Indicates the purpose of this bundle - how it was intended to be used.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// If a set of search matches, this is the total number of matches for the search (as opposed to the number of results in this bundle).
	get total() {
		return this.__total;
	}

	set total(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UnsignedIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field total`);
		}
		this.__total = new_value;
	}

	// A series of links that provide context to this bundle.
	get link() {
		return this.__link;
	}

	set link(new_value) {
		const BundleLink = require('./BundleLink');
		this.__link = Array.isArray(new_value) ? new_value.map(val => new BundleLink(val)) : [new BundleLink(new_value)];
	}

	// An entry in a bundle resource - will either contain a resource, or information about a resource (transactions and history only).
	get entry() {
		return this.__entry;
	}

	set entry(new_value) {
		const BundleEntry = require('./BundleEntry');
		this.__entry = Array.isArray(new_value) ? new_value.map(val => new BundleEntry(val)) : [new BundleEntry(new_value)];
	}

	// Digital Signature - base64 encoded. XML-DSIg or a JWT.
	get signature() {
		return this.__signature;
	}

	set signature(new_value) {
		const Signature = require('./Signature');
		this.__signature = new Signature(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.toJSON(),
			type: this.__type,
			total: this.__total,
			link: this.__link && this.__link.map(v => v.toJSON()),
			entry: this.__entry && this.__entry.map(v => v.toJSON()),
			signature: this.__signature && this.__signature.toJSON(),
		});
	}
}

module.exports = Bundle;
