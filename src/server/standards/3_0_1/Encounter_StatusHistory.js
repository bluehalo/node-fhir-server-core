const BackboneElement = require('./BackboneElement');
const Period = require('./Period');

class Encounter_StatusHistory extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Encounter_StatusHistory';
	}

	// planned | arrived | triaged | in-progress | onleave | finished | cancelled +.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['planned', 'arrived', 'triaged', 'in-progress', 'onleave', 'finished', 'cancelled', 'entered-in-error', 'unknown'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// The time that the episode was in the specified status.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		this._period = new Period(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			status: this._status,
			period: this._period && this._period.toJSON()
		});
	}

}

module.exports = Encounter_StatusHistory;
