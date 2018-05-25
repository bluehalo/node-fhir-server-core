const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');

class DiagnosticReport_Performer extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'DiagnosticReport_Performer';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'DiagnosticReport_Performer';
	}

	// Describes the type of participation (e.g.  a responsible party, author, or verifier).
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

	// The reference to the  practitioner or organization involved in producing the report. For example, the diagnostic service that is responsible for issuing the report.
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

	toJSON () {
		return Object.assign(super.toJSON(), {
			role: this.role && this.role.toJSON(),
			actor: this.actor && this.actor.toJSON()
		});
	}

}

module.exports = DiagnosticReport_Performer;
