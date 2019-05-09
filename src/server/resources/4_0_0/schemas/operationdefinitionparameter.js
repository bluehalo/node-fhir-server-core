/**
 * @name exports
 * @summary OperationDefinitionParameter Class
 */
module.exports = class OperationDefinitionParameter {
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

		Object.defineProperty(this, '_use', {
			enumerable: true,
			get: () => this.__data._use,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._use = new Element(value);
			},
		});

		Object.defineProperty(this, 'use', {
			enumerable: true,
			get: () => this.__data.use,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.use = value;
			},
		});

		Object.defineProperty(this, '_min', {
			enumerable: true,
			get: () => this.__data._min,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._min = new Element(value);
			},
		});

		Object.defineProperty(this, 'min', {
			enumerable: true,
			get: () => this.__data.min,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.min = value;
			},
		});

		Object.defineProperty(this, '_max', {
			enumerable: true,
			get: () => this.__data._max,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._max = new Element(value);
			},
		});

		Object.defineProperty(this, 'max', {
			enumerable: true,
			get: () => this.__data.max,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.max = value;
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

		Object.defineProperty(this, '_targetProfile', {
			enumerable: true,
			get: () => this.__data._targetProfile,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._targetProfile = new Element(value);
			},
		});

		Object.defineProperty(this, 'targetProfile', {
			enumerable: true,
			get: () => this.__data.targetProfile,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.targetProfile = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_searchType', {
			enumerable: true,
			get: () => this.__data._searchType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._searchType = new Element(value);
			},
		});

		Object.defineProperty(this, 'searchType', {
			enumerable: true,
			get: () => this.__data.searchType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.searchType = value;
			},
		});

		Object.defineProperty(this, 'binding', {
			enumerable: true,
			get: () => this.__data.binding,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let OperationDefinitionParameterBinding = require('./operationdefinitionparameterbinding.js');
				this.__data.binding = new OperationDefinitionParameterBinding(value);
			},
		});

		Object.defineProperty(this, 'referencedFrom', {
			enumerable: true,
			get: () => this.__data.referencedFrom,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let OperationDefinitionParameterReferencedFrom = require('./operationdefinitionparameterreferencedfrom.js');
				this.__data.referencedFrom = Array.isArray(value)
					? value.map(v => new OperationDefinitionParameterReferencedFrom(v))
					: [new OperationDefinitionParameterReferencedFrom(value)];
			},
		});

		Object.defineProperty(this, 'part', {
			enumerable: true,
			get: () => this.__data.part,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let OperationDefinitionParameter = require('./operationdefinitionparameter.js');
				this.__data.part = Array.isArray(value)
					? value.map(v => new OperationDefinitionParameter(v))
					: [new OperationDefinitionParameter(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'OperationDefinitionParameter',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'OperationDefinitionParameter';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_name: this._name && this._name.toJSON(),
			name: this.name,
			_use: this._use && this._use.toJSON(),
			use: this.use,
			_min: this._min && this._min.toJSON(),
			min: this.min,
			_max: this._max && this._max.toJSON(),
			max: this.max,
			_documentation: this._documentation && this._documentation.toJSON(),
			documentation: this.documentation,
			_type: this._type && this._type.toJSON(),
			type: this.type,
			_targetProfile: this._targetProfile && this._targetProfile.toJSON(),
			targetProfile: this.targetProfile,
			_searchType: this._searchType && this._searchType.toJSON(),
			searchType: this.searchType,
			binding: this.binding && this.binding.toJSON(),
			referencedFrom: this.referencedFrom && this.referencedFrom.map(v => v.toJSON()),
			part: this.part && this.part.map(v => v.toJSON()),
		};
	}
};
