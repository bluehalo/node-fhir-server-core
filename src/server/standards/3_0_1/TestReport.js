const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const TestReport_Participant = require('./TestReport_Participant');
const TestReport_Setup = require('./TestReport_Setup');
const TestReport_Test = require('./TestReport_Test');
const TestReport_Teardown = require('./TestReport_Teardown');

class TestReport extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'TestReport';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'TestReport';
	}

	// This is a TestReport resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['TestReport'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Identifier for the TestScript assigned for external purposes outside the context of FHIR.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	// A free text natural language name identifying the executed TestScript.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// The current state of this test report.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['completed', 'in-progress', 'waiting', 'stopped', 'entered-in-error'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// Ideally this is an absolute URL that is used to identify the version-specific TestScript that was executed, matching the `TestScript.url`.
	get testScript () {
		return this._testScript;
	}

	set testScript ( new_value ) {
		this._testScript = new Reference(new_value);
	}

	// The overall result from the execution of the TestScript.
	get result () {
		return this._result;
	}

	set result ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['pass', 'fail', 'pending'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field result`);
		}
		this._result = new_value;
	}

	// The final score (percentage of tests passed) resulting from the execution of the TestScript.
	get score () {
		return this._score;
	}

	set score ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field score`);
		}
		this._score = new_value;
	}

	// Name of the tester producing this report (Organization or individual).
	get tester () {
		return this._tester;
	}

	set tester ( new_value ) {
		this._tester = new_value;
	}

	// When the TestScript was executed and this TestReport was generated.
	get issued () {
		return this._issued;
	}

	set issued ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field issued`);
		}
		this._issued = new_value;
	}

	// A participant in the test execution, either the execution engine, a client, or a server.
	get participant () {
		return this._participant;
	}

	set participant ( new_value ) {
		this._participant = Array.isArray(new_value) ? new_value.map(val => new TestReport_Participant(val)) : [new TestReport_Participant(new_value)];
	}

	// The results of the series of required setup operations before the tests were executed.
	get setup () {
		return this._setup;
	}

	set setup ( new_value ) {
		this._setup = new TestReport_Setup(new_value);
	}

	// A test executed from the test script.
	get test () {
		return this._test;
	}

	set test ( new_value ) {
		this._test = Array.isArray(new_value) ? new_value.map(val => new TestReport_Test(val)) : [new TestReport_Test(new_value)];
	}

	// The results of the series of operations required to clean up after the all the tests were executed (successfully or otherwise).
	get teardown () {
		return this._teardown;
	}

	set teardown ( new_value ) {
		this._teardown = new TestReport_Teardown(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier && this._identifier.toJSON(),
			name: this._name,
			status: this._status,
			testScript: this._testScript && this._testScript.toJSON(),
			result: this._result,
			score: this._score,
			tester: this._tester,
			issued: this._issued,
			participant: this._participant && this._participant.map(v => v.toJSON()),
			setup: this._setup && this._setup.toJSON(),
			test: this._test && this._test.map(v => v.toJSON()),
			teardown: this._teardown && this._teardown.toJSON()
		});
	}

}

module.exports = TestReport;
