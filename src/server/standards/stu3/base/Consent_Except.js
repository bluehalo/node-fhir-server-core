const BackboneElement = require('./BackboneElement');
const Period = require('./Period');
const Consent_Actor1 = require('./Consent_Actor1');
const CodeableConcept = require('./CodeableConcept');
const Coding = require('./Coding');
const Consent_Data1 = require('./Consent_Data1');

class Consent_Except extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Consent_Except';
	}

	// Action  to take - permit or deny - when the exception conditions are met.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['deny', 'permit'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field type`);
		}
		this._type = new_value;
	}

	// The timeframe in this exception is valid.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		this._period = new Period(new_value);
	}

	// Who or what is controlled by this Exception. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
	get actor () {
		return this._actor;
	}

	set actor ( new_value ) {
		this._actor = Array.isArray(new_value) ? new_value.map(val => new Consent_Actor1(val)) : [new Consent_Actor1(new_value)];
	}

	// Actions controlled by this Exception.
	get action () {
		return this._action;
	}

	set action ( new_value ) {
		this._action = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// A set of security labels that define which resources are controlled by this exception. If more than one label is specified, all resources must have all the specified labels.
	get securityLabel () {
		return this._securityLabel;
	}

	set securityLabel ( new_value ) {
		this._securityLabel = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// The context of the activities a user is taking - why the user is accessing the data - that are controlled by this exception.
	get purpose () {
		return this._purpose;
	}

	set purpose ( new_value ) {
		this._purpose = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// The class of information covered by this exception. The type can be a FHIR resource type, a profile on a type, or a CDA document, or some other type that indicates what sort of information the consent relates to.
	get class () {
		return this._class;
	}

	set class ( new_value ) {
		this._class = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// If this code is found in an instance, then the exception applies.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		this._code = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// Clinical or Operational Relevant period of time that bounds the data controlled by this exception.
	get dataPeriod () {
		return this._dataPeriod;
	}

	set dataPeriod ( new_value ) {
		this._dataPeriod = new Period(new_value);
	}

	// The resources controlled by this exception, if specific resources are referenced.
	get data () {
		return this._data;
	}

	set data ( new_value ) {
		this._data = Array.isArray(new_value) ? new_value.map(val => new Consent_Data1(val)) : [new Consent_Data1(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this._type,
			period: this._period,
			actor: this._actor,
			action: this._action,
			securityLabel: this._securityLabel,
			purpose: this._purpose,
			class: this._class,
			code: this._code,
			dataPeriod: this._dataPeriod,
			data: this._data
		});
	}

}

module.exports = Consent_Except;
