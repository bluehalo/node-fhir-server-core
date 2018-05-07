const BackboneElement = require('./BackboneElement');

class Location_Position extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Location_Position';
	}

	// Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see notes below).
	get longitude () {
		return this._longitude;
	}

	set longitude ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field longitude`);
		}
		this._longitude = new_value;
	}

	// Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes below).
	get latitude () {
		return this._latitude;
	}

	set latitude ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field latitude`);
		}
		this._latitude = new_value;
	}

	// Altitude. The value domain and the interpretation are the same as for the text of the altitude element in KML (see notes below).
	get altitude () {
		return this._altitude;
	}

	set altitude ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field altitude`);
		}
		this._altitude = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			longitude: this._longitude,
			latitude: this._latitude,
			altitude: this._altitude
		});
	}

}

module.exports = Location_Position;
