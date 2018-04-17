const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Code = require('../types/Code');
const ContactDetail = require('../types/ContactDetail');
const UsageContext = require('../types/UsageContext');
const CodeableConcept = require('../types/CodeableConcept');
const Reference = require('../types/Reference');
const Coding = require('../types/Coding');

class Ruleset {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// rulesetId		1..1	id	Id of the TestScript.ruleset
	set rulesetId(rulesetId) {
		this._rulesetId = rulesetId;
	}

	get rulesetId() {
		return this._rulesetId;
	}

	// resource		1..1	Reference(Any)	Assert ruleset resource reference
	set resource(resource) {
		this._resource = new Reference(resource);
	}

	get resource() {
		return this._resource;
	}

	// rule		1..*	BackboneElement	The referenced rule within the ruleset
	set rule(rule) {
		if (Array.isArray(rule)) {
			this._rule = rule.map((i) => new Rule(i));
		} else {
			this._rule = [new Rule(rule)];
		}
	}

	get rule() {
		return this._rule;
	}

	toJSON() {
		return {
			rulesetId: this._rulesetId,
			resource: this._resource,
			rule: this._rule,
		};
	}
}

class Rule {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// ruleId		1..1	id	Id of referenced rule within the ruleset
	set ruleId(ruleId) {
		this._ruleId = ruleId;
	}

	get ruleId() {
		return this._ruleId;
	}

	// param		0..*	BackboneElement	Rule parameter template
	set param(param) {
		if (Array.isArray(param)) {
			this._param = param.map((i) => new Param(i));
		} else {
			this._param = [new Param(param)];
		}
	}

	get param() {
		return this._param;
	}

	// resource		1..1	Reference(Any)	Assert rule resource reference
	set resource(resource) {
		this._resource = new Reference(resource);
	}

	get resource() {
		return this._resource;
	}

	toJSON() {
		return {
			ruleId: this._ruleId,
			param: this._param,
			resource: this._resource,
		};
	}
}

class Param {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// name		1..1	string	Parameter name matching external assert rule parameter
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// value		0..1	string	Parameter value defined either explicitly or dynamically
	set value(value) {
		this._value = value;
	}

	get value() {
		return this._value;
	}

	toJSON() {
		return {
			name: this._name,
			value: this._value,
		};
	}
}

class Variable {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// name		1..1	string	Descriptive name for this variable
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// defaultValue		0..1	string	Default, hard-coded, or user-defined value for this variable
	set defaultValue(defaultValue) {
		this._defaultValue = defaultValue;
	}

	get defaultValue() {
		return this._defaultValue;
	}

	// description		0..1	string	Natural language description of the variable
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// expression		0..1	string	The fluentpath expression against the fixture body
	set expression(expression) {
		this._expression = expression;
	}

	get expression() {
		return this._expression;
	}

	// headerField		0..1	string	HTTP header field name for source
	set headerField(headerField) {
		this._headerField = headerField;
	}

	get headerField() {
		return this._headerField;
	}

	// hint		0..1	string	Hint help text for default value to enter
	set hint(hint) {
		this._hint = hint;
	}

	get hint() {
		return this._hint;
	}

	// path		0..1	string	XPath or JSONPath against the fixture body
	set path(path) {
		this._path = path;
	}

	get path() {
		return this._path;
	}

	// sourceId		0..1	id	Fixture Id of source expression or headerField within this variable
	set sourceId(sourceId) {
		this._sourceId = sourceId;
	}

	get sourceId() {
		return this._sourceId;
	}

	toJSON() {
		return {
			name: this._name,
			defaultValue: this._defaultValue,
			description: this._description,
			expression: this._expression,
			headerField: this._headerField,
			hint: this._hint,
			path: this._path,
			sourceId: this._sourceId,
		};
	}
}

class Fixture {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// autocreate		0..1	boolean	Whether or not to implicitly create the fixture during setup
	set autocreate(autocreate) {
		this._autocreate = autocreate;
	}

