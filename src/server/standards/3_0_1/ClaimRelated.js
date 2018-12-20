const BackboneElement = require('./BackboneElement');

class ClaimRelated extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ClaimRelated';
		Object.assign(this, opt);
	}

	// This is a ClaimRelated resource
	static get __resourceType() {
		return 'ClaimRelated';
	}

	// Other claims which are related to this claim such as prior claim versions or for related services.
	get claim() {
		return this.__claim;
	}

	set claim(new_value) {
		const Reference = require('./Reference');
		this.__claim = new Reference(new_value);
	}

	// For example prior or umbrella.
	get relationship() {
		return this.__relationship;
	}

	set relationship(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__relationship = new CodeableConcept(new_value);
	}

	// An alternate organizational reference to the case or file to which this particular claim pertains - eg Property/Casualy insurer claim # or Workers Compensation case # .
	get reference() {
		return this.__reference;
	}

	set reference(new_value) {
		const Identifier = require('./Identifier');
		this.__reference = new Identifier(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			claim: this.__claim && this.__claim.toJSON(),
			relationship: this.__relationship && this.__relationship.toJSON(),
			reference: this.__reference && this.__reference.toJSON(),
		});
	}
}

module.exports = ClaimRelated;
