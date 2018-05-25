const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');

class Procedure_Performer extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Procedure_Performer';
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
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._role = new CodeableConcept(new_value);
	}

	// The practitioner who was involved in the procedure.
	get actor () {
		return this._actor;
	}

	set actor ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._actor = new Reference(new_value);
	}

	// The organization the device or practitioner was acting on behalf of.
	get onBehalfOf () {
		return this._onBehalfOf;
	}

	set onBehalfOf ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._onBehalfOf = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			role: this.role && this.role.toJSON(),
			actor: this.actor && this.actor.toJSON(),
			onBehalfOf: this.onBehalfOf && this.onBehalfOf.toJSON()
		});
	}

}

module.exports = Procedure_Performer;
