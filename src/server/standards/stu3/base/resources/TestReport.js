const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Code = require('../types/Code');
const Reference = require('../types/Reference');

class Action {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// operation		1..1	see operation	The teardown operation performed
	set operation(operation) {
		this._operation = operation;
	}

	get operation() {
		return this._operation;
	}

	toJSON() {
		return {
			operation: this._operation,
		};
	}
}

class Teardown {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// action		1..*	BackboneElement	One or more teardown operations performed
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

	// action	I	1..*	BackboneElement	A test operation or assert that was performed
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

	// result		1..1	code	pass | skip | fail | warning | error
	// TestReportActionResult (Required)
	set result(result) {
		this._result = new Code(result);
	}

	get result() {
		return this._result;
	}

	// message		0..1	markdown	A message associated with the result
	set message(message) {
		this._message = message;
	}

	get message() {
		return this._message;
	}

	// detail		0..1	string	A link to further details on the result
	set detail(detail) {
		this._detail = detail;
	}

	get detail() {
		return this._detail;
	}

	toJSON() {
		return {
			result: this._result,
			message: this._message,
			detail: this._detail,
		};
	}
}

class Operation {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// result		1..1	code	pass | skip | fail | warning | error
	// TestReportActionResult (Required)
	set result(result) {
		this._result = new Code(result);
	}

	get result() {
		return this._result;
	}

	// message		0..1	markdown	A message associated with the result
	set message(message) {
		this._message = message;
	}

	get message() {
		return this._message;
	}

	// detail		0..1	uri	A link to further details on the result
	set detail(detail) {
		this._detail = detail;
	}

	get detail() {
		return this._detail;
	}

	toJSON() {
		return {
			result: this._result,
			message: this._message,
			detail: this._detail,
		};
	}
}

class Setup {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// action	I	1..*	BackboneElement	A setup operation or assert that was executed
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

class Participant {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// type		1..1	code	test-engine | client | server
	// TestReportParticipantType (Required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// uri		1..1	uri	The uri of the participant. An absolute URL is preferred
	set uri(uri) {
		this._uri = uri;
	}

	get uri() {
		return this._uri;
	}

	// display		0..1	string	The display name of the participant
	set display(display) {
		this._display = display;
	}

	get display() {
		return this._display;
	}

	toJSON() {
		return {
			type: this._type,
			uri: this._uri,
			display: this._display,
		};
	}
}

class TestReport extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'TestReport';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..1	Identifier	External identifier
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// name	Σ	0..1	string	Informal name of the executed TestScript
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// status	?!Σ	1..1	code	completed | in-progress | waiting | stopped | entered-in-error
	// TestReportStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// testScript	Σ	1..1	Reference(TestScript)	Reference to the version-specific TestScript that was executed to produce this TestReport
	set testScript(testScript) {
		this._testScript = new Reference(testScript);
	}

	get testScript() {
		return this._testScript;
	}

	// result	Σ	1..1	code	pass | fail | pending
	// TestReportResult (Required)
	set result(result) {
		this._result = new Code(result);
	}

	get result() {
		return this._result;
	}

	// score	Σ	0..1	decimal	The final score (percentage of tests passed) resulting from the execution of the TestScript
	set score(score) {
		this._score = score;
	}

	get score() {
		return this._score;
	}

	// tester	Σ	0..1	string	Name of the tester producing this report (Organization or individual)
	set tester(tester) {
		this._tester = tester;
	}

	get tester() {
		return this._tester;
	}

	// issued	Σ	0..1	dateTime	When the TestScript was executed and this TestReport was generated
	set issued(issued) {
		this._issued = issued;
	}

	get issued() {
		return this._issued;
	}

	// participant		0..*	BackboneElement	A participant in the test execution, either the execution engine, a client, or a server
	set participant(participant) {
		if (Array.isArray(participant)) {
			this._participant = participant.map((i) => new Participant(i));
		} else {
			this._participant = [new Participant(participant)];
		}
	}

	get participant() {
		return this._participant;
	}

	// setup		0..1	BackboneElement	The results of the series of required setup operations before the tests were executed
	set setup(setup) {
		this._setup = new Setup(setup);
	}

	get setup() {
		return this._setup;
	}

	// test		0..*	BackboneElement	A test executed from the test script
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

	// teardown		0..1	BackboneElement	The results of running the series of required clean up steps
	set teardown(teardown) {
		this._teardown = new Teardown(teardown);
	}

	get teardown() {
		return this._teardown;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			name: this._name,
			status: this._status,
			testScript: this._testScript,
			result: this._result,
			score: this._score,
			tester: this._tester,
			issued: this._issued,
			participant: this._participant,
			setup: this._setup,
			test: this._test,
			teardown: this._teardown,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.TestReport = TestReport;
module.exports.Participant = Participant;
module.exports.Setup = Setup;
module.exports.Operation = Operation;
module.exports.Assert = Assert;
module.exports.Test = Test;
module.exports.Action = Action;
module.exports.Teardown = Teardown;
module.exports.Action = Action;
