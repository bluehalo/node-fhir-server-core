/**
 * @name exports
 * @summary TestScriptSetupActionAssertRuleset Class
 */
module.exports = class TestScriptSetupActionAssertRuleset {
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

		Object.defineProperty(this, '_rulesetId', {
			enumerable: true,
			get: () => this.__data._rulesetId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._rulesetId = new Element(value);
			},
		});

		Object.defineProperty(this, 'rulesetId', {
			enumerable: true,
			get: () => this.__data.rulesetId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.rulesetId = value;
			},
		});

		Object.defineProperty(this, 'rule', {
			enumerable: true,
			get: () => this.__data.rule,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let TestScriptSetupActionAssertRulesetRule = require('./testscriptsetupactionassertrulesetrule.js');
				this.__data.rule = Array.isArray(value)
					? value.map(v => new TestScriptSetupActionAssertRulesetRule(v))
					: [new TestScriptSetupActionAssertRulesetRule(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'TestScriptSetupActionAssertRuleset',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'TestScriptSetupActionAssertRuleset';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_rulesetId: this._rulesetId && this._rulesetId.toJSON(),
			rulesetId: this.rulesetId,
			rule: this.rule && this.rule.map(v => v.toJSON()),
		};
	}
};
