/**
 * @name exports
 * @summary ConsentExcept Class
 */
module.exports = class ConsentExcept {
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

		Object.defineProperty(this, '_type', {
			enumerable: true,
			get: () => this.__data._type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._type = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/consent-except-type
		Object.defineProperty(this, 'type', {
			enumerable: true,
			get: () => this.__data.type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.type = value;
			},
		});

		Object.defineProperty(this, 'period', {
			enumerable: true,
			get: () => this.__data.period,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.period = new Period(value);
			},
		});

		Object.defineProperty(this, 'actor', {
			enumerable: true,
			get: () => this.__data.actor,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ConsentExceptActor = require('./consentexceptactor.js');
				this.__data.actor = Array.isArray(value)
					? value.map(v => new ConsentExceptActor(v))
					: [new ConsentExceptActor(value)];
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/consent-action
		Object.defineProperty(this, 'action', {
			enumerable: true,
			get: () => this.__data.action,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.action = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/security-labels
		Object.defineProperty(this, 'securityLabel', {
			enumerable: true,
			get: () => this.__data.securityLabel,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.securityLabel = Array.isArray(value) ? value.map(v => new Coding(v)) : [new Coding(value)];
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-PurposeOfUse
		Object.defineProperty(this, 'purpose', {
			enumerable: true,
			get: () => this.__data.purpose,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.purpose = Array.isArray(value) ? value.map(v => new Coding(v)) : [new Coding(value)];
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/consent-content-class
		Object.defineProperty(this, 'class', {
			enumerable: true,
			get: () => this.__data.class,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.class = Array.isArray(value) ? value.map(v => new Coding(v)) : [new Coding(value)];
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/consent-content-code
		Object.defineProperty(this, 'code', {
			enumerable: true,
			get: () => this.__data.code,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.code = Array.isArray(value) ? value.map(v => new Coding(v)) : [new Coding(value)];
			},
		});

		Object.defineProperty(this, 'dataPeriod', {
			enumerable: true,
			get: () => this.__data.dataPeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.dataPeriod = new Period(value);
			},
		});

		Object.defineProperty(this, 'data', {
			enumerable: true,
			get: () => this.__data.data,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ConsentExceptData = require('./consentexceptdata.js');
				this.__data.data = Array.isArray(value)
					? value.map(v => new ConsentExceptData(v))
					: [new ConsentExceptData(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ConsentExcept',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ConsentExcept';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_type: this._type && this._type.toJSON(),
			type: this.type,
			period: this.period && this.period.toJSON(),
			actor: this.actor && this.actor.map(v => v.toJSON()),
			action: this.action && this.action.map(v => v.toJSON()),
			securityLabel: this.securityLabel && this.securityLabel.map(v => v.toJSON()),
			purpose: this.purpose && this.purpose.map(v => v.toJSON()),
			class: this.class && this.class.map(v => v.toJSON()),
			code: this.code && this.code.map(v => v.toJSON()),
			dataPeriod: this.dataPeriod && this.dataPeriod.toJSON(),
			data: this.data && this.data.map(v => v.toJSON()),
		};
	}
};
