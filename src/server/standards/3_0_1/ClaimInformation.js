const BackboneElement = require('./BackboneElement');
const PositiveIntScalar = require('./scalars/PositiveInt.scalar');
const DateScalar = require('./scalars/Date.scalar');

class ClaimInformation extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ClaimInformation';
		Object.assign(this, opt);
	}

	// This is a ClaimInformation resource
	static get __resourceType() {
		return 'ClaimInformation';
	}

	// Sequence of the information element which serves to provide a link.
	get sequence() {
		return this.__sequence;
	}

	set sequence(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field sequence`);
		}
		this.__sequence = new_value;
	}

	// The general class of the information supplied: information; exception; accident, employment; onset, etc.
	get category() {
		return this.__category;
	}

	set category(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__category = new CodeableConcept(new_value);
	}

	// System and code pertaining to the specific information regarding special conditions relating to the setting, treatment or patient  for which care is sought which may influence the adjudication.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	// The date when or period to which this information refers.
	get timingDate() {
		return this.__timingDate;
	}

	set timingDate(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field timingDate`);
		}
		this.__timingDate = new_value;
	}

	// The date when or period to which this information refers.
	get timingPeriod() {
		return this.__timingPeriod;
	}

	set timingPeriod(new_value) {
		const Period = require('./Period');
		this.__timingPeriod = new Period(new_value);
	}

	// Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
	get valueString() {
		return this.__valueString;
	}

	set valueString(new_value) {
		this.__valueString = new_value;
	}

	// Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
	get valueQuantity() {
		return this.__valueQuantity;
	}

	set valueQuantity(new_value) {
		const Quantity = require('./Quantity');
		this.__valueQuantity = new Quantity(new_value);
	}

	// Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
	get valueAttachment() {
		return this.__valueAttachment;
	}

	set valueAttachment(new_value) {
		const Attachment = require('./Attachment');
		this.__valueAttachment = new Attachment(new_value);
	}

	// Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
	get valueReference() {
		return this.__valueReference;
	}

	set valueReference(new_value) {
		const Reference = require('./Reference');
		this.__valueReference = new Reference(new_value);
	}

	// For example, provides the reason for: the additional stay, or missing tooth or any other situation where a reason code is required in addition to the content.
	get reason() {
		return this.__reason;
	}

	set reason(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reason = new CodeableConcept(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			sequence: this.__sequence,
			category: this.__category && this.__category.toJSON(),
			code: this.__code && this.__code.toJSON(),
			timingDate: this.__timingDate,
			timingPeriod: this.__timingPeriod && this.__timingPeriod.toJSON(),
			valueString: this.__valueString,
			valueQuantity: this.__valueQuantity && this.__valueQuantity.toJSON(),
			valueAttachment: this.__valueAttachment && this.__valueAttachment.toJSON(),
			valueReference: this.__valueReference && this.__valueReference.toJSON(),
			reason: this.__reason && this.__reason.toJSON(),
		});
	}
}

module.exports = ClaimInformation;
