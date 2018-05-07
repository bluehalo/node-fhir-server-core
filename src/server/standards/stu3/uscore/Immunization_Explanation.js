const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');

class Immunization_Explanation extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Immunization_Explanation';
	}

	// Reasons why a vaccine was administered.
	get reason () {
		return this._reason;
	}

	set reason ( new_value ) {
		this._reason = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Reason why a vaccine was not administered.
	get reasonNotGiven () {
		return this._reasonNotGiven;
	}

	set reasonNotGiven ( new_value ) {
		this._reasonNotGiven = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			reason: this._reason,
			reasonNotGiven: this._reasonNotGiven
		});
	}

}

module.exports = Immunization_Explanation;
