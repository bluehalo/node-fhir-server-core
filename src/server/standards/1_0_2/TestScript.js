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

	// An absolute URL that is used to identify this Test Script. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this Test Script is (or will be) published.
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

	// The identifier that is used to identify this version of the TestScript. This is an arbitrary value managed by the TestScript author manually.
	get version() {
		return this.__version;
	}

	set version(new_value) {
		this.__version = new_value;
	}

	// A free text natural language name identifying the TestScript.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// The status of the TestScript.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// Identifier for the TestScript assigned for external purposes outside the context of FHIR.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// This TestScript was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
	get experimental() {
		return this.__experimental;
	}

	set experimental(new_value) {
		this.__experimental = new_value;
	}

	// The name of the individual or organization that published the Test Script.
	get publisher() {
		return this.__publisher;
	}

	set publisher(new_value) {
		this.__publisher = new_value;
	}

	// Contacts to assist a user in finding and communicating with the publisher.
	get contact() {
		return this.__contact;
	}

	set contact(new_value) {
		const TestScriptContact = require('./TestScriptContact');
		this.__contact = Array.isArray(new_value)
			? new_value.map(val => new TestScriptContact(val))
			: [new TestScriptContact(new_value)];
	}

	// The date this version of the test tcript was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the test cases change.
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

	// A free text natural language description of the TestScript and its use.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of Test Scripts.
	get useContext() {
		return this.__useContext;
	}

	set useContext(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__useContext = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Explains why this Test Script is needed and why it\'s been constrained as it has.
	get requirements() {
		return this.__requirements;
	}

	set requirements(new_value) {
		this.__requirements = new_value;
	}

	// A copyright statement relating to the Test Script and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the constraints and mappings.
	get copyright() {
		return this.__copyright;
	}

	set copyright(new_value) {
		this.__copyright = new_value;
	}

	// The required capability must exist and are assumed to function correctly on the FHIR server being tested.
	get metadata() {
		return this.__metadata;
	}

	set metadata(new_value) {
		const TestScriptMetadata = require('./TestScriptMetadata');
		this.__metadata = new TestScriptMetadata(new_value);
	}

	// If the tests apply to more than one FHIR server (e.g. cross-server interoperability tests) then multiserver=true. Defaults to false if value is unspecified.
	get multiserver() {
		return this.__multiserver;
	}

	set multiserver(new_value) {
		this.__multiserver = new_value;
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
			version: this.__version,
			name: this.__name,
			status: this.__status,
			identifier: this.__identifier && this.__identifier.toJSON(),
			experimental: this.__experimental,
			publisher: this.__publisher,
			contact: this.__contact && this.__contact.map(v => v.toJSON()),
			date: this.__date,
			description: this.__description,
			useContext: this.__useContext && this.__useContext.map(v => v.toJSON()),
			requirements: this.__requirements,
			copyright: this.__copyright,
			metadata: this.__metadata && this.__metadata.toJSON(),
			multiserver: this.__multiserver,
			fixture: this.__fixture && this.__fixture.map(v => v.toJSON()),
			profile: this.__profile && this.__profile.map(v => v.toJSON()),
			variable: this.__variable && this.__variable.map(v => v.toJSON()),
			setup: this.__setup && this.__setup.toJSON(),
			test: this.__test && this.__test.map(v => v.toJSON()),
			teardown: this.__teardown && this.__teardown.toJSON(),
		});
	}
}

module.exports = TestScript;
