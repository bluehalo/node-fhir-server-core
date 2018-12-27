const BackboneElement = require('./BackboneElement');

class DiagnosticReportPerformer extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'DiagnosticReportPerformer';
		Object.assign(this, opt);
	}

	// This is a DiagnosticReportPerformer resource
	static get __resourceType() {
		return 'DiagnosticReportPerformer';
	}

	// Describes the type of participation (e.g.  a responsible party, author, or verifier).
	get role() {
		return this.__role;
	}

	set role(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__role = new CodeableConcept(new_value);
	}

	// The reference to the  practitioner or organization involved in producing the report. For example, the diagnostic service that is responsible for issuing the report.
	get actor() {
		return this.__actor;
	}

	set actor(new_value) {
		const Reference = require('./Reference');
		this.__actor = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			role: this.__role && this.__role.toJSON(),
			actor: this.__actor && this.__actor.toJSON(),
		});
	}
}

module.exports = DiagnosticReportPerformer;
