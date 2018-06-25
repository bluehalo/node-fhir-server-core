const BackboneElement = require('./BackboneElement');
const Duration = require('./Duration');
const Range = require('./Range');

class RequestGroup_RelatedAction extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'RequestGroup_RelatedAction';
	}

	// The element id of the action this is related to.
	get actionId () {
		return this._actionId;
	}

	set actionId ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[A-Za-z0-9\-\.]{1,64}/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field actionId`);
		}
		this._actionId = new_value;
	}

	// The relationship of this action to the related action.
	get relationship () {
		return this._relationship;
	}

	set relationship ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field relationship`);
		}
		this._relationship = new_value;
	}

	// A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
	get offsetDuration () {
		return this._offsetDuration;
	}

	set offsetDuration ( new_value ) {
		this._offsetDuration = new Duration(new_value);
	}

	// A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
	get offsetRange () {
		return this._offsetRange;
	}

	set offsetRange ( new_value ) {
		this._offsetRange = new Range(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			actionId: this._actionId,
			relationship: this._relationship,
			offsetDuration: this._offsetDuration,
			offsetRange: this._offsetRange
		});
	}

}

module.exports = RequestGroup_RelatedAction;
