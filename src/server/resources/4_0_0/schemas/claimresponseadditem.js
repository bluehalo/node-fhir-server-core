/**
 * @name exports
 * @summary ClaimResponseAddItem Class
 */
module.exports = class ClaimResponseAddItem {
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

		Object.defineProperty(this, '_itemSequence', {
			enumerable: true,
			get: () => this.__data._itemSequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._itemSequence = new Element(value);
			},
		});

		Object.defineProperty(this, 'itemSequence', {
			enumerable: true,
			get: () => this.__data.itemSequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.itemSequence = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_detailSequence', {
			enumerable: true,
			get: () => this.__data._detailSequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._detailSequence = new Element(value);
			},
		});

		Object.defineProperty(this, 'detailSequence', {
			enumerable: true,
			get: () => this.__data.detailSequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.detailSequence = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_subdetailSequence', {
			enumerable: true,
			get: () => this.__data._subdetailSequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._subdetailSequence = new Element(value);
			},
		});

		Object.defineProperty(this, 'subdetailSequence', {
			enumerable: true,
			get: () => this.__data.subdetailSequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.subdetailSequence = Array.isArray(value) ? value.map(v => v) : [value];
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
				this.__data.provider = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
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

		Object.defineProperty(this, 'programCode', {
			enumerable: true,
			get: () => this.__data.programCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.programCode = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, '_servicedDate', {
			enumerable: true,
			get: () => this.__data._servicedDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._servicedDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'servicedDate', {
			enumerable: true,
			get: () => this.__data.servicedDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.servicedDate = value;
			},
		});

		Object.defineProperty(this, 'servicedPeriod', {
			enumerable: true,
			get: () => this.__data.servicedPeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.servicedPeriod = new Period(value);
			},
		});

		Object.defineProperty(this, 'locationCodeableConcept', {
			enumerable: true,
			get: () => this.__data.locationCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.locationCodeableConcept = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'locationAddress', {
			enumerable: true,
			get: () => this.__data.locationAddress,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Address = require('./address.js');
				this.__data.locationAddress = new Address(value);
			},
		});

		Object.defineProperty(this, 'locationReference', {
			enumerable: true,
			get: () => this.__data.locationReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.locationReference = new Reference(value);
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

		Object.defineProperty(this, 'bodySite', {
			enumerable: true,
			get: () => this.__data.bodySite,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.bodySite = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'subSite', {
			enumerable: true,
			get: () => this.__data.subSite,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.subSite = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
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

				let ClaimResponseItemAdjudication = require('./claimresponseitemadjudication.js');
				this.__data.adjudication = Array.isArray(value)
					? value.map(v => new ClaimResponseItemAdjudication(v))
					: [new ClaimResponseItemAdjudication(value)];
			},
		});

		Object.defineProperty(this, 'detail', {
			enumerable: true,
			get: () => this.__data.detail,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ClaimResponseAddItemDetail = require('./claimresponseadditemdetail.js');
				this.__data.detail = Array.isArray(value)
					? value.map(v => new ClaimResponseAddItemDetail(v))
					: [new ClaimResponseAddItemDetail(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ClaimResponseAddItem',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ClaimResponseAddItem';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_itemSequence: this._itemSequence && this._itemSequence.toJSON(),
			itemSequence: this.itemSequence,
			_detailSequence: this._detailSequence && this._detailSequence.toJSON(),
			detailSequence: this.detailSequence,
			_subdetailSequence: this._subdetailSequence && this._subdetailSequence.toJSON(),
			subdetailSequence: this.subdetailSequence,
			provider: this.provider && this.provider.map(v => v.toJSON()),
			productOrService: this.productOrService && this.productOrService.toJSON(),
			modifier: this.modifier && this.modifier.map(v => v.toJSON()),
			programCode: this.programCode && this.programCode.map(v => v.toJSON()),
			_servicedDate: this._servicedDate && this._servicedDate.toJSON(),
			servicedDate: this.servicedDate,
			servicedPeriod: this.servicedPeriod && this.servicedPeriod.toJSON(),
			locationCodeableConcept: this.locationCodeableConcept && this.locationCodeableConcept.toJSON(),
			locationAddress: this.locationAddress && this.locationAddress.toJSON(),
			locationReference: this.locationReference && this.locationReference.toJSON(),
			quantity: this.quantity && this.quantity.toJSON(),
			unitPrice: this.unitPrice && this.unitPrice.toJSON(),
			_factor: this._factor && this._factor.toJSON(),
			factor: this.factor,
			net: this.net && this.net.toJSON(),
			bodySite: this.bodySite && this.bodySite.toJSON(),
			subSite: this.subSite && this.subSite.map(v => v.toJSON()),
			_noteNumber: this._noteNumber && this._noteNumber.toJSON(),
			noteNumber: this.noteNumber,
			adjudication: this.adjudication && this.adjudication.map(v => v.toJSON()),
			detail: this.detail && this.detail.map(v => v.toJSON()),
		};
	}
};
