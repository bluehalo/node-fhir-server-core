const BackboneElement = require('./BackboneElement');
const ExpansionProfile_Designation2 = require('./ExpansionProfile_Designation2');

class ExpansionProfile_Exclude extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ExpansionProfile_Exclude';
	}

	// A data group for each designation to be excluded.
	get designation () {
		return this._designation;
	}

	set designation ( new_value ) {
		this._designation = Array.isArray(new_value) ? new_value.map(val => new ExpansionProfile_Designation2(val)) : [new ExpansionProfile_Designation2(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			designation: this._designation
		});
	}

}

module.exports = ExpansionProfile_Exclude;
