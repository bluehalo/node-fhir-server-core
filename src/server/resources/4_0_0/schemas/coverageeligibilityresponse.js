/**
 * @name exports
 * @summary CoverageEligibilityResponse Class
 */
module.exports = class CoverageEligibilityResponse {
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

		Object.defineProperty(this, 'requestor', {
			enumerable: true,
			get: () => this.__data.requestor,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.requestor = new Reference(value);
			},
		});

		Object.defineProperty(this, 'request', {
			enumerable: true,
			get: () => this.__data.request,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.request = new Reference(value);
			},
		});

		Object.defineProperty(this, '_outcome', {
			enumerable: true,
			get: () => this.__data._outcome,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._outcome = new Element(value);
			},
		});

		Object.defineProperty(this, 'outcome', {
			enumerable: true,
			get: () => this.__data.outcome,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.outcome = value;
			},
		});

		Object.defineProperty(this, '_disposition', {
			enumerable: true,
			get: () => this.__data._disposition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._disposition = new Element(value);
			},
		});

		Object.defineProperty(this, 'disposition', {
			enumerable: true,
			get: () => this.__data.disposition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.disposition = value;
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

		Object.defineProperty(this, 'insurance', {
			enumerable: true,
			get: () => this.__data.insurance,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CoverageEligibilityResponseInsurance = require('./coverageeligibilityresponseinsurance.js');
				this.__data.insurance = Array.isArray(value)
					? value.map(v => new CoverageEligibilityResponseInsurance(v))
					: [new CoverageEligibilityResponseInsurance(value)];
			},
		});

		Object.defineProperty(this, '_preAuthRef', {
			enumerable: true,
			get: () => this.__data._preAuthRef,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._preAuthRef = new Element(value);
			},
		});

		Object.defineProperty(this, 'preAuthRef', {
			enumerable: true,
			get: () => this.__data.preAuthRef,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.preAuthRef = value;
			},
		});

		Object.defineProperty(this, 'form', {
			enumerable: true,
			get: () => this.__data.form,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.form = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'error', {
			enumerable: true,
			get: () => this.__data.error,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CoverageEligibilityResponseError = require('./coverageeligibilityresponseerror.js');
				this.__data.error = Array.isArray(value)
					? value.map(v => new CoverageEligibilityResponseError(v))
					: [new CoverageEligibilityResponseError(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'CoverageEligibilityResponse',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'CoverageEligibilityResponse';
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
			_purpose: this._purpose && this._purpose.toJSON(),
			purpose: this.purpose,
			patient: this.patient && this.patient.toJSON(),
			_servicedDate: this._servicedDate && this._servicedDate.toJSON(),
			servicedDate: this.servicedDate,
			servicedPeriod: this.servicedPeriod && this.servicedPeriod.toJSON(),
			_created: this._created && this._created.toJSON(),
			created: this.created,
			requestor: this.requestor && this.requestor.toJSON(),
			request: this.request && this.request.toJSON(),
			_outcome: this._outcome && this._outcome.toJSON(),
			outcome: this.outcome,
			_disposition: this._disposition && this._disposition.toJSON(),
			disposition: this.disposition,
			insurer: this.insurer && this.insurer.toJSON(),
			insurance: this.insurance && this.insurance.map(v => v.toJSON()),
			_preAuthRef: this._preAuthRef && this._preAuthRef.toJSON(),
			preAuthRef: this.preAuthRef,
			form: this.form && this.form.toJSON(),
			error: this.error && this.error.map(v => v.toJSON()),
		};
	}
};
