/**
 * @name exports
 * @summary VerificationResultPrimarySource Class
 */
module.exports = class VerificationResultPrimarySource {
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

		Object.defineProperty(this, 'type', {
			enumerable: true,
			get: () => this.__data.type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.type = Array.isArray(value) ? value.map(v => new CodeableConcept(v)) : [new CodeableConcept(value)];
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
				this.__data.communicationMethod = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'validationStatus', {
			enumerable: true,
			get: () => this.__data.validationStatus,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.validationStatus = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_validationDate', {
			enumerable: true,
			get: () => this.__data._validationDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._validationDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'validationDate', {
			enumerable: true,
			get: () => this.__data.validationDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.validationDate = value;
			},
		});

		Object.defineProperty(this, 'canPushUpdates', {
			enumerable: true,
			get: () => this.__data.canPushUpdates,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.canPushUpdates = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'pushTypeAvailable', {
			enumerable: true,
			get: () => this.__data.pushTypeAvailable,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.pushTypeAvailable = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'VerificationResultPrimarySource',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'VerificationResultPrimarySource';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			who: this.who && this.who.toJSON(),
			type: this.type && this.type.map(v => v.toJSON()),
			communicationMethod: this.communicationMethod && this.communicationMethod.map(v => v.toJSON()),
			validationStatus: this.validationStatus && this.validationStatus.toJSON(),
			_validationDate: this._validationDate && this._validationDate.toJSON(),
			validationDate: this.validationDate,
			canPushUpdates: this.canPushUpdates && this.canPushUpdates.toJSON(),
			pushTypeAvailable: this.pushTypeAvailable && this.pushTypeAvailable.map(v => v.toJSON()),
		};
	}
};
