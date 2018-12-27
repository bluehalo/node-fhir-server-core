const BackboneElement = require('./BackboneElement');

class DocumentReferenceContext extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'DocumentReferenceContext';
		Object.assign(this, opt);
	}

	// This is a DocumentReferenceContext resource
	static get __resourceType() {
		return 'DocumentReferenceContext';
	}

	// Describes the clinical encounter or type of care that the document content is associated with.
	get encounter() {
		return this.__encounter;
	}

	set encounter(new_value) {
		const Reference = require('./Reference');
		this.__encounter = new Reference(new_value);
	}

	// This list of codes represents the main clinical acts, such as a colonoscopy or an appendectomy, being documented. In some cases, the event is inherent in the typeCode, such as a \'History and Physical Report\' in which the procedure being documented is necessarily a \'History and Physical\' act.
	get event() {
		return this.__event;
	}

	set event(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__event = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// The time period over which the service that is described by the document was provided.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
	}

	// The kind of facility where the patient was seen.
	get facilityType() {
		return this.__facilityType;
	}

	set facilityType(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__facilityType = new CodeableConcept(new_value);
	}

	// This property may convey specifics about the practice setting where the content was created, often reflecting the clinical specialty.
	get practiceSetting() {
		return this.__practiceSetting;
	}

	set practiceSetting(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__practiceSetting = new CodeableConcept(new_value);
	}

	// The Patient Information as known when the document was published. May be a reference to a version specific, or contained.
	get sourcePatientInfo() {
		return this.__sourcePatientInfo;
	}

	set sourcePatientInfo(new_value) {
		const Reference = require('./Reference');
		this.__sourcePatientInfo = new Reference(new_value);
	}

	// Related identifiers or resources associated with the DocumentReference.
	get related() {
		return this.__related;
	}

	set related(new_value) {
		const DocumentReferenceContextRelated = require('./DocumentReferenceContextRelated');
		this.__related = Array.isArray(new_value)
			? new_value.map(val => new DocumentReferenceContextRelated(val))
			: [new DocumentReferenceContextRelated(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			encounter: this.__encounter && this.__encounter.toJSON(),
			event: this.__event && this.__event.map(v => v.toJSON()),
			period: this.__period && this.__period.toJSON(),
			facilityType: this.__facilityType && this.__facilityType.toJSON(),
			practiceSetting: this.__practiceSetting && this.__practiceSetting.toJSON(),
			sourcePatientInfo: this.__sourcePatientInfo && this.__sourcePatientInfo.toJSON(),
			related: this.__related && this.__related.map(v => v.toJSON()),
		});
	}
}

module.exports = DocumentReferenceContext;
