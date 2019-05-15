/**
 * @name exports
 * @summary StructureMapGroupRuleSource Class
 */
module.exports = class StructureMapGroupRuleSource {
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

		Object.defineProperty(this, '_context', {
			enumerable: true,
			get: () => this.__data._context,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._context = new Element(value);
			},
		});

		Object.defineProperty(this, 'context', {
			enumerable: true,
			get: () => this.__data.context,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.context = value;
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

		Object.defineProperty(this, '_element', {
			enumerable: true,
			get: () => this.__data._element,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._element = new Element(value);
			},
		});

		Object.defineProperty(this, 'element', {
			enumerable: true,
			get: () => this.__data.element,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.element = value;
			},
		});

		Object.defineProperty(this, '_listMode', {
			enumerable: true,
			get: () => this.__data._listMode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._listMode = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/map-source-list-mode
		Object.defineProperty(this, 'listMode', {
			enumerable: true,
			get: () => this.__data.listMode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.listMode = value;
			},
		});

		Object.defineProperty(this, '_variable', {
			enumerable: true,
			get: () => this.__data._variable,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._variable = new Element(value);
			},
		});

		Object.defineProperty(this, 'variable', {
			enumerable: true,
			get: () => this.__data.variable,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.variable = value;
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

				this.__data.condition = value;
			},
		});

		Object.defineProperty(this, '_check', {
			enumerable: true,
			get: () => this.__data._check,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._check = new Element(value);
			},
		});

		Object.defineProperty(this, 'check', {
			enumerable: true,
			get: () => this.__data.check,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.check = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'StructureMapGroupRuleSource',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'StructureMapGroupRuleSource';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_context: this._context && this._context.toJSON(),
			context: this.context,
			_min: this._min && this._min.toJSON(),
			min: this.min,
			_max: this._max && this._max.toJSON(),
			max: this.max,
			_type: this._type && this._type.toJSON(),
			type: this.type,
			_defaultValueBase64Binary: this._defaultValueBase64Binary && this._defaultValueBase64Binary.toJSON(),
			defaultValueBase64Binary: this.defaultValueBase64Binary,
			_defaultValueBoolean: this._defaultValueBoolean && this._defaultValueBoolean.toJSON(),
			defaultValueBoolean: this.defaultValueBoolean,
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
			defaultValueMeta: this.defaultValueMeta && this.defaultValueMeta.toJSON(),
			_element: this._element && this._element.toJSON(),
			element: this.element,
			_listMode: this._listMode && this._listMode.toJSON(),
			listMode: this.listMode,
			_variable: this._variable && this._variable.toJSON(),
			variable: this.variable,
			_condition: this._condition && this._condition.toJSON(),
			condition: this.condition,
			_check: this._check && this._check.toJSON(),
			check: this.check,
		};
	}
};
