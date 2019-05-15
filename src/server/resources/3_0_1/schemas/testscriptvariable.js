/**
 * @name exports
 * @summary TestScriptVariable Class
 */
module.exports = class TestScriptVariable {
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

		Object.defineProperty(this, '_defaultValue', {
			enumerable: true,
			get: () => this.__data._defaultValue,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._defaultValue = new Element(value);
			},
		});

		Object.defineProperty(this, 'defaultValue', {
			enumerable: true,
			get: () => this.__data.defaultValue,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.defaultValue = value;
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

		Object.defineProperty(this, '_expression', {
			enumerable: true,
			get: () => this.__data._expression,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._expression = new Element(value);
			},
		});

		Object.defineProperty(this, 'expression', {
			enumerable: true,
			get: () => this.__data.expression,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.expression = value;
			},
		});

		Object.defineProperty(this, '_headerField', {
			enumerable: true,
			get: () => this.__data._headerField,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._headerField = new Element(value);
			},
		});

		Object.defineProperty(this, 'headerField', {
			enumerable: true,
			get: () => this.__data.headerField,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.headerField = value;
			},
		});

		Object.defineProperty(this, '_hint', {
			enumerable: true,
			get: () => this.__data._hint,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._hint = new Element(value);
			},
		});

		Object.defineProperty(this, 'hint', {
			enumerable: true,
			get: () => this.__data.hint,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.hint = value;
			},
		});

		Object.defineProperty(this, '_path', {
			enumerable: true,
			get: () => this.__data._path,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._path = new Element(value);
			},
		});

		Object.defineProperty(this, 'path', {
			enumerable: true,
			get: () => this.__data.path,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.path = value;
			},
		});

		Object.defineProperty(this, '_sourceId', {
			enumerable: true,
			get: () => this.__data._sourceId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._sourceId = new Element(value);
			},
		});

		Object.defineProperty(this, 'sourceId', {
			enumerable: true,
			get: () => this.__data.sourceId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.sourceId = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'TestScriptVariable',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'TestScriptVariable';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_name: this._name && this._name.toJSON(),
			name: this.name,
			_defaultValue: this._defaultValue && this._defaultValue.toJSON(),
			defaultValue: this.defaultValue,
			_description: this._description && this._description.toJSON(),
			description: this.description,
			_expression: this._expression && this._expression.toJSON(),
			expression: this.expression,
			_headerField: this._headerField && this._headerField.toJSON(),
			headerField: this.headerField,
			_hint: this._hint && this._hint.toJSON(),
			hint: this.hint,
			_path: this._path && this._path.toJSON(),
			path: this.path,
			_sourceId: this._sourceId && this._sourceId.toJSON(),
			sourceId: this.sourceId,
		};
	}
};
