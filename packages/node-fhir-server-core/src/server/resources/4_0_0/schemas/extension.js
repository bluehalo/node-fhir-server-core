/**
 * @name exports
 * @summary Extension Class
 */
module.exports = class Extension {
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

		Object.defineProperty(this, '_url', {
			enumerable: true,
			get: () => this.__data._url,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._url = new Element(value);
			},
		});

		Object.defineProperty(this, 'url', {
			enumerable: true,
			get: () => this.__data.url,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.url = value;
			},
		});

		Object.defineProperty(this, '_valueBase64Binary', {
			enumerable: true,
			get: () => this.__data._valueBase64Binary,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueBase64Binary = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueBase64Binary', {
			enumerable: true,
			get: () => this.__data.valueBase64Binary,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueBase64Binary = value;
			},
		});

		Object.defineProperty(this, '_valueBoolean', {
			enumerable: true,
			get: () => this.__data._valueBoolean,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueBoolean = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueBoolean', {
			enumerable: true,
			get: () => this.__data.valueBoolean,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueBoolean = value;
			},
		});

		Object.defineProperty(this, '_valueCanonical', {
			enumerable: true,
			get: () => this.__data._valueCanonical,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueCanonical = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueCanonical', {
			enumerable: true,
			get: () => this.__data.valueCanonical,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueCanonical = value;
			},
		});

		Object.defineProperty(this, '_valueCode', {
			enumerable: true,
			get: () => this.__data._valueCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueCode = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueCode', {
			enumerable: true,
			get: () => this.__data.valueCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueCode = value;
			},
		});

		Object.defineProperty(this, '_valueDate', {
			enumerable: true,
			get: () => this.__data._valueDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueDate', {
			enumerable: true,
			get: () => this.__data.valueDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueDate = value;
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

		Object.defineProperty(this, '_valueDecimal', {
			enumerable: true,
			get: () => this.__data._valueDecimal,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueDecimal = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueDecimal', {
			enumerable: true,
			get: () => this.__data.valueDecimal,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueDecimal = value;
			},
		});

		Object.defineProperty(this, '_valueId', {
			enumerable: true,
			get: () => this.__data._valueId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueId = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueId', {
			enumerable: true,
			get: () => this.__data.valueId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueId = value;
			},
		});

		Object.defineProperty(this, '_valueInstant', {
			enumerable: true,
			get: () => this.__data._valueInstant,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueInstant = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueInstant', {
			enumerable: true,
			get: () => this.__data.valueInstant,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueInstant = value;
			},
		});

		Object.defineProperty(this, '_valueInteger', {
			enumerable: true,
			get: () => this.__data._valueInteger,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueInteger = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueInteger', {
			enumerable: true,
			get: () => this.__data.valueInteger,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueInteger = value;
			},
		});

		Object.defineProperty(this, '_valueMarkdown', {
			enumerable: true,
			get: () => this.__data._valueMarkdown,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueMarkdown = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueMarkdown', {
			enumerable: true,
			get: () => this.__data.valueMarkdown,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueMarkdown = value;
			},
		});

		Object.defineProperty(this, '_valueOid', {
			enumerable: true,
			get: () => this.__data._valueOid,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueOid = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueOid', {
			enumerable: true,
			get: () => this.__data.valueOid,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueOid = value;
			},
		});

		Object.defineProperty(this, '_valuePositiveInt', {
			enumerable: true,
			get: () => this.__data._valuePositiveInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valuePositiveInt = new Element(value);
			},
		});

		Object.defineProperty(this, 'valuePositiveInt', {
			enumerable: true,
			get: () => this.__data.valuePositiveInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valuePositiveInt = value;
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

		Object.defineProperty(this, '_valueUnsignedInt', {
			enumerable: true,
			get: () => this.__data._valueUnsignedInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueUnsignedInt = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueUnsignedInt', {
			enumerable: true,
			get: () => this.__data.valueUnsignedInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueUnsignedInt = value;
			},
		});

		Object.defineProperty(this, '_valueUri', {
			enumerable: true,
			get: () => this.__data._valueUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueUri = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueUri', {
			enumerable: true,
			get: () => this.__data.valueUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueUri = value;
			},
		});

		Object.defineProperty(this, '_valueUrl', {
			enumerable: true,
			get: () => this.__data._valueUrl,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueUrl = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueUrl', {
			enumerable: true,
			get: () => this.__data.valueUrl,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueUrl = value;
			},
		});

		Object.defineProperty(this, '_valueUuid', {
			enumerable: true,
			get: () => this.__data._valueUuid,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueUuid = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueUuid', {
			enumerable: true,
			get: () => this.__data.valueUuid,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueUuid = value;
			},
		});

		Object.defineProperty(this, 'valueAddress', {
			enumerable: true,
			get: () => this.__data.valueAddress,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Address = require('./address.js');
				this.__data.valueAddress = new Address(value);
			},
		});

		Object.defineProperty(this, 'valueAge', {
			enumerable: true,
			get: () => this.__data.valueAge,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Age = require('./age.js');
				this.__data.valueAge = new Age(value);
			},
		});

		Object.defineProperty(this, 'valueAnnotation', {
			enumerable: true,
			get: () => this.__data.valueAnnotation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Annotation = require('./annotation.js');
				this.__data.valueAnnotation = new Annotation(value);
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

		Object.defineProperty(this, 'valueCoding', {
			enumerable: true,
			get: () => this.__data.valueCoding,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.valueCoding = new Coding(value);
			},
		});

		Object.defineProperty(this, 'valueContactPoint', {
			enumerable: true,
			get: () => this.__data.valueContactPoint,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContactPoint = require('./contactpoint.js');
				this.__data.valueContactPoint = new ContactPoint(value);
			},
		});

		Object.defineProperty(this, 'valueCount', {
			enumerable: true,
			get: () => this.__data.valueCount,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Count = require('./count.js');
				this.__data.valueCount = new Count(value);
			},
		});

		Object.defineProperty(this, 'valueDistance', {
			enumerable: true,
			get: () => this.__data.valueDistance,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Distance = require('./distance.js');
				this.__data.valueDistance = new Distance(value);
			},
		});

		Object.defineProperty(this, 'valueDuration', {
			enumerable: true,
			get: () => this.__data.valueDuration,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Duration = require('./duration.js');
				this.__data.valueDuration = new Duration(value);
			},
		});

		Object.defineProperty(this, 'valueHumanName', {
			enumerable: true,
			get: () => this.__data.valueHumanName,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let HumanName = require('./humanname.js');
				this.__data.valueHumanName = new HumanName(value);
			},
		});

		Object.defineProperty(this, 'valueIdentifier', {
			enumerable: true,
			get: () => this.__data.valueIdentifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.valueIdentifier = new Identifier(value);
			},
		});

		Object.defineProperty(this, 'valueMoney', {
			enumerable: true,
			get: () => this.__data.valueMoney,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Money = require('./money.js');
				this.__data.valueMoney = new Money(value);
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

		Object.defineProperty(this, 'valueReference', {
			enumerable: true,
			get: () => this.__data.valueReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.valueReference = new Reference(value);
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

		Object.defineProperty(this, 'valueSignature', {
			enumerable: true,
			get: () => this.__data.valueSignature,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Signature = require('./signature.js');
				this.__data.valueSignature = new Signature(value);
			},
		});

		Object.defineProperty(this, 'valueTiming', {
			enumerable: true,
			get: () => this.__data.valueTiming,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Timing = require('./timing.js');
				this.__data.valueTiming = new Timing(value);
			},
		});

		Object.defineProperty(this, 'valueContactDetail', {
			enumerable: true,
			get: () => this.__data.valueContactDetail,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContactDetail = require('./contactdetail.js');
				this.__data.valueContactDetail = new ContactDetail(value);
			},
		});

		Object.defineProperty(this, 'valueContributor', {
			enumerable: true,
			get: () => this.__data.valueContributor,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Contributor = require('./contributor.js');
				this.__data.valueContributor = new Contributor(value);
			},
		});

		Object.defineProperty(this, 'valueDataRequirement', {
			enumerable: true,
			get: () => this.__data.valueDataRequirement,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let DataRequirement = require('./datarequirement.js');
				this.__data.valueDataRequirement = new DataRequirement(value);
			},
		});

		Object.defineProperty(this, 'valueExpression', {
			enumerable: true,
			get: () => this.__data.valueExpression,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Expression = require('./expression.js');
				this.__data.valueExpression = new Expression(value);
			},
		});

		Object.defineProperty(this, 'valueParameterDefinition', {
			enumerable: true,
			get: () => this.__data.valueParameterDefinition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ParameterDefinition = require('./parameterdefinition.js');
				this.__data.valueParameterDefinition = new ParameterDefinition(value);
			},
		});

		Object.defineProperty(this, 'valueRelatedArtifact', {
			enumerable: true,
			get: () => this.__data.valueRelatedArtifact,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let RelatedArtifact = require('./relatedartifact.js');
				this.__data.valueRelatedArtifact = new RelatedArtifact(value);
			},
		});

		Object.defineProperty(this, 'valueTriggerDefinition', {
			enumerable: true,
			get: () => this.__data.valueTriggerDefinition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let TriggerDefinition = require('./triggerdefinition.js');
				this.__data.valueTriggerDefinition = new TriggerDefinition(value);
			},
		});

		Object.defineProperty(this, 'valueUsageContext', {
			enumerable: true,
			get: () => this.__data.valueUsageContext,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let UsageContext = require('./usagecontext.js');
				this.__data.valueUsageContext = new UsageContext(value);
			},
		});

		Object.defineProperty(this, 'valueDosage', {
			enumerable: true,
			get: () => this.__data.valueDosage,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Dosage = require('./dosage.js');
				this.__data.valueDosage = new Dosage(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Extension',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Extension';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			_url: this._url && this._url.toJSON(),
			url: this.url,
			_valueBase64Binary: this._valueBase64Binary && this._valueBase64Binary.toJSON(),
			valueBase64Binary: this.valueBase64Binary,
			_valueBoolean: this._valueBoolean && this._valueBoolean.toJSON(),
			valueBoolean: this.valueBoolean,
			_valueCanonical: this._valueCanonical && this._valueCanonical.toJSON(),
			valueCanonical: this.valueCanonical,
			_valueCode: this._valueCode && this._valueCode.toJSON(),
			valueCode: this.valueCode,
			_valueDate: this._valueDate && this._valueDate.toJSON(),
			valueDate: this.valueDate,
			_valueDateTime: this._valueDateTime && this._valueDateTime.toJSON(),
			valueDateTime: this.valueDateTime,
			_valueDecimal: this._valueDecimal && this._valueDecimal.toJSON(),
			valueDecimal: this.valueDecimal,
			_valueId: this._valueId && this._valueId.toJSON(),
			valueId: this.valueId,
			_valueInstant: this._valueInstant && this._valueInstant.toJSON(),
			valueInstant: this.valueInstant,
			_valueInteger: this._valueInteger && this._valueInteger.toJSON(),
			valueInteger: this.valueInteger,
			_valueMarkdown: this._valueMarkdown && this._valueMarkdown.toJSON(),
			valueMarkdown: this.valueMarkdown,
			_valueOid: this._valueOid && this._valueOid.toJSON(),
			valueOid: this.valueOid,
			_valuePositiveInt: this._valuePositiveInt && this._valuePositiveInt.toJSON(),
			valuePositiveInt: this.valuePositiveInt,
			_valueString: this._valueString && this._valueString.toJSON(),
			valueString: this.valueString,
			_valueTime: this._valueTime && this._valueTime.toJSON(),
			valueTime: this.valueTime,
			_valueUnsignedInt: this._valueUnsignedInt && this._valueUnsignedInt.toJSON(),
			valueUnsignedInt: this.valueUnsignedInt,
			_valueUri: this._valueUri && this._valueUri.toJSON(),
			valueUri: this.valueUri,
			_valueUrl: this._valueUrl && this._valueUrl.toJSON(),
			valueUrl: this.valueUrl,
			_valueUuid: this._valueUuid && this._valueUuid.toJSON(),
			valueUuid: this.valueUuid,
			valueAddress: this.valueAddress && this.valueAddress.toJSON(),
			valueAge: this.valueAge && this.valueAge.toJSON(),
			valueAnnotation: this.valueAnnotation && this.valueAnnotation.toJSON(),
			valueAttachment: this.valueAttachment && this.valueAttachment.toJSON(),
			valueCodeableConcept: this.valueCodeableConcept && this.valueCodeableConcept.toJSON(),
			valueCoding: this.valueCoding && this.valueCoding.toJSON(),
			valueContactPoint: this.valueContactPoint && this.valueContactPoint.toJSON(),
			valueCount: this.valueCount && this.valueCount.toJSON(),
			valueDistance: this.valueDistance && this.valueDistance.toJSON(),
			valueDuration: this.valueDuration && this.valueDuration.toJSON(),
			valueHumanName: this.valueHumanName && this.valueHumanName.toJSON(),
			valueIdentifier: this.valueIdentifier && this.valueIdentifier.toJSON(),
			valueMoney: this.valueMoney && this.valueMoney.toJSON(),
			valuePeriod: this.valuePeriod && this.valuePeriod.toJSON(),
			valueQuantity: this.valueQuantity && this.valueQuantity.toJSON(),
			valueRange: this.valueRange && this.valueRange.toJSON(),
			valueRatio: this.valueRatio && this.valueRatio.toJSON(),
			valueReference: this.valueReference && this.valueReference.toJSON(),
			valueSampledData: this.valueSampledData && this.valueSampledData.toJSON(),
			valueSignature: this.valueSignature && this.valueSignature.toJSON(),
			valueTiming: this.valueTiming && this.valueTiming.toJSON(),
			valueContactDetail: this.valueContactDetail && this.valueContactDetail.toJSON(),
			valueContributor: this.valueContributor && this.valueContributor.toJSON(),
			valueDataRequirement: this.valueDataRequirement && this.valueDataRequirement.toJSON(),
			valueExpression: this.valueExpression && this.valueExpression.toJSON(),
			valueParameterDefinition: this.valueParameterDefinition && this.valueParameterDefinition.toJSON(),
			valueRelatedArtifact: this.valueRelatedArtifact && this.valueRelatedArtifact.toJSON(),
			valueTriggerDefinition: this.valueTriggerDefinition && this.valueTriggerDefinition.toJSON(),
			valueUsageContext: this.valueUsageContext && this.valueUsageContext.toJSON(),
			valueDosage: this.valueDosage && this.valueDosage.toJSON(),
		};
	}
};
