const BackboneElement = require('./BackboneElement');

class SpecimenContainer extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'SpecimenContainer';
		Object.assign(this, opt);
	}

	// This is a SpecimenContainer resource
	static get __resourceType() {
		return 'SpecimenContainer';
	}

	// Id for container. There may be multiple; a manufacturer\'s bar code, lab assigned identifier, etc. The container ID may differ from the specimen id in some circumstances.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// Textual description of the container.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// The type of container associated with the specimen (e.g. slide, aliquot, etc.).
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// The capacity (volume or other measure) the container may contain.
	get capacity() {
		return this.__capacity;
	}

	set capacity(new_value) {
		const Quantity = require('./Quantity');
		this.__capacity = new Quantity(new_value);
	}

	// The quantity of specimen in the container; may be volume, dimensions, or other appropriate measurements, depending on the specimen type.
	get specimenQuantity() {
		return this.__specimenQuantity;
	}

	set specimenQuantity(new_value) {
		const Quantity = require('./Quantity');
		this.__specimenQuantity = new Quantity(new_value);
	}

	// Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
	get additiveCodeableConcept() {
		return this.__additiveCodeableConcept;
	}

	set additiveCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__additiveCodeableConcept = new CodeableConcept(new_value);
	}

	// Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
	get additiveReference() {
		return this.__additiveReference;
	}

	set additiveReference(new_value) {
		const Reference = require('./Reference');
		this.__additiveReference = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			description: this.__description,
			type: this.__type && this.__type.toJSON(),
			capacity: this.__capacity && this.__capacity.toJSON(),
			specimenQuantity: this.__specimenQuantity && this.__specimenQuantity.toJSON(),
			additiveCodeableConcept: this.__additiveCodeableConcept && this.__additiveCodeableConcept.toJSON(),
			additiveReference: this.__additiveReference && this.__additiveReference.toJSON(),
		});
	}
}

module.exports = SpecimenContainer;
