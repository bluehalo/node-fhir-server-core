/**
 * @name exports
 * @summary DeviceUseStatement Class
 */
module.exports = class DeviceUseStatement {
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

		Object.defineProperty(this, 'meta', {
			enumerable: true,
			get: () => this.__data.meta,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Meta = require('./meta.js');
				this.__data.meta = new Meta(value);
			},
		});

		Object.defineProperty(this, '_implicitRules', {
			enumerable: true,
			get: () => this.__data._implicitRules,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._implicitRules = new Element(value);
			},
		});

		Object.defineProperty(this, 'implicitRules', {
			enumerable: true,
			get: () => this.__data.implicitRules,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.implicitRules = value;
			},
		});

		Object.defineProperty(this, '_language', {
			enumerable: true,
			get: () => this.__data._language,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._language = new Element(value);
			},
		});

		Object.defineProperty(this, 'language', {
			enumerable: true,
			get: () => this.__data.language,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.language = value;
			},
		});

		Object.defineProperty(this, 'text', {
			enumerable: true,
			get: () => this.__data.text,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Narrative = require('./narrative.js');
				this.__data.text = new Narrative(value);
			},
		});

		Object.defineProperty(this, 'contained', {
			enumerable: true,
			get: () => this.__data.contained,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.contained = Array.isArray(value) ? value.map(v => v) : [value];
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

		Object.defineProperty(this, 'bodySiteCodeableConcept', {
			enumerable: true,
			get: () => this.__data.bodySiteCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.bodySiteCodeableConcept = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'bodySiteReference', {
			enumerable: true,
			get: () => this.__data.bodySiteReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.bodySiteReference = new Reference(value);
			},
		});

		Object.defineProperty(this, 'whenUsed', {
			enumerable: true,
			get: () => this.__data.whenUsed,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.whenUsed = new Period(value);
			},
		});

		Object.defineProperty(this, 'device', {
			enumerable: true,
			get: () => this.__data.device,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.device = new Reference(value);
			},
		});

		Object.defineProperty(this, 'identifier', {
			enumerable: true,
			get: () => this.__data.identifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.identifier = Array.isArray(value) ? value.map(v => new Identifier(v)) : [new Identifier(value)];
			},
		});

		Object.defineProperty(this, 'indication', {
			enumerable: true,
			get: () => this.__data.indication,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.indication = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
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

				this.__data.notes = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_recordedOn', {
			enumerable: true,
			get: () => this.__data._recordedOn,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._recordedOn = new Element(value);
			},
		});

		Object.defineProperty(this, 'recordedOn', {
			enumerable: true,
			get: () => this.__data.recordedOn,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.recordedOn = value;
			},
		});

		Object.defineProperty(this, 'subject', {
			enumerable: true,
			get: () => this.__data.subject,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.subject = new Reference(value);
			},
		});

		Object.defineProperty(this, 'timingTiming', {
			enumerable: true,
			get: () => this.__data.timingTiming,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Timing = require('./timing.js');
				this.__data.timingTiming = new Timing(value);
			},
		});

		Object.defineProperty(this, 'timingPeriod', {
			enumerable: true,
			get: () => this.__data.timingPeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.timingPeriod = new Period(value);
			},
		});

		Object.defineProperty(this, '_timingDateTime', {
			enumerable: true,
			get: () => this.__data._timingDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._timingDateTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'timingDateTime', {
			enumerable: true,
			get: () => this.__data.timingDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.timingDateTime = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'DeviceUseStatement',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'DeviceUseStatement';
	}

	toJSON() {
		return {
			resourceType: this.resourceType,
			id: this.id,
			meta: this.meta && this.meta.toJSON(),
			_implicitRules: this._implicitRules && this._implicitRules.toJSON(),
			implicitRules: this.implicitRules,
			_language: this._language && this._language.toJSON(),
			language: this.language,
			text: this.text && this.text.toJSON(),
			contained: this.contained,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			bodySiteCodeableConcept: this.bodySiteCodeableConcept && this.bodySiteCodeableConcept.toJSON(),
			bodySiteReference: this.bodySiteReference && this.bodySiteReference.toJSON(),
			whenUsed: this.whenUsed && this.whenUsed.toJSON(),
			device: this.device && this.device.toJSON(),
			identifier: this.identifier && this.identifier.map(v => v.toJSON()),
			indication: this.indication && this.indication.map(v => v.toJSON()),
			_notes: this._notes && this._notes.toJSON(),
			notes: this.notes,
			_recordedOn: this._recordedOn && this._recordedOn.toJSON(),
			recordedOn: this.recordedOn,
			subject: this.subject && this.subject.toJSON(),
			timingTiming: this.timingTiming && this.timingTiming.toJSON(),
			timingPeriod: this.timingPeriod && this.timingPeriod.toJSON(),
			_timingDateTime: this._timingDateTime && this._timingDateTime.toJSON(),
			timingDateTime: this.timingDateTime,
		};
	}
};
