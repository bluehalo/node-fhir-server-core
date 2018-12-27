const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');
const DateScalar = require('./scalars/Date.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');
const TimeScalar = require('./scalars/Time.scalar');

class QuestionnaireItem extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'QuestionnaireItem';
		Object.assign(this, opt);
	}

	// This is a QuestionnaireItem resource
	static get __resourceType() {
		return 'QuestionnaireItem';
	}

	// An identifier that is unique within the Questionnaire allowing linkage to the equivalent item in a QuestionnaireResponse resource.
	get linkId() {
		return this.__linkId;
	}

	set linkId(new_value) {
		this.__linkId = new_value;
	}

	// A reference to an [ElementDefinition](elementdefinition.html) that provides the details for the item. If a definition is provided, then the following element values can be inferred from the definition:   * code (ElementDefinition.code) * type (ElementDefinition.type) * required (ElementDefinition.min) * repeats (ElementDefinition.max) * maxLength (ElementDefinition.maxLength) * options (ElementDefinition.binding)  Any information provided in these elements on a Questionnaire Item overrides the information from the definition.
	get definition() {
		return this.__definition;
	}

	set definition(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field definition`);
		}
		this.__definition = new_value;
	}

	// A terminology code that corresponds to this group or question (e.g. a code from LOINC, which defines many questions and answers).
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const Coding = require('./Coding');
		this.__code = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// A short label for a particular group, question or set of display text within the questionnaire used for reference by the individual completing the questionnaire.
	get prefix() {
		return this.__prefix;
	}

	set prefix(new_value) {
		this.__prefix = new_value;
	}

	// The name of a section, the text of a question or text content for a display item.
	get text() {
		return this.__text;
	}

	set text(new_value) {
		this.__text = new_value;
	}

	// The type of questionnaire item this is - whether text for display, a grouping of other items or a particular type of data to be captured (string, integer, coded choice, etc.).
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// A constraint indicating that this item should only be enabled (displayed/allow answers to be captured) when the specified condition is true.
	get enableWhen() {
		return this.__enableWhen;
	}

	set enableWhen(new_value) {
		const QuestionnaireItemEnableWhen = require('./QuestionnaireItemEnableWhen');
		this.__enableWhen = Array.isArray(new_value)
			? new_value.map(val => new QuestionnaireItemEnableWhen(val))
			: [new QuestionnaireItemEnableWhen(new_value)];
	}

	// An indication, if true, that the item must be present in a \'completed\' QuestionnaireResponse.  If false, the item may be skipped when answering the questionnaire.
	get required() {
		return this.__required;
	}

	set required(new_value) {
		this.__required = new_value;
	}

	// An indication, if true, that the item may occur multiple times in the response, collecting multiple answers answers for questions or multiple sets of answers for groups.
	get repeats() {
		return this.__repeats;
	}

	set repeats(new_value) {
		this.__repeats = new_value;
	}

	// An indication, when true, that the value cannot be changed by a human respondent to the Questionnaire.
	get readOnly() {
		return this.__readOnly;
	}

	set readOnly(new_value) {
		this.__readOnly = new_value;
	}

	// The maximum number of characters that are permitted in the answer to be considered a \'valid\' QuestionnaireResponse.
	get maxLength() {
		return this.__maxLength;
	}

	set maxLength(new_value) {
		this.__maxLength = new_value;
	}

	// A reference to a value set containing a list of codes representing permitted answers for a \'choice\' or \'open-choice\' question.
	get options() {
		return this.__options;
	}

	set options(new_value) {
		const Reference = require('./Reference');
		this.__options = new Reference(new_value);
	}

	// One of the permitted answers for a \'choice\' or \'open-choice\' question.
	get option() {
		return this.__option;
	}

	set option(new_value) {
		const QuestionnaireItemOption = require('./QuestionnaireItemOption');
		this.__option = Array.isArray(new_value)
			? new_value.map(val => new QuestionnaireItemOption(val))
			: [new QuestionnaireItemOption(new_value)];
	}

	// The value that should be defaulted when initially rendering the questionnaire for user input.
	get initialBoolean() {
		return this.__initialBoolean;
	}

	set initialBoolean(new_value) {
		this.__initialBoolean = new_value;
	}

	// The value that should be defaulted when initially rendering the questionnaire for user input.
	get initialDecimal() {
		return this.__initialDecimal;
	}

	set initialDecimal(new_value) {
		this.__initialDecimal = new_value;
	}

	// The value that should be defaulted when initially rendering the questionnaire for user input.
	get initialInteger() {
		return this.__initialInteger;
	}

	set initialInteger(new_value) {
		this.__initialInteger = new_value;
	}

	// The value that should be defaulted when initially rendering the questionnaire for user input.
	get initialDate() {
		return this.__initialDate;
	}

	set initialDate(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field initialDate`);
		}
		this.__initialDate = new_value;
	}

	// The value that should be defaulted when initially rendering the questionnaire for user input.
	get initialDateTime() {
		return this.__initialDateTime;
	}

	set initialDateTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field initialDateTime`);
		}
		this.__initialDateTime = new_value;
	}

	// The value that should be defaulted when initially rendering the questionnaire for user input.
	get initialTime() {
		return this.__initialTime;
	}

	set initialTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = TimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field initialTime`);
		}
		this.__initialTime = new_value;
	}

	// The value that should be defaulted when initially rendering the questionnaire for user input.
	get initialString() {
		return this.__initialString;
	}

	set initialString(new_value) {
		this.__initialString = new_value;
	}

	// The value that should be defaulted when initially rendering the questionnaire for user input.
	get initialUri() {
		return this.__initialUri;
	}

	set initialUri(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field initialUri`);
		}
		this.__initialUri = new_value;
	}

	// The value that should be defaulted when initially rendering the questionnaire for user input.
	get initialAttachment() {
		return this.__initialAttachment;
	}

	set initialAttachment(new_value) {
		const Attachment = require('./Attachment');
		this.__initialAttachment = new Attachment(new_value);
	}

	// The value that should be defaulted when initially rendering the questionnaire for user input.
	get initialCoding() {
		return this.__initialCoding;
	}

	set initialCoding(new_value) {
		const Coding = require('./Coding');
		this.__initialCoding = new Coding(new_value);
	}

	// The value that should be defaulted when initially rendering the questionnaire for user input.
	get initialQuantity() {
		return this.__initialQuantity;
	}

	set initialQuantity(new_value) {
		const Quantity = require('./Quantity');
		this.__initialQuantity = new Quantity(new_value);
	}

	// The value that should be defaulted when initially rendering the questionnaire for user input.
	get initialReference() {
		return this.__initialReference;
	}

	set initialReference(new_value) {
		const Reference = require('./Reference');
		this.__initialReference = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			linkId: this.__linkId,
			definition: this.__definition,
			code: this.__code && this.__code.map(v => v.toJSON()),
			prefix: this.__prefix,
			text: this.__text,
			type: this.__type,
			enableWhen: this.__enableWhen && this.__enableWhen.map(v => v.toJSON()),
			required: this.__required,
			repeats: this.__repeats,
			readOnly: this.__readOnly,
			maxLength: this.__maxLength,
			options: this.__options && this.__options.toJSON(),
			option: this.__option && this.__option.map(v => v.toJSON()),
			initialBoolean: this.__initialBoolean,
			initialDecimal: this.__initialDecimal,
			initialInteger: this.__initialInteger,
			initialDate: this.__initialDate,
			initialDateTime: this.__initialDateTime,
			initialTime: this.__initialTime,
			initialString: this.__initialString,
			initialUri: this.__initialUri,
			initialAttachment: this.__initialAttachment && this.__initialAttachment.toJSON(),
			initialCoding: this.__initialCoding && this.__initialCoding.toJSON(),
			initialQuantity: this.__initialQuantity && this.__initialQuantity.toJSON(),
			initialReference: this.__initialReference && this.__initialReference.toJSON(),
		});
	}
}

module.exports = QuestionnaireItem;
