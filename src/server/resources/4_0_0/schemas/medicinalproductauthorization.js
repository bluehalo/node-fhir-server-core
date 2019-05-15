/**
 * @name exports
 * @summary MedicinalProductAuthorization Class
 */
module.exports = class MedicinalProductAuthorization {
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

		Object.defineProperty(this, 'subject', {
			enumerable: true,
			get: () => this.__data.subject,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.subject = new Reference(value);
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
				this.__data.country = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
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

		Object.defineProperty(this, 'status', {
			enumerable: true,
			get: () => this.__data.status,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.status = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_statusDate', {
			enumerable: true,
			get: () => this.__data._statusDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._statusDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'statusDate', {
			enumerable: true,
			get: () => this.__data.statusDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.statusDate = value;
			},
		});

		Object.defineProperty(this, '_restoreDate', {
			enumerable: true,
			get: () => this.__data._restoreDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._restoreDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'restoreDate', {
			enumerable: true,
			get: () => this.__data.restoreDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.restoreDate = value;
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

		Object.defineProperty(this, 'dataExclusivityPeriod', {
			enumerable: true,
			get: () => this.__data.dataExclusivityPeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.dataExclusivityPeriod = new Period(value);
			},
		});

		Object.defineProperty(this, '_dateOfFirstAuthorization', {
			enumerable: true,
			get: () => this.__data._dateOfFirstAuthorization,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._dateOfFirstAuthorization = new Element(value);
			},
		});

		Object.defineProperty(this, 'dateOfFirstAuthorization', {
			enumerable: true,
			get: () => this.__data.dateOfFirstAuthorization,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.dateOfFirstAuthorization = value;
			},
		});

		Object.defineProperty(this, '_internationalBirthDate', {
			enumerable: true,
			get: () => this.__data._internationalBirthDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._internationalBirthDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'internationalBirthDate', {
			enumerable: true,
			get: () => this.__data.internationalBirthDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.internationalBirthDate = value;
			},
		});

		Object.defineProperty(this, 'legalBasis', {
			enumerable: true,
			get: () => this.__data.legalBasis,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.legalBasis = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'jurisdictionalAuthorization', {
			enumerable: true,
			get: () => this.__data.jurisdictionalAuthorization,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicinalProductAuthorizationJurisdictionalAuthorization = require('./medicinalproductauthorizationjurisdictionalauthorization.js');
				this.__data.jurisdictionalAuthorization = Array.isArray(value)
					? value.map(v => new MedicinalProductAuthorizationJurisdictionalAuthorization(v))
					: [new MedicinalProductAuthorizationJurisdictionalAuthorization(value)];
			},
		});

		Object.defineProperty(this, 'holder', {
			enumerable: true,
			get: () => this.__data.holder,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.holder = new Reference(value);
			},
		});

		Object.defineProperty(this, 'regulator', {
			enumerable: true,
			get: () => this.__data.regulator,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.regulator = new Reference(value);
			},
		});

		Object.defineProperty(this, 'procedure', {
			enumerable: true,
			get: () => this.__data.procedure,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicinalProductAuthorizationProcedure = require('./medicinalproductauthorizationprocedure.js');
				this.__data.procedure = new MedicinalProductAuthorizationProcedure(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'MedicinalProductAuthorization',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'MedicinalProductAuthorization';
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
			subject: this.subject && this.subject.toJSON(),
			country: this.country && this.country.map(v => v.toJSON()),
			jurisdiction: this.jurisdiction && this.jurisdiction.map(v => v.toJSON()),
			status: this.status && this.status.toJSON(),
			_statusDate: this._statusDate && this._statusDate.toJSON(),
			statusDate: this.statusDate,
			_restoreDate: this._restoreDate && this._restoreDate.toJSON(),
			restoreDate: this.restoreDate,
			validityPeriod: this.validityPeriod && this.validityPeriod.toJSON(),
			dataExclusivityPeriod: this.dataExclusivityPeriod && this.dataExclusivityPeriod.toJSON(),
			_dateOfFirstAuthorization: this._dateOfFirstAuthorization && this._dateOfFirstAuthorization.toJSON(),
			dateOfFirstAuthorization: this.dateOfFirstAuthorization,
			_internationalBirthDate: this._internationalBirthDate && this._internationalBirthDate.toJSON(),
			internationalBirthDate: this.internationalBirthDate,
			legalBasis: this.legalBasis && this.legalBasis.toJSON(),
			jurisdictionalAuthorization:
				this.jurisdictionalAuthorization && this.jurisdictionalAuthorization.map(v => v.toJSON()),
			holder: this.holder && this.holder.toJSON(),
			regulator: this.regulator && this.regulator.toJSON(),
			procedure: this.procedure && this.procedure.toJSON(),
		};
	}
};
