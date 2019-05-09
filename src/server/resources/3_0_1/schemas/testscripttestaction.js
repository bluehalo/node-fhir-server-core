/**
 * @name exports
 * @summary TestScriptTestAction Class
 */
module.exports = class TestScriptTestAction {
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

		Object.defineProperty(this, 'operation', {
			enumerable: true,
			get: () => this.__data.operation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let TestScriptSetupActionOperation = require('./testscriptsetupactionoperation.js');
				this.__data.operation = new TestScriptSetupActionOperation(value);
			},
		});

		Object.defineProperty(this, 'assert', {
			enumerable: true,
			get: () => this.__data.assert,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let TestScriptSetupActionAssert = require('./testscriptsetupactionassert.js');
				this.__data.assert = new TestScriptSetupActionAssert(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'TestScriptTestAction',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'TestScriptTestAction';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			operation: this.operation && this.operation.toJSON(),
			assert: this.assert && this.assert.toJSON(),
		};
	}
};
