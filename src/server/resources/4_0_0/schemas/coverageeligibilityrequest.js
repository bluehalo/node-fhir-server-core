/**
 * @name exports
 * @summary CoverageEligibilityRequest Class
 */
module.exports = class CoverageEligibilityRequest {
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

		Object.defineProperty(this, 'priority', {
			enumerable: true,
			get: () => this.__data.priority,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.priority = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_purpose', {
			enumerable: true,
			get: () => this.__data._purpose,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._purpose = new Element(value);
			},
		});

		Object.defineProperty(this, 'purpose', {
			enumerable: true,
			get: () => this.__data.purpose,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.purpose = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'patient', {
			enumerable: true,
			get: () => this.__data.patient,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.patient = new Reference(value);
			},
		});

		Object.defineProperty(this, '_servicedDate', {
			enumerable: true,
			get: () => this.__data._servicedDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._servicedDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'servicedDate', {
			enumerable: true,
			get: () => this.__data.servicedDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.servicedDate = value;
			},
		});

		Object.defineProperty(this, 'servicedPeriod', {
			enumerable: true,
			get: () => this.__data.servicedPeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.servicedPeriod = new Period(value);
			},
		});

		Object.defineProperty(this, '_created', {
			enumerable: true,
			get: () => this.__data._created,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._created = new Element(value);
			},
		});

		Object.defineProperty(this, 'created', {
			enumerable: true,
			get: () => this.__data.created,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.created = value;
			},
		});

		Object.defineProperty(this, 'enterer', {
			enumerable: true,
			get: () => this.__data.enterer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.enterer = new Reference(value);
			},
		});

		Object.defineProperty(this, 'provider', {
			enumerable: true,
			get: () => this.__data.provider,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.provider = new Reference(value);
			},
		});

		Object.defineProperty(this, 'insurer', {
			enumerable: true,
			get: () => this.__data.insurer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.insurer = new Reference(value);
			},
		});

		Object.defineProperty(this, 'facility', {
			enumerable: true,
			get: () => this.__data.facility,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.facility = new Reference(value);
			},
		});

		Object.defineProperty(this, 'supportingInfo', {
			enumerable: true,
			get: () => this.__data.supportingInfo,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CoverageEligibilityRequestSupportingInfo = require('./coverageeligibilityrequestsupportinginfo.js');
				this.__data.supportingInfo = Array.isArray(value)
					? value.map(v => new CoverageEligibilityRequestSupportingInfo(v))
					: [new CoverageEligibilityRequestSupportingInfo(value)];
			},
		});

		Object.defineProperty(this, 'insurance', {
			enumerable: true,
			get: () => this.__data.insurance,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CoverageEligibilityRequestInsurance = require('./coverageeligibilityrequestinsurance.js');
				this.__data.insurance = Array.isArray(value)
					? value.map(v => new CoverageEligibilityRequestInsurance(v))
					: [new CoverageEligibilityRequestInsurance(value)];
			},
		});

		Object.defineProperty(this, 'item', {
			enumerable: true,
			get: () => this.__data.item,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CoverageEligibilityRequestItem = require('./coverageeligibilityrequestitem.js');
				this.__data.item = Array.isArray(value)
					? value.map(v => new CoverageEligibilityRequestItem(v))
					: [new CoverageEligibilityRequestItem(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'CoverageEligibilityRequest',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'CoverageEligibilityRequest';
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
			_status: this._status && this._status.toJSON(),
			status: this.status,
			priority: this.priority && this.priority.toJSON(),
			_purpose: this._purpose && this._purpose.toJSON(),
			purpose: this.purpose,
			patient: this.patient && this.patient.toJSON(),
			_servicedDate: this._servicedDate && this._servicedDate.toJSON(),
			servicedDate: this.servicedDate,
			servicedPeriod: this.servicedPeriod && this.servicedPeriod.toJSON(),
			_created: this._created && this._created.toJSON(),
			created: this.created,
			enterer: this.enterer && this.enterer.toJSON(),
			provider: this.provider && this.provider.toJSON(),
			insurer: this.insurer && this.insurer.toJSON(),
			facility: this.facility && this.facility.toJSON(),
			supportingInfo: this.supportingInfo && this.supportingInfo.map(v => v.toJSON()),
			insurance: this.insurance && this.insurance.map(v => v.toJSON()),
			item: this.item && this.item.map(v => v.toJSON()),
		};
	}
};
