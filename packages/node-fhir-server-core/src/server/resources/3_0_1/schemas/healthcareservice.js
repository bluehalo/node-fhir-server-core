/**
 * @name exports
 * @summary HealthcareService Class
 */
module.exports = class HealthcareService {
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

		Object.defineProperty(this, '_active', {
			enumerable: true,
			get: () => this.__data._active,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._active = new Element(value);
			},
		});

		Object.defineProperty(this, 'active', {
			enumerable: true,
			get: () => this.__data.active,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.active = value;
			},
		});

		Object.defineProperty(this, 'providedBy', {
			enumerable: true,
			get: () => this.__data.providedBy,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.providedBy = new Reference(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/service-category
		Object.defineProperty(this, 'category', {
			enumerable: true,
			get: () => this.__data.category,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.category = new CodeableConcept(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/service-type
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/c80-practice-codes
		Object.defineProperty(this, 'specialty', {
			enumerable: true,
			get: () => this.__data.specialty,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.specialty = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'location', {
			enumerable: true,
			get: () => this.__data.location,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.location = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, '_name', {
			enumerable: true,
			get: () => this.__data._name,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._name = new Element(value);
			},
		});

		Object.defineProperty(this, 'name', {
			enumerable: true,
			get: () => this.__data.name,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.name = value;
			},
		});

		Object.defineProperty(this, '_comment', {
			enumerable: true,
			get: () => this.__data._comment,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._comment = new Element(value);
			},
		});

		Object.defineProperty(this, 'comment', {
			enumerable: true,
			get: () => this.__data.comment,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.comment = value;
			},
		});

		Object.defineProperty(this, '_extraDetails', {
			enumerable: true,
			get: () => this.__data._extraDetails,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._extraDetails = new Element(value);
			},
		});

		Object.defineProperty(this, 'extraDetails', {
			enumerable: true,
			get: () => this.__data.extraDetails,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.extraDetails = value;
			},
		});

		Object.defineProperty(this, 'photo', {
			enumerable: true,
			get: () => this.__data.photo,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Attachment = require('./attachment.js');
				this.__data.photo = new Attachment(value);
			},
		});

		Object.defineProperty(this, 'telecom', {
			enumerable: true,
			get: () => this.__data.telecom,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContactPoint = require('./contactpoint.js');
				this.__data.telecom = Array.isArray(value) ? value.map(v => new ContactPoint(v)) : [new ContactPoint(value)];
			},
		});

		Object.defineProperty(this, 'coverageArea', {
			enumerable: true,
			get: () => this.__data.coverageArea,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.coverageArea = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/service-provision-conditions
		Object.defineProperty(this, 'serviceProvisionCode', {
			enumerable: true,
			get: () => this.__data.serviceProvisionCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.serviceProvisionCode = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'eligibility', {
			enumerable: true,
			get: () => this.__data.eligibility,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.eligibility = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_eligibilityNote', {
			enumerable: true,
			get: () => this.__data._eligibilityNote,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._eligibilityNote = new Element(value);
			},
		});

		Object.defineProperty(this, 'eligibilityNote', {
			enumerable: true,
			get: () => this.__data.eligibilityNote,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.eligibilityNote = value;
			},
		});

		Object.defineProperty(this, '_programName', {
			enumerable: true,
			get: () => this.__data._programName,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._programName = new Element(value);
			},
		});

		Object.defineProperty(this, 'programName', {
			enumerable: true,
			get: () => this.__data.programName,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.programName = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'characteristic', {
			enumerable: true,
			get: () => this.__data.characteristic,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.characteristic = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/service-referral-method
		Object.defineProperty(this, 'referralMethod', {
			enumerable: true,
			get: () => this.__data.referralMethod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.referralMethod = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, '_appointmentRequired', {
			enumerable: true,
			get: () => this.__data._appointmentRequired,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._appointmentRequired = new Element(value);
			},
		});

		Object.defineProperty(this, 'appointmentRequired', {
			enumerable: true,
			get: () => this.__data.appointmentRequired,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.appointmentRequired = value;
			},
		});

		Object.defineProperty(this, 'availableTime', {
			enumerable: true,
			get: () => this.__data.availableTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let HealthcareServiceAvailableTime = require('./healthcareserviceavailabletime.js');
				this.__data.availableTime = Array.isArray(value)
					? value.map(v => new HealthcareServiceAvailableTime(v))
					: [new HealthcareServiceAvailableTime(value)];
			},
		});

		Object.defineProperty(this, 'notAvailable', {
			enumerable: true,
			get: () => this.__data.notAvailable,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let HealthcareServiceNotAvailable = require('./healthcareservicenotavailable.js');
				this.__data.notAvailable = Array.isArray(value)
					? value.map(v => new HealthcareServiceNotAvailable(v))
					: [new HealthcareServiceNotAvailable(value)];
			},
		});

		Object.defineProperty(this, '_availabilityExceptions', {
			enumerable: true,
			get: () => this.__data._availabilityExceptions,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._availabilityExceptions = new Element(value);
			},
		});

		Object.defineProperty(this, 'availabilityExceptions', {
			enumerable: true,
			get: () => this.__data.availabilityExceptions,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.availabilityExceptions = value;
			},
		});

		Object.defineProperty(this, 'endpoint', {
			enumerable: true,
			get: () => this.__data.endpoint,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.endpoint = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'HealthcareService',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'HealthcareService';
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
			_active: this._active && this._active.toJSON(),
			active: this.active,
			providedBy: this.providedBy && this.providedBy.toJSON(),
			category: this.category && this.category.toJSON(),
			type: this.type && this.type.map(v => v.toJSON()),
			specialty: this.specialty && this.specialty.map(v => v.toJSON()),
			location: this.location && this.location.map(v => v.toJSON()),
			_name: this._name && this._name.toJSON(),
			name: this.name,
			_comment: this._comment && this._comment.toJSON(),
			comment: this.comment,
			_extraDetails: this._extraDetails && this._extraDetails.toJSON(),
			extraDetails: this.extraDetails,
			photo: this.photo && this.photo.toJSON(),
			telecom: this.telecom && this.telecom.map(v => v.toJSON()),
			coverageArea: this.coverageArea && this.coverageArea.map(v => v.toJSON()),
			serviceProvisionCode: this.serviceProvisionCode && this.serviceProvisionCode.map(v => v.toJSON()),
			eligibility: this.eligibility && this.eligibility.toJSON(),
			_eligibilityNote: this._eligibilityNote && this._eligibilityNote.toJSON(),
			eligibilityNote: this.eligibilityNote,
			_programName: this._programName && this._programName.toJSON(),
			programName: this.programName,
			characteristic: this.characteristic && this.characteristic.map(v => v.toJSON()),
			referralMethod: this.referralMethod && this.referralMethod.map(v => v.toJSON()),
			_appointmentRequired: this._appointmentRequired && this._appointmentRequired.toJSON(),
			appointmentRequired: this.appointmentRequired,
			availableTime: this.availableTime && this.availableTime.map(v => v.toJSON()),
			notAvailable: this.notAvailable && this.notAvailable.map(v => v.toJSON()),
			_availabilityExceptions: this._availabilityExceptions && this._availabilityExceptions.toJSON(),
			availabilityExceptions: this.availabilityExceptions,
			endpoint: this.endpoint && this.endpoint.map(v => v.toJSON()),
		};
	}
};
