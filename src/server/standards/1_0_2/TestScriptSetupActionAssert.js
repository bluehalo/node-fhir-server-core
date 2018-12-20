const BackboneElement = require('./BackboneElement');
const IdScalar = require('./scalars/Id.scalar');

class TestScriptSetupActionAssert extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TestScriptSetupActionAssert';
		Object.assign(this, opt);
	}

	// This is a TestScriptSetupActionAssert resource
	static get __resourceType() {
		return 'TestScriptSetupActionAssert';
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

	// The direction to use for the assertion.
	get direction() {
		return this.__direction;
	}

	set direction(new_value) {
		this.__direction = new_value;
	}

	// Id of fixture used to compare the \'sourceId/path\' evaluations to.
	get compareToSourceId() {
		return this.__compareToSourceId;
	}

	set compareToSourceId(new_value) {
		this.__compareToSourceId = new_value;
	}

	// XPath or JSONPath expression against fixture used to compare the \'sourceId/path\' evaluations to.
	get compareToSourcePath() {
		return this.__compareToSourcePath;
	}

	set compareToSourcePath(new_value) {
		this.__compareToSourcePath = new_value;
	}

	// The content-type or mime-type to use for RESTful operation in the \'Content-Type\' header.
	get contentType() {
		return this.__contentType;
	}

	set contentType(new_value) {
		this.__contentType = new_value;
	}

	// The HTTP header field name e.g. \'Location\'.
	get headerField() {
		return this.__headerField;
	}

	set headerField(new_value) {
		this.__headerField = new_value;
	}

	// The ID of a fixture.  Asserts that the response contains at a minimumId the fixture specified by minimumId.
	get minimumId() {
		return this.__minimumId;
	}

	set minimumId(new_value) {
		this.__minimumId = new_value;
	}

	// Whether or not the test execution performs validation on the bundle navigation links.
	get navigationLinks() {
		return this.__navigationLinks;
	}

	set navigationLinks(new_value) {
		this.__navigationLinks = new_value;
	}

	// The operator type.
	get operator() {
		return this.__operator;
	}

	set operator(new_value) {
		this.__operator = new_value;
	}

	// The XPath or JSONPath expression to be evaluated against the fixture representing the response received from server.
	get path() {
		return this.__path;
	}

	set path(new_value) {
		this.__path = new_value;
	}

	// The type of the resource.  See http://hl7-fhir.github.io/resourcelist.html.
	get resource() {
		return this.__resource;
	}

	set resource(new_value) {
		this.__resource = new_value;
	}

	// okay | created | noContent | notModified | bad | forbidden | notFound | methodNotAllowed | conflict | gone | preconditionFailed | unprocessable.
	get response() {
		return this.__response;
	}

	set response(new_value) {
		this.__response = new_value;
	}

	// The value of the HTTP response code to be tested.
	get responseCode() {
		return this.__responseCode;
	}

	set responseCode(new_value) {
		this.__responseCode = new_value;
	}

	// Fixture to evaluate the XPath/JSONPath expression or the headerField  against.
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

	// The ID of the Profile to validate against.
	get validateProfileId() {
		return this.__validateProfileId;
	}

	set validateProfileId(new_value) {
		// Throw if new value does not match the pattern
		let pattern = IdScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field validateProfileId`);
		}
		this.__validateProfileId = new_value;
	}

	// The value to compare to.
	get value() {
		return this.__value;
	}

	set value(new_value) {
		this.__value = new_value;
	}

	// Whether or not the test execution will produce a warning only on error for this assert.
	get warningOnly() {
		return this.__warningOnly;
	}

	set warningOnly(new_value) {
		this.__warningOnly = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			label: this.__label,
			description: this.__description,
			direction: this.__direction,
			compareToSourceId: this.__compareToSourceId,
			compareToSourcePath: this.__compareToSourcePath,
			contentType: this.__contentType,
			headerField: this.__headerField,
			minimumId: this.__minimumId,
			navigationLinks: this.__navigationLinks,
			operator: this.__operator,
			path: this.__path,
			resource: this.__resource,
			response: this.__response,
			responseCode: this.__responseCode,
			sourceId: this.__sourceId,
			validateProfileId: this.__validateProfileId,
			value: this.__value,
			warningOnly: this.__warningOnly,
		});
	}
}

module.exports = TestScriptSetupActionAssert;
