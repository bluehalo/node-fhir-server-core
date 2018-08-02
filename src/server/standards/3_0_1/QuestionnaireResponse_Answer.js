const BackboneElement = require('./BackboneElement');
const Attachment = require('./Attachment');
const Coding = require('./Coding');
const Quantity = require('./Quantity');
const Reference = require('./Reference');
const QuestionnaireResponse_Item = require('./QuestionnaireResponse_Item');

class QuestionnaireResponse_Answer extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'QuestionnaireResponse_Answer';
	}

	// The answer (or one of the answers) provided by the respondent to the question.
	get valueBoolean () {
		return this._valueBoolean;
	}

	set valueBoolean ( new_value ) {
		this._valueBoolean = new_value;
	}

	// The answer (or one of the answers) provided by the respondent to the question.
	get valueDecimal () {
		return this._valueDecimal;
	}

	set valueDecimal ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field valueDecimal`);
		}
		this._valueDecimal = new_value;
	}

	// The answer (or one of the answers) provided by the respondent to the question.
	get valueInteger () {
		return this._valueInteger;
	}

	set valueInteger ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field valueInteger`);
		}
		this._valueInteger = new_value;
	}

	// The answer (or one of the answers) provided by the respondent to the question.
	get valueDate () {
		return this._valueDate;
	}

	set valueDate ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field valueDate`);
		}
		this._valueDate = new_value;
	}

	// The answer (or one of the answers) provided by the respondent to the question.
	get valueDateTime () {
		return this._valueDateTime;
	}

	set valueDateTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field valueDateTime`);
		}
		this._valueDateTime = new_value;
	}

	// The answer (or one of the answers) provided by the respondent to the question.
	get valueTime () {
		return this._valueTime;
	}

	set valueTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field valueTime`);
		}
		this._valueTime = new_value;
	}

	// The answer (or one of the answers) provided by the respondent to the question.
	get valueString () {
		return this._valueString;
	}

	set valueString ( new_value ) {
		this._valueString = new_value;
	}

	// The answer (or one of the answers) provided by the respondent to the question.
	get valueUri () {
		return this._valueUri;
	}

	set valueUri ( new_value ) {
		this._valueUri = new_value;
	}

	// The answer (or one of the answers) provided by the respondent to the question.
	get valueAttachment () {
		return this._valueAttachment;
	}

	set valueAttachment ( new_value ) {
		this._valueAttachment = new Attachment(new_value);
	}

	// The answer (or one of the answers) provided by the respondent to the question.
	get valueCoding () {
		return this._valueCoding;
	}

	set valueCoding ( new_value ) {
		this._valueCoding = new Coding(new_value);
	}

	// The answer (or one of the answers) provided by the respondent to the question.
	get valueQuantity () {
		return this._valueQuantity;
	}

	set valueQuantity ( new_value ) {
		this._valueQuantity = new Quantity(new_value);
	}

	// The answer (or one of the answers) provided by the respondent to the question.
	get valueReference () {
		return this._valueReference;
	}

	set valueReference ( new_value ) {
		this._valueReference = new Reference(new_value);
	}

	// Nested groups and/or questions found within this particular answer.
	get item () {
		return this._item;
	}

	set item ( new_value ) {
		this._item = Array.isArray(new_value) ? new_value.map(val => new QuestionnaireResponse_Item(val)) : [new QuestionnaireResponse_Item(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			valueBoolean: this._valueBoolean,
			valueDecimal: this._valueDecimal,
			valueInteger: this._valueInteger,
			valueDate: this._valueDate,
			valueDateTime: this._valueDateTime,
			valueTime: this._valueTime,
			valueString: this._valueString,
			valueUri: this._valueUri,
			valueAttachment: this._valueAttachment && this._valueAttachment.toJSON(),
			valueCoding: this._valueCoding && this._valueCoding.toJSON(),
			valueQuantity: this._valueQuantity && this._valueQuantity.toJSON(),
			valueReference: this._valueReference && this._valueReference.toJSON(),
			item: this._item && this._item.map(v => v.toJSON())
		});
	}

}

module.exports = QuestionnaireResponse_Answer;
