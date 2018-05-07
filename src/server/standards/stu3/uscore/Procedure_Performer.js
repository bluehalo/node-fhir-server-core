const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');

class Procedure_Performer extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Procedure_Performer';
	}

	// For example: surgeon, anaethetist, endoscopist.
	get role () {
		return this._role;
	}

	set role ( new_value ) {
		this._role = new CodeableConcept(new_value);
	}

	// The practitioner who was involved in the procedure.
	get actor () {
		return this._actor;
	}

	set actor ( new_value ) {
		this._actor = new Reference(new_value);
	}

	// The organization the device or practitioner was acting on behalf of.
	get onBehalfOf () {
		return this._onBehalfOf;
	}

	set onBehalfOf ( new_value ) {
		this._onBehalfOf = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			role: this._role,
			actor: this._actor,
			onBehalfOf: this._onBehalfOf
		});
	}

}

module.exports = Procedure_Performer;
