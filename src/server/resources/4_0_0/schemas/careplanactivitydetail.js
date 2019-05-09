/**
 * @name exports
 * @summary CarePlanActivityDetail Class
 */
module.exports = class CarePlanActivityDetail {
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

		Object.defineProperty(this, '_kind', {
			enumerable: true,
			get: () => this.__data._kind,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._kind = new Element(value);
			},
		});

		Object.defineProperty(this, 'kind', {
			enumerable: true,
			get: () => this.__data.kind,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.kind = value;
			},
		});

		Object.defineProperty(this, '_instantiatesCanonical', {
			enumerable: true,
			get: () => this.__data._instantiatesCanonical,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._instantiatesCanonical = new Element(value);
			},
		});

		Object.defineProperty(this, 'instantiatesCanonical', {
			enumerable: true,
			get: () => this.__data.instantiatesCanonical,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.instantiatesCanonical = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_instantiatesUri', {
			enumerable: true,
			get: () => this.__data._instantiatesUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._instantiatesUri = new Element(value);
			},
		});

		Object.defineProperty(this, 'instantiatesUri', {
			enumerable: true,
			get: () => this.__data.instantiatesUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.instantiatesUri = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'code', {
			enumerable: true,
			get: () => this.__data.code,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.code = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'reasonCode', {
			enumerable: true,
			get: () => this.__data.reasonCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.reasonCode = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'reasonReference', {
			enumerable: true,
			get: () => this.__data.reasonReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.reasonReference = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'goal', {
			enumerable: true,
			get: () => this.__data.goal,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.goal = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, '_status', {
			enumerable: true,
			get: () => this.__data._status,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._status = new Element(value);
			},
		});

		Object.defineProperty(this, 'status', {
			enumerable: true,
			get: () => this.__data.status,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.status = value;
			},
		});

		Object.defineProperty(this, 'statusReason', {
			enumerable: true,
			get: () => this.__data.statusReason,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.statusReason = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_doNotPerform', {
			enumerable: true,
			get: () => this.__data._doNotPerform,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._doNotPerform = new Element(value);
			},
		});

		Object.defineProperty(this, 'doNotPerform', {
			enumerable: true,
			get: () => this.__data.doNotPerform,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.doNotPerform = value;
			},
		});

		Object.defineProperty(this, 'scheduledTiming', {
			enumerable: true,
			get: () => this.__data.scheduledTiming,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Timing = require('./timing.js');
				this.__data.scheduledTiming = new Timing(value);
			},
		});

		Object.defineProperty(this, 'scheduledPeriod', {
			enumerable: true,
			get: () => this.__data.scheduledPeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.scheduledPeriod = new Period(value);
			},
		});

		Object.defineProperty(this, '_scheduledString', {
			enumerable: true,
			get: () => this.__data._scheduledString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._scheduledString = new Element(value);
			},
		});

		Object.defineProperty(this, 'scheduledString', {
			enumerable: true,
			get: () => this.__data.scheduledString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.scheduledString = value;
			},
		});

		Object.defineProperty(this, 'location', {
			enumerable: true,
			get: () => this.__data.location,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.location = new Reference(value);
			},
		});

		Object.defineProperty(this, 'performer', {
			enumerable: true,
			get: () => this.__data.performer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.performer = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'productCodeableConcept', {
			enumerable: true,
			get: () => this.__data.productCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.productCodeableConcept = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'productReference', {
			enumerable: true,
			get: () => this.__data.productReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.productReference = new Reference(value);
			},
		});

		Object.defineProperty(this, 'dailyAmount', {
			enumerable: true,
			get: () => this.__data.dailyAmount,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.dailyAmount = new Quantity(value);
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

		Object.defineProperty(this, '_description', {
			enumerable: true,
			get: () => this.__data._description,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._description = new Element(value);
			},
		});

		Object.defineProperty(this, 'description', {
			enumerable: true,
			get: () => this.__data.description,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.description = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'CarePlanActivityDetail',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'CarePlanActivityDetail';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_kind: this._kind && this._kind.toJSON(),
			kind: this.kind,
			_instantiatesCanonical: this._instantiatesCanonical && this._instantiatesCanonical.toJSON(),
			instantiatesCanonical: this.instantiatesCanonical,
			_instantiatesUri: this._instantiatesUri && this._instantiatesUri.toJSON(),
			instantiatesUri: this.instantiatesUri,
			code: this.code && this.code.toJSON(),
			reasonCode: this.reasonCode && this.reasonCode.map(v => v.toJSON()),
			reasonReference: this.reasonReference && this.reasonReference.map(v => v.toJSON()),
			goal: this.goal && this.goal.map(v => v.toJSON()),
			_status: this._status && this._status.toJSON(),
			status: this.status,
			statusReason: this.statusReason && this.statusReason.toJSON(),
			_doNotPerform: this._doNotPerform && this._doNotPerform.toJSON(),
			doNotPerform: this.doNotPerform,
			scheduledTiming: this.scheduledTiming && this.scheduledTiming.toJSON(),
			scheduledPeriod: this.scheduledPeriod && this.scheduledPeriod.toJSON(),
			_scheduledString: this._scheduledString && this._scheduledString.toJSON(),
			scheduledString: this.scheduledString,
			location: this.location && this.location.toJSON(),
			performer: this.performer && this.performer.map(v => v.toJSON()),
			productCodeableConcept: this.productCodeableConcept && this.productCodeableConcept.toJSON(),
			productReference: this.productReference && this.productReference.toJSON(),
			dailyAmount: this.dailyAmount && this.dailyAmount.toJSON(),
			quantity: this.quantity && this.quantity.toJSON(),
			_description: this._description && this._description.toJSON(),
			description: this.description,
		};
	}
};
