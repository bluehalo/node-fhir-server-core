const BackboneElement = require('./BackboneElement');
const ExpansionProfile_Include = require('./ExpansionProfile_Include');
const ExpansionProfile_Exclude = require('./ExpansionProfile_Exclude');

class ExpansionProfile_Designation extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ExpansionProfile_Designation';
	}

	// Designations to be included.
	get include () {
		return this._include;
	}

	set include ( new_value ) {
		this._include = new ExpansionProfile_Include(new_value);
	}

	// Designations to be excluded.
	get exclude () {
		return this._exclude;
	}

	set exclude ( new_value ) {
		this._exclude = new ExpansionProfile_Exclude(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			include: this._include,
			exclude: this._exclude
		});
	}

}

module.exports = ExpansionProfile_Designation;
