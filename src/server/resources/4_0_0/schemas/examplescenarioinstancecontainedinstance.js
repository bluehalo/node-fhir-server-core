/**
 * @name exports
 * @summary ExampleScenarioInstanceContainedInstance Class
 */
module.exports = class ExampleScenarioInstanceContainedInstance {
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

		Object.defineProperty(this, '_versionId', {
			enumerable: true,
			get: () => this.__data._versionId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._versionId = new Element(value);
			},
		});

		Object.defineProperty(this, 'versionId', {
			enumerable: true,
			get: () => this.__data.versionId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.versionId = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ExampleScenarioInstanceContainedInstance',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ExampleScenarioInstanceContainedInstance';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_resourceId: this._resourceId && this._resourceId.toJSON(),
			resourceId: this.resourceId,
			_versionId: this._versionId && this._versionId.toJSON(),
			versionId: this.versionId,
		};
	}
};
