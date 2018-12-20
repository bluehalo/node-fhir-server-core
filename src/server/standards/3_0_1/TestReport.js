const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class TestReport extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TestReport';
		Object.assign(this, opt);
	}

	// This is a TestReport resource
	static get __resourceType() {
		return 'TestReport';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__TestReport = new_value;
	}

	// Identifier for the TestScript assigned for external purposes outside the context of FHIR.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// A free text natural language name identifying the executed TestScript.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// The current state of this test report.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// Ideally this is an absolute URL that is used to identify the version-specific TestScript that was executed, matching the `TestScript.url`.
	get testScript() {
		return this.__testScript;
	}

	set testScript(new_value) {
		const Reference = require('./Reference');
		this.__testScript = new Reference(new_value);
	}

	// The overall result from the execution of the TestScript.
	get result() {
		return this.__result;
	}

	set result(new_value) {
		this.__result = new_value;
	}

	// The final score (percentage of tests passed) resulting from the execution of the TestScript.
	get score() {
		return this.__score;
	}

	set score(new_value) {
		this.__score = new_value;
	}

	// Name of the tester producing this report (Organization or individual).
	get tester() {
		return this.__tester;
	}

	set tester(new_value) {
		this.__tester = new_value;
	}

	// When the TestScript was executed and this TestReport was generated.
	get issued() {
		return this.__issued;
	}

	set issued(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field issued`);
		}
		this.__issued = new_value;
	}

	// A participant in the test execution, either the execution engine, a client, or a server.
	get participant() {
		return this.__participant;
	}

	set participant(new_value) {
		const TestReportParticipant = require('./TestReportParticipant');
		this.__participant = Array.isArray(new_value)
			? new_value.map(val => new TestReportParticipant(val))
			: [new TestReportParticipant(new_value)];
	}

	// The results of the series of required setup operations before the tests were executed.
	get setup() {
		return this.__setup;
	}

	set setup(new_value) {
		const TestReportSetup = require('./TestReportSetup');
		this.__setup = new TestReportSetup(new_value);
	}

	// A test executed from the test script.
	get test() {
		return this.__test;
	}

	set test(new_value) {
		const TestReportTest = require('./TestReportTest');
		this.__test = Array.isArray(new_value)
			? new_value.map(val => new TestReportTest(val))
			: [new TestReportTest(new_value)];
	}

	// The results of the series of operations required to clean up after the all the tests were executed (successfully or otherwise).
	get teardown() {
		return this.__teardown;
	}

	set teardown(new_value) {
		const TestReportTeardown = require('./TestReportTeardown');
		this.__teardown = new TestReportTeardown(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.toJSON(),
			name: this.__name,
			status: this.__status,
			testScript: this.__testScript && this.__testScript.toJSON(),
			result: this.__result,
			score: this.__score,
			tester: this.__tester,
			issued: this.__issued,
			participant: this.__participant && this.__participant.map(v => v.toJSON()),
			setup: this.__setup && this.__setup.toJSON(),
			test: this.__test && this.__test.map(v => v.toJSON()),
			teardown: this.__teardown && this.__teardown.toJSON(),
		});
	}
}

module.exports = TestReport;
