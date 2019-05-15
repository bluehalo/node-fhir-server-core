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

		Object.defineProperty(this, '_sliceName', {
			enumerable: true,
			get: () => this.__data._sliceName,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._sliceName = new Element(value);
			},
		});

		Object.defineProperty(this, 'sliceName', {
			enumerable: true,
			get: () => this.__data.sliceName,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.sliceName = value;
			},
		});

		Object.defineProperty(this, '_sliceIsConstraining', {
			enumerable: true,
			get: () => this.__data._sliceIsConstraining,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._sliceIsConstraining = new Element(value);
			},
		});

		Object.defineProperty(this, 'sliceIsConstraining', {
			enumerable: true,
			get: () => this.__data.sliceIsConstraining,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.sliceIsConstraining = value;
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

		Object.defineProperty(this, '_contentReference', {
			enumerable: true,
			get: () => this.__data._contentReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._contentReference = new Element(value);
			},
		});

		Object.defineProperty(this, 'contentReference', {
			enumerable: true,
			get: () => this.__data.contentReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.contentReference = value;
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

		Object.defineProperty(this, '_defaultValueCanonical', {
			enumerable: true,
			get: () => this.__data._defaultValueCanonical,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._defaultValueCanonical = new Element(value);
			},
		});

		Object.defineProperty(this, 'defaultValueCanonical', {
			enumerable: true,
			get: () => this.__data.defaultValueCanonical,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.defaultValueCanonical = value;
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

		Object.defineProperty(this, '_defaultValueUrl', {
			enumerable: true,
			get: () => this.__data._defaultValueUrl,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._defaultValueUrl = new Element(value);
			},
		});

		Object.defineProperty(this, 'defaultValueUrl', {
			enumerable: true,
			get: () => this.__data.defaultValueUrl,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.defaultValueUrl = value;
			},
		});

		Object.defineProperty(this, '_defaultValueUuid', {
			enumerable: true,
			get: () => this.__data._defaultValueUuid,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._defaultValueUuid = new Element(value);
			},
		});

		Object.defineProperty(this, 'defaultValueUuid', {
			enumerable: true,
			get: () => this.__data.defaultValueUuid,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.defaultValueUuid = value;
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

		Object.defineProperty(this, 'defaultValueAge', {
			enumerable: true,
			get: () => this.__data.defaultValueAge,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Age = require('./age.js');
				this.__data.defaultValueAge = new Age(value);
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

		Object.defineProperty(this, 'defaultValueCount', {
			enumerable: true,
			get: () => this.__data.defaultValueCount,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Count = require('./count.js');
				this.__data.defaultValueCount = new Count(value);
			},
		});

		Object.defineProperty(this, 'defaultValueDistance', {
			enumerable: true,
			get: () => this.__data.defaultValueDistance,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Distance = require('./distance.js');
				this.__data.defaultValueDistance = new Distance(value);
			},
		});

		Object.defineProperty(this, 'defaultValueDuration', {
			enumerable: true,
			get: () => this.__data.defaultValueDuration,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Duration = require('./duration.js');
				this.__data.defaultValueDuration = new Duration(value);
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

		Object.defineProperty(this, 'defaultValueMoney', {
			enumerable: true,
			get: () => this.__data.defaultValueMoney,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Money = require('./money.js');
				this.__data.defaultValueMoney = new Money(value);
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

		Object.defineProperty(this, 'defaultValueContactDetail', {
			enumerable: true,
			get: () => this.__data.defaultValueContactDetail,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContactDetail = require('./contactdetail.js');
				this.__data.defaultValueContactDetail = new ContactDetail(value);
			},
		});

		Object.defineProperty(this, 'defaultValueContributor', {
			enumerable: true,
			get: () => this.__data.defaultValueContributor,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Contributor = require('./contributor.js');
				this.__data.defaultValueContributor = new Contributor(value);
			},
		});

		Object.defineProperty(this, 'defaultValueDataRequirement', {
			enumerable: true,
			get: () => this.__data.defaultValueDataRequirement,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let DataRequirement = require('./datarequirement.js');
				this.__data.defaultValueDataRequirement = new DataRequirement(value);
			},
		});

		Object.defineProperty(this, 'defaultValueExpression', {
			enumerable: true,
			get: () => this.__data.defaultValueExpression,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Expression = require('./expression.js');
				this.__data.defaultValueExpression = new Expression(value);
			},
		});

		Object.defineProperty(this, 'defaultValueParameterDefinition', {
			enumerable: true,
			get: () => this.__data.defaultValueParameterDefinition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ParameterDefinition = require('./parameterdefinition.js');
				this.__data.defaultValueParameterDefinition = new ParameterDefinition(value);
			},
		});

		Object.defineProperty(this, 'defaultValueRelatedArtifact', {
			enumerable: true,
			get: () => this.__data.defaultValueRelatedArtifact,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let RelatedArtifact = require('./relatedartifact.js');
				this.__data.defaultValueRelatedArtifact = new RelatedArtifact(value);
			},
		});

		Object.defineProperty(this, 'defaultValueTriggerDefinition', {
			enumerable: true,
			get: () => this.__data.defaultValueTriggerDefinition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let TriggerDefinition = require('./triggerdefinition.js');
				this.__data.defaultValueTriggerDefinition = new TriggerDefinition(value);
			},
		});

		Object.defineProperty(this, 'defaultValueUsageContext', {
			enumerable: true,
			get: () => this.__data.defaultValueUsageContext,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let UsageContext = require('./usagecontext.js');
				this.__data.defaultValueUsageContext = new UsageContext(value);
			},
		});

		Object.defineProperty(this, 'defaultValueDosage', {
			enumerable: true,
			get: () => this.__data.defaultValueDosage,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Dosage = require('./dosage.js');
				this.__data.defaultValueDosage = new Dosage(value);
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

		Object.defineProperty(this, '_orderMeaning', {
			enumerable: true,
			get: () => this.__data._orderMeaning,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._orderMeaning = new Element(value);
			},
		});

		Object.defineProperty(this, 'orderMeaning', {
			enumerable: true,
			get: () => this.__data.orderMeaning,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.orderMeaning = value;
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

		Object.defineProperty(this, '_fixedCanonical', {
			enumerable: true,
			get: () => this.__data._fixedCanonical,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._fixedCanonical = new Element(value);
			},
		});

		Object.defineProperty(this, 'fixedCanonical', {
			enumerable: true,
			get: () => this.__data.fixedCanonical,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.fixedCanonical = value;
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

		Object.defineProperty(this, '_fixedUrl', {
			enumerable: true,
			get: () => this.__data._fixedUrl,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._fixedUrl = new Element(value);
			},
		});

		Object.defineProperty(this, 'fixedUrl', {
			enumerable: true,
			get: () => this.__data.fixedUrl,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.fixedUrl = value;
			},
		});

		Object.defineProperty(this, '_fixedUuid', {
			enumerable: true,
			get: () => this.__data._fixedUuid,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._fixedUuid = new Element(value);
			},
		});

		Object.defineProperty(this, 'fixedUuid', {
			enumerable: true,
			get: () => this.__data.fixedUuid,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.fixedUuid = value;
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

		Object.defineProperty(this, 'fixedAge', {
			enumerable: true,
			get: () => this.__data.fixedAge,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Age = require('./age.js');
				this.__data.fixedAge = new Age(value);
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

		Object.defineProperty(this, 'fixedCount', {
			enumerable: true,
			get: () => this.__data.fixedCount,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Count = require('./count.js');
				this.__data.fixedCount = new Count(value);
			},
		});

		Object.defineProperty(this, 'fixedDistance', {
			enumerable: true,
			get: () => this.__data.fixedDistance,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Distance = require('./distance.js');
				this.__data.fixedDistance = new Distance(value);
			},
		});

		Object.defineProperty(this, 'fixedDuration', {
			enumerable: true,
			get: () => this.__data.fixedDuration,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Duration = require('./duration.js');
				this.__data.fixedDuration = new Duration(value);
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

		Object.defineProperty(this, 'fixedMoney', {
			enumerable: true,
			get: () => this.__data.fixedMoney,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Money = require('./money.js');
				this.__data.fixedMoney = new Money(value);
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

		Object.defineProperty(this, 'fixedContactDetail', {
			enumerable: true,
			get: () => this.__data.fixedContactDetail,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContactDetail = require('./contactdetail.js');
				this.__data.fixedContactDetail = new ContactDetail(value);
			},
		});

		Object.defineProperty(this, 'fixedContributor', {
			enumerable: true,
			get: () => this.__data.fixedContributor,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Contributor = require('./contributor.js');
				this.__data.fixedContributor = new Contributor(value);
			},
		});

		Object.defineProperty(this, 'fixedDataRequirement', {
			enumerable: true,
			get: () => this.__data.fixedDataRequirement,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let DataRequirement = require('./datarequirement.js');
				this.__data.fixedDataRequirement = new DataRequirement(value);
			},
		});

		Object.defineProperty(this, 'fixedExpression', {
			enumerable: true,
			get: () => this.__data.fixedExpression,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Expression = require('./expression.js');
				this.__data.fixedExpression = new Expression(value);
			},
		});

		Object.defineProperty(this, 'fixedParameterDefinition', {
			enumerable: true,
			get: () => this.__data.fixedParameterDefinition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ParameterDefinition = require('./parameterdefinition.js');
				this.__data.fixedParameterDefinition = new ParameterDefinition(value);
			},
		});

		Object.defineProperty(this, 'fixedRelatedArtifact', {
			enumerable: true,
			get: () => this.__data.fixedRelatedArtifact,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let RelatedArtifact = require('./relatedartifact.js');
				this.__data.fixedRelatedArtifact = new RelatedArtifact(value);
			},
		});

		Object.defineProperty(this, 'fixedTriggerDefinition', {
			enumerable: true,
			get: () => this.__data.fixedTriggerDefinition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let TriggerDefinition = require('./triggerdefinition.js');
				this.__data.fixedTriggerDefinition = new TriggerDefinition(value);
			},
		});

		Object.defineProperty(this, 'fixedUsageContext', {
			enumerable: true,
			get: () => this.__data.fixedUsageContext,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let UsageContext = require('./usagecontext.js');
				this.__data.fixedUsageContext = new UsageContext(value);
			},
		});

		Object.defineProperty(this, 'fixedDosage', {
			enumerable: true,
			get: () => this.__data.fixedDosage,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Dosage = require('./dosage.js');
				this.__data.fixedDosage = new Dosage(value);
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

		Object.defineProperty(this, '_patternCanonical', {
			enumerable: true,
			get: () => this.__data._patternCanonical,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._patternCanonical = new Element(value);
			},
		});

		Object.defineProperty(this, 'patternCanonical', {
			enumerable: true,
			get: () => this.__data.patternCanonical,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.patternCanonical = value;
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

		Object.defineProperty(this, '_patternUrl', {
			enumerable: true,
			get: () => this.__data._patternUrl,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._patternUrl = new Element(value);
			},
		});

		Object.defineProperty(this, 'patternUrl', {
			enumerable: true,
			get: () => this.__data.patternUrl,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.patternUrl = value;
			},
		});

		Object.defineProperty(this, '_patternUuid', {
			enumerable: true,
			get: () => this.__data._patternUuid,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._patternUuid = new Element(value);
			},
		});

		Object.defineProperty(this, 'patternUuid', {
			enumerable: true,
			get: () => this.__data.patternUuid,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.patternUuid = value;
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

		Object.defineProperty(this, 'patternAge', {
			enumerable: true,
			get: () => this.__data.patternAge,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Age = require('./age.js');
				this.__data.patternAge = new Age(value);
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

		Object.defineProperty(this, 'patternCount', {
			enumerable: true,
			get: () => this.__data.patternCount,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Count = require('./count.js');
				this.__data.patternCount = new Count(value);
			},
		});

		Object.defineProperty(this, 'patternDistance', {
			enumerable: true,
			get: () => this.__data.patternDistance,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Distance = require('./distance.js');
				this.__data.patternDistance = new Distance(value);
			},
		});

		Object.defineProperty(this, 'patternDuration', {
			enumerable: true,
			get: () => this.__data.patternDuration,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Duration = require('./duration.js');
				this.__data.patternDuration = new Duration(value);
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

		Object.defineProperty(this, 'patternMoney', {
			enumerable: true,
			get: () => this.__data.patternMoney,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Money = require('./money.js');
				this.__data.patternMoney = new Money(value);
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

		Object.defineProperty(this, 'patternContactDetail', {
			enumerable: true,
			get: () => this.__data.patternContactDetail,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContactDetail = require('./contactdetail.js');
				this.__data.patternContactDetail = new ContactDetail(value);
			},
		});

		Object.defineProperty(this, 'patternContributor', {
			enumerable: true,
			get: () => this.__data.patternContributor,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Contributor = require('./contributor.js');
				this.__data.patternContributor = new Contributor(value);
			},
		});

		Object.defineProperty(this, 'patternDataRequirement', {
			enumerable: true,
			get: () => this.__data.patternDataRequirement,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let DataRequirement = require('./datarequirement.js');
				this.__data.patternDataRequirement = new DataRequirement(value);
			},
		});

		Object.defineProperty(this, 'patternExpression', {
			enumerable: true,
			get: () => this.__data.patternExpression,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Expression = require('./expression.js');
				this.__data.patternExpression = new Expression(value);
			},
		});

		Object.defineProperty(this, 'patternParameterDefinition', {
			enumerable: true,
			get: () => this.__data.patternParameterDefinition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ParameterDefinition = require('./parameterdefinition.js');
				this.__data.patternParameterDefinition = new ParameterDefinition(value);
			},
		});

		Object.defineProperty(this, 'patternRelatedArtifact', {
			enumerable: true,
			get: () => this.__data.patternRelatedArtifact,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let RelatedArtifact = require('./relatedartifact.js');
				this.__data.patternRelatedArtifact = new RelatedArtifact(value);
			},
		});

		Object.defineProperty(this, 'patternTriggerDefinition', {
			enumerable: true,
			get: () => this.__data.patternTriggerDefinition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let TriggerDefinition = require('./triggerdefinition.js');
				this.__data.patternTriggerDefinition = new TriggerDefinition(value);
			},
		});

		Object.defineProperty(this, 'patternUsageContext', {
			enumerable: true,
			get: () => this.__data.patternUsageContext,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let UsageContext = require('./usagecontext.js');
				this.__data.patternUsageContext = new UsageContext(value);
			},
		});

		Object.defineProperty(this, 'patternDosage', {
			enumerable: true,
			get: () => this.__data.patternDosage,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Dosage = require('./dosage.js');
				this.__data.patternDosage = new Dosage(value);
			},
		});

		Object.defineProperty(this, 'example', {
			enumerable: true,
			get: () => this.__data.example,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data.example = Array.isArray(value) ? value.map(v => new Element(v)) : [new Element(value)];
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

		Object.defineProperty(this, '_isModifierReason', {
			enumerable: true,
			get: () => this.__data._isModifierReason,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._isModifierReason = new Element(value);
			},
		});

		Object.defineProperty(this, 'isModifierReason', {
			enumerable: true,
			get: () => this.__data.isModifierReason,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.isModifierReason = value;
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
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_path: this._path && this._path.toJSON(),
			path: this.path,
			_representation: this._representation && this._representation.toJSON(),
			representation: this.representation,
			_sliceName: this._sliceName && this._sliceName.toJSON(),
			sliceName: this.sliceName,
			_sliceIsConstraining: this._sliceIsConstraining && this._sliceIsConstraining.toJSON(),
			sliceIsConstraining: this.sliceIsConstraining,
			_label: this._label && this._label.toJSON(),
			label: this.label,
			code: this.code && this.code.map(v => v.toJSON()),
			slicing: this.slicing && this.slicing.toJSON(),
			_short: this._short && this._short.toJSON(),
			short: this.short,
			_definition: this._definition && this._definition.toJSON(),
			definition: this.definition,
			_comment: this._comment && this._comment.toJSON(),
			comment: this.comment,
			_requirements: this._requirements && this._requirements.toJSON(),
			requirements: this.requirements,
			_alias: this._alias && this._alias.toJSON(),
			alias: this.alias,
			_min: this._min && this._min.toJSON(),
			min: this.min,
			_max: this._max && this._max.toJSON(),
			max: this.max,
			base: this.base && this.base.toJSON(),
			_contentReference: this._contentReference && this._contentReference.toJSON(),
			contentReference: this.contentReference,
			type: this.type && this.type.map(v => v.toJSON()),
			_defaultValueBase64Binary: this._defaultValueBase64Binary && this._defaultValueBase64Binary.toJSON(),
			defaultValueBase64Binary: this.defaultValueBase64Binary,
			_defaultValueBoolean: this._defaultValueBoolean && this._defaultValueBoolean.toJSON(),
			defaultValueBoolean: this.defaultValueBoolean,
			_defaultValueCanonical: this._defaultValueCanonical && this._defaultValueCanonical.toJSON(),
			defaultValueCanonical: this.defaultValueCanonical,
			_defaultValueCode: this._defaultValueCode && this._defaultValueCode.toJSON(),
			defaultValueCode: this.defaultValueCode,
			_defaultValueDate: this._defaultValueDate && this._defaultValueDate.toJSON(),
			defaultValueDate: this.defaultValueDate,
			_defaultValueDateTime: this._defaultValueDateTime && this._defaultValueDateTime.toJSON(),
			defaultValueDateTime: this.defaultValueDateTime,
			_defaultValueDecimal: this._defaultValueDecimal && this._defaultValueDecimal.toJSON(),
			defaultValueDecimal: this.defaultValueDecimal,
			_defaultValueId: this._defaultValueId && this._defaultValueId.toJSON(),
			defaultValueId: this.defaultValueId,
			_defaultValueInstant: this._defaultValueInstant && this._defaultValueInstant.toJSON(),
			defaultValueInstant: this.defaultValueInstant,
			_defaultValueInteger: this._defaultValueInteger && this._defaultValueInteger.toJSON(),
			defaultValueInteger: this.defaultValueInteger,
			_defaultValueMarkdown: this._defaultValueMarkdown && this._defaultValueMarkdown.toJSON(),
			defaultValueMarkdown: this.defaultValueMarkdown,
			_defaultValueOid: this._defaultValueOid && this._defaultValueOid.toJSON(),
			defaultValueOid: this.defaultValueOid,
			_defaultValuePositiveInt: this._defaultValuePositiveInt && this._defaultValuePositiveInt.toJSON(),
			defaultValuePositiveInt: this.defaultValuePositiveInt,
			_defaultValueString: this._defaultValueString && this._defaultValueString.toJSON(),
			defaultValueString: this.defaultValueString,
			_defaultValueTime: this._defaultValueTime && this._defaultValueTime.toJSON(),
			defaultValueTime: this.defaultValueTime,
			_defaultValueUnsignedInt: this._defaultValueUnsignedInt && this._defaultValueUnsignedInt.toJSON(),
			defaultValueUnsignedInt: this.defaultValueUnsignedInt,
			_defaultValueUri: this._defaultValueUri && this._defaultValueUri.toJSON(),
			defaultValueUri: this.defaultValueUri,
			_defaultValueUrl: this._defaultValueUrl && this._defaultValueUrl.toJSON(),
			defaultValueUrl: this.defaultValueUrl,
			_defaultValueUuid: this._defaultValueUuid && this._defaultValueUuid.toJSON(),
			defaultValueUuid: this.defaultValueUuid,
			defaultValueAddress: this.defaultValueAddress && this.defaultValueAddress.toJSON(),
			defaultValueAge: this.defaultValueAge && this.defaultValueAge.toJSON(),
			defaultValueAnnotation: this.defaultValueAnnotation && this.defaultValueAnnotation.toJSON(),
			defaultValueAttachment: this.defaultValueAttachment && this.defaultValueAttachment.toJSON(),
			defaultValueCodeableConcept: this.defaultValueCodeableConcept && this.defaultValueCodeableConcept.toJSON(),
			defaultValueCoding: this.defaultValueCoding && this.defaultValueCoding.toJSON(),
			defaultValueContactPoint: this.defaultValueContactPoint && this.defaultValueContactPoint.toJSON(),
			defaultValueCount: this.defaultValueCount && this.defaultValueCount.toJSON(),
			defaultValueDistance: this.defaultValueDistance && this.defaultValueDistance.toJSON(),
			defaultValueDuration: this.defaultValueDuration && this.defaultValueDuration.toJSON(),
			defaultValueHumanName: this.defaultValueHumanName && this.defaultValueHumanName.toJSON(),
			defaultValueIdentifier: this.defaultValueIdentifier && this.defaultValueIdentifier.toJSON(),
			defaultValueMoney: this.defaultValueMoney && this.defaultValueMoney.toJSON(),
			defaultValuePeriod: this.defaultValuePeriod && this.defaultValuePeriod.toJSON(),
			defaultValueQuantity: this.defaultValueQuantity && this.defaultValueQuantity.toJSON(),
			defaultValueRange: this.defaultValueRange && this.defaultValueRange.toJSON(),
			defaultValueRatio: this.defaultValueRatio && this.defaultValueRatio.toJSON(),
			defaultValueReference: this.defaultValueReference && this.defaultValueReference.toJSON(),
			defaultValueSampledData: this.defaultValueSampledData && this.defaultValueSampledData.toJSON(),
			defaultValueSignature: this.defaultValueSignature && this.defaultValueSignature.toJSON(),
			defaultValueTiming: this.defaultValueTiming && this.defaultValueTiming.toJSON(),
			defaultValueContactDetail: this.defaultValueContactDetail && this.defaultValueContactDetail.toJSON(),
			defaultValueContributor: this.defaultValueContributor && this.defaultValueContributor.toJSON(),
			defaultValueDataRequirement: this.defaultValueDataRequirement && this.defaultValueDataRequirement.toJSON(),
			defaultValueExpression: this.defaultValueExpression && this.defaultValueExpression.toJSON(),
			defaultValueParameterDefinition:
				this.defaultValueParameterDefinition && this.defaultValueParameterDefinition.toJSON(),
			defaultValueRelatedArtifact: this.defaultValueRelatedArtifact && this.defaultValueRelatedArtifact.toJSON(),
			defaultValueTriggerDefinition: this.defaultValueTriggerDefinition && this.defaultValueTriggerDefinition.toJSON(),
			defaultValueUsageContext: this.defaultValueUsageContext && this.defaultValueUsageContext.toJSON(),
			defaultValueDosage: this.defaultValueDosage && this.defaultValueDosage.toJSON(),
			_meaningWhenMissing: this._meaningWhenMissing && this._meaningWhenMissing.toJSON(),
			meaningWhenMissing: this.meaningWhenMissing,
			_orderMeaning: this._orderMeaning && this._orderMeaning.toJSON(),
			orderMeaning: this.orderMeaning,
			_fixedBase64Binary: this._fixedBase64Binary && this._fixedBase64Binary.toJSON(),
			fixedBase64Binary: this.fixedBase64Binary,
			_fixedBoolean: this._fixedBoolean && this._fixedBoolean.toJSON(),
			fixedBoolean: this.fixedBoolean,
			_fixedCanonical: this._fixedCanonical && this._fixedCanonical.toJSON(),
			fixedCanonical: this.fixedCanonical,
			_fixedCode: this._fixedCode && this._fixedCode.toJSON(),
			fixedCode: this.fixedCode,
			_fixedDate: this._fixedDate && this._fixedDate.toJSON(),
			fixedDate: this.fixedDate,
			_fixedDateTime: this._fixedDateTime && this._fixedDateTime.toJSON(),
			fixedDateTime: this.fixedDateTime,
			_fixedDecimal: this._fixedDecimal && this._fixedDecimal.toJSON(),
			fixedDecimal: this.fixedDecimal,
			_fixedId: this._fixedId && this._fixedId.toJSON(),
			fixedId: this.fixedId,
			_fixedInstant: this._fixedInstant && this._fixedInstant.toJSON(),
			fixedInstant: this.fixedInstant,
			_fixedInteger: this._fixedInteger && this._fixedInteger.toJSON(),
			fixedInteger: this.fixedInteger,
			_fixedMarkdown: this._fixedMarkdown && this._fixedMarkdown.toJSON(),
			fixedMarkdown: this.fixedMarkdown,
			_fixedOid: this._fixedOid && this._fixedOid.toJSON(),
			fixedOid: this.fixedOid,
			_fixedPositiveInt: this._fixedPositiveInt && this._fixedPositiveInt.toJSON(),
			fixedPositiveInt: this.fixedPositiveInt,
			_fixedString: this._fixedString && this._fixedString.toJSON(),
			fixedString: this.fixedString,
			_fixedTime: this._fixedTime && this._fixedTime.toJSON(),
			fixedTime: this.fixedTime,
			_fixedUnsignedInt: this._fixedUnsignedInt && this._fixedUnsignedInt.toJSON(),
			fixedUnsignedInt: this.fixedUnsignedInt,
			_fixedUri: this._fixedUri && this._fixedUri.toJSON(),
			fixedUri: this.fixedUri,
			_fixedUrl: this._fixedUrl && this._fixedUrl.toJSON(),
			fixedUrl: this.fixedUrl,
			_fixedUuid: this._fixedUuid && this._fixedUuid.toJSON(),
			fixedUuid: this.fixedUuid,
			fixedAddress: this.fixedAddress && this.fixedAddress.toJSON(),
			fixedAge: this.fixedAge && this.fixedAge.toJSON(),
			fixedAnnotation: this.fixedAnnotation && this.fixedAnnotation.toJSON(),
			fixedAttachment: this.fixedAttachment && this.fixedAttachment.toJSON(),
			fixedCodeableConcept: this.fixedCodeableConcept && this.fixedCodeableConcept.toJSON(),
			fixedCoding: this.fixedCoding && this.fixedCoding.toJSON(),
			fixedContactPoint: this.fixedContactPoint && this.fixedContactPoint.toJSON(),
			fixedCount: this.fixedCount && this.fixedCount.toJSON(),
			fixedDistance: this.fixedDistance && this.fixedDistance.toJSON(),
			fixedDuration: this.fixedDuration && this.fixedDuration.toJSON(),
			fixedHumanName: this.fixedHumanName && this.fixedHumanName.toJSON(),
			fixedIdentifier: this.fixedIdentifier && this.fixedIdentifier.toJSON(),
			fixedMoney: this.fixedMoney && this.fixedMoney.toJSON(),
			fixedPeriod: this.fixedPeriod && this.fixedPeriod.toJSON(),
			fixedQuantity: this.fixedQuantity && this.fixedQuantity.toJSON(),
			fixedRange: this.fixedRange && this.fixedRange.toJSON(),
			fixedRatio: this.fixedRatio && this.fixedRatio.toJSON(),
			fixedReference: this.fixedReference && this.fixedReference.toJSON(),
			fixedSampledData: this.fixedSampledData && this.fixedSampledData.toJSON(),
			fixedSignature: this.fixedSignature && this.fixedSignature.toJSON(),
			fixedTiming: this.fixedTiming && this.fixedTiming.toJSON(),
			fixedContactDetail: this.fixedContactDetail && this.fixedContactDetail.toJSON(),
			fixedContributor: this.fixedContributor && this.fixedContributor.toJSON(),
			fixedDataRequirement: this.fixedDataRequirement && this.fixedDataRequirement.toJSON(),
			fixedExpression: this.fixedExpression && this.fixedExpression.toJSON(),
			fixedParameterDefinition: this.fixedParameterDefinition && this.fixedParameterDefinition.toJSON(),
			fixedRelatedArtifact: this.fixedRelatedArtifact && this.fixedRelatedArtifact.toJSON(),
			fixedTriggerDefinition: this.fixedTriggerDefinition && this.fixedTriggerDefinition.toJSON(),
			fixedUsageContext: this.fixedUsageContext && this.fixedUsageContext.toJSON(),
			fixedDosage: this.fixedDosage && this.fixedDosage.toJSON(),
			_patternBase64Binary: this._patternBase64Binary && this._patternBase64Binary.toJSON(),
			patternBase64Binary: this.patternBase64Binary,
			_patternBoolean: this._patternBoolean && this._patternBoolean.toJSON(),
			patternBoolean: this.patternBoolean,
			_patternCanonical: this._patternCanonical && this._patternCanonical.toJSON(),
			patternCanonical: this.patternCanonical,
			_patternCode: this._patternCode && this._patternCode.toJSON(),
			patternCode: this.patternCode,
			_patternDate: this._patternDate && this._patternDate.toJSON(),
			patternDate: this.patternDate,
			_patternDateTime: this._patternDateTime && this._patternDateTime.toJSON(),
			patternDateTime: this.patternDateTime,
			_patternDecimal: this._patternDecimal && this._patternDecimal.toJSON(),
			patternDecimal: this.patternDecimal,
			_patternId: this._patternId && this._patternId.toJSON(),
			patternId: this.patternId,
			_patternInstant: this._patternInstant && this._patternInstant.toJSON(),
			patternInstant: this.patternInstant,
			_patternInteger: this._patternInteger && this._patternInteger.toJSON(),
			patternInteger: this.patternInteger,
			_patternMarkdown: this._patternMarkdown && this._patternMarkdown.toJSON(),
			patternMarkdown: this.patternMarkdown,
			_patternOid: this._patternOid && this._patternOid.toJSON(),
			patternOid: this.patternOid,
			_patternPositiveInt: this._patternPositiveInt && this._patternPositiveInt.toJSON(),
			patternPositiveInt: this.patternPositiveInt,
			_patternString: this._patternString && this._patternString.toJSON(),
			patternString: this.patternString,
			_patternTime: this._patternTime && this._patternTime.toJSON(),
			patternTime: this.patternTime,
			_patternUnsignedInt: this._patternUnsignedInt && this._patternUnsignedInt.toJSON(),
			patternUnsignedInt: this.patternUnsignedInt,
			_patternUri: this._patternUri && this._patternUri.toJSON(),
			patternUri: this.patternUri,
			_patternUrl: this._patternUrl && this._patternUrl.toJSON(),
			patternUrl: this.patternUrl,
			_patternUuid: this._patternUuid && this._patternUuid.toJSON(),
			patternUuid: this.patternUuid,
			patternAddress: this.patternAddress && this.patternAddress.toJSON(),
			patternAge: this.patternAge && this.patternAge.toJSON(),
			patternAnnotation: this.patternAnnotation && this.patternAnnotation.toJSON(),
			patternAttachment: this.patternAttachment && this.patternAttachment.toJSON(),
			patternCodeableConcept: this.patternCodeableConcept && this.patternCodeableConcept.toJSON(),
			patternCoding: this.patternCoding && this.patternCoding.toJSON(),
			patternContactPoint: this.patternContactPoint && this.patternContactPoint.toJSON(),
			patternCount: this.patternCount && this.patternCount.toJSON(),
			patternDistance: this.patternDistance && this.patternDistance.toJSON(),
			patternDuration: this.patternDuration && this.patternDuration.toJSON(),
			patternHumanName: this.patternHumanName && this.patternHumanName.toJSON(),
			patternIdentifier: this.patternIdentifier && this.patternIdentifier.toJSON(),
			patternMoney: this.patternMoney && this.patternMoney.toJSON(),
			patternPeriod: this.patternPeriod && this.patternPeriod.toJSON(),
			patternQuantity: this.patternQuantity && this.patternQuantity.toJSON(),
			patternRange: this.patternRange && this.patternRange.toJSON(),
			patternRatio: this.patternRatio && this.patternRatio.toJSON(),
			patternReference: this.patternReference && this.patternReference.toJSON(),
			patternSampledData: this.patternSampledData && this.patternSampledData.toJSON(),
			patternSignature: this.patternSignature && this.patternSignature.toJSON(),
			patternTiming: this.patternTiming && this.patternTiming.toJSON(),
			patternContactDetail: this.patternContactDetail && this.patternContactDetail.toJSON(),
			patternContributor: this.patternContributor && this.patternContributor.toJSON(),
			patternDataRequirement: this.patternDataRequirement && this.patternDataRequirement.toJSON(),
			patternExpression: this.patternExpression && this.patternExpression.toJSON(),
			patternParameterDefinition: this.patternParameterDefinition && this.patternParameterDefinition.toJSON(),
			patternRelatedArtifact: this.patternRelatedArtifact && this.patternRelatedArtifact.toJSON(),
			patternTriggerDefinition: this.patternTriggerDefinition && this.patternTriggerDefinition.toJSON(),
			patternUsageContext: this.patternUsageContext && this.patternUsageContext.toJSON(),
			patternDosage: this.patternDosage && this.patternDosage.toJSON(),
			example: this.example && this.example.map(v => v.toJSON()),
			_minValueDate: this._minValueDate && this._minValueDate.toJSON(),
			minValueDate: this.minValueDate,
			_minValueDateTime: this._minValueDateTime && this._minValueDateTime.toJSON(),
			minValueDateTime: this.minValueDateTime,
			_minValueInstant: this._minValueInstant && this._minValueInstant.toJSON(),
			minValueInstant: this.minValueInstant,
			_minValueTime: this._minValueTime && this._minValueTime.toJSON(),
			minValueTime: this.minValueTime,
			_minValueDecimal: this._minValueDecimal && this._minValueDecimal.toJSON(),
			minValueDecimal: this.minValueDecimal,
			_minValueInteger: this._minValueInteger && this._minValueInteger.toJSON(),
			minValueInteger: this.minValueInteger,
			_minValuePositiveInt: this._minValuePositiveInt && this._minValuePositiveInt.toJSON(),
			minValuePositiveInt: this.minValuePositiveInt,
			_minValueUnsignedInt: this._minValueUnsignedInt && this._minValueUnsignedInt.toJSON(),
			minValueUnsignedInt: this.minValueUnsignedInt,
			minValueQuantity: this.minValueQuantity && this.minValueQuantity.toJSON(),
			_maxValueDate: this._maxValueDate && this._maxValueDate.toJSON(),
			maxValueDate: this.maxValueDate,
			_maxValueDateTime: this._maxValueDateTime && this._maxValueDateTime.toJSON(),
			maxValueDateTime: this.maxValueDateTime,
			_maxValueInstant: this._maxValueInstant && this._maxValueInstant.toJSON(),
			maxValueInstant: this.maxValueInstant,
			_maxValueTime: this._maxValueTime && this._maxValueTime.toJSON(),
			maxValueTime: this.maxValueTime,
			_maxValueDecimal: this._maxValueDecimal && this._maxValueDecimal.toJSON(),
			maxValueDecimal: this.maxValueDecimal,
			_maxValueInteger: this._maxValueInteger && this._maxValueInteger.toJSON(),
			maxValueInteger: this.maxValueInteger,
			_maxValuePositiveInt: this._maxValuePositiveInt && this._maxValuePositiveInt.toJSON(),
			maxValuePositiveInt: this.maxValuePositiveInt,
			_maxValueUnsignedInt: this._maxValueUnsignedInt && this._maxValueUnsignedInt.toJSON(),
			maxValueUnsignedInt: this.maxValueUnsignedInt,
			maxValueQuantity: this.maxValueQuantity && this.maxValueQuantity.toJSON(),
			_maxLength: this._maxLength && this._maxLength.toJSON(),
			maxLength: this.maxLength,
			_condition: this._condition && this._condition.toJSON(),
			condition: this.condition,
			constraint: this.constraint && this.constraint.map(v => v.toJSON()),
			_mustSupport: this._mustSupport && this._mustSupport.toJSON(),
			mustSupport: this.mustSupport,
			_isModifier: this._isModifier && this._isModifier.toJSON(),
			isModifier: this.isModifier,
			_isModifierReason: this._isModifierReason && this._isModifierReason.toJSON(),
			isModifierReason: this.isModifierReason,
			_isSummary: this._isSummary && this._isSummary.toJSON(),
			isSummary: this.isSummary,
			binding: this.binding && this.binding.toJSON(),
			mapping: this.mapping && this.mapping.map(v => v.toJSON()),
		};
	}
};
