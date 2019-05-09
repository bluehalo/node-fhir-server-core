/**
 * @name exports
 * @summary ClaimItemDetailSubDetail Class
 */
module.exports = class ClaimItemDetailSubDetail {
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

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ClaimItemDetailSubDetail',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ClaimItemDetailSubDetail';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_sequence: this._sequence && this._sequence.toJSON(),
			sequence: this.sequence,
			type: this.type && this.type.toJSON(),
			service: this.service && this.service.toJSON(),
			quantity: this.quantity && this.quantity.toJSON(),
			unitPrice: this.unitPrice && this.unitPrice.toJSON(),
			_factor: this._factor && this._factor.toJSON(),
			factor: this.factor,
			_points: this._points && this._points.toJSON(),
			points: this.points,
			net: this.net && this.net.toJSON(),
			udi: this.udi && this.udi.toJSON(),
		};
	}
};
