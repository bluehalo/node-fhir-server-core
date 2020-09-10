/**
 * @name exports
 * @summary ImplementationGuideDefinitionPage Class
 */
module.exports = class ImplementationGuideDefinitionPage {
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

		Object.defineProperty(this, '_nameUrl', {
			enumerable: true,
			get: () => this.__data._nameUrl,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._nameUrl = new Element(value);
			},
		});

		Object.defineProperty(this, 'nameUrl', {
			enumerable: true,
			get: () => this.__data.nameUrl,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.nameUrl = value;
			},
		});

		Object.defineProperty(this, 'nameReference', {
			enumerable: true,
			get: () => this.__data.nameReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.nameReference = new Reference(value);
			},
		});

		Object.defineProperty(this, '_title', {
			enumerable: true,
			get: () => this.__data._title,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._title = new Element(value);
			},
		});

		Object.defineProperty(this, 'title', {
			enumerable: true,
			get: () => this.__data.title,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.title = value;
			},
		});

		Object.defineProperty(this, '_generation', {
			enumerable: true,
			get: () => this.__data._generation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._generation = new Element(value);
			},
		});

		Object.defineProperty(this, 'generation', {
			enumerable: true,
			get: () => this.__data.generation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.generation = value;
			},
		});

		Object.defineProperty(this, 'page', {
			enumerable: true,
			get: () => this.__data.page,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ImplementationGuideDefinitionPage = require('./implementationguidedefinitionpage.js');
				this.__data.page = Array.isArray(value)
					? value.map(v => new ImplementationGuideDefinitionPage(v))
					: [new ImplementationGuideDefinitionPage(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ImplementationGuideDefinitionPage',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ImplementationGuideDefinitionPage';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_nameUrl: this._nameUrl && this._nameUrl.toJSON(),
			nameUrl: this.nameUrl,
			nameReference: this.nameReference && this.nameReference.toJSON(),
			_title: this._title && this._title.toJSON(),
			title: this.title,
			_generation: this._generation && this._generation.toJSON(),
			generation: this.generation,
			page: this.page && this.page.map(v => v.toJSON()),
		};
	}
};
