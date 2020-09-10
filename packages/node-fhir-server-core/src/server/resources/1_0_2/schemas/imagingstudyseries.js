/**
 * @name exports
 * @summary ImagingStudySeries Class
 */
module.exports = class ImagingStudySeries {
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

		Object.defineProperty(this, '_number', {
			enumerable: true,
			get: () => this.__data._number,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._number = new Element(value);
			},
		});

		Object.defineProperty(this, 'number', {
			enumerable: true,
			get: () => this.__data.number,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.number = value;
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/dicom-cid29
		Object.defineProperty(this, 'modality', {
			enumerable: true,
			get: () => this.__data.modality,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.modality = new Coding(value);
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/body-site
		Object.defineProperty(this, 'bodySite', {
			enumerable: true,
			get: () => this.__data.bodySite,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.bodySite = new Coding(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/bodysite-laterality
		Object.defineProperty(this, 'laterality', {
			enumerable: true,
			get: () => this.__data.laterality,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.laterality = new Coding(value);
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

		Object.defineProperty(this, 'instance', {
			enumerable: true,
			get: () => this.__data.instance,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ImagingStudySeriesInstance = require('./imagingstudyseriesinstance.js');
				this.__data.instance = Array.isArray(value)
					? value.map(v => new ImagingStudySeriesInstance(v))
					: [new ImagingStudySeriesInstance(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ImagingStudySeries',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ImagingStudySeries';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_number: this._number && this._number.toJSON(),
			number: this.number,
			modality: this.modality && this.modality.toJSON(),
			_uid: this._uid && this._uid.toJSON(),
			uid: this.uid,
			_description: this._description && this._description.toJSON(),
			description: this.description,
			_numberOfInstances: this._numberOfInstances && this._numberOfInstances.toJSON(),
			numberOfInstances: this.numberOfInstances,
			_availability: this._availability && this._availability.toJSON(),
			availability: this.availability,
			_url: this._url && this._url.toJSON(),
			url: this.url,
			bodySite: this.bodySite && this.bodySite.toJSON(),
			laterality: this.laterality && this.laterality.toJSON(),
			_started: this._started && this._started.toJSON(),
			started: this.started,
			instance: this.instance && this.instance.map(v => v.toJSON()),
		};
	}
};
