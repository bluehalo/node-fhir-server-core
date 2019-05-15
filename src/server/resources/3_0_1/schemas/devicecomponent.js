/**
 * @name exports
 * @summary DeviceComponent Class
 */
module.exports = class DeviceComponent {
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

		Object.defineProperty(this, 'meta', {
			enumerable: true,
			get: () => this.__data.meta,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Meta = require('./meta.js');
				this.__data.meta = new Meta(value);
			},
		});

		Object.defineProperty(this, '_implicitRules', {
			enumerable: true,
			get: () => this.__data._implicitRules,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._implicitRules = new Element(value);
			},
		});

		Object.defineProperty(this, 'implicitRules', {
			enumerable: true,
			get: () => this.__data.implicitRules,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.implicitRules = value;
			},
		});

		Object.defineProperty(this, '_language', {
			enumerable: true,
			get: () => this.__data._language,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._language = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
		Object.defineProperty(this, 'language', {
			enumerable: true,
			get: () => this.__data.language,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.language = value;
			},
		});

		Object.defineProperty(this, 'text', {
			enumerable: true,
			get: () => this.__data.text,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Narrative = require('./narrative.js');
				this.__data.text = new Narrative(value);
			},
		});

		Object.defineProperty(this, 'contained', {
			enumerable: true,
			get: () => this.__data.contained,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.contained = Array.isArray(value) ? value.map(v => v) : [value];
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

		Object.defineProperty(this, 'identifier', {
			enumerable: true,
			get: () => this.__data.identifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.identifier = new Identifier(value);
			},
		});

		Object.defineProperty(this, 'type', {
			enumerable: true,
			get: () => this.__data.type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.type = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_lastSystemChange', {
			enumerable: true,
			get: () => this.__data._lastSystemChange,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._lastSystemChange = new Element(value);
			},
		});

		Object.defineProperty(this, 'lastSystemChange', {
			enumerable: true,
			get: () => this.__data.lastSystemChange,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.lastSystemChange = value;
			},
		});

		Object.defineProperty(this, 'source', {
			enumerable: true,
			get: () => this.__data.source,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.source = new Reference(value);
			},
		});

		Object.defineProperty(this, 'parent', {
			enumerable: true,
			get: () => this.__data.parent,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.parent = new Reference(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/operational-status
		Object.defineProperty(this, 'operationalStatus', {
			enumerable: true,
			get: () => this.__data.operationalStatus,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.operationalStatus = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/parameter-group
		Object.defineProperty(this, 'parameterGroup', {
			enumerable: true,
			get: () => this.__data.parameterGroup,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.parameterGroup = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_measurementPrinciple', {
			enumerable: true,
			get: () => this.__data._measurementPrinciple,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._measurementPrinciple = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/measurement-principle
		Object.defineProperty(this, 'measurementPrinciple', {
			enumerable: true,
			get: () => this.__data.measurementPrinciple,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.measurementPrinciple = value;
			},
		});

		Object.defineProperty(this, 'productionSpecification', {
			enumerable: true,
			get: () => this.__data.productionSpecification,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let DeviceComponentProductionSpecification = require('./devicecomponentproductionspecification.js');
				this.__data.productionSpecification = Array.isArray(value)
					? value.map(v => new DeviceComponentProductionSpecification(v))
					: [new DeviceComponentProductionSpecification(value)];
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
		Object.defineProperty(this, 'languageCode', {
			enumerable: true,
			get: () => this.__data.languageCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.languageCode = new CodeableConcept(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'DeviceComponent',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'DeviceComponent';
	}

	toJSON() {
		return {
			resourceType: this.resourceType,
			id: this.id,
			meta: this.meta && this.meta.toJSON(),
			_implicitRules: this._implicitRules && this._implicitRules.toJSON(),
			implicitRules: this.implicitRules,
			_language: this._language && this._language.toJSON(),
			language: this.language,
			text: this.text && this.text.toJSON(),
			contained: this.contained,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			identifier: this.identifier && this.identifier.toJSON(),
			type: this.type && this.type.toJSON(),
			_lastSystemChange: this._lastSystemChange && this._lastSystemChange.toJSON(),
			lastSystemChange: this.lastSystemChange,
			source: this.source && this.source.toJSON(),
			parent: this.parent && this.parent.toJSON(),
			operationalStatus: this.operationalStatus && this.operationalStatus.map(v => v.toJSON()),
			parameterGroup: this.parameterGroup && this.parameterGroup.toJSON(),
			_measurementPrinciple: this._measurementPrinciple && this._measurementPrinciple.toJSON(),
			measurementPrinciple: this.measurementPrinciple,
			productionSpecification: this.productionSpecification && this.productionSpecification.map(v => v.toJSON()),
			languageCode: this.languageCode && this.languageCode.toJSON(),
		};
	}
};