	get autocreate() {
		return this._autocreate;
	}

	// autodelete		0..1	boolean	Whether or not to implicitly delete the fixture during teardown
	set autodelete(autodelete) {
		this._autodelete = autodelete;
	}

	get autodelete() {
		return this._autodelete;
	}

	// resource		0..1	Reference(Any)	Reference of the resource
	set resource(resource) {
		this._resource = new Reference(resource);
	}

	get resource() {
		return this._resource;
	}

	toJSON() {
		return {
			autocreate: this._autocreate,
			autodelete: this._autodelete,
			resource: this._resource,
		};
	}
}

class Metadata {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// link		0..*	BackboneElement	Links to the FHIR specification
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

	// capability		1..*	BackboneElement	Capabilities that are assumed to function correctly on the FHIR server being tested
	set capability(capability) {
		if (Array.isArray(capability)) {
			this._capability = capability.map((i) => new Capability(i));
		} else {
			this._capability = [new Capability(capability)];
		}
	}

	get capability() {
		return this._capability;
	}

	toJSON() {
		return {
			link: this._link,
			capability: this._capability,
		};
	}
}

class Capability {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// required		0..1	boolean	Are the capabilities required?
	set required(required) {
		this._required = required;
	}

	get required() {
		return this._required;
	}

	// validated		0..1	boolean	Are the capabilities validated?
	set validated(validated) {
		this._validated = validated;
	}

	get validated() {
		return this._validated;
	}

	// description		0..1	string	The expected capabilities of the server
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// origin		0..*	integer	Which origin server these requirements apply to
	set origin(origin) {
		this._origin = [].concat(origin);
	}

	get origin() {
		return this._origin;
	}

	// destination		0..1	integer	Which server these requirements apply to
	set destination(destination) {
		this._destination = destination;
	}

	get destination() {
		return this._destination;
	}

	// link		0..*	uri	Links to the FHIR specification
	set link(link) {
		this._link = [].concat(link);
	}

	get link() {
		return this._link;
	}

	// capabilities		1..1	Reference(CapabilityStatement)	Required Capability Statement
	set capabilities(capabilities) {
		this._capabilities = new Reference(capabilities);
	}

	get capabilities() {
		return this._capabilities;
	}

	toJSON() {
		return {
			required: this._required,
			validated: this._validated,
			description: this._description,
			origin: this._origin,
			destination: this._destination,
			link: this._link,
			capabilities: this._capabilities,
		};
	}
}

class Link {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// url		1..1	uri	URL to the specification
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	// description		0..1	string	Short description
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	toJSON() {
		return {
			url: this._url,
			description: this._description,
		};
	}
}

class Destination {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// index		1..1	integer	The index of the abstract destination server starting at 1
	set index(index) {
		this._index = index;
	}

	get index() {
		return this._index;
	}

	// profile		1..1	Coding	FHIR-Server | FHIR-SDC-FormManager | FHIR-SDC-FormReceiver | FHIR-SDC-FormProcessor
	// TestScriptProfileDestinationType (Extensible)
	set profile(profile) {
		this._profile = new Coding(profile);
	}

	get profile() {
		return this._profile;
	}

	toJSON() {
		return {
			index: this._index,
			profile: this._profile,
		};
	}
}

class Origin {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// index		1..1	integer	The index of the abstract origin server starting at 1
	set index(index) {
		this._index = index;
	}

	get index() {
		return this._index;
	}

	// profile		1..1	Coding	FHIR-Client | FHIR-SDC-FormFiller
	// TestScriptProfileOriginType (Extensible)
	set profile(profile) {
		this._profile = new Coding(profile);
	}

	get profile() {
		return this._profile;
	}

	toJSON() {
		return {
			index: this._index,
			profile: this._profile,
		};
	}
}

