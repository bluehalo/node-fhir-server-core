const BackboneElement = require('./BackboneElement');

class TestReport_Participant extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'TestReport_Participant';
	}

	// The type of participant.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['test-engine', 'client', 'server'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field type`);
		}
		this._type = new_value;
	}

	// The uri of the participant. An absolute URL is preferred.
	get uri () {
		return this._uri;
	}

	set uri ( new_value ) {
		this._uri = new_value;
	}

	// The display name of the participant.
	get display () {
		return this._display;
	}

	set display ( new_value ) {
		this._display = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this._type,
			uri: this._uri,
			display: this._display
		});
	}

}

module.exports = TestReport_Participant;
