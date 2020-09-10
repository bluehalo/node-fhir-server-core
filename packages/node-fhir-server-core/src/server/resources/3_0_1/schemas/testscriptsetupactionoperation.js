/**
 * @name exports
 * @summary TestScriptSetupActionOperation Class
 */
module.exports = class TestScriptSetupActionOperation {
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/testscript-operation-codes
		Object.defineProperty(this, 'type', {
			enumerable: true,
			get: () => this.__data.type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.type = new Coding(value);
			},
		});

		Object.defineProperty(this, '_resource', {
			enumerable: true,
			get: () => this.__data._resource,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._resource = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/defined-types
		Object.defineProperty(this, 'resource', {
			enumerable: true,
			get: () => this.__data.resource,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.resource = value;
			},
		});

		Object.defineProperty(this, '_label', {
			enumerable: true,
			get: () => this.__data._label,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._label = new Element(value);
			},
		});

		Object.defineProperty(this, 'label', {
			enumerable: true,
			get: () => this.__data.label,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.label = value;
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

		Object.defineProperty(this, '_accept', {
			enumerable: true,
			get: () => this.__data._accept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._accept = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/content-type
		Object.defineProperty(this, 'accept', {
			enumerable: true,
			get: () => this.__data.accept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.accept = value;
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/content-type
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

		Object.defineProperty(this, '_destination', {
			enumerable: true,
			get: () => this.__data._destination,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._destination = new Element(value);
			},
		});

		Object.defineProperty(this, 'destination', {
			enumerable: true,
			get: () => this.__data.destination,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.destination = value;
			},
		});

		Object.defineProperty(this, '_encodeRequestUrl', {
			enumerable: true,
			get: () => this.__data._encodeRequestUrl,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._encodeRequestUrl = new Element(value);
			},
		});

		Object.defineProperty(this, 'encodeRequestUrl', {
			enumerable: true,
			get: () => this.__data.encodeRequestUrl,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.encodeRequestUrl = value;
			},
		});

		Object.defineProperty(this, '_origin', {
			enumerable: true,
			get: () => this.__data._origin,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._origin = new Element(value);
			},
		});

		Object.defineProperty(this, 'origin', {
			enumerable: true,
			get: () => this.__data.origin,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.origin = value;
			},
		});

		Object.defineProperty(this, '_params', {
			enumerable: true,
			get: () => this.__data._params,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._params = new Element(value);
			},
		});

		Object.defineProperty(this, 'params', {
			enumerable: true,
			get: () => this.__data.params,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.params = value;
			},
		});

		Object.defineProperty(this, 'requestHeader', {
			enumerable: true,
			get: () => this.__data.requestHeader,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let TestScriptSetupActionOperationRequestHeader = require('./testscriptsetupactionoperationrequestheader.js');
				this.__data.requestHeader = Array.isArray(value)
					? value.map(v => new TestScriptSetupActionOperationRequestHeader(v))
					: [new TestScriptSetupActionOperationRequestHeader(value)];
			},
		});

		Object.defineProperty(this, '_requestId', {
			enumerable: true,
			get: () => this.__data._requestId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._requestId = new Element(value);
			},
		});

		Object.defineProperty(this, 'requestId', {
			enumerable: true,
			get: () => this.__data.requestId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.requestId = value;
			},
		});

		Object.defineProperty(this, '_responseId', {
			enumerable: true,
			get: () => this.__data._responseId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._responseId = new Element(value);
			},
		});

		Object.defineProperty(this, 'responseId', {
			enumerable: true,
			get: () => this.__data.responseId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.responseId = value;
			},
		});

		Object.defineProperty(this, '_sourceId', {
			enumerable: true,
			get: () => this.__data._sourceId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._sourceId = new Element(value);
			},
		});

		Object.defineProperty(this, 'sourceId', {
			enumerable: true,
			get: () => this.__data.sourceId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.sourceId = value;
			},
		});

		Object.defineProperty(this, '_targetId', {
			enumerable: true,
			get: () => this.__data._targetId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._targetId = new Element(value);
			},
		});

		Object.defineProperty(this, 'targetId', {
			enumerable: true,
			get: () => this.__data.targetId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.targetId = value;
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

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'TestScriptSetupActionOperation',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'TestScriptSetupActionOperation';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			type: this.type && this.type.toJSON(),
			_resource: this._resource && this._resource.toJSON(),
			resource: this.resource,
			_label: this._label && this._label.toJSON(),
			label: this.label,
			_description: this._description && this._description.toJSON(),
			description: this.description,
			_accept: this._accept && this._accept.toJSON(),
			accept: this.accept,
			_contentType: this._contentType && this._contentType.toJSON(),
			contentType: this.contentType,
			_destination: this._destination && this._destination.toJSON(),
			destination: this.destination,
			_encodeRequestUrl: this._encodeRequestUrl && this._encodeRequestUrl.toJSON(),
			encodeRequestUrl: this.encodeRequestUrl,
			_origin: this._origin && this._origin.toJSON(),
			origin: this.origin,
			_params: this._params && this._params.toJSON(),
			params: this.params,
			requestHeader: this.requestHeader && this.requestHeader.map(v => v.toJSON()),
			_requestId: this._requestId && this._requestId.toJSON(),
			requestId: this.requestId,
			_responseId: this._responseId && this._responseId.toJSON(),
			responseId: this.responseId,
			_sourceId: this._sourceId && this._sourceId.toJSON(),
			sourceId: this.sourceId,
			_targetId: this._targetId && this._targetId.toJSON(),
			targetId: this.targetId,
			_url: this._url && this._url.toJSON(),
			url: this.url,
		};
	}
};
