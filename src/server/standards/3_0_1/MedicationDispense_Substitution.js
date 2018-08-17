const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');

class MedicationDispense_Substitution extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'MedicationDispense_Substitution';
	}

	// True if the dispenser dispensed a different drug or product from what was prescribed.
	get wasSubstituted () {
		return this._wasSubstituted;
	}

	set wasSubstituted ( new_value ) {
		this._wasSubstituted = new_value;
	}

	// A code signifying whether a different drug was dispensed from what was prescribed.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new CodeableConcept(new_value);
	}

	// Indicates the reason for the substitution of (or lack of substitution) from what was prescribed.
	get reason () {
		return this._reason;
	}

	set reason ( new_value ) {
		this._reason = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// The person or organization that has primary responsibility for the substitution.
	get responsibleParty () {
		return this._responsibleParty;
	}

	set responsibleParty ( new_value ) {
		this._responsibleParty = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			wasSubstituted: this._wasSubstituted,
			type: this._type && this._type.toJSON(),
			reason: this._reason && this._reason.map(v => v.toJSON()),
			responsibleParty: this._responsibleParty && this._responsibleParty.map(v => v.toJSON())
		});
	}

}

module.exports = MedicationDispense_Substitution;
