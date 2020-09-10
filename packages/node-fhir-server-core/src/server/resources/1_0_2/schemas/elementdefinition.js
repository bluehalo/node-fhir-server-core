/**
 * @name exports
 * @summary ElementDefinition Class
 */
module.exports = class ElementDefinition {
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

		Object.defineProperty(this, '_path', {
			enumerable: true,
			get: () => this.__data._path,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._path = new Element(value);
			},
		});

		Object.defineProperty(this, 'path', {
			enumerable: true,
			get: () => this.__data.path,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.path = value;
			},
		});

		Object.defineProperty(this, '_representation', {
			enumerable: true,
			get: () => this.__data._representation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._representation = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/property-representation
		Object.defineProperty(this, 'representation', {
			enumerable: true,
			get: () => this.__data.representation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.representation = Array.isArray(value) ? value.map(v => v) : [value];
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

		Object.defineProperty(this, '_label', {
			enumerable: true,
			get: () => this.__data._label,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._label = new Element(value);
			},
		});

		Object.defineProperty(this, 'label', {
			enumerable: true,
			get: () => this.__data.label,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.label = value;
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

				let Coding = require('./coding.js');
				this.__data.code = Array.isArray(value) ? value.map(v => new Coding(v)) : [new Coding(value)];
			},
		});

		Object.defineProperty(this, 'slicing', {
			enumerable: true,
			get: () => this.__data.slicing,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data.slicing = new Element(value);
			},
		});

		Object.defineProperty(this, '_short', {
			enumerable: true,
			get: () => this.__data._short,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._short = new Element(value);
			},
		});

		Object.defineProperty(this, 'short', {
			enumerable: true,
			get: () => this.__data.short,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.short = value;
			},
		});

		Object.defineProperty(this, '_definition', {
			enumerable: true,
			get: () => this.__data._definition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._definition = new Element(value);
			},
		});

		Object.defineProperty(this, 'definition', {
			enumerable: true,
			get: () => this.__data.definition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.definition = value;
			},
		});

		Object.defineProperty(this, '_comments', {
			enumerable: true,
			get: () => this.__data._comments,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._comments = new Element(value);
			},
		});

		Object.defineProperty(this, 'comments', {
			enumerable: true,
			get: () => this.__data.comments,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.comments = value;
			},
		});

		Object.defineProperty(this, '_requirements', {
			enumerable: true,
			get: () => this.__data._requirements,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._requirements = new Element(value);
			},
		});

		Object.defineProperty(this, 'requirements', {
			enumerable: true,
			get: () => this.__data.requirements,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.requirements = value;
			},
		});

		Object.defineProperty(this, '_alias', {
			enumerable: true,
			get: () => this.__data._alias,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._alias = new Element(value);
			},
		});

		Object.defineProperty(this, 'alias', {
			enumerable: true,
			get: () => this.__data.alias,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.alias = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_min', {
			enumerable: true,
			get: () => this.__data._min,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._min = new Element(value);
			},
		});

		Object.defineProperty(this, 'min', {
			enumerable: true,
			get: () => this.__data.min,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.min = value;
			},
		});

		Object.defineProperty(this, '_max', {
			enumerable: true,
			get: () => this.__data._max,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._max = new Element(value);
			},
		});

		Object.defineProperty(this, 'max', {
			enumerable: true,
			get: () => this.__data.max,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.max = value;
			},
		});

		Object.defineProperty(this, 'base', {
			enumerable: true,
			get: () => this.__data.base,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data.base = new Element(value);
			},
		});

		Object.defineProperty(this, 'type', {
			enumerable: true,
			get: () => this.__data.type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data.type = Array.isArray(value) ? value.map(v => new Element(v)) : [new Element(value)];
			},
		});

		Object.defineProperty(this, '_nameReference', {
			enumerable: true,
			get: () => this.__data._nameReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._nameReference = new Element(value);
			},
		});

		Object.defineProperty(this, 'nameReference', {
			enumerable: true,
			get: () => this.__data.nameReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.nameReference = value;
			},
		});

		Object.defineProperty(this, '_defaultValueBoolean', {
			enumerable: true,
			get: () => this.__data._defaultValueBoolean,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._defaultValueBoolean = new Element(value);
			},
		});

		Object.defineProperty(this, 'defaultValueBoolean', {
			enumerable: true,
			get: () => this.__data.defaultValueBoolean,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.defaultValueBoolean = value;
			},
		});

		Object.defineProperty(this, '_defaultValueInteger', {
			enumerable: true,
			get: () => this.__data._defaultValueInteger,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._defaultValueInteger = new Element(value);
			},
		});

		Object.defineProperty(this, 'defaultValueInteger', {
			enumerable: true,
			get: () => this.__data.defaultValueInteger,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.defaultValueInteger = value;
			},
		});

		Object.defineProperty(this, '_defaultValueDecimal', {
			enumerable: true,
			get: () => this.__data._defaultValueDecimal,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._defaultValueDecimal = new Element(value);
			},
		});

		Object.defineProperty(this, 'defaultValueDecimal', {
			enumerable: true,
			get: () => this.__data.defaultValueDecimal,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.defaultValueDecimal = value;
			},
		});

		Object.defineProperty(this, '_defaultValueBase64Binary', {
			enumerable: true,
			get: () => this.__data._defaultValueBase64Binary,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._defaultValueBase64Binary = new Element(value);
			},
		});

		Object.defineProperty(this, 'defaultValueBase64Binary', {
			enumerable: true,
			get: () => this.__data.defaultValueBase64Binary,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.defaultValueBase64Binary = value;
			},
		});

		Object.defineProperty(this, '_defaultValueInstant', {
			enumerable: true,
			get: () => this.__data._defaultValueInstant,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._defaultValueInstant = new Element(value);
			},
		});

		Object.defineProperty(this, 'defaultValueInstant', {
			enumerable: true,
			get: () => this.__data.defaultValueInstant,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.defaultValueInstant = value;
			},
		});

		Object.defineProperty(this, '_defaultValueString', {
			enumerable: true,
			get: () => this.__data._defaultValueString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._defaultValueString = new Element(value);
			},
		});

		Object.defineProperty(this, 'defaultValueString', {
			enumerable: true,
			get: () => this.__data.defaultValueString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.defaultValueString = value;
			},
		});

		Object.defineProperty(this, '_defaultValueUri', {
			enumerable: true,
			get: () => this.__data._defaultValueUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._defaultValueUri = new Element(value);
			},
		});

		Object.defineProperty(this, 'defaultValueUri', {
			enumerable: true,
			get: () => this.__data.defaultValueUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.defaultValueUri = value;
			},
		});

		Object.defineProperty(this, '_defaultValueDate', {
			enumerable: true,
			get: () => this.__data._defaultValueDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._defaultValueDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'defaultValueDate', {
			enumerable: true,
			get: () => this.__data.defaultValueDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.defaultValueDate = value;
			},
		});

		Object.defineProperty(this, '_defaultValueDateTime', {
			enumerable: true,
			get: () => this.__data._defaultValueDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._defaultValueDateTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'defaultValueDateTime', {
			enumerable: true,
			get: () => this.__data.defaultValueDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.defaultValueDateTime = value;
			},
		});

		Object.defineProperty(this, '_defaultValueTime', {
			enumerable: true,
			get: () => this.__data._defaultValueTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._defaultValueTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'defaultValueTime', {
			enumerable: true,
			get: () => this.__data.defaultValueTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.defaultValueTime = value;
			},
		});

		Object.defineProperty(this, '_defaultValueCode', {
			enumerable: true,
			get: () => this.__data._defaultValueCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._defaultValueCode = new Element(value);
			},
		});

		Object.defineProperty(this, 'defaultValueCode', {
			enumerable: true,
			get: () => this.__data.defaultValueCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.defaultValueCode = value;
			},
		});

		Object.defineProperty(this, '_defaultValueOid', {
			enumerable: true,
			get: () => this.__data._defaultValueOid,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._defaultValueOid = new Element(value);
			},
		});

		Object.defineProperty(this, 'defaultValueOid', {
			enumerable: true,
			get: () => this.__data.defaultValueOid,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.defaultValueOid = value;
			},
		});

		Object.defineProperty(this, '_defaultValueId', {
			enumerable: true,
			get: () => this.__data._defaultValueId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._defaultValueId = new Element(value);
			},
		});

		Object.defineProperty(this, 'defaultValueId', {
			enumerable: true,
			get: () => this.__data.defaultValueId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.defaultValueId = value;
			},
		});

		Object.defineProperty(this, '_defaultValueUnsignedInt', {
			enumerable: true,
			get: () => this.__data._defaultValueUnsignedInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._defaultValueUnsignedInt = new Element(value);
			},
		});

		Object.defineProperty(this, 'defaultValueUnsignedInt', {
			enumerable: true,
			get: () => this.__data.defaultValueUnsignedInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.defaultValueUnsignedInt = value;
			},
		});

		Object.defineProperty(this, '_defaultValuePositiveInt', {
			enumerable: true,
			get: () => this.__data._defaultValuePositiveInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._defaultValuePositiveInt = new Element(value);
			},
		});

		Object.defineProperty(this, 'defaultValuePositiveInt', {
			enumerable: true,
			get: () => this.__data.defaultValuePositiveInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.defaultValuePositiveInt = value;
			},
		});

		Object.defineProperty(this, '_defaultValueMarkdown', {
			enumerable: true,
			get: () => this.__data._defaultValueMarkdown,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._defaultValueMarkdown = new Element(value);
			},
		});

		Object.defineProperty(this, 'defaultValueMarkdown', {
			enumerable: true,
			get: () => this.__data.defaultValueMarkdown,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.defaultValueMarkdown = value;
			},
		});

		Object.defineProperty(this, 'defaultValueAnnotation', {
			enumerable: true,
			get: () => this.__data.defaultValueAnnotation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Annotation = require('./annotation.js');
				this.__data.defaultValueAnnotation = new Annotation(value);
			},
		});

		Object.defineProperty(this, 'defaultValueAttachment', {
			enumerable: true,
			get: () => this.__data.defaultValueAttachment,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Attachment = require('./attachment.js');
				this.__data.defaultValueAttachment = new Attachment(value);
			},
		});

		Object.defineProperty(this, 'defaultValueIdentifier', {
			enumerable: true,
			get: () => this.__data.defaultValueIdentifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.defaultValueIdentifier = new Identifier(value);
			},
		});

		Object.defineProperty(this, 'defaultValueCodeableConcept', {
			enumerable: true,
			get: () => this.__data.defaultValueCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.defaultValueCodeableConcept = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'defaultValueCoding', {
			enumerable: true,
			get: () => this.__data.defaultValueCoding,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.defaultValueCoding = new Coding(value);
			},
		});

		Object.defineProperty(this, 'defaultValueQuantity', {
			enumerable: true,
			get: () => this.__data.defaultValueQuantity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.defaultValueQuantity = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'defaultValueRange', {
			enumerable: true,
			get: () => this.__data.defaultValueRange,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Range = require('./range.js');
				this.__data.defaultValueRange = new Range(value);
			},
		});

		Object.defineProperty(this, 'defaultValuePeriod', {
			enumerable: true,
			get: () => this.__data.defaultValuePeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.defaultValuePeriod = new Period(value);
			},
		});

		Object.defineProperty(this, 'defaultValueRatio', {
			enumerable: true,
			get: () => this.__data.defaultValueRatio,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Ratio = require('./ratio.js');
				this.__data.defaultValueRatio = new Ratio(value);
			},
		});

		Object.defineProperty(this, 'defaultValueSampledData', {
			enumerable: true,
			get: () => this.__data.defaultValueSampledData,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SampledData = require('./sampleddata.js');
				this.__data.defaultValueSampledData = new SampledData(value);
			},
		});

		Object.defineProperty(this, 'defaultValueSignature', {
			enumerable: true,
			get: () => this.__data.defaultValueSignature,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Signature = require('./signature.js');
				this.__data.defaultValueSignature = new Signature(value);
			},
		});

		Object.defineProperty(this, 'defaultValueHumanName', {
			enumerable: true,
			get: () => this.__data.defaultValueHumanName,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let HumanName = require('./humanname.js');
				this.__data.defaultValueHumanName = new HumanName(value);
			},
		});

		Object.defineProperty(this, 'defaultValueAddress', {
			enumerable: true,
			get: () => this.__data.defaultValueAddress,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Address = require('./address.js');
				this.__data.defaultValueAddress = new Address(value);
			},
		});

		Object.defineProperty(this, 'defaultValueContactPoint', {
			enumerable: true,
			get: () => this.__data.defaultValueContactPoint,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContactPoint = require('./contactpoint.js');
				this.__data.defaultValueContactPoint = new ContactPoint(value);
			},
		});

		Object.defineProperty(this, 'defaultValueTiming', {
			enumerable: true,
			get: () => this.__data.defaultValueTiming,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Timing = require('./timing.js');
				this.__data.defaultValueTiming = new Timing(value);
			},
		});

		Object.defineProperty(this, 'defaultValueReference', {
			enumerable: true,
			get: () => this.__data.defaultValueReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.defaultValueReference = new Reference(value);
			},
		});

		Object.defineProperty(this, 'defaultValueMeta', {
			enumerable: true,
			get: () => this.__data.defaultValueMeta,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Meta = require('./meta.js');
				this.__data.defaultValueMeta = new Meta(value);
			},
		});

		Object.defineProperty(this, '_meaningWhenMissing', {
			enumerable: true,
			get: () => this.__data._meaningWhenMissing,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._meaningWhenMissing = new Element(value);
			},
		});

		Object.defineProperty(this, 'meaningWhenMissing', {
			enumerable: true,
			get: () => this.__data.meaningWhenMissing,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.meaningWhenMissing = value;
			},
		});

		Object.defineProperty(this, '_fixedBoolean', {
			enumerable: true,
			get: () => this.__data._fixedBoolean,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._fixedBoolean = new Element(value);
			},
		});

		Object.defineProperty(this, 'fixedBoolean', {
			enumerable: true,
			get: () => this.__data.fixedBoolean,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.fixedBoolean = value;
			},
		});

		Object.defineProperty(this, '_fixedInteger', {
			enumerable: true,
			get: () => this.__data._fixedInteger,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._fixedInteger = new Element(value);
			},
		});

		Object.defineProperty(this, 'fixedInteger', {
			enumerable: true,
			get: () => this.__data.fixedInteger,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.fixedInteger = value;
			},
		});

		Object.defineProperty(this, '_fixedDecimal', {
			enumerable: true,
			get: () => this.__data._fixedDecimal,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._fixedDecimal = new Element(value);
			},
		});

		Object.defineProperty(this, 'fixedDecimal', {
			enumerable: true,
			get: () => this.__data.fixedDecimal,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.fixedDecimal = value;
			},
		});

		Object.defineProperty(this, '_fixedBase64Binary', {
			enumerable: true,
			get: () => this.__data._fixedBase64Binary,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._fixedBase64Binary = new Element(value);
			},
		});

		Object.defineProperty(this, 'fixedBase64Binary', {
			enumerable: true,
			get: () => this.__data.fixedBase64Binary,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.fixedBase64Binary = value;
			},
		});

		Object.defineProperty(this, '_fixedInstant', {
			enumerable: true,
			get: () => this.__data._fixedInstant,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._fixedInstant = new Element(value);
			},
		});

		Object.defineProperty(this, 'fixedInstant', {
			enumerable: true,
			get: () => this.__data.fixedInstant,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.fixedInstant = value;
			},
		});

		Object.defineProperty(this, '_fixedString', {
			enumerable: true,
			get: () => this.__data._fixedString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._fixedString = new Element(value);
			},
		});

		Object.defineProperty(this, 'fixedString', {
			enumerable: true,
			get: () => this.__data.fixedString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.fixedString = value;
			},
		});

		Object.defineProperty(this, '_fixedUri', {
			enumerable: true,
			get: () => this.__data._fixedUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._fixedUri = new Element(value);
			},
		});

		Object.defineProperty(this, 'fixedUri', {
			enumerable: true,
			get: () => this.__data.fixedUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.fixedUri = value;
			},
		});

		Object.defineProperty(this, '_fixedDate', {
			enumerable: true,
			get: () => this.__data._fixedDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._fixedDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'fixedDate', {
			enumerable: true,
			get: () => this.__data.fixedDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.fixedDate = value;
			},
		});

		Object.defineProperty(this, '_fixedDateTime', {
			enumerable: true,
			get: () => this.__data._fixedDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._fixedDateTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'fixedDateTime', {
			enumerable: true,
			get: () => this.__data.fixedDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.fixedDateTime = value;
			},
		});

		Object.defineProperty(this, '_fixedTime', {
			enumerable: true,
			get: () => this.__data._fixedTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._fixedTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'fixedTime', {
			enumerable: true,
			get: () => this.__data.fixedTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.fixedTime = value;
			},
		});

		Object.defineProperty(this, '_fixedCode', {
			enumerable: true,
			get: () => this.__data._fixedCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._fixedCode = new Element(value);
			},
		});

		Object.defineProperty(this, 'fixedCode', {
			enumerable: true,
			get: () => this.__data.fixedCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.fixedCode = value;
			},
		});

		Object.defineProperty(this, '_fixedOid', {
			enumerable: true,
			get: () => this.__data._fixedOid,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._fixedOid = new Element(value);
			},
		});

		Object.defineProperty(this, 'fixedOid', {
			enumerable: true,
			get: () => this.__data.fixedOid,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.fixedOid = value;
			},
		});

		Object.defineProperty(this, '_fixedId', {
			enumerable: true,
			get: () => this.__data._fixedId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._fixedId = new Element(value);
			},
		});

		Object.defineProperty(this, 'fixedId', {
			enumerable: true,
			get: () => this.__data.fixedId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.fixedId = value;
			},
		});

		Object.defineProperty(this, '_fixedUnsignedInt', {
			enumerable: true,
			get: () => this.__data._fixedUnsignedInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._fixedUnsignedInt = new Element(value);
			},
		});

		Object.defineProperty(this, 'fixedUnsignedInt', {
			enumerable: true,
			get: () => this.__data.fixedUnsignedInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.fixedUnsignedInt = value;
			},
		});

		Object.defineProperty(this, '_fixedPositiveInt', {
			enumerable: true,
			get: () => this.__data._fixedPositiveInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._fixedPositiveInt = new Element(value);
			},
		});

		Object.defineProperty(this, 'fixedPositiveInt', {
			enumerable: true,
			get: () => this.__data.fixedPositiveInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.fixedPositiveInt = value;
			},
		});

		Object.defineProperty(this, '_fixedMarkdown', {
			enumerable: true,
			get: () => this.__data._fixedMarkdown,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._fixedMarkdown = new Element(value);
			},
		});

		Object.defineProperty(this, 'fixedMarkdown', {
			enumerable: true,
			get: () => this.__data.fixedMarkdown,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.fixedMarkdown = value;
			},
		});

		Object.defineProperty(this, 'fixedAnnotation', {
			enumerable: true,
			get: () => this.__data.fixedAnnotation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Annotation = require('./annotation.js');
				this.__data.fixedAnnotation = new Annotation(value);
			},
		});

		Object.defineProperty(this, 'fixedAttachment', {
			enumerable: true,
			get: () => this.__data.fixedAttachment,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Attachment = require('./attachment.js');
				this.__data.fixedAttachment = new Attachment(value);
			},
		});

		Object.defineProperty(this, 'fixedIdentifier', {
			enumerable: true,
			get: () => this.__data.fixedIdentifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.fixedIdentifier = new Identifier(value);
			},
		});

		Object.defineProperty(this, 'fixedCodeableConcept', {
			enumerable: true,
			get: () => this.__data.fixedCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.fixedCodeableConcept = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'fixedCoding', {
			enumerable: true,
			get: () => this.__data.fixedCoding,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.fixedCoding = new Coding(value);
			},
		});

		Object.defineProperty(this, 'fixedQuantity', {
			enumerable: true,
			get: () => this.__data.fixedQuantity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.fixedQuantity = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'fixedRange', {
			enumerable: true,
			get: () => this.__data.fixedRange,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Range = require('./range.js');
				this.__data.fixedRange = new Range(value);
			},
		});

		Object.defineProperty(this, 'fixedPeriod', {
			enumerable: true,
			get: () => this.__data.fixedPeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.fixedPeriod = new Period(value);
			},
		});

		Object.defineProperty(this, 'fixedRatio', {
			enumerable: true,
			get: () => this.__data.fixedRatio,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Ratio = require('./ratio.js');
				this.__data.fixedRatio = new Ratio(value);
			},
		});

		Object.defineProperty(this, 'fixedSampledData', {
			enumerable: true,
			get: () => this.__data.fixedSampledData,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SampledData = require('./sampleddata.js');
				this.__data.fixedSampledData = new SampledData(value);
			},
		});

		Object.defineProperty(this, 'fixedSignature', {
			enumerable: true,
			get: () => this.__data.fixedSignature,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Signature = require('./signature.js');
				this.__data.fixedSignature = new Signature(value);
			},
		});

		Object.defineProperty(this, 'fixedHumanName', {
			enumerable: true,
			get: () => this.__data.fixedHumanName,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let HumanName = require('./humanname.js');
				this.__data.fixedHumanName = new HumanName(value);
			},
		});

		Object.defineProperty(this, 'fixedAddress', {
			enumerable: true,
			get: () => this.__data.fixedAddress,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Address = require('./address.js');
				this.__data.fixedAddress = new Address(value);
			},
		});

		Object.defineProperty(this, 'fixedContactPoint', {
			enumerable: true,
			get: () => this.__data.fixedContactPoint,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContactPoint = require('./contactpoint.js');
				this.__data.fixedContactPoint = new ContactPoint(value);
			},
		});

		Object.defineProperty(this, 'fixedTiming', {
			enumerable: true,
			get: () => this.__data.fixedTiming,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Timing = require('./timing.js');
				this.__data.fixedTiming = new Timing(value);
			},
		});

		Object.defineProperty(this, 'fixedReference', {
			enumerable: true,
			get: () => this.__data.fixedReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.fixedReference = new Reference(value);
			},
		});

		Object.defineProperty(this, 'fixedMeta', {
			enumerable: true,
			get: () => this.__data.fixedMeta,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Meta = require('./meta.js');
				this.__data.fixedMeta = new Meta(value);
			},
		});

		Object.defineProperty(this, '_patternBoolean', {
			enumerable: true,
			get: () => this.__data._patternBoolean,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._patternBoolean = new Element(value);
			},
		});

		Object.defineProperty(this, 'patternBoolean', {
			enumerable: true,
			get: () => this.__data.patternBoolean,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.patternBoolean = value;
			},
		});

		Object.defineProperty(this, '_patternInteger', {
			enumerable: true,
			get: () => this.__data._patternInteger,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._patternInteger = new Element(value);
			},
		});

		Object.defineProperty(this, 'patternInteger', {
			enumerable: true,
			get: () => this.__data.patternInteger,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.patternInteger = value;
			},
		});

		Object.defineProperty(this, '_patternDecimal', {
			enumerable: true,
			get: () => this.__data._patternDecimal,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._patternDecimal = new Element(value);
			},
		});

		Object.defineProperty(this, 'patternDecimal', {
			enumerable: true,
			get: () => this.__data.patternDecimal,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.patternDecimal = value;
			},
		});

		Object.defineProperty(this, '_patternBase64Binary', {
			enumerable: true,
			get: () => this.__data._patternBase64Binary,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._patternBase64Binary = new Element(value);
			},
		});

		Object.defineProperty(this, 'patternBase64Binary', {
			enumerable: true,
			get: () => this.__data.patternBase64Binary,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.patternBase64Binary = value;
			},
		});

		Object.defineProperty(this, '_patternInstant', {
			enumerable: true,
			get: () => this.__data._patternInstant,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._patternInstant = new Element(value);
			},
		});

		Object.defineProperty(this, 'patternInstant', {
			enumerable: true,
			get: () => this.__data.patternInstant,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.patternInstant = value;
			},
		});

		Object.defineProperty(this, '_patternString', {
			enumerable: true,
			get: () => this.__data._patternString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._patternString = new Element(value);
			},
		});

		Object.defineProperty(this, 'patternString', {
			enumerable: true,
			get: () => this.__data.patternString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.patternString = value;
			},
		});

		Object.defineProperty(this, '_patternUri', {
			enumerable: true,
			get: () => this.__data._patternUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._patternUri = new Element(value);
			},
		});

		Object.defineProperty(this, 'patternUri', {
			enumerable: true,
			get: () => this.__data.patternUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.patternUri = value;
			},
		});

		Object.defineProperty(this, '_patternDate', {
			enumerable: true,
			get: () => this.__data._patternDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._patternDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'patternDate', {
			enumerable: true,
			get: () => this.__data.patternDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.patternDate = value;
			},
		});

		Object.defineProperty(this, '_patternDateTime', {
			enumerable: true,
			get: () => this.__data._patternDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._patternDateTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'patternDateTime', {
			enumerable: true,
			get: () => this.__data.patternDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.patternDateTime = value;
			},
		});

		Object.defineProperty(this, '_patternTime', {
			enumerable: true,
			get: () => this.__data._patternTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._patternTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'patternTime', {
			enumerable: true,
			get: () => this.__data.patternTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.patternTime = value;
			},
		});

		Object.defineProperty(this, '_patternCode', {
			enumerable: true,
			get: () => this.__data._patternCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._patternCode = new Element(value);
			},
		});

		Object.defineProperty(this, 'patternCode', {
			enumerable: true,
			get: () => this.__data.patternCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.patternCode = value;
			},
		});

		Object.defineProperty(this, '_patternOid', {
			enumerable: true,
			get: () => this.__data._patternOid,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._patternOid = new Element(value);
			},
		});

		Object.defineProperty(this, 'patternOid', {
			enumerable: true,
			get: () => this.__data.patternOid,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.patternOid = value;
			},
		});

		Object.defineProperty(this, '_patternId', {
			enumerable: true,
			get: () => this.__data._patternId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._patternId = new Element(value);
			},
		});

		Object.defineProperty(this, 'patternId', {
			enumerable: true,
			get: () => this.__data.patternId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.patternId = value;
			},
		});

		Object.defineProperty(this, '_patternUnsignedInt', {
			enumerable: true,
			get: () => this.__data._patternUnsignedInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._patternUnsignedInt = new Element(value);
			},
		});

		Object.defineProperty(this, 'patternUnsignedInt', {
			enumerable: true,
			get: () => this.__data.patternUnsignedInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.patternUnsignedInt = value;
			},
		});

		Object.defineProperty(this, '_patternPositiveInt', {
			enumerable: true,
			get: () => this.__data._patternPositiveInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._patternPositiveInt = new Element(value);
			},
		});

		Object.defineProperty(this, 'patternPositiveInt', {
			enumerable: true,
			get: () => this.__data.patternPositiveInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.patternPositiveInt = value;
			},
		});

		Object.defineProperty(this, '_patternMarkdown', {
			enumerable: true,
			get: () => this.__data._patternMarkdown,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._patternMarkdown = new Element(value);
			},
		});

		Object.defineProperty(this, 'patternMarkdown', {
			enumerable: true,
			get: () => this.__data.patternMarkdown,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.patternMarkdown = value;
			},
		});

		Object.defineProperty(this, 'patternAnnotation', {
			enumerable: true,
			get: () => this.__data.patternAnnotation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Annotation = require('./annotation.js');
				this.__data.patternAnnotation = new Annotation(value);
			},
		});

		Object.defineProperty(this, 'patternAttachment', {
			enumerable: true,
			get: () => this.__data.patternAttachment,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Attachment = require('./attachment.js');
				this.__data.patternAttachment = new Attachment(value);
			},
		});

		Object.defineProperty(this, 'patternIdentifier', {
			enumerable: true,
			get: () => this.__data.patternIdentifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.patternIdentifier = new Identifier(value);
			},
		});

		Object.defineProperty(this, 'patternCodeableConcept', {
			enumerable: true,
			get: () => this.__data.patternCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.patternCodeableConcept = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'patternCoding', {
			enumerable: true,
			get: () => this.__data.patternCoding,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.patternCoding = new Coding(value);
			},
		});

		Object.defineProperty(this, 'patternQuantity', {
			enumerable: true,
			get: () => this.__data.patternQuantity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.patternQuantity = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'patternRange', {
			enumerable: true,
			get: () => this.__data.patternRange,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Range = require('./range.js');
				this.__data.patternRange = new Range(value);
			},
		});

		Object.defineProperty(this, 'patternPeriod', {
			enumerable: true,
			get: () => this.__data.patternPeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.patternPeriod = new Period(value);
			},
		});

		Object.defineProperty(this, 'patternRatio', {
			enumerable: true,
			get: () => this.__data.patternRatio,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Ratio = require('./ratio.js');
				this.__data.patternRatio = new Ratio(value);
			},
		});

		Object.defineProperty(this, 'patternSampledData', {
			enumerable: true,
			get: () => this.__data.patternSampledData,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SampledData = require('./sampleddata.js');
				this.__data.patternSampledData = new SampledData(value);
			},
		});

		Object.defineProperty(this, 'patternSignature', {
			enumerable: true,
			get: () => this.__data.patternSignature,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Signature = require('./signature.js');
				this.__data.patternSignature = new Signature(value);
			},
		});

		Object.defineProperty(this, 'patternHumanName', {
			enumerable: true,
			get: () => this.__data.patternHumanName,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let HumanName = require('./humanname.js');
				this.__data.patternHumanName = new HumanName(value);
			},
		});

		Object.defineProperty(this, 'patternAddress', {
			enumerable: true,
			get: () => this.__data.patternAddress,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Address = require('./address.js');
				this.__data.patternAddress = new Address(value);
			},
		});

		Object.defineProperty(this, 'patternContactPoint', {
			enumerable: true,
			get: () => this.__data.patternContactPoint,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContactPoint = require('./contactpoint.js');
				this.__data.patternContactPoint = new ContactPoint(value);
			},
		});

		Object.defineProperty(this, 'patternTiming', {
			enumerable: true,
			get: () => this.__data.patternTiming,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Timing = require('./timing.js');
				this.__data.patternTiming = new Timing(value);
			},
		});

		Object.defineProperty(this, 'patternReference', {
			enumerable: true,
			get: () => this.__data.patternReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.patternReference = new Reference(value);
			},
		});

		Object.defineProperty(this, 'patternMeta', {
			enumerable: true,
			get: () => this.__data.patternMeta,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Meta = require('./meta.js');
				this.__data.patternMeta = new Meta(value);
			},
		});

		Object.defineProperty(this, '_exampleBoolean', {
			enumerable: true,
			get: () => this.__data._exampleBoolean,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._exampleBoolean = new Element(value);
			},
		});

		Object.defineProperty(this, 'exampleBoolean', {
			enumerable: true,
			get: () => this.__data.exampleBoolean,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.exampleBoolean = value;
			},
		});

		Object.defineProperty(this, '_exampleInteger', {
			enumerable: true,
			get: () => this.__data._exampleInteger,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._exampleInteger = new Element(value);
			},
		});

		Object.defineProperty(this, 'exampleInteger', {
			enumerable: true,
			get: () => this.__data.exampleInteger,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.exampleInteger = value;
			},
		});

		Object.defineProperty(this, '_exampleDecimal', {
			enumerable: true,
			get: () => this.__data._exampleDecimal,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._exampleDecimal = new Element(value);
			},
		});

		Object.defineProperty(this, 'exampleDecimal', {
			enumerable: true,
			get: () => this.__data.exampleDecimal,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.exampleDecimal = value;
			},
		});

		Object.defineProperty(this, '_exampleBase64Binary', {
			enumerable: true,
			get: () => this.__data._exampleBase64Binary,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._exampleBase64Binary = new Element(value);
			},
		});

		Object.defineProperty(this, 'exampleBase64Binary', {
			enumerable: true,
			get: () => this.__data.exampleBase64Binary,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.exampleBase64Binary = value;
			},
		});

		Object.defineProperty(this, '_exampleInstant', {
			enumerable: true,
			get: () => this.__data._exampleInstant,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._exampleInstant = new Element(value);
			},
		});

		Object.defineProperty(this, 'exampleInstant', {
			enumerable: true,
			get: () => this.__data.exampleInstant,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.exampleInstant = value;
			},
		});

		Object.defineProperty(this, '_exampleString', {
			enumerable: true,
			get: () => this.__data._exampleString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._exampleString = new Element(value);
			},
		});

		Object.defineProperty(this, 'exampleString', {
			enumerable: true,
			get: () => this.__data.exampleString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.exampleString = value;
			},
		});

		Object.defineProperty(this, '_exampleUri', {
			enumerable: true,
			get: () => this.__data._exampleUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._exampleUri = new Element(value);
			},
		});

		Object.defineProperty(this, 'exampleUri', {
			enumerable: true,
			get: () => this.__data.exampleUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.exampleUri = value;
			},
		});

		Object.defineProperty(this, '_exampleDate', {
			enumerable: true,
			get: () => this.__data._exampleDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._exampleDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'exampleDate', {
			enumerable: true,
			get: () => this.__data.exampleDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.exampleDate = value;
			},
		});

		Object.defineProperty(this, '_exampleDateTime', {
			enumerable: true,
			get: () => this.__data._exampleDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._exampleDateTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'exampleDateTime', {
			enumerable: true,
			get: () => this.__data.exampleDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.exampleDateTime = value;
			},
		});

		Object.defineProperty(this, '_exampleTime', {
			enumerable: true,
			get: () => this.__data._exampleTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._exampleTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'exampleTime', {
			enumerable: true,
			get: () => this.__data.exampleTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.exampleTime = value;
			},
		});

		Object.defineProperty(this, '_exampleCode', {
			enumerable: true,
			get: () => this.__data._exampleCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._exampleCode = new Element(value);
			},
		});

		Object.defineProperty(this, 'exampleCode', {
			enumerable: true,
			get: () => this.__data.exampleCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.exampleCode = value;
			},
		});

		Object.defineProperty(this, '_exampleOid', {
			enumerable: true,
			get: () => this.__data._exampleOid,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._exampleOid = new Element(value);
			},
		});

		Object.defineProperty(this, 'exampleOid', {
			enumerable: true,
			get: () => this.__data.exampleOid,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.exampleOid = value;
			},
		});

		Object.defineProperty(this, '_exampleId', {
			enumerable: true,
			get: () => this.__data._exampleId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._exampleId = new Element(value);
			},
		});

		Object.defineProperty(this, 'exampleId', {
			enumerable: true,
			get: () => this.__data.exampleId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.exampleId = value;
			},
		});

		Object.defineProperty(this, '_exampleUnsignedInt', {
			enumerable: true,
			get: () => this.__data._exampleUnsignedInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._exampleUnsignedInt = new Element(value);
			},
		});

		Object.defineProperty(this, 'exampleUnsignedInt', {
			enumerable: true,
			get: () => this.__data.exampleUnsignedInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.exampleUnsignedInt = value;
			},
		});

		Object.defineProperty(this, '_examplePositiveInt', {
			enumerable: true,
			get: () => this.__data._examplePositiveInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._examplePositiveInt = new Element(value);
			},
		});

		Object.defineProperty(this, 'examplePositiveInt', {
			enumerable: true,
			get: () => this.__data.examplePositiveInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.examplePositiveInt = value;
			},
		});

		Object.defineProperty(this, '_exampleMarkdown', {
			enumerable: true,
			get: () => this.__data._exampleMarkdown,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._exampleMarkdown = new Element(value);
			},
		});

		Object.defineProperty(this, 'exampleMarkdown', {
			enumerable: true,
			get: () => this.__data.exampleMarkdown,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.exampleMarkdown = value;
			},
		});

		Object.defineProperty(this, 'exampleAnnotation', {
			enumerable: true,
			get: () => this.__data.exampleAnnotation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Annotation = require('./annotation.js');
				this.__data.exampleAnnotation = new Annotation(value);
			},
		});

		Object.defineProperty(this, 'exampleAttachment', {
			enumerable: true,
			get: () => this.__data.exampleAttachment,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Attachment = require('./attachment.js');
				this.__data.exampleAttachment = new Attachment(value);
			},
		});

		Object.defineProperty(this, 'exampleIdentifier', {
			enumerable: true,
			get: () => this.__data.exampleIdentifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.exampleIdentifier = new Identifier(value);
			},
		});

		Object.defineProperty(this, 'exampleCodeableConcept', {
			enumerable: true,
			get: () => this.__data.exampleCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.exampleCodeableConcept = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'exampleCoding', {
			enumerable: true,
			get: () => this.__data.exampleCoding,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.exampleCoding = new Coding(value);
			},
		});

		Object.defineProperty(this, 'exampleQuantity', {
			enumerable: true,
			get: () => this.__data.exampleQuantity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.exampleQuantity = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'exampleRange', {
			enumerable: true,
			get: () => this.__data.exampleRange,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Range = require('./range.js');
				this.__data.exampleRange = new Range(value);
			},
		});

		Object.defineProperty(this, 'examplePeriod', {
			enumerable: true,
			get: () => this.__data.examplePeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.examplePeriod = new Period(value);
			},
		});

		Object.defineProperty(this, 'exampleRatio', {
			enumerable: true,
			get: () => this.__data.exampleRatio,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Ratio = require('./ratio.js');
				this.__data.exampleRatio = new Ratio(value);
			},
		});

		Object.defineProperty(this, 'exampleSampledData', {
			enumerable: true,
			get: () => this.__data.exampleSampledData,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SampledData = require('./sampleddata.js');
				this.__data.exampleSampledData = new SampledData(value);
			},
		});

		Object.defineProperty(this, 'exampleSignature', {
			enumerable: true,
			get: () => this.__data.exampleSignature,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Signature = require('./signature.js');
				this.__data.exampleSignature = new Signature(value);
			},
		});

		Object.defineProperty(this, 'exampleHumanName', {
			enumerable: true,
			get: () => this.__data.exampleHumanName,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let HumanName = require('./humanname.js');
				this.__data.exampleHumanName = new HumanName(value);
			},
		});

		Object.defineProperty(this, 'exampleAddress', {
			enumerable: true,
			get: () => this.__data.exampleAddress,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Address = require('./address.js');
				this.__data.exampleAddress = new Address(value);
			},
		});

		Object.defineProperty(this, 'exampleContactPoint', {
			enumerable: true,
			get: () => this.__data.exampleContactPoint,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContactPoint = require('./contactpoint.js');
				this.__data.exampleContactPoint = new ContactPoint(value);
			},
		});

		Object.defineProperty(this, 'exampleTiming', {
			enumerable: true,
			get: () => this.__data.exampleTiming,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Timing = require('./timing.js');
				this.__data.exampleTiming = new Timing(value);
			},
		});

		Object.defineProperty(this, 'exampleReference', {
			enumerable: true,
			get: () => this.__data.exampleReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.exampleReference = new Reference(value);
			},
		});

		Object.defineProperty(this, 'exampleMeta', {
			enumerable: true,
			get: () => this.__data.exampleMeta,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Meta = require('./meta.js');
				this.__data.exampleMeta = new Meta(value);
			},
		});

		Object.defineProperty(this, '_minValueBoolean', {
			enumerable: true,
			get: () => this.__data._minValueBoolean,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._minValueBoolean = new Element(value);
			},
		});

		Object.defineProperty(this, 'minValueBoolean', {
			enumerable: true,
			get: () => this.__data.minValueBoolean,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.minValueBoolean = value;
			},
		});

		Object.defineProperty(this, '_minValueInteger', {
			enumerable: true,
			get: () => this.__data._minValueInteger,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._minValueInteger = new Element(value);
			},
		});

		Object.defineProperty(this, 'minValueInteger', {
			enumerable: true,
			get: () => this.__data.minValueInteger,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.minValueInteger = value;
			},
		});

		Object.defineProperty(this, '_minValueDecimal', {
			enumerable: true,
			get: () => this.__data._minValueDecimal,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._minValueDecimal = new Element(value);
			},
		});

		Object.defineProperty(this, 'minValueDecimal', {
			enumerable: true,
			get: () => this.__data.minValueDecimal,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.minValueDecimal = value;
			},
		});

		Object.defineProperty(this, '_minValueBase64Binary', {
			enumerable: true,
			get: () => this.__data._minValueBase64Binary,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._minValueBase64Binary = new Element(value);
			},
		});

		Object.defineProperty(this, 'minValueBase64Binary', {
			enumerable: true,
			get: () => this.__data.minValueBase64Binary,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.minValueBase64Binary = value;
			},
		});

		Object.defineProperty(this, '_minValueInstant', {
			enumerable: true,
			get: () => this.__data._minValueInstant,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._minValueInstant = new Element(value);
			},
		});

		Object.defineProperty(this, 'minValueInstant', {
			enumerable: true,
			get: () => this.__data.minValueInstant,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.minValueInstant = value;
			},
		});

		Object.defineProperty(this, '_minValueString', {
			enumerable: true,
			get: () => this.__data._minValueString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._minValueString = new Element(value);
			},
		});

		Object.defineProperty(this, 'minValueString', {
			enumerable: true,
			get: () => this.__data.minValueString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.minValueString = value;
			},
		});

		Object.defineProperty(this, '_minValueUri', {
			enumerable: true,
			get: () => this.__data._minValueUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._minValueUri = new Element(value);
			},
		});

		Object.defineProperty(this, 'minValueUri', {
			enumerable: true,
			get: () => this.__data.minValueUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.minValueUri = value;
			},
		});

		Object.defineProperty(this, '_minValueDate', {
			enumerable: true,
			get: () => this.__data._minValueDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._minValueDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'minValueDate', {
			enumerable: true,
			get: () => this.__data.minValueDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.minValueDate = value;
			},
		});

		Object.defineProperty(this, '_minValueDateTime', {
			enumerable: true,
			get: () => this.__data._minValueDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._minValueDateTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'minValueDateTime', {
			enumerable: true,
			get: () => this.__data.minValueDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.minValueDateTime = value;
			},
		});

		Object.defineProperty(this, '_minValueTime', {
			enumerable: true,
			get: () => this.__data._minValueTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._minValueTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'minValueTime', {
			enumerable: true,
			get: () => this.__data.minValueTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.minValueTime = value;
			},
		});

		Object.defineProperty(this, '_minValueCode', {
			enumerable: true,
			get: () => this.__data._minValueCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._minValueCode = new Element(value);
			},
		});

		Object.defineProperty(this, 'minValueCode', {
			enumerable: true,
			get: () => this.__data.minValueCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.minValueCode = value;
			},
		});

		Object.defineProperty(this, '_minValueOid', {
			enumerable: true,
			get: () => this.__data._minValueOid,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._minValueOid = new Element(value);
			},
		});

		Object.defineProperty(this, 'minValueOid', {
			enumerable: true,
			get: () => this.__data.minValueOid,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.minValueOid = value;
			},
		});

		Object.defineProperty(this, '_minValueId', {
			enumerable: true,
			get: () => this.__data._minValueId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._minValueId = new Element(value);
			},
		});

		Object.defineProperty(this, 'minValueId', {
			enumerable: true,
			get: () => this.__data.minValueId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.minValueId = value;
			},
		});

		Object.defineProperty(this, '_minValueUnsignedInt', {
			enumerable: true,
			get: () => this.__data._minValueUnsignedInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._minValueUnsignedInt = new Element(value);
			},
		});

		Object.defineProperty(this, 'minValueUnsignedInt', {
			enumerable: true,
			get: () => this.__data.minValueUnsignedInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.minValueUnsignedInt = value;
			},
		});

		Object.defineProperty(this, '_minValuePositiveInt', {
			enumerable: true,
			get: () => this.__data._minValuePositiveInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._minValuePositiveInt = new Element(value);
			},
		});

		Object.defineProperty(this, 'minValuePositiveInt', {
			enumerable: true,
			get: () => this.__data.minValuePositiveInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.minValuePositiveInt = value;
			},
		});

		Object.defineProperty(this, '_minValueMarkdown', {
			enumerable: true,
			get: () => this.__data._minValueMarkdown,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._minValueMarkdown = new Element(value);
			},
		});

		Object.defineProperty(this, 'minValueMarkdown', {
			enumerable: true,
			get: () => this.__data.minValueMarkdown,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.minValueMarkdown = value;
			},
		});

		Object.defineProperty(this, 'minValueAnnotation', {
			enumerable: true,
			get: () => this.__data.minValueAnnotation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Annotation = require('./annotation.js');
				this.__data.minValueAnnotation = new Annotation(value);
			},
		});

		Object.defineProperty(this, 'minValueAttachment', {
			enumerable: true,
			get: () => this.__data.minValueAttachment,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Attachment = require('./attachment.js');
				this.__data.minValueAttachment = new Attachment(value);
			},
		});

		Object.defineProperty(this, 'minValueIdentifier', {
			enumerable: true,
			get: () => this.__data.minValueIdentifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.minValueIdentifier = new Identifier(value);
			},
		});

		Object.defineProperty(this, 'minValueCodeableConcept', {
			enumerable: true,
			get: () => this.__data.minValueCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.minValueCodeableConcept = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'minValueCoding', {
			enumerable: true,
			get: () => this.__data.minValueCoding,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.minValueCoding = new Coding(value);
			},
		});

		Object.defineProperty(this, 'minValueQuantity', {
			enumerable: true,
			get: () => this.__data.minValueQuantity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.minValueQuantity = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'minValueRange', {
			enumerable: true,
			get: () => this.__data.minValueRange,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Range = require('./range.js');
				this.__data.minValueRange = new Range(value);
			},
		});

		Object.defineProperty(this, 'minValuePeriod', {
			enumerable: true,
			get: () => this.__data.minValuePeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.minValuePeriod = new Period(value);
			},
		});

		Object.defineProperty(this, 'minValueRatio', {
			enumerable: true,
			get: () => this.__data.minValueRatio,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Ratio = require('./ratio.js');
				this.__data.minValueRatio = new Ratio(value);
			},
		});

		Object.defineProperty(this, 'minValueSampledData', {
			enumerable: true,
			get: () => this.__data.minValueSampledData,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SampledData = require('./sampleddata.js');
				this.__data.minValueSampledData = new SampledData(value);
			},
		});

		Object.defineProperty(this, 'minValueSignature', {
			enumerable: true,
			get: () => this.__data.minValueSignature,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Signature = require('./signature.js');
				this.__data.minValueSignature = new Signature(value);
			},
		});

		Object.defineProperty(this, 'minValueHumanName', {
			enumerable: true,
			get: () => this.__data.minValueHumanName,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let HumanName = require('./humanname.js');
				this.__data.minValueHumanName = new HumanName(value);
			},
		});

		Object.defineProperty(this, 'minValueAddress', {
			enumerable: true,
			get: () => this.__data.minValueAddress,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Address = require('./address.js');
				this.__data.minValueAddress = new Address(value);
			},
		});

		Object.defineProperty(this, 'minValueContactPoint', {
			enumerable: true,
			get: () => this.__data.minValueContactPoint,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContactPoint = require('./contactpoint.js');
				this.__data.minValueContactPoint = new ContactPoint(value);
			},
		});

		Object.defineProperty(this, 'minValueTiming', {
			enumerable: true,
			get: () => this.__data.minValueTiming,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Timing = require('./timing.js');
				this.__data.minValueTiming = new Timing(value);
			},
		});

		Object.defineProperty(this, 'minValueReference', {
			enumerable: true,
			get: () => this.__data.minValueReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.minValueReference = new Reference(value);
			},
		});

		Object.defineProperty(this, 'minValueMeta', {
			enumerable: true,
			get: () => this.__data.minValueMeta,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Meta = require('./meta.js');
				this.__data.minValueMeta = new Meta(value);
			},
		});

		Object.defineProperty(this, '_maxValueBoolean', {
			enumerable: true,
			get: () => this.__data._maxValueBoolean,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._maxValueBoolean = new Element(value);
			},
		});

		Object.defineProperty(this, 'maxValueBoolean', {
			enumerable: true,
			get: () => this.__data.maxValueBoolean,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.maxValueBoolean = value;
			},
		});

		Object.defineProperty(this, '_maxValueInteger', {
			enumerable: true,
			get: () => this.__data._maxValueInteger,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._maxValueInteger = new Element(value);
			},
		});

		Object.defineProperty(this, 'maxValueInteger', {
			enumerable: true,
			get: () => this.__data.maxValueInteger,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.maxValueInteger = value;
			},
		});

		Object.defineProperty(this, '_maxValueDecimal', {
			enumerable: true,
			get: () => this.__data._maxValueDecimal,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._maxValueDecimal = new Element(value);
			},
		});

		Object.defineProperty(this, 'maxValueDecimal', {
			enumerable: true,
			get: () => this.__data.maxValueDecimal,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.maxValueDecimal = value;
			},
		});

		Object.defineProperty(this, '_maxValueBase64Binary', {
			enumerable: true,
			get: () => this.__data._maxValueBase64Binary,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._maxValueBase64Binary = new Element(value);
			},
		});

		Object.defineProperty(this, 'maxValueBase64Binary', {
			enumerable: true,
			get: () => this.__data.maxValueBase64Binary,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.maxValueBase64Binary = value;
			},
		});

		Object.defineProperty(this, '_maxValueInstant', {
			enumerable: true,
			get: () => this.__data._maxValueInstant,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._maxValueInstant = new Element(value);
			},
		});

		Object.defineProperty(this, 'maxValueInstant', {
			enumerable: true,
			get: () => this.__data.maxValueInstant,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.maxValueInstant = value;
			},
		});

		Object.defineProperty(this, '_maxValueString', {
			enumerable: true,
			get: () => this.__data._maxValueString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._maxValueString = new Element(value);
			},
		});

		Object.defineProperty(this, 'maxValueString', {
			enumerable: true,
			get: () => this.__data.maxValueString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.maxValueString = value;
			},
		});

		Object.defineProperty(this, '_maxValueUri', {
			enumerable: true,
			get: () => this.__data._maxValueUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._maxValueUri = new Element(value);
			},
		});

		Object.defineProperty(this, 'maxValueUri', {
			enumerable: true,
			get: () => this.__data.maxValueUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.maxValueUri = value;
			},
		});

		Object.defineProperty(this, '_maxValueDate', {
			enumerable: true,
			get: () => this.__data._maxValueDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._maxValueDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'maxValueDate', {
			enumerable: true,
			get: () => this.__data.maxValueDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.maxValueDate = value;
			},
		});

		Object.defineProperty(this, '_maxValueDateTime', {
			enumerable: true,
			get: () => this.__data._maxValueDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._maxValueDateTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'maxValueDateTime', {
			enumerable: true,
			get: () => this.__data.maxValueDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.maxValueDateTime = value;
			},
		});

		Object.defineProperty(this, '_maxValueTime', {
			enumerable: true,
			get: () => this.__data._maxValueTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._maxValueTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'maxValueTime', {
			enumerable: true,
			get: () => this.__data.maxValueTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.maxValueTime = value;
			},
		});

		Object.defineProperty(this, '_maxValueCode', {
			enumerable: true,
			get: () => this.__data._maxValueCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._maxValueCode = new Element(value);
			},
		});

		Object.defineProperty(this, 'maxValueCode', {
			enumerable: true,
			get: () => this.__data.maxValueCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.maxValueCode = value;
			},
		});

		Object.defineProperty(this, '_maxValueOid', {
			enumerable: true,
			get: () => this.__data._maxValueOid,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._maxValueOid = new Element(value);
			},
		});

		Object.defineProperty(this, 'maxValueOid', {
			enumerable: true,
			get: () => this.__data.maxValueOid,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.maxValueOid = value;
			},
		});

		Object.defineProperty(this, '_maxValueId', {
			enumerable: true,
			get: () => this.__data._maxValueId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._maxValueId = new Element(value);
			},
		});

		Object.defineProperty(this, 'maxValueId', {
			enumerable: true,
			get: () => this.__data.maxValueId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.maxValueId = value;
			},
		});

		Object.defineProperty(this, '_maxValueUnsignedInt', {
			enumerable: true,
			get: () => this.__data._maxValueUnsignedInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._maxValueUnsignedInt = new Element(value);
			},
		});

		Object.defineProperty(this, 'maxValueUnsignedInt', {
			enumerable: true,
			get: () => this.__data.maxValueUnsignedInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.maxValueUnsignedInt = value;
			},
		});

		Object.defineProperty(this, '_maxValuePositiveInt', {
			enumerable: true,
			get: () => this.__data._maxValuePositiveInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._maxValuePositiveInt = new Element(value);
			},
		});

		Object.defineProperty(this, 'maxValuePositiveInt', {
			enumerable: true,
			get: () => this.__data.maxValuePositiveInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.maxValuePositiveInt = value;
			},
		});

		Object.defineProperty(this, '_maxValueMarkdown', {
			enumerable: true,
			get: () => this.__data._maxValueMarkdown,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._maxValueMarkdown = new Element(value);
			},
		});

		Object.defineProperty(this, 'maxValueMarkdown', {
			enumerable: true,
			get: () => this.__data.maxValueMarkdown,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.maxValueMarkdown = value;
			},
		});

		Object.defineProperty(this, 'maxValueAnnotation', {
			enumerable: true,
			get: () => this.__data.maxValueAnnotation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Annotation = require('./annotation.js');
				this.__data.maxValueAnnotation = new Annotation(value);
			},
		});

		Object.defineProperty(this, 'maxValueAttachment', {
			enumerable: true,
			get: () => this.__data.maxValueAttachment,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Attachment = require('./attachment.js');
				this.__data.maxValueAttachment = new Attachment(value);
			},
		});

		Object.defineProperty(this, 'maxValueIdentifier', {
			enumerable: true,
			get: () => this.__data.maxValueIdentifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.maxValueIdentifier = new Identifier(value);
			},
		});

		Object.defineProperty(this, 'maxValueCodeableConcept', {
			enumerable: true,
			get: () => this.__data.maxValueCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.maxValueCodeableConcept = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'maxValueCoding', {
			enumerable: true,
			get: () => this.__data.maxValueCoding,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.maxValueCoding = new Coding(value);
			},
		});

		Object.defineProperty(this, 'maxValueQuantity', {
			enumerable: true,
			get: () => this.__data.maxValueQuantity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.maxValueQuantity = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'maxValueRange', {
			enumerable: true,
			get: () => this.__data.maxValueRange,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Range = require('./range.js');
				this.__data.maxValueRange = new Range(value);
			},
		});

		Object.defineProperty(this, 'maxValuePeriod', {
			enumerable: true,
			get: () => this.__data.maxValuePeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.maxValuePeriod = new Period(value);
			},
		});

		Object.defineProperty(this, 'maxValueRatio', {
			enumerable: true,
			get: () => this.__data.maxValueRatio,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Ratio = require('./ratio.js');
				this.__data.maxValueRatio = new Ratio(value);
			},
		});

		Object.defineProperty(this, 'maxValueSampledData', {
			enumerable: true,
			get: () => this.__data.maxValueSampledData,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SampledData = require('./sampleddata.js');
				this.__data.maxValueSampledData = new SampledData(value);
			},
		});

		Object.defineProperty(this, 'maxValueSignature', {
			enumerable: true,
			get: () => this.__data.maxValueSignature,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Signature = require('./signature.js');
				this.__data.maxValueSignature = new Signature(value);
			},
		});

		Object.defineProperty(this, 'maxValueHumanName', {
			enumerable: true,
			get: () => this.__data.maxValueHumanName,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let HumanName = require('./humanname.js');
				this.__data.maxValueHumanName = new HumanName(value);
			},
		});

		Object.defineProperty(this, 'maxValueAddress', {
			enumerable: true,
			get: () => this.__data.maxValueAddress,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Address = require('./address.js');
				this.__data.maxValueAddress = new Address(value);
			},
		});

		Object.defineProperty(this, 'maxValueContactPoint', {
			enumerable: true,
			get: () => this.__data.maxValueContactPoint,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContactPoint = require('./contactpoint.js');
				this.__data.maxValueContactPoint = new ContactPoint(value);
			},
		});

		Object.defineProperty(this, 'maxValueTiming', {
			enumerable: true,
			get: () => this.__data.maxValueTiming,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Timing = require('./timing.js');
				this.__data.maxValueTiming = new Timing(value);
			},
		});

		Object.defineProperty(this, 'maxValueReference', {
			enumerable: true,
			get: () => this.__data.maxValueReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.maxValueReference = new Reference(value);
			},
		});

		Object.defineProperty(this, 'maxValueMeta', {
			enumerable: true,
			get: () => this.__data.maxValueMeta,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Meta = require('./meta.js');
				this.__data.maxValueMeta = new Meta(value);
			},
		});

		Object.defineProperty(this, '_maxLength', {
			enumerable: true,
			get: () => this.__data._maxLength,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._maxLength = new Element(value);
			},
		});

		Object.defineProperty(this, 'maxLength', {
			enumerable: true,
			get: () => this.__data.maxLength,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.maxLength = value;
			},
		});

		Object.defineProperty(this, '_condition', {
			enumerable: true,
			get: () => this.__data._condition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._condition = new Element(value);
			},
		});

		Object.defineProperty(this, 'condition', {
			enumerable: true,
			get: () => this.__data.condition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.condition = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'constraint', {
			enumerable: true,
			get: () => this.__data.constraint,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data.constraint = Array.isArray(value) ? value.map(v => new Element(v)) : [new Element(value)];
			},
		});

		Object.defineProperty(this, '_mustSupport', {
			enumerable: true,
			get: () => this.__data._mustSupport,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._mustSupport = new Element(value);
			},
		});

		Object.defineProperty(this, 'mustSupport', {
			enumerable: true,
			get: () => this.__data.mustSupport,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.mustSupport = value;
			},
		});

		Object.defineProperty(this, '_isModifier', {
			enumerable: true,
			get: () => this.__data._isModifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._isModifier = new Element(value);
			},
		});

		Object.defineProperty(this, 'isModifier', {
			enumerable: true,
			get: () => this.__data.isModifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.isModifier = value;
			},
		});

		Object.defineProperty(this, '_isSummary', {
			enumerable: true,
			get: () => this.__data._isSummary,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._isSummary = new Element(value);
			},
		});

		Object.defineProperty(this, 'isSummary', {
			enumerable: true,
			get: () => this.__data.isSummary,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.isSummary = value;
			},
		});

		Object.defineProperty(this, 'binding', {
			enumerable: true,
			get: () => this.__data.binding,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data.binding = new Element(value);
			},
		});

		Object.defineProperty(this, 'mapping', {
			enumerable: true,
			get: () => this.__data.mapping,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data.mapping = Array.isArray(value) ? value.map(v => new Element(v)) : [new Element(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ElementDefinition',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ElementDefinition';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			_path: this._path && this._path.toJSON(),
			path: this.path,
			_representation: this._representation && this._representation.toJSON(),
			representation: this.representation,
			_name: this._name && this._name.toJSON(),
			name: this.name,
			_label: this._label && this._label.toJSON(),
			label: this.label,
			code: this.code && this.code.map(v => v.toJSON()),
			slicing: this.slicing && this.slicing.toJSON(),
			_short: this._short && this._short.toJSON(),
			short: this.short,
			_definition: this._definition && this._definition.toJSON(),
			definition: this.definition,
			_comments: this._comments && this._comments.toJSON(),
			comments: this.comments,
			_requirements: this._requirements && this._requirements.toJSON(),
			requirements: this.requirements,
			_alias: this._alias && this._alias.toJSON(),
			alias: this.alias,
			_min: this._min && this._min.toJSON(),
			min: this.min,
			_max: this._max && this._max.toJSON(),
			max: this.max,
			base: this.base && this.base.toJSON(),
			type: this.type && this.type.map(v => v.toJSON()),
			_nameReference: this._nameReference && this._nameReference.toJSON(),
			nameReference: this.nameReference,
			_defaultValueBoolean: this._defaultValueBoolean && this._defaultValueBoolean.toJSON(),
			defaultValueBoolean: this.defaultValueBoolean,
			_defaultValueInteger: this._defaultValueInteger && this._defaultValueInteger.toJSON(),
			defaultValueInteger: this.defaultValueInteger,
			_defaultValueDecimal: this._defaultValueDecimal && this._defaultValueDecimal.toJSON(),
			defaultValueDecimal: this.defaultValueDecimal,
			_defaultValueBase64Binary: this._defaultValueBase64Binary && this._defaultValueBase64Binary.toJSON(),
			defaultValueBase64Binary: this.defaultValueBase64Binary,
			_defaultValueInstant: this._defaultValueInstant && this._defaultValueInstant.toJSON(),
			defaultValueInstant: this.defaultValueInstant,
			_defaultValueString: this._defaultValueString && this._defaultValueString.toJSON(),
			defaultValueString: this.defaultValueString,
			_defaultValueUri: this._defaultValueUri && this._defaultValueUri.toJSON(),
			defaultValueUri: this.defaultValueUri,
			_defaultValueDate: this._defaultValueDate && this._defaultValueDate.toJSON(),
			defaultValueDate: this.defaultValueDate,
			_defaultValueDateTime: this._defaultValueDateTime && this._defaultValueDateTime.toJSON(),
			defaultValueDateTime: this.defaultValueDateTime,
			_defaultValueTime: this._defaultValueTime && this._defaultValueTime.toJSON(),
			defaultValueTime: this.defaultValueTime,
			_defaultValueCode: this._defaultValueCode && this._defaultValueCode.toJSON(),
			defaultValueCode: this.defaultValueCode,
			_defaultValueOid: this._defaultValueOid && this._defaultValueOid.toJSON(),
			defaultValueOid: this.defaultValueOid,
			_defaultValueId: this._defaultValueId && this._defaultValueId.toJSON(),
			defaultValueId: this.defaultValueId,
			_defaultValueUnsignedInt: this._defaultValueUnsignedInt && this._defaultValueUnsignedInt.toJSON(),
			defaultValueUnsignedInt: this.defaultValueUnsignedInt,
			_defaultValuePositiveInt: this._defaultValuePositiveInt && this._defaultValuePositiveInt.toJSON(),
			defaultValuePositiveInt: this.defaultValuePositiveInt,
			_defaultValueMarkdown: this._defaultValueMarkdown && this._defaultValueMarkdown.toJSON(),
			defaultValueMarkdown: this.defaultValueMarkdown,
			defaultValueAnnotation: this.defaultValueAnnotation && this.defaultValueAnnotation.toJSON(),
			defaultValueAttachment: this.defaultValueAttachment && this.defaultValueAttachment.toJSON(),
			defaultValueIdentifier: this.defaultValueIdentifier && this.defaultValueIdentifier.toJSON(),
			defaultValueCodeableConcept: this.defaultValueCodeableConcept && this.defaultValueCodeableConcept.toJSON(),
			defaultValueCoding: this.defaultValueCoding && this.defaultValueCoding.toJSON(),
			defaultValueQuantity: this.defaultValueQuantity && this.defaultValueQuantity.toJSON(),
			defaultValueRange: this.defaultValueRange && this.defaultValueRange.toJSON(),
			defaultValuePeriod: this.defaultValuePeriod && this.defaultValuePeriod.toJSON(),
			defaultValueRatio: this.defaultValueRatio && this.defaultValueRatio.toJSON(),
			defaultValueSampledData: this.defaultValueSampledData && this.defaultValueSampledData.toJSON(),
			defaultValueSignature: this.defaultValueSignature && this.defaultValueSignature.toJSON(),
			defaultValueHumanName: this.defaultValueHumanName && this.defaultValueHumanName.toJSON(),
			defaultValueAddress: this.defaultValueAddress && this.defaultValueAddress.toJSON(),
			defaultValueContactPoint: this.defaultValueContactPoint && this.defaultValueContactPoint.toJSON(),
			defaultValueTiming: this.defaultValueTiming && this.defaultValueTiming.toJSON(),
			defaultValueReference: this.defaultValueReference && this.defaultValueReference.toJSON(),
			defaultValueMeta: this.defaultValueMeta && this.defaultValueMeta.toJSON(),
			_meaningWhenMissing: this._meaningWhenMissing && this._meaningWhenMissing.toJSON(),
			meaningWhenMissing: this.meaningWhenMissing,
			_fixedBoolean: this._fixedBoolean && this._fixedBoolean.toJSON(),
			fixedBoolean: this.fixedBoolean,
			_fixedInteger: this._fixedInteger && this._fixedInteger.toJSON(),
			fixedInteger: this.fixedInteger,
			_fixedDecimal: this._fixedDecimal && this._fixedDecimal.toJSON(),
			fixedDecimal: this.fixedDecimal,
			_fixedBase64Binary: this._fixedBase64Binary && this._fixedBase64Binary.toJSON(),
			fixedBase64Binary: this.fixedBase64Binary,
			_fixedInstant: this._fixedInstant && this._fixedInstant.toJSON(),
			fixedInstant: this.fixedInstant,
			_fixedString: this._fixedString && this._fixedString.toJSON(),
			fixedString: this.fixedString,
			_fixedUri: this._fixedUri && this._fixedUri.toJSON(),
			fixedUri: this.fixedUri,
			_fixedDate: this._fixedDate && this._fixedDate.toJSON(),
			fixedDate: this.fixedDate,
			_fixedDateTime: this._fixedDateTime && this._fixedDateTime.toJSON(),
			fixedDateTime: this.fixedDateTime,
			_fixedTime: this._fixedTime && this._fixedTime.toJSON(),
			fixedTime: this.fixedTime,
			_fixedCode: this._fixedCode && this._fixedCode.toJSON(),
			fixedCode: this.fixedCode,
			_fixedOid: this._fixedOid && this._fixedOid.toJSON(),
			fixedOid: this.fixedOid,
			_fixedId: this._fixedId && this._fixedId.toJSON(),
			fixedId: this.fixedId,
			_fixedUnsignedInt: this._fixedUnsignedInt && this._fixedUnsignedInt.toJSON(),
			fixedUnsignedInt: this.fixedUnsignedInt,
			_fixedPositiveInt: this._fixedPositiveInt && this._fixedPositiveInt.toJSON(),
			fixedPositiveInt: this.fixedPositiveInt,
			_fixedMarkdown: this._fixedMarkdown && this._fixedMarkdown.toJSON(),
			fixedMarkdown: this.fixedMarkdown,
			fixedAnnotation: this.fixedAnnotation && this.fixedAnnotation.toJSON(),
			fixedAttachment: this.fixedAttachment && this.fixedAttachment.toJSON(),
			fixedIdentifier: this.fixedIdentifier && this.fixedIdentifier.toJSON(),
			fixedCodeableConcept: this.fixedCodeableConcept && this.fixedCodeableConcept.toJSON(),
			fixedCoding: this.fixedCoding && this.fixedCoding.toJSON(),
			fixedQuantity: this.fixedQuantity && this.fixedQuantity.toJSON(),
			fixedRange: this.fixedRange && this.fixedRange.toJSON(),
			fixedPeriod: this.fixedPeriod && this.fixedPeriod.toJSON(),
			fixedRatio: this.fixedRatio && this.fixedRatio.toJSON(),
			fixedSampledData: this.fixedSampledData && this.fixedSampledData.toJSON(),
			fixedSignature: this.fixedSignature && this.fixedSignature.toJSON(),
			fixedHumanName: this.fixedHumanName && this.fixedHumanName.toJSON(),
			fixedAddress: this.fixedAddress && this.fixedAddress.toJSON(),
			fixedContactPoint: this.fixedContactPoint && this.fixedContactPoint.toJSON(),
			fixedTiming: this.fixedTiming && this.fixedTiming.toJSON(),
			fixedReference: this.fixedReference && this.fixedReference.toJSON(),
			fixedMeta: this.fixedMeta && this.fixedMeta.toJSON(),
			_patternBoolean: this._patternBoolean && this._patternBoolean.toJSON(),
			patternBoolean: this.patternBoolean,
			_patternInteger: this._patternInteger && this._patternInteger.toJSON(),
			patternInteger: this.patternInteger,
			_patternDecimal: this._patternDecimal && this._patternDecimal.toJSON(),
			patternDecimal: this.patternDecimal,
			_patternBase64Binary: this._patternBase64Binary && this._patternBase64Binary.toJSON(),
			patternBase64Binary: this.patternBase64Binary,
			_patternInstant: this._patternInstant && this._patternInstant.toJSON(),
			patternInstant: this.patternInstant,
			_patternString: this._patternString && this._patternString.toJSON(),
			patternString: this.patternString,
			_patternUri: this._patternUri && this._patternUri.toJSON(),
			patternUri: this.patternUri,
			_patternDate: this._patternDate && this._patternDate.toJSON(),
			patternDate: this.patternDate,
			_patternDateTime: this._patternDateTime && this._patternDateTime.toJSON(),
			patternDateTime: this.patternDateTime,
			_patternTime: this._patternTime && this._patternTime.toJSON(),
			patternTime: this.patternTime,
			_patternCode: this._patternCode && this._patternCode.toJSON(),
			patternCode: this.patternCode,
			_patternOid: this._patternOid && this._patternOid.toJSON(),
			patternOid: this.patternOid,
			_patternId: this._patternId && this._patternId.toJSON(),
			patternId: this.patternId,
			_patternUnsignedInt: this._patternUnsignedInt && this._patternUnsignedInt.toJSON(),
			patternUnsignedInt: this.patternUnsignedInt,
			_patternPositiveInt: this._patternPositiveInt && this._patternPositiveInt.toJSON(),
			patternPositiveInt: this.patternPositiveInt,
			_patternMarkdown: this._patternMarkdown && this._patternMarkdown.toJSON(),
			patternMarkdown: this.patternMarkdown,
			patternAnnotation: this.patternAnnotation && this.patternAnnotation.toJSON(),
			patternAttachment: this.patternAttachment && this.patternAttachment.toJSON(),
			patternIdentifier: this.patternIdentifier && this.patternIdentifier.toJSON(),
			patternCodeableConcept: this.patternCodeableConcept && this.patternCodeableConcept.toJSON(),
			patternCoding: this.patternCoding && this.patternCoding.toJSON(),
			patternQuantity: this.patternQuantity && this.patternQuantity.toJSON(),
			patternRange: this.patternRange && this.patternRange.toJSON(),
			patternPeriod: this.patternPeriod && this.patternPeriod.toJSON(),
			patternRatio: this.patternRatio && this.patternRatio.toJSON(),
			patternSampledData: this.patternSampledData && this.patternSampledData.toJSON(),
			patternSignature: this.patternSignature && this.patternSignature.toJSON(),
			patternHumanName: this.patternHumanName && this.patternHumanName.toJSON(),
			patternAddress: this.patternAddress && this.patternAddress.toJSON(),
			patternContactPoint: this.patternContactPoint && this.patternContactPoint.toJSON(),
			patternTiming: this.patternTiming && this.patternTiming.toJSON(),
			patternReference: this.patternReference && this.patternReference.toJSON(),
			patternMeta: this.patternMeta && this.patternMeta.toJSON(),
			_exampleBoolean: this._exampleBoolean && this._exampleBoolean.toJSON(),
			exampleBoolean: this.exampleBoolean,
			_exampleInteger: this._exampleInteger && this._exampleInteger.toJSON(),
			exampleInteger: this.exampleInteger,
			_exampleDecimal: this._exampleDecimal && this._exampleDecimal.toJSON(),
			exampleDecimal: this.exampleDecimal,
			_exampleBase64Binary: this._exampleBase64Binary && this._exampleBase64Binary.toJSON(),
			exampleBase64Binary: this.exampleBase64Binary,
			_exampleInstant: this._exampleInstant && this._exampleInstant.toJSON(),
			exampleInstant: this.exampleInstant,
			_exampleString: this._exampleString && this._exampleString.toJSON(),
			exampleString: this.exampleString,
			_exampleUri: this._exampleUri && this._exampleUri.toJSON(),
			exampleUri: this.exampleUri,
			_exampleDate: this._exampleDate && this._exampleDate.toJSON(),
			exampleDate: this.exampleDate,
			_exampleDateTime: this._exampleDateTime && this._exampleDateTime.toJSON(),
			exampleDateTime: this.exampleDateTime,
			_exampleTime: this._exampleTime && this._exampleTime.toJSON(),
			exampleTime: this.exampleTime,
			_exampleCode: this._exampleCode && this._exampleCode.toJSON(),
			exampleCode: this.exampleCode,
			_exampleOid: this._exampleOid && this._exampleOid.toJSON(),
			exampleOid: this.exampleOid,
			_exampleId: this._exampleId && this._exampleId.toJSON(),
			exampleId: this.exampleId,
			_exampleUnsignedInt: this._exampleUnsignedInt && this._exampleUnsignedInt.toJSON(),
			exampleUnsignedInt: this.exampleUnsignedInt,
			_examplePositiveInt: this._examplePositiveInt && this._examplePositiveInt.toJSON(),
			examplePositiveInt: this.examplePositiveInt,
			_exampleMarkdown: this._exampleMarkdown && this._exampleMarkdown.toJSON(),
			exampleMarkdown: this.exampleMarkdown,
			exampleAnnotation: this.exampleAnnotation && this.exampleAnnotation.toJSON(),
			exampleAttachment: this.exampleAttachment && this.exampleAttachment.toJSON(),
			exampleIdentifier: this.exampleIdentifier && this.exampleIdentifier.toJSON(),
			exampleCodeableConcept: this.exampleCodeableConcept && this.exampleCodeableConcept.toJSON(),
			exampleCoding: this.exampleCoding && this.exampleCoding.toJSON(),
			exampleQuantity: this.exampleQuantity && this.exampleQuantity.toJSON(),
			exampleRange: this.exampleRange && this.exampleRange.toJSON(),
			examplePeriod: this.examplePeriod && this.examplePeriod.toJSON(),
			exampleRatio: this.exampleRatio && this.exampleRatio.toJSON(),
			exampleSampledData: this.exampleSampledData && this.exampleSampledData.toJSON(),
			exampleSignature: this.exampleSignature && this.exampleSignature.toJSON(),
			exampleHumanName: this.exampleHumanName && this.exampleHumanName.toJSON(),
			exampleAddress: this.exampleAddress && this.exampleAddress.toJSON(),
			exampleContactPoint: this.exampleContactPoint && this.exampleContactPoint.toJSON(),
			exampleTiming: this.exampleTiming && this.exampleTiming.toJSON(),
			exampleReference: this.exampleReference && this.exampleReference.toJSON(),
			exampleMeta: this.exampleMeta && this.exampleMeta.toJSON(),
			_minValueBoolean: this._minValueBoolean && this._minValueBoolean.toJSON(),
			minValueBoolean: this.minValueBoolean,
			_minValueInteger: this._minValueInteger && this._minValueInteger.toJSON(),
			minValueInteger: this.minValueInteger,
			_minValueDecimal: this._minValueDecimal && this._minValueDecimal.toJSON(),
			minValueDecimal: this.minValueDecimal,
			_minValueBase64Binary: this._minValueBase64Binary && this._minValueBase64Binary.toJSON(),
			minValueBase64Binary: this.minValueBase64Binary,
			_minValueInstant: this._minValueInstant && this._minValueInstant.toJSON(),
			minValueInstant: this.minValueInstant,
			_minValueString: this._minValueString && this._minValueString.toJSON(),
			minValueString: this.minValueString,
			_minValueUri: this._minValueUri && this._minValueUri.toJSON(),
			minValueUri: this.minValueUri,
			_minValueDate: this._minValueDate && this._minValueDate.toJSON(),
			minValueDate: this.minValueDate,
			_minValueDateTime: this._minValueDateTime && this._minValueDateTime.toJSON(),
			minValueDateTime: this.minValueDateTime,
			_minValueTime: this._minValueTime && this._minValueTime.toJSON(),
			minValueTime: this.minValueTime,
			_minValueCode: this._minValueCode && this._minValueCode.toJSON(),
			minValueCode: this.minValueCode,
			_minValueOid: this._minValueOid && this._minValueOid.toJSON(),
			minValueOid: this.minValueOid,
			_minValueId: this._minValueId && this._minValueId.toJSON(),
			minValueId: this.minValueId,
			_minValueUnsignedInt: this._minValueUnsignedInt && this._minValueUnsignedInt.toJSON(),
			minValueUnsignedInt: this.minValueUnsignedInt,
			_minValuePositiveInt: this._minValuePositiveInt && this._minValuePositiveInt.toJSON(),
			minValuePositiveInt: this.minValuePositiveInt,
			_minValueMarkdown: this._minValueMarkdown && this._minValueMarkdown.toJSON(),
			minValueMarkdown: this.minValueMarkdown,
			minValueAnnotation: this.minValueAnnotation && this.minValueAnnotation.toJSON(),
			minValueAttachment: this.minValueAttachment && this.minValueAttachment.toJSON(),
			minValueIdentifier: this.minValueIdentifier && this.minValueIdentifier.toJSON(),
			minValueCodeableConcept: this.minValueCodeableConcept && this.minValueCodeableConcept.toJSON(),
			minValueCoding: this.minValueCoding && this.minValueCoding.toJSON(),
			minValueQuantity: this.minValueQuantity && this.minValueQuantity.toJSON(),
			minValueRange: this.minValueRange && this.minValueRange.toJSON(),
			minValuePeriod: this.minValuePeriod && this.minValuePeriod.toJSON(),
			minValueRatio: this.minValueRatio && this.minValueRatio.toJSON(),
			minValueSampledData: this.minValueSampledData && this.minValueSampledData.toJSON(),
			minValueSignature: this.minValueSignature && this.minValueSignature.toJSON(),
			minValueHumanName: this.minValueHumanName && this.minValueHumanName.toJSON(),
			minValueAddress: this.minValueAddress && this.minValueAddress.toJSON(),
			minValueContactPoint: this.minValueContactPoint && this.minValueContactPoint.toJSON(),
			minValueTiming: this.minValueTiming && this.minValueTiming.toJSON(),
			minValueReference: this.minValueReference && this.minValueReference.toJSON(),
			minValueMeta: this.minValueMeta && this.minValueMeta.toJSON(),
			_maxValueBoolean: this._maxValueBoolean && this._maxValueBoolean.toJSON(),
			maxValueBoolean: this.maxValueBoolean,
			_maxValueInteger: this._maxValueInteger && this._maxValueInteger.toJSON(),
			maxValueInteger: this.maxValueInteger,
			_maxValueDecimal: this._maxValueDecimal && this._maxValueDecimal.toJSON(),
			maxValueDecimal: this.maxValueDecimal,
			_maxValueBase64Binary: this._maxValueBase64Binary && this._maxValueBase64Binary.toJSON(),
			maxValueBase64Binary: this.maxValueBase64Binary,
			_maxValueInstant: this._maxValueInstant && this._maxValueInstant.toJSON(),
			maxValueInstant: this.maxValueInstant,
			_maxValueString: this._maxValueString && this._maxValueString.toJSON(),
			maxValueString: this.maxValueString,
			_maxValueUri: this._maxValueUri && this._maxValueUri.toJSON(),
			maxValueUri: this.maxValueUri,
			_maxValueDate: this._maxValueDate && this._maxValueDate.toJSON(),
			maxValueDate: this.maxValueDate,
			_maxValueDateTime: this._maxValueDateTime && this._maxValueDateTime.toJSON(),
			maxValueDateTime: this.maxValueDateTime,
			_maxValueTime: this._maxValueTime && this._maxValueTime.toJSON(),
			maxValueTime: this.maxValueTime,
			_maxValueCode: this._maxValueCode && this._maxValueCode.toJSON(),
			maxValueCode: this.maxValueCode,
			_maxValueOid: this._maxValueOid && this._maxValueOid.toJSON(),
			maxValueOid: this.maxValueOid,
			_maxValueId: this._maxValueId && this._maxValueId.toJSON(),
			maxValueId: this.maxValueId,
			_maxValueUnsignedInt: this._maxValueUnsignedInt && this._maxValueUnsignedInt.toJSON(),
			maxValueUnsignedInt: this.maxValueUnsignedInt,
			_maxValuePositiveInt: this._maxValuePositiveInt && this._maxValuePositiveInt.toJSON(),
			maxValuePositiveInt: this.maxValuePositiveInt,
			_maxValueMarkdown: this._maxValueMarkdown && this._maxValueMarkdown.toJSON(),
			maxValueMarkdown: this.maxValueMarkdown,
			maxValueAnnotation: this.maxValueAnnotation && this.maxValueAnnotation.toJSON(),
			maxValueAttachment: this.maxValueAttachment && this.maxValueAttachment.toJSON(),
			maxValueIdentifier: this.maxValueIdentifier && this.maxValueIdentifier.toJSON(),
			maxValueCodeableConcept: this.maxValueCodeableConcept && this.maxValueCodeableConcept.toJSON(),
			maxValueCoding: this.maxValueCoding && this.maxValueCoding.toJSON(),
			maxValueQuantity: this.maxValueQuantity && this.maxValueQuantity.toJSON(),
			maxValueRange: this.maxValueRange && this.maxValueRange.toJSON(),
			maxValuePeriod: this.maxValuePeriod && this.maxValuePeriod.toJSON(),
			maxValueRatio: this.maxValueRatio && this.maxValueRatio.toJSON(),
			maxValueSampledData: this.maxValueSampledData && this.maxValueSampledData.toJSON(),
			maxValueSignature: this.maxValueSignature && this.maxValueSignature.toJSON(),
			maxValueHumanName: this.maxValueHumanName && this.maxValueHumanName.toJSON(),
			maxValueAddress: this.maxValueAddress && this.maxValueAddress.toJSON(),
			maxValueContactPoint: this.maxValueContactPoint && this.maxValueContactPoint.toJSON(),
			maxValueTiming: this.maxValueTiming && this.maxValueTiming.toJSON(),
			maxValueReference: this.maxValueReference && this.maxValueReference.toJSON(),
			maxValueMeta: this.maxValueMeta && this.maxValueMeta.toJSON(),
			_maxLength: this._maxLength && this._maxLength.toJSON(),
			maxLength: this.maxLength,
			_condition: this._condition && this._condition.toJSON(),
			condition: this.condition,
			constraint: this.constraint && this.constraint.map(v => v.toJSON()),
			_mustSupport: this._mustSupport && this._mustSupport.toJSON(),
			mustSupport: this.mustSupport,
			_isModifier: this._isModifier && this._isModifier.toJSON(),
			isModifier: this.isModifier,
			_isSummary: this._isSummary && this._isSummary.toJSON(),
			isSummary: this.isSummary,
			binding: this.binding && this.binding.toJSON(),
			mapping: this.mapping && this.mapping.map(v => v.toJSON()),
		};
	}
};
