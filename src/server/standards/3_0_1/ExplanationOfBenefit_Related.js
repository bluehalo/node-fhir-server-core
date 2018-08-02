const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');
const Identifier = require('./Identifier');

class ExplanationOfBenefit_Related extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ExplanationOfBenefit_Related';
	}

	// Other claims which are related to this claim such as prior claim versions or for related services.
	get claim () {
		return this._claim;
	}

	set claim ( new_value ) {
		this._claim = new Reference(new_value);
	}

	// For example prior or umbrella.
	get relationship () {
		return this._relationship;
	}

	set relationship ( new_value ) {
		this._relationship = new CodeableConcept(new_value);
	}

	// An alternate organizational reference to the case or file to which this particular claim pertains - eg Property/Casualy insurer claim # or Workers Compensation case # .
	get reference () {
		return this._reference;
	}

	set reference ( new_value ) {
		this._reference = new Identifier(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			claim: this._claim && this._claim.toJSON(),
			relationship: this._relationship && this._relationship.toJSON(),
			reference: this._reference && this._reference.toJSON()
		});
	}

}

module.exports = ExplanationOfBenefit_Related;
