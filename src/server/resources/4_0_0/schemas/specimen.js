/**
 * @name exports
 * @summary Specimen Class
 */
module.exports = class Specimen {
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

		Object.defineProperty(this, 'accessionIdentifier', {
			enumerable: true,
			get: () => this.__data.accessionIdentifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.accessionIdentifier = new Identifier(value);
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

		Object.defineProperty(this, '_receivedTime', {
			enumerable: true,
			get: () => this.__data._receivedTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._receivedTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'receivedTime', {
			enumerable: true,
			get: () => this.__data.receivedTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.receivedTime = value;
			},
		});

		Object.defineProperty(this, 'parent', {
			enumerable: true,
			get: () => this.__data.parent,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.parent = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'request', {
			enumerable: true,
			get: () => this.__data.request,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.request = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'collection', {
			enumerable: true,
			get: () => this.__data.collection,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SpecimenCollection = require('./specimencollection.js');
				this.__data.collection = new SpecimenCollection(value);
			},
		});

		Object.defineProperty(this, 'processing', {
			enumerable: true,
			get: () => this.__data.processing,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SpecimenProcessing = require('./specimenprocessing.js');
				this.__data.processing = Array.isArray(value)
					? value.map(v => new SpecimenProcessing(v))
					: [new SpecimenProcessing(value)];
			},
		});

		Object.defineProperty(this, 'container', {
			enumerable: true,
			get: () => this.__data.container,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SpecimenContainer = require('./specimencontainer.js');
				this.__data.container = Array.isArray(value)
					? value.map(v => new SpecimenContainer(v))
					: [new SpecimenContainer(value)];
			},
		});

		Object.defineProperty(this, 'condition', {
			enumerable: true,
			get: () => this.__data.condition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.condition = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
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
			value: 'Specimen',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Specimen';
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
			accessionIdentifier: this.accessionIdentifier && this.accessionIdentifier.toJSON(),
			_status: this._status && this._status.toJSON(),
			status: this.status,
			type: this.type && this.type.toJSON(),
			subject: this.subject && this.subject.toJSON(),
			_receivedTime: this._receivedTime && this._receivedTime.toJSON(),
			receivedTime: this.receivedTime,
			parent: this.parent && this.parent.map(v => v.toJSON()),
			request: this.request && this.request.map(v => v.toJSON()),
			collection: this.collection && this.collection.toJSON(),
			processing: this.processing && this.processing.map(v => v.toJSON()),
			container: this.container && this.container.map(v => v.toJSON()),
			condition: this.condition && this.condition.map(v => v.toJSON()),
			note: this.note && this.note.map(v => v.toJSON()),
		};
	}
};
