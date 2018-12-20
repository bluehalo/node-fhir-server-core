const BackboneElement = require('./BackboneElement');

class LocationPosition extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'LocationPosition';
		Object.assign(this, opt);
	}

	// This is a LocationPosition resource
	static get __resourceType() {
		return 'LocationPosition';
	}

	// Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see notes below).
	get longitude() {
		return this.__longitude;
	}

	set longitude(new_value) {
		this.__longitude = new_value;
	}

	// Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes below).
	get latitude() {
		return this.__latitude;
	}

	set latitude(new_value) {
		this.__latitude = new_value;
	}

	// Altitude. The value domain and the interpretation are the same as for the text of the altitude element in KML (see notes below).
	get altitude() {
		return this.__altitude;
	}

	set altitude(new_value) {
		this.__altitude = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			longitude: this.__longitude,
			latitude: this.__latitude,
			altitude: this.__altitude,
		});
	}
}

module.exports = LocationPosition;
