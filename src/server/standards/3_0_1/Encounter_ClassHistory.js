const BackboneElement = require('./BackboneElement');
const Coding = require('./Coding');
const Period = require('./Period');

class Encounter_ClassHistory extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Encounter_ClassHistory';
	}

	// inpatient | outpatient | ambulatory | emergency +.
	get class () {
		return this._class;
	}

	set class ( new_value ) {
		this._class = new Coding(new_value);
	}

	// The time that the episode was in the specified class.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		this._period = new Period(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			class: this._class && this._class.toJSON(),
			period: this._period && this._period.toJSON()
		});
	}

}

module.exports = Encounter_ClassHistory;
