/**
 * @name exports
 * @summary StructureMapGroup Class
 */
module.exports = class StructureMapGroup {
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

		Object.defineProperty(this, '_extends', {
			enumerable: true,
			get: () => this.__data._extends,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._extends = new Element(value);
			},
		});

		Object.defineProperty(this, 'extends', {
			enumerable: true,
			get: () => this.__data.extends,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.extends = value;
			},
		});

		Object.defineProperty(this, '_typeMode', {
			enumerable: true,
			get: () => this.__data._typeMode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._typeMode = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/map-group-type-mode
		Object.defineProperty(this, 'typeMode', {
			enumerable: true,
			get: () => this.__data.typeMode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.typeMode = value;
			},
		});

		Object.defineProperty(this, '_documentation', {
			enumerable: true,
			get: () => this.__data._documentation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._documentation = new Element(value);
			},
		});

		Object.defineProperty(this, 'documentation', {
			enumerable: true,
			get: () => this.__data.documentation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.documentation = value;
			},
		});

		Object.defineProperty(this, 'input', {
			enumerable: true,
			get: () => this.__data.input,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let StructureMapGroupInput = require('./structuremapgroupinput.js');
				this.__data.input = Array.isArray(value)
					? value.map(v => new StructureMapGroupInput(v))
					: [new StructureMapGroupInput(value)];
			},
		});

		Object.defineProperty(this, 'rule', {
			enumerable: true,
			get: () => this.__data.rule,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let StructureMapGroupRule = require('./structuremapgrouprule.js');
				this.__data.rule = Array.isArray(value)
					? value.map(v => new StructureMapGroupRule(v))
					: [new StructureMapGroupRule(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'StructureMapGroup',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'StructureMapGroup';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_name: this._name && this._name.toJSON(),
			name: this.name,
			_extends: this._extends && this._extends.toJSON(),
			extends: this.extends,
			_typeMode: this._typeMode && this._typeMode.toJSON(),
			typeMode: this.typeMode,
			_documentation: this._documentation && this._documentation.toJSON(),
			documentation: this.documentation,
			input: this.input && this.input.map(v => v.toJSON()),
			rule: this.rule && this.rule.map(v => v.toJSON()),
		};
	}
};
