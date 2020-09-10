/**
 * @name exports
 * @summary MedicinalProduct Class
 */
module.exports = class MedicinalProduct {
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
				this.__data.identifier = Array.isArray(value) ? value.map(v => new Identifier(v)) : [new Identifier(value)];
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

		Object.defineProperty(this, 'domain', {
			enumerable: true,
			get: () => this.__data.domain,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.domain = new Coding(value);
			},
		});

		Object.defineProperty(this, 'combinedPharmaceuticalDoseForm', {
			enumerable: true,
			get: () => this.__data.combinedPharmaceuticalDoseForm,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.combinedPharmaceuticalDoseForm = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'legalStatusOfSupply', {
			enumerable: true,
			get: () => this.__data.legalStatusOfSupply,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.legalStatusOfSupply = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'additionalMonitoringIndicator', {
			enumerable: true,
			get: () => this.__data.additionalMonitoringIndicator,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.additionalMonitoringIndicator = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_specialMeasures', {
			enumerable: true,
			get: () => this.__data._specialMeasures,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._specialMeasures = new Element(value);
			},
		});

		Object.defineProperty(this, 'specialMeasures', {
			enumerable: true,
			get: () => this.__data.specialMeasures,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.specialMeasures = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'paediatricUseIndicator', {
			enumerable: true,
			get: () => this.__data.paediatricUseIndicator,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.paediatricUseIndicator = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'productClassification', {
			enumerable: true,
			get: () => this.__data.productClassification,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.productClassification = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'marketingStatus', {
			enumerable: true,
			get: () => this.__data.marketingStatus,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MarketingStatus = require('./marketingstatus.js');
				this.__data.marketingStatus = Array.isArray(value)
					? value.map(v => new MarketingStatus(v))
					: [new MarketingStatus(value)];
			},
		});

		Object.defineProperty(this, 'pharmaceuticalProduct', {
			enumerable: true,
			get: () => this.__data.pharmaceuticalProduct,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.pharmaceuticalProduct = Array.isArray(value)
					? value.map(v => new Reference(v))
					: [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'packagedMedicinalProduct', {
			enumerable: true,
			get: () => this.__data.packagedMedicinalProduct,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.packagedMedicinalProduct = Array.isArray(value)
					? value.map(v => new Reference(v))
					: [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'attachedDocument', {
			enumerable: true,
			get: () => this.__data.attachedDocument,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.attachedDocument = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'masterFile', {
			enumerable: true,
			get: () => this.__data.masterFile,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.masterFile = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'contact', {
			enumerable: true,
			get: () => this.__data.contact,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.contact = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'clinicalTrial', {
			enumerable: true,
			get: () => this.__data.clinicalTrial,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.clinicalTrial = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'name', {
			enumerable: true,
			get: () => this.__data.name,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicinalProductName = require('./medicinalproductname.js');
				this.__data.name = Array.isArray(value)
					? value.map(v => new MedicinalProductName(v))
					: [new MedicinalProductName(value)];
			},
		});

		Object.defineProperty(this, 'crossReference', {
			enumerable: true,
			get: () => this.__data.crossReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.crossReference = Array.isArray(value) ? value.map(v => new Identifier(v)) : [new Identifier(value)];
			},
		});

		Object.defineProperty(this, 'manufacturingBusinessOperation', {
			enumerable: true,
			get: () => this.__data.manufacturingBusinessOperation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicinalProductManufacturingBusinessOperation = require('./medicinalproductmanufacturingbusinessoperation.js');
				this.__data.manufacturingBusinessOperation = Array.isArray(value)
					? value.map(v => new MedicinalProductManufacturingBusinessOperation(v))
					: [new MedicinalProductManufacturingBusinessOperation(value)];
			},
		});

		Object.defineProperty(this, 'specialDesignation', {
			enumerable: true,
			get: () => this.__data.specialDesignation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicinalProductSpecialDesignation = require('./medicinalproductspecialdesignation.js');
				this.__data.specialDesignation = Array.isArray(value)
					? value.map(v => new MedicinalProductSpecialDesignation(v))
					: [new MedicinalProductSpecialDesignation(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'MedicinalProduct',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'MedicinalProduct';
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
			identifier: this.identifier && this.identifier.map(v => v.toJSON()),
			type: this.type && this.type.toJSON(),
			domain: this.domain && this.domain.toJSON(),
			combinedPharmaceuticalDoseForm:
				this.combinedPharmaceuticalDoseForm && this.combinedPharmaceuticalDoseForm.toJSON(),
			legalStatusOfSupply: this.legalStatusOfSupply && this.legalStatusOfSupply.toJSON(),
			additionalMonitoringIndicator: this.additionalMonitoringIndicator && this.additionalMonitoringIndicator.toJSON(),
			_specialMeasures: this._specialMeasures && this._specialMeasures.toJSON(),
			specialMeasures: this.specialMeasures,
			paediatricUseIndicator: this.paediatricUseIndicator && this.paediatricUseIndicator.toJSON(),
			productClassification: this.productClassification && this.productClassification.map(v => v.toJSON()),
			marketingStatus: this.marketingStatus && this.marketingStatus.map(v => v.toJSON()),
			pharmaceuticalProduct: this.pharmaceuticalProduct && this.pharmaceuticalProduct.map(v => v.toJSON()),
			packagedMedicinalProduct: this.packagedMedicinalProduct && this.packagedMedicinalProduct.map(v => v.toJSON()),
			attachedDocument: this.attachedDocument && this.attachedDocument.map(v => v.toJSON()),
			masterFile: this.masterFile && this.masterFile.map(v => v.toJSON()),
			contact: this.contact && this.contact.map(v => v.toJSON()),
			clinicalTrial: this.clinicalTrial && this.clinicalTrial.map(v => v.toJSON()),
			name: this.name && this.name.map(v => v.toJSON()),
			crossReference: this.crossReference && this.crossReference.map(v => v.toJSON()),
			manufacturingBusinessOperation:
				this.manufacturingBusinessOperation && this.manufacturingBusinessOperation.map(v => v.toJSON()),
			specialDesignation: this.specialDesignation && this.specialDesignation.map(v => v.toJSON()),
		};
	}
};
