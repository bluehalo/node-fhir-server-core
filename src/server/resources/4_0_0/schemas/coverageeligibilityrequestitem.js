/**
 * @name exports
 * @summary CoverageEligibilityRequestItem Class
 */
module.exports = class CoverageEligibilityRequestItem {
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

		Object.defineProperty(this, '_supportingInfoSequence', {
			enumerable: true,
			get: () => this.__data._supportingInfoSequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._supportingInfoSequence = new Element(value);
			},
		});

		Object.defineProperty(this, 'supportingInfoSequence', {
			enumerable: true,
			get: () => this.__data.supportingInfoSequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.supportingInfoSequence = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'category', {
			enumerable: true,
			get: () => this.__data.category,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.category = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'productOrService', {
			enumerable: true,
			get: () => this.__data.productOrService,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.productOrService = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'modifier', {
			enumerable: true,
			get: () => this.__data.modifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.modifier = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'provider', {
			enumerable: true,
			get: () => this.__data.provider,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.provider = new Reference(value);
			},
		});

		Object.defineProperty(this, 'quantity', {
			enumerable: true,
			get: () => this.__data.quantity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.quantity = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'unitPrice', {
			enumerable: true,
			get: () => this.__data.unitPrice,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Money = require('./money.js');
				this.__data.unitPrice = new Money(value);
			},
		});

		Object.defineProperty(this, 'facility', {
			enumerable: true,
			get: () => this.__data.facility,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.facility = new Reference(value);
			},
		});

		Object.defineProperty(this, 'diagnosis', {
			enumerable: true,
			get: () => this.__data.diagnosis,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CoverageEligibilityRequestItemDiagnosis = require('./coverageeligibilityrequestitemdiagnosis.js');
				this.__data.diagnosis = Array.isArray(value)
					? value.map(v => new CoverageEligibilityRequestItemDiagnosis(v))
					: [new CoverageEligibilityRequestItemDiagnosis(value)];
			},
		});

		Object.defineProperty(this, 'detail', {
			enumerable: true,
			get: () => this.__data.detail,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.detail = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'CoverageEligibilityRequestItem',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'CoverageEligibilityRequestItem';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_supportingInfoSequence: this._supportingInfoSequence && this._supportingInfoSequence.toJSON(),
			supportingInfoSequence: this.supportingInfoSequence,
			category: this.category && this.category.toJSON(),
			productOrService: this.productOrService && this.productOrService.toJSON(),
			modifier: this.modifier && this.modifier.map(v => v.toJSON()),
			provider: this.provider && this.provider.toJSON(),
			quantity: this.quantity && this.quantity.toJSON(),
			unitPrice: this.unitPrice && this.unitPrice.toJSON(),
			facility: this.facility && this.facility.toJSON(),
			diagnosis: this.diagnosis && this.diagnosis.map(v => v.toJSON()),
			detail: this.detail && this.detail.map(v => v.toJSON()),
		};
	}
};
