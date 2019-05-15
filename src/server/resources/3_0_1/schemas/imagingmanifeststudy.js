/**
 * @name exports
 * @summary ImagingManifestStudy Class
 */
module.exports = class ImagingManifestStudy {
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

		Object.defineProperty(this, 'imagingStudy', {
			enumerable: true,
			get: () => this.__data.imagingStudy,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.imagingStudy = new Reference(value);
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

		Object.defineProperty(this, 'series', {
			enumerable: true,
			get: () => this.__data.series,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ImagingManifestStudySeries = require('./imagingmanifeststudyseries.js');
				this.__data.series = Array.isArray(value)
					? value.map(v => new ImagingManifestStudySeries(v))
					: [new ImagingManifestStudySeries(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ImagingManifestStudy',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ImagingManifestStudy';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_uid: this._uid && this._uid.toJSON(),
			uid: this.uid,
			imagingStudy: this.imagingStudy && this.imagingStudy.toJSON(),
			endpoint: this.endpoint && this.endpoint.map(v => v.toJSON()),
			series: this.series && this.series.map(v => v.toJSON()),
		};
	}
};
