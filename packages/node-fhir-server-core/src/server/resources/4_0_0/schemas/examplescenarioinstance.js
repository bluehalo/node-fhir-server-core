/**
 * @name exports
 * @summary ExampleScenarioInstance Class
 */
module.exports = class ExampleScenarioInstance {
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

		Object.defineProperty(this, '_resourceId', {
			enumerable: true,
			get: () => this.__data._resourceId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._resourceId = new Element(value);
			},
		});

		Object.defineProperty(this, 'resourceId', {
			enumerable: true,
			get: () => this.__data.resourceId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.resourceId = value;
			},
		});

		Object.defineProperty(this, '_resourceType', {
			enumerable: true,
			get: () => this.__data._resourceType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._resourceType = new Element(value);
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

		Object.defineProperty(this, 'version', {
			enumerable: true,
			get: () => this.__data.version,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ExampleScenarioInstanceVersion = require('./examplescenarioinstanceversion.js');
				this.__data.version = Array.isArray(value)
					? value.map(v => new ExampleScenarioInstanceVersion(v))
					: [new ExampleScenarioInstanceVersion(value)];
			},
		});

		Object.defineProperty(this, 'containedInstance', {
			enumerable: true,
			get: () => this.__data.containedInstance,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ExampleScenarioInstanceContainedInstance = require('./examplescenarioinstancecontainedinstance.js');
				this.__data.containedInstance = Array.isArray(value)
					? value.map(v => new ExampleScenarioInstanceContainedInstance(v))
					: [new ExampleScenarioInstanceContainedInstance(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ExampleScenarioInstance',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ExampleScenarioInstance';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_resourceId: this._resourceId && this._resourceId.toJSON(),
			resourceId: this.resourceId,
			_resourceType: this._resourceType && this._resourceType.toJSON(),
			resourceType: this.resourceType,
			_name: this._name && this._name.toJSON(),
			name: this.name,
			_description: this._description && this._description.toJSON(),
			description: this.description,
			version: this.version && this.version.map(v => v.toJSON()),
			containedInstance: this.containedInstance && this.containedInstance.map(v => v.toJSON()),
		};
	}
};
