/**
 * @name exports
 * @summary Signature Class
 */
module.exports = class Signature {
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/signature-type
		Object.defineProperty(this, 'type', {
			enumerable: true,
			get: () => this.__data.type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.type = Array.isArray(value) ? value.map(v => new Coding(v)) : [new Coding(value)];
			},
		});

		Object.defineProperty(this, '_when', {
			enumerable: true,
			get: () => this.__data._when,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._when = new Element(value);
			},
		});

		Object.defineProperty(this, 'when', {
			enumerable: true,
			get: () => this.__data.when,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.when = value;
			},
		});

		Object.defineProperty(this, '_whoUri', {
			enumerable: true,
			get: () => this.__data._whoUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._whoUri = new Element(value);
			},
		});

		Object.defineProperty(this, 'whoUri', {
			enumerable: true,
			get: () => this.__data.whoUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.whoUri = value;
			},
		});

		Object.defineProperty(this, 'whoReference', {
			enumerable: true,
			get: () => this.__data.whoReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.whoReference = new Reference(value);
			},
		});

		Object.defineProperty(this, '_onBehalfOfUri', {
			enumerable: true,
			get: () => this.__data._onBehalfOfUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._onBehalfOfUri = new Element(value);
			},
		});

		Object.defineProperty(this, 'onBehalfOfUri', {
			enumerable: true,
			get: () => this.__data.onBehalfOfUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.onBehalfOfUri = value;
			},
		});

		Object.defineProperty(this, 'onBehalfOfReference', {
			enumerable: true,
			get: () => this.__data.onBehalfOfReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.onBehalfOfReference = new Reference(value);
			},
		});

		Object.defineProperty(this, '_contentType', {
			enumerable: true,
			get: () => this.__data._contentType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._contentType = new Element(value);
			},
		});

		Object.defineProperty(this, 'contentType', {
			enumerable: true,
			get: () => this.__data.contentType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.contentType = value;
			},
		});

		Object.defineProperty(this, '_blob', {
			enumerable: true,
			get: () => this.__data._blob,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._blob = new Element(value);
			},
		});

		Object.defineProperty(this, 'blob', {
			enumerable: true,
			get: () => this.__data.blob,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.blob = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Signature',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Signature';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			type: this.type && this.type.map(v => v.toJSON()),
			_when: this._when && this._when.toJSON(),
			when: this.when,
			_whoUri: this._whoUri && this._whoUri.toJSON(),
			whoUri: this.whoUri,
			whoReference: this.whoReference && this.whoReference.toJSON(),
			_onBehalfOfUri: this._onBehalfOfUri && this._onBehalfOfUri.toJSON(),
			onBehalfOfUri: this.onBehalfOfUri,
			onBehalfOfReference: this.onBehalfOfReference && this.onBehalfOfReference.toJSON(),
			_contentType: this._contentType && this._contentType.toJSON(),
			contentType: this.contentType,
			_blob: this._blob && this._blob.toJSON(),
			blob: this.blob,
		};
	}
};
