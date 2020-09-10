/**
 * @name exports
 * @summary VisionPrescriptionDispense Class
 */
module.exports = class VisionPrescriptionDispense {
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/vision-product
		Object.defineProperty(this, 'product', {
			enumerable: true,
			get: () => this.__data.product,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.product = new Coding(value);
			},
		});

		Object.defineProperty(this, '_eye', {
			enumerable: true,
			get: () => this.__data._eye,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._eye = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/vision-eye-codes
		Object.defineProperty(this, 'eye', {
			enumerable: true,
			get: () => this.__data.eye,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.eye = value;
			},
		});

		Object.defineProperty(this, '_sphere', {
			enumerable: true,
			get: () => this.__data._sphere,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._sphere = new Element(value);
			},
		});

		Object.defineProperty(this, 'sphere', {
			enumerable: true,
			get: () => this.__data.sphere,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.sphere = value;
			},
		});

		Object.defineProperty(this, '_cylinder', {
			enumerable: true,
			get: () => this.__data._cylinder,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._cylinder = new Element(value);
			},
		});

		Object.defineProperty(this, 'cylinder', {
			enumerable: true,
			get: () => this.__data.cylinder,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.cylinder = value;
			},
		});

		Object.defineProperty(this, '_axis', {
			enumerable: true,
			get: () => this.__data._axis,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._axis = new Element(value);
			},
		});

		Object.defineProperty(this, 'axis', {
			enumerable: true,
			get: () => this.__data.axis,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.axis = value;
			},
		});

		Object.defineProperty(this, '_prism', {
			enumerable: true,
			get: () => this.__data._prism,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._prism = new Element(value);
			},
		});

		Object.defineProperty(this, 'prism', {
			enumerable: true,
			get: () => this.__data.prism,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.prism = value;
			},
		});

		Object.defineProperty(this, '_base', {
			enumerable: true,
			get: () => this.__data._base,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._base = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/vision-base-codes
		Object.defineProperty(this, 'base', {
			enumerable: true,
			get: () => this.__data.base,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.base = value;
			},
		});

		Object.defineProperty(this, '_add', {
			enumerable: true,
			get: () => this.__data._add,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._add = new Element(value);
			},
		});

		Object.defineProperty(this, 'add', {
			enumerable: true,
			get: () => this.__data.add,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.add = value;
			},
		});

		Object.defineProperty(this, '_power', {
			enumerable: true,
			get: () => this.__data._power,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._power = new Element(value);
			},
		});

		Object.defineProperty(this, 'power', {
			enumerable: true,
			get: () => this.__data.power,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.power = value;
			},
		});

		Object.defineProperty(this, '_backCurve', {
			enumerable: true,
			get: () => this.__data._backCurve,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._backCurve = new Element(value);
			},
		});

		Object.defineProperty(this, 'backCurve', {
			enumerable: true,
			get: () => this.__data.backCurve,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.backCurve = value;
			},
		});

		Object.defineProperty(this, '_diameter', {
			enumerable: true,
			get: () => this.__data._diameter,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._diameter = new Element(value);
			},
		});

		Object.defineProperty(this, 'diameter', {
			enumerable: true,
			get: () => this.__data.diameter,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.diameter = value;
			},
		});

		Object.defineProperty(this, 'duration', {
			enumerable: true,
			get: () => this.__data.duration,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.duration = new Quantity(value);
			},
		});

		Object.defineProperty(this, '_color', {
			enumerable: true,
			get: () => this.__data._color,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._color = new Element(value);
			},
		});

		Object.defineProperty(this, 'color', {
			enumerable: true,
			get: () => this.__data.color,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.color = value;
			},
		});

		Object.defineProperty(this, '_brand', {
			enumerable: true,
			get: () => this.__data._brand,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._brand = new Element(value);
			},
		});

		Object.defineProperty(this, 'brand', {
			enumerable: true,
			get: () => this.__data.brand,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.brand = value;
			},
		});

		Object.defineProperty(this, '_notes', {
			enumerable: true,
			get: () => this.__data._notes,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._notes = new Element(value);
			},
		});

		Object.defineProperty(this, 'notes', {
			enumerable: true,
			get: () => this.__data.notes,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.notes = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'VisionPrescriptionDispense',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'VisionPrescriptionDispense';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			product: this.product && this.product.toJSON(),
			_eye: this._eye && this._eye.toJSON(),
			eye: this.eye,
			_sphere: this._sphere && this._sphere.toJSON(),
			sphere: this.sphere,
			_cylinder: this._cylinder && this._cylinder.toJSON(),
			cylinder: this.cylinder,
			_axis: this._axis && this._axis.toJSON(),
			axis: this.axis,
			_prism: this._prism && this._prism.toJSON(),
			prism: this.prism,
			_base: this._base && this._base.toJSON(),
			base: this.base,
			_add: this._add && this._add.toJSON(),
			add: this.add,
			_power: this._power && this._power.toJSON(),
			power: this.power,
			_backCurve: this._backCurve && this._backCurve.toJSON(),
			backCurve: this.backCurve,
			_diameter: this._diameter && this._diameter.toJSON(),
			diameter: this.diameter,
			duration: this.duration && this.duration.toJSON(),
			_color: this._color && this._color.toJSON(),
			color: this.color,
			_brand: this._brand && this._brand.toJSON(),
			brand: this.brand,
			_notes: this._notes && this._notes.toJSON(),
			notes: this.notes,
		};
	}
};
