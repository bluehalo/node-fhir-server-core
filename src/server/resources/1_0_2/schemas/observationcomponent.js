/**
 * @name exports
 * @summary ObservationComponent Class
 */
module.exports = class ObservationComponent {
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/observation-codes
		Object.defineProperty(this, 'code', {
			enumerable: true,
			get: () => this.__data.code,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.code = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'valueQuantity', {
			enumerable: true,
			get: () => this.__data.valueQuantity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.valueQuantity = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'valueCodeableConcept', {
			enumerable: true,
			get: () => this.__data.valueCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.valueCodeableConcept = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_valueString', {
			enumerable: true,
			get: () => this.__data._valueString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueString = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueString', {
			enumerable: true,
			get: () => this.__data.valueString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueString = value;
			},
		});

		Object.defineProperty(this, 'valueRange', {
			enumerable: true,
			get: () => this.__data.valueRange,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Range = require('./range.js');
				this.__data.valueRange = new Range(value);
			},
		});

		Object.defineProperty(this, 'valueRatio', {
			enumerable: true,
			get: () => this.__data.valueRatio,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Ratio = require('./ratio.js');
				this.__data.valueRatio = new Ratio(value);
			},
		});

		Object.defineProperty(this, 'valueSampledData', {
			enumerable: true,
			get: () => this.__data.valueSampledData,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SampledData = require('./sampleddata.js');
				this.__data.valueSampledData = new SampledData(value);
			},
		});

		Object.defineProperty(this, 'valueAttachment', {
			enumerable: true,
			get: () => this.__data.valueAttachment,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Attachment = require('./attachment.js');
				this.__data.valueAttachment = new Attachment(value);
			},
		});

		Object.defineProperty(this, '_valueTime', {
			enumerable: true,
			get: () => this.__data._valueTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueTime', {
			enumerable: true,
			get: () => this.__data.valueTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueTime = value;
			},
		});

		Object.defineProperty(this, '_valueDateTime', {
			enumerable: true,
			get: () => this.__data._valueDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueDateTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueDateTime', {
			enumerable: true,
			get: () => this.__data.valueDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueDateTime = value;
			},
		});

		Object.defineProperty(this, 'valuePeriod', {
			enumerable: true,
			get: () => this.__data.valuePeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.valuePeriod = new Period(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/observation-valueabsentreason
		Object.defineProperty(this, 'dataAbsentReason', {
			enumerable: true,
			get: () => this.__data.dataAbsentReason,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.dataAbsentReason = new CodeableConcept(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ObservationComponent',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ObservationComponent';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			code: this.code && this.code.toJSON(),
			valueQuantity: this.valueQuantity && this.valueQuantity.toJSON(),
			valueCodeableConcept: this.valueCodeableConcept && this.valueCodeableConcept.toJSON(),
			_valueString: this._valueString && this._valueString.toJSON(),
			valueString: this.valueString,
			valueRange: this.valueRange && this.valueRange.toJSON(),
			valueRatio: this.valueRatio && this.valueRatio.toJSON(),
			valueSampledData: this.valueSampledData && this.valueSampledData.toJSON(),
			valueAttachment: this.valueAttachment && this.valueAttachment.toJSON(),
			_valueTime: this._valueTime && this._valueTime.toJSON(),
			valueTime: this.valueTime,
			_valueDateTime: this._valueDateTime && this._valueDateTime.toJSON(),
			valueDateTime: this.valueDateTime,
			valuePeriod: this.valuePeriod && this.valuePeriod.toJSON(),
			dataAbsentReason: this.dataAbsentReason && this.dataAbsentReason.toJSON(),
		};
	}
};
