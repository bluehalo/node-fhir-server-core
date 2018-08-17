const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');
const Period = require('./Period');
const Quantity = require('./Quantity');
const CodeableConcept = require('./CodeableConcept');

class Specimen_Collection extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Specimen_Collection';
	}

	// Person who collected the specimen.
	get collector () {
		return this._collector;
	}

	set collector ( new_value ) {
		this._collector = new Reference(new_value);
	}

	// Time when specimen was collected from subject - the physiologically relevant time.
	get collectedDateTime () {
		return this._collectedDateTime;
	}

	set collectedDateTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field collectedDateTime`);
		}
		this._collectedDateTime = new_value;
	}

	// Time when specimen was collected from subject - the physiologically relevant time.
	get collectedPeriod () {
		return this._collectedPeriod;
	}

	set collectedPeriod ( new_value ) {
		this._collectedPeriod = new Period(new_value);
	}

	// The quantity of specimen collected; for instance the volume of a blood sample, or the physical measurement of an anatomic pathology sample.
	get quantity () {
		return this._quantity;
	}

	set quantity ( new_value ) {
		this._quantity = new Quantity(new_value);
	}

	// A coded value specifying the technique that is used to perform the procedure.
	get method () {
		return this._method;
	}

	set method ( new_value ) {
		this._method = new CodeableConcept(new_value);
	}

	// Anatomical location from which the specimen was collected (if subject is a patient). This is the target site.  This element is not used for environmental specimens.
	get bodySite () {
		return this._bodySite;
	}

	set bodySite ( new_value ) {
		this._bodySite = new CodeableConcept(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			collector: this._collector && this._collector.toJSON(),
			collectedDateTime: this._collectedDateTime,
			collectedPeriod: this._collectedPeriod && this._collectedPeriod.toJSON(),
			quantity: this._quantity && this._quantity.toJSON(),
			method: this._method && this._method.toJSON(),
			bodySite: this._bodySite && this._bodySite.toJSON()
		});
	}

}

module.exports = Specimen_Collection;
