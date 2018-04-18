const DomainResource = require('../types/DomainResource');
const CodeableConcept = require('../types/CodeableConcept');
const Code = require('../types/Code');
const Reference = require('../types/Reference');
const Attachment = require('../types/Attachment');
const Ratio = require('../types/Ratio');

class Batch {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// lotNumber		0..1	string	Identifier assigned to batch
	set lotNumber(lotNumber) {
		this._lotNumber = lotNumber;
	}

	get lotNumber() {
		return this._lotNumber;
	}

	// expirationDate		0..1	dateTime	When batch will expire
	set expirationDate(expirationDate) {
		this._expirationDate = expirationDate;
	}

	get expirationDate() {
		return this._expirationDate;
	}

	toJSON() {
		return {
			lotNumber: this._lotNumber,
			expirationDate: this._expirationDate,
		};
	}
}

class Content {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// item[x]		1..1		The item in the package
	// itemCodeableConcept			CodeableConcept
	set itemCodeableConcept(itemCodeableConcept) {
		this._itemCodeableConcept = new CodeableConcept(itemCodeableConcept);
	}

	get itemCodeableConcept() {
		return this._itemCodeableConcept;
	}

	// itemReference			Reference
	set itemReference(itemReference) {
		this._itemReference = new Reference(itemReference);
	}

	get itemReference() {
		return this._itemReference;
	}

	// amount		0..1	SimpleQuantity	Quantity present in the package
	set amount(amount) {
		this._amount = amount;
	}

	get amount() {
		return this._amount;
	}

	toJSON() {
		return {
			itemCodeableConcept: this._itemCodeableConcept,
			itemReference: this._itemReference,
			amount: this._amount,
		};
	}
}

class MedicationPackage {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// container		0..1	CodeableConcept	E.g. box, vial, blister-pack
	// MedicationContainer (Example)
	set container(container) {
		this._container = new CodeableConcept(container);
	}

	get container() {
		return this._container;
	}

	// content		0..*	BackboneElement	What is in the package
	set content(content) {
		if (Array.isArray(content)) {
			this._content = content.map((i) => new Content(i));
		} else {
			this._content = [new Content(content)];
		}
	}

	get content() {
		return this._content;
	}

	// batch		0..*	BackboneElement	Identifies a single production run
	set batch(batch) {
		if (Array.isArray(batch)) {
			this._batch = batch.map((i) => new Batch(i));
		} else {
			this._batch = [new Batch(batch)];
		}
	}

	get batch() {
		return this._batch;
	}

	toJSON() {
		return {
			container: this._container,
			content: this._content,
			batch: this._batch,
		};
	}
}

class Ingredient {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// item[x]		1..1		The product contained
	// itemCodeableConcept			CodeableConcept
	set itemCodeableConcept(itemCodeableConcept) {
		this._itemCodeableConcept = new CodeableConcept(itemCodeableConcept);
	}

	get itemCodeableConcept() {
		return this._itemCodeableConcept;
	}

	// itemReference			Reference
	set itemReference(itemReference) {
		this._itemReference = new Reference(itemReference);
	}

	get itemReference() {
		return this._itemReference;
	}

	// isActive		0..1	boolean	Active ingredient indicator
	set isActive(isActive) {
		this._isActive = isActive;
	}

	get isActive() {
		return this._isActive;
	}

	// amount		0..1	Ratio	Quantity of ingredient present
	set amount(amount) {
		this._amount = new Ratio(amount);
	}

	get amount() {
		return this._amount;
	}

	toJSON() {
		return {
			itemCodeableConcept: this._itemCodeableConcept,
			itemReference: this._itemReference,
			isActive: this._isActive,
			amount: this._amount,
		};
	}
}

class Medication extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Medication';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// code	Σ	0..1	CodeableConcept	Codes that identify this medication
	// SNOMED CT Medication Codes (Example)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// status	Σ	0..1	code	active | inactive | entered-in-error
	// MedicationStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// isBrand	Σ	0..1	boolean	True if a brand
	set isBrand(isBrand) {
		this._isBrand = isBrand;
	}

	get isBrand() {
		return this._isBrand;
	}

	// isOverTheCounter	Σ	0..1	boolean	True if medication does not require a prescription
	set isOverTheCounter(isOverTheCounter) {
		this._isOverTheCounter = isOverTheCounter;
	}

	get isOverTheCounter() {
		return this._isOverTheCounter;
	}

	// manufacturer	Σ	0..1	Reference(Organization)	Manufacturer of the item
	set manufacturer(manufacturer) {
		this._manufacturer = new Reference(manufacturer);
	}

	get manufacturer() {
		return this._manufacturer;
	}

	// form		0..1	CodeableConcept	powder | tablets | capsule +
	// SNOMED CT Form Codes (Example)
	set form(form) {
		this._form = new CodeableConcept(form);
	}

	get form() {
		return this._form;
	}

	// ingredient		0..*	BackboneElement	Active or inactive ingredient
	set ingredient(ingredient) {
		if (Array.isArray(ingredient)) {
			this._ingredient = ingredient.map((i) => new Ingredient(i));
		} else {
			this._ingredient = [new Ingredient(ingredient)];
		}
	}

	get ingredient() {
		return this._ingredient;
	}

	// package		0..1	BackboneElement	Details about packaged medications
	set medicationPackage(medicationPackage) {
		this._medicationPackage = new MedicationPackage(medicationPackage);
	}

	get medicationPackage() {
		return this._medicationPackage;
	}

	// image		0..*	Attachment	Picture of the medication
	set image(image) {
		if (Array.isArray(image)) {
			this._image = image.map((i) => new Attachment(i));
		} else {
			this._image = [new Attachment(image)];
		}
	}

	get image() {
		return this._image;
	}

	toJSON() {
		const json = {
			code: this._code,
			status: this._status,
			isBrand: this._isBrand,
			isOverTheCounter: this._isOverTheCounter,
			manufacturer: this._manufacturer,
			form: this._form,
			ingredient: this._ingredient,
			medicationPackage: this._medicationPackage,
			image: this._image,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Medication = Medication;
module.exports.Ingredient = Ingredient;
module.exports.MedicationPackage = MedicationPackage;
module.exports.Content = Content;
module.exports.Batch = Batch;
