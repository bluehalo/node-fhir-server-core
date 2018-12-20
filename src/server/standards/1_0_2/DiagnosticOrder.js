const DomainResource = require('./DomainResource');

class DiagnosticOrder extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'DiagnosticOrder';
		Object.assign(this, opt);
	}

	// This is a DiagnosticOrder resource
	static get __resourceType() {
		return 'DiagnosticOrder';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__DiagnosticOrder = new_value;
	}

	// Who or what the investigation is to be performed on. This is usually a human patient, but diagnostic tests can also be requested on animals, groups of humans or animals, devices such as dialysis machines, or even locations (typically for environmental scans).
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// The practitioner that holds legal responsibility for ordering the investigation.
	get orderer() {
		return this.__orderer;
	}

	set orderer(new_value) {
		const Reference = require('./Reference');
		this.__orderer = new Reference(new_value);
	}

	// Identifiers assigned to this order instance by the orderer and/or  the receiver and/or order fulfiller.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// An encounter that provides additional information about the healthcare context in which this request is made.
	get encounter() {
		return this.__encounter;
	}

	set encounter(new_value) {
		const Reference = require('./Reference');
		this.__encounter = new Reference(new_value);
	}

	// An explanation or justification for why this diagnostic investigation is being requested.   This is often for billing purposes.  May relate to the resources referred to in supportingInformation.
	get reason() {
		return this.__reason;
	}

	set reason(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reason = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Additional clinical information about the patient or specimen that may influence test interpretations.  This includes observations explicitly requested by the producer(filler) to provide context or supporting information needed to complete the order.
	get supportingInformation() {
		return this.__supportingInformation;
	}

	set supportingInformation(new_value) {
		const Reference = require('./Reference');
		this.__supportingInformation = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// One or more specimens that the diagnostic investigation is about.
	get specimen() {
		return this.__specimen;
	}

	set specimen(new_value) {
		const Reference = require('./Reference');
		this.__specimen = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The status of the order.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// The clinical priority associated with this order.
	get priority() {
		return this.__priority;
	}

	set priority(new_value) {
		this.__priority = new_value;
	}

	// A summary of the events of interest that have occurred as the request is processed; e.g. when the order was made, various processing steps (specimens received), when it was completed.
	get event() {
		return this.__event;
	}

	set event(new_value) {
		const DiagnosticOrderEvent = require('./DiagnosticOrderEvent');
		this.__event = Array.isArray(new_value)
			? new_value.map(val => new DiagnosticOrderEvent(val))
			: [new DiagnosticOrderEvent(new_value)];
	}

	// The specific diagnostic investigations that are requested as part of this request. Sometimes, there can only be one item per request, but in most contexts, more than one investigation can be requested.
	get item() {
		return this.__item;
	}

	set item(new_value) {
		const DiagnosticOrderItem = require('./DiagnosticOrderItem');
		this.__item = Array.isArray(new_value)
			? new_value.map(val => new DiagnosticOrderItem(val))
			: [new DiagnosticOrderItem(new_value)];
	}

	// Any other notes associated with this patient, specimen or order (e.g. \'patient hates needles\').
	get note() {
		return this.__note;
	}

	set note(new_value) {
		const Annotation = require('./Annotation');
		this.__note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			subject: this.__subject && this.__subject.toJSON(),
			orderer: this.__orderer && this.__orderer.toJSON(),
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			encounter: this.__encounter && this.__encounter.toJSON(),
			reason: this.__reason && this.__reason.map(v => v.toJSON()),
			supportingInformation: this.__supportingInformation && this.__supportingInformation.map(v => v.toJSON()),
			specimen: this.__specimen && this.__specimen.map(v => v.toJSON()),
			status: this.__status,
			priority: this.__priority,
			event: this.__event && this.__event.map(v => v.toJSON()),
			item: this.__item && this.__item.map(v => v.toJSON()),
			note: this.__note && this.__note.map(v => v.toJSON()),
		});
	}
}

module.exports = DiagnosticOrder;
