const BackboneElement = require('./BackboneElement');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');
const Quantity = require('./Quantity');
const Reference = require('./Reference');

class Specimen_Container extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Specimen_Container';
	}

	// Id for container. There may be multiple; a manufacturer's bar code, lab assigned identifier, etc. The container ID may differ from the specimen id in some circumstances.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// Textual description of the container.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// The type of container associated with the specimen (e.g. slide, aliquot, etc.).
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new CodeableConcept(new_value);
	}

	// The capacity (volume or other measure) the container may contain.
	get capacity () {
		return this._capacity;
	}

	set capacity ( new_value ) {
		this._capacity = new Quantity(new_value);
	}

	// The quantity of specimen in the container; may be volume, dimensions, or other appropriate measurements, depending on the specimen type.
	get specimenQuantity () {
		return this._specimenQuantity;
	}

	set specimenQuantity ( new_value ) {
		this._specimenQuantity = new Quantity(new_value);
	}

	// Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
	get additiveCodeableConcept () {
		return this._additiveCodeableConcept;
	}

	set additiveCodeableConcept ( new_value ) {
		this._additiveCodeableConcept = new CodeableConcept(new_value);
	}

	// Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
	get additiveReference () {
		return this._additiveReference;
	}

	set additiveReference ( new_value ) {
		this._additiveReference = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			identifier: this._identifier && this._identifier.map(v => v.toJSON()),
			description: this._description,
			type: this._type && this._type.toJSON(),
			capacity: this._capacity && this._capacity.toJSON(),
			specimenQuantity: this._specimenQuantity && this._specimenQuantity.toJSON(),
			additiveCodeableConcept: this._additiveCodeableConcept && this._additiveCodeableConcept.toJSON(),
			additiveReference: this._additiveReference && this._additiveReference.toJSON()
		});
	}

}

module.exports = Specimen_Container;
