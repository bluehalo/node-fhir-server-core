/**
 * @name exports
 * @summary StructureMapGroupRuleTarget Class
 */
module.exports = class StructureMapGroupRuleTarget {
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

		Object.defineProperty(this, '_context', {
			enumerable: true,
			get: () => this.__data._context,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._context = new Element(value);
			},
		});

		Object.defineProperty(this, 'context', {
			enumerable: true,
			get: () => this.__data.context,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.context = value;
			},
		});

		Object.defineProperty(this, '_contextType', {
			enumerable: true,
			get: () => this.__data._contextType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._contextType = new Element(value);
			},
		});

		Object.defineProperty(this, 'contextType', {
			enumerable: true,
			get: () => this.__data.contextType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.contextType = value;
			},
		});

		Object.defineProperty(this, '_element', {
			enumerable: true,
			get: () => this.__data._element,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._element = new Element(value);
			},
		});

		Object.defineProperty(this, 'element', {
			enumerable: true,
			get: () => this.__data.element,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.element = value;
			},
		});

		Object.defineProperty(this, '_variable', {
			enumerable: true,
			get: () => this.__data._variable,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._variable = new Element(value);
			},
		});

		Object.defineProperty(this, 'variable', {
			enumerable: true,
			get: () => this.__data.variable,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.variable = value;
			},
		});

		Object.defineProperty(this, '_listMode', {
			enumerable: true,
			get: () => this.__data._listMode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._listMode = new Element(value);
			},
		});

		Object.defineProperty(this, 'listMode', {
			enumerable: true,
			get: () => this.__data.listMode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.listMode = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_listRuleId', {
			enumerable: true,
			get: () => this.__data._listRuleId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._listRuleId = new Element(value);
			},
		});

		Object.defineProperty(this, 'listRuleId', {
			enumerable: true,
			get: () => this.__data.listRuleId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.listRuleId = value;
			},
		});

		Object.defineProperty(this, '_transform', {
			enumerable: true,
			get: () => this.__data._transform,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._transform = new Element(value);
			},
		});

		Object.defineProperty(this, 'transform', {
			enumerable: true,
			get: () => this.__data.transform,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.transform = value;
			},
		});

		Object.defineProperty(this, 'parameter', {
			enumerable: true,
			get: () => this.__data.parameter,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let StructureMapGroupRuleTargetParameter = require('./structuremapgroupruletargetparameter.js');
				this.__data.parameter = Array.isArray(value)
					? value.map(v => new StructureMapGroupRuleTargetParameter(v))
					: [new StructureMapGroupRuleTargetParameter(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'StructureMapGroupRuleTarget',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'StructureMapGroupRuleTarget';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_context: this._context && this._context.toJSON(),
			context: this.context,
			_contextType: this._contextType && this._contextType.toJSON(),
			contextType: this.contextType,
			_element: this._element && this._element.toJSON(),
			element: this.element,
			_variable: this._variable && this._variable.toJSON(),
			variable: this.variable,
			_listMode: this._listMode && this._listMode.toJSON(),
			listMode: this.listMode,
			_listRuleId: this._listRuleId && this._listRuleId.toJSON(),
			listRuleId: this.listRuleId,
			_transform: this._transform && this._transform.toJSON(),
			transform: this.transform,
			parameter: this.parameter && this.parameter.map(v => v.toJSON()),
		};
	}
};
