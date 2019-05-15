/**
 * @name exports
 * @summary Appointment Class
 */
module.exports = class Appointment {
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/appointmentstatus
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/c80-practice-codes
		Object.defineProperty(this, 'type', {
			enumerable: true,
			get: () => this.__data.type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.type = new CodeableConcept(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/encounter-reason
		Object.defineProperty(this, 'reason', {
			enumerable: true,
			get: () => this.__data.reason,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.reason = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_priority', {
			enumerable: true,
			get: () => this.__data._priority,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._priority = new Element(value);
			},
		});

		Object.defineProperty(this, 'priority', {
			enumerable: true,
			get: () => this.__data.priority,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.priority = value;
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

		Object.defineProperty(this, '_start', {
			enumerable: true,
			get: () => this.__data._start,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._start = new Element(value);
			},
		});

		Object.defineProperty(this, 'start', {
			enumerable: true,
			get: () => this.__data.start,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.start = value;
			},
		});

		Object.defineProperty(this, '_end', {
			enumerable: true,
			get: () => this.__data._end,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._end = new Element(value);
			},
		});

		Object.defineProperty(this, 'end', {
			enumerable: true,
			get: () => this.__data.end,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.end = value;
			},
		});

		Object.defineProperty(this, '_minutesDuration', {
			enumerable: true,
			get: () => this.__data._minutesDuration,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._minutesDuration = new Element(value);
			},
		});

		Object.defineProperty(this, 'minutesDuration', {
			enumerable: true,
			get: () => this.__data.minutesDuration,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.minutesDuration = value;
			},
		});

		Object.defineProperty(this, 'slot', {
			enumerable: true,
			get: () => this.__data.slot,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.slot = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, '_comment', {
			enumerable: true,
			get: () => this.__data._comment,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._comment = new Element(value);
			},
		});

		Object.defineProperty(this, 'comment', {
			enumerable: true,
			get: () => this.__data.comment,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.comment = value;
			},
		});

		Object.defineProperty(this, 'participant', {
			enumerable: true,
			get: () => this.__data.participant,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let AppointmentParticipant = require('./appointmentparticipant.js');
				this.__data.participant = Array.isArray(value)
					? value.map(v => new AppointmentParticipant(v))
					: [new AppointmentParticipant(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Appointment',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Appointment';
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
			identifier: this.identifier && this.identifier.map(v => v.toJSON()),
			_status: this._status && this._status.toJSON(),
			status: this.status,
			type: this.type && this.type.toJSON(),
			reason: this.reason && this.reason.toJSON(),
			_priority: this._priority && this._priority.toJSON(),
			priority: this.priority,
			_description: this._description && this._description.toJSON(),
			description: this.description,
			_start: this._start && this._start.toJSON(),
			start: this.start,
			_end: this._end && this._end.toJSON(),
			end: this.end,
			_minutesDuration: this._minutesDuration && this._minutesDuration.toJSON(),
			minutesDuration: this.minutesDuration,
			slot: this.slot && this.slot.map(v => v.toJSON()),
			_comment: this._comment && this._comment.toJSON(),
			comment: this.comment,
			participant: this.participant && this.participant.map(v => v.toJSON()),
		};
	}
};
