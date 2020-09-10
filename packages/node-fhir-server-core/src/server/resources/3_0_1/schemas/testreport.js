/**
 * @name exports
 * @summary TestReport Class
 */
module.exports = class TestReport {
	constructor(opts) {
		// Create an object to store all props
		Object.defineProperty(this, '__data', { value: {} });

		// Define getters and setters as enumerable

		Object.defineProperty(this, '_id', {
			enumerable: true,
			get: () => this.__data._id,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._id = new Element(value);
			},
		});

		Object.defineProperty(this, 'id', {
			enumerable: true,
			get: () => this.__data.id,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.id = value;
			},
		});

		Object.defineProperty(this, 'meta', {
			enumerable: true,
			get: () => this.__data.meta,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Meta = require('./meta.js');
				this.__data.meta = new Meta(value);
			},
		});

		Object.defineProperty(this, '_implicitRules', {
			enumerable: true,
			get: () => this.__data._implicitRules,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._implicitRules = new Element(value);
			},
		});

		Object.defineProperty(this, 'implicitRules', {
			enumerable: true,
			get: () => this.__data.implicitRules,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.implicitRules = value;
			},
		});

		Object.defineProperty(this, '_language', {
			enumerable: true,
			get: () => this.__data._language,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._language = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
		Object.defineProperty(this, 'language', {
			enumerable: true,
			get: () => this.__data.language,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.language = value;
			},
		});

		Object.defineProperty(this, 'text', {
			enumerable: true,
			get: () => this.__data.text,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Narrative = require('./narrative.js');
				this.__data.text = new Narrative(value);
			},
		});

		Object.defineProperty(this, 'contained', {
			enumerable: true,
			get: () => this.__data.contained,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.contained = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'extension', {
			enumerable: true,
			get: () => this.__data.extension,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Extension = require('./extension.js');
				this.__data.extension = Array.isArray(value) ? value.map(v => new Extension(v)) : [new Extension(value)];
			},
		});

		Object.defineProperty(this, 'modifierExtension', {
			enumerable: true,
			get: () => this.__data.modifierExtension,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Extension = require('./extension.js');
				this.__data.modifierExtension = Array.isArray(value)
					? value.map(v => new Extension(v))
					: [new Extension(value)];
			},
		});

		Object.defineProperty(this, 'identifier', {
			enumerable: true,
			get: () => this.__data.identifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.identifier = new Identifier(value);
			},
		});

		Object.defineProperty(this, '_name', {
			enumerable: true,
			get: () => this.__data._name,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._name = new Element(value);
			},
		});

		Object.defineProperty(this, 'name', {
			enumerable: true,
			get: () => this.__data.name,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.name = value;
			},
		});

		Object.defineProperty(this, '_status', {
			enumerable: true,
			get: () => this.__data._status,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._status = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/report-status-codes
		Object.defineProperty(this, 'status', {
			enumerable: true,
			get: () => this.__data.status,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.status = value;
			},
		});

		Object.defineProperty(this, 'testScript', {
			enumerable: true,
			get: () => this.__data.testScript,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.testScript = new Reference(value);
			},
		});

		Object.defineProperty(this, '_result', {
			enumerable: true,
			get: () => this.__data._result,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._result = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/report-result-codes
		Object.defineProperty(this, 'result', {
			enumerable: true,
			get: () => this.__data.result,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.result = value;
			},
		});

		Object.defineProperty(this, '_score', {
			enumerable: true,
			get: () => this.__data._score,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._score = new Element(value);
			},
		});

		Object.defineProperty(this, 'score', {
			enumerable: true,
			get: () => this.__data.score,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.score = value;
			},
		});

		Object.defineProperty(this, '_tester', {
			enumerable: true,
			get: () => this.__data._tester,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._tester = new Element(value);
			},
		});

		Object.defineProperty(this, 'tester', {
			enumerable: true,
			get: () => this.__data.tester,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.tester = value;
			},
		});

		Object.defineProperty(this, '_issued', {
			enumerable: true,
			get: () => this.__data._issued,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._issued = new Element(value);
			},
		});

		Object.defineProperty(this, 'issued', {
			enumerable: true,
			get: () => this.__data.issued,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.issued = value;
			},
		});

		Object.defineProperty(this, 'participant', {
			enumerable: true,
			get: () => this.__data.participant,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let TestReportParticipant = require('./testreportparticipant.js');
				this.__data.participant = Array.isArray(value)
					? value.map(v => new TestReportParticipant(v))
					: [new TestReportParticipant(value)];
			},
		});

		Object.defineProperty(this, 'setup', {
			enumerable: true,
			get: () => this.__data.setup,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let TestReportSetup = require('./testreportsetup.js');
				this.__data.setup = new TestReportSetup(value);
			},
		});

		Object.defineProperty(this, 'test', {
			enumerable: true,
			get: () => this.__data.test,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let TestReportTest = require('./testreporttest.js');
				this.__data.test = Array.isArray(value) ? value.map(v => new TestReportTest(v)) : [new TestReportTest(value)];
			},
		});

		Object.defineProperty(this, 'teardown', {
			enumerable: true,
			get: () => this.__data.teardown,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let TestReportTeardown = require('./testreportteardown.js');
				this.__data.teardown = new TestReportTeardown(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'TestReport',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'TestReport';
	}

	toJSON() {
		return {
			resourceType: this.resourceType,
			id: this.id,
			meta: this.meta && this.meta.toJSON(),
			_implicitRules: this._implicitRules && this._implicitRules.toJSON(),
			implicitRules: this.implicitRules,
			_language: this._language && this._language.toJSON(),
			language: this.language,
			text: this.text && this.text.toJSON(),
			contained: this.contained,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			identifier: this.identifier && this.identifier.toJSON(),
			_name: this._name && this._name.toJSON(),
			name: this.name,
			_status: this._status && this._status.toJSON(),
			status: this.status,
			testScript: this.testScript && this.testScript.toJSON(),
			_result: this._result && this._result.toJSON(),
			result: this.result,
			_score: this._score && this._score.toJSON(),
			score: this.score,
			_tester: this._tester && this._tester.toJSON(),
			tester: this.tester,
			_issued: this._issued && this._issued.toJSON(),
			issued: this.issued,
			participant: this.participant && this.participant.map(v => v.toJSON()),
			setup: this.setup && this.setup.toJSON(),
			test: this.test && this.test.map(v => v.toJSON()),
			teardown: this.teardown && this.teardown.toJSON(),
		};
	}
};
