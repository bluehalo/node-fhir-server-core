const BackboneElement = require('./BackboneElement');
const DateScalar = require('./scalars/Date.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');
const TimeScalar = require('./scalars/Time.scalar');
const UriScalar = require('./scalars/Uri.scalar');

class QuestionnaireResponseItemAnswer extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'QuestionnaireResponseItemAnswer';
		Object.assign(this, opt);
	}

	// This is a QuestionnaireResponseItemAnswer resource
	static get __resourceType() {
		return 'QuestionnaireResponseItemAnswer';
	}

	// The answer (or one of the answers) provided by the respondent to the question.
	get valueBoolean() {
		return this.__valueBoolean;
	}

	set valueBoolean(new_value) {
		this.__valueBoolean = new_value;
	}

	// The answer (or one of the answers) provided by the respondent to the question.
	get valueDecimal() {
		return this.__valueDecimal;
	}

	set valueDecimal(new_value) {
		this.__valueDecimal = new_value;
	}

	// The answer (or one of the answers) provided by the respondent to the question.
	get valueInteger() {
		return this.__valueInteger;
	}

	set valueInteger(new_value) {
		this.__valueInteger = new_value;
	}

	// The answer (or one of the answers) provided by the respondent to the question.
	get valueDate() {
		return this.__valueDate;
	}

	set valueDate(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field valueDate`);
		}
		this.__valueDate = new_value;
	}

	// The answer (or one of the answers) provided by the respondent to the question.
	get valueDateTime() {
		return this.__valueDateTime;
	}

	set valueDateTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field valueDateTime`);
		}
		this.__valueDateTime = new_value;
	}

	// The answer (or one of the answers) provided by the respondent to the question.
	get valueTime() {
		return this.__valueTime;
	}

	set valueTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = TimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field valueTime`);
		}
		this.__valueTime = new_value;
	}

	// The answer (or one of the answers) provided by the respondent to the question.
	get valueString() {
		return this.__valueString;
	}

	set valueString(new_value) {
		this.__valueString = new_value;
	}

	// The answer (or one of the answers) provided by the respondent to the question.
	get valueUri() {
		return this.__valueUri;
	}

	set valueUri(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field valueUri`);
		}
		this.__valueUri = new_value;
	}

	// The answer (or one of the answers) provided by the respondent to the question.
	get valueAttachment() {
		return this.__valueAttachment;
	}

	set valueAttachment(new_value) {
		const Attachment = require('./Attachment');
		this.__valueAttachment = new Attachment(new_value);
	}

	// The answer (or one of the answers) provided by the respondent to the question.
	get valueCoding() {
		return this.__valueCoding;
	}

	set valueCoding(new_value) {
		const Coding = require('./Coding');
		this.__valueCoding = new Coding(new_value);
	}

	// The answer (or one of the answers) provided by the respondent to the question.
	get valueQuantity() {
		return this.__valueQuantity;
	}

	set valueQuantity(new_value) {
		const Quantity = require('./Quantity');
		this.__valueQuantity = new Quantity(new_value);
	}

	// The answer (or one of the answers) provided by the respondent to the question.
	get valueReference() {
		return this.__valueReference;
	}

	set valueReference(new_value) {
		const Reference = require('./Reference');
		this.__valueReference = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			valueBoolean: this.__valueBoolean,
			valueDecimal: this.__valueDecimal,
			valueInteger: this.__valueInteger,
			valueDate: this.__valueDate,
			valueDateTime: this.__valueDateTime,
			valueTime: this.__valueTime,
			valueString: this.__valueString,
			valueUri: this.__valueUri,
			valueAttachment: this.__valueAttachment && this.__valueAttachment.toJSON(),
			valueCoding: this.__valueCoding && this.__valueCoding.toJSON(),
			valueQuantity: this.__valueQuantity && this.__valueQuantity.toJSON(),
			valueReference: this.__valueReference && this.__valueReference.toJSON(),
		});
	}
}

module.exports = QuestionnaireResponseItemAnswer;