class Teardown {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// action		1..*	BackboneElement	One or more teardown operations to perform
	set action(action) {
		if (Array.isArray(action)) {
			this._action = action.map((i) => new Action(i));
		} else {
			this._action = [new Action(action)];
		}
	}

	get action() {
		return this._action;
	}

	toJSON() {
		return {
			action: this._action,
		};
	}
}

class Action {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// operation	I	0..1	see operation	The setup operation to perform
	// + Test operation SHALL contain either sourceId or targetId or params or url.
	set operation(operation) {
		this._operation = operation;
	}

	get operation() {
		return this._operation;
	}

	// assert	I	0..1	see assert	The setup assertion to perform
	// + Only a single assertion SHALL be present within test action assert element.
	// + Test action assert SHALL contain either compareToSourceId and compareToSourceExpression, compareToSourceId and compareToSourcePath or neither.
	// + Test action assert response and response and responseCode SHALL be empty when direction equals request
	set assert(assert) {
		this._assert = assert;
	}

	get assert() {
		return this._assert;
	}

	toJSON() {
		return {
			operation: this._operation,
			assert: this._assert,
		};
	}
}

class Test {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// name		0..1	string	Tracking/logging name of this test
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// description		0..1	string	Tracking/reporting short description of the test
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// action	I	1..*	BackboneElement	A test operation or assert to perform
	// + Test action SHALL contain either an operation or assert but not both.
	set action(action) {
		if (Array.isArray(action)) {
			this._action = action.map((i) => new Action(i));
		} else {
			this._action = [new Action(action)];
		}
	}

	get action() {
		return this._action;
	}

	toJSON() {
		return {
			name: this._name,
			description: this._description,
			action: this._action,
		};
	}
}

class Assert {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// label		0..1	string	Tracking/logging assertion label
	set label(label) {
		this._label = label;
	}

	get label() {
		return this._label;
	}

	// description		0..1	string	Tracking/reporting assertion description
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// direction		0..1	code	response | request
	// AssertionDirectionType (Required)
	set direction(direction) {
		this._direction = new Code(direction);
	}

	get direction() {
		return this._direction;
	}

	// compareToSourceId		0..1	string	Id of the source fixture to be evaluated
	set compareToSourceId(compareToSourceId) {
		this._compareToSourceId = compareToSourceId;
	}

	get compareToSourceId() {
		return this._compareToSourceId;
	}

	// compareToSourceExpression		0..1	string	The fluentpath expression to evaluate against the source fixture
	set compareToSourceExpression(compareToSourceExpression) {
		this._compareToSourceExpression = compareToSourceExpression;
	}

	get compareToSourceExpression() {
		return this._compareToSourceExpression;
	}

	// compareToSourcePath		0..1	string	XPath or JSONPath expression to evaluate against the source fixture
	set compareToSourcePath(compareToSourcePath) {
		this._compareToSourcePath = compareToSourcePath;
	}

	get compareToSourcePath() {
		return this._compareToSourcePath;
	}

	// contentType		0..1	code	xml | json | ttl | none
	// ContentType (Required)
	set contentType(contentType) {
		this._contentType = new Code(contentType);
	}

	get contentType() {
		return this._contentType;
	}

	// expression		0..1	string	The fluentpath expression to be evaluated
	set expression(expression) {
		this._expression = expression;
	}

	get expression() {
		return this._expression;
	}

	// headerField		0..1	string	HTTP header field name
	set headerField(headerField) {
		this._headerField = headerField;
	}

	get headerField() {
		return this._headerField;
	}

	// minimumId		0..1	string	Fixture Id of minimum content resource
	set minimumId(minimumId) {
		this._minimumId = minimumId;
	}

	get minimumId() {
		return this._minimumId;
	}

	// navigationLinks		0..1	boolean	Perform validation on navigation links?
	set navigationLinks(navigationLinks) {
		this._navigationLinks = navigationLinks;
	}

	get navigationLinks() {
		return this._navigationLinks;
	}

