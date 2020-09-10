/**
 * @name exports
 * @summary ClaimItem Class
 */
module.exports = class ClaimItem {
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

		Object.defineProperty(this, '_sequence', {
			enumerable: true,
			get: () => this.__data._sequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._sequence = new Element(value);
			},
		});

		Object.defineProperty(this, 'sequence', {
			enumerable: true,
			get: () => this.__data.sequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.sequence = value;
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-ActInvoiceGroupCode
		Object.defineProperty(this, 'type', {
			enumerable: true,
			get: () => this.__data.type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.type = new Coding(value);
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

		Object.defineProperty(this, '_diagnosisLinkId', {
			enumerable: true,
			get: () => this.__data._diagnosisLinkId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._diagnosisLinkId = new Element(value);
			},
		});

		Object.defineProperty(this, 'diagnosisLinkId', {
			enumerable: true,
			get: () => this.__data.diagnosisLinkId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.diagnosisLinkId = Array.isArray(value) ? value.map(v => v) : [value];
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

		Object.defineProperty(this, '_serviceDate', {
			enumerable: true,
			get: () => this.__data._serviceDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._serviceDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'serviceDate', {
			enumerable: true,
			get: () => this.__data.serviceDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.serviceDate = value;
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

				let Quantity = require('./quantity.js');
				this.__data.unitPrice = new Quantity(value);
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

		Object.defineProperty(this, '_points', {
			enumerable: true,
			get: () => this.__data._points,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._points = new Element(value);
			},
		});

		Object.defineProperty(this, 'points', {
			enumerable: true,
			get: () => this.__data.points,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.points = value;
			},
		});

		Object.defineProperty(this, 'net', {
			enumerable: true,
			get: () => this.__data.net,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.net = new Quantity(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/udi
		Object.defineProperty(this, 'udi', {
			enumerable: true,
			get: () => this.__data.udi,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.udi = new Coding(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/tooth
		Object.defineProperty(this, 'bodySite', {
			enumerable: true,
			get: () => this.__data.bodySite,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.bodySite = new Coding(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/surface
		Object.defineProperty(this, 'subSite', {
			enumerable: true,
			get: () => this.__data.subSite,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.subSite = Array.isArray(value) ? value.map(v => new Coding(v)) : [new Coding(value)];
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/claim-modifiers
		Object.defineProperty(this, 'modifier', {
			enumerable: true,
			get: () => this.__data.modifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.modifier = Array.isArray(value) ? value.map(v => new Coding(v)) : [new Coding(value)];
			},
		});

		Object.defineProperty(this, 'detail', {
			enumerable: true,
			get: () => this.__data.detail,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ClaimItemDetail = require('./claimitemdetail.js');
				this.__data.detail = Array.isArray(value)
					? value.map(v => new ClaimItemDetail(v))
					: [new ClaimItemDetail(value)];
			},
		});

		Object.defineProperty(this, 'prosthesis', {
			enumerable: true,
			get: () => this.__data.prosthesis,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ClaimItemProsthesis = require('./claimitemprosthesis.js');
				this.__data.prosthesis = new ClaimItemProsthesis(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ClaimItem',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ClaimItem';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_sequence: this._sequence && this._sequence.toJSON(),
			sequence: this.sequence,
			type: this.type && this.type.toJSON(),
			provider: this.provider && this.provider.toJSON(),
			_diagnosisLinkId: this._diagnosisLinkId && this._diagnosisLinkId.toJSON(),
			diagnosisLinkId: this.diagnosisLinkId,
			service: this.service && this.service.toJSON(),
			_serviceDate: this._serviceDate && this._serviceDate.toJSON(),
			serviceDate: this.serviceDate,
			quantity: this.quantity && this.quantity.toJSON(),
			unitPrice: this.unitPrice && this.unitPrice.toJSON(),
			_factor: this._factor && this._factor.toJSON(),
			factor: this.factor,
			_points: this._points && this._points.toJSON(),
			points: this.points,
			net: this.net && this.net.toJSON(),
			udi: this.udi && this.udi.toJSON(),
			bodySite: this.bodySite && this.bodySite.toJSON(),
			subSite: this.subSite && this.subSite.map(v => v.toJSON()),
			modifier: this.modifier && this.modifier.map(v => v.toJSON()),
			detail: this.detail && this.detail.map(v => v.toJSON()),
			prosthesis: this.prosthesis && this.prosthesis.toJSON(),
		};
	}
};
