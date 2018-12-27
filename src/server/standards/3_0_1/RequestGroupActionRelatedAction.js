const BackboneElement = require('./BackboneElement');
const IdScalar = require('./scalars/Id.scalar');

class RequestGroupActionRelatedAction extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'RequestGroupActionRelatedAction';
		Object.assign(this, opt);
	}

	// This is a RequestGroupActionRelatedAction resource
	static get __resourceType() {
		return 'RequestGroupActionRelatedAction';
	}

	// The element id of the action this is related to.
	get actionId() {
		return this.__actionId;
	}

	set actionId(new_value) {
		// Throw if new value does not match the pattern
		let pattern = IdScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field actionId`);
		}
		this.__actionId = new_value;
	}

	// The relationship of this action to the related action.
	get relationship() {
		return this.__relationship;
	}

	set relationship(new_value) {
		this.__relationship = new_value;
	}

	// A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
	get offsetDuration() {
		return this.__offsetDuration;
	}

	set offsetDuration(new_value) {
		const Duration = require('./Duration');
		this.__offsetDuration = new Duration(new_value);
	}

	// A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
	get offsetRange() {
		return this.__offsetRange;
	}

	set offsetRange(new_value) {
		const Range = require('./Range');
		this.__offsetRange = new Range(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			actionId: this.__actionId,
			relationship: this.__relationship,
			offsetDuration: this.__offsetDuration && this.__offsetDuration.toJSON(),
			offsetRange: this.__offsetRange && this.__offsetRange.toJSON(),
		});
	}
}

module.exports = RequestGroupActionRelatedAction;
