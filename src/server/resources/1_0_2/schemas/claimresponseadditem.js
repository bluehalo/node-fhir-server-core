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

		Object.defineProperty(this, '_sequenceLinkId', {
			enumerable: true,
			get: () => this.__data._sequenceLinkId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._sequenceLinkId = new Element(value);
			},
		});

		Object.defineProperty(this, 'sequenceLinkId', {
			enumerable: true,
			get: () => this.__data.sequenceLinkId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.sequenceLinkId = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/service-uscls
		Object.defineProperty(this, 'service', {
			enumerable: true,
			get: () => this.__data.service,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.service = new Coding(value);
			},
		});

		Object.defineProperty(this, 'fee', {
			enumerable: true,
			get: () => this.__data.fee,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.fee = new Quantity(value);
			},
		});

		Object.defineProperty(this, '_noteNumberLinkId', {
			enumerable: true,
			get: () => this.__data._noteNumberLinkId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._noteNumberLinkId = new Element(value);
			},
		});

		Object.defineProperty(this, 'noteNumberLinkId', {
			enumerable: true,
			get: () => this.__data.noteNumberLinkId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.noteNumberLinkId = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'adjudication', {
			enumerable: true,
			get: () => this.__data.adjudication,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ClaimResponseAddItemAdjudication = require('./claimresponseadditemadjudication.js');
				this.__data.adjudication = Array.isArray(value)
					? value.map(v => new ClaimResponseAddItemAdjudication(v))
					: [new ClaimResponseAddItemAdjudication(value)];
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
			_sequenceLinkId: this._sequenceLinkId && this._sequenceLinkId.toJSON(),
			sequenceLinkId: this.sequenceLinkId,
			service: this.service && this.service.toJSON(),
			fee: this.fee && this.fee.toJSON(),
			_noteNumberLinkId: this._noteNumberLinkId && this._noteNumberLinkId.toJSON(),
			noteNumberLinkId: this.noteNumberLinkId,
			adjudication: this.adjudication && this.adjudication.map(v => v.toJSON()),
			detail: this.detail && this.detail.map(v => v.toJSON()),
		};
	}
};
