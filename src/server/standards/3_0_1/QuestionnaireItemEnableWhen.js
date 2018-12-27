const BackboneElement = require('./BackboneElement');
const DateScalar = require('./scalars/Date.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');
const TimeScalar = require('./scalars/Time.scalar');
const UriScalar = require('./scalars/Uri.scalar');

class QuestionnaireItemEnableWhen extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'QuestionnaireItemEnableWhen';
		Object.assign(this, opt);
	}

	// This is a QuestionnaireItemEnableWhen resource
	static get __resourceType() {
		return 'QuestionnaireItemEnableWhen';
	}

	// The linkId for the question whose answer (or lack of answer) governs whether this item is enabled.
	get question() {
		return this.__question;
	}

	set question(new_value) {
		this.__question = new_value;
	}

	// An indication that this item should be enabled only if the specified question is answered (hasAnswer=true) or not answered (hasAnswer=false).
	get hasAnswer() {
		return this.__hasAnswer;
	}

	set hasAnswer(new_value) {
		this.__hasAnswer = new_value;
	}

	// An answer that the referenced question must match in order for the item to be enabled.
	get answerBoolean() {
		return this.__answerBoolean;
	}

	set answerBoolean(new_value) {
		this.__answerBoolean = new_value;
	}

	// An answer that the referenced question must match in order for the item to be enabled.
	get answerDecimal() {
		return this.__answerDecimal;
	}

	set answerDecimal(new_value) {
		this.__answerDecimal = new_value;
	}

	// An answer that the referenced question must match in order for the item to be enabled.
	get answerInteger() {
		return this.__answerInteger;
	}

	set answerInteger(new_value) {
		this.__answerInteger = new_value;
	}

	// An answer that the referenced question must match in order for the item to be enabled.
	get answerDate() {
		return this.__answerDate;
	}

	set answerDate(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field answerDate`);
		}
		this.__answerDate = new_value;
	}

	// An answer that the referenced question must match in order for the item to be enabled.
	get answerDateTime() {
		return this.__answerDateTime;
	}

	set answerDateTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field answerDateTime`);
		}
		this.__answerDateTime = new_value;
	}

	// An answer that the referenced question must match in order for the item to be enabled.
	get answerTime() {
		return this.__answerTime;
	}

	set answerTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = TimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field answerTime`);
		}
		this.__answerTime = new_value;
	}

	// An answer that the referenced question must match in order for the item to be enabled.
	get answerString() {
		return this.__answerString;
	}

	set answerString(new_value) {
		this.__answerString = new_value;
	}

	// An answer that the referenced question must match in order for the item to be enabled.
	get answerUri() {
		return this.__answerUri;
	}

	set answerUri(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field answerUri`);
		}
		this.__answerUri = new_value;
	}

	// An answer that the referenced question must match in order for the item to be enabled.
	get answerAttachment() {
		return this.__answerAttachment;
	}

	set answerAttachment(new_value) {
		const Attachment = require('./Attachment');
		this.__answerAttachment = new Attachment(new_value);
	}

	// An answer that the referenced question must match in order for the item to be enabled.
	get answerCoding() {
		return this.__answerCoding;
	}

	set answerCoding(new_value) {
		const Coding = require('./Coding');
		this.__answerCoding = new Coding(new_value);
	}

	// An answer that the referenced question must match in order for the item to be enabled.
	get answerQuantity() {
		return this.__answerQuantity;
	}

	set answerQuantity(new_value) {
		const Quantity = require('./Quantity');
		this.__answerQuantity = new Quantity(new_value);
	}

	// An answer that the referenced question must match in order for the item to be enabled.
	get answerReference() {
		return this.__answerReference;
	}

	set answerReference(new_value) {
		const Reference = require('./Reference');
		this.__answerReference = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			question: this.__question,
			hasAnswer: this.__hasAnswer,
			answerBoolean: this.__answerBoolean,
			answerDecimal: this.__answerDecimal,
			answerInteger: this.__answerInteger,
			answerDate: this.__answerDate,
			answerDateTime: this.__answerDateTime,
			answerTime: this.__answerTime,
			answerString: this.__answerString,
			answerUri: this.__answerUri,
			answerAttachment: this.__answerAttachment && this.__answerAttachment.toJSON(),
			answerCoding: this.__answerCoding && this.__answerCoding.toJSON(),
			answerQuantity: this.__answerQuantity && this.__answerQuantity.toJSON(),
			answerReference: this.__answerReference && this.__answerReference.toJSON(),
		});
	}
}

module.exports = QuestionnaireItemEnableWhen;
