const BackboneElement = require('./BackboneElement');
const Period = require('./Period');

class EpisodeOfCare_StatusHistory extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'EpisodeOfCare_StatusHistory';
	}

	// planned | waitlist | active | onhold | finished | cancelled.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['planned', 'waitlist', 'active', 'onhold', 'finished', 'cancelled', 'entered-in-error'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// The period during this EpisodeOfCare that the specific status applied.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		this._period = new Period(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			status: this._status,
			period: this._period
		});
	}

}

module.exports = EpisodeOfCare_StatusHistory;
