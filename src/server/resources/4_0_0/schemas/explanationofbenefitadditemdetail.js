/**
 * @name exports
 * @summary ExplanationOfBenefitAddItemDetail Class
 */
module.exports = class ExplanationOfBenefitAddItemDetail {
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

		Object.defineProperty(this, '_factor', {
			enumerable: true,
			get: () => this.__data._factor,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._factor = new Element(value);
			},
		});

		Object.defineProperty(this, 'factor', {
			enumerable: true,
			get: () => this.__data.factor,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.factor = value;
			},
		});

		Object.defineProperty(this, 'net', {
			enumerable: true,
			get: () => this.__data.net,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Money = require('./money.js');
				this.__data.net = new Money(value);
			},
		});

		Object.defineProperty(this, '_noteNumber', {
			enumerable: true,
			get: () => this.__data._noteNumber,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._noteNumber = new Element(value);
			},
		});

		Object.defineProperty(this, 'noteNumber', {
			enumerable: true,
			get: () => this.__data.noteNumber,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.noteNumber = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'adjudication', {
			enumerable: true,
			get: () => this.__data.adjudication,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ExplanationOfBenefitItemAdjudication = require('./explanationofbenefititemadjudication.js');
				this.__data.adjudication = Array.isArray(value)
					? value.map(v => new ExplanationOfBenefitItemAdjudication(v))
					: [new ExplanationOfBenefitItemAdjudication(value)];
			},
		});

		Object.defineProperty(this, 'subDetail', {
			enumerable: true,
			get: () => this.__data.subDetail,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ExplanationOfBenefitAddItemDetailSubDetail = require('./explanationofbenefitadditemdetailsubdetail.js');
				this.__data.subDetail = Array.isArray(value)
					? value.map(v => new ExplanationOfBenefitAddItemDetailSubDetail(v))
					: [new ExplanationOfBenefitAddItemDetailSubDetail(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ExplanationOfBenefitAddItemDetail',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ExplanationOfBenefitAddItemDetail';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			productOrService: this.productOrService && this.productOrService.toJSON(),
			modifier: this.modifier && this.modifier.map(v => v.toJSON()),
			quantity: this.quantity && this.quantity.toJSON(),
			unitPrice: this.unitPrice && this.unitPrice.toJSON(),
			_factor: this._factor && this._factor.toJSON(),
			factor: this.factor,
			net: this.net && this.net.toJSON(),
			_noteNumber: this._noteNumber && this._noteNumber.toJSON(),
			noteNumber: this.noteNumber,
			adjudication: this.adjudication && this.adjudication.map(v => v.toJSON()),
			subDetail: this.subDetail && this.subDetail.map(v => v.toJSON()),
		};
	}
};
