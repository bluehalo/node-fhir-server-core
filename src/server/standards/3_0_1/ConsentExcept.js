const BackboneElement = require('./BackboneElement');

class ConsentExcept extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ConsentExcept';
		Object.assign(this, opt);
	}

	// This is a ConsentExcept resource
	static get __resourceType() {
		return 'ConsentExcept';
	}

	// Action  to take - permit or deny - when the exception conditions are met.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// The timeframe in this exception is valid.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
	}

	// Who or what is controlled by this Exception. Use group to identify a set of actors by some property they share (e.g. \'admitting officers\').
	get actor() {
		return this.__actor;
	}

	set actor(new_value) {
		const ConsentExceptActor = require('./ConsentExceptActor');
		this.__actor = Array.isArray(new_value)
			? new_value.map(val => new ConsentExceptActor(val))
			: [new ConsentExceptActor(new_value)];
	}

	// Actions controlled by this Exception.
	get action() {
		return this.__action;
	}

	set action(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__action = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// A set of security labels that define which resources are controlled by this exception. If more than one label is specified, all resources must have all the specified labels.
	get securityLabel() {
		return this.__securityLabel;
	}

	set securityLabel(new_value) {
		const Coding = require('./Coding');
		this.__securityLabel = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// The context of the activities a user is taking - why the user is accessing the data - that are controlled by this exception.
	get purpose() {
		return this.__purpose;
	}

	set purpose(new_value) {
		const Coding = require('./Coding');
		this.__purpose = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// The class of information covered by this exception. The type can be a FHIR resource type, a profile on a type, or a CDA document, or some other type that indicates what sort of information the consent relates to.
	get class() {
		return this.__class;
	}

	set class(new_value) {
		const Coding = require('./Coding');
		this.__class = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// If this code is found in an instance, then the exception applies.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const Coding = require('./Coding');
		this.__code = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// Clinical or Operational Relevant period of time that bounds the data controlled by this exception.
	get dataPeriod() {
		return this.__dataPeriod;
	}

	set dataPeriod(new_value) {
		const Period = require('./Period');
		this.__dataPeriod = new Period(new_value);
	}

	// The resources controlled by this exception, if specific resources are referenced.
	get data() {
		return this.__data;
	}

	set data(new_value) {
		const ConsentExceptData = require('./ConsentExceptData');
		this.__data = Array.isArray(new_value)
			? new_value.map(val => new ConsentExceptData(val))
			: [new ConsentExceptData(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type,
			period: this.__period && this.__period.toJSON(),
			actor: this.__actor && this.__actor.map(v => v.toJSON()),
			action: this.__action && this.__action.map(v => v.toJSON()),
			securityLabel: this.__securityLabel && this.__securityLabel.map(v => v.toJSON()),
			purpose: this.__purpose && this.__purpose.map(v => v.toJSON()),
			class: this.__class && this.__class.map(v => v.toJSON()),
			code: this.__code && this.__code.map(v => v.toJSON()),
			dataPeriod: this.__dataPeriod && this.__dataPeriod.toJSON(),
			data: this.__data && this.__data.map(v => v.toJSON()),
		});
	}
}

module.exports = ConsentExcept;
