const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');
const Period = require('./Period');
const DocumentReference_Related = require('./DocumentReference_Related');

class DocumentReference_Context extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'DocumentReference_Context';
	}

	// Describes the clinical encounter or type of care that the document content is associated with.
	get encounter () {
		return this._encounter;
	}

	set encounter ( new_value ) {
		this._encounter = new Reference(new_value);
	}

	// This list of codes represents the main clinical acts, such as a colonoscopy or an appendectomy, being documented. In some cases, the event is inherent in the typeCode, such as a "History and Physical Report" in which the procedure being documented is necessarily a "History and Physical" act.
	get event () {
		return this._event;
	}

	set event ( new_value ) {
		this._event = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// The time period over which the service that is described by the document was provided.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		this._period = new Period(new_value);
	}

	// The kind of facility where the patient was seen.
	get facilityType () {
		return this._facilityType;
	}

	set facilityType ( new_value ) {
		this._facilityType = new CodeableConcept(new_value);
	}

	// This property may convey specifics about the practice setting where the content was created, often reflecting the clinical specialty.
	get practiceSetting () {
		return this._practiceSetting;
	}

	set practiceSetting ( new_value ) {
		this._practiceSetting = new CodeableConcept(new_value);
	}

	// The Patient Information as known when the document was published. May be a reference to a version specific, or contained.
	get sourcePatientInfo () {
		return this._sourcePatientInfo;
	}

	set sourcePatientInfo ( new_value ) {
		this._sourcePatientInfo = new Reference(new_value);
	}

	// Related identifiers or resources associated with the DocumentReference.
	get related () {
		return this._related;
	}

	set related ( new_value ) {
		this._related = Array.isArray(new_value) ? new_value.map(val => new DocumentReference_Related(val)) : [new DocumentReference_Related(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			encounter: this._encounter && this._encounter.toJSON(),
			event: this._event && this._event.map(v => v.toJSON()),
			period: this._period && this._period.toJSON(),
			facilityType: this._facilityType && this._facilityType.toJSON(),
			practiceSetting: this._practiceSetting && this._practiceSetting.toJSON(),
			sourcePatientInfo: this._sourcePatientInfo && this._sourcePatientInfo.toJSON(),
			related: this._related && this._related.map(v => v.toJSON())
		});
	}

}

module.exports = DocumentReference_Context;
