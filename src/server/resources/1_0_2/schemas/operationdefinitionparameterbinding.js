/**
 * @name exports
 * @summary OperationDefinitionParameterBinding Class
 */
module.exports = class OperationDefinitionParameterBinding {
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

		Object.defineProperty(this, '_strength', {
			enumerable: true,
			get: () => this.__data._strength,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._strength = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/binding-strength
		Object.defineProperty(this, 'strength', {
			enumerable: true,
			get: () => this.__data.strength,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.strength = value;
			},
		});

		Object.defineProperty(this, '_valueSetUri', {
			enumerable: true,
			get: () => this.__data._valueSetUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueSetUri = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueSetUri', {
			enumerable: true,
			get: () => this.__data.valueSetUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueSetUri = value;
			},
		});

		Object.defineProperty(this, 'valueSetReference', {
			enumerable: true,
			get: () => this.__data.valueSetReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.valueSetReference = new Reference(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'OperationDefinitionParameterBinding',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'OperationDefinitionParameterBinding';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_strength: this._strength && this._strength.toJSON(),
			strength: this.strength,
			_valueSetUri: this._valueSetUri && this._valueSetUri.toJSON(),
			valueSetUri: this.valueSetUri,
			valueSetReference: this.valueSetReference && this.valueSetReference.toJSON(),
		};
	}
};