	// operator		0..1	code	equals | notEquals | in | notIn | greaterThan | lessThan | empty | notEmpty | contains | notContains | eval
	// AssertionOperatorType (Required)
	set operator(operator) {
		this._operator = new Code(operator);
	}

	get operator() {
		return this._operator;
	}

	// path		0..1	string	XPath or JSONPath expression
	set path(path) {
		this._path = path;
	}

	get path() {
		return this._path;
	}

	// requestMethod		0..1	code	delete | get | options | patch | post | put
	// TestScriptRequestMethodCode (Required)
	set requestMethod(requestMethod) {
		this._requestMethod = new Code(requestMethod);
	}

	get requestMethod() {
		return this._requestMethod;
	}

	// requestURL		0..1	string	Request URL comparison value
	set requestURL(requestURL) {
		this._requestURL = requestURL;
	}

	get requestURL() {
		return this._requestURL;
	}

	// resource		0..1	code	Resource type
	// FHIRDefinedType (Required)
	set resource(resource) {
		this._resource = new Code(resource);
	}

	get resource() {
		return this._resource;
	}

	// response		0..1	code	okay | created | noContent | notModified | bad | forbidden | notFound | methodNotAllowed | conflict | gone | preconditionFailed | unprocessable
	// AssertionResponseTypes (Required)
	set response(response) {
		this._response = new Code(response);
	}

	get response() {
		return this._response;
	}

	// responseCode		0..1	string	HTTP response code to test
	set responseCode(responseCode) {
		this._responseCode = responseCode;
	}

	get responseCode() {
		return this._responseCode;
	}

	// rule		0..1	BackboneElement	The reference to a TestScript.rule
	set rule(rule) {
		this._rule = new Rule(rule);
	}

	get rule() {
		return this._rule;
	}

	// ruleset		0..1	BackboneElement	The reference to a TestScript.ruleset
	set ruleset(ruleset) {
		this._ruleset = new Ruleset(ruleset);
	}

	get ruleset() {
		return this._ruleset;
	}

	// sourceId		0..1	id	Fixture Id of source expression or headerField
	set sourceId(sourceId) {
		this._sourceId = sourceId;
	}

	get sourceId() {
		return this._sourceId;
	}

	// validateProfileId		0..1	id	Profile Id of validation profile reference
	set validateProfileId(validateProfileId) {
		this._validateProfileId = validateProfileId;
	}

	get validateProfileId() {
		return this._validateProfileId;
	}

	// value		0..1	string	The value to compare to
	set value(value) {
		this._value = value;
	}

	get value() {
		return this._value;
	}

	// warningOnly		0..1	boolean	Will this assert produce a warning only on error?
	set warningOnly(warningOnly) {
		this._warningOnly = warningOnly;
	}

	get warningOnly() {
		return this._warningOnly;
	}

	toJSON() {
		return {
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
			warningOnly: this._warningOnly,
		};
	}
}

class RequestHeader {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// field		1..1	string	HTTP header field name
	set field(field) {
		this._field = field;
	}

	get field() {
		return this._field;
	}

	// value		1..1	string	HTTP headerfield value
	set value(value) {
		this._value = value;
	}

	get value() {
		return this._value;
	}

	toJSON() {
		return {
			field: this._field,
			value: this._value,
		};
	}
}

class Operation {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// type		0..1	Coding	The operation code type that will be executed
	// TestScriptOperationCode (Extensible)
	set type(type) {
		this._type = new Coding(type);
	}

	get type() {
		return this._type;
	}

	// resource		0..1	code	Resource type
	// FHIRDefinedType (Required)
	set resource(resource) {
		this._resource = new Code(resource);
	}

	get resource() {
		return this._resource;
	}

	// label		0..1	string	Tracking/logging operation label
	set label(label) {
		this._label = label;
	}

	get label() {
		return this._label;
	}

