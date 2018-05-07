const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');

class DiagnosticReport_Performer extends BackboneElement {

	constructor ( opts ) {
		super();
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
		this._role = new CodeableConcept(new_value);
	}

	// The reference to the  practitioner or organization involved in producing the report. For example, the diagnostic service that is responsible for issuing the report.
	get actor () {
		return this._actor;
	}

	set actor ( new_value ) {
		this._actor = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			role: this._role,
			actor: this._actor
		});
	}

}

module.exports = DiagnosticReport_Performer;
