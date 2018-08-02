const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');

class ExplanationOfBenefit_Payee extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ExplanationOfBenefit_Payee';
	}

	// Type of Party to be reimbursed: Subscriber, provider, other.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new CodeableConcept(new_value);
	}

	// organization | patient | practitioner | relatedperson.
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		this._resourceType = new CodeableConcept(new_value);
	}

	// Party to be reimbursed: Subscriber, provider, other.
	get party () {
		return this._party;
	}

	set party ( new_value ) {
		this._party = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this._type && this._type.toJSON(),
			resourceType: this._resourceType && this._resourceType.toJSON(),
			party: this._party && this._party.toJSON()
		});
	}

}

module.exports = ExplanationOfBenefit_Payee;
