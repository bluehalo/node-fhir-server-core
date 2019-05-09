/**
 * @name exports
 * @summary ImagingStudy Class
 */
module.exports = class ImagingStudy {
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

		Object.defineProperty(this, '_started', {
			enumerable: true,
			get: () => this.__data._started,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._started = new Element(value);
			},
		});

		Object.defineProperty(this, 'started', {
			enumerable: true,
			get: () => this.__data.started,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.started = value;
			},
		});

		Object.defineProperty(this, 'patient', {
			enumerable: true,
			get: () => this.__data.patient,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.patient = new Reference(value);
			},
		});

		Object.defineProperty(this, '_uid', {
			enumerable: true,
			get: () => this.__data._uid,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._uid = new Element(value);
			},
		});

		Object.defineProperty(this, 'uid', {
			enumerable: true,
			get: () => this.__data.uid,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.uid = value;
			},
		});

		Object.defineProperty(this, 'accession', {
			enumerable: true,
			get: () => this.__data.accession,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.accession = new Identifier(value);
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

		Object.defineProperty(this, 'order', {
			enumerable: true,
			get: () => this.__data.order,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.order = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/dicom-cid29
		Object.defineProperty(this, 'modalityList', {
			enumerable: true,
			get: () => this.__data.modalityList,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.modalityList = Array.isArray(value) ? value.map(v => new Coding(v)) : [new Coding(value)];
			},
		});

		Object.defineProperty(this, 'referrer', {
			enumerable: true,
			get: () => this.__data.referrer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.referrer = new Reference(value);
			},
		});

		Object.defineProperty(this, '_availability', {
			enumerable: true,
			get: () => this.__data._availability,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._availability = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/instance-availability
		Object.defineProperty(this, 'availability', {
			enumerable: true,
			get: () => this.__data.availability,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.availability = value;
			},
		});

		Object.defineProperty(this, '_url', {
			enumerable: true,
			get: () => this.__data._url,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._url = new Element(value);
			},
		});

		Object.defineProperty(this, 'url', {
			enumerable: true,
			get: () => this.__data.url,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.url = value;
			},
		});

		Object.defineProperty(this, '_numberOfSeries', {
			enumerable: true,
			get: () => this.__data._numberOfSeries,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._numberOfSeries = new Element(value);
			},
		});

		Object.defineProperty(this, 'numberOfSeries', {
			enumerable: true,
			get: () => this.__data.numberOfSeries,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.numberOfSeries = value;
			},
		});

		Object.defineProperty(this, '_numberOfInstances', {
			enumerable: true,
			get: () => this.__data._numberOfInstances,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._numberOfInstances = new Element(value);
			},
		});

		Object.defineProperty(this, 'numberOfInstances', {
			enumerable: true,
			get: () => this.__data.numberOfInstances,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.numberOfInstances = value;
			},
		});

		Object.defineProperty(this, 'procedure', {
			enumerable: true,
			get: () => this.__data.procedure,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.procedure = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'interpreter', {
			enumerable: true,
			get: () => this.__data.interpreter,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.interpreter = new Reference(value);
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

		Object.defineProperty(this, 'series', {
			enumerable: true,
			get: () => this.__data.series,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ImagingStudySeries = require('./imagingstudyseries.js');
				this.__data.series = Array.isArray(value)
					? value.map(v => new ImagingStudySeries(v))
					: [new ImagingStudySeries(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ImagingStudy',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ImagingStudy';
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
			_started: this._started && this._started.toJSON(),
			started: this.started,
			patient: this.patient && this.patient.toJSON(),
			_uid: this._uid && this._uid.toJSON(),
			uid: this.uid,
			accession: this.accession && this.accession.toJSON(),
			identifier: this.identifier && this.identifier.map(v => v.toJSON()),
			order: this.order && this.order.map(v => v.toJSON()),
			modalityList: this.modalityList && this.modalityList.map(v => v.toJSON()),
			referrer: this.referrer && this.referrer.toJSON(),
			_availability: this._availability && this._availability.toJSON(),
			availability: this.availability,
			_url: this._url && this._url.toJSON(),
			url: this.url,
			_numberOfSeries: this._numberOfSeries && this._numberOfSeries.toJSON(),
			numberOfSeries: this.numberOfSeries,
			_numberOfInstances: this._numberOfInstances && this._numberOfInstances.toJSON(),
			numberOfInstances: this.numberOfInstances,
			procedure: this.procedure && this.procedure.map(v => v.toJSON()),
			interpreter: this.interpreter && this.interpreter.toJSON(),
			_description: this._description && this._description.toJSON(),
			description: this.description,
			series: this.series && this.series.map(v => v.toJSON()),
		};
	}
};
