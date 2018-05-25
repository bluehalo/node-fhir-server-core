const BackboneElement = require('./BackboneElement');
const Period = require('./Period');
const Consent_Actor1 = require('./Consent_Actor1');
const CodeableConcept = require('./CodeableConcept');
const Coding = require('./Coding');
const Consent_Data1 = require('./Consent_Data1');

class Consent_Except extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Consent_Except';
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
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
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
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._period = new Period(new_value);
	}

	// Who or what is controlled by this Exception. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
	get actor () {
		return this._actor;
	}

	set actor ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._actor = Array.isArray(new_value) ? new_value.map(val => new Consent_Actor1(val)) : [new Consent_Actor1(new_value)];
	}

	// Actions controlled by this Exception.
	get action () {
		return this._action;
	}

	set action ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._action = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// A set of security labels that define which resources are controlled by this exception. If more than one label is specified, all resources must have all the specified labels.
	get securityLabel () {
		return this._securityLabel;
	}

	set securityLabel ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._securityLabel = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// The context of the activities a user is taking - why the user is accessing the data - that are controlled by this exception.
	get purpose () {
		return this._purpose;
	}

	set purpose ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._purpose = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// The class of information covered by this exception. The type can be a FHIR resource type, a profile on a type, or a CDA document, or some other type that indicates what sort of information the consent relates to.
	get class () {
		return this._class;
	}

	set class ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._class = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// If this code is found in an instance, then the exception applies.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._code = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// Clinical or Operational Relevant period of time that bounds the data controlled by this exception.
	get dataPeriod () {
		return this._dataPeriod;
	}

	set dataPeriod ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._dataPeriod = new Period(new_value);
	}

	// The resources controlled by this exception, if specific resources are referenced.
	get data () {
		return this._data;
	}

	set data ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._data = Array.isArray(new_value) ? new_value.map(val => new Consent_Data1(val)) : [new Consent_Data1(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this.type,
			period: this.period && this.period.toJSON(),
			actor: this.actor && this.actor.map(v => v.toJSON()),
			action: this.action && this.action.map(v => v.toJSON()),
			securityLabel: this.securityLabel && this.securityLabel.map(v => v.toJSON()),
			purpose: this.purpose && this.purpose.map(v => v.toJSON()),
			class: this.class && this.class.map(v => v.toJSON()),
			code: this.code && this.code.map(v => v.toJSON()),
			dataPeriod: this.dataPeriod && this.dataPeriod.toJSON(),
			data: this.data && this.data.map(v => v.toJSON())
		});
	}

}

module.exports = Consent_Except;
