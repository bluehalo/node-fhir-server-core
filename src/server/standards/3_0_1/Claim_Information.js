const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Period = require('./Period');
const Quantity = require('./Quantity');
const Attachment = require('./Attachment');
const Reference = require('./Reference');

class Claim_Information extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Claim_Information';
	}

	// Sequence of the information element which serves to provide a link.
	get sequence () {
		return this._sequence;
	}

	set sequence ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[1-9][0-9]*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field sequence`);
		}
		this._sequence = new_value;
	}

	// The general class of the information supplied: information; exception; accident, employment; onset, etc.
	get category () {
		return this._category;
	}

	set category ( new_value ) {
		this._category = new CodeableConcept(new_value);
	}

	// System and code pertaining to the specific information regarding special conditions relating to the setting, treatment or patient  for which care is sought which may influence the adjudication.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		this._code = new CodeableConcept(new_value);
	}

	// The date when or period to which this information refers.
	get timingDate () {
		return this._timingDate;
	}

	set timingDate ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field timingDate`);
		}
		this._timingDate = new_value;
	}

	// The date when or period to which this information refers.
	get timingPeriod () {
		return this._timingPeriod;
	}

	set timingPeriod ( new_value ) {
		this._timingPeriod = new Period(new_value);
	}

	// Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
	get valueString () {
		return this._valueString;
	}

	set valueString ( new_value ) {
		this._valueString = new_value;
	}

	// Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
	get valueQuantity () {
		return this._valueQuantity;
	}

	set valueQuantity ( new_value ) {
		this._valueQuantity = new Quantity(new_value);
	}

	// Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
	get valueAttachment () {
		return this._valueAttachment;
	}

	set valueAttachment ( new_value ) {
		this._valueAttachment = new Attachment(new_value);
	}

	// Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
	get valueReference () {
		return this._valueReference;
	}

	set valueReference ( new_value ) {
		this._valueReference = new Reference(new_value);
	}

	// For example, provides the reason for: the additional stay, or missing tooth or any other situation where a reason code is required in addition to the content.
	get reason () {
		return this._reason;
	}

	set reason ( new_value ) {
		this._reason = new CodeableConcept(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			sequence: this._sequence,
			category: this._category && this._category.toJSON(),
			code: this._code && this._code.toJSON(),
			timingDate: this._timingDate,
			timingPeriod: this._timingPeriod && this._timingPeriod.toJSON(),
			valueString: this._valueString,
			valueQuantity: this._valueQuantity && this._valueQuantity.toJSON(),
			valueAttachment: this._valueAttachment && this._valueAttachment.toJSON(),
			valueReference: this._valueReference && this._valueReference.toJSON(),
			reason: this._reason && this._reason.toJSON()
		});
	}

}

module.exports = Claim_Information;
