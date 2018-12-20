const BackboneElement = require('./BackboneElement');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class AllergyIntoleranceReaction extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'AllergyIntoleranceReaction';
		Object.assign(this, opt);
	}

	// This is a AllergyIntoleranceReaction resource
	static get __resourceType() {
		return 'AllergyIntoleranceReaction';
	}

	// Identification of the specific substance (or pharmaceutical product) considered to be responsible for the Adverse Reaction event. Note: the substance for a specific reaction may be different from the substance identified as the cause of the risk, but it must be consistent with it. For instance, it may be a more specific substance (e.g. a brand medication) or a composite product that includes the identified substance. It must be clinically safe to only process the \'code\' and ignore the \'reaction.substance\'.
	get substance() {
		return this.__substance;
	}

	set substance(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__substance = new CodeableConcept(new_value);
	}

	// Clinical symptoms and/or signs that are observed or associated with the adverse reaction event.
	get manifestation() {
		return this.__manifestation;
	}

	set manifestation(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__manifestation = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Text description about the reaction as a whole, including details of the manifestation if required.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// Record of the date and/or time of the onset of the Reaction.
	get onset() {
		return this.__onset;
	}

	set onset(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field onset`);
		}
		this.__onset = new_value;
	}

	// Clinical assessment of the severity of the reaction event as a whole, potentially considering multiple different manifestations.
	get severity() {
		return this.__severity;
	}

	set severity(new_value) {
		this.__severity = new_value;
	}

	// Identification of the route by which the subject was exposed to the substance.
	get exposureRoute() {
		return this.__exposureRoute;
	}

	set exposureRoute(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__exposureRoute = new CodeableConcept(new_value);
	}

	// Additional text about the adverse reaction event not captured in other fields.
	get note() {
		return this.__note;
	}

	set note(new_value) {
		const Annotation = require('./Annotation');
		this.__note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			substance: this.__substance && this.__substance.toJSON(),
			manifestation: this.__manifestation && this.__manifestation.map(v => v.toJSON()),
			description: this.__description,
			onset: this.__onset,
			severity: this.__severity,
			exposureRoute: this.__exposureRoute && this.__exposureRoute.toJSON(),
			note: this.__note && this.__note.map(v => v.toJSON()),
		});
	}
}

module.exports = AllergyIntoleranceReaction;
