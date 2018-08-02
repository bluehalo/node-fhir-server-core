const BackboneElement = require('./BackboneElement');
const ExpansionProfile_Designation1 = require('./ExpansionProfile_Designation1');

class ExpansionProfile_Include extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ExpansionProfile_Include';
	}

	// A data group for each designation to be included.
	get designation () {
		return this._designation;
	}

	set designation ( new_value ) {
		this._designation = Array.isArray(new_value) ? new_value.map(val => new ExpansionProfile_Designation1(val)) : [new ExpansionProfile_Designation1(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			designation: this._designation && this._designation.map(v => v.toJSON())
		});
	}

}

module.exports = ExpansionProfile_Include;
