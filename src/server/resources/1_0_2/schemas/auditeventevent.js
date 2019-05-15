/**
 * @name exports
 * @summary AuditEventEvent Class
 */
module.exports = class AuditEventEvent {
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/audit-event-type
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/audit-event-sub-type
		Object.defineProperty(this, 'subtype', {
			enumerable: true,
			get: () => this.__data.subtype,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.subtype = Array.isArray(value) ? value.map(v => new Coding(v)) : [new Coding(value)];
			},
		});

		Object.defineProperty(this, '_action', {
			enumerable: true,
			get: () => this.__data._action,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._action = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/audit-event-action
		Object.defineProperty(this, 'action', {
			enumerable: true,
			get: () => this.__data.action,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.action = value;
			},
		});

		Object.defineProperty(this, '_dateTime', {
			enumerable: true,
			get: () => this.__data._dateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._dateTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'dateTime', {
			enumerable: true,
			get: () => this.__data.dateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.dateTime = value;
			},
		});

		Object.defineProperty(this, '_outcome', {
			enumerable: true,
			get: () => this.__data._outcome,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._outcome = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/audit-event-outcome
		Object.defineProperty(this, 'outcome', {
			enumerable: true,
			get: () => this.__data.outcome,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.outcome = value;
			},
		});

		Object.defineProperty(this, '_outcomeDesc', {
			enumerable: true,
			get: () => this.__data._outcomeDesc,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._outcomeDesc = new Element(value);
			},
		});

		Object.defineProperty(this, 'outcomeDesc', {
			enumerable: true,
			get: () => this.__data.outcomeDesc,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.outcomeDesc = value;
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-PurposeOfUse
		Object.defineProperty(this, 'purposeOfEvent', {
			enumerable: true,
			get: () => this.__data.purposeOfEvent,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.purposeOfEvent = Array.isArray(value) ? value.map(v => new Coding(v)) : [new Coding(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'AuditEventEvent',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'AuditEventEvent';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			type: this.type && this.type.toJSON(),
			subtype: this.subtype && this.subtype.map(v => v.toJSON()),
			_action: this._action && this._action.toJSON(),
			action: this.action,
			_dateTime: this._dateTime && this._dateTime.toJSON(),
			dateTime: this.dateTime,
			_outcome: this._outcome && this._outcome.toJSON(),
			outcome: this.outcome,
			_outcomeDesc: this._outcomeDesc && this._outcomeDesc.toJSON(),
			outcomeDesc: this.outcomeDesc,
			purposeOfEvent: this.purposeOfEvent && this.purposeOfEvent.map(v => v.toJSON()),
		};
	}
};
