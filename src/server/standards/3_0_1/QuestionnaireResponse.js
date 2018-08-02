const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const QuestionnaireResponse_Item = require('./QuestionnaireResponse_Item');

class QuestionnaireResponse extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'QuestionnaireResponse';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'QuestionnaireResponse';
	}

	// This is a QuestionnaireResponse resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['QuestionnaireResponse'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// A business identifier assigned to a particular completed (or partially completed) questionnaire.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	// The order, proposal or plan that is fulfilled in whole or in part by this QuestionnaireResponse.  For example, a ProcedureRequest seeking an intake assessment or a decision support recommendation to assess for post-partum depression.
	get basedOn () {
		return this._basedOn;
	}

	set basedOn ( new_value ) {
		this._basedOn = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A procedure or observation that this questionnaire was performed as part of the execution of.  For example, the surgery a checklist was executed as part of.
	get parent () {
		return this._parent;
	}

	set parent ( new_value ) {
		this._parent = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The Questionnaire that defines and organizes the questions for which answers are being provided.
	get questionnaire () {
		return this._questionnaire;
	}

	set questionnaire ( new_value ) {
		this._questionnaire = new Reference(new_value);
	}

	// The position of the questionnaire response within its overall lifecycle.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['in-progress', 'completed', 'amended', 'entered-in-error', 'stopped'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// The subject of the questionnaire response.  This could be a patient, organization, practitioner, device, etc.  This is who/what the answers apply to, but is not necessarily the source of information.
	get subject () {
		return this._subject;
	}

	set subject ( new_value ) {
		this._subject = new Reference(new_value);
	}

	// The encounter or episode of care with primary association to the questionnaire response.
	get context () {
		return this._context;
	}

	set context ( new_value ) {
		this._context = new Reference(new_value);
	}

	// The date and/or time that this set of answers were last changed.
	get authored () {
		return this._authored;
	}

	set authored ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field authored`);
		}
		this._authored = new_value;
	}

	// Person who received the answers to the questions in the QuestionnaireResponse and recorded them in the system.
	get author () {
		return this._author;
	}

	set author ( new_value ) {
		this._author = new Reference(new_value);
	}

	// The person who answered the questions about the subject.
	get source () {
		return this._source;
	}

	set source ( new_value ) {
		this._source = new Reference(new_value);
	}

	// A group or question item from the original questionnaire for which answers are provided.
	get item () {
		return this._item;
	}

	set item ( new_value ) {
		this._item = Array.isArray(new_value) ? new_value.map(val => new QuestionnaireResponse_Item(val)) : [new QuestionnaireResponse_Item(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier && this._identifier.toJSON(),
			basedOn: this._basedOn && this._basedOn.map(v => v.toJSON()),
			parent: this._parent && this._parent.map(v => v.toJSON()),
			questionnaire: this._questionnaire && this._questionnaire.toJSON(),
			status: this._status,
			subject: this._subject && this._subject.toJSON(),
			context: this._context && this._context.toJSON(),
			authored: this._authored,
			author: this._author && this._author.toJSON(),
			source: this._source && this._source.toJSON(),
			item: this._item && this._item.map(v => v.toJSON())
		});
	}

}

module.exports = QuestionnaireResponse;