	// description		0..1	string	Tracking/reporting operation description
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// accept		0..1	code	xml | json | ttl | none
	// ContentType (Required)
	set accept(accept) {
		this._accept = new Code(accept);
	}

	get accept() {
		return this._accept;
	}

	// contentType		0..1	code	xml | json | ttl | none
	// ContentType (Required)
	set contentType(contentType) {
		this._contentType = new Code(contentType);
	}

	get contentType() {
		return this._contentType;
	}

	// destination		0..1	integer	Server responding to the request
	set destination(destination) {
		this._destination = destination;
	}

	get destination() {
		return this._destination;
	}

	// encodeRequestUrl		0..1	boolean	Whether or not to send the request url in encoded format
	set encodeRequestUrl(encodeRequestUrl) {
		this._encodeRequestUrl = encodeRequestUrl;
	}

	get encodeRequestUrl() {
		return this._encodeRequestUrl;
	}

	// origin		0..1	integer	Server initiating the request
	set origin(origin) {
		this._origin = origin;
	}

	get origin() {
		return this._origin;
	}

	// params		0..1	string	Explicitly defined path parameters
	set params(params) {
		this._params = params;
	}

	get params() {
		return this._params;
	}

	// requestHeader		0..*	BackboneElement	Each operation can have one or more header elements
	set requestHeader(requestHeader) {
		if (Array.isArray(requestHeader)) {
			this._requestHeader = requestHeader.map((i) => new RequestHeader(i));
		} else {
			this._requestHeader = [new RequestHeader(requestHeader)];
		}
	}

	get requestHeader() {
		return this._requestHeader;
	}

	// requestId		0..1	id	Fixture Id of mapped request
	set requestId(requestId) {
		this._requestId = requestId;
	}

	get requestId() {
		return this._requestId;
	}

	// responseId		0..1	id	Fixture Id of mapped response
	set responseId(responseId) {
		this._responseId = responseId;
	}

	get responseId() {
		return this._responseId;
	}

	// sourceId		0..1	id	Fixture Id of body for PUT and POST requests
	set sourceId(sourceId) {
		this._sourceId = sourceId;
	}

	get sourceId() {
		return this._sourceId;
	}

	// targetId		0..1	id	Id of fixture used for extracting the [id], [type], and [vid] for GET requests
	set targetId(targetId) {
		this._targetId = targetId;
	}

	get targetId() {
		return this._targetId;
	}

	// url		0..1	string	Request URL
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	toJSON() {
		return {
			type: this._type,
			resource: this._resource,
			label: this._label,
			description: this._description,
			accept: this._accept,
			contentType: this._contentType,
			destination: this._destination,
			encodeRequestUrl: this._encodeRequestUrl,
			origin: this._origin,
			params: this._params,
			requestHeader: this._requestHeader,
			requestId: this._requestId,
			responseId: this._responseId,
			sourceId: this._sourceId,
			targetId: this._targetId,
			url: this._url,
		};
	}
}

class Action {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// operation	I	0..1	BackboneElement	The setup operation to perform
	// + Setup operation SHALL contain either sourceId or targetId or params or url.
	set operation(operation) {
		this._operation = new Operation(operation);
	}

	get operation() {
		return this._operation;
	}

	// assert	I	0..1	BackboneElement	The assertion to perform
	// + Only a single assertion SHALL be present within setup action assert element.
	// + Setup action assert SHALL contain either compareToSourceId and compareToSourceExpression, compareToSourceId and compareToSourcePath or neither.
	// + Setup action assert response and responseCode SHALL be empty when direction equals request
	set assert(assert) {
		this._assert = new Assert(assert);
	}

	get assert() {
		return this._assert;
	}

	toJSON() {
		return {
			operation: this._operation,
			assert: this._assert,
		};
	}
}

class Setup {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// action	I	1..*	BackboneElement	A setup operation or assert to perform
	// + Setup action SHALL contain either an operation or assert but not both.
	set action(action) {
		if (Array.isArray(action)) {
			this._action = action.map((i) => new Action(i));
		} else {
			this._action = [new Action(action)];
		}
	}

