/**
 * @name exports
 * @summary VerificationResultValidator Class
 */
module.exports = class VerificationResultValidator {
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

		Object.defineProperty(this, 'organization', {
			enumerable: true,
			get: () => this.__data.organization,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.organization = new Reference(value);
			},
		});

		Object.defineProperty(this, '_identityCertificate', {
			enumerable: true,
			get: () => this.__data._identityCertificate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._identityCertificate = new Element(value);
			},
		});

		Object.defineProperty(this, 'identityCertificate', {
			enumerable: true,
			get: () => this.__data.identityCertificate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.identityCertificate = value;
			},
		});

		Object.defineProperty(this, 'attestationSignature', {
			enumerable: true,
			get: () => this.__data.attestationSignature,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Signature = require('./signature.js');
				this.__data.attestationSignature = new Signature(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'VerificationResultValidator',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'VerificationResultValidator';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			organization: this.organization && this.organization.toJSON(),
			_identityCertificate: this._identityCertificate && this._identityCertificate.toJSON(),
			identityCertificate: this.identityCertificate,
			attestationSignature: this.attestationSignature && this.attestationSignature.toJSON(),
		};
	}
};
