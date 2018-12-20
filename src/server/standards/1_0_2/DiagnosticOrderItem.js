const BackboneElement = require('./BackboneElement');

class DiagnosticOrderItem extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'DiagnosticOrderItem';
		Object.assign(this, opt);
	}

	// This is a DiagnosticOrderItem resource
	static get __resourceType() {
		return 'DiagnosticOrderItem';
	}

	// A code that identifies a particular diagnostic investigation, or panel of investigations, that have been requested.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	// If the item is related to a specific specimen.
	get specimen() {
		return this.__specimen;
	}

	set specimen(new_value) {
		const Reference = require('./Reference');
		this.__specimen = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Anatomical location where the request test should be performed.  This is the target site.
	get bodySite() {
		return this.__bodySite;
	}

	set bodySite(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__bodySite = new CodeableConcept(new_value);
	}

	// The status of this individual item within the order.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			code: this.__code && this.__code.toJSON(),
			specimen: this.__specimen && this.__specimen.map(v => v.toJSON()),
			bodySite: this.__bodySite && this.__bodySite.toJSON(),
			status: this.__status,
		});
	}
}

module.exports = DiagnosticOrderItem;
