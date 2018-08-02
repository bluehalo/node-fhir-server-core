const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');
const Period = require('./Period');

class Group_Member extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Group_Member';
	}

	// A reference to the entity that is a member of the group. Must be consistent with Group.type.
	get entity () {
		return this._entity;
	}

	set entity ( new_value ) {
		this._entity = new Reference(new_value);
	}

	// The period that the member was in the group, if known.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		this._period = new Period(new_value);
	}

	// A flag to indicate that the member is no longer in the group, but previously may have been a member.
	get inactive () {
		return this._inactive;
	}

	set inactive ( new_value ) {
		this._inactive = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			entity: this._entity && this._entity.toJSON(),
			period: this._period && this._period.toJSON(),
			inactive: this._inactive
		});
	}

}

module.exports = Group_Member;
