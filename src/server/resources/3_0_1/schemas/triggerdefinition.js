/**
 * @name exports
 * @summary TriggerDefinition Class
 */
module.exports = class TriggerDefinition {
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

		Object.defineProperty(this, '_type', {
			enumerable: true,
			get: () => this.__data._type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._type = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/trigger-type
		Object.defineProperty(this, 'type', {
			enumerable: true,
			get: () => this.__data.type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.type = value;
			},
		});

		Object.defineProperty(this, '_eventName', {
			enumerable: true,
			get: () => this.__data._eventName,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._eventName = new Element(value);
			},
		});

		Object.defineProperty(this, 'eventName', {
			enumerable: true,
			get: () => this.__data.eventName,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.eventName = value;
			},
		});

		Object.defineProperty(this, 'eventTimingTiming', {
			enumerable: true,
			get: () => this.__data.eventTimingTiming,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Timing = require('./timing.js');
				this.__data.eventTimingTiming = new Timing(value);
			},
		});

		Object.defineProperty(this, 'eventTimingReference', {
			enumerable: true,
			get: () => this.__data.eventTimingReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.eventTimingReference = new Reference(value);
			},
		});

		Object.defineProperty(this, '_eventTimingDate', {
			enumerable: true,
			get: () => this.__data._eventTimingDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._eventTimingDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'eventTimingDate', {
			enumerable: true,
			get: () => this.__data.eventTimingDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.eventTimingDate = value;
			},
		});

		Object.defineProperty(this, '_eventTimingDateTime', {
			enumerable: true,
			get: () => this.__data._eventTimingDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._eventTimingDateTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'eventTimingDateTime', {
			enumerable: true,
			get: () => this.__data.eventTimingDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.eventTimingDateTime = value;
			},
		});

		Object.defineProperty(this, 'eventData', {
			enumerable: true,
			get: () => this.__data.eventData,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let DataRequirement = require('./datarequirement.js');
				this.__data.eventData = new DataRequirement(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'TriggerDefinition',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'TriggerDefinition';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			_type: this._type && this._type.toJSON(),
			type: this.type,
			_eventName: this._eventName && this._eventName.toJSON(),
			eventName: this.eventName,
			eventTimingTiming: this.eventTimingTiming && this.eventTimingTiming.toJSON(),
			eventTimingReference: this.eventTimingReference && this.eventTimingReference.toJSON(),
			_eventTimingDate: this._eventTimingDate && this._eventTimingDate.toJSON(),
			eventTimingDate: this.eventTimingDate,
			_eventTimingDateTime: this._eventTimingDateTime && this._eventTimingDateTime.toJSON(),
			eventTimingDateTime: this.eventTimingDateTime,
			eventData: this.eventData && this.eventData.toJSON(),
		};
	}
};
