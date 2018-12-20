const BackboneElement = require('./BackboneElement');

class EncounterStatusHistory extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'EncounterStatusHistory';
		Object.assign(this, opt);
	}

	// This is a EncounterStatusHistory resource
	static get __resourceType() {
		return 'EncounterStatusHistory';
	}

	// planned | arrived | in-progress | onleave | finished | cancelled.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// The time that the episode was in the specified status.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			status: this.__status,
			period: this.__period && this.__period.toJSON(),
		});
	}
}

module.exports = EncounterStatusHistory;
