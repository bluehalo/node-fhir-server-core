/**
 * @name exports
 * @summary VerificationResultAttestation Class
 */
module.exports = class VerificationResultAttestation {
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

		Object.defineProperty(this, 'who', {
			enumerable: true,
			get: () => this.__data.who,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.who = new Reference(value);
			},
		});

		Object.defineProperty(this, 'onBehalfOf', {
			enumerable: true,
			get: () => this.__data.onBehalfOf,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.onBehalfOf = new Reference(value);
			},
		});

		Object.defineProperty(this, 'communicationMethod', {
			enumerable: true,
			get: () => this.__data.communicationMethod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.communicationMethod = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_date', {
			enumerable: true,
			get: () => this.__data._date,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._date = new Element(value);
			},
		});

		Object.defineProperty(this, 'date', {
			enumerable: true,
			get: () => this.__data.date,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.date = value;
			},
		});

		Object.defineProperty(this, '_sourceIdentityCertificate', {
			enumerable: true,
			get: () => this.__data._sourceIdentityCertificate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._sourceIdentityCertificate = new Element(value);
			},
		});

		Object.defineProperty(this, 'sourceIdentityCertificate', {
			enumerable: true,
			get: () => this.__data.sourceIdentityCertificate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.sourceIdentityCertificate = value;
			},
		});

		Object.defineProperty(this, '_proxyIdentityCertificate', {
			enumerable: true,
			get: () => this.__data._proxyIdentityCertificate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._proxyIdentityCertificate = new Element(value);
			},
		});

		Object.defineProperty(this, 'proxyIdentityCertificate', {
			enumerable: true,
			get: () => this.__data.proxyIdentityCertificate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.proxyIdentityCertificate = value;
			},
		});

		Object.defineProperty(this, 'proxySignature', {
			enumerable: true,
			get: () => this.__data.proxySignature,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Signature = require('./signature.js');
				this.__data.proxySignature = new Signature(value);
			},
		});

		Object.defineProperty(this, 'sourceSignature', {
			enumerable: true,
			get: () => this.__data.sourceSignature,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Signature = require('./signature.js');
				this.__data.sourceSignature = new Signature(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'VerificationResultAttestation',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'VerificationResultAttestation';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			who: this.who && this.who.toJSON(),
			onBehalfOf: this.onBehalfOf && this.onBehalfOf.toJSON(),
			communicationMethod: this.communicationMethod && this.communicationMethod.toJSON(),
			_date: this._date && this._date.toJSON(),
			date: this.date,
			_sourceIdentityCertificate: this._sourceIdentityCertificate && this._sourceIdentityCertificate.toJSON(),
			sourceIdentityCertificate: this.sourceIdentityCertificate,
			_proxyIdentityCertificate: this._proxyIdentityCertificate && this._proxyIdentityCertificate.toJSON(),
			proxyIdentityCertificate: this.proxyIdentityCertificate,
			proxySignature: this.proxySignature && this.proxySignature.toJSON(),
			sourceSignature: this.sourceSignature && this.sourceSignature.toJSON(),
		};
	}
};
