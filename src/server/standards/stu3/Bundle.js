const Resource = require('./Resource');
const Identifier = require('./Identifier');
const Bundle_Link = require('./Bundle_Link');
const Bundle_Entry = require('./Bundle_Entry');
const Signature = require('./Signature');

class Bundle extends Resource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Bundle';
	}

	// This is a Bundle resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['Bundle'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// A persistent identifier for the batch that won't change as a batch is copied from server to server.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	// Indicates the purpose of this bundle - how it was intended to be used.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['document', 'message', 'transaction', 'transaction-response', 'batch', 'batch-response', 'history', 'searchset', 'collection'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field type`);
		}
		this._type = new_value;
	}

	// If a set of search matches, this is the total number of matches for the search (as opposed to the number of results in this bundle).
	get total () {
		return this._total;
	}

	set total ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[0]|([1-9][0-9]*)/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field total`);
		}
		this._total = new_value;
	}

	// A series of links that provide context to this bundle.
	get link () {
		return this._link;
	}

	set link ( new_value ) {
		this._link = Array.isArray(new_value) ? new_value.map(val => new Bundle_Link(val)) : [new Bundle_Link(new_value)];
	}

	// An entry in a bundle resource - will either contain a resource, or information about a resource (transactions and history only).
	get entry () {
		return this._entry;
	}

	set entry ( new_value ) {
		this._entry = Array.isArray(new_value) ? new_value.map(val => new Bundle_Entry(val)) : [new Bundle_Entry(new_value)];
	}

	// Digital Signature - base64 encoded. XML-DSIg or a JWT.
	get signature () {
		return this._signature;
	}

	set signature ( new_value ) {
		this._signature = new Signature(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier,
			type: this._type,
			total: this._total,
			link: this._link,
			entry: this._entry,
			signature: this._signature
		});
	}

}

module.exports = Bundle;
