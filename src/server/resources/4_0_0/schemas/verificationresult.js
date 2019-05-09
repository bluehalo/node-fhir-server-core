/**
 * @name exports
 * @summary VerificationResult Class
 */
module.exports = class VerificationResult {
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

		Object.defineProperty(this, 'target', {
			enumerable: true,
			get: () => this.__data.target,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.target = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, '_targetLocation', {
			enumerable: true,
			get: () => this.__data._targetLocation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._targetLocation = new Element(value);
			},
		});

		Object.defineProperty(this, 'targetLocation', {
			enumerable: true,
			get: () => this.__data.targetLocation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.targetLocation = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'need', {
			enumerable: true,
			get: () => this.__data.need,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.need = new CodeableConcept(value);
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

		Object.defineProperty(this, 'validationType', {
			enumerable: true,
			get: () => this.__data.validationType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.validationType = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'validationProcess', {
			enumerable: true,
			get: () => this.__data.validationProcess,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.validationProcess = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'frequency', {
			enumerable: true,
			get: () => this.__data.frequency,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Timing = require('./timing.js');
				this.__data.frequency = new Timing(value);
			},
		});

		Object.defineProperty(this, '_lastPerformed', {
			enumerable: true,
			get: () => this.__data._lastPerformed,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._lastPerformed = new Element(value);
			},
		});

		Object.defineProperty(this, 'lastPerformed', {
			enumerable: true,
			get: () => this.__data.lastPerformed,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.lastPerformed = value;
			},
		});

		Object.defineProperty(this, '_nextScheduled', {
			enumerable: true,
			get: () => this.__data._nextScheduled,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._nextScheduled = new Element(value);
			},
		});

		Object.defineProperty(this, 'nextScheduled', {
			enumerable: true,
			get: () => this.__data.nextScheduled,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.nextScheduled = value;
			},
		});

		Object.defineProperty(this, 'failureAction', {
			enumerable: true,
			get: () => this.__data.failureAction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.failureAction = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'primarySource', {
			enumerable: true,
			get: () => this.__data.primarySource,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let VerificationResultPrimarySource = require('./verificationresultprimarysource.js');
				this.__data.primarySource = Array.isArray(value)
					? value.map(v => new VerificationResultPrimarySource(v))
					: [new VerificationResultPrimarySource(value)];
			},
		});

		Object.defineProperty(this, 'attestation', {
			enumerable: true,
			get: () => this.__data.attestation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let VerificationResultAttestation = require('./verificationresultattestation.js');
				this.__data.attestation = new VerificationResultAttestation(value);
			},
		});

		Object.defineProperty(this, 'validator', {
			enumerable: true,
			get: () => this.__data.validator,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let VerificationResultValidator = require('./verificationresultvalidator.js');
				this.__data.validator = Array.isArray(value)
					? value.map(v => new VerificationResultValidator(v))
					: [new VerificationResultValidator(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'VerificationResult',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'VerificationResult';
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
			target: this.target && this.target.map(v => v.toJSON()),
			_targetLocation: this._targetLocation && this._targetLocation.toJSON(),
			targetLocation: this.targetLocation,
			need: this.need && this.need.toJSON(),
			_status: this._status && this._status.toJSON(),
			status: this.status,
			_statusDate: this._statusDate && this._statusDate.toJSON(),
			statusDate: this.statusDate,
			validationType: this.validationType && this.validationType.toJSON(),
			validationProcess: this.validationProcess && this.validationProcess.map(v => v.toJSON()),
			frequency: this.frequency && this.frequency.toJSON(),
			_lastPerformed: this._lastPerformed && this._lastPerformed.toJSON(),
			lastPerformed: this.lastPerformed,
			_nextScheduled: this._nextScheduled && this._nextScheduled.toJSON(),
			nextScheduled: this.nextScheduled,
			failureAction: this.failureAction && this.failureAction.toJSON(),
			primarySource: this.primarySource && this.primarySource.map(v => v.toJSON()),
			attestation: this.attestation && this.attestation.toJSON(),
			validator: this.validator && this.validator.map(v => v.toJSON()),
		};
	}
};
