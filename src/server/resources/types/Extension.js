const path = require('path');
const Coding = require(path.resolve('./src/server/resources/types/Coding'));
const CodeableConcept = require(path.resolve('./src/server/resources/types/CodeableConcept'));
const Attachment = require(path.resolve('./src/server/resources/types/Attachment'));
const Identifier = require(path.resolve('./src/server/resources/types/Identifier'));
const Quantity = require(path.resolve('./src/server/resources/types/Quantity'));
const Range = require(path.resolve('./src/server/resources/types/Range'));
const Period = require(path.resolve('./src/server/resources/types/Period'));
const Ratio = require(path.resolve('./src/server/resources/types/Ratio'));
const Address = require(path.resolve('./src/server/resources/types/Address'));
const ContactPoint = require(path.resolve('./src/server/resources/types/ContactPoint'));
const Timing = require(path.resolve('./src/server/resources/types/ContactPoint'));
const Signature = require(path.resolve('./src/server/resources/types/Signature'));
const Reference = require(path.resolve('./src/server/resources/types/Reference'));



class Extension {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// url		1..1	uri	identifies the meaning of the value
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	// valueDecimal : decimal
	set valueDecimal(value) {
		this._valueDecimal = value;
	}

	get valueDecimal() {
		return this._valueDecimal;
	}

	// valueDateTime : dateTime
	set valueDateTime(value) {
		this._valueDateTime = value;
	}

	get valueDateTime() {
		return this._valueDateTime;
	}

	// valueDate : date
	set valueDate(value) {
		this._valueDate = value;
	}

	get valueDate() {
		return this._valueDate;
	}
	// valueInstant : instant
	set valueInstant(value) {
		this._valueInstante = value;
	}

	get valueInstant() {
		return this._valueInstant;
	}
	// valueString : string
	set valueString(value) {
		this._valueString = value;
	}

	get valueString() {
		return this._valueString;
	}
	// valueUri : uri
	set valueUri(value) {
		this._valueUri = value;
	}

	get valueUri() {
		return this._valueUri;
	}
	// valueBoolean : boolean
	set valueBoolean(value) {
		this._valueBoolean = value;
	}

	get valueBoolean() {
		return this._valueBoolean;
	}
	// valueCode : code (only if the extension definition provides a fixed binding to a suitable set of codes)
	set valueCode(value) {
		this._valueCode = value;
	}

	get valueCode() {
		return this._valueCode;
	}
	// valueMarkdown : markdown
	set valueMarkdown(value) {
		this._valueMarkdown = value;
	}

	get valueMarkdown() {
		return this._valueMarkdown;
	}
	// valueBase64Binary : base64Binary
	set valueBase64Binary(value) {
		this._valueBase64Binary = value;
	}

	get valueBase64Binary() {
		return this._valueBase64Binary;
	}
	// valueCoding : Coding
	set valueCoding(value) {
		this._valueCoding = new Coding(value);
	}

	get valueCoding() {
		return this._valueCoding;
	}
	// valueCodeableConcept : CodeableConcept
	set valueCodeableConcept(value) {
		this._valueCodeableConcept = new CodeableConcept(value);
	}

	get valueCodeableConcept() {
		return this._valueCodeableConcept;
	}
	// valueAttachment : Attachment
	set valueAttachment(value) {
		this._valueAttachment = new Attachment(value);
	}

	get valueAttachment() {
		return this._valueAttachment;
	}
	// valueIdentifier : Identifier
	set valueIdentifier(value) {
		this._valueIdentifier = new Identifier(value);
	}

	get valueIdentifier() {
		return this._valueIdentifier;
	}
	// valueQuantity : Quantity
	set valueQuantity(value) {
		this._valueQuantity = new Quantity(value);
	}

	get valueQuantity() {
		return this._valueQuantity;
	}
	// valueRange : Range
	set valueRange(value) {
		this._valueRange = new Range(value);
	}

	get valueRange() {
		return this._valueRange;
	}
	// valuePeriod : Period
	set valuePeriod(value) {
		this._valuePeriod = new Period(value);
	}

	get valuePeriod() {
		return this._valuePeriod;
	}
	// valueRatio : Ratio
	set valueRatio(value) {
		this._valueRatio = new Ratio(value);
	}

	get valueRatio() {
		return this._valueRatio;
	}
	// valueHumanName : HumanName
	set valueHumanName(value) {
		this._valueHumanName = value;
	}

	get valueHumanName() {
		return this._valueHumanName;
	}
	// valueAddress : Address
	set valueAddress(value) {
		this._valueAddress = new Address(value);
	}

	get valueAddress() {
		return this._valueAddress;
	}
	// valueContactPoint : ContactPoint
	set valueContactPoint(value) {
		this._valueContactPoint = new ContactPoint(value);
	}

	get valueContactPoint() {
		return this._valueContactPoint;
	}
	// valueTiming : Timing
	set valueTiming(value) {
		this._valueTiming = new Timing(value);
	}

	get valueTiming() {
		return this._valueTiming;
	}
	// valueSignature : Signature
	set valueSignature(value) {
		this._valueSignature = new Signature(value);
	}

	get valueSignature() {
		return this._valueSignature;
	}
	// valueReference : Reference - a reference to another resource
	set valueReference(value) {
		this._valueReference = new Reference(value);
	}

	get valueReference() {
		return this._valueReference;
	}

	toJSON() {
		return {
			url: this._url,
			valueDecimal: this._valueDecimal,
			valueDateTime: this._valueDateTime,
			valueDate: this._valueDate,
			valueInstant: this._valueInstant,
			valueString: this._valueString,
			valueUri: this._valueUri,
			valueBoolean: this._valueBoolean,
			valueCode: this._valueCode,
			valueMarkdown: this._valueMarkdown,
			valueBase64Binary: this._valueBase64Binary,
			valueCoding: this._valueCoding,
			valueCodeableConcept: this._valueCodeableConcept,
			valueAttachment: this._valueAttachment,
			valueIdentifier: this._valueIdentifier,
			valueQuantity: this._valueQuantity,
			valueRange: this._valueRange,
			valuePeriod: this._valuePeriod,
			valueRatio: this._valueRatio,
			valueHumanName: this._valueHumanName,
			valueAddress: this._valueAddress,
			valueContactPoint: this._valueContactPoint,
			valueTiming: this._valueTiming,
			valueSignature: this._valueSignature,
			valueReference: this._valueReference
		};
	}
}

module.exports = Extension;




