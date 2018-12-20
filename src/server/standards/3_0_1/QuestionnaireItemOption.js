const BackboneElement = require('./BackboneElement');
const DateScalar = require('./scalars/Date.scalar');
const TimeScalar = require('./scalars/Time.scalar');

class QuestionnaireItemOption extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'QuestionnaireItemOption';
		Object.assign(this, opt);
	}

	// This is a QuestionnaireItemOption resource
	static get __resourceType() {
		return 'QuestionnaireItemOption';
	}

	// A potential answer that\'s allowed as the answer to this question.
	get valueInteger() {
		return this.__valueInteger;
	}

	set valueInteger(new_value) {
		this.__valueInteger = new_value;
	}

	// A potential answer that\'s allowed as the answer to this question.
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

	// A potential answer that\'s allowed as the answer to this question.
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

	// A potential answer that\'s allowed as the answer to this question.
	get valueString() {
		return this.__valueString;
	}

	set valueString(new_value) {
		this.__valueString = new_value;
	}

	// A potential answer that\'s allowed as the answer to this question.
	get valueCoding() {
		return this.__valueCoding;
	}

	set valueCoding(new_value) {
		const Coding = require('./Coding');
		this.__valueCoding = new Coding(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			valueInteger: this.__valueInteger,
			valueDate: this.__valueDate,
			valueTime: this.__valueTime,
			valueString: this.__valueString,
			valueCoding: this.__valueCoding && this.__valueCoding.toJSON(),
		});
	}
}

module.exports = QuestionnaireItemOption;
