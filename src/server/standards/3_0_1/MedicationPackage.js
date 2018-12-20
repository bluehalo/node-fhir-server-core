const BackboneElement = require('./BackboneElement');

class MedicationPackage extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MedicationPackage';
		Object.assign(this, opt);
	}

	// This is a MedicationPackage resource
	static get __resourceType() {
		return 'MedicationPackage';
	}

	// The kind of container that this package comes as.
	get container() {
		return this.__container;
	}

	set container(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__container = new CodeableConcept(new_value);
	}

	// A set of components that go to make up the described item.
	get content() {
		return this.__content;
	}

	set content(new_value) {
		const MedicationPackageContent = require('./MedicationPackageContent');
		this.__content = Array.isArray(new_value)
			? new_value.map(val => new MedicationPackageContent(val))
			: [new MedicationPackageContent(new_value)];
	}

	// Information about a group of medication produced or packaged from one production run.
	get batch() {
		return this.__batch;
	}

	set batch(new_value) {
		const MedicationPackageBatch = require('./MedicationPackageBatch');
		this.__batch = Array.isArray(new_value)
			? new_value.map(val => new MedicationPackageBatch(val))
			: [new MedicationPackageBatch(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			container: this.__container && this.__container.toJSON(),
			content: this.__content && this.__content.map(v => v.toJSON()),
			batch: this.__batch && this.__batch.map(v => v.toJSON()),
		});
	}
}

module.exports = MedicationPackage;
