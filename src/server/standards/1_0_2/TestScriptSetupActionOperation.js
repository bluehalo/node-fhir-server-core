const BackboneElement = require('./BackboneElement');
const IdScalar = require('./scalars/Id.scalar');

class TestScriptSetupActionOperation extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TestScriptSetupActionOperation';
		Object.assign(this, opt);
	}

	// This is a TestScriptSetupActionOperation resource
	static get __resourceType() {
		return 'TestScriptSetupActionOperation';
	}

	// Server interaction or operation type.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const Coding = require('./Coding');
		this.__type = new Coding(new_value);
	}

	// The type of the resource.  See http://hl7-fhir.github.io/resourcelist.html.
	get resource() {
		return this.__resource;
	}

	set resource(new_value) {
		this.__resource = new_value;
	}

	// The label would be used for tracking/logging purposes by test engines.
	get label() {
		return this.__label;
	}

	set label(new_value) {
		this.__label = new_value;
	}

	// The description would be used by test engines for tracking and reporting purposes.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// The content-type or mime-type to use for RESTful operation in the \'Accept\' header.
	get accept() {
		return this.__accept;
	}

	set accept(new_value) {
		this.__accept = new_value;
	}

	// The content-type or mime-type to use for RESTful operation in the \'Content-Type\' header.
	get contentType() {
		return this.__contentType;
	}

	set contentType(new_value) {
		this.__contentType = new_value;
	}

	// Which server to perform the operation on.
	get destination() {
		return this.__destination;
	}

	set destination(new_value) {
		this.__destination = new_value;
	}

	// Whether or not to implicitly send the request url in encoded format. The default is true to match the standard RESTful client behavior. Set to false when communicating with a server that does not support encoded url paths.
	get encodeRequestUrl() {
		return this.__encodeRequestUrl;
	}

	set encodeRequestUrl(new_value) {
		this.__encodeRequestUrl = new_value;
	}

	// Path plus parameters after [type].  Used to set parts of the request URL explicitly.
	get params() {
		return this.__params;
	}

	set params(new_value) {
		this.__params = new_value;
	}

	// Header elements would be used to set HTTP headers.
	get requestHeader() {
		return this.__requestHeader;
	}

	set requestHeader(new_value) {
		const TestScriptSetupActionOperationRequestHeader = require('./TestScriptSetupActionOperationRequestHeader');
		this.__requestHeader = Array.isArray(new_value)
			? new_value.map(val => new TestScriptSetupActionOperationRequestHeader(val))
			: [new TestScriptSetupActionOperationRequestHeader(new_value)];
	}

	// The fixture id (maybe new) to map to the response.
	get responseId() {
		return this.__responseId;
	}

	set responseId(new_value) {
		// Throw if new value does not match the pattern
		let pattern = IdScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field responseId`);
		}
		this.__responseId = new_value;
	}

	// The id of the fixture used as the body of a PUT or POST request.
	get sourceId() {
		return this.__sourceId;
	}

	set sourceId(new_value) {
		// Throw if new value does not match the pattern
		let pattern = IdScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field sourceId`);
		}
		this.__sourceId = new_value;
	}

	// Id of fixture used for extracting the [id],  [type], and [vid] for GET requests.
	get targetId() {
		return this.__targetId;
	}

	set targetId(new_value) {
		// Throw if new value does not match the pattern
		let pattern = IdScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field targetId`);
		}
		this.__targetId = new_value;
	}

	// Complete request URL.
	get url() {
		return this.__url;
	}

	set url(new_value) {
		this.__url = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type && this.__type.toJSON(),
			resource: this.__resource,
			label: this.__label,
			description: this.__description,
			accept: this.__accept,
			contentType: this.__contentType,
			destination: this.__destination,
			encodeRequestUrl: this.__encodeRequestUrl,
			params: this.__params,
			requestHeader: this.__requestHeader && this.__requestHeader.map(v => v.toJSON()),
			responseId: this.__responseId,
			sourceId: this.__sourceId,
			targetId: this.__targetId,
			url: this.__url,
		});
	}
}

module.exports = TestScriptSetupActionOperation;
