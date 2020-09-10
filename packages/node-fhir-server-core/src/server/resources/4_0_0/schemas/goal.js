/**
 * @name exports
 * @summary Goal Class
 */
module.exports = class Goal {
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

		Object.defineProperty(this, '_lifecycleStatus', {
			enumerable: true,
			get: () => this.__data._lifecycleStatus,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._lifecycleStatus = new Element(value);
			},
		});

		Object.defineProperty(this, 'lifecycleStatus', {
			enumerable: true,
			get: () => this.__data.lifecycleStatus,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.lifecycleStatus = value;
			},
		});

		Object.defineProperty(this, 'achievementStatus', {
			enumerable: true,
			get: () => this.__data.achievementStatus,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.achievementStatus = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'category', {
			enumerable: true,
			get: () => this.__data.category,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.category = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'priority', {
			enumerable: true,
			get: () => this.__data.priority,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.priority = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'description', {
			enumerable: true,
			get: () => this.__data.description,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.description = new CodeableConcept(value);
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

		Object.defineProperty(this, '_startDate', {
			enumerable: true,
			get: () => this.__data._startDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._startDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'startDate', {
			enumerable: true,
			get: () => this.__data.startDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.startDate = value;
			},
		});

		Object.defineProperty(this, 'startCodeableConcept', {
			enumerable: true,
			get: () => this.__data.startCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.startCodeableConcept = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'target', {
			enumerable: true,
			get: () => this.__data.target,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let GoalTarget = require('./goaltarget.js');
				this.__data.target = Array.isArray(value) ? value.map(v => new GoalTarget(v)) : [new GoalTarget(value)];
			},
		});

		Object.defineProperty(this, '_statusDate', {
			enumerable: true,
			get: () => this.__data._statusDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._statusDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'statusDate', {
			enumerable: true,
			get: () => this.__data.statusDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.statusDate = value;
			},
		});

		Object.defineProperty(this, '_statusReason', {
			enumerable: true,
			get: () => this.__data._statusReason,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._statusReason = new Element(value);
			},
		});

		Object.defineProperty(this, 'statusReason', {
			enumerable: true,
			get: () => this.__data.statusReason,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.statusReason = value;
			},
		});

		Object.defineProperty(this, 'expressedBy', {
			enumerable: true,
			get: () => this.__data.expressedBy,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.expressedBy = new Reference(value);
			},
		});

		Object.defineProperty(this, 'addresses', {
			enumerable: true,
			get: () => this.__data.addresses,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.addresses = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'note', {
			enumerable: true,
			get: () => this.__data.note,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Annotation = require('./annotation.js');
				this.__data.note = Array.isArray(value) ? value.map(v => new Annotation(v)) : [new Annotation(value)];
			},
		});

		Object.defineProperty(this, 'outcomeCode', {
			enumerable: true,
			get: () => this.__data.outcomeCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.outcomeCode = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'outcomeReference', {
			enumerable: true,
			get: () => this.__data.outcomeReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.outcomeReference = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Goal',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Goal';
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
			_lifecycleStatus: this._lifecycleStatus && this._lifecycleStatus.toJSON(),
			lifecycleStatus: this.lifecycleStatus,
			achievementStatus: this.achievementStatus && this.achievementStatus.toJSON(),
			category: this.category && this.category.map(v => v.toJSON()),
			priority: this.priority && this.priority.toJSON(),
			description: this.description && this.description.toJSON(),
			subject: this.subject && this.subject.toJSON(),
			_startDate: this._startDate && this._startDate.toJSON(),
			startDate: this.startDate,
			startCodeableConcept: this.startCodeableConcept && this.startCodeableConcept.toJSON(),
			target: this.target && this.target.map(v => v.toJSON()),
			_statusDate: this._statusDate && this._statusDate.toJSON(),
			statusDate: this.statusDate,
			_statusReason: this._statusReason && this._statusReason.toJSON(),
			statusReason: this.statusReason,
			expressedBy: this.expressedBy && this.expressedBy.toJSON(),
			addresses: this.addresses && this.addresses.map(v => v.toJSON()),
			note: this.note && this.note.map(v => v.toJSON()),
			outcomeCode: this.outcomeCode && this.outcomeCode.map(v => v.toJSON()),
			outcomeReference: this.outcomeReference && this.outcomeReference.map(v => v.toJSON()),
		};
	}
};
