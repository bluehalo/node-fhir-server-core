/**
 * @name exports
 * @summary ImagingObjectSelectionStudySeriesInstance Class
 */
module.exports = class ImagingObjectSelectionStudySeriesInstance {
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

		Object.defineProperty(this, '_sopClass', {
			enumerable: true,
			get: () => this.__data._sopClass,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._sopClass = new Element(value);
			},
		});

		Object.defineProperty(this, 'sopClass', {
			enumerable: true,
			get: () => this.__data.sopClass,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.sopClass = value;
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

		Object.defineProperty(this, 'frames', {
			enumerable: true,
			get: () => this.__data.frames,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ImagingObjectSelectionStudySeriesInstanceFrames = require('./imagingobjectselectionstudyseriesinstanceframes.js');
				this.__data.frames = Array.isArray(value)
					? value.map(v => new ImagingObjectSelectionStudySeriesInstanceFrames(v))
					: [new ImagingObjectSelectionStudySeriesInstanceFrames(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ImagingObjectSelectionStudySeriesInstance',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ImagingObjectSelectionStudySeriesInstance';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_sopClass: this._sopClass && this._sopClass.toJSON(),
			sopClass: this.sopClass,
			_uid: this._uid && this._uid.toJSON(),
			uid: this.uid,
			_url: this._url && this._url.toJSON(),
			url: this.url,
			frames: this.frames && this.frames.map(v => v.toJSON()),
		};
	}
};
