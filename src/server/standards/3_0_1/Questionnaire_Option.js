const BackboneElement = require('./BackboneElement');
const Coding = require('./Coding');

class Questionnaire_Option extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Questionnaire_Option';
	}

	// A potential answer that's allowed as the answer to this question.
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

	// A potential answer that's allowed as the answer to this question.
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

	// A potential answer that's allowed as the answer to this question.
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

	// A potential answer that's allowed as the answer to this question.
	get valueString () {
		return this._valueString;
	}

	set valueString ( new_value ) {
		this._valueString = new_value;
	}

	// A potential answer that's allowed as the answer to this question.
	get valueCoding () {
		return this._valueCoding;
	}

	set valueCoding ( new_value ) {
		this._valueCoding = new Coding(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			valueInteger: this._valueInteger,
			valueDate: this._valueDate,
			valueTime: this._valueTime,
			valueString: this._valueString,
			valueCoding: this._valueCoding && this._valueCoding.toJSON()
		});
	}

}

module.exports = Questionnaire_Option;
