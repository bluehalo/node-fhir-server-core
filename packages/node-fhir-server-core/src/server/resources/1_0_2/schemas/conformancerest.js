/**
 * @name exports
 * @summary ConformanceRest Class
 */
module.exports = class ConformanceRest {
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

		Object.defineProperty(this, '_mode', {
			enumerable: true,
			get: () => this.__data._mode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._mode = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/restful-conformance-mode
		Object.defineProperty(this, 'mode', {
			enumerable: true,
			get: () => this.__data.mode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.mode = value;
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

		Object.defineProperty(this, 'security', {
			enumerable: true,
			get: () => this.__data.security,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ConformanceRestSecurity = require('./conformancerestsecurity.js');
				this.__data.security = new ConformanceRestSecurity(value);
			},
		});

		Object.defineProperty(this, 'resource', {
			enumerable: true,
			get: () => this.__data.resource,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ConformanceRestResource = require('./conformancerestresource.js');
				this.__data.resource = Array.isArray(value)
					? value.map(v => new ConformanceRestResource(v))
					: [new ConformanceRestResource(value)];
			},
		});

		Object.defineProperty(this, 'interaction', {
			enumerable: true,
			get: () => this.__data.interaction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ConformanceRestInteraction = require('./conformancerestinteraction.js');
				this.__data.interaction = Array.isArray(value)
					? value.map(v => new ConformanceRestInteraction(v))
					: [new ConformanceRestInteraction(value)];
			},
		});

		Object.defineProperty(this, '_transactionMode', {
			enumerable: true,
			get: () => this.__data._transactionMode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._transactionMode = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/transaction-mode
		Object.defineProperty(this, 'transactionMode', {
			enumerable: true,
			get: () => this.__data.transactionMode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.transactionMode = value;
			},
		});

		Object.defineProperty(this, 'operation', {
			enumerable: true,
			get: () => this.__data.operation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ConformanceRestOperation = require('./conformancerestoperation.js');
				this.__data.operation = Array.isArray(value)
					? value.map(v => new ConformanceRestOperation(v))
					: [new ConformanceRestOperation(value)];
			},
		});

		Object.defineProperty(this, '_compartment', {
			enumerable: true,
			get: () => this.__data._compartment,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._compartment = new Element(value);
			},
		});

		Object.defineProperty(this, 'compartment', {
			enumerable: true,
			get: () => this.__data.compartment,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.compartment = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ConformanceRest',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ConformanceRest';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_mode: this._mode && this._mode.toJSON(),
			mode: this.mode,
			_documentation: this._documentation && this._documentation.toJSON(),
			documentation: this.documentation,
			security: this.security && this.security.toJSON(),
			resource: this.resource && this.resource.map(v => v.toJSON()),
			interaction: this.interaction && this.interaction.map(v => v.toJSON()),
			_transactionMode: this._transactionMode && this._transactionMode.toJSON(),
			transactionMode: this.transactionMode,
			operation: this.operation && this.operation.map(v => v.toJSON()),
			_compartment: this._compartment && this._compartment.toJSON(),
			compartment: this.compartment,
		};
	}
};
