const BackboneElement = require('./BackboneElement');
const Attachment = require('./Attachment');
const Coding = require('./Coding');
const Quantity = require('./Quantity');
const Reference = require('./Reference');

class Questionnaire_EnableWhen extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Questionnaire_EnableWhen';
	}

	// The linkId for the question whose answer (or lack of answer) governs whether this item is enabled.
	get question () {
		return this._question;
	}

	set question ( new_value ) {
		this._question = new_value;
	}

	// An indication that this item should be enabled only if the specified question is answered (hasAnswer=true) or not answered (hasAnswer=false).
	get hasAnswer () {
		return this._hasAnswer;
	}

	set hasAnswer ( new_value ) {
		this._hasAnswer = new_value;
	}

	// An answer that the referenced question must match in order for the item to be enabled.
	get answerBoolean () {
		return this._answerBoolean;
	}

	set answerBoolean ( new_value ) {
		this._answerBoolean = new_value;
	}

	// An answer that the referenced question must match in order for the item to be enabled.
	get answerDecimal () {
		return this._answerDecimal;
	}

	set answerDecimal ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field answerDecimal`);
		}
		this._answerDecimal = new_value;
	}

	// An answer that the referenced question must match in order for the item to be enabled.
	get answerInteger () {
		return this._answerInteger;
	}

	set answerInteger ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field answerInteger`);
		}
		this._answerInteger = new_value;
	}

	// An answer that the referenced question must match in order for the item to be enabled.
	get answerDate () {
		return this._answerDate;
	}

	set answerDate ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field answerDate`);
		}
		this._answerDate = new_value;
	}

	// An answer that the referenced question must match in order for the item to be enabled.
	get answerDateTime () {
		return this._answerDateTime;
	}

	set answerDateTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field answerDateTime`);
		}
		this._answerDateTime = new_value;
	}

	// An answer that the referenced question must match in order for the item to be enabled.
	get answerTime () {
		return this._answerTime;
	}

	set answerTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field answerTime`);
		}
		this._answerTime = new_value;
	}

	// An answer that the referenced question must match in order for the item to be enabled.
	get answerString () {
		return this._answerString;
	}

	set answerString ( new_value ) {
		this._answerString = new_value;
	}

	// An answer that the referenced question must match in order for the item to be enabled.
	get answerUri () {
		return this._answerUri;
	}

	set answerUri ( new_value ) {
		this._answerUri = new_value;
	}

	// An answer that the referenced question must match in order for the item to be enabled.
	get answerAttachment () {
		return this._answerAttachment;
	}

	set answerAttachment ( new_value ) {
		this._answerAttachment = new Attachment(new_value);
	}

	// An answer that the referenced question must match in order for the item to be enabled.
	get answerCoding () {
		return this._answerCoding;
	}

	set answerCoding ( new_value ) {
		this._answerCoding = new Coding(new_value);
	}

	// An answer that the referenced question must match in order for the item to be enabled.
	get answerQuantity () {
		return this._answerQuantity;
	}

	set answerQuantity ( new_value ) {
		this._answerQuantity = new Quantity(new_value);
	}

	// An answer that the referenced question must match in order for the item to be enabled.
	get answerReference () {
		return this._answerReference;
	}

	set answerReference ( new_value ) {
		this._answerReference = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			question: this._question,
			hasAnswer: this._hasAnswer,
			answerBoolean: this._answerBoolean,
			answerDecimal: this._answerDecimal,
			answerInteger: this._answerInteger,
			answerDate: this._answerDate,
			answerDateTime: this._answerDateTime,
			answerTime: this._answerTime,
			answerString: this._answerString,
			answerUri: this._answerUri,
			answerAttachment: this._answerAttachment,
			answerCoding: this._answerCoding,
			answerQuantity: this._answerQuantity,
			answerReference: this._answerReference
		});
	}

}

module.exports = Questionnaire_EnableWhen;
