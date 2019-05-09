/**
 * @name exports
 * @summary MedicinalProductAuthorizationJurisdictionalAuthorization Class
 */
module.exports = class MedicinalProductAuthorizationJurisdictionalAuthorization {
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

		Object.defineProperty(this, 'identifier', {
			enumerable: true,
			get: () => this.__data.identifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.identifier = Array.isArray(value) ? value.map(v => new Identifier(v)) : [new Identifier(value)];
			},
		});

		Object.defineProperty(this, 'country', {
			enumerable: true,
			get: () => this.__data.country,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.country = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'jurisdiction', {
			enumerable: true,
			get: () => this.__data.jurisdiction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.jurisdiction = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'legalStatusOfSupply', {
			enumerable: true,
			get: () => this.__data.legalStatusOfSupply,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.legalStatusOfSupply = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'validityPeriod', {
			enumerable: true,
			get: () => this.__data.validityPeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.validityPeriod = new Period(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'MedicinalProductAuthorizationJurisdictionalAuthorization',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'MedicinalProductAuthorizationJurisdictionalAuthorization';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			identifier: this.identifier && this.identifier.map(v => v.toJSON()),
			country: this.country && this.country.toJSON(),
			jurisdiction: this.jurisdiction && this.jurisdiction.map(v => v.toJSON()),
			legalStatusOfSupply: this.legalStatusOfSupply && this.legalStatusOfSupply.toJSON(),
			validityPeriod: this.validityPeriod && this.validityPeriod.toJSON(),
		};
	}
};
