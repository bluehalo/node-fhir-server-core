/**
 * @name exports
 * @summary ImmunizationEducation Class
 */
module.exports = class ImmunizationEducation {
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

		Object.defineProperty(this, '_documentType', {
			enumerable: true,
			get: () => this.__data._documentType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._documentType = new Element(value);
			},
		});

		Object.defineProperty(this, 'documentType', {
			enumerable: true,
			get: () => this.__data.documentType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.documentType = value;
			},
		});

		Object.defineProperty(this, '_reference', {
			enumerable: true,
			get: () => this.__data._reference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._reference = new Element(value);
			},
		});

		Object.defineProperty(this, 'reference', {
			enumerable: true,
			get: () => this.__data.reference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.reference = value;
			},
		});

		Object.defineProperty(this, '_publicationDate', {
			enumerable: true,
			get: () => this.__data._publicationDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._publicationDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'publicationDate', {
			enumerable: true,
			get: () => this.__data.publicationDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.publicationDate = value;
			},
		});

		Object.defineProperty(this, '_presentationDate', {
			enumerable: true,
			get: () => this.__data._presentationDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._presentationDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'presentationDate', {
			enumerable: true,
			get: () => this.__data.presentationDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.presentationDate = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ImmunizationEducation',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ImmunizationEducation';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_documentType: this._documentType && this._documentType.toJSON(),
			documentType: this.documentType,
			_reference: this._reference && this._reference.toJSON(),
			reference: this.reference,
			_publicationDate: this._publicationDate && this._publicationDate.toJSON(),
			publicationDate: this.publicationDate,
			_presentationDate: this._presentationDate && this._presentationDate.toJSON(),
			presentationDate: this.presentationDate,
		};
	}
};
