const BackboneElement = require('./BackboneElement');

class GroupMember extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'GroupMember';
		Object.assign(this, opt);
	}

	// This is a GroupMember resource
	static get __resourceType() {
		return 'GroupMember';
	}

	// A reference to the entity that is a member of the group. Must be consistent with Group.type.
	get entity() {
		return this.__entity;
	}

	set entity(new_value) {
		const Reference = require('./Reference');
		this.__entity = new Reference(new_value);
	}

	// The period that the member was in the group, if known.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
	}

	// A flag to indicate that the member is no longer in the group, but previously may have been a member.
	get inactive() {
		return this.__inactive;
	}

	set inactive(new_value) {
		this.__inactive = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			entity: this.__entity && this.__entity.toJSON(),
			period: this.__period && this.__period.toJSON(),
			inactive: this.__inactive,
		});
	}
}

module.exports = GroupMember;
