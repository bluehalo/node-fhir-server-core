/**
 * @name exports
 * @summary Binary Class
 */
module.exports = class Binary {
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
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

		Object.defineProperty(this, 'securityContext', {
			enumerable: true,
			get: () => this.__data.securityContext,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.securityContext = new Reference(value);
			},
		});

		Object.defineProperty(this, '_content', {
			enumerable: true,
			get: () => this.__data._content,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._content = new Element(value);
			},
		});

		Object.defineProperty(this, 'content', {
			enumerable: true,
			get: () => this.__data.content,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.content = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Binary',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Binary';
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
			_contentType: this._contentType && this._contentType.toJSON(),
			contentType: this.contentType,
			securityContext: this.securityContext && this.securityContext.toJSON(),
			_content: this._content && this._content.toJSON(),
			content: this.content,
		};
	}
};
