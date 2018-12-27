const BackboneElement = require('./BackboneElement');

class CompositionEvent extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'CompositionEvent';
		Object.assign(this, opt);
	}

	// This is a CompositionEvent resource
	static get __resourceType() {
		return 'CompositionEvent';
	}

	// This list of codes represents the main clinical acts, such as a colonoscopy or an appendectomy, being documented. In some cases, the event is inherent in the typeCode, such as a \'History and Physical Report\' in which the procedure being documented is necessarily a \'History and Physical\' act.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// The period of time covered by the documentation. There is no assertion that the documentation is a complete representation for this period, only that it documents events during this time.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
	}

	// The description and/or reference of the event(s) being documented. For example, this could be used to document such a colonoscopy or an appendectomy.
	get detail() {
		return this.__detail;
	}

	set detail(new_value) {
		const Reference = require('./Reference');
		this.__detail = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			code: this.__code && this.__code.map(v => v.toJSON()),
			period: this.__period && this.__period.toJSON(),
			detail: this.__detail && this.__detail.map(v => v.toJSON()),
		});
	}
}

module.exports = CompositionEvent;
