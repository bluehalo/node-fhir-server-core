/**
 * @name exports
 * @summary DeviceComponentProductionSpecification Class
 */
module.exports = class DeviceComponentProductionSpecification {
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/specification-type
		Object.defineProperty(this, 'specType', {
			enumerable: true,
			get: () => this.__data.specType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.specType = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'componentId', {
			enumerable: true,
			get: () => this.__data.componentId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.componentId = new Identifier(value);
			},
		});

		Object.defineProperty(this, '_productionSpec', {
			enumerable: true,
			get: () => this.__data._productionSpec,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._productionSpec = new Element(value);
			},
		});

		Object.defineProperty(this, 'productionSpec', {
			enumerable: true,
			get: () => this.__data.productionSpec,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.productionSpec = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'DeviceComponentProductionSpecification',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'DeviceComponentProductionSpecification';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			specType: this.specType && this.specType.toJSON(),
			componentId: this.componentId && this.componentId.toJSON(),
			_productionSpec: this._productionSpec && this._productionSpec.toJSON(),
			productionSpec: this.productionSpec,
		};
	}
};
