/**
 * @name exports
 * @summary ExampleScenarioProcessStep Class
 */
module.exports = class ExampleScenarioProcessStep {
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

		Object.defineProperty(this, 'process', {
			enumerable: true,
			get: () => this.__data.process,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ExampleScenarioProcess = require('./examplescenarioprocess.js');
				this.__data.process = Array.isArray(value)
					? value.map(v => new ExampleScenarioProcess(v))
					: [new ExampleScenarioProcess(value)];
			},
		});

		Object.defineProperty(this, '_pause', {
			enumerable: true,
			get: () => this.__data._pause,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._pause = new Element(value);
			},
		});

		Object.defineProperty(this, 'pause', {
			enumerable: true,
			get: () => this.__data.pause,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.pause = value;
			},
		});

		Object.defineProperty(this, 'operation', {
			enumerable: true,
			get: () => this.__data.operation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ExampleScenarioProcessStepOperation = require('./examplescenarioprocessstepoperation.js');
				this.__data.operation = new ExampleScenarioProcessStepOperation(value);
			},
		});

		Object.defineProperty(this, 'alternative', {
			enumerable: true,
			get: () => this.__data.alternative,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ExampleScenarioProcessStepAlternative = require('./examplescenarioprocessstepalternative.js');
				this.__data.alternative = Array.isArray(value)
					? value.map(v => new ExampleScenarioProcessStepAlternative(v))
					: [new ExampleScenarioProcessStepAlternative(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ExampleScenarioProcessStep',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ExampleScenarioProcessStep';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			process: this.process && this.process.map(v => v.toJSON()),
			_pause: this._pause && this._pause.toJSON(),
			pause: this.pause,
			operation: this.operation && this.operation.toJSON(),
			alternative: this.alternative && this.alternative.map(v => v.toJSON()),
		};
	}
};
