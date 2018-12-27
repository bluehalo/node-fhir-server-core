const DomainResource = require('./DomainResource');
const UriScalar = require('./scalars/Uri.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class TestScript extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TestScript';
		Object.assign(this, opt);
	}

	// This is a TestScript resource
	static get __resourceType() {
		return 'TestScript';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__TestScript = new_value;
	}

	// An absolute URI that is used to identify this test script when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this test script is (or will be) published. The URL SHOULD include the major version of the test script. For more information see [Technical and Business Versions](resource.html#versions).
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

	// A formal identifier that is used to identify this test script when it is represented in other formats, or referenced in a specification, model, design or an instance.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// The identifier that is used to identify this version of the test script when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the test script author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
	get version() {
		return this.__version;
	}

	set version(new_value) {
		this.__version = new_value;
	}

	// A natural language name identifying the test script. This name should be usable as an identifier for the module by machine processing applications such as code generation.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// A short, descriptive, user-friendly title for the test script.
	get title() {
		return this.__title;
	}

	set title(new_value) {
		this.__title = new_value;
	}

	// The status of this test script. Enables tracking the life-cycle of the content.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// A boolean value to indicate that this test script is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
	get experimental() {
		return this.__experimental;
	}

	set experimental(new_value) {
		this.__experimental = new_value;
	}

	// The date  (and optionally time) when the test script was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the test script changes.
	get date() {
		return this.__date;
	}

	set date(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this.__date = new_value;
	}

	// The name of the individual or organization that published the test script.
	get publisher() {
		return this.__publisher;
	}

	set publisher(new_value) {
		this.__publisher = new_value;
	}

	// Contact details to assist a user in finding and communicating with the publisher.
	get contact() {
		return this.__contact;
	}

	set contact(new_value) {
		const ContactDetail = require('./ContactDetail');
		this.__contact = Array.isArray(new_value)
			? new_value.map(val => new ContactDetail(val))
			: [new ContactDetail(new_value)];
	}

	// A free text natural language description of the test script from a consumer\'s perspective.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate test script instances.
	get useContext() {
		return this.__useContext;
	}

	set useContext(new_value) {
		const UsageContext = require('./UsageContext');
		this.__useContext = Array.isArray(new_value)
			? new_value.map(val => new UsageContext(val))
			: [new UsageContext(new_value)];
	}

	// A legal or geographic region in which the test script is intended to be used.
	get jurisdiction() {
		return this.__jurisdiction;
	}

	set jurisdiction(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__jurisdiction = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Explaination of why this test script is needed and why it has been designed as it has.
	get purpose() {
		return this.__purpose;
	}

	set purpose(new_value) {
		this.__purpose = new_value;
	}

	// A copyright statement relating to the test script and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the test script.
	get copyright() {
		return this.__copyright;
	}

	set copyright(new_value) {
		this.__copyright = new_value;
	}

	// An abstract server used in operations within this test script in the origin element.
	get origin() {
		return this.__origin;
	}

	set origin(new_value) {
		const TestScriptOrigin = require('./TestScriptOrigin');
		this.__origin = Array.isArray(new_value)
			? new_value.map(val => new TestScriptOrigin(val))
			: [new TestScriptOrigin(new_value)];
	}

	// An abstract server used in operations within this test script in the destination element.
	get destination() {
		return this.__destination;
	}

	set destination(new_value) {
		const TestScriptDestination = require('./TestScriptDestination');
		this.__destination = Array.isArray(new_value)
			? new_value.map(val => new TestScriptDestination(val))
			: [new TestScriptDestination(new_value)];
	}

	// The required capability must exist and are assumed to function correctly on the FHIR server being tested.
	get metadata() {
		return this.__metadata;
	}

	set metadata(new_value) {
		const TestScriptMetadata = require('./TestScriptMetadata');
		this.__metadata = new TestScriptMetadata(new_value);
	}

	// Fixture in the test script - by reference (uri). All fixtures are required for the test script to execute.
	get fixture() {
		return this.__fixture;
	}

	set fixture(new_value) {
		const TestScriptFixture = require('./TestScriptFixture');
		this.__fixture = Array.isArray(new_value)
			? new_value.map(val => new TestScriptFixture(val))
			: [new TestScriptFixture(new_value)];
	}

	// Reference to the profile to be used for validation.
	get profile() {
		return this.__profile;
	}

	set profile(new_value) {
		const Reference = require('./Reference');
		this.__profile = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Variable is set based either on element value in response body or on header field value in the response headers.
	get variable() {
		return this.__variable;
	}

	set variable(new_value) {
		const TestScriptVariable = require('./TestScriptVariable');
		this.__variable = Array.isArray(new_value)
			? new_value.map(val => new TestScriptVariable(val))
			: [new TestScriptVariable(new_value)];
	}

	// Assert rule to be used in one or more asserts within the test script.
	get rule() {
		return this.__rule;
	}

	set rule(new_value) {
		const TestScriptRule = require('./TestScriptRule');
		this.__rule = Array.isArray(new_value)
			? new_value.map(val => new TestScriptRule(val))
			: [new TestScriptRule(new_value)];
	}

	// Contains one or more rules.  Offers a way to group rules so assertions could reference the group of rules and have them all applied.
	get ruleset() {
		return this.__ruleset;
	}

	set ruleset(new_value) {
		const TestScriptRuleset = require('./TestScriptRuleset');
		this.__ruleset = Array.isArray(new_value)
			? new_value.map(val => new TestScriptRuleset(val))
			: [new TestScriptRuleset(new_value)];
	}

	// A series of required setup operations before tests are executed.
	get setup() {
		return this.__setup;
	}

	set setup(new_value) {
		const TestScriptSetup = require('./TestScriptSetup');
		this.__setup = new TestScriptSetup(new_value);
	}

	// A test in this script.
	get test() {
		return this.__test;
	}

	set test(new_value) {
		const TestScriptTest = require('./TestScriptTest');
		this.__test = Array.isArray(new_value)
			? new_value.map(val => new TestScriptTest(val))
			: [new TestScriptTest(new_value)];
	}

	// A series of operations required to clean up after the all the tests are executed (successfully or otherwise).
	get teardown() {
		return this.__teardown;
	}

	set teardown(new_value) {
		const TestScriptTeardown = require('./TestScriptTeardown');
		this.__teardown = new TestScriptTeardown(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			url: this.__url,
			identifier: this.__identifier && this.__identifier.toJSON(),
			version: this.__version,
			name: this.__name,
			title: this.__title,
			status: this.__status,
			experimental: this.__experimental,
			date: this.__date,
			publisher: this.__publisher,
			contact: this.__contact && this.__contact.map(v => v.toJSON()),
			description: this.__description,
			useContext: this.__useContext && this.__useContext.map(v => v.toJSON()),
			jurisdiction: this.__jurisdiction && this.__jurisdiction.map(v => v.toJSON()),
			purpose: this.__purpose,
			copyright: this.__copyright,
			origin: this.__origin && this.__origin.map(v => v.toJSON()),
			destination: this.__destination && this.__destination.map(v => v.toJSON()),
			metadata: this.__metadata && this.__metadata.toJSON(),
			fixture: this.__fixture && this.__fixture.map(v => v.toJSON()),
			profile: this.__profile && this.__profile.map(v => v.toJSON()),
			variable: this.__variable && this.__variable.map(v => v.toJSON()),
			rule: this.__rule && this.__rule.map(v => v.toJSON()),
			ruleset: this.__ruleset && this.__ruleset.map(v => v.toJSON()),
			setup: this.__setup && this.__setup.toJSON(),
			test: this.__test && this.__test.map(v => v.toJSON()),
			teardown: this.__teardown && this.__teardown.toJSON(),
		});
	}
}

module.exports = TestScript;
