/**
 * @name exports
 * @summary MedicationRequestSubstitution Class
 */
module.exports = class MedicationRequestSubstitution {
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

		Object.defineProperty(this, '_allowed', {
			enumerable: true,
			get: () => this.__data._allowed,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._allowed = new Element(value);
			},
		});

		Object.defineProperty(this, 'allowed', {
			enumerable: true,
			get: () => this.__data.allowed,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.allowed = value;
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-SubstanceAdminSubstitutionReason
		Object.defineProperty(this, 'reason', {
			enumerable: true,
			get: () => this.__data.reason,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.reason = new CodeableConcept(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'MedicationRequestSubstitution',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'MedicationRequestSubstitution';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_allowed: this._allowed && this._allowed.toJSON(),
			allowed: this.allowed,
			reason: this.reason && this.reason.toJSON(),
		};
	}
};
