const BackboneElement = require('./BackboneElement');
const Identifier = require('./Identifier');

class Measure_Stratifier extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Measure_Stratifier';
	}

	// The identifier for the stratifier used to coordinate the reported data back to this stratifier.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	// The criteria for the stratifier. This must be the name of an expression defined within a referenced library.
	get criteria () {
		return this._criteria;
	}

	set criteria ( new_value ) {
		this._criteria = new_value;
	}

	// The path to an element that defines the stratifier, specified as a valid FHIR resource path.
	get path () {
		return this._path;
	}

	set path ( new_value ) {
		this._path = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			identifier: this._identifier,
			criteria: this._criteria,
			path: this._path
		});
	}

}

module.exports = Measure_Stratifier;
