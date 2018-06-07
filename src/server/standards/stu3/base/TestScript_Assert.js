const BackboneElement = require('./BackboneElement');
const TestScript_Rule2 = require('./TestScript_Rule2');
const TestScript_Ruleset1 = require('./TestScript_Ruleset1');

class TestScript_Assert extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'TestScript_Assert';
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

	// The direction to use for the assertion.
	get direction () {
		return this._direction;
	}

	set direction ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['response', 'request'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field direction`);
		}
		this._direction = new_value;
	}

	// Id of the source fixture used as the contents to be evaluated by either the "source/expression" or "sourceId/path" definition.
	get compareToSourceId () {
		return this._compareToSourceId;
	}

	set compareToSourceId ( new_value ) {
		this._compareToSourceId = new_value;
	}

	// The fluentpath expression to evaluate against the source fixture. When compareToSourceId is defined, either compareToSourceExpression or compareToSourcePath must be defined, but not both.
	get compareToSourceExpression () {
		return this._compareToSourceExpression;
	}

	set compareToSourceExpression ( new_value ) {
		this._compareToSourceExpression = new_value;
	}

	// XPath or JSONPath expression to evaluate against the source fixture. When compareToSourceId is defined, either compareToSourceExpression or compareToSourcePath must be defined, but not both.
	get compareToSourcePath () {
		return this._compareToSourcePath;
	}

	set compareToSourcePath ( new_value ) {
		this._compareToSourcePath = new_value;
	}

	// The content-type or mime-type to use for RESTful operation in the 'Content-Type' header.
	get contentType () {
		return this._contentType;
	}

	set contentType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['xml', 'json', 'ttl', 'none'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field contentType`);
		}
		this._contentType = new_value;
	}

	// The fluentpath expression to be evaluated against the request or response message contents - HTTP headers and payload.
	get expression () {
		return this._expression;
	}

	set expression ( new_value ) {
		this._expression = new_value;
	}

	// The HTTP header field name e.g. 'Location'.
	get headerField () {
		return this._headerField;
	}

	set headerField ( new_value ) {
		this._headerField = new_value;
	}

	// The ID of a fixture.  Asserts that the response contains at a minimum the fixture specified by minimumId.
	get minimumId () {
		return this._minimumId;
	}

	set minimumId ( new_value ) {
		this._minimumId = new_value;
	}

	// Whether or not the test execution performs validation on the bundle navigation links.
	get navigationLinks () {
		return this._navigationLinks;
	}

	set navigationLinks ( new_value ) {
		this._navigationLinks = new_value;
	}

	// The operator type defines the conditional behavior of the assert. If not defined, the default is equals.
	get operator () {
		return this._operator;
	}

	set operator ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['equals', 'notEquals', 'in', 'notIn', 'greaterThan', 'lessThan', 'empty', 'notEmpty', 'contains', 'notContains', 'eval'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field operator`);
		}
		this._operator = new_value;
	}

	// The XPath or JSONPath expression to be evaluated against the fixture representing the response received from server.
	get path () {
		return this._path;
	}

	set path ( new_value ) {
		this._path = new_value;
	}

	// The request method or HTTP operation code to compare against that used by the client system under test.
	get requestMethod () {
		return this._requestMethod;
	}

	set requestMethod ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['delete', 'get', 'options', 'patch', 'post', 'put'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field requestMethod`);
		}
		this._requestMethod = new_value;
	}

	// The value to use in a comparison against the request URL path string.
	get requestURL () {
		return this._requestURL;
	}

	set requestURL ( new_value ) {
		this._requestURL = new_value;
	}

	// The type of the resource.  See http://build.fhir.org/resourcelist.html.
	get resource () {
		return this._resource;
	}

	set resource ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field resource`);
		}
		this._resource = new_value;
	}

	// okay | created | noContent | notModified | bad | forbidden | notFound | methodNotAllowed | conflict | gone | preconditionFailed | unprocessable.
	get response () {
		return this._response;
	}

	set response ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['okay', 'created', 'noContent', 'notModified', 'bad', 'forbidden', 'notFound', 'methodNotAllowed', 'conflict', 'gone', 'preconditionFailed', 'unprocessable'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field response`);
		}
		this._response = new_value;
	}

	// The value of the HTTP response code to be tested.
	get responseCode () {
		return this._responseCode;
	}

	set responseCode ( new_value ) {
		this._responseCode = new_value;
	}

	// The TestScript.rule this assert will evaluate.
	get rule () {
		return this._rule;
	}

	set rule ( new_value ) {
		this._rule = new TestScript_Rule2(new_value);
	}

	// The TestScript.ruleset this assert will evaluate.
	get ruleset () {
		return this._ruleset;
	}

	set ruleset ( new_value ) {
		this._ruleset = new TestScript_Ruleset1(new_value);
	}

	// Fixture to evaluate the XPath/JSONPath expression or the headerField  against.
	get sourceId () {
		return this._sourceId;
	}

	set sourceId ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[A-Za-z0-9\-\.]{1,64}/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field sourceId`);
		}
		this._sourceId = new_value;
	}

	// The ID of the Profile to validate against.
	get validateProfileId () {
		return this._validateProfileId;
	}

	set validateProfileId ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[A-Za-z0-9\-\.]{1,64}/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field validateProfileId`);
		}
		this._validateProfileId = new_value;
	}

	// The value to compare to.
	get value () {
		return this._value;
	}

	set value ( new_value ) {
		this._value = new_value;
	}

	// Whether or not the test execution will produce a warning only on error for this assert.
	get warningOnly () {
		return this._warningOnly;
	}

	set warningOnly ( new_value ) {
		this._warningOnly = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			label: this._label,
			description: this._description,
			direction: this._direction,
			compareToSourceId: this._compareToSourceId,
			compareToSourceExpression: this._compareToSourceExpression,
			compareToSourcePath: this._compareToSourcePath,
			contentType: this._contentType,
			expression: this._expression,
			headerField: this._headerField,
			minimumId: this._minimumId,
			navigationLinks: this._navigationLinks,
			operator: this._operator,
			path: this._path,
			requestMethod: this._requestMethod,
			requestURL: this._requestURL,
			resource: this._resource,
			response: this._response,
			responseCode: this._responseCode,
			rule: this._rule,
			ruleset: this._ruleset,
			sourceId: this._sourceId,
			validateProfileId: this._validateProfileId,
			value: this._value,
			warningOnly: this._warningOnly
		});
	}

}

module.exports = TestScript_Assert;
