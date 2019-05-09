/**
 * @name exports
 * @summary GoalTarget Class
 */
module.exports = class GoalTarget {
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

		Object.defineProperty(this, 'measure', {
			enumerable: true,
			get: () => this.__data.measure,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.measure = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'detailQuantity', {
			enumerable: true,
			get: () => this.__data.detailQuantity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.detailQuantity = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'detailRange', {
			enumerable: true,
			get: () => this.__data.detailRange,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Range = require('./range.js');
				this.__data.detailRange = new Range(value);
			},
		});

		Object.defineProperty(this, 'detailCodeableConcept', {
			enumerable: true,
			get: () => this.__data.detailCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.detailCodeableConcept = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_detailString', {
			enumerable: true,
			get: () => this.__data._detailString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._detailString = new Element(value);
			},
		});

		Object.defineProperty(this, 'detailString', {
			enumerable: true,
			get: () => this.__data.detailString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.detailString = value;
			},
		});

		Object.defineProperty(this, '_detailBoolean', {
			enumerable: true,
			get: () => this.__data._detailBoolean,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._detailBoolean = new Element(value);
			},
		});

		Object.defineProperty(this, 'detailBoolean', {
			enumerable: true,
			get: () => this.__data.detailBoolean,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.detailBoolean = value;
			},
		});

		Object.defineProperty(this, '_detailInteger', {
			enumerable: true,
			get: () => this.__data._detailInteger,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._detailInteger = new Element(value);
			},
		});

		Object.defineProperty(this, 'detailInteger', {
			enumerable: true,
			get: () => this.__data.detailInteger,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.detailInteger = value;
			},
		});

		Object.defineProperty(this, 'detailRatio', {
			enumerable: true,
			get: () => this.__data.detailRatio,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Ratio = require('./ratio.js');
				this.__data.detailRatio = new Ratio(value);
			},
		});

		Object.defineProperty(this, '_dueDate', {
			enumerable: true,
			get: () => this.__data._dueDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._dueDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'dueDate', {
			enumerable: true,
			get: () => this.__data.dueDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.dueDate = value;
			},
		});

		Object.defineProperty(this, 'dueDuration', {
			enumerable: true,
			get: () => this.__data.dueDuration,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Duration = require('./duration.js');
				this.__data.dueDuration = new Duration(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'GoalTarget',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'GoalTarget';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			measure: this.measure && this.measure.toJSON(),
			detailQuantity: this.detailQuantity && this.detailQuantity.toJSON(),
			detailRange: this.detailRange && this.detailRange.toJSON(),
			detailCodeableConcept: this.detailCodeableConcept && this.detailCodeableConcept.toJSON(),
			_detailString: this._detailString && this._detailString.toJSON(),
			detailString: this.detailString,
			_detailBoolean: this._detailBoolean && this._detailBoolean.toJSON(),
			detailBoolean: this.detailBoolean,
			_detailInteger: this._detailInteger && this._detailInteger.toJSON(),
			detailInteger: this.detailInteger,
			detailRatio: this.detailRatio && this.detailRatio.toJSON(),
			_dueDate: this._dueDate && this._dueDate.toJSON(),
			dueDate: this.dueDate,
			dueDuration: this.dueDuration && this.dueDuration.toJSON(),
		};
	}
};