	get action() {
		return this._action;
	}

	toJSON() {
		return {
			action: this._action,
		};
	}
}

class TestScript extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'TestScript';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// url	Σ	1..1	uri	Logical URI to reference this test script (globally unique)
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	// identifier	Σ	0..1	Identifier	Additional identifier for the test script
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// version	Σ	0..1	string	Business version of the test script
	set version(version) {
		this._version = version;
	}

	get version() {
		return this._version;
	}

	// name	Σ	1..1	string	Name for this test script (computer friendly)
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// title	Σ	0..1	string	Name for this test script (human friendly)
	set title(title) {
		this._title = title;
	}

	get title() {
		return this._title;
	}

	// status	?!Σ	1..1	code	draft | active | retired | unknown
	// PublicationStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// experimental	?!Σ	0..1	boolean	For testing purposes, not real usage
	set experimental(experimental) {
		this._experimental = experimental;
	}

	get experimental() {
		return this._experimental;
	}

	// date	Σ	0..1	dateTime	Date this was last changed
	set date(date) {
		this._date = date;
	}

	get date() {
		return this._date;
	}

	// publisher	Σ	0..1	string	Name of the publisher (organization or individual)
	set publisher(publisher) {
		this._publisher = publisher;
	}

	get publisher() {
		return this._publisher;
	}

	// contact	Σ	0..*	ContactDetail	Contact details for the publisher
	set contact(contact) {
		if (Array.isArray(contact)) {
			this._contact = contact.map((i) => new ContactDetail(i));
		} else {
			this._contact = [new ContactDetail(contact)];
		}
	}

	get contact() {
		return this._contact;
	}

	// description		0..1	markdown	Natural language description of the test script
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// useContext	Σ	0..*	UsageContext	Context the content is intended to support
	set useContext(useContext) {
		if (Array.isArray(useContext)) {
			this._useContext = useContext.map((i) => new UsageContext(i));
		} else {
			this._useContext = [new UsageContext(useContext)];
		}
	}

	get useContext() {
		return this._useContext;
	}

	// jurisdiction	Σ	0..*	CodeableConcept	Intended jurisdiction for test script (if applicable)
	// Jurisdiction ValueSet (Extensible)
	set jurisdiction(jurisdiction) {
		if (Array.isArray(jurisdiction)) {
			this._jurisdiction = jurisdiction.map((i) => new CodeableConcept(i));
		} else {
			this._jurisdiction = [new CodeableConcept(jurisdiction)];
		}
	}

	get jurisdiction() {
		return this._jurisdiction;
	}

	// purpose		0..1	markdown	Why this test script is defined
	set purpose(purpose) {
		this._purpose = purpose;
	}

	get purpose() {
		return this._purpose;
	}

	// copyright		0..1	markdown	Use and/or publishing restrictions
	set copyright(copyright) {
		this._copyright = copyright;
	}

	get copyright() {
		return this._copyright;
	}

	// origin		0..*	BackboneElement	An abstract server representing a client or sender in a message exchange
	set origin(origin) {
		if (Array.isArray(origin)) {
			this._origin = origin.map((i) => new Origin(i));
		} else {
			this._origin = [new Origin(origin)];
		}
	}

	get origin() {
		return this._origin;
	}

	// destination		0..*	BackboneElement	An abstract server representing a destination or receiver in a message exchange
	set destination(destination) {
		if (Array.isArray(destination)) {
			this._destination = destination.map((i) => new Destination(i));
		} else {
			this._destination = [new Destination(destination)];
		}
	}

	get destination() {
		return this._destination;
	}

	// metadata	I	0..1	BackboneElement	Required capability that is assumed to function correctly on the FHIR server being tested
	// + TestScript metadata capability SHALL contain required or validated or both.
	set metadata(metadata) {
		this._metadata = new Metadata(metadata);
	}

	get metadata() {
		return this._metadata;
	}

	// fixture		0..*	BackboneElement	Fixture in the test script - by reference (uri)
	set fixture(fixture) {
		if (Array.isArray(fixture)) {
			this._fixture = fixture.map((i) => new Fixture(i));
		} else {
			this._fixture = [new Fixture(fixture)];
		}
	}

	get fixture() {
		return this._fixture;
	}

	// profile		0..*	Reference(Any)	Reference of the validation profile
	set profile(profile) {
		if (Array.isArray(profile)) {
			this._profile = profile.map((i) => new Reference(i));
		} else {
			this._profile = [new Reference(profile)];
		}
	}

	get profile() {
		return this._profile;
	}

	// variable	I	0..*	BackboneElement	Placeholder for evaluated elements
	// + Variable can only contain one of expression, headerField or path.
	set variable(variable) {
		if (Array.isArray(variable)) {
			this._variable = variable.map((i) => new Variable(i));
		} else {
			this._variable = [new Variable(variable)];
		}
	}

	get variable() {
		return this._variable;
	}

	// rule		0..*	BackboneElement	Assert rule used within the test script
	set rule(rule) {
		if (Array.isArray(rule)) {
			this._rule = rule.map((i) => new Rule(i));
		} else {
			this._rule = [new Rule(rule)];
		}
	}

	get rule() {
		return this._rule;
	}

	// ruleset		0..*	BackboneElement	Assert ruleset used within the test script
	set ruleset(ruleset) {
		if (Array.isArray(ruleset)) {
			this._ruleset = ruleset.map((i) => new Ruleset(i));
		} else {
			this._ruleset = [new Ruleset(ruleset)];
		}
	}

	get ruleset() {
		return this._ruleset;
	}

	// setup		0..1	BackboneElement	A series of required setup operations before tests are executed
	set setup(setup) {
		this._setup = new Setup(setup);
	}

	get setup() {
		return this._setup;
	}

	// test		0..*	BackboneElement	A test in this script
	set test(test) {
		if (Array.isArray(test)) {
			this._test = test.map((i) => new Test(i));
		} else {
			this._test = [new Test(test)];
		}
	}

	get test() {
		return this._test;
	}

	// teardown		0..1	BackboneElement	A series of required clean up steps
	set teardown(teardown) {
		this._teardown = new Teardown(teardown);
	}

	get teardown() {
		return this._teardown;
	}

	toJSON() {
		const json = {
			url: this._url,
			identifier: this._identifier,
			version: this._version,
			name: this._name,
			title: this._title,
			status: this._status,
			experimental: this._experimental,
			date: this._date,
			publisher: this._publisher,
			contact: this._contact,
			description: this._description,
			useContext: this._useContext,
			jurisdiction: this._jurisdiction,
			purpose: this._purpose,
			copyright: this._copyright,
			origin: this._origin,
			destination: this._destination,
			metadata: this._metadata,
			fixture: this._fixture,
			profile: this._profile,
			variable: this._variable,
			rule: this._rule,
			ruleset: this._ruleset,
			setup: this._setup,
			test: this._test,
			teardown: this._teardown,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.TestScript = TestScript;
module.exports.Setup = Setup;
module.exports.Action = Action;
module.exports.Operation = Operation;
module.exports.RequestHeader = RequestHeader;
module.exports.Assert = Assert;
module.exports.Test = Test;
module.exports.Action = Action;
module.exports.Teardown = Teardown;
module.exports.Origin = Origin;
module.exports.Destination = Destination;
module.exports.Link = Link;
module.exports.Capability = Capability;
module.exports.Metadata = Metadata;
module.exports.Fixture = Fixture;
module.exports.Variable = Variable;
module.exports.Param = Param;
module.exports.Rule = Rule;
module.exports.Ruleset = Ruleset;
