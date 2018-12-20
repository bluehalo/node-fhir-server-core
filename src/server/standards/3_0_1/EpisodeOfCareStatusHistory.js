const BackboneElement = require('./BackboneElement');

class EpisodeOfCareStatusHistory extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'EpisodeOfCareStatusHistory';
		Object.assign(this, opt);
	}

	// This is a EpisodeOfCareStatusHistory resource
	static get __resourceType() {
		return 'EpisodeOfCareStatusHistory';
	}

	// planned | waitlist | active | onhold | finished | cancelled.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// The period during this EpisodeOfCare that the specific status applied.
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

module.exports = EpisodeOfCareStatusHistory;
