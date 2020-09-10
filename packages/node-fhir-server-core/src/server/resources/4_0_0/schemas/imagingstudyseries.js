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

		Object.defineProperty(this, 'endpoint', {
			enumerable: true,
			get: () => this.__data.endpoint,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.endpoint = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

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

		Object.defineProperty(this, 'specimen', {
			enumerable: true,
			get: () => this.__data.specimen,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.specimen = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
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

		Object.defineProperty(this, 'performer', {
			enumerable: true,
			get: () => this.__data.performer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ImagingStudySeriesPerformer = require('./imagingstudyseriesperformer.js');
				this.__data.performer = Array.isArray(value)
					? value.map(v => new ImagingStudySeriesPerformer(v))
					: [new ImagingStudySeriesPerformer(value)];
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
			_uid: this._uid && this._uid.toJSON(),
			uid: this.uid,
			_number: this._number && this._number.toJSON(),
			number: this.number,
			modality: this.modality && this.modality.toJSON(),
			_description: this._description && this._description.toJSON(),
			description: this.description,
			_numberOfInstances: this._numberOfInstances && this._numberOfInstances.toJSON(),
			numberOfInstances: this.numberOfInstances,
			endpoint: this.endpoint && this.endpoint.map(v => v.toJSON()),
			bodySite: this.bodySite && this.bodySite.toJSON(),
			laterality: this.laterality && this.laterality.toJSON(),
			specimen: this.specimen && this.specimen.map(v => v.toJSON()),
			_started: this._started && this._started.toJSON(),
			started: this.started,
			performer: this.performer && this.performer.map(v => v.toJSON()),
			instance: this.instance && this.instance.map(v => v.toJSON()),
		};
	}
};
