/**
 * @name exports
 * @summary ExampleScenarioProcessStepOperation Class
 */
module.exports = class ExampleScenarioProcessStepOperation {
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

		Object.defineProperty(this, '_number', {
			enumerable: true,
			get: () => this.__data._number,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._number = new Element(value);
			},
		});

		Object.defineProperty(this, 'number', {
			enumerable: true,
			get: () => this.__data.number,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.number = value;
			},
		});

		Object.defineProperty(this, '_type', {
			enumerable: true,
			get: () => this.__data._type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._type = new Element(value);
			},
		});

		Object.defineProperty(this, 'type', {
			enumerable: true,
			get: () => this.__data.type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.type = value;
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

		Object.defineProperty(this, '_initiator', {
			enumerable: true,
			get: () => this.__data._initiator,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._initiator = new Element(value);
			},
		});

		Object.defineProperty(this, 'initiator', {
			enumerable: true,
			get: () => this.__data.initiator,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.initiator = value;
			},
		});

		Object.defineProperty(this, '_receiver', {
			enumerable: true,
			get: () => this.__data._receiver,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._receiver = new Element(value);
			},
		});

		Object.defineProperty(this, 'receiver', {
			enumerable: true,
			get: () => this.__data.receiver,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.receiver = value;
			},
		});

		Object.defineProperty(this, '_description', {
			enumerable: true,
			get: () => this.__data._description,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._description = new Element(value);
			},
		});

		Object.defineProperty(this, 'description', {
			enumerable: true,
			get: () => this.__data.description,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.description = value;
			},
		});

		Object.defineProperty(this, '_initiatorActive', {
			enumerable: true,
			get: () => this.__data._initiatorActive,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._initiatorActive = new Element(value);
			},
		});

		Object.defineProperty(this, 'initiatorActive', {
			enumerable: true,
			get: () => this.__data.initiatorActive,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.initiatorActive = value;
			},
		});

		Object.defineProperty(this, '_receiverActive', {
			enumerable: true,
			get: () => this.__data._receiverActive,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._receiverActive = new Element(value);
			},
		});

		Object.defineProperty(this, 'receiverActive', {
			enumerable: true,
			get: () => this.__data.receiverActive,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.receiverActive = value;
			},
		});

		Object.defineProperty(this, 'request', {
			enumerable: true,
			get: () => this.__data.request,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ExampleScenarioInstanceContainedInstance = require('./examplescenarioinstancecontainedinstance.js');
				this.__data.request = new ExampleScenarioInstanceContainedInstance(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ExampleScenarioProcessStepOperation',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ExampleScenarioProcessStepOperation';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_number: this._number && this._number.toJSON(),
			number: this.number,
			_type: this._type && this._type.toJSON(),
			type: this.type,
			_name: this._name && this._name.toJSON(),
			name: this.name,
			_initiator: this._initiator && this._initiator.toJSON(),
			initiator: this.initiator,
			_receiver: this._receiver && this._receiver.toJSON(),
			receiver: this.receiver,
			_description: this._description && this._description.toJSON(),
			description: this.description,
			_initiatorActive: this._initiatorActive && this._initiatorActive.toJSON(),
			initiatorActive: this.initiatorActive,
			_receiverActive: this._receiverActive && this._receiverActive.toJSON(),
			receiverActive: this.receiverActive,
			request: this.request && this.request.toJSON(),
		};
	}
};
