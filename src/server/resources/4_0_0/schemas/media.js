/**
 * @name exports
 * @summary Media Class
 */
module.exports = class Media {
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

		Object.defineProperty(this, 'basedOn', {
			enumerable: true,
			get: () => this.__data.basedOn,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.basedOn = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'partOf', {
			enumerable: true,
			get: () => this.__data.partOf,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.partOf = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
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

		Object.defineProperty(this, 'modality', {
			enumerable: true,
			get: () => this.__data.modality,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.modality = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'view', {
			enumerable: true,
			get: () => this.__data.view,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.view = new CodeableConcept(value);
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

		Object.defineProperty(this, 'encounter', {
			enumerable: true,
			get: () => this.__data.encounter,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.encounter = new Reference(value);
			},
		});

		Object.defineProperty(this, '_createdDateTime', {
			enumerable: true,
			get: () => this.__data._createdDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._createdDateTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'createdDateTime', {
			enumerable: true,
			get: () => this.__data.createdDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.createdDateTime = value;
			},
		});

		Object.defineProperty(this, 'createdPeriod', {
			enumerable: true,
			get: () => this.__data.createdPeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.createdPeriod = new Period(value);
			},
		});

		Object.defineProperty(this, '_issued', {
			enumerable: true,
			get: () => this.__data._issued,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._issued = new Element(value);
			},
		});

		Object.defineProperty(this, 'issued', {
			enumerable: true,
			get: () => this.__data.issued,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.issued = value;
			},
		});

		Object.defineProperty(this, 'operator', {
			enumerable: true,
			get: () => this.__data.operator,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.operator = new Reference(value);
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

		Object.defineProperty(this, 'bodySite', {
			enumerable: true,
			get: () => this.__data.bodySite,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.bodySite = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_deviceName', {
			enumerable: true,
			get: () => this.__data._deviceName,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._deviceName = new Element(value);
			},
		});

		Object.defineProperty(this, 'deviceName', {
			enumerable: true,
			get: () => this.__data.deviceName,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.deviceName = value;
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

		Object.defineProperty(this, '_height', {
			enumerable: true,
			get: () => this.__data._height,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._height = new Element(value);
			},
		});

		Object.defineProperty(this, 'height', {
			enumerable: true,
			get: () => this.__data.height,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.height = value;
			},
		});

		Object.defineProperty(this, '_width', {
			enumerable: true,
			get: () => this.__data._width,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._width = new Element(value);
			},
		});

		Object.defineProperty(this, 'width', {
			enumerable: true,
			get: () => this.__data.width,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.width = value;
			},
		});

		Object.defineProperty(this, '_frames', {
			enumerable: true,
			get: () => this.__data._frames,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._frames = new Element(value);
			},
		});

		Object.defineProperty(this, 'frames', {
			enumerable: true,
			get: () => this.__data.frames,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.frames = value;
			},
		});

		Object.defineProperty(this, '_duration', {
			enumerable: true,
			get: () => this.__data._duration,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._duration = new Element(value);
			},
		});

		Object.defineProperty(this, 'duration', {
			enumerable: true,
			get: () => this.__data.duration,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.duration = value;
			},
		});

		Object.defineProperty(this, 'content', {
			enumerable: true,
			get: () => this.__data.content,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Attachment = require('./attachment.js');
				this.__data.content = new Attachment(value);
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

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Media',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Media';
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
			basedOn: this.basedOn && this.basedOn.map(v => v.toJSON()),
			partOf: this.partOf && this.partOf.map(v => v.toJSON()),
			_status: this._status && this._status.toJSON(),
			status: this.status,
			type: this.type && this.type.toJSON(),
			modality: this.modality && this.modality.toJSON(),
			view: this.view && this.view.toJSON(),
			subject: this.subject && this.subject.toJSON(),
			encounter: this.encounter && this.encounter.toJSON(),
			_createdDateTime: this._createdDateTime && this._createdDateTime.toJSON(),
			createdDateTime: this.createdDateTime,
			createdPeriod: this.createdPeriod && this.createdPeriod.toJSON(),
			_issued: this._issued && this._issued.toJSON(),
			issued: this.issued,
			operator: this.operator && this.operator.toJSON(),
			reasonCode: this.reasonCode && this.reasonCode.map(v => v.toJSON()),
			bodySite: this.bodySite && this.bodySite.toJSON(),
			_deviceName: this._deviceName && this._deviceName.toJSON(),
			deviceName: this.deviceName,
			device: this.device && this.device.toJSON(),
			_height: this._height && this._height.toJSON(),
			height: this.height,
			_width: this._width && this._width.toJSON(),
			width: this.width,
			_frames: this._frames && this._frames.toJSON(),
			frames: this.frames,
			_duration: this._duration && this._duration.toJSON(),
			duration: this.duration,
			content: this.content && this.content.toJSON(),
			note: this.note && this.note.map(v => v.toJSON()),
		};
	}
};
