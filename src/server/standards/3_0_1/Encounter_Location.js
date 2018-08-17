const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');
const Period = require('./Period');

class Encounter_Location extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Encounter_Location';
	}

	// The location where the encounter takes place.
	get location () {
		return this._location;
	}

	set location ( new_value ) {
		this._location = new Reference(new_value);
	}

	// The status of the participants' presence at the specified location during the period specified. If the participant is is no longer at the location, then the period will have an end date/time.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['planned', 'active', 'reserved', 'completed'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// Time period during which the patient was present at the location.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		this._period = new Period(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			location: this._location && this._location.toJSON(),
			status: this._status,
			period: this._period && this._period.toJSON()
		});
	}

}

module.exports = Encounter_Location;
