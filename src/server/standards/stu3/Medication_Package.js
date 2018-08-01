const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Medication_Content = require('./Medication_Content');
const Medication_Batch = require('./Medication_Batch');

class Medication_Package extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Medication_Package';
	}

	// The kind of container that this package comes as.
	get container () {
		return this._container;
	}

	set container ( new_value ) {
		this._container = new CodeableConcept(new_value);
	}

	// A set of components that go to make up the described item.
	get content () {
		return this._content;
	}

	set content ( new_value ) {
		this._content = Array.isArray(new_value) ? new_value.map(val => new Medication_Content(val)) : [new Medication_Content(new_value)];
	}

	// Information about a group of medication produced or packaged from one production run.
	get batch () {
		return this._batch;
	}

	set batch ( new_value ) {
		this._batch = Array.isArray(new_value) ? new_value.map(val => new Medication_Batch(val)) : [new Medication_Batch(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			container: this._container,
			content: this._content,
			batch: this._batch
		});
	}

}

module.exports = Medication_Package;
