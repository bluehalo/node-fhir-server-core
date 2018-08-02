const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const ContactDetail = require('./ContactDetail');
const UsageContext = require('./UsageContext');
const CodeableConcept = require('./CodeableConcept');
const TestScript_Origin = require('./TestScript_Origin');
const TestScript_Destination = require('./TestScript_Destination');
const TestScript_Metadata = require('./TestScript_Metadata');
const TestScript_Fixture = require('./TestScript_Fixture');
const Reference = require('./Reference');
const TestScript_Variable = require('./TestScript_Variable');
const TestScript_Rule = require('./TestScript_Rule');
const TestScript_Ruleset = require('./TestScript_Ruleset');
const TestScript_Setup = require('./TestScript_Setup');
const TestScript_Test = require('./TestScript_Test');
const TestScript_Teardown = require('./TestScript_Teardown');

class TestScript extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'TestScript';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'TestScript';
	}

	// This is a TestScript resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['TestScript'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// An absolute URI that is used to identify this test script when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this test script is (or will be) published. The URL SHOULD include the major version of the test script. For more information see [Technical and Business Versions](resource.html#versions).
	get url () {
		return this._url;
	}

	set url ( new_value ) {
		this._url = new_value;
	}

	// A formal identifier that is used to identify this test script when it is represented in other formats, or referenced in a specification, model, design or an instance.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	// The identifier that is used to identify this version of the test script when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the test script author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
	get version () {
		return this._version;
	}

	set version ( new_value ) {
		this._version = new_value;
	}

	// A natural language name identifying the test script. This name should be usable as an identifier for the module by machine processing applications such as code generation.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// A short, descriptive, user-friendly title for the test script.
	get title () {
		return this._title;
	}

	set title ( new_value ) {
		this._title = new_value;
	}

	// The status of this test script. Enables tracking the life-cycle of the content.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['draft', 'active', 'retired', 'unknown'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// A boolean value to indicate that this test script is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
	get experimental () {
		return this._experimental;
	}

	set experimental ( new_value ) {
		this._experimental = new_value;
	}

	// The date  (and optionally time) when the test script was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the test script changes.
	get date () {
		return this._date;
	}

	set date ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this._date = new_value;
	}

	// The name of the individual or organization that published the test script.
	get publisher () {
		return this._publisher;
	}

	set publisher ( new_value ) {
		this._publisher = new_value;
	}

	// Contact details to assist a user in finding and communicating with the publisher.
	get contact () {
		return this._contact;
	}

	set contact ( new_value ) {
		this._contact = Array.isArray(new_value) ? new_value.map(val => new ContactDetail(val)) : [new ContactDetail(new_value)];
	}

	// A free text natural language description of the test script from a consumer's perspective.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate test script instances.
	get useContext () {
		return this._useContext;
	}

	set useContext ( new_value ) {
		this._useContext = Array.isArray(new_value) ? new_value.map(val => new UsageContext(val)) : [new UsageContext(new_value)];
	}

	// A legal or geographic region in which the test script is intended to be used.
	get jurisdiction () {
		return this._jurisdiction;
	}

	set jurisdiction ( new_value ) {
		this._jurisdiction = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Explaination of why this test script is needed and why it has been designed as it has.
	get purpose () {
		return this._purpose;
	}

	set purpose ( new_value ) {
		this._purpose = new_value;
	}

	// A copyright statement relating to the test script and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the test script.
	get copyright () {
		return this._copyright;
	}

	set copyright ( new_value ) {
		this._copyright = new_value;
	}

	// An abstract server used in operations within this test script in the origin element.
	get origin () {
		return this._origin;
	}

	set origin ( new_value ) {
		this._origin = Array.isArray(new_value) ? new_value.map(val => new TestScript_Origin(val)) : [new TestScript_Origin(new_value)];
	}

	// An abstract server used in operations within this test script in the destination element.
	get destination () {
		return this._destination;
	}

	set destination ( new_value ) {
		this._destination = Array.isArray(new_value) ? new_value.map(val => new TestScript_Destination(val)) : [new TestScript_Destination(new_value)];
	}

	// The required capability must exist and are assumed to function correctly on the FHIR server being tested.
	get metadata () {
		return this._metadata;
	}

	set metadata ( new_value ) {
		this._metadata = new TestScript_Metadata(new_value);
	}

	// Fixture in the test script - by reference (uri). All fixtures are required for the test script to execute.
	get fixture () {
		return this._fixture;
	}

	set fixture ( new_value ) {
		this._fixture = Array.isArray(new_value) ? new_value.map(val => new TestScript_Fixture(val)) : [new TestScript_Fixture(new_value)];
	}

	// Reference to the profile to be used for validation.
	get profile () {
		return this._profile;
	}

	set profile ( new_value ) {
		this._profile = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Variable is set based either on element value in response body or on header field value in the response headers.
	get variable () {
		return this._variable;
	}

	set variable ( new_value ) {
		this._variable = Array.isArray(new_value) ? new_value.map(val => new TestScript_Variable(val)) : [new TestScript_Variable(new_value)];
	}

	// Assert rule to be used in one or more asserts within the test script.
	get rule () {
		return this._rule;
	}

	set rule ( new_value ) {
		this._rule = Array.isArray(new_value) ? new_value.map(val => new TestScript_Rule(val)) : [new TestScript_Rule(new_value)];
	}

	// Contains one or more rules.  Offers a way to group rules so assertions could reference the group of rules and have them all applied.
	get ruleset () {
		return this._ruleset;
	}

	set ruleset ( new_value ) {
		this._ruleset = Array.isArray(new_value) ? new_value.map(val => new TestScript_Ruleset(val)) : [new TestScript_Ruleset(new_value)];
	}

	// A series of required setup operations before tests are executed.
	get setup () {
		return this._setup;
	}

	set setup ( new_value ) {
		this._setup = new TestScript_Setup(new_value);
	}

	// A test in this script.
	get test () {
		return this._test;
	}

	set test ( new_value ) {
		this._test = Array.isArray(new_value) ? new_value.map(val => new TestScript_Test(val)) : [new TestScript_Test(new_value)];
	}

	// A series of operations required to clean up after the all the tests are executed (successfully or otherwise).
	get teardown () {
		return this._teardown;
	}

	set teardown ( new_value ) {
		this._teardown = new TestScript_Teardown(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			url: this._url,
			identifier: this._identifier && this._identifier.toJSON(),
			version: this._version,
			name: this._name,
			title: this._title,
			status: this._status,
			experimental: this._experimental,
			date: this._date,
			publisher: this._publisher,
			contact: this._contact && this._contact.map(v => v.toJSON()),
			description: this._description,
			useContext: this._useContext && this._useContext.map(v => v.toJSON()),
			jurisdiction: this._jurisdiction && this._jurisdiction.map(v => v.toJSON()),
			purpose: this._purpose,
			copyright: this._copyright,
			origin: this._origin && this._origin.map(v => v.toJSON()),
			destination: this._destination && this._destination.map(v => v.toJSON()),
			metadata: this._metadata && this._metadata.toJSON(),
			fixture: this._fixture && this._fixture.map(v => v.toJSON()),
			profile: this._profile && this._profile.map(v => v.toJSON()),
			variable: this._variable && this._variable.map(v => v.toJSON()),
			rule: this._rule && this._rule.map(v => v.toJSON()),
			ruleset: this._ruleset && this._ruleset.map(v => v.toJSON()),
			setup: this._setup && this._setup.toJSON(),
			test: this._test && this._test.map(v => v.toJSON()),
			teardown: this._teardown && this._teardown.toJSON()
		});
	}

}

module.exports = TestScript;
