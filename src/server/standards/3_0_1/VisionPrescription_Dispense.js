const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Quantity = require('./Quantity');
const Annotation = require('./Annotation');

class VisionPrescription_Dispense extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'VisionPrescription_Dispense';
	}

	// Identifies the type of vision correction product which is required for the patient.
	get product () {
		return this._product;
	}

	set product ( new_value ) {
		this._product = new CodeableConcept(new_value);
	}

	// The eye for which the lens applies.
	get eye () {
		return this._eye;
	}

	set eye ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['right', 'left'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field eye`);
		}
		this._eye = new_value;
	}

	// Lens power measured in diopters (0.25 units).
	get sphere () {
		return this._sphere;
	}

	set sphere ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field sphere`);
		}
		this._sphere = new_value;
	}

	// Power adjustment for astigmatism measured in diopters (0.25 units).
	get cylinder () {
		return this._cylinder;
	}

	set cylinder ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field cylinder`);
		}
		this._cylinder = new_value;
	}

	// Adjustment for astigmatism measured in integer degrees.
	get axis () {
		return this._axis;
	}

	set axis ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field axis`);
		}
		this._axis = new_value;
	}

	// Amount of prism to compensate for eye alignment in fractional units.
	get prism () {
		return this._prism;
	}

	set prism ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field prism`);
		}
		this._prism = new_value;
	}

	// The relative base, or reference lens edge, for the prism.
	get base () {
		return this._base;
	}

	set base ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['up', 'down', 'in', 'out'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field base`);
		}
		this._base = new_value;
	}

	// Power adjustment for multifocal lenses measured in diopters (0.25 units).
	get add () {
		return this._add;
	}

	set add ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field add`);
		}
		this._add = new_value;
	}

	// Contact lens power measured in diopters (0.25 units).
	get power () {
		return this._power;
	}

	set power ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field power`);
		}
		this._power = new_value;
	}

	// Back curvature measured in millimeters.
	get backCurve () {
		return this._backCurve;
	}

	set backCurve ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field backCurve`);
		}
		this._backCurve = new_value;
	}

	// Contact lens diameter measured in millimeters.
	get diameter () {
		return this._diameter;
	}

	set diameter ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field diameter`);
		}
		this._diameter = new_value;
	}

	// The recommended maximum wear period for the lens.
	get duration () {
		return this._duration;
	}

	set duration ( new_value ) {
		this._duration = new Quantity(new_value);
	}

	// Special color or pattern.
	get color () {
		return this._color;
	}

	set color ( new_value ) {
		this._color = new_value;
	}

	// Brand recommendations or restrictions.
	get brand () {
		return this._brand;
	}

	set brand ( new_value ) {
		this._brand = new_value;
	}

	// Notes for special requirements such as coatings and lens materials.
	get note () {
		return this._note;
	}

	set note ( new_value ) {
		this._note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			product: this._product && this._product.toJSON(),
			eye: this._eye,
			sphere: this._sphere,
			cylinder: this._cylinder,
			axis: this._axis,
			prism: this._prism,
			base: this._base,
			add: this._add,
			power: this._power,
			backCurve: this._backCurve,
			diameter: this._diameter,
			duration: this._duration && this._duration.toJSON(),
			color: this._color,
			brand: this._brand,
			note: this._note && this._note.map(v => v.toJSON())
		});
	}

}

module.exports = VisionPrescription_Dispense;
