const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');

class Condition_Stage extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Condition_Stage';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Condition_Stage';
	}

	// A simple summary of the stage such as "Stage 3". The determination of the stage is disease-specific.
	get summary () {
		return this._summary;
	}

	set summary ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._summary = new CodeableConcept(new_value);
	}

	// Reference to a formal record of the evidence on which the staging assessment is based.
	get assessment () {
		return this._assessment;
	}

	set assessment ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._assessment = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			summary: this.summary && this.summary.toJSON(),
			assessment: this.assessment && this.assessment.map(v => v.toJSON())
		});
	}

}

module.exports = Condition_Stage;
