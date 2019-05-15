/**
 * @name exports
 * @summary CommunicationPayload Class
 */
module.exports = class CommunicationPayload {
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

		Object.defineProperty(this, '_contentString', {
			enumerable: true,
			get: () => this.__data._contentString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._contentString = new Element(value);
			},
		});

		Object.defineProperty(this, 'contentString', {
			enumerable: true,
			get: () => this.__data.contentString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.contentString = value;
			},
		});

		Object.defineProperty(this, 'contentAttachment', {
			enumerable: true,
			get: () => this.__data.contentAttachment,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Attachment = require('./attachment.js');
				this.__data.contentAttachment = new Attachment(value);
			},
		});

		Object.defineProperty(this, 'contentReference', {
			enumerable: true,
			get: () => this.__data.contentReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.contentReference = new Reference(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'CommunicationPayload',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'CommunicationPayload';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_contentString: this._contentString && this._contentString.toJSON(),
			contentString: this.contentString,
			contentAttachment: this.contentAttachment && this.contentAttachment.toJSON(),
			contentReference: this.contentReference && this.contentReference.toJSON(),
		};
	}
};
