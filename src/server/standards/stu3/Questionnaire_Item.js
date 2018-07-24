const BackboneElement = require('./BackboneElement');
const Coding = require('./Coding');
const Questionnaire_EnableWhen = require('./Questionnaire_EnableWhen');
const Reference = require('./Reference');
const Questionnaire_Option = require('./Questionnaire_Option');
const Attachment = require('./Attachment');
const Quantity = require('./Quantity');

class Questionnaire_Item extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Questionnaire_Item';
	}

	// An identifier that is unique within the Questionnaire allowing linkage to the equivalent item in a QuestionnaireResponse resource.
	get linkId () {
		return this._linkId;
	}

	set linkId ( new_value ) {
		this._linkId = new_value;
	}

	// A reference to an [[[ElementDefinition]]] that provides the details for the item. If a definition is provided, then the following element values can be inferred from the definition:   * code (ElementDefinition.code) * type (ElementDefinition.type) * required (ElementDefinition.min) * repeats (ElementDefinition.max) * maxLength (ElementDefinition.maxLength) * options (ElementDefinition.binding)  Any information provided in these elements on a Questionnaire Item overrides the information from the definition.
	get definition () {
		return this._definition;
	}

	set definition ( new_value ) {
		this._definition = new_value;
	}

	// A terminology code that corresponds to this group or question (e.g. a code from LOINC, which defines many questions and answers).
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		this._code = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// A short label for a particular group, question or set of display text within the questionnaire used for reference by the individual completing the questionnaire.
	get prefix () {
		return this._prefix;
	}

	set prefix ( new_value ) {
		this._prefix = new_value;
	}

	// The name of a section, the text of a question or text content for a display item.
	get text () {
		return this._text;
	}

	set text ( new_value ) {
		this._text = new_value;
	}

	// The type of questionnaire item this is - whether text for display, a grouping of other items or a particular type of data to be captured (string, integer, coded choice, etc.).
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['group', 'display', 'boolean', 'decimal', 'integer', 'date', 'dateTime', 'time', 'string', 'text', 'url', 'choice', 'open-choice', 'attachment', 'reference', 'quantity'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field type`);
		}
		this._type = new_value;
	}

	// A constraint indicating that this item should only be enabled (displayed/allow answers to be captured) when the specified condition is true.
	get enableWhen () {
		return this._enableWhen;
	}

	set enableWhen ( new_value ) {
		this._enableWhen = Array.isArray(new_value) ? new_value.map(val => new Questionnaire_EnableWhen(val)) : [new Questionnaire_EnableWhen(new_value)];
	}

	// An indication, if true, that the item must be present in a "completed" QuestionnaireResponse.  If false, the item may be skipped when answering the questionnaire.
	get required () {
		return this._required;
	}

	set required ( new_value ) {
		this._required = new_value;
	}

	// An indication, if true, that the item may occur multiple times in the response, collecting multiple answers answers for questions or multiple sets of answers for groups.
	get repeats () {
		return this._repeats;
	}

	set repeats ( new_value ) {
		this._repeats = new_value;
	}

	// An indication, when true, that the value cannot be changed by a human respondent to the Questionnaire.
	get readOnly () {
		return this._readOnly;
	}

	set readOnly ( new_value ) {
		this._readOnly = new_value;
	}

	// The maximum number of characters that are permitted in the answer to be considered a "valid" QuestionnaireResponse.
	get maxLength () {
		return this._maxLength;
	}

	set maxLength ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field maxLength`);
		}
		this._maxLength = new_value;
	}

	// A reference to a value set containing a list of codes representing permitted answers for a "choice" or "open-choice" question.
	get options () {
		return this._options;
	}

	set options ( new_value ) {
		this._options = new Reference(new_value);
	}

	// One of the permitted answers for a "choice" or "open-choice" question.
	get option () {
		return this._option;
	}

	set option ( new_value ) {
		this._option = Array.isArray(new_value) ? new_value.map(val => new Questionnaire_Option(val)) : [new Questionnaire_Option(new_value)];
	}

	// The value that should be defaulted when initially rendering the questionnaire for user input.
	get initialBoolean () {
		return this._initialBoolean;
	}

	set initialBoolean ( new_value ) {
		this._initialBoolean = new_value;
	}

	// The value that should be defaulted when initially rendering the questionnaire for user input.
	get initialDecimal () {
		return this._initialDecimal;
	}

	set initialDecimal ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field initialDecimal`);
		}
		this._initialDecimal = new_value;
	}

	// The value that should be defaulted when initially rendering the questionnaire for user input.
	get initialInteger () {
		return this._initialInteger;
	}

	set initialInteger ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field initialInteger`);
		}
		this._initialInteger = new_value;
	}

	// The value that should be defaulted when initially rendering the questionnaire for user input.
	get initialDate () {
		return this._initialDate;
	}

	set initialDate ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field initialDate`);
		}
		this._initialDate = new_value;
	}

	// The value that should be defaulted when initially rendering the questionnaire for user input.
	get initialDateTime () {
		return this._initialDateTime;
	}

	set initialDateTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field initialDateTime`);
		}
		this._initialDateTime = new_value;
	}

	// The value that should be defaulted when initially rendering the questionnaire for user input.
	get initialTime () {
		return this._initialTime;
	}

	set initialTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field initialTime`);
		}
		this._initialTime = new_value;
	}

	// The value that should be defaulted when initially rendering the questionnaire for user input.
	get initialString () {
		return this._initialString;
	}

	set initialString ( new_value ) {
		this._initialString = new_value;
	}

	// The value that should be defaulted when initially rendering the questionnaire for user input.
	get initialUri () {
		return this._initialUri;
	}

	set initialUri ( new_value ) {
		this._initialUri = new_value;
	}

	// The value that should be defaulted when initially rendering the questionnaire for user input.
	get initialAttachment () {
		return this._initialAttachment;
	}

	set initialAttachment ( new_value ) {
		this._initialAttachment = new Attachment(new_value);
	}

	// The value that should be defaulted when initially rendering the questionnaire for user input.
	get initialCoding () {
		return this._initialCoding;
	}

	set initialCoding ( new_value ) {
		this._initialCoding = new Coding(new_value);
	}

	// The value that should be defaulted when initially rendering the questionnaire for user input.
	get initialQuantity () {
		return this._initialQuantity;
	}

	set initialQuantity ( new_value ) {
		this._initialQuantity = new Quantity(new_value);
	}

	// The value that should be defaulted when initially rendering the questionnaire for user input.
	get initialReference () {
		return this._initialReference;
	}

	set initialReference ( new_value ) {
		this._initialReference = new Reference(new_value);
	}

	// Text, questions and other groups to be nested beneath a question or group.
	get item () {
		return this._item;
	}

	set item ( new_value ) {
		this._item = Array.isArray(new_value) ? new_value.map(val => new Questionnaire_Item(val)) : [new Questionnaire_Item(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			linkId: this._linkId,
			definition: this._definition,
			code: this._code,
			prefix: this._prefix,
			text: this._text,
			type: this._type,
			enableWhen: this._enableWhen,
			required: this._required,
			repeats: this._repeats,
			readOnly: this._readOnly,
			maxLength: this._maxLength,
			options: this._options,
			option: this._option,
			initialBoolean: this._initialBoolean,
			initialDecimal: this._initialDecimal,
			initialInteger: this._initialInteger,
			initialDate: this._initialDate,
			initialDateTime: this._initialDateTime,
			initialTime: this._initialTime,
			initialString: this._initialString,
			initialUri: this._initialUri,
			initialAttachment: this._initialAttachment,
			initialCoding: this._initialCoding,
			initialQuantity: this._initialQuantity,
			initialReference: this._initialReference,
			item: this._item
		});
	}

}

module.exports = Questionnaire_Item;
