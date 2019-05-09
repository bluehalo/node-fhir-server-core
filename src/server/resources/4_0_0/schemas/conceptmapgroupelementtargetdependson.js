/**
 * @name exports
 * @summary ConceptMapGroupElementTargetDependsOn Class
 */
module.exports = class ConceptMapGroupElementTargetDependsOn {
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

		Object.defineProperty(this, '_property', {
			enumerable: true,
			get: () => this.__data._property,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._property = new Element(value);
			},
		});

		Object.defineProperty(this, 'property', {
			enumerable: true,
			get: () => this.__data.property,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.property = value;
			},
		});

		Object.defineProperty(this, '_system', {
			enumerable: true,
			get: () => this.__data._system,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._system = new Element(value);
			},
		});

		Object.defineProperty(this, 'system', {
			enumerable: true,
			get: () => this.__data.system,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.system = value;
			},
		});

		Object.defineProperty(this, '_value', {
			enumerable: true,
			get: () => this.__data._value,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._value = new Element(value);
			},
		});

		Object.defineProperty(this, 'value', {
			enumerable: true,
			get: () => this.__data.value,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.value = value;
			},
		});

		Object.defineProperty(this, '_display', {
			enumerable: true,
			get: () => this.__data._display,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._display = new Element(value);
			},
		});

		Object.defineProperty(this, 'display', {
			enumerable: true,
			get: () => this.__data.display,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.display = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ConceptMapGroupElementTargetDependsOn',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ConceptMapGroupElementTargetDependsOn';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_property: this._property && this._property.toJSON(),
			property: this.property,
			_system: this._system && this._system.toJSON(),
			system: this.system,
			_value: this._value && this._value.toJSON(),
			value: this.value,
			_display: this._display && this._display.toJSON(),
			display: this.display,
		};
	}
};
