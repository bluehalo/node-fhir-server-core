/**
 * @name exports
 * @summary DeviceMetric Class
 */
module.exports = class DeviceMetric {
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
				this.__data.identifier = new Identifier(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/devicemetric-type
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/devicemetric-type
		Object.defineProperty(this, 'unit', {
			enumerable: true,
			get: () => this.__data.unit,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.unit = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'source', {
			enumerable: true,
			get: () => this.__data.source,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.source = new Reference(value);
			},
		});

		Object.defineProperty(this, 'parent', {
			enumerable: true,
			get: () => this.__data.parent,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.parent = new Reference(value);
			},
		});

		Object.defineProperty(this, '_operationalStatus', {
			enumerable: true,
			get: () => this.__data._operationalStatus,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._operationalStatus = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/metric-operational-status
		Object.defineProperty(this, 'operationalStatus', {
			enumerable: true,
			get: () => this.__data.operationalStatus,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.operationalStatus = value;
			},
		});

		Object.defineProperty(this, '_color', {
			enumerable: true,
			get: () => this.__data._color,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._color = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/metric-color
		Object.defineProperty(this, 'color', {
			enumerable: true,
			get: () => this.__data.color,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.color = value;
			},
		});

		Object.defineProperty(this, '_category', {
			enumerable: true,
			get: () => this.__data._category,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._category = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/metric-category
		Object.defineProperty(this, 'category', {
			enumerable: true,
			get: () => this.__data.category,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.category = value;
			},
		});

		Object.defineProperty(this, 'measurementPeriod', {
			enumerable: true,
			get: () => this.__data.measurementPeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Timing = require('./timing.js');
				this.__data.measurementPeriod = new Timing(value);
			},
		});

		Object.defineProperty(this, 'calibration', {
			enumerable: true,
			get: () => this.__data.calibration,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let DeviceMetricCalibration = require('./devicemetriccalibration.js');
				this.__data.calibration = Array.isArray(value)
					? value.map(v => new DeviceMetricCalibration(v))
					: [new DeviceMetricCalibration(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'DeviceMetric',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'DeviceMetric';
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
			identifier: this.identifier && this.identifier.toJSON(),
			type: this.type && this.type.toJSON(),
			unit: this.unit && this.unit.toJSON(),
			source: this.source && this.source.toJSON(),
			parent: this.parent && this.parent.toJSON(),
			_operationalStatus: this._operationalStatus && this._operationalStatus.toJSON(),
			operationalStatus: this.operationalStatus,
			_color: this._color && this._color.toJSON(),
			color: this.color,
			_category: this._category && this._category.toJSON(),
			category: this.category,
			measurementPeriod: this.measurementPeriod && this.measurementPeriod.toJSON(),
			calibration: this.calibration && this.calibration.map(v => v.toJSON()),
		};
	}
};
