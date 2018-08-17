const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');

class Composition_Attester extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Composition_Attester';
	}

	// The type of attestation the authenticator offers.
	get mode () {
		return this._mode;
	}

	set mode ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['personal', 'professional', 'legal', 'official'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field mode`);
		}
		this._mode = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// When the composition was attested by the party.
	get time () {
		return this._time;
	}

	set time ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field time`);
		}
		this._time = new_value;
	}

	// Who attested the composition in the specified way.
	get party () {
		return this._party;
	}

	set party ( new_value ) {
		this._party = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			mode: this._mode,
			time: this._time,
			party: this._party && this._party.toJSON()
		});
	}

}

module.exports = Composition_Attester;
