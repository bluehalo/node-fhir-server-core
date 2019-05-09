/**
 * @name exports
 * @summary ConformanceRestResourceSearchParam Class
 */
module.exports = class ConformanceRestResourceSearchParam {
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

		Object.defineProperty(this, '_definition', {
			enumerable: true,
			get: () => this.__data._definition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._definition = new Element(value);
			},
		});

		Object.defineProperty(this, 'definition', {
			enumerable: true,
			get: () => this.__data.definition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.definition = value;
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/search-param-type
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

		Object.defineProperty(this, '_target', {
			enumerable: true,
			get: () => this.__data._target,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._target = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/resource-types
		Object.defineProperty(this, 'target', {
			enumerable: true,
			get: () => this.__data.target,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.target = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_modifier', {
			enumerable: true,
			get: () => this.__data._modifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._modifier = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/search-modifier-code
		Object.defineProperty(this, 'modifier', {
			enumerable: true,
			get: () => this.__data.modifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.modifier = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_chain', {
			enumerable: true,
			get: () => this.__data._chain,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._chain = new Element(value);
			},
		});

		Object.defineProperty(this, 'chain', {
			enumerable: true,
			get: () => this.__data.chain,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.chain = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ConformanceRestResourceSearchParam',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ConformanceRestResourceSearchParam';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_name: this._name && this._name.toJSON(),
			name: this.name,
			_definition: this._definition && this._definition.toJSON(),
			definition: this.definition,
			_type: this._type && this._type.toJSON(),
			type: this.type,
			_documentation: this._documentation && this._documentation.toJSON(),
			documentation: this.documentation,
			_target: this._target && this._target.toJSON(),
			target: this.target,
			_modifier: this._modifier && this._modifier.toJSON(),
			modifier: this.modifier,
			_chain: this._chain && this._chain.toJSON(),
			chain: this.chain,
		};
	}
};
