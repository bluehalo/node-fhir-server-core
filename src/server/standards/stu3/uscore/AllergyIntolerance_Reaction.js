const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Annotation = require('./Annotation');

class AllergyIntolerance_Reaction extends BackboneElement {

	constructor ( opts ) {
		super();
		this._resourceType = 'AllergyIntolerance_Reaction';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'AllergyIntolerance_Reaction';
	}

	// Identification of the specific substance (or pharmaceutical product) considered to be responsible for the Adverse Reaction event. Note: the substance for a specific reaction may be different from the substance identified as the cause of the risk, but it must be consistent with it. For instance, it may be a more specific substance (e.g. a brand medication) or a composite product that includes the identified substance. It must be clinically safe to only process the 'code' and ignore the 'reaction.substance'.
	get substance () {
		return this._substance;
	}

	set substance ( new_value ) {
		this._substance = new CodeableConcept(new_value);
	}

	// Clinical symptoms and/or signs that are observed or associated with the adverse reaction event.
	get manifestation () {
		return this._manifestation;
	}

	set manifestation ( new_value ) {
		this._manifestation = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Text description about the reaction as a whole, including details of the manifestation if required.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// Record of the date and/or time of the onset of the Reaction.
	get onset () {
		return this._onset;
	}

	set onset ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field onset`);
		}
		this._onset = new_value;
	}

	// Clinical assessment of the severity of the reaction event as a whole, potentially considering multiple different manifestations.
	get severity () {
		return this._severity;
	}

	set severity ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['mild', 'moderate', 'severe'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field severity`);
		}
		this._severity = new_value;
	}

	// Identification of the route by which the subject was exposed to the substance.
	get exposureRoute () {
		return this._exposureRoute;
	}

	set exposureRoute ( new_value ) {
		this._exposureRoute = new CodeableConcept(new_value);
	}

	// Additional text about the adverse reaction event not captured in other fields.
	get note () {
		return this._note;
	}

	set note ( new_value ) {
		this._note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			substance: this._substance,
			manifestation: this._manifestation,
			description: this._description,
			onset: this._onset,
			severity: this._severity,
			exposureRoute: this._exposureRoute,
			note: this._note
		});
	}

}

module.exports = AllergyIntolerance_Reaction;
