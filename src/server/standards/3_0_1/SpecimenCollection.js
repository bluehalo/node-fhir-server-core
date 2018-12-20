const BackboneElement = require('./BackboneElement');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class SpecimenCollection extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'SpecimenCollection';
		Object.assign(this, opt);
	}

	// This is a SpecimenCollection resource
	static get __resourceType() {
		return 'SpecimenCollection';
	}

	// Person who collected the specimen.
	get collector() {
		return this.__collector;
	}

	set collector(new_value) {
		const Reference = require('./Reference');
		this.__collector = new Reference(new_value);
	}

	// Time when specimen was collected from subject - the physiologically relevant time.
	get collectedDateTime() {
		return this.__collectedDateTime;
	}

	set collectedDateTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field collectedDateTime`);
		}
		this.__collectedDateTime = new_value;
	}

	// Time when specimen was collected from subject - the physiologically relevant time.
	get collectedPeriod() {
		return this.__collectedPeriod;
	}

	set collectedPeriod(new_value) {
		const Period = require('./Period');
		this.__collectedPeriod = new Period(new_value);
	}

	// The quantity of specimen collected; for instance the volume of a blood sample, or the physical measurement of an anatomic pathology sample.
	get quantity() {
		return this.__quantity;
	}

	set quantity(new_value) {
		const Quantity = require('./Quantity');
		this.__quantity = new Quantity(new_value);
	}

	// A coded value specifying the technique that is used to perform the procedure.
	get method() {
		return this.__method;
	}

	set method(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__method = new CodeableConcept(new_value);
	}

	// Anatomical location from which the specimen was collected (if subject is a patient). This is the target site.  This element is not used for environmental specimens.
	get bodySite() {
		return this.__bodySite;
	}

	set bodySite(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__bodySite = new CodeableConcept(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			collector: this.__collector && this.__collector.toJSON(),
			collectedDateTime: this.__collectedDateTime,
			collectedPeriod: this.__collectedPeriod && this.__collectedPeriod.toJSON(),
			quantity: this.__quantity && this.__quantity.toJSON(),
			method: this.__method && this.__method.toJSON(),
			bodySite: this.__bodySite && this.__bodySite.toJSON(),
		});
	}
}

module.exports = SpecimenCollection;
