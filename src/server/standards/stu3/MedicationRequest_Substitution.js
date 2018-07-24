const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');

class MedicationRequest_Substitution extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'MedicationRequest_Substitution';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'MedicationRequest_Substitution';
	}

	// True if the prescriber allows a different drug to be dispensed from what was prescribed.
	get allowed () {
		return this._allowed;
	}

	set allowed ( new_value ) {
		this._allowed = new_value;
	}

	// Indicates the reason for the substitution, or why substitution must or must not be performed.
	get reason () {
		return this._reason;
	}

	set reason ( new_value ) {
		this._reason = new CodeableConcept(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			allowed: this._allowed,
			reason: this._reason && this._reason.toJSON()
		});
	}

}

module.exports = MedicationRequest_Substitution;
