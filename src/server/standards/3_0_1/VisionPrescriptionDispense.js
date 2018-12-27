const BackboneElement = require('./BackboneElement');

class VisionPrescriptionDispense extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'VisionPrescriptionDispense';
		Object.assign(this, opt);
	}

	// This is a VisionPrescriptionDispense resource
	static get __resourceType() {
		return 'VisionPrescriptionDispense';
	}

	// Identifies the type of vision correction product which is required for the patient.
	get product() {
		return this.__product;
	}

	set product(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__product = new CodeableConcept(new_value);
	}

	// The eye for which the lens applies.
	get eye() {
		return this.__eye;
	}

	set eye(new_value) {
		this.__eye = new_value;
	}

	// Lens power measured in diopters (0.25 units).
	get sphere() {
		return this.__sphere;
	}

	set sphere(new_value) {
		this.__sphere = new_value;
	}

	// Power adjustment for astigmatism measured in diopters (0.25 units).
	get cylinder() {
		return this.__cylinder;
	}

	set cylinder(new_value) {
		this.__cylinder = new_value;
	}

	// Adjustment for astigmatism measured in integer degrees.
	get axis() {
		return this.__axis;
	}

	set axis(new_value) {
		this.__axis = new_value;
	}

	// Amount of prism to compensate for eye alignment in fractional units.
	get prism() {
		return this.__prism;
	}

	set prism(new_value) {
		this.__prism = new_value;
	}

	// The relative base, or reference lens edge, for the prism.
	get base() {
		return this.__base;
	}

	set base(new_value) {
		this.__base = new_value;
	}

	// Power adjustment for multifocal lenses measured in diopters (0.25 units).
	get add() {
		return this.__add;
	}

	set add(new_value) {
		this.__add = new_value;
	}

	// Contact lens power measured in diopters (0.25 units).
	get power() {
		return this.__power;
	}

	set power(new_value) {
		this.__power = new_value;
	}

	// Back curvature measured in millimeters.
	get backCurve() {
		return this.__backCurve;
	}

	set backCurve(new_value) {
		this.__backCurve = new_value;
	}

	// Contact lens diameter measured in millimeters.
	get diameter() {
		return this.__diameter;
	}

	set diameter(new_value) {
		this.__diameter = new_value;
	}

	// The recommended maximum wear period for the lens.
	get duration() {
		return this.__duration;
	}

	set duration(new_value) {
		const Quantity = require('./Quantity');
		this.__duration = new Quantity(new_value);
	}

	// Special color or pattern.
	get color() {
		return this.__color;
	}

	set color(new_value) {
		this.__color = new_value;
	}

	// Brand recommendations or restrictions.
	get brand() {
		return this.__brand;
	}

	set brand(new_value) {
		this.__brand = new_value;
	}

	// Notes for special requirements such as coatings and lens materials.
	get note() {
		return this.__note;
	}

	set note(new_value) {
		const Annotation = require('./Annotation');
		this.__note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			product: this.__product && this.__product.toJSON(),
			eye: this.__eye,
			sphere: this.__sphere,
			cylinder: this.__cylinder,
			axis: this.__axis,
			prism: this.__prism,
			base: this.__base,
			add: this.__add,
			power: this.__power,
			backCurve: this.__backCurve,
			diameter: this.__diameter,
			duration: this.__duration && this.__duration.toJSON(),
			color: this.__color,
			brand: this.__brand,
			note: this.__note && this.__note.map(v => v.toJSON()),
		});
	}
}

module.exports = VisionPrescriptionDispense;
