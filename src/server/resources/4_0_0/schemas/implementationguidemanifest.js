/**
 * @name exports
 * @summary ImplementationGuideManifest Class
 */
module.exports = class ImplementationGuideManifest {
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

		Object.defineProperty(this, '_rendering', {
			enumerable: true,
			get: () => this.__data._rendering,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._rendering = new Element(value);
			},
		});

		Object.defineProperty(this, 'rendering', {
			enumerable: true,
			get: () => this.__data.rendering,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.rendering = value;
			},
		});

		Object.defineProperty(this, 'resource', {
			enumerable: true,
			get: () => this.__data.resource,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ImplementationGuideManifestResource = require('./implementationguidemanifestresource.js');
				this.__data.resource = Array.isArray(value)
					? value.map(v => new ImplementationGuideManifestResource(v))
					: [new ImplementationGuideManifestResource(value)];
			},
		});

		Object.defineProperty(this, 'page', {
			enumerable: true,
			get: () => this.__data.page,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ImplementationGuideManifestPage = require('./implementationguidemanifestpage.js');
				this.__data.page = Array.isArray(value)
					? value.map(v => new ImplementationGuideManifestPage(v))
					: [new ImplementationGuideManifestPage(value)];
			},
		});

		Object.defineProperty(this, '_image', {
			enumerable: true,
			get: () => this.__data._image,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._image = new Element(value);
			},
		});

		Object.defineProperty(this, 'image', {
			enumerable: true,
			get: () => this.__data.image,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.image = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_other', {
			enumerable: true,
			get: () => this.__data._other,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._other = new Element(value);
			},
		});

		Object.defineProperty(this, 'other', {
			enumerable: true,
			get: () => this.__data.other,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.other = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ImplementationGuideManifest',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ImplementationGuideManifest';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_rendering: this._rendering && this._rendering.toJSON(),
			rendering: this.rendering,
			resource: this.resource && this.resource.map(v => v.toJSON()),
			page: this.page && this.page.map(v => v.toJSON()),
			_image: this._image && this._image.toJSON(),
			image: this.image,
			_other: this._other && this._other.toJSON(),
			other: this.other,
		};
	}
};
