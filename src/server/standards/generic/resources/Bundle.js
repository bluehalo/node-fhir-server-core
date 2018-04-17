const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Code = require('../types/Code');
const Signature = require('../types/Signature');
const Resource = require('../types/Resource');

class Link {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// relation	Σ	1..1	string	See http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1
	set relation(relation) {
		this._relation = relation;
	}

	get relation() {
		return this._relation;
	}

	// url	Σ	1..1	uri	Reference details for the link
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	toJSON() {
		return {
			relation: this._relation,
			url: this._url,
		};
	}
}

class Search {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// mode	Σ	0..1	code	match | include | outcome - why this is in the result set
	// SearchEntryMode (Required)
	set mode(mode) {
		this._mode = new Code(mode);
	}

	get mode() {
		return this._mode;
	}

	// score	Σ	0..1	decimal	Search ranking (between 0 and 1)
	set score(score) {
		this._score = score;
	}

	get score() {
		return this._score;
	}

	toJSON() {
		return {
			mode: this._mode,
			score: this._score,
		};
	}
}

class Request {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// method	Σ	1..1	code	GET | POST | PUT | DELETE
	// HTTPVerb (Required)
	set method(method) {
		this._method = new Code(method);
	}

	get method() {
		return this._method;
	}

	// url	Σ	1..1	uri	URL for HTTP equivalent of this entry
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	// ifNoneMatch	Σ	0..1	string	For managing cache currency
	set ifNoneMatch(ifNoneMatch) {
		this._ifNoneMatch = ifNoneMatch;
	}

	get ifNoneMatch() {
		return this._ifNoneMatch;
	}

	// ifModifiedSince	Σ	0..1	instant	For managing update contention
	set ifModifiedSince(ifModifiedSince) {
		this._ifModifiedSince = ifModifiedSince;
	}

	get ifModifiedSince() {
		return this._ifModifiedSince;
	}

	// ifMatch	Σ	0..1	string	For managing update contention
	set ifMatch(ifMatch) {
		this._ifMatch = ifMatch;
	}

	get ifMatch() {
		return this._ifMatch;
	}

	// ifNoneExist	Σ	0..1	string	For conditional creates
	set ifNoneExist(ifNoneExist) {
		this._ifNoneExist = ifNoneExist;
	}

	get ifNoneExist() {
		return this._ifNoneExist;
	}

	toJSON() {
		return {
			method: this._method,
			url: this._url,
			ifNoneMatch: this._ifNoneMatch,
			ifModifiedSince: this._ifModifiedSince,
			ifMatch: this._ifMatch,
			ifNoneExist: this._ifNoneExist,
		};
	}
}

class Response {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// status	Σ	1..1	string	Status response code (text optional)
	set status(status) {
		this._status = status;
	}

	get status() {
		return this._status;
	}

	// location	Σ	0..1	uri	The location, if the operation returns a location
	set location(location) {
		this._location = location;
	}

	get location() {
		return this._location;
	}

	// etag	Σ	0..1	string	The etag for the resource (if relevant)
	set etag(etag) {
		this._etag = etag;
	}

	get etag() {
		return this._etag;
	}

	// lastModified	Σ	0..1	instant	Server's date time modified
	set lastModified(lastModified) {
		this._lastModified = lastModified;
	}

	get lastModified() {
		return this._lastModified;
	}

	// outcome	Σ	0..1	Resource	OperationOutcome with hints and warnings (for batch/transaction)
	set outcome(outcome) {
		this._outcome = new Resource(outcome);
	}

	get outcome() {
		return this._outcome;
	}

	toJSON() {
		return {
			status: this._status,
			location: this._location,
			etag: this._etag,
			lastModified: this._lastModified,
			outcome: this._outcome,
		};
	}
}

class Entry {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// link	Σ	0..*	see link	Links related to this entry
	set link(link) {
		this._link = [].concat(link);
	}

	get link() {
		return this._link;
	}

	// fullUrl	Σ	0..1	uri	Absolute URL for resource (server address, or UUID/OID)
	set fullUrl(fullUrl) {
		this._fullUrl = fullUrl;
	}

	get fullUrl() {
		return this._fullUrl;
	}

	// resource	Σ	0..1	Resource	A resource in the bundle
	set resource(resource) {
		this._resource = new Resource(resource);
	}

	get resource() {
		return this._resource;
	}

	// search	ΣI	0..1	BackboneElement	Search related information
	set search(search) {
		this._search = new Search(search);
	}

	get search() {
		return this._search;
	}

	// request	ΣI	0..1	BackboneElement	Transaction Related Information
	set request(request) {
		this._request = new Request(request);
	}

	get request() {
		return this._request;
	}

	// response	ΣI	0..1	BackboneElement	Transaction Related Information
	set response(response) {
		this._response = new Response(response);
	}

	get response() {
		return this._response;
	}

	toJSON() {
		return {
			link: this._link,
			fullUrl: this._fullUrl,
			resource: this._resource,
			search: this._search,
			request: this._request,
			response: this._response,
		};
	}
}

class Bundle extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Bundle';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..1	Identifier	Persistent identifier for the bundle
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// type	Σ	1..1	code	document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection
	// BundleType (Required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// total	ΣI	0..1	unsignedInt	If search, the total number of matches
	set total(total) {
		this._total = total;
	}

	get total() {
		return this._total;
	}

	// link	Σ	0..*	BackboneElement	Links related to this Bundle
	set link(link) {
		if (Array.isArray(link)) {
			this._link = link.map((i) => new Link(i));
		} else {
			this._link = [new Link(link)];
		}
	}

	get link() {
		return this._link;
	}

	// entry	ΣI	0..*	BackboneElement	Entry in the bundle - will have a resource, or information
	// + fullUrl cannot be a version specific reference
	// + must be a resource unless there's a request or response
	set entry(entry) {
		if (Array.isArray(entry)) {
			this._entry = entry.map((i) => new Entry(i));
		} else {
			this._entry = [new Entry(entry)];
		}
	}

	get entry() {
		return this._entry;
	}

	// signature	Σ	0..1	Signature	Digital Signature
	set signature(signature) {
		this._signature = new Signature(signature);
	}

	get signature() {
		return this._signature;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			type: this._type,
			total: this._total,
			link: this._link,
			entry: this._entry,
			signature: this._signature,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Bundle = Bundle;
module.exports.Entry = Entry;
module.exports.Response = Response;
module.exports.Request = Request;
module.exports.Search = Search;
module.exports.Link = Link;
