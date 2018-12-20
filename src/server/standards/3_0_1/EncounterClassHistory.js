const BackboneElement = require('./BackboneElement');

class EncounterClassHistory extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'EncounterClassHistory';
		Object.assign(this, opt);
	}

	// This is a EncounterClassHistory resource
	static get __resourceType() {
		return 'EncounterClassHistory';
	}

	// inpatient | outpatient | ambulatory | emergency +.
	get class() {
		return this.__class;
	}

	set class(new_value) {
		const Coding = require('./Coding');
		this.__class = new Coding(new_value);
	}

	// The time that the episode was in the specified class.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			class: this.__class && this.__class.toJSON(),
			period: this.__period && this.__period.toJSON(),
		});
	}
}

module.exports = EncounterClassHistory;
