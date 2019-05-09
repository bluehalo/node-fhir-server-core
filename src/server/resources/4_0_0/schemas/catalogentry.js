/**
 * @name exports
 * @summary CatalogEntry Class
 */
module.exports = class CatalogEntry {
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

		Object.defineProperty(this, 'text', {
			enumerable: true,
			get: () => this.__data.text,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Narrative = require('./narrative.js');
				this.__data.text = new Narrative(value);
			},
		});

		Object.defineProperty(this, 'contained', {
			enumerable: true,
			get: () => this.__data.contained,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.contained = Array.isArray(value) ? value.map(v => v) : [value];
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

		Object.defineProperty(this, 'type', {
			enumerable: true,
			get: () => this.__data.type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.type = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_orderable', {
			enumerable: true,
			get: () => this.__data._orderable,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._orderable = new Element(value);
			},
		});

		Object.defineProperty(this, 'orderable', {
			enumerable: true,
			get: () => this.__data.orderable,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.orderable = value;
			},
		});

		Object.defineProperty(this, 'referencedItem', {
			enumerable: true,
			get: () => this.__data.referencedItem,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.referencedItem = new Reference(value);
			},
		});

		Object.defineProperty(this, 'additionalIdentifier', {
			enumerable: true,
			get: () => this.__data.additionalIdentifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.additionalIdentifier = Array.isArray(value)
					? value.map(v => new Identifier(v))
					: [new Identifier(value)];
			},
		});

		Object.defineProperty(this, 'classification', {
			enumerable: true,
			get: () => this.__data.classification,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.classification = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, '_status', {
			enumerable: true,
			get: () => this.__data._status,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._status = new Element(value);
			},
		});

		Object.defineProperty(this, 'status', {
			enumerable: true,
			get: () => this.__data.status,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.status = value;
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

		Object.defineProperty(this, '_validTo', {
			enumerable: true,
			get: () => this.__data._validTo,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._validTo = new Element(value);
			},
		});

		Object.defineProperty(this, 'validTo', {
			enumerable: true,
			get: () => this.__data.validTo,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.validTo = value;
			},
		});

		Object.defineProperty(this, '_lastUpdated', {
			enumerable: true,
			get: () => this.__data._lastUpdated,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._lastUpdated = new Element(value);
			},
		});

		Object.defineProperty(this, 'lastUpdated', {
			enumerable: true,
			get: () => this.__data.lastUpdated,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.lastUpdated = value;
			},
		});

		Object.defineProperty(this, 'additionalCharacteristic', {
			enumerable: true,
			get: () => this.__data.additionalCharacteristic,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.additionalCharacteristic = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'additionalClassification', {
			enumerable: true,
			get: () => this.__data.additionalClassification,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.additionalClassification = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'relatedEntry', {
			enumerable: true,
			get: () => this.__data.relatedEntry,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CatalogEntryRelatedEntry = require('./catalogentryrelatedentry.js');
				this.__data.relatedEntry = Array.isArray(value)
					? value.map(v => new CatalogEntryRelatedEntry(v))
					: [new CatalogEntryRelatedEntry(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'CatalogEntry',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'CatalogEntry';
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
			text: this.text && this.text.toJSON(),
			contained: this.contained,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			identifier: this.identifier && this.identifier.map(v => v.toJSON()),
			type: this.type && this.type.toJSON(),
			_orderable: this._orderable && this._orderable.toJSON(),
			orderable: this.orderable,
			referencedItem: this.referencedItem && this.referencedItem.toJSON(),
			additionalIdentifier: this.additionalIdentifier && this.additionalIdentifier.map(v => v.toJSON()),
			classification: this.classification && this.classification.map(v => v.toJSON()),
			_status: this._status && this._status.toJSON(),
			status: this.status,
			validityPeriod: this.validityPeriod && this.validityPeriod.toJSON(),
			_validTo: this._validTo && this._validTo.toJSON(),
			validTo: this.validTo,
			_lastUpdated: this._lastUpdated && this._lastUpdated.toJSON(),
			lastUpdated: this.lastUpdated,
			additionalCharacteristic: this.additionalCharacteristic && this.additionalCharacteristic.map(v => v.toJSON()),
			additionalClassification: this.additionalClassification && this.additionalClassification.map(v => v.toJSON()),
			relatedEntry: this.relatedEntry && this.relatedEntry.map(v => v.toJSON()),
		};
	}
};
