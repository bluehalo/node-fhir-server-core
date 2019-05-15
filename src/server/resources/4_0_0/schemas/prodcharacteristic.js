/**
 * @name exports
 * @summary ProdCharacteristic Class
 */
module.exports = class ProdCharacteristic {
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

		Object.defineProperty(this, 'height', {
			enumerable: true,
			get: () => this.__data.height,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.height = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'width', {
			enumerable: true,
			get: () => this.__data.width,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.width = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'depth', {
			enumerable: true,
			get: () => this.__data.depth,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.depth = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'weight', {
			enumerable: true,
			get: () => this.__data.weight,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.weight = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'nominalVolume', {
			enumerable: true,
			get: () => this.__data.nominalVolume,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.nominalVolume = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'externalDiameter', {
			enumerable: true,
			get: () => this.__data.externalDiameter,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.externalDiameter = new Quantity(value);
			},
		});

		Object.defineProperty(this, '_shape', {
			enumerable: true,
			get: () => this.__data._shape,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._shape = new Element(value);
			},
		});

		Object.defineProperty(this, 'shape', {
			enumerable: true,
			get: () => this.__data.shape,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.shape = value;
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

				this.__data.color = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_imprint', {
			enumerable: true,
			get: () => this.__data._imprint,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._imprint = new Element(value);
			},
		});

		Object.defineProperty(this, 'imprint', {
			enumerable: true,
			get: () => this.__data.imprint,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.imprint = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'image', {
			enumerable: true,
			get: () => this.__data.image,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Attachment = require('./attachment.js');
				this.__data.image = Array.isArray(value) ? value.map(v => new Attachment(v)) : [new Attachment(value)];
			},
		});

		Object.defineProperty(this, 'scoring', {
			enumerable: true,
			get: () => this.__data.scoring,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.scoring = new CodeableConcept(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ProdCharacteristic',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ProdCharacteristic';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			height: this.height && this.height.toJSON(),
			width: this.width && this.width.toJSON(),
			depth: this.depth && this.depth.toJSON(),
			weight: this.weight && this.weight.toJSON(),
			nominalVolume: this.nominalVolume && this.nominalVolume.toJSON(),
			externalDiameter: this.externalDiameter && this.externalDiameter.toJSON(),
			_shape: this._shape && this._shape.toJSON(),
			shape: this.shape,
			_color: this._color && this._color.toJSON(),
			color: this.color,
			_imprint: this._imprint && this._imprint.toJSON(),
			imprint: this.imprint,
			image: this.image && this.image.map(v => v.toJSON()),
			scoring: this.scoring && this.scoring.toJSON(),
		};
	}
};
