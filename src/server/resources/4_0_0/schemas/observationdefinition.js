/**
 * @name exports
 * @summary ObservationDefinition Class
 */
module.exports = class ObservationDefinition {
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

		Object.defineProperty(this, 'category', {
			enumerable: true,
			get: () => this.__data.category,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.category = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

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

		Object.defineProperty(this, '_permittedDataType', {
			enumerable: true,
			get: () => this.__data._permittedDataType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._permittedDataType = new Element(value);
			},
		});

		Object.defineProperty(this, 'permittedDataType', {
			enumerable: true,
			get: () => this.__data.permittedDataType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.permittedDataType = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_multipleResultsAllowed', {
			enumerable: true,
			get: () => this.__data._multipleResultsAllowed,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._multipleResultsAllowed = new Element(value);
			},
		});

		Object.defineProperty(this, 'multipleResultsAllowed', {
			enumerable: true,
			get: () => this.__data.multipleResultsAllowed,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.multipleResultsAllowed = value;
			},
		});

		Object.defineProperty(this, 'method', {
			enumerable: true,
			get: () => this.__data.method,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.method = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_preferredReportName', {
			enumerable: true,
			get: () => this.__data._preferredReportName,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._preferredReportName = new Element(value);
			},
		});

		Object.defineProperty(this, 'preferredReportName', {
			enumerable: true,
			get: () => this.__data.preferredReportName,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.preferredReportName = value;
			},
		});

		Object.defineProperty(this, 'quantitativeDetails', {
			enumerable: true,
			get: () => this.__data.quantitativeDetails,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ObservationDefinitionQuantitativeDetails = require('./observationdefinitionquantitativedetails.js');
				this.__data.quantitativeDetails = new ObservationDefinitionQuantitativeDetails(value);
			},
		});

		Object.defineProperty(this, 'qualifiedInterval', {
			enumerable: true,
			get: () => this.__data.qualifiedInterval,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ObservationDefinitionQualifiedInterval = require('./observationdefinitionqualifiedinterval.js');
				this.__data.qualifiedInterval = Array.isArray(value)
					? value.map(v => new ObservationDefinitionQualifiedInterval(v))
					: [new ObservationDefinitionQualifiedInterval(value)];
			},
		});

		Object.defineProperty(this, 'validCodedValueSet', {
			enumerable: true,
			get: () => this.__data.validCodedValueSet,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.validCodedValueSet = new Reference(value);
			},
		});

		Object.defineProperty(this, 'normalCodedValueSet', {
			enumerable: true,
			get: () => this.__data.normalCodedValueSet,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.normalCodedValueSet = new Reference(value);
			},
		});

		Object.defineProperty(this, 'abnormalCodedValueSet', {
			enumerable: true,
			get: () => this.__data.abnormalCodedValueSet,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.abnormalCodedValueSet = new Reference(value);
			},
		});

		Object.defineProperty(this, 'criticalCodedValueSet', {
			enumerable: true,
			get: () => this.__data.criticalCodedValueSet,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.criticalCodedValueSet = new Reference(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ObservationDefinition',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ObservationDefinition';
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
			category: this.category && this.category.map(v => v.toJSON()),
			code: this.code && this.code.toJSON(),
			identifier: this.identifier && this.identifier.map(v => v.toJSON()),
			_permittedDataType: this._permittedDataType && this._permittedDataType.toJSON(),
			permittedDataType: this.permittedDataType,
			_multipleResultsAllowed: this._multipleResultsAllowed && this._multipleResultsAllowed.toJSON(),
			multipleResultsAllowed: this.multipleResultsAllowed,
			method: this.method && this.method.toJSON(),
			_preferredReportName: this._preferredReportName && this._preferredReportName.toJSON(),
			preferredReportName: this.preferredReportName,
			quantitativeDetails: this.quantitativeDetails && this.quantitativeDetails.toJSON(),
			qualifiedInterval: this.qualifiedInterval && this.qualifiedInterval.map(v => v.toJSON()),
			validCodedValueSet: this.validCodedValueSet && this.validCodedValueSet.toJSON(),
			normalCodedValueSet: this.normalCodedValueSet && this.normalCodedValueSet.toJSON(),
			abnormalCodedValueSet: this.abnormalCodedValueSet && this.abnormalCodedValueSet.toJSON(),
			criticalCodedValueSet: this.criticalCodedValueSet && this.criticalCodedValueSet.toJSON(),
		};
	}
};
